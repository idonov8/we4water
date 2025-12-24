import Link from 'next/link';

export default function PontoonPage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1>Pontoon</h1>
          <p className="subtitle">Project page (photos coming soon)</p>
          <p className="muted">Built 2023 in wood/steel/HDPE, approx. 11.1 × 2.9 m.</p>
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
        <div className="placeholder" style={{ minHeight: 220, borderRadius: 14 }}>
          No photos yet
        </div>
      </section>
    </>
  );
}

