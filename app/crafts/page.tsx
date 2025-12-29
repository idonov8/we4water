import Link from 'next/link';
import { Trans } from '@/app/components/Trans';

export default function CraftsPage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1>
            <Trans k="crafts.heroTitle" />
          </h1>

          <h2>
            <Trans k="crafts.heroSubtitle" />
          </h2>

          <p>
            <Trans k="crafts.heroLead" />
          </p>

          <p>
            <Trans k="crafts.heroDetail" />
          </p>
        </div>
      </section>


      <section className="section surface">
        <h2>
          <Trans k="crafts.vesselsTitle" />
        </h2>
        <div className="cards-grid">
          <Link className="card" href="/crafts/hanseat/">
            <img
              className="thumb"
              src="/assets/Hanseat/Hanseat%20in%20warehouse%205.jpg"
              alt="Hanseat restoration work"
              loading="lazy"
            />
            <strong>
              <Trans k="crafts.hanseatTitle" />
            </strong>
            <p>
              <Trans k="crafts.hanseatDesc" />
            </p>
          </Link>

          <Link className="card" href="/crafts/esperantos/">
            <img className="thumb" src="/assets/Esperantos/in%20the%20air.jpg" alt="Esperantos sailing catamaran" loading="lazy" />
            <strong>
              <Trans k="crafts.esperantosTitle" />
            </strong>
            <p>
              <Trans k="crafts.esperantosDesc" />
            </p>
          </Link>

          <Link className="card" href="/crafts/elisabeth/">
            <div className="thumb placeholder">Image coming soon</div>
            <strong>
              <Trans k="crafts.elisabethTitle" />
            </strong>
            <p>
              <Trans k="crafts.elisabethDesc" />
            </p>
          </Link>

          <Link className="card" href="/crafts/martin/">
            <div className="thumb placeholder">Image coming soon</div>
            <strong>
              <Trans k="crafts.martinTitle" />
            </strong>
            <p>
              <Trans k="crafts.martinDesc" />
            </p>
          </Link>

          <Link className="card" href="/crafts/pontoon/">
            <div className="thumb placeholder">Image coming soon</div>
            <strong>
              <Trans k="crafts.pontoonTitle" />
            </strong>
            <p>
              <Trans k="crafts.pontoonDesc" />
            </p>
          </Link>
        </div>
      </section>

      <section className="section surface two-col">
        <div>
          <h2>
            <Trans k="crafts.peopleTitle" />
          </h2>
          <p>
            <Trans k="crafts.peopleCopy" />
          </p>
        </div>
        <div className="cta-stack">
          <Link className="btn" href="/join/">
            <Trans k="common.volunteer" />
          </Link>
          <Link className="btn secondary" href="/contact/">
            <Trans k="common.contact" />
          </Link>
        </div>
      </section>
    </>
  );
}

