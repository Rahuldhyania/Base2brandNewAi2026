'use client'
import { ArrowUpRight, Calendar } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section data-testid="final-cta" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dense radial-fade opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brand/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hairline bg-secondary/50 backdrop-blur text-xs font-medium text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          Accepting 4 new partners this quarter
        </div>

        <h2
          data-testid="final-cta-headline"
          className="font-display font-bold uppercase text-balance leading-[0.92] tracking-tight text-[clamp(2.25rem,6vw,5.5rem)]"
        >
          Ready To Turn Marketing Into{" "}
          <span className="text-brand">Measurable Growth?</span>
        </h2>

        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Whether you want more leads, stronger visibility, better conversions,
          or scalable customer acquisition — Base2Brand helps businesses grow
          with digital marketing designed around real outcomes.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:hello@base2brand.com?subject=Custom%20Growth%20Plan%20Request"
            data-testid="final-cta-primary"
            className="group inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white px-7 py-4 rounded-full text-base font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-brand/20"
          >
            Get Your Custom Growth Plan
            <ArrowUpRight
              size={18}
              className="group-hover:rotate-45 transition-transform"
            />
          </a>
          <a
            href="mailto:hello@base2brand.com?subject=Book%20A%20Free%20Consultation"
            data-testid="final-cta-secondary"
            className="inline-flex items-center justify-center gap-2 hairline bg-secondary/40 backdrop-blur hover:bg-secondary text-foreground px-7 py-4 rounded-full text-base font-semibold transition-all hover:-translate-y-0.5"
          >
            <Calendar size={16} /> Book A Free Consultation
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-wider text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> 30-min strategy
            call
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> No obligation
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Tailored to your
            industry
          </span>
        </div>
      </div>
    </section>
  );
};
