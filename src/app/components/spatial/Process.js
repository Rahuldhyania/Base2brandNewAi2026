'use client'
import React from "react";
import { motion } from "framer-motion";
import { SPATIAL } from "@/constants/testIds";

const steps = [
  {
    n: "01",
    title: "Discovery & XR Strategy",
    body: "Business objectives, workflows, operating context and a technology assessment that grounds every later decision.",
    deliverables: ["Stakeholder interviews", "Workflow audit", "Technology fit map"],
  },
  {
    n: "02",
    title: "Experience Architecture",
    body: "Journey mapping, interaction models, immersion planning and a defensible architecture before a single line of code.",
    deliverables: ["Interaction model", "Immersion blueprint", "Surface selection"],
  },
  {
    n: "03",
    title: "Prototype & Validation",
    body: "Rapid spatial prototyping with real users, real workflows and measurable validation criteria — fast, cheap and honest.",
    deliverables: ["Live prototype", "Field tests", "Validation report"],
  },
  {
    n: "04",
    title: "Production Engineering",
    body: "Enterprise-grade XR development against your security, performance and accessibility baselines.",
    deliverables: ["Production codebase", "Test coverage", "Performance budget"],
  },
  {
    n: "05",
    title: "Deployment & Governance",
    body: "Security review, MDM enrollment and rollout strategy designed for regulated, multi-region environments.",
    deliverables: ["MDM playbook", "Security review", "Phased rollout"],
  },
  {
    n: "06",
    title: "Operate, Scale & Evolve",
    body: "24/7 support, telemetry-driven optimisation and a roadmap that compounds value across the install base.",
    deliverables: ["Operational SLAs", "Telemetry & insights", "Roadmap reviews"],
  },
];

export default function Process() {
  return (
    <section
      data-testid={SPATIAL.processSection}
      className="relative py-12 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="gap-12 mb-10 md:mb-16">
          <div>
            <div className="text-[11px] tracking-[0.28em] uppercase text-[#FFB800]/90 mb-4">
              · Process
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.02] tracking-tight text-white">
              From concept to deployment —{" "} <br />
              <span className="text-white/55">
                one continuous engagement.
              </span>
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-[26px] sm:left-[34px] top-2 bottom-2 w-px bg-gradient-to-b from-[#FFB800]/40 via-white/[0.08] to-transparent"
          />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                data-testid={SPATIAL.processStep(i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr] lg:grid-cols-[72px_1fr_1fr] gap-x-4 md:gap-x-6 lg:gap-x-16 items-start"
              >
                <div className="relative flex flex-col items-center">
                  <div className="w-[52px] h-[52px] sm:w-[68px] sm:h-[68px] rounded-full border border-[#FFB800]/30 bg-[#050814] flex items-center justify-center font-mono text-[#FFB800] text-sm sm:text-base shadow-[0_0_30px_rgba(255,184,0,0.15)]">
                    {s.n}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white leading-tight mb-3">
                    {s.title}
                  </h3>
                  <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-[560px]">
                    {s.body}
                  </p>
                </div>

                <div className="hidden lg:block pl-2">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-3">
                    Key deliverables
                  </div>
                  <ul className="space-y-2">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-3 text-sm text-white/70"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#FFB800]" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
