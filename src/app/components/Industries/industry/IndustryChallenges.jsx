import React from "react";
import SectionLabel from "@/components/Industries/shared/SectionLabel";
import Reveal from "@/components/Industries/shared/Reveal";

export default function IndustryChallenges({ challenges, name , id = "challenges" }) {
 
  return (
    <section
      id={id}
      data-testid={challenges}
      className="relative py-14 border-t border-white/5"
    >
      <div className="absolute inset-0 grid-bg-fine opacity-[0.18] pointer-events-none" />
      <div className="relative container-edge">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>Industry Challenges</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display text-[34px] md:text-[44px] lg:text-[52px] mt-5 leading-[1.06] text-balance">
              The gravity {name.toLowerCase()} has been carrying.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-white/65 text-[16px] md:text-[17px] max-w-2xl text-pretty">
              We start every engagement by being precise about the failure modes you are operating around — because that is what your roadmap is really about.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {challenges.map((c, i) => {
            const Icon = c.icon;
            const padded = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={c.title} delay={i * 0.05} className="h-full">
                <div className="card-surface h-full p-6 md:p-7 group">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/25 flex items-center justify-center text-brand">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-[11px] tabular-nums text-white/30 uppercase tracking-widest2">
                      {padded}
                    </div>
                  </div>
                  <h3 className="font-display text-[19px] md:text-[20px] text-white mt-5">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] text-white/65 leading-relaxed text-pretty">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
