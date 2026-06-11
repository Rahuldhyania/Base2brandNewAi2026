'use client';
import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";
import { Compass, Wrench, Infinity as InfinityIcon, Check } from "lucide-react";

const MODELS = [
  {
    icon: Compass,
    name: "AI Discovery",
    sub: "Where the right opportunities sit.",
    desc: "An engineered audit of your operations, data estate, and AI readiness.",
    deliverables: [
      "Opportunity Assessment",
      "AI Strategy",
      "Technical Audit",
      "Implementation Roadmap",
    ],
    duration: "2 – 6 weeks",
    accent: false,
  },
  {
    icon: Wrench,
    name: "AI Implementation",
    sub: "Build, ship, integrate.",
    desc: "Agent development, RAG systems, voice operations, and integrations into your systems of record.",
    deliverables: [
      "Agent Development",
      "Knowledge & RAG Systems",
      "Voice & Workflow Operations",
      "Enterprise Integrations",
      "Production Deployment",
    ],
    duration: "8 – 16 weeks",
    accent: true,
  },
  {
    icon: InfinityIcon,
    name: "AI Transformation",
    sub: "An intelligence layer for the enterprise.",
    desc: "Multi-quarter program: deploy, govern, optimize, and scale your AI estate as infrastructure.",
    deliverables: [
      "Enterprise Rollout",
      "AI Governance & Observability",
      "Continuous Optimization",
      "Long-Term Engineering Partnership",
    ],
    duration: "Multi-quarter",
    accent: false,
  },
];

const EngagementModels = () => {
  return (
    <section
      data-testid="engagement-section"
      className="relative py-12 md:py-16 border-y border-white/5 bg-[#05030E]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <ShiningText
              testId="engagement-eyebrow"
              className="justify-center mx-auto"
            >
              AI ENGAGEMENT MODELS
            </ShiningText>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance">
              How we work with enterprises.
            </h2>
            <p className="mt-6 text-white/55 leading-relaxed">
              Three engagement modes — from strategic discovery to multi-quarter
              transformation programs. Always engineered. Never templated.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MODELS.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.name} delay={i * 0.07}>
                <div
                  data-testid={`engagement-card-${i}`}
                  className={`relative b2b-card p-8 md:p-10 h-full overflow-hidden transition-all duration-500 ${
                    m.accent
                      ? "border-[#8B5CF6]/40 shadow-[0_0_50px_-10px_rgba(139,92,246,0.4)]"
                      : "hover:border-[#8B5CF6]/30"
                  }`}
                >
                  {m.accent && (
                    <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[#8B5CF6]/20 blur-[100px]" />
                  )}
                  {m.accent && (
                    <div className="absolute top-5 right-5 text-xs font-mono uppercase tracking-[0.25em] px-2.5 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#E9D5FF]">
                      Most engaged
                    </div>
                  )}

                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C084FC]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="mt-7">
                      <div className="font-mono text-xs tracking-[0.25em] uppercase text-white/35">
                        Engagement {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-2 font-display text-xl sm:text-2xl font-medium tracking-tight">
                        {m.name}
                      </h3>
                      <p className="mt-2 text-sm text-[#C084FC]/80">
                        {m.sub}
                      </p>
                    </div>

                    <p className="mt-6 text-white/55 leading-relaxed">
                      {m.desc}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {m.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2.5 text-sm text-white/70"
                        >
                          <Check className="w-4 h-4 text-[#A855F7] mt-0.5 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
                        {m.duration}
                      </span>
                      <a
                        href="#contact"
                        data-testid={`engagement-cta-${i}`}
                        className={`text-xs font-mono uppercase tracking-[0.2em] ${
                          m.accent
                            ? "text-[#C084FC] hover:text-white"
                            : "text-white/60 hover:text-white"
                        } transition-colors`}
                      >
                        Talk to architects →
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
