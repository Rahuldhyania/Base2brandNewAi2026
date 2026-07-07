'use client'
import React from "react";
import { motion } from "framer-motion";
import { extraData } from "@/constants/testIds/extraData";

const STATS = [
  { key: "offices", value: "8", label: "Offices" },
  { key: "continents", value: "4", label: "Continents" },
  { key: "engagements", value: "120+", label: "Engagements" },
  { key: "dna", value: "14 yrs", label: "Engineering DNA" },
];

export default function HeroLaunch() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -60 });
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="launch"
      data-section="launch"
      data-testid={extraData.hero.root}
      className="relative min-h-[100svh] px-6 md:px-12 pt-32 md:pt-40 pb-20 md:pb-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow flex items-center gap-3 mb-8"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--b2b-orange)] shadow-[0_0_10px_rgba(244,123,82,0.9)]" />
          Mission control · 8 cities · 4 continents
        </motion.div>

        {/* Headline */}
        <motion.h1
          data-testid={extraData.hero.headline}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white text-[52px] md:text-[96px] lg:text-[120px] leading-[0.94] tracking-[-0.045em]"
        >
          BASE<span className="text-[var(--b2b-orange)]">2</span>BRAND.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-[720px] text-[18px] md:text-[22px] leading-[1.45] text-[var(--b2b-text)]/90 tracking-[-0.01em]"
        >
          We architect the digital backbone for enterprises ready to leave gravity behind.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-[680px] text-[15px] md:text-[16px] leading-[1.6] text-[var(--b2b-text-muted)]"
        >
          AI systems, enterprise software, cloud and intelligent automation—engineered end‑to‑end from 8 cities across 4 continents.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            onClick={scrollTo("contact")}
            data-testid={extraData.hero.ctaStart}
            className="b2b-btn-primary"
          >
            Start a transformation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#services"
            onClick={scrollTo("services")}
            data-testid={extraData.hero.ctaExplore}
            className="b2b-btn-ghost"
          >
            Explore capabilities
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.65 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px b2b-hairline rounded-2xl overflow-hidden"
        >
          {STATS.map((s) => (
            <div
              key={s.key}
              data-testid={extraData.hero.stat(s.key)}
              className="bg-[rgba(10,11,18,0.55)] px-6 py-8 flex flex-col gap-2"
            >
              <div className="font-display text-4xl md:text-5xl text-white tracking-[-0.03em]">
                <span className="text-[var(--b2b-orange)]">{s.value}</span>
              </div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--b2b-text-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trusted line */}
        <div className="mt-16 md:mt-24">
          <div className="eyebrow-muted mb-5">Trusted across sectors</div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-[var(--b2b-text-muted)] font-mono tracking-[0.05em]">
            <span>Regulated enterprises</span>
            <span className="text-white/10">·</span>
            <span>Sovereign programmes</span>
            <span className="text-white/10">·</span>
            <span>Global NGOs</span>
            <span className="text-white/10">·</span>
            <span>Fortune 500</span>
          </div>
        </div>
      </div>

      {/* Ambient orange planet in bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[280px] -right-[280px] md:-bottom-[240px] md:-right-[180px] w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 35%, rgba(255,180,140,0.18), rgba(244,123,82,0.10) 40%, rgba(0,0,0,0) 62%)",
          filter: "blur(2px)",
        }}
      />
    </section>
  );
}
