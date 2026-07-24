"use client";

import { useEffect, useRef } from "react";

/**
 * Smooth-scrolls the section into view after pagination loads (skips initial mount).
 */
export function useScrollToSectionOnPageChange(sectionRef, currentPage, loading) {
  const skipInitialScroll = useRef(true);
  const pendingScroll = useRef(false);

  useEffect(() => {
    if (skipInitialScroll.current) {
      skipInitialScroll.current = false;
      return;
    }

    pendingScroll.current = true;
  }, [currentPage]);

  useEffect(() => {
    if (!pendingScroll.current || loading || !sectionRef?.current) {
      return;
    }

    pendingScroll.current = false;

    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [currentPage, loading, sectionRef]);
}
