import Link from 'next/link';

export default function CraftsMartinPage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1>Martin</h1>
          <p className="subtitle">Project page (photos coming soon)</p>
          <p className="muted">Built 1890 in steel, approx. 33 × 4.75 m, former cargo barge with three masts.</p>
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

