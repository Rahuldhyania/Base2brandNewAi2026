"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { getThemeForPathname, THEME_CLASS_NAMES } from "@/lib/themes";

/**
 * Applies route-based theme classes to <html> and <body>.
 * Keeps a single root layout while scoping CSS variables per section.
 */
export function ThemeWrapper({ children }) {
  const pathname = usePathname();
  const theme = getThemeForPathname(pathname);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove(...THEME_CLASS_NAMES);
    body.classList.remove(...THEME_CLASS_NAMES);

    root.classList.add(theme.className);
    body.classList.add(theme.className);
  }, [theme.className]);

  return children;
}
