import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarClock, CheckCircle2 } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const PROMISE_LIST = [
  "Recommended engagement model",
  "Suggested technology stack",
  "Architecture recommendations",
  "Delivery roadmap",
  "Indicative timelines",
  "Product engineering perspective",
];

const FinalCTA = () => {
  return (
    <section id="cta" className="b2b-section relative">
      {/* glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[600px] b2b-glow-red opacity-70" />
      <div className="b2b-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.07)}
          className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#0a0e22] via-[#080c1e] to-[#05081a] p-8 lg:p-14"
        >
          {/* internal grid */}
          <div className="pointer-events-none absolute inset-0 b2b-section-grid opacity-30" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 w-[480px] h-[480px] b2b-glow-red opacity-50" />

          <div className="relative grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-7">
              <motion.div variants={fadeUp} className="b2b-eyebrow mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--b2b-red)]" />
                Start an Engagement
              </motion.div>
              <motion.h2 variants={fadeUp} className="b2b-h2">
                <span className="b2b-text-gradient">Bring your product vision </span>
                <span className="b2b-text-red-gradient">into production.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="b2b-lead mt-6 max-w-xl">
                Share your goals, technical challenges, or opportunities. Our engineers will
                provide an implementation perspective focused on measurable business outcomes.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@base2brand.ai?subject=Software%20Engagement%20Brief"
                  className="b2b-btn-primary"
                  data-testid="final-cta-primary"
                >
                  Start a software engagement
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="b2b-btn-secondary"
                  data-testid="final-cta-secondary"
                >
                  <CalendarClock className="w-4 h-4" />
                  Book a 30-minute architecture call
                </a>
              </motion.div>
            </div>

            {/* Sidebar promises */}
            <motion.aside
              variants={fadeUp}
              className="col-span-12 lg:col-span-5 rounded-2xl border border-[color:var(--b2b-red)]/15 bg-[color:var(--b2b-red)]/[0.04] p-7 lg:p-8"
              data-testid="final-cta-sidebar"
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--b2b-red)] mb-4">
                What you&apos;ll get back
              </div>
              <ul className="space-y-3">
                {PROMISE_LIST.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[color:var(--b2b-red)] mt-0.5 shrink-0" />
                    <span className="text-[14.5px] text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-5 border-t border-white/[0.06]">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 mb-2">Typical Response</div>
                <div className="text-[14px] text-white/80">Engineering principal reply within 1 business day.</div>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
