import Link from 'next/link';
import { Trans } from './Trans';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="muted">
        <Trans k="footer.rights" />
      </div>
      <div className="nav-links" aria-label="Footer">
        <a href="mailto:riechelmann@we4water.com">
          <Trans k="common.contact" />
        </a>
        <Link href="/contact/">
          <Trans k="footer.imprint" />
        </Link>
        <Link href="/contact/#legal">
          <Trans k="footer.privacy" />
        </Link>
      </div>
    </footer>
  );
}

