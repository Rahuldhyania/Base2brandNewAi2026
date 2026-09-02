'use client';
import React from "react";
import { m } from "framer-motion";
import { Rocket, BarChart3, Cpu, Building2 } from "lucide-react";

const ICONS = { Rocket, BarChart3, Cpu, Building2 };

const defaultCards = [
  {
    icon: "Rocket",
    title: "Future-First Strategy",
    body: "We don’t chase old rankings. We build visibility for where search is moving — AI-native from day one.",
  },
  {
    icon: "BarChart3",
    title: "Full-Funnel Growth",
    body: "We connect AI visibility, qualified leads, brand authority and conversion strategy across the complete growth funnel.",
  },
  {
    icon: "Cpu",
    title: "Technical + Marketing Expertise",
    body: "SEO, content engineering, website structure, analytics, growth and applied AI — handled as one connected system.",
  },
  {
    icon: "Building2",
    title: "Enterprise Ready",
    body: "Built for startups, SMBs and enterprise teams that need governance, speed, scale and measurable execution.",
  },
];

const defaultStats = [
  { v: "90 Days", l: "AI visibility roadmap." },
  { v: "4+ AI Engines", l: "ChatGPT, Gemini, Perplexity & Google AI." },
  { v: "100+ Prompts", l: "Tested for AI visibility." },
];

export default function WhyUs({
  eyebrow = "· Why Base2Brand",
  titleLead = "Brands choose us",
  titleAccent = "for AI growth.",
  description = "Base2Brand is built for the next decade of discovery — combining strategy, content engineering, technical SEO, AI systems, analytics and growth execution under one roof. We treat AI SEO as the next operating layer of search.",
  stats = defaultStats,
  cards = defaultCards,
}) {
  return (
    <section
      data-testid="why-us-section"
      className="relative py-12"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="label-mono">{eyebrow}</div>
            <h2 className="mt-2 font-display text-2xl mx-auto sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance">
              {titleLead}
              <br />
              <span className="text-gradient-blue-violet font-medium">
                {titleAccent}
              </span>
            </h2>
            <p className="mt-6 text-zinc-400 max-w-md text-lg">
              {description}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <div className="font-display text-2xl font-light text-gradient">
                    {s.v}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-zinc-500 mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {cards.map((c, i) => {
              const Icon = ICONS[c.icon] || Rocket;
              return (
                <m.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-hover rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-4 h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-300" />
                  </div>
                  <h3 className="font-display mt-3 text-xl md:text-2xl font-medium tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {c.body}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
