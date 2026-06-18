'use client'
import { motion } from "framer-motion";

export const ValueProp = () => {
  return (
    <section
      data-testid="value-prop"
      className="relative py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-6 text-(--b2b-primary)">
              ▸ The Base2Brand Approach
            </p>
            <h2
              data-testid="value-prop-headline"
              className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-[clamp(2rem,5.5vw,4.75rem)]"
            >
              Digital Marketing Built Around{" "}
              <span className="text-(--b2b-primary)">Revenue</span>,<br />
              Not Vanity Metrics.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-5 text-base md:text-lg text-muted-foreground lg:pt-6">
            <p>More clicks mean nothing without conversions.</p>
            <p>More traffic means nothing without customers.</p>
            <p>
              And more ad spend means nothing without measurable business
              growth.
            </p>
            <div className="h-px w-12 bg-brand my-6" />
            <p>
              At Base2Brand, we combine{" "}
              <span className="text-foreground font-semibold">
                performance marketing, conversion strategy, creative execution,
                SEO, paid advertising, retention systems
              </span>
              , and{" "}
              <span className="text-foreground font-semibold">
                AI-powered optimization
              </span>{" "}
              to help businesses grow smarter.
            </p>
            <p>
              We don't believe in marketing that simply looks good in reports.
              We build growth systems that generate{" "}
              <span className="text-foreground font-semibold">
                qualified leads, stronger customer acquisition, better
                retention, and long-term brand visibility
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
