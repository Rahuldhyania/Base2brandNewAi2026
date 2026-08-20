'use client'
import React from "react";
import { m } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import StarsBackground from "./StarsBackground";
import OrbitalBackground from "./OrbitalBackground";

export default function Hero({ highlightTag, titleupper, titlelower, description, buttonLeft, buttonRight, Starlayer }) {
  return (
    <section
      id="top"
      className="relative flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Star layer */}
      {
        Starlayer === false ?
          null
          :
          <div className="absolute inset-0 z-0">
            <StarsBackground starColor="#ffffff" speed={80} />
          </div>
      }


      {/* Orbital rings */}
      <OrbitalBackground
        size={1200}
        rings={[260, 420, 600, 820, 1080]}
        opacity={0.85}
      />

      {/* Center glow */}
      <div
        className="glow-orange"
        style={{
          width: 700,
          height: 700,
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.45,
        }}
      />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050507] to-transparent z-10 pointer-events-none" />
      {/* Bottom fade */}
      {
        Starlayer === false ?
          null
          :
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050507] to-transparent z-10 pointer-events-none" />
      }

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 text-center pt-24 md:pt-28 pb-10 md:pb-20">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="section-label inline-flex"
        >
          {highlightTag}
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
          className="mt-4 md:mt-8 font-display text-[34px] md:text-[44px] lg:text-[64px]  leading-[0.95] font-medium text-white"
        >
          <span className="block">{titleupper}</span>{' '}
          <span className="block text-orange-gradient w-fit mx-auto">{titlelower}</span>
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="mt-3 md:mt-6 text-sm md:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-4"
        >

          {
            buttonLeft && (
              <a href="#final-cta" className="btn-primary" data-testid="hero-cta-primary">
                {buttonLeft}
                <ArrowRight size={16} />
              </a>
            )
          }

          {
            buttonRight && (
              <a
                href="#capabilities"
                className="btn-secondary"
                data-testid="hero-cta-secondary"
              >
                {buttonRight}
                <ArrowRight size={14} />
              </a>
            )
          }

        </m.div>

        {/* Hero ticker readout */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-10 mx-auto max-w-xl border border-white/10 rounded-full px-4 py-2.5 flex items-center gap-3 bg-white/[0.02] backdrop-blur-md"
          data-testid="hero-status"
        >
          <span className="status-pulse" />
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-zinc-400 uppercase">
            Growth Engine
          </span>
          <span className="dotted-fill" />
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-(--b2b-primary) uppercase">
            Online
          </span>
        </m.div>

        {/* Scroll hint */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden lg:flex absolute bottom-8 right-8 flex-col items-center gap-2 text-zinc-500"
        >
          <span className="w-px h-10 bg-gradient-to-b from-transparent to-zinc-500" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center pt-6">
            Scroll
          </span>
        </m.div>
      </div>
    </section>
  );
}
