'use client';
import React from "react";
import { motion } from "framer-motion";
import { GlobeHero } from "../components/visual/GlobeHero";

/**
 * ClientFootprint — sits between Solutions and Industries.
 * Showcases Base2Brand's global client reach with the interactive 3D cobe globe
 * plus the top regions where Base2Brand has shipped enterprise transformations.
 */

const TOP_REGIONS = [
  { region: "India", note: "HQ + delivery teams", count: "200+ Brands" },
  { region: "United States", note: "Performance, SaaS & ecommerce projects", count: "60+ Projects" },
  { region: "United Kingdom", note: " Retail, healthcare & digital platforms", count: "30+ Projects" },
  { region: "Canada", note: "Lead generation & enterprise solutions", count: "20+ Projects" },
  { region: "Australia", note: "Marketing, Shopify & automation systems", count: "25+ Projects" },
];

export function ClientFootprint() {
  return (
    <section
      id="footprint"
      data-testid="client-footprint-section"
      className="relative w-full overflow-hidden py-12"
    >
      {/* faint radial backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 65% 50%, rgba(255,106,0,0.10) 0%, rgba(2,3,10,0) 55%)",
        }}
      />
      <div className="absolute inset-0 grain opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* eyebrow + heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="md:max-w-3xl"
        >
          <div className="flex items-center gap-3 text-xs sm:text-sm font-mono-display text-mute uppercase tracking-[0.25em]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-brand shadow-[0_0_12px_#ff6a00]" />
            Where We’ve Delivered
          </div>
          <h2
            className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
            data-testid="footprint-heading"
          >
            300+ digital engagements,
            <span className="block text-orange-brand text-glow-orange">
            built across industries and growth stages.
            </span>
          </h2>
          <p className="mt-5 text-mute text-base sm:text-lg max-w-2xl">
             Our delivery footprint follows business outcomes — from ecommerce stores and performance campaigns to AI automation, mobile applications, CRM systems, and enterprise platforms.
          </p>
        </motion.div>

        {/* Globe + regions */}
        <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1 }}
            className="relative mx-auto w-full md:max-w-[520px]"
            data-testid="footprint-globe"
          >
            {/* outer orbit ring */}
            {/* <div className="pointer-events-none absolute inset-[-6%] rounded-full border border-white/5" />
            <div className="pointer-events-none absolute inset-[-14%] rounded-full border border-white/[0.04]" /> */}
            {/* halo */}
            {/* <div
              className="pointer-events-none absolute inset-[5%] rounded-full opacity-70"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,106,0,0.18) 0%, transparent 65%)",
                filter: "blur(20px)",
              }}
            /> */}
            <div className="relative aspect-square">
              <GlobeHero className="w-full h-full" />
            </div>
            {/* caption pill */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono-display text-mute uppercase tracking-[0.25em]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-brand" />
              Interactive · drag to rotate
            </div>
          </motion.div>

          {/* Regions list */}
          <div className="space-y-3" data-testid="footprint-regions">
            {TOP_REGIONS.map((r, i) => (
              <motion.div
                key={r.region}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="group relative flex items-center justify-between gap-3 md:gap-6 rounded-lg md:rounded-2xl border border-line bg-white/[0.02] px-5 sm:px-6 py-2.5 hover:border-orange-brand/60 hover:bg-white/[0.04] transition"
                data-testid={`footprint-region-${r.region.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* index */}
                <div className="font-mono-display text-xs text-mute w-6">
                  0{i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-white text-lg sm:text-xl tracking-tight">
                    {r.region}
                  </div>
                  <div className="md:mt-1 text-sm text-mute truncate">
                    {r.note}
                  </div>
                </div>
                <div className="shrink-0 rounded-full border border-orange-brand/40 bg-orange-brand/10 px-3 py-1.5 text-xs font-mono-display text-orange-brand uppercase tracking-wider">
                  {r.count}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
