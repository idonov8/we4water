import Link from 'next/link';
import { Trans } from './Trans';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="muted">
        <Trans k="footer.rights" />
      </div>
      <div className="nav-links" aria-label="Footer">
        <Link href="/contact/">
          <Trans k="common.contact" />
        </Link>
      </div>
    </footer>
  );
}

