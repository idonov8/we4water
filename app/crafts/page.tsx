import Link from 'next/link';
import { Trans } from '@/app/components/Trans';
import { PencilSquareIcon, ClipboardDocumentListIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { FleetList, type FleetItem } from './FleetList';

export default function CraftsPage() {
  const fleet: FleetItem[] = [
    {
      href: '/crafts/hanseat/',
      name: 'Hanseat',
      lengthM: 54,
      ariaLabel: 'Hanseat — approx. 54 m',
      descKey: 'crafts.hanseatDesc',
    },
    {
      href: '/crafts/elisabeth/',
      name: 'Elisabeth',
      lengthM: 43,
      ariaLabel: 'Elisabeth — approx. 43 m',
      descKey: 'crafts.elisabethDesc',
    },
    {
      href: '/crafts/martin/',
      name: 'Martin',
      lengthM: 33,
      ariaLabel: 'Martin — approx. 33 m',
      descKey: 'crafts.martinDesc',
    },
    {
      href: '/crafts/esperantos/',
      name: 'Esperantos',
      lengthM: 12.5,
      ariaLabel: 'Esperantos — approx. 12.5 m',
      descKey: 'crafts.esperantosDesc',
    },
    {
      href: '/crafts/pontoon/',
      name: 'Pontoon',
      lengthM: 11.1,
      ariaLabel: 'Pontoon — approx. 11.1 m',
      descKey: 'crafts.pontoonDesc',
    },
  ];

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

      <section className="section surface" aria-labelledby="services">
        <h2 id="services" className="section-title-center">
          <Trans k="crafts.servicesTitle" />
        </h2>

        <div className="services-grid" role="list" aria-label="Services">
          <div className="service-card" role="listitem">
            <div className="service-icon" aria-hidden="true">
              <PencilSquareIcon className="service-heroicon" />
            </div>
            <div className="service-text">
              <Trans k="crafts.serviceDesign" />
            </div>
          </div>

          <div className="service-card" role="listitem">
            <div className="service-icon" aria-hidden="true">
              <ClipboardDocumentListIcon className="service-heroicon" />
            </div>
            <div className="service-text">
              <Trans k="crafts.serviceRental" />
            </div>
          </div>

          <div className="service-card" role="listitem">
            <div className="service-icon" aria-hidden="true">
              <WrenchScrewdriverIcon className="service-heroicon" />
            </div>
            <div className="service-text">
              <Trans k="crafts.serviceRenovation" />
            </div>
          </div>
        </div>
      </section>

      <section className="section surface" aria-labelledby="fleet">
        <h2 id="fleet" className="section-title-center">
          <Trans k="crafts.fleetTitle" />
        </h2>

        <FleetList fleet={fleet} />
      </section>

      
    </>
  );
}

