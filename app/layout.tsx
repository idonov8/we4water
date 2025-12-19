import type { Metadata } from 'next';
import '../styles.css';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { LanguageProvider } from '@/src/i18n/provider';
import { BubblesController } from './components/BubblesController';
import { HeroVerbController } from './components/HeroVerbController';
import { LightboxController } from './components/LightboxController';
import { MailtoFormController } from './components/MailtoFormController';
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
          <MailtoFormController />

          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <div id="bubbles-container" />
          <div className="site-shell">
            <SiteHeader />
            <main id="main">{children}</main>
            <SiteFooter />
          </div>
          <div className="lightbox" id="lightbox" aria-hidden="true">
            <button type="button" aria-label="Close lightbox">
              Close
            </button>
            <img alt="" />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

