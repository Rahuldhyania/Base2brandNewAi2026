'use client';
import React from "react";
import { motion } from "framer-motion";
import { InfiniteSlider } from "../components/visual/InfiniteSlider";

const PARTNERS = [
  "D2C Brands",
  "Shopify Stores",
  "Healthcare Businesses",
  "Education Platforms",
  "SaaS Companies",
  "Real Estate Brands",
  "Manufacturing Firms",
  "Professional Services",
  "Retail & Ecommerce",
  "Enterprise Teams",
  "Lead Generation Brands",
  "App-Based Businesses",
];

function Pill({ label }) {
  return (
    <div
      className="px-3 xl:px-5 py-2 xl:py-3 rounded-full border border-line text-mute font-mono-display text-xs sm:text-sm uppercase tracking-[0.18em] whitespace-nowrap hover:text-white hover:border-line-strong transition"
      data-testid={`trust-pill-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
    >
      {label}
    </div>
  );
}

export function Trust() {
  return (
    <section
      id="trust"
      data-testid="trust-section"
      className="relative py-12 border-y border-line"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-[1fr_2fr] gap-5 md:gap-16 items-center mb-8"
        >
          <div>
            <div className="text-xs font-mono-display uppercase tracking-[0.25em] text-mute">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-brand mr-2 align-middle shadow-[0_0_10px_#ff6a00]" />
              Trusted across sectors
            </div>
            <h2 className="mt-4 font-display text-white text-2xl sm:text-3xl tracking-tight">
              Confidential partners
              <span className="block text-mute">Public outcomes</span>
            </h2>
          </div>
          <p className="text-mute text-base sm:text-lg max-w-2xl">
            We work with ambitious startups, growing D2C brands, enterprises, healthcare companies, education businesses, SaaS platforms, and service-led organizations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#02030a] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#02030a] to-transparent z-10" />
          <InfiniteSlider gap={16} speed={55} speedOnHover={120}>
            {PARTNERS.map((p) => (
              <Pill key={p} label={p} />
            ))}
          </InfiniteSlider>
          <div className="h-4" />
          <InfiniteSlider gap={16} speed={70} speedOnHover={140} reverse>
            {[...PARTNERS].reverse().map((p) => (
              <Pill key={`r-${p}`} label={p} />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
