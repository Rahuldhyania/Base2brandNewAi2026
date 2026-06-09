'use client'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";
import Atmosphere from "@/components/site/Atmosphere";
import SmokeBackground from "@/components/site/SmokeBackground";
import BackgroundPaths from "@/components/site/BackgroundPaths";
import ArchitectureChart from "@/components/ai/ArchitectureChart";

const LAYERS = [
  { label: "Business Outcomes", sub: "Measured impact and revenue", accent: true },
  { label: "Decision Layer", sub: "Recommend, act, reverse" },
  { label: "Workflow Layer", sub: "Orchestration & policy" },
  { label: "Enterprise Systems", sub: "CRM, ERP, ITSM, data lake" },
  { label: "Knowledge Layer", sub: "RAG, graphs, retrieval" },
  { label: "Agent Layer", sub: "Multi-agent operations" },
  { label: "Foundation Models", sub: "GPT-5 · Claude · Gemini · Llama" },
];

/**
 * Architecture layer card — reveals from below as section enters viewport.
 * Foundation Models (last in array, bottom of stack) animates in first,
 * then layers compound upward.
 *
 * Additionally each layer pulses subtly when the scroll progress crosses
 * its "activation point" so the user feels the stack lighting up bottom-up.
 */
const LayerCard = ({ layer, index, total, scrollProgress }) => {
  // Activation fraction — last item (foundation) = first to activate
  const activationStart = (total - 1 - index) / total;
  const activationEnd = activationStart + 1 / total;

  const opacity = useTransform(
    scrollProgress,
    [activationStart - 0.05, activationStart, 1],
    [0.55, 1, 1]
  );
  const glow = useTransform(
    scrollProgress,
    [activationStart - 0.05, activationStart, activationEnd, 1],
    [0, 1, 0.35, 0.35]
  );
  const x = useTransform(
    scrollProgress,
    [activationStart, activationEnd],
    [-8, 0]
  );

  return (
    <motion.div
      data-testid={`architecture-layer-${index}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        // bottom-up reveal: last layer index = first delay 0
        delay: (total - 1 - index) * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ opacity, x }}
      className={`relative b2b-card px-4 py-3 flex items-center justify-between text-sm transition-colors hover:border-[#8B5CF6]/40 ${
        layer.accent ? "border-[#8B5CF6]/35" : ""
      }`}
    >
      {/* Animated glow indicator on the left edge */}
      <motion.span
        style={{ opacity: glow }}
        className="pointer-events-none absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-[#C084FC] to-[#6D28D9] shadow-[0_0_18px_2px_rgba(192,132,252,0.55)]"
      />
      {/* Default static line when no glow */}
      <span
        className={`pointer-events-none absolute inset-y-0 left-0 w-0.5 ${
          layer.accent
            ? "bg-gradient-to-b from-[#C084FC]/60 to-[#6D28D9]/60"
            : "bg-[#8B5CF6]/30"
        }`}
      />
      <div className="pl-3">
        <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/35">
          L{String(LAYERS.length - index).padStart(2, "0")}
        </div>
        <div className="font-display font-medium text-white/90">
          {layer.label}
        </div>
      </div>
      <div className="text-xs text-white/40 hidden sm:block">{layer.sub}</div>
    </motion.div>
  );
};

const Architecture = () => {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="architecture"
      data-testid="architecture-section"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Atmospheric backdrop: paths + smoke + atmosphere combined at low opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundPaths opacity={0.4} />
        <SmokeBackground smokeColor="#7C3AED" opacity={0.14} />
        <Atmosphere intensity={0.25} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-[radial-gradient(ellipse,rgba(109,40,217,0.08),rgba(3,3,10,0)_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <ShiningText testId="architecture-eyebrow">
                ENTERPRISE AI ARCHITECTURE
              </ShiningText>
              <h2 className="mt-5 font-display text-3xl md:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance">
                A stack built for systems that operate the business.
              </h2>
              <p className="mt-6 text-white/55 leading-relaxed">
                Each layer is independently observable, governable, and
                replaceable — so your enterprise compounds capability across
                models, agents, knowledge, and decisioning.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  ["Composable", "Swap models, agents, or retrievers without rewiring."],
                  ["Governed", "Policies, audit, RBAC, and observability native."],
                  ["Measurable", "Outcome metrics tied to workflows, not vanity."],
                ].map(([k, v], i) => (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3 border-l border-[#8B5CF6]/40 pl-4"
                  >
                    <div>
                      <div className="font-display font-medium">{k}</div>
                      <div className="text-sm text-white/40">{v}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Compact layered stack — animates bottom-up on scroll */}
              <div className="mt-8 space-y-1.5">
                {LAYERS.map((layer, i) => (
                  <LayerCard
                    key={layer.label}
                    layer={layer}
                    index={i}
                    total={LAYERS.length}
                    scrollProgress={
                      reduce
                        ? { get: () => 1, on: () => () => {} }
                        : scrollYProgress
                    }
                  />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: data-driven capability chart */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <Reveal delay={0.1}>
              <div className="b2b-card p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#8B5CF6]/10 blur-[100px] pointer-events-none" />
                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                    <div>
                      <ShiningText
                        testId="architecture-chart-eyebrow"
                        className="text-[10px]"
                      >
                        CAPABILITY TRAJECTORY
                      </ShiningText>
                      <h3 className="mt-2 font-display text-xl md:text-2xl font-medium">
                        How AI capability compounds across layers.
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35">
                      Stacked · indexed
                    </span>
                  </div>

                  <ArchitectureChart />

                  <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
                    {[
                      ["+38%", "deployments YoY"],
                      ["5", "layers integrated"],
                      ["8q", "compounding"],
                    ].map(([v, l]) => (
                      <div key={l}>
                        <div className="font-display text-xl md:text-2xl font-medium tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                          {v}
                        </div>
                        <div className="mt-1 font-mono text-[9px] tracking-[0.2em] uppercase text-white/40">
                          {l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
