import Link from 'next/link';
import { Trans } from '@/app/components/Trans';

export default function ContactPage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1>
            <Trans k="contact.heroTitle" />
          </h1>
          <p>
            <Trans k="contact.heroLead" />
          </p>
        </div>
      </section>

      <section id="form" className="section surface two-col">
        <div>
          <h2>
            <Trans k="contact.emailLabel" />
          </h2>
          <p>
            <a href="mailto:riechelmann@we4water.com">riechelmann@we4water.com</a>
          </p>
          <h2>
            <Trans k="contact.socialLabel" />
          </h2>
          <p>
            <a href="https://www.instagram.com/martin.the.boat/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>
        <div>
          <h2>
            <Trans k="contact.formTitle" />
          </h2>
          <form className="form-grid" data-mailto-form data-mailto="riechelmann@we4water.com">
            <label>
              <span>
                <Trans k="contact.name" />
              </span>
              <input type="text" name="name" placeholder="Name" />
            </label>
            <label>
              <span>
                <Trans k="contact.email" />
              </span>
              <input type="email" name="email" required placeholder="Email" />
            </label>
            <label>
              <span>
                <Trans k="contact.topic" />
              </span>
              <input type="text" name="topic" placeholder="Topic" />
            </label>
            <label style={{ gridColumn: '1 / -1' }}>
              <span>
                <Trans k="contact.message" />
              </span>
              <textarea name="message" required placeholder="Message" />
            </label>
            <div className="cta-stack" style={{ gridColumn: '1 / -1' }}>
              <button className="btn" type="submit">
                <Trans k="contact.submit" />
              </button>
              <a className="btn secondary" href="mailto:riechelmann@we4water.com">
                <Trans k="common.contact" />
              </a>
            </div>
          </form>
        </div>
      </section>

      <section id="legal" className="section surface">
        <h2>
          <Trans k="contact.legalTitle" />
        </h2>
        <h3>
          <Trans k="contact.imprint" />
        </h3>
        <p>
          <Trans k="contact.imprint" />
        </p>
        <h3>
          <Trans k="contact.privacy" />
        </h3>
        <p>
          <Trans k="contact.privacy" />
        </p>
        <div className="cta-stack">
          <Link className="btn secondary" href="/">
            <Trans k="common.backHome" />
          </Link>
        </div>
      </section>
    </>
  );
}

