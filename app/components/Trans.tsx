'use client';

import type { ElementType } from 'react';
import { useI18n } from '@/src/i18n/provider';

export function Trans({
  k,
  as,
  className,
  id
}: {
  k: string;
  as?: ElementType;
  className?: string;
  id?: string;
}) {
  const { t } = useI18n();
  const Comp = (as || 'span') as ElementType;
  return (
    <Comp className={className} id={id}>
      {t(k)}
    </Comp>
  );
}

