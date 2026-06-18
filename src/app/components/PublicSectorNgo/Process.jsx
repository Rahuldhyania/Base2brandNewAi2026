'use client'
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Understand The Growth Problem",
    desc: "We identify what's slowing your sales, visibility, or lead generation. Deep-dive audit, market analysis, and gap discovery.",
  },
  {
    n: "02",
    title: "Build A Smart Marketing Strategy",
    desc: "A custom roadmap designed around your goals, audience, and market — not a recycled template.",
  },
  {
    n: "03",
    title: "Launch & Optimize Campaigns",
    desc: "From ads to SEO to automation, we execute and continuously improve performance week after week.",
  },
  {
    n: "04",
    title: "Scale What Works",
    desc: "Once growth becomes predictable, we focus on scaling profitably — bigger budgets, bigger returns.",
  },
];

export const Process = () => {
  return (
    <section
      id="process"
      data-testid="process-timeline"
      className="relative py-16 border-y border-border bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
            ▸ Our Process
          </p>
          <h2
            data-testid="process-headline"
            className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-[clamp(2rem,5vw,4.25rem)]"
          >
            How We Help Businesses Grow
          </h2>
        </div>

        <div className="relative">
          {/* vertical line on mobile, horizontal connector on desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`process-step-${i + 1}`}
                className="relative"
              >
                <div className="hidden lg:block absolute top-9 left-0 w-7 h-7 -translate-y-1/2 -translate-x-0 z-10">
                  <div className="w-3.5 h-3.5 rounded-full bg-brand ring-4 ring-background" />
                </div>
                <div className="font-display text-5xl md:text-6xl font-bold text-brand/90 leading-none mb-4 text-(--b2b-primary)">
                  {s.n}
                </div>
                <h3 className="font-display uppercase text-xl md:text-2xl font-bold tracking-tight leading-tight text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pr-2">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
