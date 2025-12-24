import Link from 'next/link';
import { Trans } from '@/app/components/Trans';

export default function CulturePage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1>
            <Trans k="culture.heroTitle" />
          </h1>
          <p>
            <Trans k="culture.heroLead" />
          </p>
        </div>
      </section>

      <section className="section surface">
        <h2>
          <Trans k="culture.portfolioTitle" />
        </h2>
        <ul className="list">
          <li>
            <Trans k="culture.theater" />
          </li>
          <li>
            <Trans k="culture.circus" />
          </li>
          <li>
            <Trans k="culture.concerts" />
          </li>
          <li>
            <Trans k="culture.discussions" />
          </li>
        </ul>
      </section>

      <section className="section surface two-col">
        <div>
          <h2>
            <Trans k="culture.storiesTitle" />
          </h2>
          <p>
            <Trans k="culture.storiesCopy" />
          </p>
        </div>
        <div>
          <h2>
            <Trans k="culture.partnersTitle" />
          </h2>
          <p>
            <Trans k="culture.partnersList" />
          </p>
          <div className="cta-stack">
            <Link className="btn" href="/join/">
              <Trans k="culture.cta" />
            </Link>
            <Link className="btn secondary" href="/contact/">
              <Trans k="common.contact" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section surface">
        <h2>
          <Trans k="common.gallery" />
        </h2>
        <div className="gallery-rows">
          <img
            src="/assets/Water_culture/floating%20concert%20esperantos.jpg"
            alt="Floating concert on Esperantos"
            loading="lazy"
            data-gallery-img
          />
          <img
            src="/assets/Water_culture/floating%20theatre%201.jpg"
            alt="Floating theatre performance"
            loading="lazy"
            data-gallery-img
          />
          <img
            src="/assets/Water_culture/concert%20on%20Hanseat.jpg"
            alt="Concert on the Hanseat"
            loading="lazy"
            data-gallery-img
          />
          <img
            src="/assets/Water_culture/sunset%20floating%20concert%204.jpg"
            alt="Sunset floating concert"
            loading="lazy"
            data-gallery-img
          />
          <img
            src="/assets/Water_culture/esperantos%20water%20culture%20no%20title.jpg"
            alt="Esperantos water culture image"
            loading="lazy"
            data-gallery-img
          />
          <img
            src="/assets/Water_culture/floating%20concert%206%20esperantos.jpg"
            alt="Concert with audience on deck"
            loading="lazy"
            data-gallery-img
          />
        </div>
      </section>
    </>
  );
}

