'use client'
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SPATIAL } from "@/constants/testIds";

const cases = [
  {
    industry: "Manufacturing",
    title: "Industrial Safety Simulation",
    body: "Immersive safety rehearsal across 14 high-risk procedures rolled out to 3,400 plant operators in 4 regions.",
    metric: "−40%",
    metricLabel: "Onboarding time",
  },
  {
    industry: "Commerce",
    title: "Vision Pro Product Visualization",
    body: "Native visionOS configurator delivered for a flagship retail brand. Live across executive previews and B2B sales.",
    metric: "2.5×",
    metricLabel: "Engagement uplift",
  },
  {
    industry: "Energy",
    title: "Digital Twin Operations Center",
    body: "Real-time twin of distributed assets with predictive overlays for a multi-national energy operator.",
    metric: "−27%",
    metricLabel: "Unplanned downtime",
  },
  {
    industry: "Healthcare",
    title: "Clinical Training Platform",
    body: "Scenario-based training for surgical readiness, deployed across 12 teaching hospitals on a regulated MDM stack.",
    metric: "+76%",
    metricLabel: "Learning retention",
  },
];

const container = { animate: { transition: { staggerChildren: 0.08 } } };
const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CaseStudies() {
  return (
    <section
      data-testid={SPATIAL.caseStudiesSection}
      className="relative py-12 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-5 md:gap-12 mb-10 md:mb-16">
          <div>
            <div className="text-[11px] tracking-[0.28em] uppercase text-[#FFB800]/90 mb-4">
              · Outcomes
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.02] tracking-tight text-white">
              Outcomes,{" "}
              <span className="text-white/55">not demonstrations.</span>
            </h2>
          </div>
          <p className="text-white/65 text-base lg:text-lg max-w-[640px] self-end leading-relaxed">
            We are measured on what production deployments change in your
            business. A short selection of recent engagements, anonymised where
            appropriate.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-5"
        >
          {cases.map((c, i) => (
            <motion.a
              key={c.title}
              href="#"
              variants={item}
              data-testid={SPATIAL.caseStudyCard(i)}
              className="group card-amber rounded-2xl p-4 md:p-6 flex flex-col border border-(--b2b-primary)/20 hover:shadow-lg transition-all duration-300 hover:border-(--b2b-primary)/40"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#FFB800]/90 px-3 py-1 rounded-full border border-[#FFB800]/20 bg-[#FFB800]/[0.06]">
                  {c.industry}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-white/40 group-hover:text-[#FFB800] transition-colors"
                />
              </div>

              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display text-[#FFB800] text-3xl md:text-5xl tracking-tight">
                  {c.metric}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                  {c.metricLabel}
                </span>
              </div>

              <h3 className="font-display text-2xl text-white leading-tight mb-3">
                {c.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{c.body}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
