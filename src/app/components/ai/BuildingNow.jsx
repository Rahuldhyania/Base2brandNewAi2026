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
  const [isScrollMode, setIsScrollMode] = useState(false);

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
    const mq = window.matchMedia("(min-width: 1024px)");
    const updateScrollMode = () => setIsScrollMode(mq.matches);
    updateScrollMode();
    mq.addEventListener("change", updateScrollMode);
    return () => mq.removeEventListener("change", updateScrollMode);
  }, []);

  useLayoutEffect(() => {
    if (!isScrollMode) {
      setPinPhase("before");
      return;
    }

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
  }, [isScrollMode]);

  const jumpTo = (i) => {
    if (!isScrollMode) {
      setActive(i);
      return;
    }
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
  const primaryStroke = "var(--b2b-primary)";
  const secondaryStroke = "var(--b2b-primary)";

  const detailCard = (
    <motion.div
      key={active}
      initial={{ opacity: 0, y: 18, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="b2b-card p-5 sm:p-7 md:p-10 h-full relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-(--b2b-primary)/20 blur-[100px] pointer-events-none" />
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
        <circle cx="50" cy="50" r="3" fill="var(--b2b-primary)" />
      </svg>

      <div className="relative flex items-center gap-3">
        <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-(--b2b-primary)/20 border border-(--b2b-primary) text-(--b2b-primary) shrink-0">
          <Icon className="w-5 h-5" />
        </span>
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/40 leading-snug">
          {it.tagline}
        </span>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.45 }}
        className="relative mt-5 sm:mt-7 font-display text-xl sm:text-2xl lg:text-5xl tracking-[-0.03em] font-medium leading-[1.05]"
      >
        {it.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.16, duration: 0.45 }}
        className="relative mt-4 sm:mt-5 text-sm sm:text-base text-white/55 leading-relaxed max-w-xl"
      >
        {it.desc}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.45 }}
        className="relative mt-6 sm:mt-8 flex flex-wrap gap-2"
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

      <div className="relative mt-6 sm:mt-9 pt-4 sm:pt-5 border-t border-white/5 flex items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/35">
          Program {String(active + 1).padStart(2, "0")} / {ITEMS.length}
        </span>
        <a
          href="#contact"
          data-testid={`building-now-cta-${active}`}
          className="text-xs font-mono uppercase tracking-[0.2em] text-(--b2b-primary) hover:text-white transition-colors shrink-0"
        >
          Engage →
        </a>
      </div>
    </motion.div>
  );

  const tabList = (
    <div className="lg:col-span-5 space-y-1 sm:space-y-1.5">
      {ITEMS.map((item, i) => {
        const ItemIcon = icons[item.icon];
        const isActive = i === active;
        return (
          <button
            key={item.title}
            onClick={() => jumpTo(i)}
            data-testid={`building-now-tab-${i}`}
            className={`group w-full text-left flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl border transition-all duration-500 ${
              isActive
                ? "bg-(--b2b-primary)/20 border-(--b2b-primary)/50"
                : "bg-transparent border-transparent hover:border-white/10 hover:bg-white/2"
            }`}
          >
            <motion.span
              animate={{ scale: isActive ? 1.05 : 1 }}
              transition={{ duration: 0.35 }}
              className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg shrink-0 border border-white/8 ${
                isActive
                  ? "bg-(--b2b-primary)/20 text-(--b2b-primary)"
                  : "bg-white/4 text-white/40"
              }`}
            >
              <ItemIcon className="w-4 h-4" />
            </motion.span>
            <span className="flex-1 min-w-0">
              <span
                className={`block font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase ${
                  isActive ? "text-(--b2b-primary)" : "text-white/30"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`block font-display font-medium text-sm sm:text-base md:text-lg truncate ${
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
              className="hidden md:block w-1 rounded-full bg-linear-to-b from-(--b2b-primary)/30 to-(--b2b-primary)"
            />
          </button>
        );
      })}

      {isScrollMode && (
        <div className="mt-4 sm:mt-6 relative h-0.5 rounded-full bg-white/8 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-linear-to-r from-(--b2b-primary) via-[rgba(var(--b2b-primary-rgb),0.8)] to-(--b2b-primary)"
            style={{ width: progressWidth }}
          />
        </div>
      )}
    </div>
  ); 

  const sectionHeader = (
    <Reveal>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-4 md:mb-10">
        <div>
          <ShiningText testId="building-now-eyebrow">{highlightTag}</ShiningText>
          <h2
            className="mt-3 sm:mt-4 font-display text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight max-w-3xl text-balance"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <p
          className="max-w-md text-sm sm:text-base text-white/50 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </Reveal>
  );

  if (!isScrollMode) {
    return (
      <section
        data-testid="building-now-section"
        className="relative border-y border-white/5 bg-(--b2b-bg) py-12 md:py-16"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[rgba(var(--b2b-primary-rgb),0.12)] blur-[120px]" />
          <div className="grain" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
          {sectionHeader}
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-10 items-start">
            {tabList}
            <div className="lg:col-span-7 relative">{detailCard}</div>
          </div>
        </div>
      </section>
    );
  }

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

        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-6 lg:py-0">
          {sectionHeader}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {tabList}
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]">
              {detailCard}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingNow;
