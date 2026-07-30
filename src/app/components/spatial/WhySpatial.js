'use client'
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Users, Layers } from "lucide-react";
import { SPATIAL } from "@/constants/testIds";

const defaultCards = [
  {
    icon: GraduationCap,
    title: "Immersive learning that sticks",
    body: "Training effectiveness increases significantly through immersive, scenario-based learning grounded in your real workflows.",
    metric: "+76%",
    metricLabel: "Retention vs video",
  },
  {
    icon: ShieldCheck,
    title: "Fewer operational errors",
    body: "Reduce operational mistakes through simulation-based rehearsal of high-risk procedures before they happen in production.",
    metric: "−40%",
    metricLabel: "Onboarding time",
  },
  {
    icon: Users,
    title: "Collaboration without distance",
    body: "Accelerate distributed decision-making with shared spatial environments where experts and field teams meet around the asset.",
    metric: "2.5×",
    metricLabel: "Engagement uplift",
  },
  {
    icon: Layers,
    title: "Digital first, before physical",
    body: "Replace expensive physical prototypes with high-fidelity digital experiences your stakeholders can step inside.",
    metric: "−62%",
    metricLabel: "Prototype spend",
  },
];

const containerVariants = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhySpatial({
  titlePrefix = "Why enterprises are investing in",
  titleAccent = "Spatial Computing.",
  subtitle = "Spatial computing is no longer experimental. It is rapidly becoming the most efficient interface for training, operations and collaboration across regulated, distributed enterprises.",
  cards = defaultCards,
}) {
  return (
    <section
      id="why"
      data-testid={SPATIAL.whySection}
      className="relative pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="gap-12 mb-10 text-center">
          <div>
            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              {titlePrefix}{" "}
              <span className="text-(--b2b-primary)">{titleAccent}</span>
            </h2>
          </div>
          <p
            className="text-white/65 text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed pt-3"
          >
            {subtitle}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={itemVariants}
                data-testid={SPATIAL.whyCard(i)}
                className="card-amber rounded-2xl p-4 flex flex-col border border-(--b2b-primary)/20 hover:shadow-lg transition-all duration-300 hover:border-(--b2b-primary)/40"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center mb-6">
                  <Icon size={20} className="text-[#FFB800]" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl text-white leading-tight mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed flex-1">
                  {c.body}
                </p>
                <div className="pt-4 border-t border-white/[0.06] flex items-baseline gap-2">
                  <span className="font-display text-[#FFB800] text-2xl tracking-tight">
                    {c.metric}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                    {c.metricLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
