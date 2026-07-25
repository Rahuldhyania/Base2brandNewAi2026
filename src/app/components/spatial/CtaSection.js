'use client'
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarClock, Check } from "lucide-react";
import { SPATIAL } from "@/constants/testIds";

const checklist = [
  "Suggested engagement approach",
  "Recommended technology stack",
  "Priority use-case roadmap",
  "Automation and AI opportunity map",
  "Indicative delivery milestones",
];

export default function CtaSection() {
  return (
    <section
      id="cta"
      data-testid={SPATIAL.ctaSection}
      className="relative py-12 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-[#FFB800]/15 bg-[#FFB800]/[0.02]"
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_0%,rgba(255,184,0,0.16),transparent_60%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_100%,rgba(255,184,0,0.10),transparent_60%)]"
          />

          <div className="relative grid lg:grid-cols-[1.6fr_1fr] gap-4 md:gap-10 lg:gap-16 p-4 md:p-8">
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#FFB800]/90 mb-5">
                · Start the conversation
              </div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.02] tracking-tight text-white">
                Bring next-gen business technology
                <br />
                into your roadmap.
              </h2>
              <p className="mt-6 text-white/65 text-base lg:text-lg leading-relaxed max-w-[560px]">
                Share your goals, challenges, or opportunities with our experts. We provide practical, outcome-focused guidance on AI, automation, cloud, IoT, blockchain, cybersecurity, data centre modernization, and metaverse solutions to help you build, implement, and scale effectively.

              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  data-testid={SPATIAL.ctaPrimary}
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
                  href="#"
                  data-testid={SPATIAL.ctaSecondary}
                  className="group inline-flex items-center gap-2 text-white/90 hover:text-white border border-white/15 hover:border-[#FFB800]/40 font-medium text-sm px-6 py-3.5 rounded-full transition-colors"
                >
                  <CalendarClock size={16} />
                  Book a 30-minute XR strategy call
                </a>
              </div>

              <div className="mt-6 md:mt-10 flex flex-wrap items-center gap-x-2 md:gap-x-8 gap-y-3 text-[11px] tracking-[0.18em] uppercase text-white/40">
                <span>Mumbai · HQ</span>
                <span>New York</span>
                <span>London</span>
                <span>Dubai</span>
                <span>Singapore</span>
              </div>
            </div>

            {/* Sidebar — what you'll get back */}
            <div className="lg:border-l lg:border-white/[0.08] lg:pl-12">
              <div className="text-[11px] tracking-[0.28em] uppercase text-white/45 mb-3 md:mb-6">
                What you’ll get back
              </div>
              <ul className="space-y-4">
                {checklist.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#FFB800]/15 border border-[#FFB800]/30 flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-[#FFB800]" strokeWidth={3} />
                    </span>
                    <span className="text-white/85 text-[15px] leading-relaxed">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 md:mt-10 pt-3 md:pt-6 border-t border-white/[0.08]">
                <div className="text-[11px] tracking-[0.18em] uppercase text-white/40 mb-2">
                  Response time
                </div>
                <div className="font-display text-2xl text-white">
                  &lt; 24 hours
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
