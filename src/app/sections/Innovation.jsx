'use client';
import React from "react";
import { m } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import { Atom, Beaker, Rocket, Cpu } from "lucide-react";

const PILLARS = [
  {
    icon: Atom,
    title: "Base2Brand Labs",
    body: "Applied research in marketing automation, AI workflows, customer journeys, conversion intelligence, and business process automation.",
    metric: "12",
    metricLabel: "active growth experiments",
  },
  {
    icon: Beaker,
    title: "AI + CRO Intelligence",
    body: "We combine analytics, user behavior, funnel data, and AI insights to improve how users move from attention to action.",
    metric: "100%",
    metricLabel: "conversion-focused thinking",
  },
  {
    icon: Rocket,
    title: "Automation Studio",
    body: "Internal automation frameworks built to reduce repetitive workflows across marketing, sales, support, and operations.",
    metric: "4",
    metricLabel: "growth systems in market",
  },
  {
    icon: Cpu,
    title: "Data-Backed Delivery",
    body: "Every decision is connected to performance tracking, customer behavior, campaign data, and measurable business outcomes.",
    metric: "360°",
    metricLabel: "growth visibility",
  },
];

export function Innovation() {
  return (
    <section
      id="innovation"
      data-testid="innovation-section"
      className="relative py-12  overflow-hidden border-t border-line"
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
          title="AI is not another service. It is built into the way we deliver."
          intro="Tomorrow’s advantage will not come from doing more manual work. It will come from building systems that learn, improve, and scale."
        />

        <div className="mt-8 md:mt-14 grid lg:grid-cols-2 gap-5">
          {PILLARS.map((p, i) => {
            const I = p.icon;
            return (
              <m.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                data-testid={`innovation-pillar-${i}`}
                className="relative p-6 xl:p-9 rounded-3xl border border-line bg-[#04061a]/70 overflow-hidden group"
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
                <h3 className="mt-4 md:mt-8 font-display text-white text-lg md:text-xl sm:text-2xl leading-tight tracking-tight">
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
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
