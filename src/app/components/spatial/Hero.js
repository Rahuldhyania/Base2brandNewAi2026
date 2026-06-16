'use client'
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";
import { SPATIAL } from "@/constants/testIds";

const metrics = [
  { value: "120+", label: "Enterprise engagements" },
  { value: "8", label: "Global offices" },
  { value: "4", label: "Continents" },
  { value: "24/7", label: "Operational support" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Hero() {
  return (
    <section
      data-testid={SPATIAL.heroSection}
      className="relative pb-18 pt-24 sm:pt-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* From-base label */}
        <motion.div {...fadeIn} className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse-amber" />
          <span className="text-[11px] tracking-[0.28em] uppercase text-white/60 font-medium">
            From base — to brand · Spatial Computing Practice
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <motion.h1
              {...fadeIn}
              transition={{ duration: 0.7, ease: "easeOut" }}
              data-testid={SPATIAL.heroHeadline}
              className="font-display font-medium text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
            >
              Engineer
              <br />
              experiences
              <br />
              <span className="text-white/85">
                beyond the{" "}
                <span className="relative inline-block">
                  <span className="text-[#FFB800]">screen.</span>
                  <span className="absolute -inset-x-1 bottom-1 h-[6px] bg-[#FFB800]/15 blur-md -z-10" />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid={SPATIAL.heroSubheadline}
              className="mt-8 text-base lg:text-lg text-white/65 max-w-[600px] leading-relaxed"
            >
              Base2Brand designs and engineers enterprise spatial computing
              experiences across Vision Pro, XR platforms, digital twins,
              industrial simulations and immersive workflows — built for
              measurable business outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#cta"
                data-testid={SPATIAL.heroPrimaryCta}
                className="group inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#FFC93C] text-[#050814] font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Start an XR engagement
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#capabilities"
                data-testid={SPATIAL.heroSecondaryCta}
                className="group inline-flex items-center gap-2 text-white/90 hover:text-white border border-white/15 hover:border-[#FFB800]/40 font-medium text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Explore capabilities
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>

          {/* Right — spatial visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 border-t border-white/[0.08]"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              data-testid={SPATIAL.heroMetric(i)}
              className={`px-2 py-7 ${
                i < metrics.length - 1
                  ? "lg:border-r border-white/[0.08]"
                  : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-white/[0.08]" : ""}`}
            >
              <div className="font-display text-white text-4xl sm:text-5xl tracking-tight">
                {m.value}
              </div>
              <div className="mt-2 text-[11px] tracking-[0.2em] uppercase text-white/45">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
