'use client';
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import {
  Brain,
  Cpu,
  Cloud,
  Workflow,
  ShieldCheck,
  LineChart,
} from "lucide-react";

const SERVICES = [
  {
    icon: Brain,
    title: "Applied AI & GenAI Engineering",
    desc: "From RAG copilots to multi-agent workflows. Production AI grounded in your data, with eval pipelines and observability.",
    points: ["LLM apps & agents", "Vision & speech", "MLOps + LLMOps"],
  },
  {
    icon: Cpu,
    title: "Enterprise Software & Platforms",
    desc: "Mission-critical custom software, ERP/CRM extensions, integration backbones — built for compliance, scale and 99.99% SLAs.",
    points: ["Composable architectures", "API platforms", "Legacy modernization"],
  },
  {
    icon: Cloud,
    title: "Cloud, Data & DevSecOps",
    desc: "Multi-cloud foundations, data lakehouses and shift-left security. Automated, observable, cost-optimized.",
    points: ["AWS · Azure · GCP", "Data platforms", "Zero-trust security"],
  },
  {
    icon: Workflow,
    title: "Hyperautomation & RPA",
    desc: "Process intelligence + RPA + AI to remove the back-office bottlenecks and free your teams for strategic work.",
    points: ["Process mining", "Intelligent document AI", "Workflow orchestration"],
  },
  {
    icon: ShieldCheck,
    title: "Governance, Risk & Trust",
    desc: "AI governance, regulatory engineering, and resilience baked into every deliverable — from sandbox to scale.",
    points: ["AI risk frameworks", "Audit-ready by design", "Privacy & data residency"],
  },
  {
    icon: LineChart,
    title: "Digital Strategy & Experience",
    desc: "Outcome-led roadmaps, value architecture and human-centred product design for transformations that actually land.",
    points: ["Value engineering", "Service & UX design", "Change adoption"],
  },
];

function ServiceCard({ s, index }) {
  const Icon = s.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      data-testid={`service-card-${s.title.toLowerCase().split(" ")[0]}`}
      className="group relative p-6 sm:p-7 rounded-2xl border border-line bg-[#04061a]/60 hover:border-orange-brand/40 transition-colors overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,0%), rgba(255,106,0,0.10), transparent 40%)" }} />
      <div className="flex items-center gap-4">
        <div className="grid place-items-center h-11 w-11 rounded-xl bg-orange-brand/10 border border-orange-brand/30 text-orange-brand">
          <Icon size={20} />
        </div>
        <div className="text-xs font-mono-display text-mute uppercase tracking-[0.2em]">
          0{index + 1}
        </div>
      </div>
      <h3 className="mt-6 font-display text-white text-xl sm:text-2xl leading-tight tracking-tight">
        {s.title}
      </h3>
      <p className="mt-3 text-mute text-sm sm:text-base leading-relaxed">
        {s.desc}
      </p>
      <ul className="mt-5 space-y-1.5">
        {s.points.map((p) => (
          <li key={p} className="text-sm text-white/85 flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-orange-brand" />
            {p}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-12 "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="services"
          eyebrow="Capabilities"
          title="Six practices. One orbit of execution."
          intro="From discovery to scale, each engagement is staffed by senior engineers, AI scientists and domain leads — accountable for outcomes, not slides."
        />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
