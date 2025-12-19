'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function LightboxController() {
  const pathname = usePathname();

  useEffect(() => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    const box = lightbox;

    const imgEl = box.querySelector('img');
    const closeBtn = box.querySelector('button');
    if (!imgEl) return;
    const img = imgEl;

    function open(src: string, alt?: string) {
      img.setAttribute('src', src);
      img.setAttribute('alt', alt || '');
      box.classList.add('open');
      box.setAttribute('aria-hidden', 'false');
    }

    function close() {
      box.classList.remove('open');
      box.setAttribute('aria-hidden', 'true');
      img.setAttribute('src', '');
    }

    function handleImgClick(e: Event) {
      const target = e.currentTarget as HTMLImageElement;
      open(target.src, target.alt);
    }

    function handleImgKeydown(e: KeyboardEvent) {
      if (e.key !== 'Enter') return;
      const target = e.currentTarget as HTMLImageElement;
      open(target.src, target.alt);
    }

    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('[data-gallery-img]'));
    imgs.forEach((img) => {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.addEventListener('click', handleImgClick);
      img.addEventListener('keydown', handleImgKeydown);
    });

    function handleOverlayClick(e: MouseEvent) {
      if (e.target === box) close();
    }

    function handleDocKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape' && box.classList.contains('open')) close();
    }

    closeBtn?.addEventListener('click', close);
    box.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleDocKeydown);

    return () => {
      imgs.forEach((img) => {
        img.removeEventListener('click', handleImgClick);
        img.removeEventListener('keydown', handleImgKeydown);
      });
      closeBtn?.removeEventListener('click', close);
      box.removeEventListener('click', handleOverlayClick);
      document.removeEventListener('keydown', handleDocKeydown);
    };
  }, [pathname]);

  return null;
}

