'use client'
import { ArrowUpRight, Calendar } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section
      id="final-cta"
      data-testid="final-cta"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-dense radial-fade opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brand/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hairline bg-secondary/50 backdrop-blur text-xs font-medium text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          Building Better Systems for Stronger Communities
        </div>

        <h2
          data-testid="final-cta-headline"
          className="font-display font-bold uppercase text-balance leading-[0.92] tracking-tight text-[clamp(2.25rem,6vw,5.5rem)]"
        >
          Let's Solve{" "}
          <span className="text-brand">Meaningful</span>
          <br />
          Challenges Together.
        </h2>

        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Whether you're a nonprofit organization, educational institution, or
          public sector agency seeking innovative technology solutions,
          Base2Brand is ready to collaborate.
        </p>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Together, we can build systems that create lasting impact.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:hello@base2brand.com?subject=Discuss%20Your%20Initiative"
            data-testid="final-cta-primary"
            className="group inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white px-7 py-4 rounded-full text-base font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-brand/20"
          >
            Discuss Your Initiative
            <ArrowUpRight
              size={18}
              className="group-hover:rotate-45 transition-transform"
            />
          </a>
          <a
            href="mailto:hello@base2brand.com?subject=Schedule%20a%20Consultation"
            data-testid="final-cta-secondary"
            className="inline-flex items-center justify-center gap-2 hairline bg-secondary/40 backdrop-blur hover:bg-secondary text-foreground px-7 py-4 rounded-full text-base font-semibold transition-all hover:-translate-y-0.5"
          >
            <Calendar size={16} /> Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
