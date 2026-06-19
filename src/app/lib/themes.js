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
    className: "theme-operations-excellence",
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
