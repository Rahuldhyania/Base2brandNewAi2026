import React, { useEffect, useState } from "react";
import { HOME } from "@/constants/testIds";

const CHECKPOINTS = [
  { id: "launch", label: "Launch", icon: "rocket" },
  { id: "services", label: "Services" },
  { id: "solutions", label: "Solutions" },
  { id: "industries", label: "Industries" },
  { id: "work", label: "Work" },
  { id: "resources", label: "Resources" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

/**
 * MissionTracker — fixed left-side vertical progress indicator.
 * Highlights the current active section based on scroll intersection.
 * Rocket glyph moves between checkpoints; completed nodes glow orange.
 */
export default function MissionTracker({ activeId }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const p = doc.scrollTop / Math.max(1, doc.scrollHeight - doc.clientHeight);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = Math.max(
    0,
    CHECKPOINTS.findIndex((c) => c.id === activeId)
  );

  return (
    <aside
      data-testid={HOME.mission.tracker}
      className="hidden lg:flex flex-col fixed left-6 top-1/2 -translate-y-1/2 z-40 select-none"
      aria-label="Mission checkpoints"
    >
      <div className="b2b-glass rounded-2xl px-3.5 py-4 flex flex-col gap-1 relative w-[148px]">
        <div className="eyebrow mb-3 opacity-80">Mission</div>

        {/* Vertical rail */}
        <div className="absolute left-[22px] top-[46px] bottom-4 w-px bg-white/10" />
        {/* Fill rail */}
        <div
          className="absolute left-[22px] top-[46px] w-px bg-[var(--b2b-orange)]"
          style={{
            height: `calc(${progress * 100}% - 46px)`,
            transition: "height 200ms linear",
            boxShadow: "0 0 8px rgba(244,123,82,0.6)",
          }}
        />

        {CHECKPOINTS.map((cp, i) => {
          const isActive = i === activeIndex;
          const isDone = i < activeIndex;
          return (
            <a
              key={cp.id}
              href={`#${cp.id}`}
              data-testid={HOME.mission.checkpoint(cp.id)}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(cp.id);
                if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -60 });
                else if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-3 py-1.5 pr-2 relative"
            >
              <span
                className="relative w-3 h-3 rounded-full flex items-center justify-center"
                style={{
                  background: isActive || isDone ? "var(--b2b-orange)" : "var(--b2b-void)",
                  border: `1.5px solid ${isActive || isDone ? "var(--b2b-orange)" : "rgba(255,255,255,0.25)"}`,
                  boxShadow: isActive ? "0 0 16px rgba(244,123,82,0.55)" : "none",
                  transition: "background 240ms ease, box-shadow 240ms ease, border-color 240ms ease",
                }}
              >
                {isActive && (
                  <span
                    className="absolute inset-[-4px] rounded-full border border-[var(--b2b-orange)] opacity-70"
                    style={{ animation: "waypoint-pulse 1.6s ease-out infinite" }}
                  />
                )}
              </span>
              <span
                className="font-mono text-[11px] tracking-[0.18em] uppercase transition-colors"
                style={{
                  color: isActive ? "var(--b2b-orange)" : isDone ? "var(--b2b-text)" : "var(--b2b-text-muted)",
                }}
              >
                {cp.icon === "rocket" ? "🚀 " : ""}{cp.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
