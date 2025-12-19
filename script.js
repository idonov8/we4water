(function(){
  const words = ['Create', 'Build', 'Cultivate', 'Connect'];
  const el = document.getElementById('verb');
  if (!el) return;

  let index = 0;
  let animating = false;

  function setWord(next){
    el.textContent = next;
  }

  function nextWord(){
    index = (index + 1) % words.length;
    return words[index];
  }

  function animateChange(){
    if (animating) return;
    animating = true;
    el.classList.remove('flip-in');
    el.classList.add('flip-out');
    const handleOut = () => {
      el.removeEventListener('animationend', handleOut);
      setWord(nextWord());
      el.classList.remove('flip-out');
      el.classList.add('flip-in');
      const handleIn = () => {
        el.removeEventListener('animationend', handleIn);
        animating = false;
      };
      el.addEventListener('animationend', handleIn, { once: true });
    };
    el.addEventListener('animationend', handleOut, { once: true });
  }

  setInterval(animateChange, 1800);
})();

// Water Bubbles Animation
(function(){
  const bubblesContainer = document.getElementById('bubbles-container');
  if (!bubblesContainer) return;
  
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 50 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    const duration = 6 + (size / 10);
    bubble.style.animationDuration = `${duration}s`;
    const drift = (Math.random() - 0.5) * 100;
    bubble.style.setProperty('--drift', `${drift}px`);
    bubble.style.animationDelay = `${Math.random() * 2}s`;
    bubblesContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), (duration + 2) * 1000);
  }
  
  function startBubbles() {
    createBubble();
    const nextInterval = Math.random() * 500 + 300;
    setTimeout(startBubbles, nextInterval);
  }
  
  if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    setTimeout(startBubbles, 500);
  }
})();

// Lightweight i18n and language toggle
(function(){
  const I18N = {
    en: {
      nav: {
        home: 'Home',
        quality: 'Quality',
        crafts: 'Crafts',
        treatment: 'Treatment',
        culture: 'Culture',
        about: 'About',
        join: 'Join',
        contact: 'Contact'
      },
      footer: {
        rights: 'We4Water — Open framework for water',
        legal: 'Legal',
        imprint: 'Imprint',
        privacy: 'Privacy'
      },
      common: {
        ctaJoin: 'Join the network',
        ctaBoard: 'Get on board',
        ctaSwim: 'Swim in the Spree',
        ctaReadMore: 'Read more',
        partners: 'Partners',
        gallery: 'Gallery',
        volunteer: 'Volunteer',
        learnMore: 'Learn more',
        contact: 'Contact',
        backHome: 'Back to home'
      },
      home: {
        heroWe: 'We',
        heroFor: 'for water.',
        heroSubtitle: 'A platform for projects at the intersection of technology, nature, and society.',
        heroLead1: 'We4Water is an open framework to showcase and connect projects around water.',
        cardsTitle: 'Explore our focus areas',
        cardQualityTitle: 'Water Quality',
        cardQualityDesc: 'Monitoring & research',
        cardCraftsTitle: 'Watercrafts',
        cardCraftsDesc: 'Boats & floating infrastructure',
        cardTreatmentTitle: 'Water Treatment',
        cardTreatmentDesc: 'Reuse and decentralized systems',
        cardCultureTitle: 'Water Culture',
        cardCultureDesc: 'Art, education & participation',
        ctaTitle: 'Take part',
        ctaJoin: 'Join the network',
        ctaBoard: 'Get on board',
        ctaSwim: 'Swim in the Spree'
      },
      quality: {
        heroTitle: 'Understanding changing waters through real-time sensor data and strategic lab validation.',
        heroLead: 'We focus on monitoring, sensors, and open data to understand the health of water bodies. Especially the fluctuating quality of rivers requires better solutions than sampling and slow laboratory analytics. Our projects combine cutting-edge instruments with collaborative fieldwork – from urban river basins to large-scale expeditions.',
        projectsTitle: 'Project highlights',
        projectSpree: 'Real-time monitoring of the Spree',
        projectDanube: 'River expeditions from Berlin to Odessa',
        projectCitizen: 'Citizen science initiatives with spreeberlin.de',
        visualsTitle: 'Visuals & dashboards',
        visualsCopy: 'Spree dashboards (TSS/TOC/DOC/SAK254), Danube dashboard, and fieldwork imagery.',
        partnersTitle: 'Partners',
        partnersList: 'TU Berlin, AGroLab Potsdam, Landeslabor Berlin Brandenburg, greentech.berlin e.V., Fluss Bad Berlin e.V., Spreevision.de',
        cta: 'Get involved in citizen science & collaborative monitoring',
        dataNote: 'For data access (Grafana), contact Ido for credentials.'
      },
      crafts: {
        heroTitle: 'Designing and building floating structures for water-based ateliers, research, and public access.',
        heroLead: 'From a sailing catamaran to historic ship restorations to experimental floating platforms, our work combines engineering, design, and hands-on craftsmanship. These projects are community-driven and create spaces to live, work, and explore on water.',
        storyTitle: 'Welcome to We4Watercrafts',
        storyCopy: 'We4Water renews historic cargo vessels and self-built boats to make waterways more accessible and sustainable. We form small ownership groups, work with reclaimed materials, and turn old carriers into vibrant spaces for work, culture, and gatherings.',
        altIntroTitle: 'Alternative focus',
        altIntroCopy: 'Today we focus on transforming historic cargo ships in Berlin’s harbor instead of letting them be scrapped. Small groups collaborate to recycle materials, preserve heritage, and create welcoming spaces on the water.',
        vesselsTitle: 'Fleet & projects',
        hanseatTitle: 'Hanseat (1907)',
        hanseatDesc: '54 × 6 m steel/wood barge, former cargo vessel without engine; now restored with volunteer power.',
        elisabethTitle: 'Elisabeth (1905)',
        elisabethDesc: '43 × 4.6 m steel cargo barge with electric engine; Berlin cultural platform in the making.',
        martinTitle: 'Martin (1890)',
        martinDesc: '33 × 4.75 m steel cargo barge with three masts; sailing and steam heritage.',
        esperantosTitle: 'Esperantos (2011–2014)',
        esperantosDesc: '12.5 × 6.2 m self-designed sailing catamaran with 13 beds; built with ~140 volunteers.',
        pontoonTitle: 'Pontoon (2023)',
        pontoonDesc: '11.1 × 2.9 m wood, steel, HDPE platform for modular uses.',
        peopleTitle: 'People & craft',
        peopleCopy: 'Volunteers, designers, and craftspeople join forces to give ships a new life.'
      },
      treatment: {
        heroTitle: 'From wastewater to resource.',
        heroLead: 'We develop and document decentralized treatment solutions for water reuse in agriculture, forestry, and urban contexts. Our focus: low energy, scalable systems that make water available where it is needed most.',
        portfolioTitle: 'Portfolio',
        wetlands: 'Constructed wetlands & nature-based systems',
        filters: 'Trickling filters and MBBR',
        fixedBed: 'Fixed bed irrigation for green walls and landscaping (Campus El Gouna)',
        cooling: 'Greened cooling tower at Heliopolis University – Cairo',
        forestry: 'Forestry & reuse pilots at Sekem Farm',
        partnersTitle: 'Partners',
        partnersList: 'Technical University Berlin, Heliopolis University Cairo, Nile University, Bimex Al Andalus, Sekem Building, Orascom Housing, Shadouf-Cairo, German Federal Ministry for Economy and Energy',
        cta: 'Bring your ideas or support a pilot project; share knowledge for wider reuse.'
      },
      culture: {
        heroTitle: 'Water as a cultural force.',
        heroLead: 'Water is more than a resource: it is part of our culture, identity, and creativity. We support artistic interventions, theater, concerts, and public participation that bring people on the water and raise awareness.',
        portfolioTitle: 'Programs & formats',
        theater: 'Theater: Novecento, Transitopia, ASSEDO – Odessa’s Journey',
        circus: 'Circus: Sea Clown Sailing Circus, aerial missions on Hanseat',
        concerts: 'Concerts: RioKlangBerlin and more',
        discussions: 'Podium discussions on river swimming and access',
        storiesTitle: 'Stories',
        storiesCopy: 'Voices of partners, volunteers, and audiences from voyages and events.',
        partnersTitle: 'Partners',
        partnersList: 'Esperantos Water Culture e.V., Esperantos.eu, spreepublik.de',
        cta: 'Collaborate on art, culture, or education around water.'
      },
      about: {
        heroTitle: 'About We4Water',
        heroLead: 'Bridging boatbuilding, water quality, and cultural work since 2011.',
        storyTitle: 'Our story',
        p1: 'We4Water began with the self-built catamaran “Esperantos” (2011–2014), created by ~140 volunteers and sailed from Berlin to the Mediterranean.',
        p2: 'Since 2012 we expanded into water quality monitoring across Morocco, Lebanon, and Egypt, leading river expeditions from Berlin to Odessa (2018–2020) and collaborating with Fluss Bad Berlin e.V. on urban water hygiene.',
        p3: 'Floating cultural events have taken us along the Baltic Sea, the Danube, and to Odessa and the Greek islands with theater, concerts, and circus performances.',
        p4: 'Since 2022 the 54 m Hanseat and since 2024 the 41 m Elisabeth are our Berlin hubs for culture and events.',
        teamTitle: 'Our team',
        teamLead: 'A small, dedicated team drawn to water:',
        teamLinus: 'Linus Gripp – leads “Elisabeth” and cultural initiatives.',
        teamMichael: 'Michael Lustenberger – IoT specialist making sensor data accessible.',
        teamSky: 'Sky Newall – restores “Martin” with professional woodworking and boatbuilding expertise.',
        teamIdo: 'Ido Nov – builds and maintains the website and data visuals.',
        teamCarsten: 'Carsten Riechelmann – built the Esperantos, oversaw Hanseat refit, leads treatment and monitoring.'
      },
      join: {
        heroTitle: 'Be part of We4Water.',
        heroLead: 'Whether you are an organization, a research partner, or a volunteer – there are many ways to get involved.',
        partnerTitle: 'Partner with us',
        partnerCopy: 'For institutions, NGOs, and companies to collaborate on research, culture, or infrastructure. See also greentech.berlin.',
        volunteerTitle: 'Volunteer with us',
        volunteerCopy: 'Join fieldwork, workshops, and construction. Includes current and past Workaway projects.',
        newsletterTitle: 'Stay connected',
        newsletterCopy: 'Sign up for updates and project news (mailto for now; newsletter service coming soon).',
        workaway: 'View current Workaway project'
      },
      contact: {
        heroTitle: 'Get in touch.',
        heroLead: 'Write us, follow along, or reach out for collaborations.',
        emailLabel: 'Email',
        socialLabel: 'Social',
        formTitle: 'Send us a note',
        name: 'Name',
        email: 'Email',
        topic: 'Topic',
        message: 'Message',
        submit: 'Open email draft',
        legalTitle: 'Legal',
        imprint: 'Imprint placeholder – add final legal text here.',
        privacy: 'Privacy policy placeholder – add final text here.'
      }
    },
    de: {
      nav: {
        home: 'Start',
        quality: 'Qualität',
        crafts: 'Boote',
        treatment: 'Aufbereitung',
        culture: 'Kultur',
        about: 'Über uns',
        join: 'Mitmachen',
        contact: 'Kontakt'
      },
      footer: {
        rights: 'We4Water — Offenes Framework für Wasser',
        legal: 'Rechtliches',
        imprint: 'Impressum',
        privacy: 'Datenschutz'
      },
      common: {
        ctaJoin: 'Netzwerk beitreten',
        ctaBoard: 'An Bord kommen',
        ctaSwim: 'In der Spree schwimmen',
        ctaReadMore: 'Mehr erfahren',
        partners: 'Partner',
        gallery: 'Galerie',
        volunteer: 'Mithelfen',
        learnMore: 'Details',
        contact: 'Kontakt',
        backHome: 'Zur Startseite'
      },
      home: {
        heroWe: 'Wir',
        heroFor: 'fürs Wasser.',
        heroSubtitle: 'Eine Plattform für Projekte zwischen Technologie, Natur und Gesellschaft.',
        heroLead1: 'We4Water ist ein offenes Framework, um Projekte rund um Wasser zu zeigen und zu verbinden.',
        cardsTitle: 'Unsere Schwerpunkte',
        cardQualityTitle: 'Wasserqualität',
        cardQualityDesc: 'Monitoring & Forschung',
        cardCraftsTitle: 'Wasserfahrzeuge',
        cardCraftsDesc: 'Boote & schwimmende Infrastruktur',
        cardTreatmentTitle: 'Wasseraufbereitung',
        cardTreatmentDesc: 'Wiederverwendung & dezentrale Systeme',
        cardCultureTitle: 'Wasserkultur',
        cardCultureDesc: 'Kunst, Bildung & Teilhabe',
        ctaTitle: 'Mach mit',
        ctaJoin: 'Netzwerk beitreten',
        ctaBoard: 'An Bord kommen',
        ctaSwim: 'In der Spree schwimmen'
      },
      quality: {
        heroTitle: 'Veränderliches Wasser verstehen – mit Echtzeit-Sensordaten und strategischer Laborvalidierung.',
        heroLead: 'Wir fokussieren Monitoring, Sensorik und offene Daten, um die Gesundheit von Gewässern zu verstehen. Gerade die schwankende Qualität von Flüssen braucht bessere Lösungen als Stichproben und langsame Labore. Unsere Projekte verbinden High-End-Instrumente mit kollaborativem Feldwork – von urbanen Flussbecken bis zu großen Expeditionen.',
        projectsTitle: 'Projekt-Highlights',
        projectSpree: 'Echtzeit-Monitoring der Spree',
        projectDanube: 'Fluss-Expeditionen Berlin–Odessa',
        projectCitizen: 'Citizen Science mit spreeberlin.de',
        visualsTitle: 'Visuals & Dashboards',
        visualsCopy: 'Spree-Dashboards (TSS/TOC/DOC/SAK254), Donau-Dashboard und Feldfotos.',
        partnersTitle: 'Partner',
        partnersList: 'TU Berlin, AGroLab Potsdam, Landeslabor Berlin Brandenburg, greentech.berlin e.V., Fluss Bad Berlin e.V., Spreevision.de',
        cta: 'Mach mit bei Citizen Science & kollaborativem Monitoring',
        dataNote: 'Für Datenzugang (Grafana) bitte Ido wegen Zugangsdaten kontaktieren.'
      },
      crafts: {
        heroTitle: 'Wir entwerfen und bauen schwimmende Strukturen für Ateliers, Forschung und öffentlichen Wasserzugang.',
        heroLead: 'Vom Segelkatamaran über historische Schiffs-Restaurierungen bis zu experimentellen Plattformen verbinden wir Engineering, Design und Handwerk. Die Projekte sind gemeinschaftsgetrieben und schaffen Räume zum Leben, Arbeiten und Entdecken auf dem Wasser.',
        storyTitle: 'Willkommen bei We4Watercrafts',
        storyCopy: 'We4Water belebt historische Frachtschiffe und Selbstbauten, um Wasserwege zugänglicher und nachhaltiger zu machen. Kleine Eigentümergruppen nutzen recycelte Materialien und verwandeln alte Kähne in lebendige Orte für Arbeit, Kultur und Begegnung.',
        altIntroTitle: 'Aktueller Fokus',
        altIntroCopy: 'Heute konzentrieren wir uns auf den Berliner Hafen: Statt alte Frachter zu verschrotten, recyceln wir Materialien, bewahren maritimes Erbe und schaffen einladende Räume auf dem Wasser.',
        vesselsTitle: 'Flotte & Projekte',
        hanseatTitle: 'Hanseat (1907)',
        hanseatDesc: '54 × 6 m Stahl/Holz-Kahn ohne Motor, ehem. Frachter; nun mit Freiwilligenkraft saniert.',
        elisabethTitle: 'Elisabeth (1905)',
        elisabethDesc: '43 × 4,6 m Stahlkahn mit Elektroantrieb; entstehende Kulturplattform in Berlin.',
        martinTitle: 'Martin (1890)',
        martinDesc: '33 × 4,75 m Stahlkahn mit drei Masten; Segel- und Dampferbe.',
        esperantosTitle: 'Esperantos (2011–2014)',
        esperantosDesc: '12,5 × 6,2 m selbst entworfener Segelkatamaran mit 13 Kojen; gebaut mit ~140 Freiwilligen.',
        pontoonTitle: 'Pontoon (2023)',
        pontoonDesc: '11,1 × 2,9 m Plattform aus Holz, Stahl, HDPE für modulare Nutzung.',
        peopleTitle: 'Menschen & Handwerk',
        peopleCopy: 'Freiwillige, Designer und Handwerker geben den Schiffen ein neues Leben.'
      },
      treatment: {
        heroTitle: 'Vom Abwasser zur Ressource.',
        heroLead: 'Wir entwickeln dezentrale Aufbereitungslösungen für Wiederverwendung in Landwirtschaft, Forst und Stadt. Fokus: niedriger Energiebedarf, skalierbare Systeme, Wasser dort bereitstellen, wo es gebraucht wird.',
        portfolioTitle: 'Portfolio',
        wetlands: 'Pflanzenkläranlagen & naturbasierte Systeme',
        filters: 'Tropfkörper und MBBR',
        fixedBed: 'Festbett-Bewässerung für grüne Wände und Landschaft (Campus El Gouna)',
        cooling: 'Begrünter Kühlturm an der Heliopolis University – Kairo',
        forestry: 'Forst- und Wiederverwendungs-Piloten auf der Sekem Farm',
        partnersTitle: 'Partner',
        partnersList: 'TU Berlin, Heliopolis University Kairo, Nile University, Bimex Al Andalus, Sekem Building, Orascom Housing, Shadouf-Kairo, Bundesministerium für Wirtschaft und Energie',
        cta: 'Bringe Ideen ein oder unterstütze ein Pilotprojekt; Wissen teilen für breite Wiederverwendung.'
      },
      culture: {
        heroTitle: 'Wasser als kulturelle Kraft.',
        heroLead: 'Wasser ist mehr als eine Ressource: Teil von Kultur, Identität und Kreativität. Wir unterstützen künstlerische Interventionen, Theater, Konzerte und Teilhabe, die Menschen aufs Wasser bringen.',
        portfolioTitle: 'Formate',
        theater: 'Theater: Novecento, Transitopia, ASSEDO – Odessas Reise',
        circus: 'Zirkus: Sea Clown Sailing Circus, Aerial-Missionen auf der Hanseat',
        concerts: 'Konzerte: RioKlangBerlin u.v.m.',
        discussions: 'Podien zu Flussschwimmen und Zugang',
        storiesTitle: 'Geschichten',
        storiesCopy: 'Stimmen von Partnern, Freiwilligen und Publikum aus Fahrten und Events.',
        partnersTitle: 'Partner',
        partnersList: 'Esperantos Water Culture e.V., Esperantos.eu, spreepublik.de',
        cta: 'Kooperiere zu Kunst, Kultur oder Bildung rund ums Wasser.'
      },
      about: {
        heroTitle: 'Über We4Water',
        heroLead: 'Seit 2011 verbinden wir Bootsbau, Wasserqualität und Kulturarbeit.',
        storyTitle: 'Unsere Geschichte',
        p1: 'We4Water startete mit dem selbstgebauten Katamaran „Esperantos“ (2011–2014), erschaffen von ca. 140 Freiwilligen und gesegelt von Berlin bis ins Mittelmeer.',
        p2: 'Seit 2012 bauen wir Wasserqualitäts-Monitoring aus – in Marokko, Libanon, Ägypten – mit Flussreisen Berlin–Odessa (2018–2020) und Zusammenarbeit mit Fluss Bad Berlin e.V. zu urbaner Wasserhygiene.',
        p3: 'Schwimmende Kulturreisen führten uns an die Ostsee, die Donau, nach Odessa und auf griechische Inseln mit Theater, Konzerten und Zirkus.',
        p4: 'Seit 2022 ist die 54 m Hanseat, seit 2024 die 41 m Elisabeth unser Berliner Zuhause für Kultur und Events.',
        teamTitle: 'Unser Team',
        teamLead: 'Ein kleines Team mit Wasser im Herzen:',
        teamLinus: 'Linus Gripp – führt „Elisabeth“ und Kulturinitiativen.',
        teamMichael: 'Michael Lustenberger – IoT-Spezialist, macht Sensordaten zugänglich.',
        teamSky: 'Sky Newall – restauriert „Martin“ mit Holz- und Bootsbauexpertise.',
        teamIdo: 'Ido Nov – baut Website und Datenvisualisierungen.',
        teamCarsten: 'Carsten Riechelmann – baute die Esperantos, leitete Hanseat-Refit, führt Aufbereitung & Monitoring.'
      },
      join: {
        heroTitle: 'Teil von We4Water werden.',
        heroLead: 'Ob Organisation, Forschungspartner oder Freiwillige: Es gibt viele Wege mitzumachen.',
        partnerTitle: 'Partner werden',
        partnerCopy: 'Für Institutionen, NGOs und Unternehmen zu Forschung, Kultur oder Infrastruktur. Siehe auch greentech.berlin.',
        volunteerTitle: 'Freiwillig mitarbeiten',
        volunteerCopy: 'Feldarbeit, Workshops, Bau – inkl. aktueller und vergangener Workaway-Projekte.',
        newsletterTitle: 'Dranbleiben',
        newsletterCopy: 'Updates und Projektnews per Mail (vorerst Mailto; Newsletter-Service folgt).',
        workaway: 'Aktuelles Workaway-Projekt ansehen'
      },
      contact: {
        heroTitle: 'Kontakt aufnehmen.',
        heroLead: 'Schreib uns, folge den Projekten oder melde dich für Kooperationen.',
        emailLabel: 'E-Mail',
        socialLabel: 'Social',
        formTitle: 'Nachricht senden',
        name: 'Name',
        email: 'E-Mail',
        topic: 'Thema',
        message: 'Nachricht',
        submit: 'E-Mail-Entwurf öffnen',
        legalTitle: 'Rechtliches',
        imprint: 'Impressum-Platzhalter – finalen Text bitte ergänzen.',
        privacy: 'Datenschutz-Platzhalter – finalen Text bitte ergänzen.'
      }
    }
  };

  const STORAGE_KEY = 'we4water_lang';
  const DEFAULT_LANG = 'en';

  function getNested(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  function resolveInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get('lang');
    if (fromQuery && I18N[fromQuery]) return fromQuery;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && I18N[stored]) return stored;
    return DEFAULT_LANG;
  }

  function setActiveButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function applyLanguage(lang) {
    const pack = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const value = getNested(pack, key) ?? getNested(I18N[DEFAULT_LANG], key);
      if (typeof value === 'undefined') return;
      if (el.dataset.i18nAttr) {
        el.setAttribute(el.dataset.i18nAttr, value);
      } else {
        el.textContent = value;
      }
    });

    setActiveButton(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  const initialLang = resolveInitialLang();
  applyLanguage(initialLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (!lang || !I18N[lang]) return;
      applyLanguage(lang);
    });
  });
})();

// Mailto helper for the contact form
(function(){
  const form = document.querySelector('[data-mailto-form]');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const topic = data.get('topic') || 'We4Water contact';
    const message = data.get('message') || '';
    const target = form.dataset.mailto || 'riechelmann@we4water.com';

    const subject = `${topic}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message
    ].join('\\n');

    const href = `mailto:${target}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  });
})();

// Lightbox for galleries
(function(){
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const imgEl = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('button');

  function open(src, alt) {
    imgEl.src = src;
    imgEl.alt = alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function close() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    imgEl.src = '';
  }

  document.querySelectorAll('[data-gallery-img]').forEach(img => {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.addEventListener('click', () => open(img.src, img.alt));
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') open(img.src, img.alt);
    });
  });

  closeBtn?.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) close();
  });
})();

// Active nav marker (supports subpages like /crafts/hanseat/)
(function(){
  const currentPath = window.location.pathname.endsWith('/')
    ? window.location.pathname
    : `${window.location.pathname}/`;

  const links = Array.from(document.querySelectorAll('nav.nav-links a'))
    .map(a => {
      try {
        const url = new URL(a.getAttribute('href') || '', window.location.origin);
        return { a, path: url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/` };
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .filter(x => x.path !== '/');

  let best = null;
  for (const item of links) {
    if (currentPath.startsWith(item.path)) {
      if (!best || item.path.length > best.path.length) best = item;
    }
  }

  if (best) best.a.classList.add('active');
})();
