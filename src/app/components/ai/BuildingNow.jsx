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

const ITEMS = [
  {
    icon: Users,
    title: "AI Workforce",
    tagline: "Digital employees operating continuously.",
    desc: "Always-on digital workers handling structured operations, ticketing, scheduling, qualification, and follow-through across 24/7 cycles.",
    metrics: ["24/7 cadence", "0 onboarding ramp", "Audit-grade logs"],
  },
  {
    icon: GitBranch,
    title: "Multi-Agent Operations",
    tagline: "AI teams collaborating autonomously.",
    desc: "Coordinated agent networks that plan, delegate, validate, and execute multi-step workflows with shared memory and guardrails.",
    metrics: ["Agent-to-agent", "Tool routing", "Policy-aware"],
  },
  {
    icon: Briefcase,
    title: "Enterprise Copilots",
    tagline: "Department-specific intelligence systems.",
    desc: "Copilots embedded in sales, ops, support, and engineering — trained on private context, integrated to systems of record.",
    metrics: ["RAG-grounded", "RBAC native", "BYO models"],
  },
  {
    icon: BrainCircuit,
    title: "Decision Intelligence",
    tagline: "Systems that recommend and execute.",
    desc: "Models that synthesize signals across data warehouses and act — with explainability, human review, and reversibility built-in.",
    metrics: ["Explainable", "Reversible", "Outcome tracked"],
  },
  {
    icon: PhoneCall,
    title: "Voice Operations",
    tagline: "Human-like voice for customer interactions.",
    desc: "Production voice agents handling inbound, outbound, qualification, scheduling, and structured data capture at low latency.",
    metrics: ["<350ms latency", "Telephony native", "Hand-off ready"],
  },
  {
    icon: LayoutDashboard,
    title: "AI Command Centers",
    tagline: "Unified enterprise AI control planes.",
    desc: "Single pane to deploy, observe, govern, and meter your entire AI estate — agents, models, prompts, costs, and outcomes.",
    metrics: ["Observability", "Cost metering", "Governance"],
  },
];

const BuildingNow = () => {
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
  const Icon = it.icon;

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
      className="relative border-y border-white/5 bg-[#04030C]"
      style={{ height: scrollTrackHeight }}
    >
      <div
        className={`${panelClass} flex items-center overflow-hidden bg-[#04030C]`}
        style={panelStyle}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#6D28D9]/12 blur-[120px]" />
          <div className="grain" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <ShiningText testId="building-now-eyebrow">
                  CURRENTLY IN PRODUCTION
                </ShiningText>
                <h2 className="mt-4 font-display text-3xl md:text-5xl leading-[1.02] tracking-[-0.035em] font-medium max-w-3xl text-balance">
                  What we are building right now.
                </h2>
              </div>
              <p className="max-w-md text-white/50 leading-relaxed">
                Six categories of intelligent systems, shipped into production
                — discovered as you scroll.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left: vertical scroll-driven list */}
            <div className="lg:col-span-5 space-y-1.5">
              {ITEMS.map((item, i) => {
                const ItemIcon = item.icon;
                const isActive = i === active;
                return (
                  <button
                    key={item.title}
                    onClick={() => jumpTo(i)}
                    data-testid={`building-now-tab-${i}`}
                    className={`group w-full text-left flex items-center gap-4 py-3 px-4 rounded-xl border transition-all duration-500 ${
                      isActive
                        ? "bg-[#8B5CF6]/12 border-[#8B5CF6]/40"
                        : "bg-transparent border-transparent hover:border-white/10 hover:bg-white/[0.02]"
                    }`}
                  >
                    <motion.span
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        backgroundColor: isActive
                          ? "rgba(139,92,246,0.20)"
                          : "rgba(255,255,255,0.04)",
                        color: isActive
                          ? "#C084FC"
                          : "rgba(255,255,255,0.4)",
                      }}
                      transition={{ duration: 0.35 }}
                      className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 border border-white/8"
                    >
                      <ItemIcon className="w-4 h-4" />
                    </motion.span>
                    <span className="flex-1 min-w-0">
                      <span
                        className={`block font-mono text-[10px] tracking-[0.25em] uppercase ${
                          isActive ? "text-[#C084FC]" : "text-white/30"
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
                      className="hidden md:block w-1 rounded-full bg-gradient-to-b from-[#C084FC] to-[#6D28D9]"
                    />
                  </button>
                );
              })}

              {/* Scroll-linked progress bar */}
              <div className="mt-6 relative h-0.5 rounded-full bg-white/8 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC]"
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
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8B5CF6]/12 blur-[100px] pointer-events-none" />
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
                    stroke="rgba(139,92,246,0.3)"
                    strokeWidth="0.4"
                    strokeDasharray="1.5 2.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="22"
                    fill="none"
                    stroke="rgba(192,132,252,0.25)"
                    strokeWidth="0.3"
                  />
                  <circle cx="50" cy="50" r="3" fill="#C084FC" />
                </svg>

                <div className="relative flex items-center gap-3">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C084FC]">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                    {it.tagline}
                  </span>
                </div>

                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.45 }}
                  className="relative mt-7 font-display text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] font-medium leading-[1.05]"
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
                      className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/70"
                    >
                      {m}
                    </span>
                  ))}
                </motion.div>

                <div className="relative mt-9 pt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35">
                    Program {String(active + 1).padStart(2, "0")} / {ITEMS.length}
                  </span>
                  <a
                    href="#contact"
                    data-testid={`building-now-cta-${active}`}
                    className="text-xs font-mono uppercase tracking-[0.2em] text-[#C084FC]/80 hover:text-white transition-colors"
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
