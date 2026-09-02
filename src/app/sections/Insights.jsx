'use client';
import React from "react";
import { m } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    tag: "Performance Marketing",
    read: "7 min",
    title:
      "Why most ad accounts stop scaling — and how to rebuild them for profitable growth.",
    excerpt:
      "A practical breakdown of audience quality, creative testing, tracking, landing pages and CRO systems that turn campaigns into revenue engines.",
    cta: "Read insight →",
  },
  {
    tag: "CRO & Ecommerce",
    read: "6 min",
    title: "Traffic is not the problem. Your conversion journey is.",
    excerpt:
      "How Shopify brands can improve product pages, checkout flows, offers and retention systems to convert more visitors without increasing ad spend.",
    cta: "Read insight →",
  },
  {
    tag: "AI & Automation",
    read: "8 min",
    title:
      "AI should not replace your team. It should remove the work slowing them down.",
    excerpt:
      "From lead qualification to WhatsApp automation, CRM workflows and AI sales assistants — here’s how brands can automate growth without losing control.",
    cta: "Read insight →",
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
            title="What we’re building and scaling this quarter."
            intro="Sharp insights on marketing, AI, Shopify, CRO and technology — built for brands ready to grow smarter."
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
            <m.article
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
                className="mt-1 inline-flex items-center gap-2 text-sm text-white group-hover:text-orange-brand transition"
              >
                Read paper
                <ArrowUpRight size={14} />
              </a>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
