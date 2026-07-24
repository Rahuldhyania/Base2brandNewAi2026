"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FinalCTA from "@/components/ai/FinalCTA";
import StarsBackground from "@/components/erp/StarsBackground";

const API_BASE =
  process.env.NEXT_PUBLIC_LOCAL_API_URL ||
  "http://localhost:5000/api";

const normalizeCaseStudy = (item) => ({
  ...item,
  id: item?._id || item?.id,
  slug: item?.slug || "",
  tag: item?.tag || "",
  title: item?.title || "",
  subtitle: item?.subtitle || "",
  metrics: Array.isArray(item?.metrics)
    ? item.metrics
    : [],
  url: item?.url || "",
  status: item?.status || "",
  featured: Boolean(item?.featured),
  displayOrder: item?.displayOrder ?? 0,
  createdAt: item?.createdAt || "",
  updatedAt: item?.updatedAt || "",
  preview: {
    title: item?.preview?.title || "",
    lines: Array.isArray(item?.preview?.lines)
      ? item.preview.lines
      : [],
    screenshot: item?.preview?.screenshot || "",
  },
  detail: {
    client: item?.detail?.client || "",
    timeline: item?.detail?.timeline || "",
    engagementModel:
      item?.detail?.engagementModel || "",
    challenge: item?.detail?.challenge || "",
    solution: item?.detail?.solution || "",
    impact: Array.isArray(item?.detail?.impact)
      ? item.detail.impact
      : [],
    capabilities: Array.isArray(
      item?.detail?.capabilities
    )
      ? item.detail.capabilities
      : [],
    architecture: Array.isArray(
      item?.detail?.architecture
    )
      ? item.detail.architecture
      : [],
    heroImage: item?.detail?.heroImage || "",
    gallery: Array.isArray(item?.detail?.gallery)
      ? item.detail.gallery
      : [],
  },
});

const formatDate = (date) => {
  if (!date) {
    return "";
  }

  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

export default function CaseStudyDetail({ slug }) {
  const [study, setStudy] = useState(null);
  const [relatedStudies, setRelatedStudies] =
    useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] =
    useState(false);
  const [error, setError] = useState("");

  const fetchCaseStudy = async () => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setNotFound(false);

      const response = await fetch(
        `${API_BASE}/case-studies/slug/${encodeURIComponent(
          slug
        )}`,
        {
          cache: "no-store",
        }
      );

      if (response.status === 404) {
        setStudy(null);
        setNotFound(true);
        return;
      }

      if (!response.ok) {
        throw new Error(
          "Failed to fetch case study details"
        );
      }

      const data = await response.json();

      const caseStudyItem =
        data.caseStudy ||
        data.data ||
        data;

      if (
        !caseStudyItem ||
        !caseStudyItem.slug
      ) {
        setStudy(null);
        setNotFound(true);
        return;
      }

      const formattedStudy =
        normalizeCaseStudy(caseStudyItem);

      setStudy(formattedStudy);

      try {
        const relatedResponse = await fetch(
          `${API_BASE}/case-studies?page=1&limit=20`,
          {
            cache: "no-store",
          }
        );

        if (relatedResponse.ok) {
          const relatedData =
            await relatedResponse.json();

          const caseStudyList =
            relatedData.caseStudies ||
            relatedData.data ||
            [];

          const normalizedList =
            caseStudyList.map(
              normalizeCaseStudy
            );

          const sameCategory =
            normalizedList
              .filter(
                (item) =>
                  item.slug !==
                  formattedStudy.slug &&
                  item.tag ===
                  formattedStudy.tag &&
                  (item.status ===
                    "published" ||
                    !item.status)
              )
              .slice(0, 3);

          const remaining =
            normalizedList
              .filter(
                (item) =>
                  item.slug !==
                  formattedStudy.slug &&
                  !sameCategory.some(
                    (relatedItem) =>
                      relatedItem.slug ===
                      item.slug
                  ) &&
                  (item.status ===
                    "published" ||
                    !item.status)
              )
              .slice(
                0,
                3 - sameCategory.length
              );

          setRelatedStudies([
            ...sameCategory,
            ...remaining,
          ]);
        }
      } catch (relatedError) {
        console.error(
          "Related case studies fetch error:",
          relatedError
        );

        setRelatedStudies([]);
      }
    } catch (fetchError) {
      console.error(
        "Case study detail fetch error:",
        fetchError
      );

      setStudy(null);
      setError(
        "Unable to load this case study right now."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <StarsBackground
          className="pointer-events-none !fixed inset-0 z-0"
          starColor="#00e6ff"
        />

        <section className="relative z-[1] pb-20 text-[#f0f4ff]">
          <div className="mx-auto max-w-[1180px] px-6 pt-10 md:px-12">
            <div className="h-4 w-44 animate-pulse rounded bg-white/10" />

            <div className="mt-8 h-14 max-w-3xl animate-pulse rounded-xl bg-white/10" />

            <div className="mt-4 h-6 max-w-2xl animate-pulse rounded bg-white/10" />

            <div className="mt-10 h-[460px] animate-pulse rounded-[24px] bg-[#11141c]" />

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="h-32 animate-pulse rounded-2xl bg-[#11141c]"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (notFound || !study) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <StarsBackground
          className="pointer-events-none !fixed inset-0 z-0"
          starColor="#00e6ff"
        />

        <section className="relative z-[1] flex min-h-[70vh] items-center justify-center text-[#f0f4ff]">
          <div className="px-6 text-center">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--b2b-orange)]">
              {error
                ? "Unable to Load"
                : "404 · Not Found"}
            </p>

            <h1 className="mb-6 font-display text-3xl text-white md:text-5xl">
              {error ||
                "Case study not found"}
            </h1>

            <div className="flex flex-wrap justify-center gap-3">
              {error && (
                <button
                  type="button"
                  onClick={fetchCaseStudy}
                  className="rounded-full bg-[var(--b2b-orange)] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Retry
                </button>
              )}

              <Link
                href="/case-study"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/70 transition hover:border-[var(--b2b-orange)]/30 hover:text-white"
              >
                ← Back to case studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarsBackground
        className="pointer-events-none !fixed inset-0 z-0"
        starColor="#00e6ff"
      />

      <section className="relative z-[1] pb-20 text-[#f0f4ff]">
        <div className="mx-auto max-w-[1180px] px-6 pt-10 md:px-12">
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
          >
            <span>←</span>
            Back to case studies
          </Link>

          <div className="mt-8 grid items-start gap-8">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                {study.tag && (
                  <span className="rounded-full border border-[var(--b2b-orange)]/30 bg-[var(--b2b-orange)]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--b2b-orange)]">
                    {study.tag}
                  </span>
                )}

                {study.featured && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                    Featured
                  </span>
                )}

                {study.status && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                    {study.status}
                  </span>
                )}
              </div>

              <h1 className="mt-4 font-display text-[34px] leading-[0.98] tracking-[-0.03em] text-white md:text-[56px]">
                {study.title}
              </h1>

              {study.subtitle && (
                <p className="mt-4 max-w-[700px] text-base leading-7 text-white/70 md:text-lg">
                  {study.subtitle}
                </p>
              )}
            </div>


          </div>

          {study.detail.heroImage && (
            <div className="mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-[#0f131d]">
              <img
                src={study.detail.heroImage}
                alt={study.title}
                className="h-[280px] w-full object-cover md:h-[460px]"
              />
            </div>
          )}

          {study.metrics.length > 0 && (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {study.metrics.map(
                (metric, index) => (
                  <div
                    key={`${metric.l}-${index}`}
                    className="rounded-xl border border-white/10 bg-[#11151f] p-5"
                  >
                    <div className="font-display text-[30px] leading-none text-[var(--b2b-orange)]">
                      {metric.v}
                    </div>

                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {metric.l}
                    </p>
                  </div>
                )
              )}
            </div>
          )}

          {/* {(study.preview.title ||
            study.preview.screenshot ||
            study.preview.lines.length >
              0) && (
            <div className="mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#0E1018] to-[#080910]">
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
                </div>

                <div className="mx-4 flex-1">
                  <div className="mx-auto max-w-[340px] truncate rounded-full bg-white/5 px-4 py-1.5 text-center font-mono text-[10px] text-white/45">
                    {study.url ||
                      study.slug}
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Platform Preview
                </p>

                <h2 className="mt-2 font-display text-2xl text-white md:text-3xl">
                  {study.preview.title ||
                    study.title}
                </h2>

                {study.preview.lines
                  .length > 0 && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {study.preview.lines.map(
                      (line, index) => (
                        <div
                          key={`${line.label}-${index}`}
                          className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                        >
                          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                            {line.label}
                          </p>

                          <p className="mt-2 font-display text-lg text-white">
                            {line.value}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}

                {study.preview
                  .screenshot && (
                  <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={
                        study.preview
                          .screenshot
                      }
                      alt={`${study.title} preview`}
                      className="max-h-[620px] w-full object-cover object-top"
                    />
                  </div>
                )}
              </div>
            </div>
          )} */}

          {study.detail.impact.length >
            0 && (
              <div className="mt-10">
                <div className="mb-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Business Impact
                  </p>

                  <h2 className="mt-2 font-display text-2xl text-white md:text-3xl">
                    Measurable outcomes
                  </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {study.detail.impact.map(
                    (item, index) => (
                      <div
                        key={`${item.label}-${index}`}
                        className="rounded-xl border border-white/10 bg-[#11151f] p-5"
                      >
                        <div className="font-display text-[30px] leading-none text-[var(--b2b-orange)]">
                          {item.value}
                        </div>

                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                          {item.label}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="space-y-6">
              {study.detail.challenge && (
                <article className="rounded-2xl border border-white/10 bg-[#10141e] p-6 md:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                    The Challenge
                  </p>

                  <h2 className="mt-3 font-display text-2xl text-white">
                    What needed to change
                  </h2>

                  <p className="mt-4 leading-7 text-white/80">
                    {
                      study.detail
                        .challenge
                    }
                  </p>
                </article>
              )}

              {study.detail.solution && (
                <article className="rounded-2xl border border-white/10 bg-[#10141e] p-6 md:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                    The Solution
                  </p>

                  <h2 className="mt-3 font-display text-2xl text-white">
                    What we built
                  </h2>

                  <p className="mt-4 leading-7 text-white/80">
                    {
                      study.detail
                        .solution
                    }
                  </p>
                </article>
              )}

              {study.detail.architecture
                .length > 0 && (
                  <article className="rounded-2xl border border-white/10 bg-[#10141e] p-6 md:p-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      Delivery Architecture
                    </p>

                    <h2 className="mt-3 font-display text-2xl text-white">
                      From discovery to deployment
                    </h2>

                    <div className="mt-6 space-y-2">
                      {study.detail.architecture.map(
                        (step, index) => (
                          <div
                            key={`${step.phase}-${index}`}
                            className="flex gap-4"
                          >
                            <div className="flex flex-col items-center">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--b2b-orange)]/40 bg-[var(--b2b-orange)]/10 font-mono text-[10px] text-[var(--b2b-orange)]">
                                {step.phase ||
                                  String(
                                    index + 1
                                  ).padStart(
                                    2,
                                    "0"
                                  )}
                              </span>

                              {index <
                                study.detail
                                  .architecture
                                  .length -
                                1 && (
                                  <span className="mt-2 w-px flex-1 bg-white/10" />
                                )}
                            </div>

                            <div className="pb-2">
                              <p className="font-medium text-white">
                                {step.title}
                              </p>

                              <p className="mt-1 text-sm leading-6 text-white/65">
                                {
                                  step.description
                                }
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </article>
                )}


            </div>

            <aside className="space-y-6">
              {study.detail.capabilities
                .length > 0 && (
                  <div className="rounded-2xl border border-white/10 bg-[#10141e] p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      Core Capabilities
                    </p>

                    <ul className="mt-5 space-y-3 text-sm text-white/80">
                      {study.detail.capabilities.map(
                        (item, index) => (
                          <li
                            key={`${item}-${index}`}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--b2b-orange)]/10 text-[var(--b2b-orange)]">
                              ✓
                            </span>

                            <span>{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              <div className="rounded-2xl border border-white/10 bg-[#10141e] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                  Case Study Information
                </p>

                <div className="mt-5 space-y-4 text-sm">
                  {study.status && (
                    <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                      <span className="text-white/45">
                        Status
                      </span>

                      <span className="capitalize text-white">
                        {study.status}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                    <span className="text-white/45">
                      Featured
                    </span>

                    <span className="text-white">
                      {study.featured
                        ? "Yes"
                        : "No"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                    <span className="text-white/45">
                      Display Order
                    </span>

                    <span className="text-white">
                      {study.displayOrder}
                    </span>
                  </div>

                  {study.createdAt && (
                    <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                      <span className="text-white/45">
                        Published
                      </span>

                      <span className="text-right text-white">
                        {formatDate(
                          study.createdAt
                        )}
                      </span>
                    </div>
                  )}

                  {study.updatedAt && (
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-white/45">
                        Updated
                      </span>

                      <span className="text-right text-white">
                        {formatDate(
                          study.updatedAt
                        )}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                  Engagement Snapshot
                </p>

                <div className="mt-4 space-y-4 text-sm text-white/80">
                  {study.detail.client && (
                    <div>
                      <p className="text-xs text-white/40">
                        Client
                      </p>

                      <p className="mt-1">
                        {study.detail.client}
                      </p>
                    </div>
                  )}

                  {study.detail.timeline && (
                    <div>
                      <p className="text-xs text-white/40">
                        Timeline
                      </p>

                      <p className="mt-1">
                        {study.detail.timeline}
                      </p>
                    </div>
                  )}

                  {study.detail
                    .engagementModel && (
                      <div>
                        <p className="text-xs text-white/40">
                          Engagement Model
                        </p>

                        <p className="mt-1">
                          {
                            study.detail
                              .engagementModel
                          }
                        </p>
                      </div>
                    )}

                  {study.updatedAt && (
                    <div>
                      <p className="text-xs text-white/40">
                        Last Updated
                      </p>

                      <p className="mt-1">
                        {formatDate(
                          study.updatedAt
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {study.url && (
                <div className="rounded-2xl border border-white/10 bg-[#10141e] p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Project Link
                  </p>

                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white transition hover:border-[var(--b2b-orange)]/40 hover:text-[var(--b2b-orange)]"
                  >
                    Visit Project
                    <span>↗</span>
                  </a>
                </div>
              )}
            </aside>
          </div>

          {study.detail.gallery.length >
            0 && (
              <article className="rounded-2xl mt-10">

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {study.detail.gallery.map(
                    (source, index) => (
                      <div
                        key={`${source}-${index}`}
                        className="overflow-hidden rounded-xl border border-white/10"
                      >
                        <img
                          src={source}
                          alt={`${study.title} gallery ${index + 1
                            }`}
                          className="aspect-[4/3] w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )
                  )}
                </div>
              </article>
            )}

          {relatedStudies.length > 0 && (
            <div className="mt-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                More Work
              </p>

              <h2 className="mt-2 font-display text-2xl text-white md:text-3xl">
                Related case studies
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {relatedStudies.map(
                  (item) => (
                    <Link
                      key={
                        item.id ||
                        item.slug
                      }
                      href={`/case-study/${item.slug}`}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#10141e] transition hover:border-[var(--b2b-orange)]/40"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-[#0c1018]">
                        {item.detail
                          .heroImage ||
                          item.preview
                            .screenshot ? (
                          <img
                            src={
                              item.detail
                                .heroImage ||
                              item.preview
                                .screenshot
                            }
                            alt={item.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-sm text-white/30">
                            Case Study
                          </div>
                        )}
                      </div>

                      <div className="p-5">
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--b2b-orange)]">
                          {item.tag}
                        </p>

                        <h3 className="mt-2 font-display text-lg text-white transition group-hover:text-[var(--b2b-orange)]">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          )}
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