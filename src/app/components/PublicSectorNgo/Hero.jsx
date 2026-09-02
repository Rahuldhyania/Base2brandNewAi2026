"use client";
import React from "react";
import { m } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GlobeHero } from "../visual/GlobeHero";

export default function Hero({
  highlightTag,
  title,
  descriptions = [],
  leftCTA,
  rightCTA,
  trustLine,
}) {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-24 lg:pt-28 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none mix-blend-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-4 md:gap-12 lg:gap-8 items-center">
          <div>
            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs md:text-sm"
              data-testid="hero-eyebrow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="label-mono">{highlightTag}</span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-white text-4xl lg:text-5xl leading-[1.05] tracking-tight mt-4 max-w-5xl"
              data-testid="hero-headline"
            >
              {title}
            </m.h1>

            <div className="mt-8 2xl:max-w-xl space-y-4" data-testid="hero-subhead">
              {descriptions.map((paragraph, index) => (
                <m.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 + index * 0.08 }}
                  className="text-base md:text-lg text-zinc-400 leading-relaxed"
                >
                  {paragraph}
                </m.p>
              ))}
            </div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#industries"
                data-testid="hero-primary-cta"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-(--b2b-primary) text-white text-sm md:text-base font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:shadow-[0_0_40px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 hover:-translate-y-0.5"
              >
                {leftCTA}
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
              <a
                href="#final-cta"
                data-testid="hero-secondary-cta"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass text-white text-sm md:text-base font-medium hover:bg-white/10 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-(--b2b-primary)" />
                {rightCTA}
              </a>
            </m.div>

            {trustLine && (
              <m.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-12 max-w-xl text-sm text-zinc-500 leading-relaxed"
                data-testid="hero-trust-line"
              >
                {trustLine}
              </m.p>
            )}
          </div>

          <div>
            <m.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1 }}
              className="relative mx-auto w-full max-w-[520px]"
              data-testid="footprint-globe"
            >
              <div
                className="pointer-events-none absolute inset-[5%] rounded-full opacity-70"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--b2b-primary) 18%, transparent) 0%, transparent 65%)",
                  filter: "blur(20px)",
                }}
              />
              <div className="relative aspect-square">
                <GlobeHero className="w-full h-full" />
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono-display text-mute uppercase tracking-[0.25em]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-brand" />
                Interactive · drag to rotate
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
