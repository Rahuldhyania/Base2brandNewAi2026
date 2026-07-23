"use client";

import Link from "next/link";
import FinalCTA from "@/components/ai/FinalCTA";
import StarsBackground from "@/components/erp/StarsBackground";
import { getCaseStudyBySlug } from "../data/caseStudiesData";

export default function CaseStudyDetail({ slug }) {
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return null;
  }

  return (
    <div className="relative md:min-h-screen overflow-x-hidden">
      <StarsBackground
        className="!fixed inset-0 z-0 pointer-events-none"
        starColor="#00e6ff"
      />

      <section className="relative z-[1] text-[#f0f4ff] pb-20">
        <div className="mx-auto max-w-[1180px] px-6 md:px-12 pt-10">
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
          >
            <span>←</span>
            Back to case studies
          </Link>

          <div className="mt-8 grid lg:grid-cols-[1.25fr_0.75fr] gap-8 items-start">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-[var(--b2b-orange)]">
                {study.n}
              </div>
              <h1 className="mt-3 font-display text-[34px] md:text-[56px] leading-[0.98] tracking-[-0.03em] text-white">
                {study.title}
              </h1>
              <p className="mt-4 text-white/70 text-base md:text-lg max-w-[700px]">
                {study.subtitle}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                Engagement Snapshot
              </p>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                <p>
                  <span className="text-white/45">Client:</span> {study.detail.client}
                </p>
                <p>
                  <span className="text-white/45">Timeline:</span> {study.detail.timeline}
                </p>
                <p>
                  <span className="text-white/45">Model:</span>{" "}
                  {study.detail.engagementModel}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-[#0f131d]">
            <img
              src={study.detail.heroImage}
              alt={study.title}
              className="w-full h-[280px] md:h-[460px] object-cover"
            />
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {study.detail.impact.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-[#11151f] p-5"
              >
                <div className="font-display text-[30px] leading-none text-[var(--b2b-orange)]">
                  {item.value}
                </div>
                <p className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-white/45">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-[1fr_0.8fr] gap-6">
            <div className="space-y-6">
              <article className="rounded-2xl border border-white/10 bg-[#10141e] p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                  The challenge
                </p>
                <p className="mt-4 text-white/80 leading-7">{study.detail.challenge}</p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-[#10141e] p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                  What we built
                </p>
                <p className="mt-4 text-white/80 leading-7">{study.detail.solution}</p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-[#10141e] p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                  Delivery architecture
                </p>
                <div className="mt-5 space-y-4">
                  {study.detail.architecture.map((step) => (
                    <div key={step.phase} className="flex gap-4">
                      <span className="h-7 w-7 rounded-full border border-[var(--b2b-orange)]/40 bg-[var(--b2b-orange)]/10 text-[10px] font-mono flex items-center justify-center text-[var(--b2b-orange)]">
                        {step.phase}
                      </span>
                      <div>
                        <p className="text-white">{step.title}</p>
                        <p className="text-sm text-white/65 mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-[#10141e] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                  Core capabilities
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {study.detail.capabilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--b2b-orange)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {study.detail.gallery?.length > 0 && (
                <div className="space-y-4">
                  {study.detail.gallery.map((src) => (
                    <div
                      key={src}
                      className="overflow-hidden rounded-2xl border border-white/10"
                    >
                      <img
                        src={src}
                        alt={`${study.title} gallery`}
                        className="w-full h-[190px] object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <FinalCTA
        highlightTag="READY TO BUILD YOUR CASE STUDY?"
        titleUpper="Have a challenge worth solving?"
        titleLower="Let's define the outcome together."
        description="Whether you're modernising legacy systems, deploying AI at scale, or building a new digital platform - we engineer for measurable results from day one."
        CTALeft="Start Your Project"
        CTARight="Request a Brief"
        features={[
          "Outcome-driven",
          "Enterprise-grade",
          "Cross-industry expertise",
          "Production-ready",
        ]}
      />
    </div>
  );
}
