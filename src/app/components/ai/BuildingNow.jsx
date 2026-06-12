'use client'
import { useRef, useState, useLayoutEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";
import {
  Users,
  GitBranch,
  Briefcase,
  BrainCircuit,
  PhoneCall,
  LayoutDashboard,
} from "lucide-react";

const NAV_HEIGHT = 96;

const icons = {
  Users,
  GitBranch,
  Briefcase,
  BrainCircuit,
  PhoneCall,
  LayoutDashboard,
};

const BuildingNow = ({title, description, highlightTag, ITEMS}) => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [pinPhase, setPinPhase] = useState("before");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start ${NAV_HEIGHT}px`, "end end"],
  });
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.5,
  });
  const progressWidth = useTransform(smoothed, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(smoothed, "change", (v) => {
    const next = Math.min(
      ITEMS.length - 1,
      Math.max(0, Math.floor(v * ITEMS.length))
    );
    setActive((prev) => (prev === next ? prev : next));
  });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updatePin = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top > NAV_HEIGHT) {
        setPinPhase("before");
      } else if (rect.bottom <= viewportHeight) {
        setPinPhase("after");
      } else {
        setPinPhase("pinned");
      }
    };

    updatePin();
    window.addEventListener("scroll", updatePin, { passive: true });
    window.addEventListener("resize", updatePin);
    return () => {
      window.removeEventListener("scroll", updatePin);
      window.removeEventListener("resize", updatePin);
    };
  }, []);

  const jumpTo = (i) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const target =
      window.scrollY +
      rect.top -
      NAV_HEIGHT +
      ((i + 0.5) / ITEMS.length) * (rect.height - window.innerHeight);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const it = ITEMS[active];
  const Icon = icons[it.icon];
  const primaryStroke = "rgba(var(--b2b-primary-rgb),0.3)";
  const secondaryStroke = "rgba(var(--b2b-primary-2-rgb),0.25)";

  const scrollTrackHeight = `${ITEMS.length * 50}vh`;
  const panelHeight = `calc(100vh - ${NAV_HEIGHT}px)`;

  const panelClass =
    pinPhase === "pinned"
      ? "fixed left-0 right-0 z-20"
      : pinPhase === "after"
        ? "absolute left-0 right-0 bottom-0 z-10"
        : "relative z-10";

  const panelStyle =
    pinPhase === "pinned"
      ? { top: NAV_HEIGHT, height: panelHeight }
      : { height: panelHeight };

  return (
    <section
      ref={sectionRef}
      data-testid="building-now-section"
      className="relative border-y border-white/5 bg-(--b2b-bg)"
      style={{ height: scrollTrackHeight }}
    >
      <div
        className={`${panelClass} flex items-center overflow-hidden bg-(--b2b-bg)`}
        style={panelStyle}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[rgba(var(--b2b-primary-rgb),0.12)] blur-[120px]" />
          <div className="grain" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <ShiningText testId="building-now-eyebrow">
                  {highlightTag}
                </ShiningText>
                <h2 
                  className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight max-w-3xl text-balance"
                  dangerouslySetInnerHTML={{ __html: title }}
               />
              </div>
              <p 
               className="max-w-md text-white/50 leading-relaxed"
               dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left: vertical scroll-driven list */}
            <div className="lg:col-span-5 space-y-1.5">
              {ITEMS.map((item, i) => {
                const ItemIcon = icons[item.icon];
                const isActive = i === active;
                return (
                  <button
                    key={item.title}
                    onClick={() => jumpTo(i)}
                    data-testid={`building-now-tab-${i}`}
                    className={`group w-full text-left flex items-center gap-4 py-3 px-4 rounded-xl border transition-all duration-500 ${
                      isActive
                        ? "bg-[rgba(var(--b2b-primary-rgb),0.12)] border-[rgba(var(--b2b-primary-rgb),0.4)]"
                        : "bg-transparent border-transparent hover:border-white/10 hover:bg-white/2"
                    }`}
                  >
                    <motion.span
                      animate={{
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.35 }}
                      className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 border border-white/8 ${
                        isActive
                          ? "bg-[rgba(var(--b2b-primary-rgb),0.2)] text-(--b2b-primary-2)"
                          : "bg-white/4 text-white/40"
                      }`}
                    >
                      <ItemIcon className="w-4 h-4" />
                    </motion.span>
                    <span className="flex-1 min-w-0">
                      <span
                        className={`block font-mono text-xs tracking-[0.25em] uppercase ${
                          isActive ? "text-(--b2b-primary-2)" : "text-white/30"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`block font-display font-medium text-base md:text-lg truncate ${
                          isActive ? "text-white" : "text-white/55"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>
                    <motion.span
                      animate={{
                        height: isActive ? 32 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.35 }}
                      className="hidden md:block w-1 rounded-full bg-linear-to-b from-(--b2b-primary-2) to-(--b2b-primary)"
                    />
                  </button>
                );
              })}

              {/* Scroll-linked progress bar */}
              <div className="mt-6 relative h-0.5 rounded-full bg-white/8 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-linear-to-r from-(--b2b-primary) via-[rgba(var(--b2b-primary-rgb),0.8)] to-(--b2b-primary-2)"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>

            {/* Right: active detail card */}
            <div className="lg:col-span-7 relative min-h-[380px]">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="b2b-card p-7 md:p-10 h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[rgba(var(--b2b-primary-rgb),0.12)] blur-[100px] pointer-events-none" />
                <svg
                  className="absolute -top-8 -right-8 w-44 h-44 opacity-50 pointer-events-none"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="32"
                    fill="none"
                    stroke={primaryStroke}
                    strokeWidth="0.4"
                    strokeDasharray="1.5 2.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="22"
                    fill="none"
                    stroke={secondaryStroke}
                    strokeWidth="0.3"
                  />
                  <circle cx="50" cy="50" r="3" fill="var(--b2b-primary-2)" />
                </svg>

                <div className="relative flex items-center gap-3">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[rgba(var(--b2b-primary-rgb),0.15)] border border-[rgba(var(--b2b-primary-rgb),0.3)] text-(--b2b-primary-2)">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/40">
                    {it.tagline}
                  </span>
                </div>

                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.45 }}
                  className="relative mt-7 font-display text-xl sm:text-2xl lg:text-5xl tracking-[-0.03em] font-medium leading-[1.05]"
                >
                  {it.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.16, duration: 0.45 }}
                  className="relative mt-5 text-white/55 leading-relaxed max-w-xl"
                >
                  {it.desc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.45 }}
                  className="relative mt-8 flex flex-wrap gap-2"
                >
                  {it.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/4 border border-white/10 text-white/70"
                    >
                      {m}
                    </span>
                  ))}
                </motion.div>

                <div className="relative mt-9 pt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/35">
                    Program {String(active + 1).padStart(2, "0")} / {ITEMS.length}
                  </span>
                  <a
                    href="#contact"
                    data-testid={`building-now-cta-${active}`}
                    className="text-xs font-mono uppercase tracking-[0.2em] text-[rgba(var(--b2b-primary-2-rgb),0.8)] hover:text-white transition-colors"
                  >
                    Engage →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingNow;
