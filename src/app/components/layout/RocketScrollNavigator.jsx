'use client';
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ROCKET_PATH } from "../../components/visual/OfficialLogo";

/**
 * Right-side vertical scroll-spy rail.
 *
 * Behaviour requested by stakeholder:
 *  - Rocket points downward (descending into space) along an orange progress line.
 *  - Sequence circles run top → bottom, one per section.
 *  - Each circle carries a "dynamic" marketing-style label.
 *  - Only the ACTIVE circle reveals its label (orange, glowing). Other circles
 *    reveal their label on hover. Clicking jumps to the section.
 *
 * Visible only on lg+ screens to keep mobile clean.
 */

const SECTIONS = [
  { id: "top", label: "Welcome to Base2Brand" },
  { id: "trust", label: "How We Do Things" },
  { id: "footprint", label: "Clients Network" },
  { id: "services", label: "What We Build" },
  { id: "solutions", label: "Solutions in Motion" },
  { id: "voices", label: "Voices of Success" },
  { id: "industries", label: "Industries We Power" },
  { id: "innovation", label: "Innovation Lab" },
  { id: "case-studies", label: "Proof in Action" },
  { id: "govt", label: "Public Impact" },
  { id: "global", label: "Global Footprint" },
  { id: "insights", label: "Signals & Insights" },
  { id: "contact", label: "Let's Build Together" },
];

export function RocketScrollNavigator() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [railHeight, setRailHeight] = useState(420);
  const [isScrolling, setIsScrolling] = useState(false);
  const idleTimerRef = useRef(null);

  // Measure rail height for rocket Y translation
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setRailHeight(containerRef.current.offsetHeight);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Scroll-spy: pick the section whose top is closest to 35% of viewport.
  // Also flag `isScrolling` so labels can fade out when the user is idle.
  useEffect(() => {
    const computeActive = () => {
      const offset = window.innerHeight * 0.35;
      let nextIdx = 0;
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i].id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0) nextIdx = i;
      }
      setActiveIndex((prev) => (prev === nextIdx ? prev : nextIdx));
    };
    const onScroll = () => {
      computeActive();
      setIsScrolling(true);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => setIsScrolling(false), 900);
    };
    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  const progressHeight = useTransform(smoothProgress, (v) => `${v * 100}%`);
  const rocketY = useTransform(smoothProgress, (v) =>
    Math.round(v * (railHeight - 28))
  );
  const progressPercent = useTransform(smoothProgress, (v) =>
    `${Math.round(v * 100).toString().padStart(2, "0")}%`
  );

  const onJump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const dots = useMemo(
    () =>
      SECTIONS.map((s, i) => ({
        ...s,
        // distribute evenly along the rail
        topPct: (i / (SECTIONS.length - 1)) * 100,
      })),
    []
  );

  return (
    <aside
      data-testid="rocket-scroll-navigator"
      aria-hidden="false"
      className="hidden lg:flex fixed right-6 xl:right-8 top-1/2 -translate-y-1/2 z-40 select-none pointer-events-none"
    >
      <div className="relative flex items-start gap-3 pointer-events-auto">
        {/* Progress % indicator (kept small, top-aligned with the rail) */}
        <div className="flex flex-col items-end h-[460px] py-1">
          <span
            className="text-[10px] font-mono-display uppercase tracking-[0.28em] text-mute"
            data-testid="rocket-nav-progress"
          >
            <motion.span>{progressPercent}</motion.span>
          </span>
        </div>

        {/* Rail + rocket */}
        <div
          ref={containerRef}
          className="relative h-[460px] w-[18px] flex items-center justify-center"
        >
          {/* base track */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/12" />

          {/* orange progress fill */}
          <motion.div
            style={{ height: progressHeight }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-orange-brand"
          >
            <span
              className="absolute inset-0 blur-[3px] bg-orange-brand opacity-70"
              aria-hidden
            />
          </motion.div>

          {/* dots */}
          {dots.map((d, i) => {
            const active = i === activeIndex;
            const reached = i <= activeIndex;
            return (
              <button
                type="button"
                key={d.id}
                onClick={() => onJump(d.id)}
                aria-label={`Jump to ${d.label}`}
                aria-current={active ? "true" : undefined}
                data-testid={`rocket-nav-dot-${d.id}`}
                className="group absolute left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-5 h-5"
                style={{ top: `${d.topPct}%` }}
              >
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: active ? 10 : 6,
                    height: active ? 10 : 6,
                    background: reached
                      ? "#ff6a00"
                      : "rgba(255,255,255,0.35)",
                    boxShadow: active
                      ? "0 0 0 3px rgba(255,106,0,0.18), 0 0 14px rgba(255,106,0,0.7)"
                      : "none",
                  }}
                />

                {/* Inline label - visible only when active AND user is scrolling.
                    Reveals on hover for any circle. Fades out on scroll-idle. */}
                <span
                  data-testid={`rocket-nav-label-${d.id}`}
                  className={[
                    "absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap",
                    "rounded-full border bg-[#04061a]/95 backdrop-blur-md",
                    "px-3 py-1 text-[10px] font-mono-display uppercase tracking-[0.22em]",
                    "transition-all duration-300 pointer-events-none",
                    active && isScrolling
                      ? "opacity-100 translate-x-0 border-orange-brand/60 text-orange-brand"
                      : active
                      ? "opacity-0 -translate-x-1 border-orange-brand/60 text-orange-brand group-hover:opacity-100 group-hover:translate-x-0"
                      : "opacity-0 -translate-x-1 border-line-strong text-white group-hover:opacity-100 group-hover:translate-x-0",
                  ].join(" ")}
                  style={
                    active
                      ? { textShadow: "0 0 12px rgba(255,106,0,0.55)" }
                      : undefined
                  }
                  aria-hidden={!active}
                >
                  {d.label}
                </span>
              </button>
            );
          })}

          {/* rocket - rotated 180° so the nose points downward into space,
              with the flame trail rising upward behind it */}
          <motion.div
            style={{ y: rocketY }}
            className="absolute top-0 left-1/1 -translate-x-1/2"
            data-testid="rocket-nav-rocket"
          >
            <div className="relative -translate-y-1/2" style={{ transform: "rotate(180deg)" }}>
              <span
                className="absolute left-1/2 -translate-x-1/2 top-3 block w-px h-5 bg-orange-brand/60 blur-[1px]"
                aria-hidden
              />
              <svg
                viewBox="540 -4 32 60"
                width={22}
                height={28}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                style={{
                  filter:
                    "drop-shadow(0 0 6px rgba(255,106,0,0.7)) drop-shadow(0 0 12px rgba(255,106,0,0.35))",
                }}
              >
                <path d={ROCKET_PATH} fill="#ff6a00" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </aside>
  );
}

export default RocketScrollNavigator;
