'use client'
import React from "react";
import { motion } from "framer-motion";
import { Lock, Zap, Layers, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: Zap,
    title: "Native performance is non-negotiable",
    body:
      "Apple users expect speed, fluidity and precision. We build native Apple experiences that respect the platform — fast launches, responsive gestures, clean animations and stable performance across real devices.",
  },
  {
    icon: Lock,
    title: "Privacy is engineered, not promised",
    body:
      "Enterprise Apple products need security from day one. We design data flows, permissions, authentication, app tracking, storage and user consent with privacy built into the product architecture.",
  },
  {
    icon: Layers,
    title: "Ecosystem continuity multiplies value",
    body:
      "One Apple engagement can extend across iPhone, iPad, Apple Watch, Vision Pro, CarPlay and Mac. We design continuity across devices so users move naturally between surfaces without friction.",
  },
  {
    icon: Sparkles,
    title: "Craft is still the competitive advantage",
    body:
      "Premium is not decoration. It is how the product feels, responds and earns trust. We engineer Apple apps with the detail users expect — from spacing and motion to accessibility and reliability.",
  },
];

export default function WhyApple() {
  return (
    <section className="b2b-container py-8 sm:py-12">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-4 sm:gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
            Why Apple
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.05] tracking-tight mt-4">
            Built for users who notice speed,{" "}
            <span className="apple-text-gradient">trust and design in every tap.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/60 leading-relaxed max-w-md">
            For modern brands and enterprises, Apple is not just a device ecosystem. It is a premium customer environment where performance, privacy, design quality and continuity matter from the first tap.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-5"> 
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="b2b-glass rounded-2xl p-4 sm:p-6 hover:bg-white/[0.05] transition"
              >
                <span
                  className="inline-flex w-10 h-10 rounded-xl items-center justify-center"
                  style={{ background: "rgba(10,132,255,0.13)", border: "1px solid rgba(10,132,255,0.35)" }}
                >
                  <Icon size={18} color="#64D2FF" strokeWidth={1.8} />
                </span>
                <h3 className="mt-3 sm:mt-5 font-display text-lg sm:text-xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
