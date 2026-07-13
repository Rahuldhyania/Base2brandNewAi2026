"use client";
import { useRef, useState, useLayoutEffect } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import ShiningText from "@/components/site/ShiningText";
import BackgroundPaths from "@/components/site/BackgroundPaths";

const STAGES = [
  {
    label: "Stage 01 — AI Experiments",
    desc: "Teams test tools, prompts and basic generative AI solutions without deep workflow integration.",
    note: "Outcome: Early learning, limited business impact.",
  },
  {
    label: "Stage 02 — AI Assistants",
    desc: "AI supports individuals with content, summaries, research, customer replies and repetitive tasks.",
    note: "Outcome: Personal productivity improves.",
  },
  {
    label: "Stage 03 — Agentic Systems",
    desc: "Goal-driven AI agents use tools, data and policy boundaries to complete structured business tasks.",
    note: "Outcome: Software starts planning, not just responding.",
  },
  {
    label: "Stage 04 — Workflow Automation",
    desc: "AI connects with CRM, ecommerce, support, ads, sales and internal systems to automate repeatable workflows.",
    note: "Outcome: Teams save time and reduce manual dependency.",
  },
  {
    label: "Stage 05 — Decision Intelligence",
    desc: "AI recommends actions, prioritizes work, scores opportunities and supports business decisions with live data.",
    note: "Outcome: Faster, smarter operating decisions.",
  },
  {
    label: "Stage 06 — Autonomous Operations",
    desc: "AI agents, copilots, workflows and business systems operate together with governance, visibility and human control.",
    note: "Outcome: AI becomes part of the business operating model.",
  },
];

const NAV_HEIGHT = 96;
const SCROLL_PER_STAGE_VH = 45;

const polar = (angle, radius) => {
  const a = ((angle - 90) * Math.PI) / 180;
  return { x: 50 + radius * Math.cos(a), y: 50 + radius * Math.sin(a) };
};

const MaturityFramework = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [pinPhase, setPinPhase] = useState("before");
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start ${NAV_HEIGHT}px`, "end end"],
  });

  // Smooth the raw progress with a spring
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.5,
  });

  // Indicator rotation goes from first node (0°) to last node (300°)
  const lastAngle = (360 / STAGES.length) * (STAGES.length - 1);
  const indicatorAngle = useTransform(smoothed, [0, 1], [0, lastAngle]);

  // Progress bar width
  const progressWidth = useTransform(smoothed, [0, 1], ["0%", "100%"]);

  // Update discrete active stage based on motion value
  useMotionValueEvent(smoothed, "change", (v) => {
    const next = Math.min(
      STAGES.length - 1,
      Math.max(0, Math.floor(v * STAGES.length)),
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

  const jumpToStage = (i) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const target =
      window.scrollY +
      rect.top -
      NAV_HEIGHT +
      ((i + 0.5) / STAGES.length) * (rect.height - window.innerHeight);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const scrollTrackHeight = `${STAGES.length * SCROLL_PER_STAGE_VH}vh`;
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
      data-testid="maturity-section"
      className="relative overflow-hidden bg-[#03030A]"
      style={{ height: scrollTrackHeight }}
    >
      <div
        className={`${panelClass} flex items-center overflow-hidden bg-[#03030A]`}
        style={panelStyle}
      >
        <div className="absolute inset-0 pointer-events-none">
          {/* <BackgroundPaths opacity={0.35} /> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.14),rgba(3,3,10,0)_70%)]" />
        </div>

        <div className="relative w-full">
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
              <ShiningText
                testId="maturity-eyebrow"
                className="justify-center mx-auto"
              >
                AI MATURITY FRAMEWORK
              </ShiningText>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance">
                The evolution of enterprise AI.
              </h2>
              <p className="mt-4 text-white/55 leading-relaxed">
                AI transformation does not happen in one jump. It moves from
                experimentation to automation, then from automation to
                autonomous operating systems. We help businesses identify where
                they are today and build the next practical stage.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Radial timeline */}
              <div className="lg:col-span-6">
                <div className="relative aspect-square w-full max-w-[460px] mx-auto">
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <radialGradient id="mat-core" cx="50%" cy="50%" r="50%">
                        <stop
                          offset="0%"
                          stopColor="#C084FC"
                          stopOpacity="0.95"
                        />
                        <stop
                          offset="100%"
                          stopColor="#6D28D9"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>

                    {[20, 30, 40].map((r, i) => (
                      <circle
                        key={r}
                        cx="50"
                        cy="50"
                        r={r}
                        fill="none"
                        stroke="rgba(139,92,246,0.18)"
                        strokeWidth="0.15"
                        strokeDasharray={i === 0 ? "1 2" : "0.5 1.5"}
                      />
                    ))}

                    <g
                      style={{
                        transformOrigin: "50% 50%",
                        animation: reduce
                          ? "none"
                          : "b2b-orbit-slow 80s linear infinite",
                      }}
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="rgba(168,85,247,0.22)"
                        strokeWidth="0.2"
                        strokeDasharray="1.5 2"
                      />
                    </g>

                    <circle cx="50" cy="50" r="10" fill="url(#mat-core)" />
                    <circle cx="50" cy="50" r="3" fill="#fff" opacity="0.9" />

                    {/* Static spokes */}
                    {STAGES.map((_, i) => {
                      const a = polar((360 / STAGES.length) * i, 40);
                      const dim = i > active;
                      return (
                        <line
                          key={i}
                          x1="50"
                          y1="50"
                          x2={a.x}
                          y2={a.y}
                          stroke={
                            dim
                              ? "rgba(139,92,246,0.10)"
                              : "rgba(192,132,252,0.55)"
                          }
                          strokeWidth={dim ? "0.10" : "0.20"}
                        />
                      );
                    })}
                  </svg>

                  {/* Smooth orbital indicator — driven by scroll */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      transformOrigin: "50% 50%",
                      rotate: indicatorAngle,
                    }}
                    aria-hidden="true"
                  >
                    <div className="absolute left-1/2 top-[10%] -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <span className="block w-3 h-3 rounded-full bg-[#C084FC] shadow-[0_0_24px_6px_rgba(192,132,252,0.7)]" />
                        <span className="absolute inset-0 w-3 h-3 rounded-full bg-[#C084FC] animate-ping opacity-50" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Stage nodes */}
                  {STAGES.map((s, i) => {
                    const angle = (360 / STAGES.length) * i;
                    const { x, y } = polar(angle, 40);
                    const isActive = i === active;
                    const isPast = i < active;
                    return (
                      <button
                        key={s.label}
                        data-testid={`maturity-node-${i}`}
                        onClick={() => jumpToStage(i)}
                        style={{ left: `${x}%`, top: `${y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                      >
                        <motion.span
                          animate={{
                            scale: isActive ? 1.25 : 1,
                            backgroundColor: isActive
                              ? "#C084FC"
                              : isPast
                                ? "#6D28D9"
                                : "#03030A",
                            borderColor: isActive
                              ? "#C084FC"
                              : isPast
                                ? "#A855F7"
                                : "rgba(139,92,246,0.6)",
                          }}
                          transition={{ duration: 0.4 }}
                          className="block w-3.5 h-3.5 rounded-full border-2 group-hover:border-[#C084FC]"
                        />
                        <span
                          className={`absolute left-1/2 -translate-x-1/2 mt-2.5 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                            isActive
                              ? "text-white"
                              : isPast
                                ? "text-white/50"
                                : "text-white/35"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </button>
                    );
                  })}

                  <div
                    data-testid="maturity-center-label"
                    className="absolute left-0 top-0 pointer-events-none"
                  >
                    <div className="font-mono text-xs tracking-[0.3em] uppercase text-[#C084FC]/80">
                      Active Stage
                    </div>
                    <div className="font-display text-xl sm:text-2xl font-medium text-white/90 mt-1">
                      {String(active + 1).padStart(2, "0")}
                      <span className="text-white/30 text-base">
                        {" "}
                        / {STAGES.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active stage description */}
              <div className="lg:col-span-6 relative min-h-[260px]">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="b2b-card p-6 md:p-8 relative overflow-hidden"
                  data-testid={`maturity-stage-${active}`}
                >
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#8B5CF6]/12 blur-[80px] pointer-events-none" />
                  <div className="relative flex items-center gap-3">
                    <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#C084FC]">
                      Stage {String(active + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 h-px bg-gradient-to-r from-[#8B5CF6]/60 to-transparent" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="relative mt-3 font-display text-xl sm:text-2xl font-medium tracking-tight"
                  >
                    {STAGES[active].label}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.18, duration: 0.5 }}
                    className="relative mt-4 text-white/65 leading-relaxed"
                  >
                    {STAGES[active].desc}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.26, duration: 0.5 }}
                    className="relative mt-3 text-sm text-white/40 italic"
                  >
                    {STAGES[active].note}
                  </motion.p>
                </motion.div>

                {/* Continuous progress bar (scroll-linked) */}
                <div className="mt-6 relative h-1 rounded-full bg-white/8 overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC]"
                    style={{ width: progressWidth }}
                  />
                </div>
                {/* Stage jump dots */}
                <div className="mt-3 flex items-center justify-between">
                  {STAGES.map((s, i) => (
                    <button
                      key={s.label}
                      type="button"
                      aria-label={`Jump to stage ${i + 1}: ${s.label}`}
                      onClick={() => jumpToStage(i)}
                      className={`group flex-1 first:text-left last:text-right text-center font-mono text-xs tracking-[0.18em] uppercase transition-colors ${
                        i <= active ? "text-white/70" : "text-white/30"
                      } hover:text-white`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaturityFramework;
