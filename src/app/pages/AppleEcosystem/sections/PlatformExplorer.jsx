'use client'
import React, { useRef, useState, useLayoutEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Smartphone, Tablet, Watch, Glasses, Tv, Car } from "lucide-react";
import PlatformSwitcher from "@/components/apple/PlatformSwitcher";
import { APPLE } from "@/constants/testIds";

const PLATFORMS = [
  { id: "iphone",  label: "iPhone",       icon: Smartphone },
  { id: "ipad",    label: "iPad",         icon: Tablet },
  { id: "watch",   label: "Apple Watch",  icon: Watch },
  { id: "vision",  label: "Vision Pro",   icon: Glasses },
  { id: "tv",      label: "Apple TV",     icon: Tv },
  { id: "carplay", label: "CarPlay",      icon: Car },
];

const DETAILS = {
  iphone: {
    headline: "The flagship surface — and your highest-leverage canvas.",
    body:
      "Most enterprise mobile journeys start (and end) on iPhone. We design and engineer iPhone apps in Swift and SwiftUI with App Intents, WidgetKit, Live Activities and Apple Intelligence built in — so the experience feels native, contextual and trustworthy from the first tap.",
    tags: ["Swift", "SwiftUI", "App Intents", "WidgetKit", "Live Activities"],
    stat: { value: "60fps", label: "Native interaction floor" },
  },
  ipad: {
    headline: "A productivity surface, engineered for power workflows.",
    body:
      "iPad is where complex enterprise work happens — multi-column layouts, drag and drop, Pencil input, Stage Manager and external display support. We build iPad apps as first-class citizens, not stretched phone UI, so field operators, clinicians and creators get real tools.",
    tags: ["iPadOS", "Pencil & Scribble", "Stage Manager", "Drag & Drop"],
    stat: { value: "12.9″", label: "Designed for the canvas" },
  },
  watch: {
    headline: "Glanceable, contextual, always on the wrist.",
    body:
      "Apple Watch is the most intimate surface in computing. We build watchOS apps and complications around the only metric that matters on the wrist — time-to-information. HealthKit-backed workflows, Smart Stack widgets, Double Tap interactions and on-wrist payments.",
    tags: ["watchOS", "Complications", "Smart Stack", "HealthKit"],
    stat: { value: "<1s", label: "Glance-to-action target" },
  },
  vision: {
    headline: "Spatial computing for serious enterprise work.",
    body:
      "Vision Pro is not a gimmick — it is the new high-end workstation. We build immersive applications for product visualization, simulation, surgical planning, remote inspection, training and spatial collaboration using SwiftUI, RealityKit and ARKit.",
    tags: ["visionOS", "RealityKit", "ARKit", "Shared Space"],
    stat: { value: "Spatial", label: "First-class design language" },
  },
  tv: {
    headline: "The shared screen — content, dashboards, and signage.",
    body:
      "tvOS apps for premium media products, broadcast operations centres, retail signage, hospitality experiences and conference-room collaboration. Built around the focus engine and Siri Remote, not a touch screen.",
    tags: ["tvOS", "Focus Engine", "TVMLKit", "Top Shelf"],
    stat: { value: "4K HDR", label: "Render target" },
  },
  carplay: {
    headline: "The hands-on-wheel surface for mobility and logistics.",
    body:
      "CarPlay extensions for navigation, EV charging, fleet operations, delivery logistics, parking and audio. Engineered to Apple's strict CarPlay guidelines so the experience clears review and stays safe.",
    tags: ["CarPlay", "Templates", "Sirius / Audio", "EV Charging"],
    stat: { value: "Hands-free", label: "Designed for safety" },
  },
};

const NAV_HEIGHT = 96;
const SCROLL_PER_TAB_VH = 50;
const EASE = [0.16, 1, 0.3, 1];

const leftVariants = {
  initial: { opacity: 0, x: -24, scale: 0.98 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: 18, scale: 0.98 },
};

const rightVariants = {
  initial: { opacity: 0, x: 24, scale: 0.96 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -14, scale: 0.96 },
};

function PlatformDetailCard({ platform, detail }) {
  const label = PLATFORMS.find((p) => p.id === platform)?.label;

  return (
  <div
    className="relative b2b-glass-strong rounded-3xl p-6 sm:p-8 overflow-hidden"
    data-testid={APPLE.platformDetail}
  >
    <div
      className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(10,132,255,0.22) 0%, transparent 70%)" }}
    />
    <div className="relative grid lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-10 items-start">
      <div className="relative min-h-[280px] sm:min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`left-${platform}`}
            layout
            variants={leftVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.48, ease: EASE }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#64D2FF]">
              {label}
            </p>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl leading-tight max-w-2xl">
              {detail.headline}
            </h3>
            <p className="mt-5 text-white/65 leading-relaxed max-w-xl">
              {detail.body}
            </p>
            <motion.div layout className="mt-7 flex flex-wrap gap-2">
              {detail.tags.map((t) => (
                <motion.span
                  layout
                  key={t}
                  className="text-[11px] font-mono uppercase tracking-[0.16em] text-white/65 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`right-${platform}`}
            layout
            variants={rightVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.48, ease: EASE, delay: 0.07 }}
            className="b2b-glass rounded-2xl p-6 lg:p-7 h-full"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
              Engineering bar
            </p>
            <p className="mt-3 font-display text-4xl sm:text-5xl apple-text-gradient">
              {detail.stat.value}
            </p>
            <p className="mt-1.5 text-sm text-white/55">{detail.stat.label}</p>
            <div className="mt-7 pt-5 border-t border-white/10 space-y-2 text-xs text-white/55">
              <p>· Native Apple frameworks only — no cross-platform shims.</p>
              <p>· TestFlight CI, App Store Connect API, automated phased releases.</p>
              <p>· Crash-free sessions tracked against an internal SLA.</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </div>
  );
}

export default function PlatformExplorer() {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [pinPhase, setPinPhase] = useState("before");

  const platform = PLATFORMS[activeIndex].id;
  const detail = DETAILS[platform];

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
  const glowOpacity = useTransform(smoothed, [0, 0.15, 0.85, 1], [0.6, 1, 1, 0.6]);

  useMotionValueEvent(smoothed, "change", (v) => {
    if (reduce) return;
    const next = Math.min(
      PLATFORMS.length - 1,
      Math.max(0, Math.floor(v * PLATFORMS.length))
    );
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  useLayoutEffect(() => {
    if (reduce) return;

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
  }, [reduce]);

  const jumpTo = (index) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const target =
      window.scrollY +
      rect.top -
      NAV_HEIGHT +
      ((index + 0.5) / PLATFORMS.length) * (rect.height - window.innerHeight);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const handlePlatformChange = (id) => {
    const index = PLATFORMS.findIndex((p) => p.id === id);
    if (index < 0) return;

    if (reduce) {
      setActiveIndex(index);
      return;
    }
    jumpTo(index);
  };

  const scrollTrackHeight = `${PLATFORMS.length * SCROLL_PER_TAB_VH}vh`;
  const panelHeight = `calc(100vh - ${NAV_HEIGHT}px)`;

  const panelClass =
    pinPhase === "pinned"
      ? "fixed left-0 right-0 z-20"
      : pinPhase === "after"
        ? "absolute left-0 right-0 bottom-0 z-10"
        : "relative z-10";

  const panelStyle =
    pinPhase === "pinned"
      ? { top: '10px', height: panelHeight }
      : { height: panelHeight };

  if (reduce) {
    return (
      <section className="b2b-container py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#5AC8FA]">
            Ecosystem Explorer
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-4 max-w-4xl">
            Every device. Same engineering team. One coherent product.
          </h2>
          <p className="mt-5 text-white/60 max-w-2xl leading-relaxed">
            Pick a surface to see how we approach it — the technologies, the design constraints,
            and what we consider the engineering bar for production quality.
          </p>
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto px-2">
          <PlatformSwitcher
            platforms={PLATFORMS}
            value={platform}
            onChange={handlePlatformChange}
            testId={APPLE.platformSwitcher}
          />
        </div>

        <PlatformDetailCard platform={platform} detail={detail} />
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: scrollTrackHeight }}
      aria-label="Apple platform explorer"
    >
      <motion.div
        className={`${panelClass} flex items-center overflow-hidden`}
        style={panelStyle}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: glowOpacity }}
        >
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(10,132,255,0.08) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        <div className="relative w-full b2b-container py-8 md:py-10">
          <div className="flex flex-col items-center text-center mb-8 md:mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#5AC8FA]">
              Ecosystem Explorer
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-4 max-w-4xl">
              Every device. Same engineering team. One coherent product.
            </h2>
            <p className="mt-4 md:mt-5 text-white/60 max-w-2xl leading-relaxed text-sm sm:text-base">
              Scroll through each surface to see how we approach it — the technologies,
              the design constraints, and what we consider the engineering bar.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 mb-8 md:mb-10">
            <div className="flex justify-center overflow-x-auto px-2 max-w-full">
              <PlatformSwitcher
                platforms={PLATFORMS}
                value={platform}
                onChange={handlePlatformChange}
                testId={APPLE.platformSwitcher}
              />
            </div>

            <div className="w-full max-w-md h-0.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: progressWidth,
                  background:
                    "linear-gradient(90deg, rgba(10,132,255,0.5), rgba(90,200,250,0.9))",
                }}
              />
            </div>

            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
              {String(activeIndex + 1).padStart(2, "0")} / {String(PLATFORMS.length).padStart(2, "0")}
            </p>
          </div>

          <PlatformDetailCard platform={platform} detail={detail} />
        </div>
      </motion.div>
    </section>
  );
}
