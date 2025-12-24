import { Trans } from '@/app/components/Trans';

export default function ContactPage() {
  return (
    <section className="contact-hero hero surface">
      <div className="contact-stack">
        <div className="contact-intro">
          <h1>
            <Trans k="contact.heroTitle" />
          </h1>
          <p className="subtitle">Write us, follow along, or reach out for collaborations.</p>
        </div>

        <div className="contact-panel" aria-label="Contact options">
          <div className="contact-row">
            <div className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M4 6.5h16v11H4v-11Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.8 7.2 12 12.2l7.2-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="contact-row-body">
              <div className="contact-label">Email</div>
              <a className="contact-link" href="mailto:riechelmann@we4water.com">
                riechelmann@we4water.com
              </a>
            </div>
          </div>

          <div className="contact-row">
            <div className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <rect
                  x="6"
                  y="6"
                  width="12"
                  height="12"
                  rx="3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="16.5" cy="7.5" r="0.9" fill="currentColor" />
              </svg>
            </div>
            <div className="contact-row-body">
              <div className="contact-label">Instagram</div>
              <div className="ig-list">
                <a
                  className="ig-pill"
                  href="https://www.instagram.com/martin.the.boat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ig-name">Martin the Boat</span>
                  <span className="ig-desc">News and updates from Martin and We4Water projects on the water.</span>
                </a>

                <a
                  className="ig-pill"
                  href="https://www.instagram.com/hanseart.berlin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ig-name">HanseArt</span>
                  <span className="ig-desc">Art & culture around the historic vessel Hanseat.</span>
                </a>

                <a
                  className="ig-pill"
                  href="https://www.instagram.com/rioklangberlin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ig-name">rioKlang</span>
                  <span className="ig-desc">A series of musical events aboard Elisabeth and Hanseat.</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

