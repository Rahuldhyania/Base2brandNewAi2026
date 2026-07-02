"use client";
import React from "react";
import { motion } from "framer-motion";
import { StarsBackground } from "../components/visual/StarsBackground";
import { OfficialLogo } from "../components/visual/OfficialLogo";
import SlotText from "@/components/ui/SlotText";

/**
 * Premium hero — clean Base2Brand wordmark lockup (BASE + orange 2 with rocket + BRAND)
 * rendered as a single SVG against deep-space backdrop with orbit rings + stars.
 * The 3D globe lives in its own section further down the page.
 */
export function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative w-full overflow-hidden"
    >
      <StarsBackground className="absolute inset-0" />
      {/* orbit rings */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="ring-orbit rounded-full aspect-square w-[140vmin] opacity-40" />
        <div className="absolute ring-orbit rounded-full aspect-square w-[110vmin] opacity-30" />
        <div className="absolute ring-orbit rounded-full aspect-square w-[80vmin] opacity-20" />
      </div>
      {/* soft orange halo behind the 2 */}
      <div
        className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 h-[55vmin] w-[55vmin] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,0,0.25) 0%, rgba(255,106,0,0.06) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div className="absolute inset-0 grain" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pt-24 md:pt-34 pb-10 md:pb-22">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 text-xs sm:text-sm font-mono-display text-mute uppercase tracking-[0.25em]"
          data-testid="hero-eyebrow"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-brand shadow-[0_0_12px_#ff6a00]" />
          From base — to brand. From idea — to orbit.
        </motion.div>

        {/* Wordmark lockup */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15 }}
          className="relative mt-4 sm:mt-6"
          data-testid="hero-wordmark"
          style={{ filter: "drop-shadow(0 18px 60px rgba(255,106,0,0.18))" }}
        >
          <OfficialLogo
            className="block w-full h-auto"
            accent="#ff6a00"
            letterColor="#ffffff"
          />
        </motion.div>

        {/* <h1 className="text-start font-black text-white leading-[0.9] tracking-tight pt-8 text-[38px] md:text-[50px] lg:text-[70px] xl:text-[90px] 2xl:text-[120px]">
          <SlotText
            default_text="RANK."
            items_text={["CONVERT.", "DOMINATE.", "PERFORM.", "SCALE.", "WIN."]}
            ClassName="justify-start"
            BLOCK_GROW_TEXT={true}
          />
        </h1> */}



        {/* tagline + CTAs */}
        <div className="mt-4 sm:mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-4 md:gap-8 lg:gap-12 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="font-display text-white text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight max-w-3xl"
            data-testid="hero-headline"
          >
            We architect the digital{" "}
            <span className="text-orange-brand text-glow-orange">backbone</span>{" "}
            for enterprises ready to leave gravity behind.
            <span className="block text-mute mt-4 text-lg sm:text-xl font-normal max-w-2xl">
              AI systems, enterprise software, cloud and intelligent automation
              — engineered end-to-end from 8 cities across 4 continents.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end"
          >
            <a
              href="#contact"
              data-testid="hero-cta-primary"
              className="group inline-flex items-center justify-between gap-4 rounded-full bg-orange-brand font-semibold px-4 md:px-6 py-2 md:py-4 hover:brightness-110 transition glow-orange"
            >
              Start a transformation
              <span className="grid place-items-center h-7 w-7 rounded-full bg-black/15 group-hover:translate-x-0.5 transition">
                →
              </span>
            </a>
            <a
              href="#services"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center gap-3 rounded-full border border-line-strong text-white font-medium px-4 md:px-6 py-2 md:py-4 hover:bg-white/5 transition"
            >
              Explore capabilities
            </a>
          </motion.div>
        </div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-4 md:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-line"
          data-testid="hero-stats"
        >
          {[
            { k: "8", v: "Global offices" },
            { k: "4", v: "Continents" },
            { k: "120+", v: "Enterprise engagements" },
            { k: "14 yrs", v: "Engineering DNA" },
          ].map((s) => (
            <div key={s.v} className="bg-[#02030a] p-3 md:p-5 xl:p-6">
              <div className="font-display text-2xl md:text-4xl xl:text-5xl text-white">
                {s.k}
              </div>
              <div className="mt-1 text-[10px] md:text-sm text-mute uppercase tracking-wider">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
