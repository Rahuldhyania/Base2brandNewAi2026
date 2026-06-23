import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/Industries/shared/SectionLabel";
import Reveal from "@/components/Industries/shared/Reveal";
import Link from "next/link";

export default function IndustryCapabilities({ capabilities, id = "capabilities" }) {
  return (
    <section
      id={id}
      data-testid={capabilities}
      className="relative py-28 md:py-32 border-t border-white/5"
    >
      <div className="container-edge">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>Capabilities Deployed</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[32px] md:text-[44px] lg:text-[52px] mt-5 leading-[1.06] text-balance">
                The practices we deploy on every engagement.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-brand transition border border-white/10 rounded-full px-4 py-2"
            >
              All Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-4 md:gap-5">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  // href={c.href}
                  href={'#'}
                  data-testid={'#dssdf'}
                  className="card-surface block p-7 md:p-8 group h-full"
                >
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-brand/10 border border-brand/25 text-brand flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-[22px] md:text-[24px] text-white">
                          {c.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <p className="mt-3 text-[15px] text-white/65 leading-relaxed text-pretty">
                        {c.description}
                      </p>
                    </div>
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
