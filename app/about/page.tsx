import { Trans } from '@/app/components/Trans';

export default function AboutPage() {
  return (
    <>
      <section className="hero surface">
        <div>
          <h1>
            <Trans k="about.heroTitle" />
          </h1>
          <p>
            <Trans k="about.heroLead" />
          </p>
        </div>
      </section>

      <section className="section surface">
        <h2>
          <Trans k="about.storyTitle" />
        </h2>
        <p>
          <Trans k="about.p1" />
        </p>
        <p>
          <Trans k="about.p2" />
        </p>
        <p>
          <Trans k="about.p3" />
        </p>
        <p>
          <Trans k="about.p4" />
        </p>
      </section>

      <section className="section surface">
        <h2>
          <Trans k="about.teamTitle" />
        </h2>
        <p>
          <Trans k="about.teamLead" />
        </p>
        <ul className="list">
          <li>
            <Trans k="about.teamLinus" />
          </li>
          <li>
            <Trans k="about.teamMichael" />
          </li>
          <li>
            <Trans k="about.teamSky" />
          </li>
          <li>
            <Trans k="about.teamIdo" />
          </li>
          <li>
            <Trans k="about.teamCarsten" />
          </li>
        </ul>
      </section>
    </>
  );
}

