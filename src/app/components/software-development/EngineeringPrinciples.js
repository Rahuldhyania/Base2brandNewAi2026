import React from "react";
import { motion } from "framer-motion";
import { Boxes, Eye, ShieldCheck, TrendingUp, Wrench } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const PRINCIPLES = [
  {
    icon: Boxes,
    title: "Composable",
    desc: "Systems evolve without complete rewrites — new capability lands as new modules, not new monoliths.",
  },
  {
    icon: Eye,
    title: "Observable",
    desc: "Production visibility is built in — logs, metrics, traces, and runtime hypotheses on every release.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    desc: "Security is integrated from the start — identity, secrets, supply chain, and runtime hardening by default.",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    desc: "Architecture grows with demand — capacity, cost, and reliability are explicit engineering targets.",
  },
  {
    icon: Wrench,
    title: "Maintainable",
    desc: "Engineering decisions optimize for long-term sustainability — not just the next sprint.",
  },
];

const EngineeringPrinciples = () => {
  return (
    <section id="principles" className="b2b-section relative">
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
            Engineering Principles
          </motion.div>
          <motion.h2 variants={fadeUp} className="b2b-h2">
            <span className="b2b-text-gradient">How we </span>
            <span className="b2b-text-red-gradient">build software.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="b2b-lead mt-6">
            Five principles shape every decision — from architecture sketches to production
            runbooks.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.06)}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {PRINCIPLES.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="b2b-card p-6 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl border border-[color:var(--b2b-red)]/30 bg-[color:var(--b2b-red)]/8 grid place-items-center">
                    <Icon className="w-4 h-4 text-[color:var(--b2b-red)]" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/35 b2b-number">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringPrinciples;
