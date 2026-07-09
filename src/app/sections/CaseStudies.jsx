'use client';
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import { ArrowUpRight } from "lucide-react";

const CASES = [
  {
    sector: "Ecommerce Growth",
    title:
      "From store experience to paid campaigns, we rebuilt the growth engine around conversion and repeat sales.",
    impact: [
      { k: "5.2X", v: "ROAS" },
      { k: "+41%", v: "revenue growth" },
    ],
    tag: "Shopify + Performance Marketing + CRO",
    cta: "Request the growth breakdown →",
  },
  {
    sector: "Healthcare Lead Automation",
    title:
      "We connected campaign traffic, lead capture, WhatsApp follow-up, and CRM automation into one faster patient acquisition system.",
    impact: [
      { k: "61%", v: "faster response time" },
      { k: "+39%", v: "qualified leads" },
    ],
    tag: "AI + CRM + Paid Media",
    cta: "Request the growth breakdown →",
  },
  {
    sector: "Enterprise SaaS Demand Generation",
    title:
      "We redesigned the funnel from audience targeting to landing page conversion and sales-qualified lead quality.",
    impact: [
      { k: "3X", v: "sales pipeline" },
      { k: "47%", v: "lower CAC" },
    ],
    tag: "LinkedIn + Google Ads + CRO",
    cta: "Request the growth breakdown →",
  },
];

function CaseCard({ c, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: i * 0.1 }}
      data-testid={`case-study-${i}`}
      className="group relative overflow-hidden rounded-3xl border border-line bg-[#04061a]/60 p-7 sm:p-9 flex flex-col"
    >
      <div className="flex items-center justify-between text-xs font-mono-display uppercase tracking-[0.22em] text-mute">
        <span>{c.tag}</span>
        <span className="text-orange-brand">CASE 0{i + 1}</span>
      </div>
      <div className="mt-1 md:mt-5 text-xs font-mono-display text-mute">{c.sector}</div>
      <h3 className="mt-1 md:mt-3 font-display text-white text-xl sm:text-2xl leading-tight tracking-tight">
        {c.title}
      </h3>
      <div className="mt-6 divider-line" />

      <div className="mt-6 grid grid-cols-2 gap-6">
        {c.impact.map((m) => (
          <div key={m.v}>
            <div className="font-display text-orange-brand text-3xl sm:text-4xl leading-none">
              {m.k}
            </div>
            <div className="mt-2 text-xs text-mute uppercase tracking-wider">
              {m.v}
            </div>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className="mt-8 inline-flex items-center justify-between gap-3 text-sm text-white font-medium group/cta"
      >
        Request the unredacted brief
        <span className="grid place-items-center h-9 w-9 rounded-full border border-line group-hover/cta:bg-orange-brand group-hover/cta:text-on-brand group-hover/cta:border-orange-brand transition">
          <ArrowUpRight size={14} />
        </span>
      </a>

      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition"
        style={{
          background:
            "linear-gradient(160deg, rgba(255,106,0,0.18), transparent 45%)",
        }}
      />
    </motion.article>
  );
}

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      data-testid="case-studies-section"
      className="relative py-12  border-t border-line"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Proof"
          title="Outcomes, Growth backed by numbers"
          intro="We do not sell activity. We build systems that create measurable movement."
        />

        {/* <div
          data-testid="landing-zone"
          className="relative overflow-hidden w-full bg-[radial-gradient(ellipse_at_top,_#0a0e2a_0%,_#02030a_60%,_#000000_100%)]"
        >
          <StarsBackground
            data-testid="landing-zone-stars"
            className="absolute inset-0 z-0 bg-transparent"
            starColor="#ffffff"
          />
          <div className="absolute inset-x-0 bottom-[260px] sm:bottom-[320px] z-[1] pointer-events-none">
            <GroundHorizon />
          </div>
          <div className="relative z-10">
            <FinalCTA />
            <Footer />
          </div>
        </div>  */}

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <CaseCard key={c.title} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
