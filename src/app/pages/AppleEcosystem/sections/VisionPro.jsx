'use client'
import React from "react";
import { motion } from "framer-motion";
import { Glasses } from "lucide-react";

const APPLICATIONS = [
  {
    title: "Enterprise training & simulation",
    body: "Spatial training environments for surgical teams, energy operators, manufacturing floors and aviation — where mistakes in the real world are catastrophic but mistakes in spatial are free.",
  },
  {
    title: "Product visualisation",
    body: "Photoreal 1:1 product reviews with full materials, assemblies and sectional cutaways — replacing trade-show prototypes and physical samples with shareable spatial sessions.",
  },
  {
    title: "Mixed-reality field workflows",
    body: "Inspection, maintenance and assembly workflows where the spatial layer overlays diagrams, checklists, sensor data and remote-expert video onto what the worker is actually looking at.",
  },
  {
    title: "Immersive collaboration & spatial review",
    body: "Multi-user spatial rooms for design review, financial scenario rooms, command centres and clinical case conferences — Personas, FaceTime spatial and shared anchors.",
  },
];

const SIGNALS = [
  { label: "First-wave Vision Pro engineering team", sub: "Building since visionOS 1.0" },
  { label: "RealityKit & ARKit specialists",          sub: "Across SwiftUI and full immersive" },
  { label: "Enterprise pilot playbook",               sub: "Procurement, MDM, deployment, ROI model" },
];

export default function VisionPro() {
  return (
    <section className="relative b2b-container py-12">
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80%] h-[420px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(10,132,255,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative text-center max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
          Vision Pro & Spatial Computing
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight mt-4">
          A new computing surface.{" "}
          <span className="apple-text-gradient">We were ready on day one.</span>
        </h2>
        <p className="mt-6 text-white/65 leading-relaxed">
          Vision Pro is the most ambitious computing platform Apple has shipped in fifteen
          years — and the first that meaningfully changes what enterprise software is for.
          Base2Brand was among the first agencies to ship production visionOS work, and we
          continue to operate as a spatial computing partner for organisations betting on
          the next platform shift.
        </p>
      </div>

      <div className="relative mt-16 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
        {/* Visual stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="b2b-glass-strong rounded-[40px] aspect-square p-10 flex items-center justify-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 30% 30%, rgba(100,210,255,0.22), transparent 60%), radial-gradient(circle at 70% 70%, rgba(10,132,255,0.18), transparent 60%)" }}
          />
          {/* Stylised vision pro */}
          <svg viewBox="0 0 400 280" className="relative w-full max-w-[340px] drop-shadow-[0_24px_60px_rgba(10,132,255,0.45)]">
            <defs>
              <linearGradient id="vp-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <linearGradient id="vp-glass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(90,200,250,0.85)" />
                <stop offset="100%" stopColor="rgba(10,132,255,0.35)" />
              </linearGradient>
            </defs>
            <rect x="20" y="60" width="360" height="160" rx="80" fill="url(#vp-grad)" stroke="rgba(255,255,255,0.08)" />
            <ellipse cx="135" cy="140" rx="80" ry="55" fill="url(#vp-glass)" opacity="0.85" />
            <ellipse cx="265" cy="140" rx="80" ry="55" fill="url(#vp-glass)" opacity="0.85" />
            <ellipse cx="120" cy="120" rx="20" ry="14" fill="rgba(255,255,255,0.35)" />
            <ellipse cx="250" cy="120" rx="20" ry="14" fill="rgba(255,255,255,0.35)" />
            {/* Strap hint */}
            <path d="M 20 140 Q 5 110 30 80" stroke="rgba(255,255,255,0.12)" strokeWidth="6" fill="none" />
            <path d="M 380 140 Q 395 110 370 80" stroke="rgba(255,255,255,0.12)" strokeWidth="6" fill="none" />
          </svg>

          <Glasses className="hidden" />
        </motion.div>

        {/* Applications */}
        <div className="space-y-4">
          {APPLICATIONS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="b2b-glass rounded-2xl p-6"
            >
              <h3 className="font-display text-xl leading-tight">{a.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{a.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mt-4 grid sm:grid-cols-3 gap-px b2b-glass rounded-2xl overflow-hidden">
        {SIGNALS.map((s) => (
          <div key={s.label} className="bg-[rgba(10,12,18,0.5)] p-6">
            <p className="text-sm font-semibold text-white">{s.label}</p>
            <p className="mt-1 text-xs text-white/50">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
