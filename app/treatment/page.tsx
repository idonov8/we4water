import Link from 'next/link';
import { Trans } from '@/app/components/Trans';

export default function TreatmentPage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1>
            <Trans k="treatment.heroTitle" />
          </h1>
          <p>
            <Trans k="treatment.heroLead" />
          </p>
        </div>
      </section>

      <section className="section surface">
        <h2>
          <Trans k="treatment.portfolioTitle" />
        </h2>
        <ul className="list">
          <li>
            <Trans k="treatment.wetlands" />
          </li>
          <li>
            <Trans k="treatment.filters" />
          </li>
          <li>
            <Trans k="treatment.fixedBed" />
          </li>
          <li>
            <Trans k="treatment.cooling" />
          </li>
          <li>
            <Trans k="treatment.forestry" />
          </li>
        </ul>
      </section>

      <section className="section surface two-col">
        <div>
          <h2>
            <Trans k="treatment.partnersTitle" />
          </h2>
          <p>
            <Trans k="treatment.partnersList" />
          </p>
        </div>
        <div>
          <div className="gallery-rows">
            <img
              src="/assets/Water_quality/water%20quality%202.jpg"
              alt="Water treatment instruments"
              loading="lazy"
              data-gallery-img
            />
            <div className="placeholder thumb">Image coming soon</div>
            <div className="placeholder thumb">Image coming soon</div>
          </div>
          <div className="cta-stack">
            <Link className="btn" href="/join/">
              <Trans k="treatment.cta" />
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

