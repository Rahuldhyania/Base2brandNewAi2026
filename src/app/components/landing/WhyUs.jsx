import React from "react";
import { motion } from "framer-motion";
import { Rocket, BarChart3, Cpu, Building2 } from "lucide-react";

const cards = [
  {
    icon: Rocket,
    title: "Future-First Strategy",
    body: "We don't chase search — we engineer for where it's going. AI-native from day one.",
  },
  {
    icon: BarChart3,
    title: "Full-Funnel Growth",
    body: "AI visibility, qualified leads and brand authority — measured across the whole funnel.",
  },
  {
    icon: Cpu,
    title: "Technical + Marketing Expertise",
    body: "Deep craft across web, content engineering, growth and applied AI — under one roof.",
  },
  {
    icon: Building2,
    title: "Enterprise Ready",
    body: "Battle-tested with startups, SMBs and enterprise — governance, scale and speed.",
  },
];

export default function WhyUs() {
  return (
    <section
      data-testid="why-us-section"
      className="relative py-28 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="label-mono">· Why Base2Brand</div>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.05]">
              Brands choose us
              <br />
              <span className="text-gradient-blue-violet font-medium">
                for AI growth.
              </span>
            </h2>
            <p className="mt-6 text-zinc-400 max-w-md text-lg">
              An AI-first agency built for the next decade of discovery —
              combining strategic depth, technical rigor and a relentless bias
              for outcomes.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { v: "20+", l: "Verticals shipped" },
                { v: "94%", l: "Client retention" },
                { v: "10×", l: "Avg AI share-of-voice" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <div className="font-display text-2xl font-light text-gradient">
                    {s.v}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-zinc-500 mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-hover rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-7 h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="font-display mt-6 text-xl md:text-2xl font-medium tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
