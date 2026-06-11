'use client';
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import {
  Landmark,
  HeartPulse,
  Factory,
  Radio,
  ShoppingBag,
  Zap,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: Landmark,
    name: "Banking & Financial Services",
    note: "Real-time risk, regulatory tech, intelligent operations.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Life Sciences",
    note: "Clinical AI, patient experience, payer-provider platforms.",
  },
  {
    icon: Factory,
    name: "Manufacturing & Industry 4.0",
    note: "Connected factories, predictive maintenance, supply chain twins.",
  },
  {
    icon: Radio,
    name: "Telecom & Media",
    note: "BSS/OSS modernization, network AI, content intelligence.",
  },
  {
    icon: ShoppingBag,
    name: "Retail & Consumer",
    note: "Unified commerce, demand forecasting, personalization at scale.",
  },
  {
    icon: Zap,
    name: "Energy & Utilities",
    note: "Grid intelligence, ESG analytics, asset performance management.",
  },
];

export function Industries() {
  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="relative py-12  border-t border-line"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Industries"
          title="Built for the sectors that can't afford to get it wrong."
          intro="Each practice is staffed with engineers and consultants who have shipped the same systems you operate — under the same scrutiny."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-line">
          {INDUSTRIES.map((ind, i) => {
            const I = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                data-testid={`industry-card-${ind.name.toLowerCase().split(" ")[0]}`}
                className="group relative bg-[#02030a] p-7 sm:p-8 hover:bg-[#05081a] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-white/5 border border-line text-orange-brand group-hover:bg-orange-brand/10 group-hover:border-orange-brand/40 transition">
                    <I size={18} />
                  </div>
                  <span className="font-mono-display text-xs text-mute uppercase tracking-[0.2em]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-white text-lg sm:text-xl leading-tight">
                  {ind.name}
                </h3>
                <p className="mt-2 text-sm text-mute leading-relaxed">
                  {ind.note}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono-display uppercase tracking-[0.2em] text-orange-brand opacity-0 group-hover:opacity-100 transition">
                  Explore sector →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
