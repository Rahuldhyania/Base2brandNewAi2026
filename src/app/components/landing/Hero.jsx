'use client'
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Bot,
} from "lucide-react";
import RotatingEarth from "@/components/landing/RotatingEarth";

const floatingMetrics = [
  {
    label: "AI visibility",
    value: "+340%",
    icon: TrendingUp,
    pos: "top-6 -left-4 md:left-6",
    delay: 0.3,
  },
  {
    label: "ChatGPT mention rate",
    value: "8.2×",
    icon: Bot,
    pos: "bottom-16 -right-2 md:right-8",
    delay: 0.55,
  },
  {
    label: "Brand authority",
    value: "Enterprise",
    icon: ShieldCheck,
    pos: "top-1/2 -right-6 md:-right-10",
    delay: 0.75,
  },
];

const platforms = [
  "ChatGPT",
  "Gemini",
  "Claude",
  "Perplexity",
  "Google AI",
  "Bing Copilot",
];

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-16 lg:pt-28  pb-12 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none mix-blend-overlay" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs md:text-sm"
              data-testid="hero-eyebrow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="label-mono">
                GEO · AEO · AI Search Optimization
              </span>
            </motion.div>
             
             <h1 className="font-display text-white text-4xl lg:text-5xl leading-[1.05] tracking-tight mt-4 max-w-5xl">
             Dominate{" "}
              <span className="text-gradient-blue-violet font-medium">
                AI Search
              </span>
              <br />
              <span className="text-zinc-400 font-light">before your</span>
              <br />
              competitors do.
             </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-8 max-w-xl text-base md:text-lg text-zinc-400 leading-relaxed"
              data-testid="hero-subhead"
            >
              We get your brand recommended inside ChatGPT, Gemini, Perplexity,
              Claude, Google AI Overviews and the next generation of search —
              through{" "}
              <span className="text-white">
                Generative Engine Optimization (GEO)
              </span>
              , Answer Engine Optimization (AEO) and AI visibility strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#final-cta"
                data-testid="hero-primary-cta"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm md:text-base font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:shadow-[0_0_40px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Free Strategy Call
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
              <a
                href="#final-cta"
                data-testid="hero-secondary-cta"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass text-white text-sm md:text-base font-medium hover:bg-white/10 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                Get AI Visibility Audit
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-zinc-500"
            >
              <span className="label-mono !text-zinc-500">Optimizing for</span>
              {platforms.map((p) => (
                <span
                  key={p}
                  className="text-zinc-300/80 text-sm font-medium tracking-tight"
                >
                  {p}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - Rotating Earth */}
          <div className="lg:col-span-5 relative h-[440px] md:h-[560px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0"
            >
              {/* Glow ring behind globe */}
              <div className="absolute inset-8 rounded-full conic-ring blur-3xl opacity-50 animate-pulse-glow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <RotatingEarth
                  width={560}
                  height={560}
                  autoRotate={true}
                  interactive={true}
                />
              </div>

              {floatingMetrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: m.delay }}
                  className={`absolute ${m.pos} animate-float-slow z-10`}
                  style={{ animationDelay: `${i * 1.2}s` }}
                >
                  <div className="glass-strong rounded-2xl px-4 py-3 flex items-center gap-3 min-w-[170px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-white/10 flex items-center justify-center">
                      <m.icon className="w-4 h-4 text-blue-300" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
                        {m.label}
                      </div>
                      <div className="font-display text-lg font-medium text-white">
                        {m.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom stat strip */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10"
          data-testid="hero-stats"
        >
          {[
            { v: "1.8B+", l: "Monthly AI prompts" },
            { v: "63%", l: "Buyers ask AI first" },
            { v: "12×", l: "Faster brand recall" },
            { v: "0", l: "Of your rivals optimized" },
          ].map((s) => (
            <div key={s.l} className="py-8 md:py-10 px-2 text-center">
              <div className="font-display text-4xl md:text-5xl font-light tracking-tight text-gradient">
                {s.v}
              </div>
              <div className="mt-2 text-xs md:text-sm text-zinc-500 uppercase tracking-widest">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
