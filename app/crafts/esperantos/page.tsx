import Link from 'next/link';

export default function EsperantosPage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1>Esperantos</h1>
          <p className="subtitle">Self-built sailing catamaran</p>
          <p className="muted">Built 2011–2014 in wood, 12.5 × 6.2 m, self-designed sailing vessel with 13 beds.</p>
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

      <section className="section surface">
        <h2>Gallery</h2>
        <div className="gallery-rows">
          <img src="/assets/Esperantos/build.jpg" alt="Esperantos build" loading="lazy" data-gallery-img />
          <img src="/assets/Esperantos/in%20the%20air.jpg" alt="Esperantos in the air" loading="lazy" data-gallery-img />
          <img src="/assets/Esperantos/esperantos%20design.png" alt="Esperantos design" loading="lazy" data-gallery-img />
        </div>
      </section>
    </>
  );
}

