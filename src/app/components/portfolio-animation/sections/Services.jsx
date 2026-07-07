'use client'
import React from "react";
import { motion } from "framer-motion";
import { extraData } from "@/constants/testIds/extraData";

const CAPABILITIES = [
  {
    id: "applied-ai",
    n: "01",
    title: "Applied AI & GenAI Engineering",
    desc: "From RAG copilots to multi‑agent workflows. Production AI grounded in your data, with eval pipelines and observability.",
    subs: ["LLM apps & agents", "Vision & speech", "MLOps + LLMOps"],
  },
  {
    id: "enterprise-software",
    n: "02",
    title: "Enterprise Software & Platforms",
    desc: "Mission‑critical custom software, ERP/CRM extensions, integration backbones—built for compliance, scale and 99.99% SLAs.",
    subs: ["Composable architectures", "API platforms", "Legacy modernisation"],
  },
  {
    id: "cloud-data",
    n: "03",
    title: "Cloud, Data & DevSecOps",
    desc: "Multi‑cloud foundations, data lakehouses and shift‑left security. Automated, observable, cost‑optimised.",
    subs: ["AWS, Azure, GCP", "Data platforms", "Zero‑trust security"],
  },
  {
    id: "hyperautomation",
    n: "04",
    title: "Hyperautomation & RPA",
    desc: "Process intelligence + RPA + AI to remove back‑office bottlenecks and free your teams for strategic work.",
    subs: ["Process mining", "Intelligent document AI", "Workflow orchestration"],
  },
  {
    id: "governance",
    n: "05",
    title: "Governance, Risk & Trust",
    desc: "AI governance, regulatory engineering, and resilience baked into every deliverable—from sandbox to scale.",
    subs: ["AI risk frameworks", "Audit‑ready by design", "Privacy & data residency"],
  },
  {
    id: "strategy",
    n: "06",
    title: "Digital Strategy & Experience",
    desc: "Outcome‑led roadmaps, value architecture and human‑centred product design for transformations that actually land.",
    subs: ["Value engineering", "Service & UX design", "Change adoption"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-section="services"
      data-testid={extraData.services.root}
      className="relative px-6 md:px-12 py-24 md:py-36"
    >
      <div className="max-w-[1180px] mx-auto">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-20 mb-14 md:mb-20">
          <div>
            <div className="eyebrow mb-4">Capabilities</div>
            <h2 className="font-display text-white text-[38px] md:text-[54px] leading-[0.98] tracking-[-0.035em]">
              What we<br />ship end‑to‑end.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[15px] md:text-[17px] text-[var(--b2b-text-muted)] max-w-[560px] leading-[1.55]">
              Six practices, one operating system. Every deliverable meets enterprise‑grade compliance, scale, and observability — without the ceremony.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px b2b-hairline rounded-3xl overflow-hidden">
          {CAPABILITIES.map((c, i) => (
            <motion.article
              key={c.id}
              data-testid={extraData.services.card(c.id)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ backgroundColor: "rgba(244,123,82,0.04)" }}
              className="group relative bg-[rgba(10,11,18,0.65)] p-8 md:p-10 flex flex-col gap-5 min-h-[280px]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--b2b-orange)]">
                  / {c.n}
                </span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-30 group-hover:opacity-100 group-hover:text-[var(--b2b-orange)] transition-all">
                  <path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-[22px] md:text-[26px] text-white leading-[1.15] tracking-[-0.02em]">
                {c.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-[var(--b2b-text-muted)] leading-[1.6] max-w-[440px]">
                {c.desc}
              </p>
              <div className="mt-auto pt-4 flex flex-wrap gap-2">
                {c.subs.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 text-[11px] text-white/70 font-mono tracking-wide"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--b2b-orange)]" />
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
