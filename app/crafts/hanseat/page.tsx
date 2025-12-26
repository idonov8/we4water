import Link from 'next/link';

export default function HanseatPage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1>Hanseat</h1>
          <p className="subtitle">Historic cargo barge restoration</p>
          <p className="muted">
            Built 1907 in steel/wood composite, approx. 54 × 6 m, former cargo barge without engine. Now being renewed
            as a generous cultural and community platform on the water.
          </p>
          <div className="cta-stack">
            <Link className="btn secondary" href="/crafts/">
              Back to crafts
            </Link>
            <Link className="btn" href="/contact/#form">
              Inquire / collaborate
            </Link>
          </div>
        </div>
      </section>

      <section className="section surface two-col">
        <div>
          <h2>Specifications</h2>
          <ul className="list">
            <li>
              <strong>Build</strong> — 1907, steel/wood composite cargo barge
            </li>
            <li>
              <strong>Dimensions</strong> — ~54 × 6 m, expansive open deck
            </li>
            <li>
              <strong>Propulsion</strong> — engineless
            </li>
            <li>
              <strong>Status</strong> — finished restoration with volunteer teams and craft specialists
            </li>
          </ul>
        </div>

        <div>
          <h2>Services & Features</h2>
          <ul className="list">
            <li>Large-format deck and interior for theater, concerts, circus rigging, and public gatherings.</li>
            <li>Ample volume for exhibits, studios, classrooms, or conferences on the water.</li>
          </ul>
        </div>
      </section>

      <section className="section surface">
        <h2>Gallery / videos</h2>
        <p className="muted">Click any image to open the lightbox.</p>
        <div className="gallery-rows">
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse%202.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse%203.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse%204.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse%205.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse%206.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse%207.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img
            src="/assets/Hanseat/Hanseat%20in%20warehouse%207%20%28floor%29.jpg"
            alt="Hanseat floor detail in warehouse"
            loading="lazy"
            data-gallery-img
          />
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse%208.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse%209.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse%2010.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse%2011.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/Hanseat%20in%20warehouse%2012.jpg" alt="Hanseat in warehouse" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/old%20hanseat%20out%20of%20the%20water.jpg" alt="Hanseat out of the water" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/rotten%20floor.jpg" alt="Rotted floor detail" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/rotten%20floor%202.jpg" alt="Rotted floor detail" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/1.jpg" alt="Hanseat photo" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/2.jpg" alt="Hanseat photo" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/3.jpg" alt="Hanseat photo" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/4.jpg" alt="Hanseat photo" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/5.jpg" alt="Hanseat photo" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/6.jpg" alt="Hanseat photo" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/7.jpg" alt="Hanseat photo" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/8.jpg" alt="Hanseat photo" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/9.jpg" alt="Hanseat photo" loading="lazy" data-gallery-img />
          <img src="/assets/Hanseat/10.jpg" alt="Hanseat photo" loading="lazy" data-gallery-img />
          <img src="/assets/Water_culture/conference%20on%20Hanseat.jpg" alt="Conference on Hanseat" loading="lazy" data-gallery-img />
          <img src="/assets/Water_culture/conference%20on%20Hanseat%202.jpg" alt="Conference on Hanseat 2" loading="lazy" data-gallery-img />
          <img src="/assets/Water_culture/conference%20on%20Hanseat%203.jpg" alt="Conference on Hanseat 3" loading="lazy" data-gallery-img />
          <img src="/assets/Water_culture/concert%20on%20Hanseat.jpg" alt="Concert on Hanseat" loading="lazy" data-gallery-img />
        </div>
      </section>
    </>
  );
}

