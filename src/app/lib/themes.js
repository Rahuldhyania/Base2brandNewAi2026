/**
 * Route → theme mapping.
 *
 * To add a new section theme:
 * 1. Add an entry below with `className: "theme-<id>"` and a `match` function.
 * 2. Define `.theme-<id>` color/surface overrides in globals.css.
 *    Typography is shared site-wide (Manrope) — see SHARED TYPOGRAPHY in globals.css.
 * 3. No layout or ThemeWrapper changes required.
 */

export const THEMES = {
    home: {
        id: "home",
        className: "theme-home",
        match: (pathname) => pathname === "/",
    },
    ai: {
        id: "ai",
        className: "theme-ai",
        match: (pathname) =>
            pathname === "/ai-automation" ||
            pathname.startsWith("/ai-automation/"),
    },
    apple: {
        id: "apple",
        className: "theme-apple",
        match: (pathname) =>
            pathname === "/apple-ecosystem" ||
            pathname.startsWith("/apple-ecosystem/"),
    },
    geo: {
        id: "geo",
        className: "theme-geo",
        match: (pathname) =>
            pathname === "/growth-visibility" ||
            pathname.startsWith("/growth-visibility/") ||
            pathname === "/growth-visibility-demo",
    },
    socialMedia: {
        id: "social-media",
        className: "theme-social-media",
        match: (pathname) =>
            pathname === "/social-media-services" ||
            pathname.startsWith("/social-media-services/"),
    },
    emergingTechnologies: {
        id: "emerging-technologies",
        className: "theme-emerging-technologies",
        match: (pathname) =>
            pathname === "/emerging-technologies" ||
            pathname.startsWith("/emerging-technologies/"),
    },
    softwareDevelopment: {
        id: "software-development",
        className: "theme-software-development",
        match: (pathname) =>
            pathname === "/software-development" ||
            pathname.startsWith("/software-development/"),
    },
    enterPrise: {
        id: "enterprise",
        className: "theme-enterprise",
        match: (pathname) =>
            pathname === "/enterprise" ||
            pathname.startsWith("/enterprise/"),
    },
    erp: {
        id: "erp",
        className: "theme-enterprise",
        match: (pathname) =>
            pathname === "/erp" ||
            pathname.startsWith("/erp/"),
    },
    operationsExcellence: {
        id: "operations-excellence",
        className: "theme-operations-excellences",
        match: (pathname) =>
            pathname === "/operations-excellence" ||
            pathname.startsWith("/operations-excellence/"),
    },
    enterpriseSystems: {
        id: "enterprise-systems",
        className: "theme-enterprise-systems",
        match: (pathname) =>
            pathname === "/enterprise-systems" ||
            pathname.startsWith("/enterprise-systems/"),
    },
    eCommerceSolution: {
        id: "e-commerce-solution",
        className: "theme-e-commerce-solution",
        match: (pathname) =>
            pathname === "/e-commerce-solution" ||
            pathname.startsWith("/e-commerce-solution/"),
    },
    // Indutries page 
    healthCare: {
        id: 'health-care',
        className: 'theme-health-care',
        match: (pathname) =>
            pathname === '/industries/health-care' ||
            pathname.startsWith('/industries/health-care/')
    },
    manufacturing: {
        id: 'manufacturing',
        className: 'theme-manufacturing',
        match: (pathname) =>
            pathname === '/industries/manufacturing' ||
            pathname.startsWith('/industries/manufacturing/')
    },
    logistics: {
        id: 'logistics',
        className: 'theme-logistics',
        match: (pathname) =>
            pathname === '/industries/logistics' ||
            pathname.startsWith('/industries/logistics/')
    },
    education: {
        id: 'education',
        className: 'theme-education',
        match: (pathname) =>
            pathname === '/industries/education' ||
            pathname.startsWith('/industries/education/')
    },
    retail: {
        id: 'retail',
        className: 'theme-retails',
        match: (pathname) =>
            pathname === '/industries/retail' ||
            pathname.startsWith('/industries/retail/')
    },
    automotive: {
        id: 'automotive',
        className: 'theme-automotive',
        match: (pathname) =>
            pathname === '/industries/automotive' ||
            pathname.startsWith('/industries/automotive/')
    },
    government: {
        id: 'government',
        className: 'theme-governments',
        match: (pathname) =>
            pathname === '/industries/government' ||
            pathname.startsWith('/industries/government/')
    },
    ngo: {
        id: 'ngo',
        className: 'theme-ngos',
        match: (pathname) =>
            pathname === '/industries/ngo' ||
            pathname.startsWith('/industries/ngo/')
    },

    // Work 
    portfolio: {
        id: 'portfolio',
        className: 'theme-portfolio',
        match: (pathname) =>
            pathname === '/portfolio' ||
            pathname.startsWith('/portfolio/')
    },

    intelligentSolutions: {
    id: 'intelligentSolutions',
    className: 'theme-intelligent-solution',
     match: (pathname) =>
          pathname === '/intelligent-solutions' ||
           pathname.startsWith('/intelligent-solutions/')
    },
    resources: {
    id: 'resources',
    className: 'theme-resources',
     match: (pathname) =>
          pathname === '/resources-catgeories' ||
           pathname.startsWith('/blog/')
    },
};

/** All theme class names — used to strip previous theme on route change. */
export const THEME_CLASS_NAMES = Object.values(THEMES).map((t) => t.className);

export const DEFAULT_THEME = THEMES.home;

/**
 * Resolve the active theme for a pathname.
 * First matching theme wins; falls back to home.
 */
export function getThemeForPathname(pathname) {
    const matched = Object.values(THEMES).find((theme) => theme.match(pathname));
    return matched ?? DEFAULT_THEME;
}