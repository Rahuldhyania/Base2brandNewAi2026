'use client'
import React, { useRef, useState, useLayoutEffect } from "react";
import {
  m,
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
    headline: "The flagship surface and your highest-leverage customer canvas.",
    body:
      "Most digital journeys start or end on iPhone. Our iPhone app development team builds native iOS apps with clean UX, strong performance, secure architecture and conversion-focused user flows.",
    tags: ["Swift", "SwiftUI", "App Intents", "WidgetKit", "Live Activities", "UIKit"],
    stat: { value: "60fps", label: "Native interaction floor" },
  },
  ipad: {
    headline: "Designed for productivity, content and field workflows.",
    body:
      "iPad experiences need space, clarity and stronger task flows. We build iPad apps for sales teams, operations, healthcare, education, training, dashboards and assisted workflows.",
    tags: ["iPadOS", "Split View", "Stage Manager", "Apple Pencil", "Multitasking"],
    stat: { value: "12.9″", label: "Designed for the canvas" },
  },
  watch: {
    headline: "Built for instant action and glanceable value.",
    body:
      "We design Apple Watch experiences that reduce friction — alerts, approvals, health signals, task updates, field notifications and companion actions.",
    tags: ["watchOS", "HealthKit", "WidgetKit", "Complications", "Watch Connectivity"],
    stat: { value: "<1s", label: "Glance-to-action target" },
  },
  vision: {
    headline: "Spatial computing for products that need depth, training and immersion.",
    body:
      "Our Vision Pro app development practice helps businesses create immersive applications for product visualization, enterprise training, medical education, simulation, collaboration and spatial dashboards.",
    tags: ["VisionOS", "RealityKit", "ARKit", "Spatial workflows", "Reality Composer Pro"],
    stat: { value: "Spatial", label: "First-class design language" },
  },
  tv: {
    headline: "Large-screen experiences built for clarity and control.",
    body:
      "We create Apple TV applications for content, training, enterprise dashboards, hospitality, retail experiences and internal communication systems.",
    tags: ["tvOS", "SwiftUI", "AVKit", "TVML", "Focus Engine"],
    stat: { value: "4K HDR", label: "Render target" },
  },
  carplay: {
    headline: "Vehicle-ready interfaces designed for safety and speed.",
    body:
      "CarPlay experiences need focus, simplicity and operational reliability. We build CarPlay interfaces for mobility, logistics, transport, navigation-linked workflows and service platforms.",
    tags: ["CarPlay", "MapKit", "SiriKit", "Core Location", "SwiftUI"],
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
    className="relative b2b-glass-strong rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden"
    data-testid={APPLE.platformDetail}
  >
    <div
      className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(10,132,255,0.22) 0%, transparent 70%)" }}
    />
    <div className="relative grid lg:grid-cols-[1.6fr_1fr] gap-6 lg:gap-10 items-start">
      <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-[300px]">
        <AnimatePresence mode="wait">
          <m.div
            key={`left-${platform}`}
            layout
            variants={leftVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.48, ease: EASE }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#64D2FF]">
              {label}
            </p>
            <h3 className="mt-2 font-display text-xl sm:text-2xl leading-tight max-w-2xl">
              {detail.headline}
            </h3>
            <p className="mt-3 sm:mt-5 text-sm sm:text-base text-white/65 leading-relaxed max-w-xl">
              {detail.body}
            </p>
            <m.div layout className="mt-5 sm:mt-7 flex flex-wrap gap-2">
              {detail.tags.map((t) => (
                <m.span
                  layout
                  key={t}
                  className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em] sm:tracking-[0.16em] text-white/65 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
                >
                  {t}
                </m.span>
              ))}
            </m.div>
          </m.div>
        </AnimatePresence>
      </div>

      <div className="relative min-h-[220px] sm:min-h-[260px]">
        <AnimatePresence mode="wait">
          <m.div
            key={`right-${platform}`}
            layout
            variants={rightVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.48, ease: EASE, delay: 0.07 }}
            className="b2b-glass rounded-2xl p-4 sm:p-6 lg:p-7 h-full"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/45">
              Engineering bar
            </p>
            <p className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl apple-text-gradient">
              {detail.stat.value}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-white/55">{detail.stat.label}</p>
            <div className="mt-5 sm:mt-7 pt-4 sm:pt-5 border-t border-white/10 space-y-2 text-[10px] sm:text-xs text-white/55">
              <p>· Native Apple frameworks only — no cross-platform shims.</p>
              <p>· TestFlight CI, App Store Connect API, automated phased releases.</p>
              <p>· Crash-free sessions tracked against an internal SLA.</p>
            </div>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  </div>
  );
}

export default function PlatformExplorer() {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion() || typeof window !== 'undefined' && window.innerWidth < 1024;
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
      <section className="b2b-container py-8 sm:py-12">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
            Ecosystem Explorer
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.05] tracking-tight mt-4 max-w-4xl">
            Every device your users touch, engineered under one product vision
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed">
            Apple products perform best when every surface feels connected. We design each device experience around its actual role — not by copying the same interface everywhere.
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto px-2">
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
      <m.div
        className={`${panelClass} flex items-center overflow-hidden`}
        style={panelStyle}
      >
        <m.div
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
        </m.div>

        <div className="relative w-full b2b-container py-6 sm:py-8 md:py-10 cursor-grab">
          <div className="flex flex-col items-center text-center mb-6 sm:mb-8 md:mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
              Ecosystem Explorer
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.05] tracking-tight mt-4 max-w-4xl">
              Every device your users touch, engineered under one product vision 

            </h2>
            <p className="mt-3 sm:mt-4 md:mt-5 text-white/60 max-w-2xl leading-relaxed text-xs sm:text-sm md:text-base">
              Apple products perform best when every surface feels connected. We design each device experience around its actual role — not by copying the same interface everywhere.

            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
            <div className="flex justify-center overflow-x-auto px-2 max-w-full">
              <PlatformSwitcher
                platforms={PLATFORMS}
                value={platform}
                onChange={handlePlatformChange}
                testId={APPLE.platformSwitcher}
              />
            </div>

            <div className="w-full max-w-md h-0.5 rounded-full bg-white/[0.06] overflow-hidden">
              <m.div
                className="h-full rounded-full"
                style={{
                  width: progressWidth,
                  background:
                    "linear-gradient(90deg, rgba(10,132,255,0.5), rgba(90,200,250,0.9))",
                }}
              />
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/35">
              {String(activeIndex + 1).padStart(2, "0")} / {String(PLATFORMS.length).padStart(2, "0")}
            </p>
          </div>

          <PlatformDetailCard platform={platform} detail={detail} />
        </div>
      </m.div>
    </section>
  );
}
