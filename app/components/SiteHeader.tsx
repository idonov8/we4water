import Link from 'next/link';
import { LanguageToggle } from './LanguageToggle';
import { NavLinks } from './NavLinks';

export function SiteHeader() {
  return (
    <header className="site-header surface">
      <div className="brand">
        <Link href="/">We4Water</Link>
      </div>
      <NavLinks />
      <LanguageToggle />
    </header>
  );
}

