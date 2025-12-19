'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function BodyClassController() {
  const pathname = usePathname() || '/';

  useEffect(() => {
    const isMartin = pathname === '/martin' || pathname === '/martin/';
    document.body.classList.toggle('martin-page', isMartin);
  }, [pathname]);

  return null;
}

