'use client'
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Cloud, Smartphone, Building2 } from "lucide-react";
import WarpBackground from "@/components/Background/WarpBackgroundSD";
import HeroVisual from "@/components/visual/HeroVisual";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const SUPPORTING_LABELS = [
  { icon: Sparkles, text: "Product Engineering" },
  { icon: Cloud, text: "Cloud-Native" },
  { icon: Smartphone, text: "Android Development" },
  { icon: Building2, text: "Enterprise Scale" },
];

const METRICS = [
  { value: "120+", label: "Software Engagements" },
  { value: "30+", label: "Engineers & Architects" },
  { value: "8", label: "Global Offices" },
  { value: "24/7", label: "Operational Support" },
];

const Hero = () => {
  return (
    <section id="top" className="relative isolate pb-18 pt-24 sm:pt-28 overflow-hidden">
      <WarpBackground opacity={0.15} />
      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 b2b-section-grid opacity-40" />

      <div className="b2b-container">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-12 gap-10 items-center"
        >
          {/* Left: copy */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-7">
              <span className="relative inline-flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[color:var(--b2b-red)] animate-b2b-pulse" />
                <span className="absolute inset-0 rounded-full bg-[color:var(--b2b-red)] opacity-60 blur-md" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.28em] text-white/70">
                Digital Product Engineering
              </span>
              <span className="text-[11px] text-white/35">— Software Division</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display font-medium text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              <span className="b2b-text-gradient">Engineer products that </span>
              <span className="b2b-text-gradient"> scale with your </span>
              <span className="b2b-text-red-gradient"> ambition. </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="b2b-lead mt-7">
              Base2Brand designs and engineers digital products, cloud-native platforms, and
              mobile applications that power businesses across industries. From SaaS products
              to enterprise applications, we build software designed for measurable business
              outcomes.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-300 bg-[linear-gradient(180deg,#ff5a4d,#ff3b30)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_40px_-16px_rgba(255,59,48,0.7)]" data-testid="hero-cta-primary">
                Start a software engagement
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#capabilities" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 bg-white/4 border border-white/12 text-[var(--b2b-fg)]" data-testid="hero-cta-secondary">
                Explore capabilities
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-2">
              {SUPPORTING_LABELS.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70;"
                >
                  <Icon className="w-3.5 h-3.5 text-[color:var(--b2b-red)]" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: visual */}
          <motion.div
            variants={fadeUp}
            className="col-span-12 lg:col-span-5 relative"
          >
            <HeroVisual />
          </motion.div>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.08]"
          data-testid="hero-metrics"
        >
          {METRICS.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className="bg-[#070b1c] p-7 md:p-8 hover:bg-[#0b1024] transition-colors group"
            >
              <div className="b2b-number text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                {m.value}
              </div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-white/55 group-hover:text-white/80 transition-colors">
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
