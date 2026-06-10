'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";
import Atmosphere from "@/components/site/Atmosphere";
import SmokeBackground from "@/components/site/SmokeBackground";
import BackgroundPaths from "@/components/site/BackgroundPaths";
import { Plus, Minus } from "lucide-react";

const TOPICS = [
  {
    title: "Agentic Systems",
    sub: "Architectures for goal-directed AI",
    desc: "Designing planners, tool routers, and policy boundaries for production agent systems that operate inside enterprise constraints.",
  },
  {
    title: "AI Infrastructure",
    sub: "Composable, governable AI platforms",
    desc: "Reference architectures, evaluation harnesses, observability primitives, and cost metering for enterprise AI estates.",
  },
  {
    title: "Voice Intelligence",
    sub: "Low-latency conversational systems",
    desc: "Streaming ASR/TTS pipelines, dialog policy, telephony bridges, and high-fidelity voice agents for customer operations.",
  },
  {
    title: "Enterprise Retrieval",
    sub: "Knowledge graphs and hybrid RAG",
    desc: "Hybrid retrieval combining vector, graph, and structured stores for grounded, citable, and permissioned answers at scale.",
  },
  {
    title: "Autonomous Operations",
    sub: "Closed-loop decision systems",
    desc: "Systems that observe, decide, and act with explainability, reversibility, and continuous outcome measurement.",
  },
  {
    title: "Digital Twins + AI",
    sub: "Simulation-coupled intelligence",
    desc: "Coupling operational digital twins with agentic decisioning for industrial and supply-chain environments.",
  },
  {
    title: "Industrial AI",
    sub: "Edge, telemetry, and physical operations",
    desc: "Applied AI for plants, fleets, and field operations — bridging predictive models with autonomous workflows.",
  },
];

const ResearchLab = () => {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="research"
      data-testid="research-section"
      className="relative py-16"
    >
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundPaths opacity={0.01} />
        <SmokeBackground smokeColor="#8B5CF6" opacity={0.22} />
        <Atmosphere intensity={0.25} />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(109,40,217,0.08),rgba(3,3,10,0)_60%)]" />
        {/* Orbital DNA - a faint journey path */}
        <svg
          className="absolute -right-40 top-20 w-[600px] h-[600px] opacity-25"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="rgba(168,85,247,0.4)"
            strokeWidth="0.12"
            strokeDasharray="0.4 2"
          />
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.1"
            strokeDasharray="0.5 1.5"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <ShiningText testId="research-eyebrow">
                AI RESEARCH LAB
              </ShiningText>
              <h2 className="mt-6 font-display text-3xl md:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance">
                What we&apos;re researching.
              </h2>
              <p className="mt-6 text-white/55 leading-relaxed">
                Active research lines feeding our enterprise engagements. Where
                we&apos;re investing engineering and design capital this year.
              </p>
              <div
                data-testid="research-thinking"
                className="mt-10 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]"
              >
                <span className="relative inline-flex">
                  <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                  <span className="absolute inset-0 w-2 h-2 rounded-full bg-[#A855F7] animate-ping" />
                </span>
                <ShiningText dot={false} className="text-[10px]">
                  Base2Brand AI is thinking
                </ShiningText>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 divide-y divide-white/5 border-t border-b border-white/5">
            {TOPICS.map((t, i) => {
              const isOpen = open === i;
              return (
                <div key={t.title} className="">
                  <button
                    data-testid={`research-toggle-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`research-panel-${i}`}
                    className="w-full py-3 flex items-center justify-between gap-6 text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/30 w-8">
                        R{String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="font-display text-xl md:text-2xl font-medium tracking-tight">
                          {t.title}
                        </div>
                        <div className="text-sm text-white/40 mt-1">
                          {t.sub}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 group-hover:border-[#8B5CF6]/40 group-hover:bg-[#8B5CF6]/10 transition-all">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#C084FC]" />
                      ) : (
                        <Plus className="w-4 h-4 text-white/60 group-hover:text-[#C084FC]" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`research-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-14 pr-12 text-white/55 leading-relaxed">
                          {t.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchLab;
