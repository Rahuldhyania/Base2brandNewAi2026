'use client'
import React from "react";
import { motion } from "framer-motion";
import { extraData } from "@/constants/testIds/extraData";

const SOLUTIONS = [
  {
    id: "orbit-decision",
    tag: "Applied AI",
    title: "Orbit Decision Fabric",
    metric: "6 wks",
    metricLabel: "to first outcome",
    desc: "Multi‑agent decision stack with policy guardrails. Deploy on your VPC, your data, your evaluation set.",
  },
  {
    id: "sovereign-cloud",
    tag: "Cloud & Data",
    title: "Sovereign Cloud Blueprint",
    metric: "-38%",
    metricLabel: "run cost",
    desc: "Data‑resident, audit‑ready multi‑cloud foundation for regulated sectors. Ships with FinOps and Zero‑Trust baseline.",
  },
  {
    id: "hyper-ops",
    tag: "Automation",
    title: "HyperOps Studio",
    metric: "14x",
    metricLabel: "throughput",
    desc: "Process‑mining, document AI, and RPA composed into one control plane. Track savings against real SLAs.",
  },
  {
    id: "ai-risk-suite",
    tag: "Governance",
    title: "AI Risk Suite",
    metric: "Audit",
    metricLabel: "ready by design",
    desc: "Model registry, red‑team eval library, and lineage – everything an internal AI committee expects, out of the box.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      data-section="solutions"
      data-testid={extraData.solutions.root}
      className="relative px-6 md:px-12 pt-12"
    >
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-14 md:mb-16 max-w-[720px]">
          <div className="eyebrow mb-4">Solutions</div>
          <h2 className="font-display text-white text-[38px] md:text-[56px] leading-[0.98] tracking-[-0.035em]">
            Productised accelerators.<br />
            <span className="text-[var(--b2b-orange)]">Shipped, not shelfware.</span>
          </h2>
          <p className="mt-6 text-[15px] md:text-[17px] text-[var(--b2b-text-muted)] leading-[1.6]">
            Reusable operating models — packaged and pre‑integrated — so your first business outcome ships in weeks, not quarters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.id}
              data-testid={extraData.solutions.card(s.id)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative b2b-panel rounded-2xl p-6 md:p-8 flex flex-col gap-5 overflow-hidden"
            >
              {/* Corner planet */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(244,123,82,0.22), rgba(244,123,82,0) 60%)",
                }}
              />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--b2b-orange)]">
                  {s.tag}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40 group-hover:opacity-100 transition-opacity">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
                  <path d="M4 8h6M8 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className="font-display text-[24px] md:text-[30px] text-white leading-[1.05] tracking-[-0.02em]">
                {s.title}
              </h3>

              <p className="text-[14px] md:text-[15px] text-[var(--b2b-text-muted)] leading-[1.6]">
                {s.desc}
              </p>

              <div className="mt-2 flex items-baseline gap-3 pt-4 border-t border-white/8">
                <div className="font-display text-4xl md:text-5xl text-[var(--b2b-orange)] tracking-[-0.03em]">
                  {s.metric}
                </div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--b2b-text-muted)]">
                  {s.metricLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
