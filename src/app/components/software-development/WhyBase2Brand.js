'use client'
import React from "react";
import { motion } from "framer-motion";
import { Wrench, Cloud, Layers3, Rocket } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const CARDS = [
  {
    icon: Wrench,
    title: "Production engineering over prototypes.",
    desc: "Products are built to operate, evolve, and scale — not just to demo. We engineer for production from day one.",
  },
  {
    icon: Cloud,
    title: "Cloud-native foundations from day one.",
    desc: "Security, resilience, and observability are engineered into every layer of the platform, not bolted on later.",
  },
  {
    icon: Layers3,
    title: "Cross-platform product thinking.",
    desc: "Web, Android, APIs, and infrastructure work as a unified ecosystem with shared logic and consistent UX.",
  },
  {
    icon: Rocket,
    title: "Execution matters.",
    desc: "Shipping consistently is more valuable than endless planning. We move with engineering velocity and rigor.",
  },
];

const WhyBase2Brand = () => {
  return (
    <section id="why" className="b2b-section relative py-12">
      <div className="b2b-container">
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="text-[var(--b2b-primary)] mb-6 text-center">
            <span className="w-1.5 h-1.5 rounded-full text-(--b2b-primary)" />
            Why Base2Brand
          </motion.div>
          <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            <span className="b2b-text-gradient">Why modern software products require </span>
            <span className="text-(--b2b-primary)">engineering discipline.</span>
          </h2>
          <p className="text-white/65 text-sm sm:text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed pt-3">
            Real software products are continuously operated, evolved, and scaled — not just launched. Our engineering approach is built around that reality.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {CARDS.map((c, idx) => {
            const Icon = c.icon; 
            return (
              <motion.div
                key={c.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="b2b-card p-5 sm:p-6 lg:p-9 group"
              >
                <div className="flex items-start gap-2 md:gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl border border-[color:var(--b2b-primary)]/30 bg-[color:var(--b2b-primary)]/10 grid place-items-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-[color:var(--b2b-primary)]" />
                  </div>
                  <div>
                    <h3 className="b2b-h3">{c.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/65">{c.desc}</p>
                  </div>
                </div>
                <div className="mt-2 md:mt-7 pt-2 md:pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                    Principle 0{idx + 1}
                  </span>
                  <span className="text-[12px] text-[color:var(--b2b-primary)] font-medium">Engineered→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBase2Brand;
