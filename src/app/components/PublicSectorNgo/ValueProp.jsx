'use client'
import { m } from "framer-motion";

export const ValueProp = () => {
  return (
    <section
      data-testid="value-prop"
      className="relative py-12 md:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-4 md:gap-12 items-start"
        >
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-6 text-(--b2b-primary)">
              ▸ Mission Statement
            </p>
            <h2
              data-testid="value-prop-headline"
              className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Solving{" "}
              <span className="text-(--b2b-primary)">Problems</span>
              <br />
              That Matter.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-5 text-base md:text-lg text-muted-foreground lg:pt-6">
            <p>
              Technology should improve lives, strengthen communities, and
              empower organizations working toward meaningful change.
            </p>
            <div className="h-px w-12 bg-brand my-3 md:my-6" />
            <p>
              Whether supporting educational institutions, nonprofit initiatives,
              or government modernization efforts, we approach every engagement
              with a long-term perspective focused on measurable outcomes,
              operational efficiency, and community impact.
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
};
