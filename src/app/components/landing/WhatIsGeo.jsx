'use client';
import React from "react";
import { motion } from "framer-motion";
import { Globe, Target, BrainCircuit, ArrowUpRight } from "lucide-react";

const cards = [
  {
    tag: "GEO",
    title: "Generative Engine Optimization",
    body: "Optimize your brand to be discovered and recommended by generative AI systems like ChatGPT, Gemini and Claude.",
    icon: Globe,
    points: [
      "Entity-first content modelling",
      "AI-readable brand graphs",
      "Prompt-targeted authority",
    ],
  },
  {
    tag: "AEO",
    title: "Answer Engine Optimization",
    body: "Structure content so AI engines select your brand as the definitive answer when buyers ask.",
    icon: Target,
    points: [
      "Question intent mapping",
      "Structured answer blocks",
      "Citation-grade signals",
    ],
  },
  {
    tag: "AISO",
    title: "AI Search Optimization",
    body: "Build distributed authority across the platforms where your customers form opinions and shortlists.",
    icon: BrainCircuit,
    points: [
      "Cross-platform presence",
      "Recommendation positioning",
      "Topical depth at scale",
    ],
  },
];

export default function WhatIsGeo() {
  return (
    <section
      data-testid="what-is-geo-section"
      className="relative py-28 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="label-mono">· The Stack</div>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter">
              A new layer of growth
              <br />
              <span className="text-zinc-500">built for AI-first buyers.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md">
            Three disciplines, one outcome — your brand cited, recommended and
            chosen inside every AI surface that matters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative card-hover rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8 overflow-hidden"
            >
              <div className="absolute -top-32 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-violet-500/0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-blue-300" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-500 uppercase">
                  0{i + 1} / {cards.length.toString().padStart(2, "0")}
                </div>
              </div>

              <div className="mt-8">
                <div className="font-mono text-xs tracking-[0.25em] text-blue-400 uppercase">
                  {c.tag}
                </div>
                <h3 className="font-display mt-3 text-2xl md:text-[26px] font-medium tracking-tight leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                  {c.body}
                </p>
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-6">
                {c.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                Explore {c.tag}
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
