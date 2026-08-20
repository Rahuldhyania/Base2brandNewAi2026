'use client'
import { m } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Understand the Mission",
    desc: "We begin by understanding the communities you serve, your operational challenges, and the outcomes that matter most.",
    tags: ["Mission Review", "Stakeholder Analysis", "Opportunity Mapping"],
  },
  {
    n: "02",
    title: "Assess Systems & Operations",
    desc: "We evaluate current processes, infrastructure, and technology gaps to identify improvement opportunities.",
    tags: ["System Audit", "Workflow Review", "Data Assessment"],
  },
  {
    n: "03",
    title: "Design the Solution",
    desc: "Technology, user experience, and operational requirements come together to create a practical roadmap.",
    tags: ["Solution Design", "User Experience", "Implementation Plan"],
  },
  {
    n: "04",
    title: "Build & Deploy",
    desc: "We develop, integrate, and launch secure, scalable solutions aligned with organizational goals.",
    tags: ["Development", "Integration", "Deployment"],
  },
  {
    n: "05",
    title: "Measure & Improve",
    desc: "Continuous monitoring, reporting, and optimization ensure long-term success.",
    tags: ["Analytics", "Optimization", "Long-Term Support"],
  },
];

export const Process = () => {
  return (
    <section
      id="process"
      data-testid="process-timeline"
      className="relative py-12 md:py-16 border-y border-border bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
            ▸ Process Timeline
          </p>
          <h2
            data-testid="process-headline"
            className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            From Discovery{" "}
            <span className="text-brand">To Community</span>
            <br />
            Impact.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden xl:block absolute top-12 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 md:gap-8 xl:gap-6">
            {steps.map((s, i) => (
              <m.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`process-step-${i + 1}`}
                className="relative"
              >
                <div className="hidden xl:block absolute top-9 left-0 w-7 h-7 -translate-y-1/2 z-10">
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full hairline bg-secondary/60 text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
