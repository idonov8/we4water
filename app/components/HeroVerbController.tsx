'use client';

import { useEffect } from 'react';
import { useI18n } from '@/src/i18n/provider';

export function HeroVerbController() {
  const { t } = useI18n();

  useEffect(() => {
    const wordKeys = [
      'home.heroVerbCreate',
      'home.heroVerbBuild',
      'home.heroVerbCultivate',
      'home.heroVerbConnect'
    ];
    const words = wordKeys.map(t);
    const el = document.getElementById('verb');
    if (!el) return;
    const target = el;

    let index = 0;
    let animating = false;

    function setWord(next: string) {
      target.textContent = next;
    }

    function nextWord() {
      index = (index + 1) % words.length;
      return words[index];
    }

    function animateChange() {
      if (animating) return;
      animating = true;
      target.classList.remove('flip-in');
      target.classList.add('flip-out');

      const handleOut = () => {
        target.removeEventListener('animationend', handleOut);
        setWord(nextWord());
        target.classList.remove('flip-out');
        target.classList.add('flip-in');

        const handleIn = () => {
          target.removeEventListener('animationend', handleIn);
          animating = false;
        };
        target.addEventListener('animationend', handleIn, { once: true });
      };
      target.addEventListener('animationend', handleOut, { once: true });
    }

    // Ensure the initial word matches the active language (e.g. after language toggle).
    setWord(words[0] ?? '');

    const id = window.setInterval(animateChange, 1800);
    return () => window.clearInterval(id);
  }, [t]);

  return null;
}

