'use client'
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { extraData } from "@/constants/testIds/extraData";

// Portfolio uses static screenshots that expand fullscreen — no live iframes.


/**
 * ProjectCase — a single browser card that expands towards viewport as user
 * scrolls into it. Uses useScroll to drive scale/translate/opacity.
 * When the rocket "docks", we crossfade the card into a full‑bleed preview.
 */
function ProjectCase({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale up as user scrolls in, peak at middle, ease out
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.02, 0.94]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const glow = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

  return (
    <div
      ref={ref}
      data-testid={extraData.work.project(project.id)}
      className="relative flex items-center px-6 md:px-12 py-12"
    >
      <div className="max-w-[1180px] mx-auto w-full grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-8 items-center">
        {/* Copy side */}
        <div className={index % 2 === 1 ? "md:order-2" : ""}>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--b2b-orange)]">
              {project.n}
            </span>
            <span className="h-px w-8 bg-[var(--b2b-orange)]/50" />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--b2b-text-muted)]">
              {project.tag}
            </span>
          </div>
          <h3 className="font-display text-white text-[30px] md:text-[42px] leading-[1.05] tracking-[-0.03em] max-w-[520px]">
            {project.title}
          </h3>

          <div className="mt-10 flex flex-wrap gap-8">
            {project.metrics.map((m) => (
              <div key={m.l} className="flex flex-col gap-1">
                <div className="font-display text-4xl md:text-5xl text-[var(--b2b-orange)] tracking-[-0.03em]">
                  {m.v}
                </div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--b2b-text-muted)]">
                  {m.l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button
              type="button"
              className="b2b-btn-ghost"
              onClick={(e) => e.preventDefault()}
            >
              Request the unredacted brief
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Browser side */}
        <motion.div
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
      </div>
    </div>
  );
}

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
export default function Work({
  title='Selected anonymised cases.',
  titleLower='Outcomes, not optics.',
  cardsData={PROJECTS}
}) {
  return (
    <section
      id="work"
      data-section="work"
      data-testid={extraData.work.root}
      className="relative"
    >
      <div className="px-6 md:px-12 pt-14 pb-6 md:pb-10">
        <div className="max-w-[1180px] mx-auto">
          <div className="eyebrow mb-4">Proof</div>
          <h2 className="font-display text-white text-[38px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[820px]">
            {title} <br />
            <span className="text-[var(--b2b-text-muted)]">{titleLower}</span>
          </h2>
        </div>
      </div>
      {cardsData.map((p, i) => (
        <ProjectCase key={p.id} project={p} index={i} />
      ))}
    </section>
  );
}
