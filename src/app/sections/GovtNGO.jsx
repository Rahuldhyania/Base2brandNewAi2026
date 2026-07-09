'use client';
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import { ShieldCheck, Globe2, HandHeart, FileLock2 } from "lucide-react";

const PROGRAMS = [
  {
    icon: ShieldCheck,
    title: "Secure Digital Systems",
    body: "Web platforms, portals, apps, and workflows built with performance, stability, and data protection in mind.",
  },
  {
    icon: Globe2,
    title: "Lead & Customer Automation",
    body: "CRM, WhatsApp, AI assistant, and marketing automation systems designed to reduce response time and improve conversions.",
  },
  {
    icon: HandHeart,
    title: "Compliance-Friendly Experiences",
    body: "Clear user journeys, proper tracking setup, consent-based flows, and structured data handling for better digital operations.",
  },
  {
    icon: FileLock2,
    title: "Performance With Accountability",
    body: "Campaigns, CRO, analytics, and reporting connected to real business outcomes — not vanity metrics.",
  },
];

export function GovtNGO() {
  return (
    <section
      id="govt"
      data-testid="govt-ngo-section"
      className="relative py-12  border-t border-line"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-6 md:gap-12">
        <div>
          <SectionHeader
            eyebrow="Public Sector / High-Trust Work"
            title="When trust, scale, and performance matter together."
            intro="For businesses in regulated, sensitive, or high-stakes industries, digital growth must be built with clarity, compliance, and reliability."
          />
          <div className="mt-3 md:mt-10 flex flex-wrap gap-3">
            {["G2C platforms", "Smart Cities", "Welfare delivery", "Health systems", "Citizen AI"].map((tag) => (
              <span
                key={tag}
                data-testid={`govt-tag-${tag.toLowerCase().replace(/\s/g, "-")}`}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-line text-[10px] md:text-xs font-mono-display uppercase tracking-[0.18em] text-mute hover:text-white hover:border-orange-brand/40 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 pt-4 md:pt-10">
          {PROGRAMS.map((p, i) => {
            const I = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                data-testid={`govt-program-${i}`}
                className="rounded-2xl border border-line bg-[#04061a]/60 p-6 hover:border-orange-brand/30 transition"
              >
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-orange-brand/10 border border-orange-brand/30 text-orange-brand">
                  <I size={18} />
                </div>
                <h3 className="mt-5 font-display text-white text-lg leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-mute leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
