import Link from 'next/link';
import { Trans } from '@/app/components/Trans';

export default function HomePage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1 className="title-flex">
            <Trans k="home.heroWe" /> <span id="verb">Create</span> 
            <br/><Trans k="home.heroFor" />
          </h1>
          <p className="subtitle">
            <Trans k="home.heroSubtitle" />
          </p>
          <p>
            <Trans k="home.heroLead1" />
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/join/">
              <Trans k="home.ctaJoin" />
            </Link>
            <Link className="btn secondary" href="/contact/#form">
              <Trans k="home.ctaBoard" />
            </Link>
            <a className="btn secondary" href="https://badberlin.info" target="_blank" rel="noopener noreferrer">
              <Trans k="home.ctaSwim" />
            </a>
          </div>
        </div>
      </section>

      <section className="section surface">
        <h2>
          <Trans k="home.cardsTitle" />
        </h2>
        <div className="cards-grid">
          <Link className="card" href="/quality/">
            <img
              className="thumb"
              src="/assets/Water_quality/water%20quality%201.jpg"
              alt="Monitoring water quality in the Spree"
              loading="lazy"
            />
            <strong>
              <Trans k="home.cardQualityTitle" />
            </strong>
            <p>
              <Trans k="home.cardQualityDesc" />
            </p>
          </Link>

          <Link className="card" href="/crafts/">
            <img
              className="thumb"
              src="/assets/Hanseat/Hanseat%20in%20warehouse.jpg"
              alt="Restoring the historic vessel Hanseat"
              loading="lazy"
            />
            <strong>
              <Trans k="home.cardCraftsTitle" />
            </strong>
            <p>
              <Trans k="home.cardCraftsDesc" />
            </p>
          </Link>

          <Link className="card" href="/treatment/">
            <img
              className="thumb"
              src="/assets/Water_quality/Esperantos%20water%20quality.jpg"
              alt="Sensors and instruments for water treatment research"
              loading="lazy"
            />
            <strong>
              <Trans k="home.cardTreatmentTitle" />
            </strong>
            <p>
              <Trans k="home.cardTreatmentDesc" />
            </p>
          </Link>

          <Link className="card" href="/culture/">
            <img
              className="thumb"
              src="/assets/Water_culture/floating%20concert%20esperantos.jpg"
              alt="Floating concert on Esperantos"
              loading="lazy"
            />
            <strong>
              <Trans k="home.cardCultureTitle" />
            </strong>
            <p>
              <Trans k="home.cardCultureDesc" />
            </p>
          </Link>
        </div>
      </section>

      <section className="section surface">
        <h2>
          <Trans k="home.ctaTitle" />
        </h2>
        <p className="muted">
          <Trans k="home.heroLead1" />
        </p>
        <div className="cta-stack">
          <Link className="btn" href="/join/">
            <Trans k="common.ctaJoin" />
          </Link>
          <Link className="btn secondary" href="/contact/">
            <Trans k="common.contact" />
          </Link>
          <Link className="btn secondary" href="/about/">
            <Trans k="common.learnMore" />
          </Link>
        </div>
      </section>
    </>
  );
}

