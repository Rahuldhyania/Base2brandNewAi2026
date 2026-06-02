'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import {
  Sparkles,
  Database,
  Bot,
  Layers,
  Radar,
} from "lucide-react";

const SOLUTIONS = [
  {
    id: "copilot",
    icon: Sparkles,
    name: "Enterprise Copilots",
    tagline: "AI assistants grounded in your data",
    body: "Domain-specific copilots for sales, ops, legal and engineering — RAG over your private corpus, evaluated against your KPIs, deployed inside your VPC.",
    stat: ["38%", "avg. handle-time reduction"],
  },
  {
    id: "datafabric",
    icon: Database,
    name: "Unified Data Fabric",
    tagline: "One source of truth across silos",
    body: "Lakehouse + semantic layer + governance — so every dashboard, model and agent reads the same numbers. Lineage and policy in one plane.",
    stat: ["10x", "faster data-to-insight"],
  },
  {
    id: "agentops",
    icon: Bot,
    name: "Agent Operations",
    tagline: "Multi-agent workflows in production",
    body: "Compose, observe and govern fleets of agents that act inside your systems — with guardrails, eval suites and audit trails on every step.",
    stat: ["24/7", "autonomous back-office"],
  },
  {
    id: "modernize",
    icon: Layers,
    name: "Legacy Modernization",
    tagline: "From mainframe to micro-services",
    body: "Strangler-fig migrations, AI-assisted code transforms, and platform engineering that ship value every sprint — not in a 3-year megabang.",
    stat: ["−47%", "TCO over 24 months"],
  },
  {
    id: "intel",
    icon: Radar,
    name: "Decision Intelligence",
    tagline: "From dashboards to decisions",
    body: "Forecasting, simulation and causal models packaged into decision apps your leadership actually uses — every Monday morning.",
    stat: ["6 wks", "from PoC to revenue"],
  },
];

export function Solutions() {
  const [active, setActive] = useState(SOLUTIONS[0].id);
  const current = SOLUTIONS.find((s) => s.id === active);
  const Icon = current.icon;

  return (
    <section
      id="solutions"
      data-testid="solutions-section"
      className="relative py-16 sm:py-20 border-t border-line"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Solutions"
          title="Productized accelerators — shipped, not shelfware."
          intro="Pre-engineered solution stacks let us start mid-flight. You get to value in weeks, with a clean path to scale."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-10">
          {/* Tabs */}
          <div className="flex flex-col gap-2">
            {SOLUTIONS.map((s) => {
              const I = s.icon;
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  data-testid={`solution-tab-${s.id}`}
                  onClick={() => setActive(s.id)}
                  className={`group text-left flex items-center gap-4 p-4 sm:p-5 rounded-2xl border transition ${
                    isActive
                      ? "border-orange-brand/50 bg-orange-brand/5"
                      : "border-line hover:border-line-strong bg-[#04061a]/40"
                  }`}
                >
                  <div className={`grid place-items-center h-10 w-10 rounded-xl border ${
                    isActive
                      ? "bg-orange-brand text-black border-orange-brand"
                      : "bg-white/5 text-white/80 border-line"
                  }`}>
                    <I size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-white text-base sm:text-lg leading-tight">
                      {s.name}
                    </div>
                    <div className="text-xs text-mute mt-0.5">{s.tagline}</div>
                  </div>
                  <span
                    className={`transition ${
                      isActive ? "text-orange-brand" : "text-white/30"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="relative rounded-3xl border border-line bg-[#04061a]/60 overflow-hidden min-h-[420px]">
            <div className="absolute inset-0 opacity-40 pointer-events-none"
                 style={{ background: "radial-gradient(800px circle at 100% 0%, rgba(255,106,0,0.18), transparent 50%)" }} />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative p-8 sm:p-12 h-full flex flex-col"
                data-testid={`solution-detail-${current.id}`}
              >
                <div className="flex items-center gap-4">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-orange-brand/15 border border-orange-brand/40 text-orange-brand">
                    <Icon size={22} />
                  </div>
                  <div className="text-xs font-mono-display uppercase tracking-[0.25em] text-mute">
                    Productized solution
                  </div>
                </div>
                <h3 className="mt-6 font-display text-white text-2xl sm:text-4xl leading-tight tracking-tight">
                  {current.name}
                </h3>
                <p className="mt-4 text-mute text-base sm:text-lg max-w-xl leading-relaxed">
                  {current.body}
                </p>

                <div className="mt-auto pt-10 flex flex-wrap items-end gap-8">
                  <div>
                    <div className="font-display text-orange-brand text-4xl sm:text-5xl leading-none">
                      {current.stat[0]}
                    </div>
                    <div className="text-xs text-mute uppercase tracking-wider mt-2">
                      {current.stat[1]}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-orange-brand transition group"
                  >
                    Request a deep-dive
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
