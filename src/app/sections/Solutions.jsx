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
    id: "growth-engine",
    icon: Sparkles,
    name: "AI Growth Engine",
    tagline: "Every campaign becomes smarter.",
    body: "An integrated system combining paid media, customer data, automation, CRM, and predictive intelligence to make campaigns smarter, leads more valuable, and decisions data-backed.",
    stat: ["38%", "average reduction in acquisition cost"],
    cta: "Request a growth audit →",
  },
  {
    id: "cro-lab",
    icon: Database,
    name: "CRO Conversion Lab",
    tagline: "Every decision becomes data-backed.",
    body: "A focused optimization framework for landing pages, ecommerce stores, funnels, forms, and checkout journeys. We identify what stops users from converting and rebuild the experience around action.",
    stat: ["41%", "average improvement in conversion rates"],
    cta: "Improve conversions →",
  },
  {
    id: "shopify-scale",
    icon: Bot,
    name: "Shopify Scale System",
    tagline: "Every campaign becomes smarter.",
    body: "A commerce growth framework for Shopify brands ready to improve speed, UX, product discovery, checkout, retention, and repeat revenue.",
    stat: ["5.2X", "average ROAS on scaled ecommerce campaigns"],
    cta: "Scale ecommerce →",
  },
  {
    id: "ai-sales-assistant",
    icon: Layers,
    name: "AI Sales Assistant",
    tagline: "Every lead becomes more valuable.",
    body: "An AI-powered assistant that qualifies leads, answers customer queries, connects with CRM, and helps sales teams respond faster. Built for websites, WhatsApp, landing pages, and lead-generation funnels.",
    stat: ["61%", "faster response time"],
    cta: "Automate lead handling →",
  },
  {
    id: "performance-media",
    icon: Radar,
    name: "Performance Media System",
    tagline: "Every campaign becomes smarter.",
    body: "A structured growth model for brands investing in Google, Meta, LinkedIn, YouTube, and marketplace ads with clear performance tracking and scalable campaign execution.",
    stat: ["18M+", "qualified leads generated"],
    cta: "Build performance system →",
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
      className="relative py-12  border-t border-line"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Bring us your growth challenge."
          title="We’ll engineer the way forward."
          intro="No generic proposal. No long discovery process. Just a practical, outcome-focused plan built around your business goals."
        />

        <div className="mt-8 xl:mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-10">
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
                      ? "bg-orange-brand text-on-brand border-orange-brand"
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
          <div className="relative rounded-3xl border border-line bg-[#04061a]/60 overflow-hidden md:min-h-[420px]">
            <div className="absolute inset-0 opacity-40 pointer-events-none"
                 style={{ background: "radial-gradient(800px circle at 100% 0%, rgba(255,106,0,0.18), transparent 50%)" }} />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative p-4 md:p-8 xl:p-12 h-full flex flex-col"
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
                <h3 className="mt-4 md:mt-6 font-display text-white text-xl md:text-2xl sm:text-4xl leading-tight tracking-tight">
                  {current.name}
                </h3>
                <p className="mt-2 md:mt-4 text-mute text-sm md:text-base xl:text-lg max-w-xl leading-relaxed">
                  {current.body}
                </p>

                <div className="mt-auto pt-4 md:pt-10 flex flex-wrap items-end gap-8">
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
