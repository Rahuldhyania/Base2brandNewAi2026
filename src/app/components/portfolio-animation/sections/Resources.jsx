'use client'
import React from "react";
import { motion } from "framer-motion";
import { extraData } from "@/constants/testIds/extraData";

const ARTICLES = [
  {
    id: "genai-blueprint",
    cat: "AI Engineering",
    title: "Why most enterprise GenAI pilots stall — and the blueprint that ships.",
    read: "9 min read",
    date: "Q1 · 2026",
  },
  {
    id: "lakehouse-not-enough",
    cat: "Cloud & Data",
    title: "The Lakehouse is not enough: building decision‑graphs over your data.",
    read: "12 min read",
    date: "Q1 · 2026",
  },
  {
    id: "risk-frameworks",
    cat: "Industry POV",
    title: "AI risk frameworks that actually pass an audit (and don't kill velocity).",
    read: "7 min read",
    date: "Q4 · 2025",
  },
];

export default function Resources() {
  return (
    <section
      id="resources"
      data-section="resources"
      data-testid={extraData.resources.root}
      className="relative px-6 md:px-12 py-12"
    >
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-14 md:mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow mb-4">Insights</div>
            <h2 className="font-display text-white text-[38px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[720px]">
              What we&apos;re publishing<br />this quarter.
            </h2>
          </div>
          <button type="button" className="b2b-btn-ghost">
            All publications
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {ARTICLES.map((a, i) => (
            <motion.article
              key={a.id}
              data-testid={extraData.resources.article(a.id)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative b2b-panel rounded-2xl p-6 md:p-7 flex flex-col gap-5 overflow-hidden min-h-[320px] cursor-pointer"
            >
              {/* Article scan glow */}
              <div
                aria-hidden
                className="absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(244,123,82,0.20), transparent 60%)",
                  filter: "blur(6px)",
                }}
              />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--b2b-orange)]">
                  {a.cat}
                </span>
                <span className="font-mono text-[10px] text-white/40">{a.date}</span>
              </div>

              <h3 className="font-display text-[20px] md:text-[22px] text-white leading-[1.2] tracking-[-0.02em] flex-1">
                {a.title}
              </h3>

              <div className="pt-5 border-t border-white/8 flex items-center justify-between">
                <span className="font-mono text-[11px] text-white/50">{a.read}</span>
                <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 group-hover:text-[var(--b2b-orange)] group-hover:border-[var(--b2b-orange)] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
