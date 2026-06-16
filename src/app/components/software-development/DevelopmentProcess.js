"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const STEPS = [
  {
    n: "01",
    title: "Discovery & Product Strategy",
    desc: "Align business goals with technical direction. Define success metrics and engagement shape.",
  },
  {
    n: "02",
    title: "Solution Architecture",
    desc: "Design scalable and resilient systems. Make explicit choices on stack, scale, and risks.",
  },
  {
    n: "03",
    title: "Experience Design",
    desc: "Craft intuitive user experiences — information architecture, flows, and a coherent design system.",
  },
  {
    n: "04",
    title: "Production Engineering",
    desc: "Build secure, production-grade software with continuous testing, reviews, and integration.",
  },
  {
    n: "05",
    title: "Quality Assurance & Deployment",
    desc: "Validate performance and reliability. Ship via automated, observable, reversible pipelines.",
  },
  {
    n: "06",
    title: "Operate, Scale & Evolve",
    desc: "Support, optimize, and continuously improve — measured against the outcomes set on day one.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section id="process" className="b2b-section relative">
      <div className="b2b-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.06)}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="b2b-eyebrow mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--b2b-red)]" />
            Development Process
          </motion.div>
          <motion.h2 variants={fadeUp} className="b2b-h2">
            <span className="b2b-text-gradient">From concept to production — </span>
            <span className="b2b-text-red-gradient">one continuous engagement.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="b2b-lead mt-6">
            We engineer in a single, continuous lifecycle — from the first conversation to the
            millionth user.
          </motion.p>
        </motion.div>

        <div className="mt-14 relative">
          {/* central rail */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--b2b-red)]/10 via-[color:var(--b2b-red)]/40 to-[color:var(--b2b-red)]/10" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.08)}
            className="space-y-10"
          >
            {STEPS.map((s, idx) => {
              const onLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  variants={fadeUp}
                  className="relative grid grid-cols-12 gap-6 items-start"
                >
                  {/* marker */}
                  <div className="col-span-12 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2 z-10">
                    <div className="flex items-center gap-3 md:flex-col">
                      <div className="relative shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff5a4d] to-[#ff3b30] grid place-items-center text-white font-semibold b2b-number text-sm shadow-[0_10px_30px_-12px_rgba(255,59,48,0.6)]">
                        {s.n}
                        <span className="absolute -inset-1 -z-10 rounded-2xl bg-[color:var(--b2b-red)]/30 blur-md" />
                      </div>
                    </div>
                  </div>

                  <div className={`col-span-12 md:col-span-5 ${onLeft ? "md:col-start-1" : "md:col-start-8"} pl-16 md:pl-0`}>
                    <div className="b2b-card p-7">
                      <h3 className="b2b-h3">{s.title}</h3>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">{s.desc}</p>
                      <div className="mt-5 pt-4 border-t border-white/[0.06] text-[11px] uppercase tracking-[0.22em] text-white/40">
                        Phase {s.n}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
