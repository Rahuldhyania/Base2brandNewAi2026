import React, { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { INDUSTRY_PAGE } from "@/constants/testIds";

// Sticky progress indicator with section list + active state.
// Hidden on mobile; collapses behind a dropdown on tablet.
export default function StickyProgress({ sections = [] }) {
  const [active, setActive] = useState(sections[0]?.id || "");
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const p = docH > 0 ? Math.min(1, window.scrollY / docH) : 0;
      setProgress(p);

      // find which section is in viewport
      let current = sections[0]?.id || "";
      const offset = window.innerHeight * 0.3;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  if (!sections.length) return null;

  return (
    <aside
      data-testid={INDUSTRY_PAGE.stickyProgress}
      ref={containerRef}
      className="hidden xl:block fixed left-4 top-1/2 -translate-y-1/2 z-30"
    >
      <div className="glass rounded-2xl px-3 py-4 w-[230px]">
        <div className="text-[10px] uppercase tracking-widest2 text-white/40 mb-3 px-1">
          On this page
        </div>

        <div className="relative pl-3">
          <div className="absolute left-0 top-1 bottom-1 w-px bg-white/10 rounded-full" />
          <m.div
            className="absolute left-0 top-1 w-px bg-brand origin-top"
            style={{ scaleY: progress, height: "calc(100% - 8px)" }}
          />

          <ul className="space-y-1.5">
            {sections.map((s, i) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    data-testid={INDUSTRY_PAGE.stickyProgressItem}
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`flex items-center gap-2 text-[12px] px-1 py-1 rounded-md transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-white/45 hover:text-white/80"
                    }`}
                  >
                    <span className={`inline-flex w-5 text-[10px] tabular-nums ${isActive ? "text-brand" : "text-white/30"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{s.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
