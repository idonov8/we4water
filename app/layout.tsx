import type { Metadata } from 'next';
import '../styles.css';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { LanguageProvider } from '@/src/i18n/provider';
import { BubblesController } from './components/BubblesController';
import { HeroVerbController } from './components/HeroVerbController';
import { LightboxController } from './components/LightboxController';
import { BodyClassController } from './components/BodyClassController';

export const metadata: Metadata = {
  title: 'We4Water',
  description: 'We4Water – projects at the intersection of technology, nature, and society.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/liquify-2" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/wasser" rel="stylesheet" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E%F0%9F%8C%8A%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body>
        <LanguageProvider>
          <BodyClassController />
          <HeroVerbController />
          <BubblesController />
          <LightboxController />

          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <div className="site-shell">
          <div id="bubbles-container" />
            <SiteHeader />
            <main id="main">{children}</main>
            <SiteFooter />
          </div>
          <div
            className="lightbox"
            id="lightbox"
            aria-hidden="true"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <div className="lightbox-frame">
              <button className="lightbox-close" type="button" aria-label="Close lightbox" data-close>
                ×
              </button>
              <button className="lightbox-arrow prev" type="button" aria-label="Previous image" data-prev>
                ‹
              </button>
              <img alt="" />
              <button className="lightbox-arrow next" type="button" aria-label="Next image" data-next>
                ›
              </button>
              <p className="lightbox-caption" data-caption />
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

