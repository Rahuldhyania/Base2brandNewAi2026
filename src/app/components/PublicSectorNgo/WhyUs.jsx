'use client'
import { motion } from "framer-motion";
import {
  Database,
  Target,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  FileBarChart,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Database,
    title: "Data-backed marketing decisions",
    span: "lg:col-span-2",
    desc: "Every campaign decision tied to real data — not opinions, not guesses, not gut feel.",
  },
  {
    icon: Target,
    title: "Industry-focused growth strategies",
    span: "lg:col-span-1",
    desc: "Playbooks built for your vertical, not recycled from a different industry.",
  },
  {
    icon: ShieldCheck,
    title: "Better lead quality",
    span: "lg:col-span-1",
    desc: "Intent-based targeting that filters out tire-kickers.",
  },
  {
    icon: Sparkles,
    title: "Smarter ad spend optimization",
    span: "lg:col-span-2",
    desc: "We treat your media budget like our own — every dollar accountable to a measurable outcome.",
  },
  {
    icon: TrendingUp,
    title: "Improved conversion rates",
    span: "lg:col-span-1",
    desc: "CRO baked into every funnel.",
  },
  {
    icon: FileBarChart,
    title: "Transparent reporting",
    span: "lg:col-span-1",
    desc: "Dashboards you can actually read.",
  },
  {
    icon: Users,
    title: "A team obsessed with measurable business growth",
    span: "lg:col-span-1",
    desc: "Not vanity metrics. Real revenue impact.",
  },
];

export const WhyUs = () => {
  return (
    <section
      id="why-us"
      data-testid="why-us-bento"
      className="relative py-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
              ▸ Why Base2Brand
            </p>
            <h2
              data-testid="why-us-headline"
              className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-[clamp(2rem,5vw,4.25rem)]"
            >
              Marketing Should Deliver{" "}
              <span className="text-brand">Results</span>,<br />
              Not Excuses.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4 text-base md:text-lg text-muted-foreground">
            We combine strategy, creativity, performance marketing, SEO,
            automation, and conversion optimization into{" "}
            <span className="text-foreground font-semibold">
              one growth ecosystem
            </span>{" "}
            — built around your business outcomes.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                data-testid={`benefit-card-${i}`}
                className={`group border border-(--b2b-primary)/30 rounded-2xl p-7 md:p-8 bg-card hover:border-brand/40 transition-colors relative overflow-hidden ${b.span}`}
              >
                <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-brand/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl border border-border bg-secondary/60 grid place-items-center text-brand mb-5 group-hover:border-brand/40 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display uppercase text-lg md:text-xl font-bold tracking-tight leading-tight text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
