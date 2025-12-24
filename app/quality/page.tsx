import Link from 'next/link';
import { Trans } from '@/app/components/Trans';

export default function QualityPage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1>
            <Trans k="quality.heroTitle" />
          </h1>
          <p>
            <Trans k="quality.heroLead" />
          </p>
        </div>
      </section>

      <section className="section surface">
        <h2>
          <Trans k="quality.projectsTitle" />
        </h2>
        <ul className="list">
          <li>
            <Trans k="quality.projectSpree" />
          </li>
          <li>
            <Trans k="quality.projectDanube" />
          </li>
          <li>
            <Trans k="quality.projectCitizen" />
          </li>
        </ul>
      </section>

      <section className="section surface two-col">
        <div>
          <h2>
            <Trans k="quality.visualsTitle" />
          </h2>
          <p>
            <Trans k="quality.visualsCopy" />
          </p>
          <p className="note">
            <Trans k="quality.dataNote" />
          </p>
          <div className="gallery-rows">
            <img
              src="/assets/Water_quality/Esperantos%20water%20quality.jpg"
              alt="Esperantos water quality dashboard"
              loading="lazy"
              data-gallery-img
            />
            <img
              src="/assets/Water_quality/water%20quality%201.jpg"
              alt="Water sampling and sensors"
              loading="lazy"
              data-gallery-img
            />
            <img
              src="/assets/Water_quality/water%20quality%202.jpg"
              alt="River monitoring instruments"
              loading="lazy"
              data-gallery-img
            />
          </div>
        </div>
        <div>
          <h2>
            <Trans k="quality.partnersTitle" />
          </h2>
          <p>
            <Trans k="quality.partnersList" />
          </p>
          <div className="cta-stack">
            <Link className="btn" href="/join/">
              <Trans k="quality.cta" />
            </Link>
            <Link className="btn secondary" href="/contact/">
              <Trans k="common.contact" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

