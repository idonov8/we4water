'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function LightboxController() {
  const pathname = usePathname();

  useEffect(() => {
    const lightboxEl = document.getElementById('lightbox');
    if (!(lightboxEl instanceof HTMLElement)) return;
    const lightbox = lightboxEl;
    const imgEl = lightbox.querySelector('img');
    if (!(imgEl instanceof HTMLImageElement)) return;
    const img = imgEl;
    const closeBtn = lightbox.querySelector<HTMLButtonElement>('[data-close]');
    const prevBtn = lightbox.querySelector<HTMLButtonElement>('[data-prev]');
    const nextBtn = lightbox.querySelector<HTMLButtonElement>('[data-next]');
    const captionEl = lightbox.querySelector<HTMLElement>('[data-caption]');

    lightbox.tabIndex = -1;

    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('[data-gallery-img]'));
    let currentIndex = -1;
    let lastFocused: HTMLElement | null = null;
    const hasMultiple = imgs.length > 1;

    [prevBtn, nextBtn].forEach((btn) => {
      if (!btn) return;
      btn.hidden = !hasMultiple;
    });

    function isOpen() {
      return lightbox.classList.contains('open');
    }

    function showAt(index: number) {
      if (imgs.length === 0) return;
      currentIndex = (index + imgs.length) % imgs.length;
      const target = imgs[currentIndex];
      img.setAttribute('src', target.src);
      img.setAttribute('alt', target.alt || '');
      if (captionEl) captionEl.textContent = target.alt || '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      lightbox.focus({ preventScroll: true });
    }

    function openFrom(target: HTMLImageElement) {
      lastFocused = (document.activeElement as HTMLElement) || null;
      const index = imgs.indexOf(target);
      if (index === -1) return;
      showAt(index);
    }

    function close() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      img.setAttribute('src', '');
      if (captionEl) captionEl.textContent = '';
      currentIndex = -1;
      if (lastFocused) {
        lastFocused.focus({ preventScroll: true });
        lastFocused = null;
      }
    }

    function showNext() {
      if (!hasMultiple || currentIndex === -1) return;
      showAt(currentIndex + 1);
    }

    function showPrev() {
      if (!hasMultiple || currentIndex === -1) return;
      showAt(currentIndex - 1);
    }

    function handleImgClick(e: Event) {
      const target = e.currentTarget as HTMLImageElement;
      openFrom(target);
    }

    function handleImgKeydown(e: KeyboardEvent) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      const target = e.currentTarget as HTMLImageElement;
      openFrom(target);
    }

    imgs.forEach((galleryImg) => {
      galleryImg.tabIndex = 0;
      galleryImg.setAttribute('role', 'button');
      galleryImg.addEventListener('click', handleImgClick);
      galleryImg.addEventListener('keydown', handleImgKeydown);
    });

    function handleOverlayClick(e: MouseEvent) {
      if (e.target === lightbox) close();
    }

    function handleDocKeydown(e: KeyboardEvent) {
      if (!isOpen()) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showPrev();
      }
    }

    closeBtn?.addEventListener('click', close);
    prevBtn?.addEventListener('click', showPrev);
    nextBtn?.addEventListener('click', showNext);
    lightbox.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleDocKeydown);

    return () => {
      imgs.forEach((galleryImg) => {
        galleryImg.removeEventListener('click', handleImgClick);
        galleryImg.removeEventListener('keydown', handleImgKeydown);
      });
      closeBtn?.removeEventListener('click', close);
      prevBtn?.removeEventListener('click', showPrev);
      nextBtn?.removeEventListener('click', showNext);
      lightbox.removeEventListener('click', handleOverlayClick);
      document.removeEventListener('keydown', handleDocKeydown);
    };
  }, [pathname]);

  return null;
}

