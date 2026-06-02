'use client';
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import { Atom, Beaker, Rocket, Cpu } from "lucide-react";

const PILLARS = [
  {
    icon: Atom,
    title: "Base2Brand Labs",
    body: "Applied research in agentic systems, retrieval, and small-model engineering. Patents pending across 4 jurisdictions.",
    metric: "12",
    metricLabel: "active research streams",
  },
  {
    icon: Beaker,
    title: "Foundry — Joint R&D",
    body: "Co-engineered with enterprise clients and university partners. Real problems, peer-reviewed outcomes, shared IP frameworks.",
    metric: "9",
    metricLabel: "academic partners",
  },
  {
    icon: Rocket,
    title: "Orbit Accelerator",
    body: "An internal venture studio incubating productized AI tools that graduate into customer deployments within two quarters.",
    metric: "4",
    metricLabel: "products in market",
  },
  {
    icon: Cpu,
    title: "Edge & Sovereign AI",
    body: "On-prem, air-gapped and on-device inference stacks for regulated and defense-aligned workloads.",
    metric: "100%",
    metricLabel: "data residency control",
  },
];

export function Innovation() {
  return (
    <section
      id="innovation"
      data-testid="innovation-section"
      className="relative py-16 sm:py-20 overflow-hidden border-t border-line"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(900px circle at 80% 20%, rgba(255,106,0,0.10), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Innovation"
          title="A research arm wired directly into delivery."
          intro="Our labs don't publish PDFs and walk away. Every research output is tested against a live customer workload before it's called done."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          {PILLARS.map((p, i) => {
            const I = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                data-testid={`innovation-pillar-${i}`}
                className="relative p-7 sm:p-9 rounded-3xl border border-line bg-[#04061a]/70 overflow-hidden group"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-orange-brand/10 border border-orange-brand/30 text-orange-brand">
                    <I size={22} />
                  </div>
                  <div className="text-right">
                    <div className="font-display text-orange-brand text-3xl sm:text-4xl leading-none">
                      {p.metric}
                    </div>
                    <div className="mt-1 text-xs text-mute uppercase tracking-[0.2em]">
                      {p.metricLabel}
                    </div>
                  </div>
                </div>
                <h3 className="mt-8 font-display text-white text-xl sm:text-2xl leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-mute text-sm sm:text-base leading-relaxed max-w-xl">
                  {p.body}
                </p>
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,106,0,0.18), transparent 40%)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
