'use client'
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import OrbitalBackground from "./OrbitalBackground";

export default function FinalCTA({ highlightTag, titleUpper, titleLower, description }) {
  return (
    <section
      id="final-cta"
      className="relative py-10 overflow-hidden"
      data-testid="final-cta-section"
    >
      <OrbitalBackground
        size={1100}
        rings={[260, 420, 600, 820]}
        opacity={0.6}
      />
      <div
        className="glow-orange"
        style={{
          width: 800,
          height: 800,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.5,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          {highlightTag}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
        >
          {titleUpper}
          <br />
          <span className="text-orange-gradient">
            {titleLower}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-2 text-zinc-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>



        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#top" className="btn-primary" data-testid="final-cta-primary">
            Start Growing <ArrowRight size={16} />
          </a>
          <a
            href="mailto:hello@base2brand.com"
            className="btn-secondary"
            data-testid="final-cta-secondary"
          >
            Talk To A Growth Expert <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Trust ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 mx-auto max-w-2xl border border-white/8 rounded-2xl px-5 sm:px-7 py-5 bg-white/[0.02] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="status-pulse" />
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-zinc-400">
              Growth Engine
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-zinc-500">
            <span className="text-white">06 / 06</span> Systems Online
          </span>
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-(--b2b-primary)">
            Engaged
          </span>
        </motion.div>
      </div>
    </section>
  );
}
