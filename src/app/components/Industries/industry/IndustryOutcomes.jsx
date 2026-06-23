import React from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import Reveal from "@/components/shared/Reveal";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { INDUSTRY_PAGE } from "@/constants/testIds";

export default function IndustryOutcomes({ industry, id = "outcomes" }) {
  const { outcomes } = industry;
  return (
    <section
      id={id}
      data-testid={INDUSTRY_PAGE.outcomes}
      className="relative py-28 md:py-36 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 radial-spot opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" />
      <div className="relative container-edge">
        <div className="max-w-3xl">
          <Reveal><SectionLabel>Outcomes</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display text-[34px] md:text-[48px] lg:text-[60px] mt-5 leading-[1.05] text-balance">
              Outcomes, not optics.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-white/65 text-[16px] md:text-[17px] max-w-2xl text-pretty">
              Every engagement is instrumented against the numbers that matter to operators, regulators and boards — with auditor-ready evidence chains by default.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {outcomes.map((o, i) => (
            <Reveal key={o.label} delay={i * 0.06} className="bg-ink-950/95">
              <div className="px-8 py-10 md:px-12 md:py-14 group relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-brand/[0.10] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start justify-between">
                  <div>
                    <div className="font-display text-[64px] md:text-[88px] lg:text-[104px] leading-[0.95] tracking-tight text-white">
                      <AnimatedCounter value={o.value} />
                    </div>
                    <div className="mt-5 font-display text-[20px] md:text-[22px] text-white">
                      {o.label}
                    </div>
                    {o.sublabel && (
                      <p className="mt-2 text-white/55 text-[14px] md:text-[15px] max-w-md text-pretty">
                        {o.sublabel}
                      </p>
                    )}
                  </div>
                  <div className="text-[10px] tabular-nums text-white/30 uppercase tracking-widest2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
