export const extraData = {
    emergentLink: "home-emergent-link",
    nav: {
      root: "primary-nav",
      logo: "nav-logo",
      linkServices: "nav-link-services",
      linkSolutions: "nav-link-solutions",
      linkIndustries: "nav-link-industries",
      linkWork: "nav-link-work",
      linkResources: "nav-link-resources",
      linkAbout: "nav-link-about",
      ctaGetProposal: "nav-cta-get-proposal",
      mobileToggle: "nav-mobile-toggle",
    },
    mission: {
      tracker: "mission-tracker",
      checkpoint: (id) => `mission-checkpoint-${id}`,
    },
    hero: {
      root: "section-hero",
      headline: "hero-headline",
      ctaStart: "hero-cta-start",
      ctaExplore: "hero-cta-explore",
      stat: (key) => `hero-stat-${key}`,
    },
    services: {
      root: "section-services",
      card: (id) => `service-card-${id}`,
    },
    solutions: {
      root: "section-solutions",
      card: (id) => `solution-card-${id}`,
    },
    industries: {
      root: "section-industries",
      item: (id) => `industry-item-${id}`,
    },
    work: {
      root: "section-work",
      project: (id) => `work-project-${id}`,
      browserExpand: (id) => `work-browser-expand-${id}`,
    },
    resources: {
      root: "section-resources",
      article: (id) => `resource-article-${id}`,
    },
    about: {
      root: "section-about",
      timelineItem: (id) => `about-timeline-${id}`,
    },
    contact: {
      root: "section-contact",
      form: "contact-form",
      inputName: "contact-input-name",
      inputEmail: "contact-input-email",
      inputCompany: "contact-input-company",
      inputProblem: "contact-input-problem",
      submit: "contact-submit",
    },
    rocket: {
      root: "rocket-navigator",
      path: "orbital-path",
      waypoint: (id) => `waypoint-${id}`,
    },
  };
  