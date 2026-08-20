'use client'
import { m } from "framer-motion";
import { Heart, Clock, Lightbulb, Target } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "We Focus on Real Problems",
    desc: "Technology should solve measurable operational challenges.",
  },
  {
    icon: Clock,
    title: "We Think Long-Term",
    desc: "We build partnerships designed to evolve with your mission.",
  },
  {
    icon: Lightbulb,
    title: "Innovation With Practicality",
    desc: "Emerging technologies must deliver real outcomes.",
  },
  {
    icon: Heart,
    title: "We Care About Impact",
    desc: "Success is measured by improvements experienced by communities and stakeholders.",
  },
];

export const WhyUs = () => {
  return (
    <section
      id="why-us"
      data-testid="why-us-bento"
      className="relative py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-6 md:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
            ▸ Why Base2Brand
          </p>
          <h2
            data-testid="why-us-headline"
            className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Why Organizations{" "}
            <span className="text-brand">Choose</span>
            <br />
            Base2Brand.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <m.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                data-testid={`benefit-card-${i}`}
                className="group border border-(--b2b-primary)/30 rounded-2xl p-4 md:p-8 bg-card hover:border-brand/40 transition-colors relative overflow-hidden"
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
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
