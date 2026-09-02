'use client';
import React from "react";
import { m } from "framer-motion";
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
    name: "Retail & Ecommerce",
    note: "Shopify, CRO, performance marketing, retention, and revenue-focused customer journeys.",
    cta: "Explore sector →",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Wellness",
    note: "Lead generation, patient journeys, booking funnels, WhatsApp automation, and trust-led digital experiences.",
    cta: "Explore sector →",
  },
  {
    icon: Factory,
    name: "Education & Training",
    note: "Student lead generation, landing pages, course funnels, CRM automation, and campaign systems.",
    cta: "Explore sector →",
  },
  {
    icon: Radio,
    name: "Real Estate",
    note: "High-intent lead funnels, paid media campaigns, landing pages, WhatsApp automation, and sales pipeline systems.",
    cta: "Explore sector →",
  },
  {
    icon: ShoppingBag,
    name: "SaaS & Technology",
    note: "Demand generation, product positioning, website conversion, onboarding journeys, and AI-enabled growth systems.",
    cta: "Explore sector →",
  },
  {
    icon: Zap,
    name: "Professional Services",
    note: "Authority-building websites, performance campaigns, content systems, lead funnels, and conversion-led digital strategy.",
    cta: "Explore sector →",
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
          title="Built for businesses that want serious growth."
          intro="Every industry needs different customer journeys, different trust signals, different funnels, and different conversion paths."
        />
        <div className="mt-8 xl:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-line">
          {INDUSTRIES.map((ind, i) => {
            const I = ind.icon;
            return (
              <m.div
                key={ind.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                data-testid={`industry-card-${ind.name.toLowerCase().split(" ")[0]}`}
                className="group relative bg-[#02030a] p-6 xl:p-8 hover:bg-[#05081a] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-white/5 border border-line text-orange-brand group-hover:bg-orange-brand/10 group-hover:border-orange-brand/40 transition">
                    <I size={18} />
                  </div>
                  <span className="font-mono-display text-xs text-mute uppercase tracking-[0.2em]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 xl:mt-6 font-display text-white text-lg sm:text-xl leading-tight">
                  {ind.name}
                </h3>
                <p className="mt-2 text-sm text-mute leading-relaxed">
                  {ind.note}
                </p>
                <div className="mt-4 md:mt-6 inline-flex items-center gap-2 text-xs font-mono-display uppercase tracking-[0.2em] text-(--b2b-primary)  group-hover:opacity-100 transition">
                  Explore sector →
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
