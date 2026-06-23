import React from "react";
import SectionLabel from "@/components/Industries/shared/SectionLabel";
import Reveal from "@/components/Industries/shared/Reveal";
// import { INDUSTRY_PAGE } from "@/constants/testIds";

export default function IndustryEcosystem({ ecosystem,name, id = "ecosystem" }) {
  // const { ecosystem, name } = industry;
  return (
    <section
      id={id}
      data-testid={ecosystem}
      className="relative py-14 border-t border-white/5"
    >
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-6">
            <Reveal><SectionLabel>Technology Ecosystem</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance text-white">
                A stack chosen for {name.toLowerCase()} — deliberately.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="text-white/65 text-[16px] md:text-[17px] text-pretty">
              We commit to a small, opinionated stack per industry — with the right escape hatches when your enterprise demands them. Below is the working ecosystem for this practice.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {ecosystem.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.04} className="bg-ink-950/95">
              <div className="p-6 md:p-7 h-full">
                <div className="flex items-center justify-between">
                  <h4 className="text-[12px] uppercase tracking-widest2 text-brand">
                    {g.group}
                  </h4>
                  <span className="text-[10px] tabular-nums text-white/30 uppercase tracking-widest2">
                    L{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-5 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="text-[14px] text-white/72">
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
