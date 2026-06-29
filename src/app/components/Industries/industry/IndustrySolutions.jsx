import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/Industries/shared/SectionLabel";
import Reveal from "@/components/Industries/shared/Reveal";
import Link from "next/link";

export default function IndustrySolutions({ solutions, id = "solutions" }) {
  return (
    <section
      id={id}
      data-testid={solutions}
      className="relative py-12 md:py-14 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-[0.10] pointer-events-none" />
      <div className="relative container-edge">
        <div className="flex items-end justify-between flex-wrap gap-3 md:gap-6">
          <div className="max-w-2xl">
            <Reveal><SectionLabel>Solutions Commonly Delivered</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[30px] md:text-[44px] lg:text-[52px] mt-3 md:mt-5 leading-[1.06] text-balance">
                Productized accelerators — shipped, not shelfware.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-brand transition border border-white/10 rounded-full px-4 py-2"
            >
              All Solutions <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-4 md:mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug + i} delay={i * 0.05}>
                <Link
                  href='#'
                  data-testid={'#sdffd'}
                  className="card-surface block p-5 sm:p-6 md:p-7 group h-full"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand/10 border border-brand/25 text-brand flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="font-display text-[18px] sm:text-[20px] md:text-[22px] text-white mt-4 sm:mt-5">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 sm:mt-3 text-[13.5px] sm:text-[14.5px] text-white/65 leading-relaxed text-pretty">
                    {s.description}
                  </p>
                  <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] sm:text-[12px] uppercase tracking-widest2 text-brand-300">
                      {s.metric}
                    </span>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-widest2 text-white/35">
                      Productized
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
