/**
 * Route → theme mapping.
 *
 * To add a new section theme:
 * 1. Add an entry below with `className: "theme-<id>"` and a `match` function.
 * 2. Define `.theme-<id>` variables and overrides in globals.css.
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
  // Future examples (uncomment when routes exist):
  // seo: {
  //   id: "seo",
  //   className: "theme-seo",
  //   match: (pathname) =>
  //     pathname === "/seo" || pathname.startsWith("/seo/"),
  // },
  // marketing: {
  //   id: "marketing",
  //   className: "theme-marketing",
  //   match: (pathname) =>
  //     pathname === "/marketing" || pathname.startsWith("/marketing/"),
  // },
  // development: {
  //   id: "development",
  //   className: "theme-development",
  //   match: (pathname) =>
  //     pathname === "/development" || pathname.startsWith("/development/"),
  // },
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
