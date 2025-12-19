'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/src/i18n/provider';

type NavItem = {
  href: string;
  key: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: '/quality/', key: 'nav.quality' },
  { href: '/crafts/', key: 'nav.crafts' },
  { href: '/treatment/', key: 'nav.treatment' },
  { href: '/culture/', key: 'nav.culture' },
  { href: '/about/', key: 'nav.about' },
  { href: '/join/', key: 'nav.join' },
  { href: '/contact/', key: 'nav.contact' }
];

function normalizePath(path: string) {
  if (path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

export function NavLinks() {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname || '/');
  const { t } = useI18n();

  return (
    <nav className="nav-links" aria-label="Primary">
      {NAV_ITEMS.map((item) => {
        const itemPath = normalizePath(item.href);
        const isActive = itemPath !== '/' && currentPath.startsWith(itemPath);

        return (
          <Link key={item.href} href={item.href} className={isActive ? 'active' : undefined}>
            {t(item.key)}
          </Link>
        );
      })}
    </nav>
  );
}

