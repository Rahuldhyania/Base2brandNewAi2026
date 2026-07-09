'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { extraData } from "@/constants/testIds/extraData";

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
const PROJECTS = [
  {
    id: "case-01",
    n: "CASE 01",
    tag: "Applied AI risk · Tier‑1 BFSI, Asia‑Pacific",
    title: "Reimagining underwriting with a multi‑agent decision stack.",
    metrics: [
      { v: "61%", l: "drop in turnaround" },
      { v: "$28M", l: "annualised lift" },
    ],
    url: "orbit-underwriting.b2b/case",
    // Rich fake browser preview
    preview: {
      accent: "#F47B52",
      title: "Orbit Decision Fabric — Underwriting Console",
      lines: [
        { label: "Applicants scored today", value: "12,481" },
        { label: "Auto‑approved", value: "76.3%" },
        { label: "Escalated to underwriter", value: "9.1%" },
      ],
      chart: [22, 34, 30, 42, 38, 55, 60, 58, 66, 70, 68, 78],
    },
  },
  {
    id: "case-02",
    n: "CASE 02",
    tag: "Govtech modernization · Public Healthcare Authority EU",
    title: "An AI‑native citizen services platform across 11 regions.",
    metrics: [
      { v: "9.4M", l: "citizens onboarded" },
      { v: "-42%", l: "case backlog" },
    ],
    url: "citizens.hs‑eu.gov/live",
    preview: {
      accent: "#7BC5D9",
      title: "Citizen Services — Regional Overview",
      lines: [
        { label: "Live requests", value: "3,204" },
        { label: "Median resolution", value: "38 min" },
        { label: "Backlog vs. Q2", value: "‑42%" },
      ],
      chart: [50, 48, 44, 42, 40, 38, 36, 32, 30, 28, 27, 25],
    },
  },
  {
    id: "case-03",
    n: "CASE 03",
    tag: "Industry 4.0 data · Global Manufacturer",
    title: "Digital twin of the entire supply chain, decision‑graph driven.",
    metrics: [
      { v: "17%", l: "OEE improvement" },
      { v: "-$54M", l: "inventory carry" },
    ],
    url: "twin.acme‑global.io",
    preview: {
      accent: "#F47B52",
      title: "SupplyGraph Twin — Global Ops",
      lines: [
        { label: "Nodes online", value: "1,204 / 1,206" },
        { label: "Throughput (24h)", value: "+17.4%" },
        { label: "Alerts", value: "6 active" },
      ],
      chart: [40, 44, 48, 46, 52, 58, 62, 64, 70, 74, 78, 82],
    },
  },
];
function BrowserWindow({ project }) {
  const { preview } = project;
  const maxChart = Math.max(...preview.chart);

  return (
    <div className="relative rounded-[20px] overflow-hidden border border-white/12 bg-gradient-to-br from-[#0E1018] to-[#080910] shadow-[0_40px_120px_-40px_rgba(244,123,82,0.35)]">
      {/* Chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-[rgba(255,255,255,0.02)]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="mx-auto max-w-[280px] h-6 rounded-full bg-white/5 flex items-center justify-center gap-2 px-3">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="2" y="4.5" width="6" height="4" rx="1" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
              <path d="M3.5 4.5V3.2a1.5 1.5 0 013 0v1.3" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
            </svg>
            <span className="font-mono text-[10px] text-white/50 truncate">{project.url}</span>
          </div>
        </div>
        <span className="font-mono text-[10px] text-[var(--b2b-orange)]/80">● live</span>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              {preview.title}
            </div>
            <div className="font-display text-[22px] md:text-[26px] text-white mt-1 leading-tight">
              Live telemetry
            </div>
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${preview.accent} 0%, rgba(255,255,255,0.05) 100%)`,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {preview.lines.map((l) => (
            <div key={l.label} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40 mb-1">
                {l.label}
              </div>
              <div className="font-display text-[18px] text-white tracking-[-0.02em]">
                {l.value}
              </div>
            </div>
          ))}
        </div>

        {/* Chart bars */}
        <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
          <div className="flex items-end gap-1.5 h-24">
            {preview.chart.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${(v / maxChart) * 100}%`,
                  background: `linear-gradient(180deg, ${preview.accent}, ${preview.accent}55)`,
                  boxShadow: `0 0 8px ${preview.accent}44`,
                }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between font-mono text-[9px] text-white/30">
            <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export function CaseStudies() {
    const ref = useRef(null);  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],  
    });
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.02, 0.94]);
    const rotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
    const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const glow = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
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
          {/* {CASES.map((c, i) => (
            <CaseCard key={c.title} c={c} i={i} />
          ))} */}
          {PROJECTS.map((project, i) => (
            <motion.div
             key={i}
              data-testid={extraData.work.browserExpand(project.id)}
              style={{ scale, rotate, y }}
              className="relative ddff"
            >
              <motion.div
                aria-hidden
                style={{ opacity: glow }}
                className="absolute -inset-6 rounded-[28px] pointer-events-none"
              >
                <div
                  className="absolute inset-0 rounded-[28px]"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(244,123,82,0.35), transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
              </motion.div>

              <BrowserWindow project={project} />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
