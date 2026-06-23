import React from "react";
import SectionLabel from "@/components/Industries/shared/SectionLabel";
import Reveal from "@/components/Industries/shared/Reveal";

export default function IndustryThesis({ headline, narrative, id = "thesis" }) {

  return (
    <section
      id={id}
      data-testid={'#sdfssdf'}
      className="relative py-14"
    >
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>Industry Thesis</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[34px] md:text-[44px] lg:text-[52px] mt-5 leading-[1.06] text-balance">
                {headline}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5">
              {narrative.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.06}>
                  <p className="text-[17px] md:text-[18px] text-white/72 leading-relaxed text-pretty">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
