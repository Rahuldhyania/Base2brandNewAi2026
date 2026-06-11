'use client'
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { APPLE } from "@/constants/testIds";

export default function FinalCta() {
  return (
    <section id="contact" className="relative b2b-container py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[40px] b2b-glass-strong p-10 lg:p-16"
      >
        <div
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(10,132,255,0.28) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(90,200,250,0.18) 0%, transparent 70%)" }}
        />

        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
              Start an Apple engagement
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.04] tracking-tight mt-4 max-w-2xl">
              Bring an Apple-grade product team to your roadmap.
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed max-w-xl">
              Share a brief, a deadline or just a question. We respond inside one business
              day with a point of view, a delivery plan and the team that would build it.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="mailto:apple@base2brand.com"
                data-testid={APPLE.finalCtaPrimary}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full text-sm font-semibold text-white bg-[#0A84FF] hover:bg-[#3CA0FF] transition shadow-[0_12px_36px_-10px_rgba(10,132,255,0.7)]"
              >
                Send a brief <ArrowUpRight size={16} />
              </a>
              <a
                href="#"
                data-testid={APPLE.finalCtaSecondary}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full text-sm font-semibold text-white/85 hover:text-white border border-white/15 hover:border-white/30 transition"
              >
                <Calendar size={16} /> Book a 30-min architecture call
              </a>
            </div>
          </div>

          <div className="b2b-glass rounded-2xl p-6 lg:p-7">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/45">
              What you get back
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex gap-3"><Bullet /> A scoped engagement plan with team shape & timelines</li>
              <li className="flex gap-3"><Bullet /> A surface decision matrix (iPhone, iPad, Watch, Vision, etc.)</li>
              <li className="flex gap-3"><Bullet /> A point of view on Apple Intelligence integration</li>
              <li className="flex gap-3"><Bullet /> Indicative pricing & a release milestone map</li>
            </ul>
            <p className="mt-6 text-xs text-white/45">
              Mutual NDA available on request. We respond within one business day.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Bullet() {
  return (
    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#64D2FF", boxShadow: "0 0 8px #64D2FF" }} />
  );
}
