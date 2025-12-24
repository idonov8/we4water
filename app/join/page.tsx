import Link from 'next/link';
import { Trans } from '@/app/components/Trans';

export default function JoinPage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1>
            <Trans k="join.heroTitle" />
          </h1>
          <p>
            <Trans k="join.heroLead" />
          </p>
        </div>
      </section>

      <section className="section surface two-col">
        <div>
          <h2>
            <Trans k="join.partnerTitle" />
          </h2>
          <p>
            <Trans k="join.partnerCopy" />
          </p>
          <div className="cta-stack">
            <a className="btn secondary" href="https://www.greentech.berlin" target="_blank" rel="noopener noreferrer">
              greentech.berlin
            </a>
            <Link className="btn" href="/contact/">
              <Trans k="common.contact" />
            </Link>
          </div>
        </div>
        <div>
          <h2>
            <Trans k="join.volunteerTitle" />
          </h2>
          <p>
            <Trans k="join.volunteerCopy" />
          </p>
          <div className="cta-stack">
            <a
              className="btn"
              href="https://www.workaway.info/en/host/6274235224e6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Trans k="join.workaway" />
            </a>
            <Link className="btn secondary" href="/crafts/">
              <Trans k="common.ctaBoard" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section surface">
        <h2>
          <Trans k="join.newsletterTitle" />
        </h2>
        <p>
          <Trans k="join.newsletterCopy" />
        </p>
        <div className="cta-stack">
          <a
            className="btn secondary"
            href="mailto:riechelmann@we4water.com?subject=Join%20We4Water&body=Hi%20team%2C%0A%0AI%E2%80%99d%20like%20to%20stay%20updated%20on%20projects.%0A%0AThank%20you!"
          >
            <Trans k="common.contact" />
          </a>
        </div>
      </section>
    </>
  );
}

