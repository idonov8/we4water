import Link from 'next/link';
import Image from 'next/image';

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

      <section className="section surface two-col" id="vessel&specs">
        <div>
          <div className="thumb" style={{ marginTop: '0.75rem' }}>
            <Image
              src="/assets/Hanseat/Full%20Hanseat%20in%20Mitte.jpg"
              alt="Hanseat workshop view (placeholder for 3D model)"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>

        <div>
          <h2>Vessel & specs</h2>
          <p className="muted">
            Steel/wood composite barge reborn as a generous cultural platform on the water.
          </p>
          <ul className="list">
            <li>
              <strong>Build</strong> — 1907
            </li>
            <li>
              <strong>Dimensions</strong> — ~54 × 6 m
            </li>
            <li>
              <strong>Propulsion</strong> — engineless (towed / hybrid support)
            </li>
            <li>
              <strong>Status</strong> — restoration active
            </li>
          </ul>
        </div>
      </section>

      <section className="section surface" id="features&services">
        <div className="two-col">
          <div>
            <h2>Features & services</h2>
            <p className="muted">
              Finished setup focuses on open cultural programming: concerts, talks, workshops, and community hosting on deck and below.
            </p>
            <ul className="list">
              <li>
                <strong>Deck</strong> — open platform for stage, cinema, or outdoor gatherings.
              </li>
              <li>
                <strong>Interior</strong> — flexible salon and workspace, ready for exhibition or workshop formats.
              </li>
              <li>
                <strong>Access</strong> — generous ramps and railings for inclusive boarding.
              </li>
              <li>
                <strong>Services</strong> — shore power, lighting, and modular seating for rapid reconfiguration.
              </li>
            </ul>
          </div>
          <div className="gallery-rows features-gallery" style={{ marginTop: '0.5rem' }}>
            <div className="gallery-media">
              <Image
                src="/assets/Water_culture/concert%20on%20Hanseat.jpg"
                alt="Concert on Hanseat deck"
                fill
                sizes="(max-width: 900px) 85vw, 520px"
                data-gallery-img
              />
            </div>
            <div className="gallery-media">
              <Image
                src="/assets/Water_culture/conference%20on%20Hanseat.jpg"
                alt="Conference setup on Hanseat"
                fill
                sizes="(max-width: 900px) 85vw, 520px"
                data-gallery-img
              />
            </div>
            <div className="gallery-media">
              <Image
                src="/assets/Hanseat/6.jpg"
                alt="Hanseat deck detail"
                fill
                sizes="(max-width: 900px) 85vw, 520px"
                data-gallery-img
              />
            </div>
            <div className="gallery-media">
              <Image
                src="/assets/Hanseat/8.jpg"
                alt="Hanseat interior detail"
                fill
                sizes="(max-width: 900px) 85vw, 520px"
                data-gallery-img
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section surface" id="Gallery&Videos">
        <h2>Gallery & videos</h2>
        <p className="muted">Curated looks at the vessel now and through the rebuild.</p>

        <h3 style={{ marginTop: '1rem' }}>Now</h3>
        <div className="gallery-rows gallery-rows--thumbs">
          <div className="gallery-media">
            <Image
              src="/assets/Water_culture/conference%20on%20Hanseat%202.jpg"
              alt="Now: conference on Hanseat"
              fill
              sizes="(max-width: 900px) 85vw, 520px"
              data-gallery-img
            />
          </div>
          <div className="gallery-media">
            <Image
              src="/assets/Water_culture/conference%20on%20Hanseat%203.jpg"
              alt="Now: workshop on Hanseat"
              fill
              sizes="(max-width: 900px) 85vw, 520px"
              data-gallery-img
            />
          </div>
          <div className="gallery-media">
            <Image
              src="/assets/Water_culture/concert%20on%20Hanseat.jpg"
              alt="Now: concert on Hanseat"
              fill
              sizes="(max-width: 900px) 85vw, 520px"
              data-gallery-img
            />
          </div>
          <div className="gallery-media">
            <Image
              src="/assets/Hanseat/10.jpg"
              alt="Now: Hanseat exterior detail"
              fill
              sizes="(max-width: 900px) 85vw, 520px"
              data-gallery-img
            />
          </div>
        </div>

        <h3 style={{ marginTop: '1rem' }}>Building & development</h3>
        <div className="gallery-rows gallery-rows--thumbs">
          <div className="gallery-media">
            <Image
              src="/assets/Hanseat/old%20hanseat%20out%20of%20the%20water.jpg"
              alt="Build: hull lifted from the water"
              fill
              sizes="(max-width: 900px) 85vw, 520px"
              data-gallery-img
            />
          </div>
          <div className="gallery-media">
            <Image
              src="/assets/Hanseat/Hanseat%20in%20warehouse.jpg"
              alt="Build: Hanseat in the warehouse"
              fill
              sizes="(max-width: 900px) 85vw, 520px"
              data-gallery-img
            />
          </div>
          <div className="gallery-media">
            <Image
              src="/assets/Hanseat/Hanseat%20in%20warehouse%207%20%28floor%29.jpg"
              alt="Build: deck reconstruction detail"
              fill
              sizes="(max-width: 900px) 85vw, 520px"
              data-gallery-img
            />
          </div>
          <div className="gallery-media">
            <Image
              src="/assets/Hanseat/rotten%20floor.jpg"
              alt="Build: removing damaged floor"
              fill
              sizes="(max-width: 900px) 85vw, 520px"
              data-gallery-img
            />
          </div>
          <div className="gallery-media">
            <Image
              src="/assets/Hanseat/rotten%20floor%202.jpg"
              alt="Build: floor removal progress"
              fill
              sizes="(max-width: 900px) 85vw, 520px"
              data-gallery-img
            />
          </div>
          <div className="gallery-media">
            <Image
              src="/assets/Hanseat/Hanseat%20in%20warehouse%202.jpg"
              alt="Build: hull support in hall"
              fill
              sizes="(max-width: 900px) 85vw, 520px"
              data-gallery-img
            />
          </div>
        </div>
      </section>
    </>
  );
}

