'use client';

import { useEffect } from 'react';

export function BubblesController() {
  useEffect(() => {
    const bubblesContainer = document.getElementById('bubbles-container');
    if (!bubblesContainer) return;
    const container = bubblesContainer;

    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

    let cancelled = false;
    const timeouts: number[] = [];

    function createBubble() {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');

      const size = Math.random() * 50 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      // Start bubbles across the whole viewport (0%..100% from bottom)
      bubble.style.bottom = `${Math.random() * 100}%`;

      const duration = 6 + size / 10;
      bubble.style.animationDuration = `${duration}s`;

      const drift = (Math.random() - 0.5) * 100;
      bubble.style.setProperty('--drift', `${drift}px`);

      bubble.style.animationDelay = `${Math.random() * 2}s`;

      container.appendChild(bubble);

      timeouts.push(
        window.setTimeout(() => {
          bubble.remove();
        }, (duration + 2) * 1000)
      );
    }

    function tick() {
      if (cancelled) return;
      createBubble();
      const nextInterval = Math.random() * 500 + 300;
      timeouts.push(window.setTimeout(tick, nextInterval));
    }

    timeouts.push(window.setTimeout(tick, 500));

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return null;
}

