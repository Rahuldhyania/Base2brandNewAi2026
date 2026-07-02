'use client';
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    tag: "AI Engineering",
    read: "9 min",
    title: "Why most enterprise GenAI pilots stall — and the blueprint that ships.",
    excerpt:
      "A field guide from 40+ production deployments: eval harnesses, data contracts, agent supervisors and the missing role nobody hires.",
  },
  {
    tag: "Cloud & Data",
    read: "11 min",
    title: "The Lakehouse is not enough: building decision-graphs over your data.",
    excerpt:
      "Why the next layer above your lakehouse is a governed semantic + causal graph — and how to ship one without a megabang program.",
  },
  {
    tag: "Industry POV",
    read: "7 min",
    title: "AI risk frameworks that actually pass an audit (and don't kill velocity).",
    excerpt:
      "An NIST × EU AI Act × DPDP-aligned operating model designed for product teams, not just second-line functions.",
  },
];

export function Insights() {
  return (
    <section
      id="insights"
      data-testid="insights-section"
      className="relative py-12  border-t border-line"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Insights"
            title="What we're publishing this quarter."
            intro="Field notes from the engineers, scientists and partners doing the work — not from a marketing desk."
          />
          <a
            href="#"
            data-testid="insights-view-all"
            className="hidden md:inline-flex shrink-0 items-center gap-2 text-sm text-white hover:text-orange-brand transition"
          >
            View all
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              data-testid={`insight-card-${i}`}
              className="group relative rounded-3xl border border-line bg-[#04061a]/60 p-4 flex flex-col overflow-hidden"
            >
              {/* visual header — abstract geometric, no stock photo */}
              <div className="relative h-32 rounded-2xl overflow-hidden border border-line mb-6 bg-gradient-to-br from-[#0a1030] via-[#06091f] to-[#02030a]">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      "radial-gradient(400px circle at 80% 20%, rgba(255,106,0,0.35), transparent 50%)",
                  }}
                />
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`l-${i}`} x1="0" x2="1">
                      <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#ff6a00" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[20, 35, 50, 65, 80].map((y, j) => (
                    <path
                      key={j}
                      d={`M 0 ${y} Q 50 ${y - (j + i) * 4} 100 ${y} T 200 ${y}`}
                      stroke={`url(#l-${i})`}
                      strokeWidth="0.6"
                      fill="none"
                    />
                  ))}
                </svg>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono-display uppercase tracking-[0.22em] text-mute">
                <span className="text-orange-brand">{p.tag}</span>
                <span className="h-1 w-1 rounded-full bg-mute/60" />
                <span>{p.read}</span>
              </div>
              <h3 className="mt-4 font-display text-white text-lg sm:text-xl leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-mute leading-relaxed flex-1">
                {p.excerpt}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm text-white group-hover:text-orange-brand transition"
              >
                Read paper
                <ArrowUpRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
