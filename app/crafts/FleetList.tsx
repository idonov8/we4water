'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Trans } from '@/app/components/Trans';

export type FleetItem = {
  href: string;
  name: string;
  lengthM: number;
  ariaLabel: string;
  descKey: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function makeBoatAscii({
  title,
  ratio,
  maxInner
}: {
  title: string;
  ratio: number;
  maxInner: number;
}) {
  // Scale hull length by ratio (boat size), but never smaller than the title.
  const minInner = Math.min(14, maxInner);
  const clamped = clamp(ratio, 0, 1);
  const titleWithPadding = ` ${title} `;

  const scaledInner = Math.round(minInner + (maxInner - minInner) * clamped);
  const innerWidth = Math.max(scaledInner, titleWithPadding.length + 2);

  const base = Array.from({ length: innerWidth }, () => '_');
  const start = Math.floor((innerWidth - titleWithPadding.length) / 2);
  for (let i = 0; i < titleWithPadding.length; i++) base[start + i] = titleWithPadding[i];

  const mastIndent = 4;
  const lineWidth = innerWidth + 6; // __/ + inner + \__ ~= +6
  const padTo = (s: string) => s + ' '.repeat(Math.max(0, lineWidth - s.length));

  const mast1 = padTo(' '.repeat(mastIndent) + '|\\');
  const mast2 = padTo(' '.repeat(mastIndent) + '| \\');
  const hullTop = `__/` + base.join('') + `\\__`;
  const hullBottom = `\\_` + '_'.repeat(innerWidth + 2) + `_/`;
  const water = ' '.repeat(2) + '~'.repeat(innerWidth + 8);

  const ascii = [mast1, mast2, hullTop, hullBottom, water].join('\n');
  // Widest line is the water line: 2 spaces + (innerWidth + 8) tildes.
  const widthCh = innerWidth + 10;
  return { ascii, widthCh };
}

export function FleetList({ fleet }: { fleet: FleetItem[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const probeRef = useRef<HTMLSpanElement | null>(null);

  // "maxLen" here is the maximum ASCII inner hull width, derived from page/viewport width.
  const [maxLen, setMaxLen] = useState<number>(34);

  const maxMeters = useMemo(() => Math.max(...fleet.map((f) => f.lengthM)), [fleet]);
  const byName = useMemo(() => new Map(fleet.map((f) => [f.name, f])), [fleet]);

  useEffect(() => {
    const container = containerRef.current;
    const probe = probeRef.current;
    if (!container || !probe) return;

    let raf = 0;
    const measure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // Measure against the page/viewport width so cards can be fit-content and layouts can be flexible.
        const pageWidthPx = document.documentElement.clientWidth || window.innerWidth;
        const probeWidthPx = probe.getBoundingClientRect().width; // 10 chars
        const chPx = probeWidthPx > 0 ? probeWidthPx / 10 : 8;

        // Optional tuning knob: scale the effective width via CSS custom property on `.fleet-list`.
        // Example: `.fleet-list { --fleet-boat-maxvw: 0.62; }`
        const raw = getComputedStyle(container).getPropertyValue('--fleet-boat-maxvw').trim();
        const factor = clamp(raw ? Number.parseFloat(raw) : 1, 0.2, 1);
        const effectiveWidthPx = pageWidthPx * (Number.isFinite(factor) ? factor : 1);

        // Total ASCII line is roughly inner + 6 chars; give a couple extra chars of safety.
        const maxChars = Math.floor(effectiveWidthPx / chPx);
        const computedMaxInner = clamp(maxChars - 10, 12, 80);
        setMaxLen(computedMaxInner);
      });
    };

    const ro = new ResizeObserver(measure);
    ro.observe(container);
    // Also react to viewport changes.
    window.addEventListener('resize', measure);
    measure();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
      ro.disconnect();
    };
  }, []);

  const renderItem = (item: FleetItem) => {
    const boat = makeBoatAscii({ title: item.name, ratio: item.lengthM / maxMeters, maxInner: maxLen });
    return (
      <Link
        key={item.href}
        className="fleet-item"
        href={item.href}
        role="listitem"
        aria-label={item.ariaLabel}
        style={{ ['--boat-ch' as any]: boat.widthCh }}
      >
        <pre className="fleet-boat" aria-hidden="true">
          {boat.ascii}
        </pre>
        <div className="fleet-desc">
          <Trans k={item.descKey} />
        </div>
      </Link>
    );
  };

  const desktopLayout: Array<{ type: 'item'; name: string } | { type: 'break'; key: string }> = [
    { type: 'item', name: 'Hanseat' },
    { type: 'break', key: 'b1' },
    { type: 'item', name: 'Elisabeth' },
    { type: 'item', name: 'Pontoon' },
    { type: 'break', key: 'b2' },
    { type: 'item', name: 'Martin' },
    { type: 'item', name: 'Esperantos' }
  ];

  return (
    <div ref={containerRef} className="fleet-sizing">
      {/* width probe to estimate monospace character width */}
      <span ref={probeRef} className="fleet-probe" aria-hidden="true">
        MMMMMMMMMM
      </span>

      <div className="fleet-list fleet-list--desktop" role="list" aria-label="Fleet">
        {desktopLayout.map((entry) => {
          if (entry.type === 'break') return <div key={entry.key} className="fleet-break" aria-hidden="true" />;
          const item = byName.get(entry.name);
          return item ? renderItem(item) : null;
        })}
      </div>

      <div className="fleet-list fleet-list--mobile" role="list" aria-label="Fleet">
        {fleet.map((item) => renderItem(item))}
      </div>
    </div>
  );
}


