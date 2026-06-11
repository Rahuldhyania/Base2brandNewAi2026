import React from "react";
import { motion } from "framer-motion";
import {
  ScanSearch,
  Database,
  FileText,
  Award,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    n: "01",
    title: "AI Brand Audit",
    body: "We analyze how ChatGPT, Gemini, Claude and Perplexity currently perceive — or ignore — your brand.",
    icon: ScanSearch,
  },
  {
    n: "02",
    title: "Knowledge Optimization",
    body: "We engineer your business knowledge graph: structured data, authority signals and entity relationships AI can trust.",
    icon: Database,
  },
  {
    n: "03",
    title: "Content Intelligence",
    body: "We produce AI-readable, answer-shaped content tuned to the exact prompts buyers use in your category.",
    icon: FileText,
  },
  {
    n: "04",
    title: "Entity Authority Building",
    body: "We compound digital trust through citations, mentions, partnerships and recognition AI engines weigh heavily.",
    icon: Award,
  },
  {
    n: "05",
    title: "AI Recommendation Positioning",
    body: "We monitor and lift the probability of your brand being recommended inside AI answers — month after month.",
    icon: Sparkles,
  },
];

export default function Framework() {
  return (
    <section
      id="framework"
      data-testid="framework-section"
      className="relative py-28 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="label-mono">· Methodology</div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.05]">
            The Base2Brand
            <br />
            <span className="text-gradient-blue-violet font-medium">
              GEO Framework
            </span>
          </h2>
          <p className="mt-6 text-zinc-400 text-lg max-w-xl">
            A five-step operating system for turning your brand into the
            answer AI engines recommend.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-blue-500/40 bg-[#030305] items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_16px_4px_rgba(59,130,246,0.6)]" />
                  </div>

                  <div className={`${isLeft ? "" : "md:order-2 md:pl-16"} ${isLeft ? "md:pr-16 md:text-right" : ""}`}>
                    <div
                      className={`inline-flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                        <s.icon className="w-4 h-4 text-blue-300" />
                      </div>
                      <span className="font-mono text-xs tracking-[0.3em] text-zinc-500">
                        STEP {s.n}
                      </span>
                    </div>
                    <h3 className="font-display mt-5 text-2xl md:text-3xl font-medium tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-zinc-400 leading-relaxed max-w-md md:max-w-none">
                      {s.body}
                    </p>
                  </div>

                  <div className={`${isLeft ? "md:pl-16" : "md:pr-16 md:order-1"}`}>
                    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 overflow-hidden">
                      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl" />
                      <div className="font-display text-7xl md:text-8xl font-extralight tracking-tighter text-white/10 leading-none">
                        {s.n}
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {Array.from({ length: 3 }).map((_, k) => (
                          <div
                            key={k}
                            className={`h-1 rounded-full ${k <= i % 3 ? "bg-gradient-to-r from-blue-500 to-violet-500" : "bg-white/10"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
