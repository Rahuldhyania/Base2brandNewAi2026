import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";
import BackgroundPaths from "@/components/site/BackgroundPaths";
import Rocket from "@/components/site/Rocket";
import { ArrowUpRight, Sparkles } from "lucide-react";

const FinalCTA = ({ highlightTag, titleUpper, titleLower, description, CTALeft, CTARight, features = [] }) => {
  return (
    <section
      id="contact"
      data-testid="final-cta-section"
      className="relative py-12 md:py-16 overflow-hidden"
    >
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundPaths opacity={0.4} />
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.18),rgba(3,3,10,0)_70%)] hidden md:block" /> */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-grid"
              width="80"
              height="80" 
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(139,92,246,0.12)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
        <div className="grain" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 md:px-10 text-center">
        <Reveal>
          <ShiningText
            testId="final-cta-eyebrow"
            className="justify-center mx-auto"
          >
            {highlightTag}
          </ShiningText>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            data-testid="final-cta-headline"
            className="mt-6 sm:mt-8 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.04em] font-medium text-balance"
          >
            {titleUpper} {" "}
            <span className=" text-(--b2b-primary) bg-clip-text">
              {titleLower}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p
            data-testid="final-cta-subheadline"
            className="mt-4 max-w-2xl mx-auto text-white/55 text-base md:text-lg leading-relaxed"
          >
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="mailto:hello@base2brand.com?subject=AI%20Transformation"
              data-testid="final-cta-primary"
              className="group inline-flex items-center justify-center gap-2 bg-(--b2b-primary)/80 hover:bg-(--b2b-primary) text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm font-medium transition-all shadow-[0_0_35px_-10px_rgba(139,92,246,0.55)]"
            >
              <Sparkles className="w-4 h-4" />
              {CTALeft}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="mailto:hello@base2brand.com?subject=Talk%20to%20AI%20Architects"
              data-testid="final-cta-secondary"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/40 hover:bg-white/[0.03] text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm font-medium transition-all"
            >
              {CTARight}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-mono text-white/35">
            {features.flatMap((item, index) =>
              index === 0
                ? [<span key={item}>{item}</span>]
                : [
                    <span
                      key={`dot-${index}`}
                      className="w-1 h-1 rounded-full bg-(--b2b-primary)"
                    />,
                    <span key={item}>{item}</span>,
                  ]
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
