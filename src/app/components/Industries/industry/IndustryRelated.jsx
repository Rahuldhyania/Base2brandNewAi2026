import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/Industries/shared/SectionLabel";
import Reveal from "@/components/Industries/shared/Reveal";
import Link from "next/link";

function RelatedCard({ entry, hrefPrefix, testId }) {
  const Icon = entry.icon;
  return (
    <Link
      href={`${hrefPrefix}/${entry.slug}`}
      className="card-surface block p-6 md:p-7 group h-full"
      data-testid={testId}
    >
      <div className="flex items-center justify-between">
        <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/25 text-brand flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <ArrowUpRight className="w-5 h-5  text-white/40 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
      <h3 className="font-display text-[19px] md:text-[20px] text-white mt-4">
        {entry.title}
      </h3>
      <p className="mt-2.5 text-[14px] text-white/65 leading-relaxed text-pretty">
        {entry.description}
      </p>
    </Link>
  );
}
export default function IndustryRelated({
  services,
  solutions,
  id = "related",
}) {
  const servicesList = Object.values(services);
  const solutionsList = Object.values(solutions);
  return (
    <section
      id={id}
      data-testid={`${id}-section`}
      className="relative py-14 border-t border-white/5"
    >
      <div className="container-edge space-y-20">
        {/* {servicesList.length > 0 && ( */}
        <div>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-2xl">
              <Reveal>
                <SectionLabel>Related Services</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance text-white">
                  The practices linked to this industry.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.08}>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-brand transition border border-white/10 rounded-full px-4 py-2"
              >
                Browse all <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {servicesList.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <RelatedCard entry={s} hrefPrefix="/services" />
              </Reveal>
            ))}
          </div>
        </div>
        {/* )} */}

        {solutionsList.length > 0 && (
          <div>
            <div className="flex items-end justify-between flex-wrap gap-6">
              <div className="max-w-2xl">
                <Reveal>
                  <SectionLabel>Related Solutions</SectionLabel>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance text-white">
                    Productized accelerators linked to this industry.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.08}>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-brand transition border border-white/10 rounded-full px-4 py-2"
                >
                  Browse all <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {solutionsList.slice(0, 4).map((s, i) => (
                <Reveal key={s.slug + i} delay={i * 0.04}>
                  <RelatedCard entry={s} hrefPrefix="/solutions" />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
