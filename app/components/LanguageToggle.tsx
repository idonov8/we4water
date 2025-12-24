'use client';

import { useI18n } from '@/src/i18n/provider';

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="lang-toggle" role="group" aria-label="Language toggle">
      <button
        type="button"
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
        data-lang="en"
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-btn ${lang === 'de' ? 'active' : ''}`}
        data-lang="de"
        aria-pressed={lang === 'de'}
        onClick={() => setLang('de')}
      >
        DE
      </button>
    </div>
  );
}

