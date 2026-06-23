import React from "react";
import SectionLabel from "@/components/Industries/shared/SectionLabel";
import CTAButton from "@/components/Industries/shared/CTAButton";
import Reveal from "@/components/Industries/shared/Reveal";
import GridBackground from "@/components/Industries/shared/GridBackground";
// import { INDUSTRY_PAGE } from "@/constants/testIds";
import { ShieldCheck, BadgeCheck, Rocket, Clock } from "lucide-react";

const TAGS = [
  { icon: Clock,       label: "24-hour senior response" },
  { icon: ShieldCheck, label: "Mutual NDA available" },
  { icon: BadgeCheck,  label: "Outcome-instrumented" },
  { icon: Rocket,      label: "Production-grade" },
];

export default function IndustryCTA({ cta, id = "cta" }) {
  return (
    <section
      id={id}
      data-testid={`${id}-cta`}
      className="relative py-14 border-t border-white/5 overflow-hidden"
    >
      <GridBackground intensity={0.85} /> 
      <div className="relative container-edge">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><SectionLabel className="justify-center">Start a Transformation</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance text-white">
              {cta.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/65 text-[17px] md:text-[18px] max-w-2xl mx-auto text-pretty">
              {cta.description}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <CTAButton
                to={cta.primary.to}
                variant="primary"
                size="lg"
                // data-testid={INDUSTRY_PAGE.ctaPrimary}
              >
                {cta.primary.label}
              </CTAButton>
              <CTAButton
                to={cta.secondary.to}
                variant="secondary"
                size="lg"
                // data-testid={INDUSTRY_PAGE.ctaSecondary}
              >
                {cta.secondary.label}
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
              {TAGS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-white/65 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.025]"
                >
                  <Icon className="w-3.5 h-3.5 text-brand" />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
