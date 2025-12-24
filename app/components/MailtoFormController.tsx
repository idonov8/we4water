'use client';

import { useEffect } from 'react';
import { useI18n } from '@/src/i18n/provider';

export function MailtoFormController() {
  const { t } = useI18n();

  useEffect(() => {
    function handleSubmit(event: Event) {
      const target = event.target;
      if (!(target instanceof HTMLFormElement)) return;
      if (!target.matches('[data-mailto-form]')) return;

      event.preventDefault();

      const data = new FormData(target);
      const name = String(data.get('name') || '');
      const email = String(data.get('email') || '');
      const topic = String(data.get('topic') || 'We4Water contact');
      const message = String(data.get('message') || '');
      const mailto = target.getAttribute('data-mailto') || 'riechelmann@we4water.com';

      const body = [`${t('contact.name')}: ${name}`, `${t('contact.email')}: ${email}`, '', 'Message:', message].join('\n');

      const href = `mailto:${mailto}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
    }

    document.addEventListener('submit', handleSubmit, true);
    return () => document.removeEventListener('submit', handleSubmit, true);
  }, [t]);

  return null;
}

