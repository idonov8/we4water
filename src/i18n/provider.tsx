'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { I18N, type Lang } from './dict';

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'we4water_lang';
const DEFAULT_LANG: Lang = 'en';

function getNested(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function resolveInitialLang(): Lang {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get('lang');
    if ((fromQuery === 'en' || fromQuery === 'de') && I18N[fromQuery]) return fromQuery;
  } catch {
    // ignore
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if ((stored === 'en' || stored === 'de') && I18N[stored]) return stored;
  } catch {
    // ignore
  }

  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    setLang(resolveInitialLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const t = useCallback(
    (key: string) => {
      const pack = I18N[lang] || I18N[DEFAULT_LANG];
      const value = getNested(pack, key) ?? getNested(I18N[DEFAULT_LANG], key);
      return typeof value === 'string' ? value : key;
    },
    [lang]
  );

  const value = useMemo<I18nContextValue>(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider');
  return ctx;
}

