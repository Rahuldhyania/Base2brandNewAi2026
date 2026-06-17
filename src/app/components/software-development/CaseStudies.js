"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Zap, Boxes } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const CASES = [
  {
    icon: Boxes,
    label: "SaaS Engineering",
    title: "SaaS Platform Engineering",
    outcome: "Reduced onboarding time by 45%.",
    metrics: [
      { k: "Onboarding", v: "-45%" },
      { k: "Active Tenants", v: "2.1k" },
      { k: "Deploy Freq.", v: "Daily" },
    ],
  },
  {
    icon: Users,
    label: "Enterprise Platform",
    title: "Enterprise Workforce Platform",
    outcome: "Improved productivity across distributed teams.",
    metrics: [
      { k: "Throughput", v: "+38%" },
      { k: "Sites", v: "42" },
      { k: "Adoption", v: "93%" },
    ],
  },
  {
    icon: TrendingUp,
    label: "Ecommerce",
    title: "Ecommerce Modernization",
    outcome: "Increased transaction throughput by 3×.",
    metrics: [
      { k: "Throughput", v: "3×" },
      { k: "P95 Latency", v: "-62%" },
      { k: "Conversion", v: "+14%" },
    ],
  },
  {
    icon: Zap,
    label: "Operations",
    title: "Digital Operations Platform",
    outcome: "Unified operations across multiple business units.",
    metrics: [
      { k: "BU Unified", v: "7" },
      { k: "Cycle Time", v: "-31%" },
      { k: "Incidents", v: "-44%" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-12 relative">
      <div className="b2b-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.06)}
          className="text-center gap-8"
        >
          <div className="max-w-2xl mx-auto">
            <motion.div variants={fadeUp} className="text-(--b2b-primary) mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--b2b-red)]" />
              Case Studies
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              <span className="b2b-text-gradient">Outcomes, </span>
              <span className="text-(--b2b-primary)">not deployments.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-white/65 text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed pt-3">
            Engagements are measured by the business outcomes they unlock — not the artifacts they
            ship.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.07)}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {CASES.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="b2b-card p-8 group relative overflow-hidden"
                data-testid={`case-study-${idx}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--b2b-red)]" />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/55">{c.label}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl border border-[color:var(--b2b-red)]/30 bg-[color:var(--b2b-red)]/8 grid place-items-center">
                    <Icon className="w-4 h-4 text-[color:var(--b2b-red)]" />
                  </div>
                </div>

                <h3 className="mt-6 text-[22px] md:text-[24px] font-semibold tracking-tight text-white leading-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] text-white/70 leading-relaxed">{c.outcome}</p>

                <div className="mt-7 grid grid-cols-3 gap-px bg-white/[0.05] rounded-xl overflow-hidden">
                  {c.metrics.map((m) => (
                    <div key={m.k} className="bg-[#070b1c] p-4">
                      <div className="text-[10.5px] uppercase tracking-[0.18em] text-white/45">{m.k}</div>
                      <div className="mt-1.5 text-lg font-semibold text-white b2b-number">{m.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[12px] text-white/55">Engineering perspective</span>
                  <a href="#" className="inline-flex items-center gap-1 text-[12.5px] font-medium text-[color:var(--b2b-red)] hover:text-white transition-colors">
                    View case study <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
