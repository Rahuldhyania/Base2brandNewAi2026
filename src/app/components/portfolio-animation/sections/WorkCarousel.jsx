"use client";
import React, { useRef, useState, useEffect } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { extraData } from "@/constants/testIds/extraData";
import { CASE_STUDIES } from "@/case-study/data/caseStudiesData";
import { usePathname } from "next/navigation";
import "swiper/css";

const API_BASE =
  process.env.NEXT_PUBLIC_LOCAL_API_URL ||
  "http://localhost:5000/api";

const normalizeCaseStudy = (item, index = 0) => ({
  ...item,
  id: item?._id || item?.id,
  slug: item?.slug || "",
  tag: item?.tag || "",
  title: item?.title || "",
  subtitle: item?.subtitle || "",
  metrics: Array.isArray(item?.metrics) ? item.metrics : [],
  url: item?.url || "",
  status: item?.status || "",
  featured: Boolean(item?.featured),
  displayOrder: item?.displayOrder ?? index + 1,
  preview: {
    title: item?.preview?.title || "",
    lines: Array.isArray(item?.preview?.lines)
      ? item.preview.lines
      : [],
    screenshot: item?.preview?.screenshot || "",
    screenshots: Array.isArray(item?.preview?.screenshots)
      ? item.preview.screenshots
      : [],
  },
  detail: {
    client: item?.detail?.client || "",
    timeline: item?.detail?.timeline || "",
    engagementModel: item?.detail?.engagementModel || "",
    challenge: item?.detail?.challenge || "",
    solution: item?.detail?.solution || "",
    impact: Array.isArray(item?.detail?.impact)
      ? item.detail.impact
      : [],
    capabilities: Array.isArray(item?.detail?.capabilities)
      ? item.detail.capabilities
      : [],
    architecture: Array.isArray(item?.detail?.architecture)
      ? item.detail.architecture
      : [],
    heroImage: item?.detail?.heroImage || "",
    gallery: Array.isArray(item?.detail?.gallery)
      ? item.detail.gallery
      : [],
  },
});

/**
 * ProjectCase — a single browser card that expands towards viewport as user
 * scrolls into it. Uses useScroll to drive scale/translate/opacity.
 */
function ProjectCase({ project, index, imageBorderColor, wide_container }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

  return (
    <div
      ref={ref}
      data-testid={extraData.work.project(project.id)}
      className="relative flex items-center px-4 md:px-12 py-6 md:py-12"
    >
      <div className={`md:max-w-[1180px] mx-auto w-full grid ${wide_container ? index % 2 === 1 ? 'lg:grid-cols-[4fr_2fr]' : 'lg:grid-cols-[2fr_4fr]' : index % 2 === 1 ? 'lg:grid-cols-[3fr_2fr]' : 'lg:grid-cols-[2fr_3fr]'}  gap-3 md:gap-8 items-center`}>
        {/* Copy side */}
        <div className={index % 2 === 1 ? "md:order-2" : ""}>
          <div className="flex items-center gap-3 mb-3 md:mb-6">
            <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--b2b-orange)]">
              {project.n}
            </span>
            <span className="h-px w-8 bg-[var(--b2b-orange)]/50" />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--b2b-text-muted)]">
              {project.tag}
            </span>
          </div>
          <h3 className="font-display text-white text-[22px] md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[1.05] tracking-[-0.03em] max-w-[520px]">
            {project.title}
          </h3>

          <div className="mt-2 flex flex-wrap gap-3 md:gap-8">
            {project.metrics.map((m) => (
              <div key={m.l} className="flex flex-col gap-1">
                <div className="font-display text-2xl md:text-4xl text-[var(--b2b-orange)] tracking-[-0.03em]">
                  {m.v}
                </div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--b2b-text-muted)]">
                  {m.l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={`/case-study/${project.slug || project.id}`} className="hidden sm:inline-flex items-center gap-2 rounded-full font-semibold text-sm px-4 py-2 hover:brightness-110 transition group bg-(--b2b-primary)">
              View case study
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M7 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Browser side */}
        <m.div
          data-testid={extraData.work.browserExpand(project.id)}
          className={`relative ddff min-w-0 ${index % 2 === 1 ? "md:order-1" : ""}`}
        >
          <m.div
            aria-hidden
            style={{ opacity: glow }}
            className="absolute -inset-6 rounded-[28px] pointer-events-none"
          >
            <div
              className="absolute inset-0 rounded-[28px]"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(244,123,82,0.35), transparent 70%)",
                filter: "blur(20px)",
              }}
            />
          </m.div>

          <BrowserWindow project={project} imageBorderColor={imageBorderColor} />
        </m.div>
      </div>
    </div>
  );
}

function BrowserWindow({ project, imageBorderColor }) {
  const { preview } = project;
  const images = preview.screenshots?.length
    ? preview.screenshots
    : preview.screenshot
      ? [preview.screenshot]
      : [];

  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);
  const hasMultiple = images.length > 1;

  const goPrev = (event) => {
    event.stopPropagation();
    swiperRef.current?.slidePrev();
  };

  const goNext = (event) => {
    event.stopPropagation();
    swiperRef.current?.slideNext();
  };

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/12 bg-gradient-to-br from-[#0E1018] to-[#080910] shadow-[0_40px_120px_-40px_rgb(var(--b2b-primary)/0.35)]">
      <div className="flex items-center gap-3 border-b border-white/8 bg-[rgba(255,255,255,0.02)] px-4 py-3">
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
        </div>

        <div className="mx-4 min-w-0 flex-1">
          <div className="mx-auto flex h-6 max-w-[280px] min-w-0 items-center justify-center gap-2 rounded-full bg-white/5 px-3">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="shrink-0"
            >
              <rect
                x="2"
                y="4.5"
                width="6"
                height="4"
                rx="1"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="0.8"
              />

              <path
                d="M3.5 4.5V3.2a1.5 1.5 0 013 0v1.3"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="0.8"
              />
            </svg>

            <span className="min-w-0 truncate font-mono text-[10px] text-white/50">
              {project.url || project.slug}
            </span>
          </div>
        </div>

        <span className="shrink-0 font-mono text-[10px] text-[var(--b2b-orange)]/80">
          ● live
        </span>
      </div>

      {/* Screenshot carousel — top attached, sides + bottom padded, bottom corners rounded */}
      <div className="relative">
        {images.length > 0 ? (
          <div
            className="relative overflow-hidden rounded-b-3xl bg-[#0c101a]"
            // style={
            //   imageBorderColor
            //     ? {
            //       borderLeft: `1px solid ${imageBorderColor}`,
            //       borderRight: `1px solid ${imageBorderColor}`,
            //       borderBottom: `1px solid ${imageBorderColor}`,
            //     }
            //     : undefined
            // }
          >
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActive(swiper.realIndex)}
              loop={hasMultiple}
              speed={500}
              slidesPerView={1}
              autoHeight
              className="w-full"
            >
              {images.map((src, i) => (
                <SwiperSlide key={src + i}>
                  <img
                    src={src}
                    alt={`${project.title} dashboard preview ${i + 1}`}
                    className="block w-full aspect-16/10 object-cover"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {hasMultiple && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={goPrev}
                  className="absolute z-10 cursor-pointer left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  aria-label="Next image"
                  onClick={goNext}
                  className="absolute z-10 cursor-pointer right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === active ? "w-4 bg-white" : "w-1.5 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="aspect-[16/10] rounded-b-xl bg-[#0c101a] border border-dashed border-white/20 border-t-0 flex items-center justify-center text-center px-6">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/45">
              Screenshot will appear here
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WorkCarousel({
  title = "Selected anonymised cases.",
  titleLower = "Outcomes, not optics.",
  cardsData = CASE_STUDIES,
  imageBorderColor,
}) {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCaseStudies = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_BASE}/case-studies?page=1&limit=50`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch case studies");
      }

      const data = await response.json();

      const caseStudyList =
        data.caseStudies ||
        data.data ||
        [];

      const formattedCaseStudies = caseStudyList
        .map((item, index) =>
          normalizeCaseStudy(item, index)
        )
        .filter(
          (item) =>
            item.status === "published" ||
            !item.status
        )
        .sort(
          (first, second) =>
            first.displayOrder -
            second.displayOrder
        );

      setCaseStudies(formattedCaseStudies);
    } catch (fetchError) {
      console.error(
        "Case studies fetch error:",
        fetchError
      );

      setCaseStudies([]);
      setError(
        "Unable to load case studies right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const currentPath = usePathname()
  return (
    <section
      id="work"
      data-section="work"
      data-testid={extraData.work.root}
      className="relative"
    >
      <div className="px-6 pb-6 pt-14 md:px-12 md:pb-10">
        <div className="mx-auto max-w-[1180px]">
          <div className="eyebrow mb-4">
            Proof
          </div>

          <h2 className="max-w-[820px] font-display text-[22px] lg:text-[26px] xl:text-[32px] 2xl:text-[38px] leading-[0.98] tracking-[-0.035em] text-white md:text-[56px]">
            {title}
            <br />

            <span className="text-[var(--b2b-text-muted)]">
              {titleLower}
            </span>
          </h2>
        </div>
      </div>
      {
        currentPath === '/case-study' ?
         null
         :
         cardsData.map((p, i) => (
        <ProjectCase key={p.id} project={p} index={i} imageBorderColor={imageBorderColor} />
      ))
      }

      {
        currentPath === '/case-study' &&
        <div>
          {loading && (
            <div className="px-6 pb-16 md:px-12">
              <div className="mx-auto max-w-[1180px] space-y-8">
                {[0, 1, 2].map((item) => (
                  <div
                    key={item}
                    className="h-[420px] animate-pulse rounded-[24px] border border-white/10 bg-white/[0.03]"
                  />
                ))}
              </div>
            </div>
          )}

          {!loading && error && (
            <div className="px-6 pb-16 md:px-12">
              <div className="mx-auto max-w-[1180px] rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Case studies unavailable
                </p>

                <p className="mt-3 text-white/70">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={loadCaseStudies}
                  className="mt-5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white transition hover:border-[var(--b2b-orange)]/40"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {!loading &&
            !error &&
            caseStudies.length === 0 && (
              <div className="px-6 pb-16 md:px-12">
                <div className="mx-auto max-w-[1180px] rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center text-white/50">
                  No published case studies found.
                </div>
              </div>
            )}

          {!loading &&
            !error &&
            caseStudies.map((project, index) => (
              <ProjectCase
                key={project.id || project.slug}
                project={project}
                index={index}
              />
            ))}
        </div>
      }
    </section>
  );
}
