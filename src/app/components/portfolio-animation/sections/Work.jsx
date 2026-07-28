// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import Link from "next/link";
// import { extraData } from "@/constants/testIds/extraData";
// import { CASE_STUDIES } from "@/case-study/data/caseStudiesData";
// import {
//   CASE_STUDY_API_BASE,
//   normalizeCaseStudy,
// } from "@/case-study/lib/caseStudyApi";

// // Portfolio uses static screenshots that expand fullscreen — no live iframes.

// /**
//  * ProjectCase — a single browser card that expands towards viewport as user
//  * scrolls into it. Uses useScroll to drive scale/translate/opacity.
//  * When the rocket "docks", we crossfade the card into a full‑bleed preview.
//  */
// function ProjectCase({ project, index }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.02, 0.94]), {
//     stiffness: 90,
//     damping: 22,
//   });
//   const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [3, -3]), {
//     stiffness: 90,
//     damping: 22,
//   });
//   const y = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), {
//     stiffness: 90,
//     damping: 22,
//   });
//   const glow = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

//   return (
//     <div
//       ref={ref}
//       data-testid={extraData.work.project(project.id)}
//       className="relative flex items-center px-6 md:px-12 py-12"
//     >
//       <div className="max-w-[1180px] mx-auto w-full grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-8 items-center">
//         {/* Copy side */}
//         <div className={index % 2 === 1 ? "md:order-2" : ""}>
//           <div className="flex items-center gap-3 mb-6">
//             <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--b2b-orange)]">
//               {project.n}
//             </span>
//             <span className="h-px w-8 bg-[var(--b2b-orange)]/50" />
//             <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--b2b-text-muted)]">
//               {project.tag}
//             </span>
//           </div>
//           <h3 className="font-display text-white text-[30px] md:text-[42px] leading-[1.05] tracking-[-0.03em] max-w-[520px]">
//             {project.title}
//           </h3>

//           <div className="mt-10 flex flex-wrap gap-8">
//             {project.metrics.map((m) => (
//               <div key={m.l} className="flex flex-col gap-1">
//                 <div className="font-display text-4xl md:text-5xl text-[var(--b2b-orange)] tracking-[-0.03em]">
//                   {m.v}
//                 </div>
//                 <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--b2b-text-muted)]">
//                   {m.l}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-10 flex flex-wrap gap-3">
//             <Link href={`/case-study/${project.slug || project.id}`} className="b2b-btn-ghost">
//               View case study
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path
//                   d="M3 7h8M7 3l4 4-4 4"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>

//         {/* Browser side */}
//         <motion.div
//           data-testid={extraData.work.browserExpand(project.id)}
//           style={{ scale, rotate, y }}
//           className={`relative ddff ${index % 2 === 1 ? "md:order-1" : ""}`}
//         >
//           <motion.div
//             aria-hidden
//             style={{ opacity: glow }}
//             className="absolute -inset-6 rounded-[28px] pointer-events-none"
//           >
//             <div
//               className="absolute inset-0 rounded-[28px]"
//               style={{
//                 background:
//                   "radial-gradient(closest-side, rgba(244,123,82,0.35), transparent 70%)",
//                 filter: "blur(20px)",
//               }}
//             />
//           </motion.div>

//           <BrowserWindow project={project} scrollYProgress={scrollYProgress} />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// function BrowserWindow({ project, scrollYProgress }) {
//   const { preview } = project;
//   const imageScale = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [1.12, 1, 1.06]);
//   const imageY = useTransform(scrollYProgress, [0, 1], [18, -18]);

//   return (
//     <div className="relative rounded-[20px] overflow-hidden border border-white/12 bg-gradient-to-br from-[#0E1018] to-[#080910] shadow-[0_40px_120px_-40px_rgba(244,123,82,0.35)]">
//       {/* Chrome */}
//       <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-[rgba(255,255,255,0.02)]">
//         <div className="flex gap-1.5">
//           <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
//           <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
//           <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
//         </div>
//         <div className="flex-1 mx-4">
//           <div className="mx-auto max-w-[280px] h-6 rounded-full bg-white/5 flex items-center justify-center gap-2 px-3">
//             <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//               <rect
//                 x="2"
//                 y="4.5"
//                 width="6"
//                 height="4"
//                 rx="1"
//                 stroke="rgba(255,255,255,0.5)"
//                 strokeWidth="0.8"
//               />
//               <path
//                 d="M3.5 4.5V3.2a1.5 1.5 0 013 0v1.3"
//                 stroke="rgba(255,255,255,0.5)"
//                 strokeWidth="0.8"
//               />
//             </svg>
//             <span className="font-mono text-[10px] text-white/50 truncate">
//               {project.url}
//             </span>
//           </div>
//         </div>
//         <span className="font-mono text-[10px] text-[var(--b2b-orange)]/80">
//           ● live
//         </span>
//       </div>

//       {/* Body */}
//       <div className="p-6 relative overflow-hidden">
//         <div className="flex items-center justify-between mb-2">
//           <div>
//             <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
//               {preview.title}
//             </div>
//             <div className="font-display text-[22px] md:text-[26px] text-white mt-1 leading-tight">
//               Live telemetry
//             </div>
//           </div>
//           <div
//             className="w-9 h-9 rounded-full flex items-center justify-center"
//             style={{
//               background: `linear-gradient(135deg, ${preview.accent} 0%, rgba(255,255,255,0.05) 100%)`,
//             }}
//           >
//             <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//               <path
//                 d="M7 2v10M2 7h10"
//                 stroke="white"
//                 strokeWidth="1.4"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* KPIs */}
//         <div className="grid grid-cols-3 gap-3 mb-4">
//           {preview.lines.slice(0, 3).map((l) => (
//             <div
//               key={l.label}
//               className="rounded-lg border border-white/5 bg-white/[0.02] p-2"
//             >
//               <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
//                 {l.label}
//               </div>
//               <div className="font-display text-[16px] text-white tracking-[-0.02em]">
//                 {l.value}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2 overflow-hidden">
//           {preview.screenshot ? (
//             <motion.img
//               src={preview.screenshot}
//               alt={`${project.title} dashboard preview`}
//               style={{ scale: imageScale, y: imageY }}
//               className="w-full h-[220px] md:h-[250px] rounded-md object-cover will-change-transform"
//               loading="lazy"
//             />
//           ) : (
//             <div className="h-[220px] md:h-[250px] rounded-md border border-dashed border-white/20 bg-[#0c101a] flex items-center justify-center text-center px-6">
//               {/* <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/45">
//                 Screenshot will appear here
//               </span> */}
//               <img src="/images/Rectangle 60 (1).png" alt="Screenshot placeholder" className="w-full h-full object-cover" />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Work({
//   title = "Selected anonymised cases.",
//   titleLower = "Outcomes, not optics.",
//   cardsData = CASE_STUDIES,
//   fetchFromApi = false,
// }) {
//   const [apiCards, setApiCards] = useState([]);
//   const [loading, setLoading] = useState(fetchFromApi);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!fetchFromApi) {
//       return;
//     }

//     const loadCaseStudies = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await fetch(`${CASE_STUDY_API_BASE}/case-studies`, {
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch case studies");
//         }

//         const data = await response.json();
//         const caseStudies = data.caseStudies || data.data || [];

//         setApiCards(
//           caseStudies.map((item, index) => normalizeCaseStudy(item, index)),
//         );
//       } catch (fetchError) {
//         console.error("Case studies fetch error:", fetchError);
//         setApiCards([]);
//         setError("Unable to load case studies right now. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCaseStudies();
//   }, [fetchFromApi]);

//   const resolvedCards = fetchFromApi ? apiCards : cardsData;

//   return (
//     <section
//       id="work"
//       data-section="work"
//       data-testid={extraData.work.root}
//       className="relative"
//     >
//       <div className="px-6 md:px-12 pt-14 pb-6 md:pb-10">
//         <div className="max-w-[1180px] mx-auto">
//           <div className="eyebrow mb-4">Proof</div>
//           <h2 className="font-display text-white text-[38px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[820px]">
//             {title} <br />
//             <span className="text-[var(--b2b-text-muted)]">{titleLower}</span>
//           </h2>
//         </div>
//       </div>

//       {loading && (
//         <div className="px-6 md:px-12 pb-16">
//           <div className="max-w-[1180px] mx-auto space-y-8">
//             {[0, 1].map((item) => (
//               <div
//                 key={item}
//                 className="h-[420px] animate-pulse rounded-[24px] border border-white/10 bg-white/[0.03]"
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {!loading && error && (
//         <div className="px-6 md:px-12 pb-16">
//           <div className="max-w-[1180px] mx-auto rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center">
//             <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
//               Case studies unavailable
//             </p>
//             <p className="mt-3 text-white/70">{error}</p>
//           </div>
//         </div>
//       )}

//       {!loading &&
//         !error &&
//         resolvedCards.map((p, i) => (
//           <ProjectCase key={p.id || p.slug} project={p} index={i} />
//         ))}

//       {/* <div className="flex flex-col gap-4">
//         {cardsData.slice(0, 1).map((p, i) => (
//           <ProjectCaseDmPreview key={p.id} project={p} index={i} />
//         ))}
//       </div> */}
//     </section>
//   );
// }




"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { extraData } from "@/constants/testIds/extraData";
import { CASE_STUDIES } from "@/case-study/data/caseStudiesData";
import { usePathname } from "next/navigation";
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
 * When the rocket "docks", we crossfade the card into a full‑bleed preview.
 */
// function ProjectCase({ project, index, imageBorderColor }) {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const glow = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

//   return (
//     <div
//       ref={ref}
//       data-testid={extraData.work.project(project.id)}
//       className="relative flex items-center px-6 py-12 md:px-12"
//     >
//       <div className="mx-auto grid w-full max-w-[1180px] items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
//         <div className={index % 2 === 1 ? "md:order-2" : ""}>
//           <div className="mb-6 flex items-center gap-3">
//             <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--b2b-orange)]">
//               {String(index + 1).padStart(2, "0")}
//             </span>

//             <span className="h-px w-8 bg-[var(--b2b-orange)]/50" />

//             <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--b2b-text-muted)]">
//               {project.tag}
//             </span>
//           </div>

//           <h3 className="max-w-[520px] font-display text-[30px] leading-[1.05] tracking-[-0.03em] text-white md:text-[42px]">
//             {project.title}
//           </h3>

//           {project.subtitle && (
//             <p className="mt-4 max-w-[520px] text-sm leading-6 text-white/60 md:text-base">
//               {project.subtitle}
//             </p>
//           )}

//           {project.metrics.length > 0 && (
//             <div className="mt-10 flex flex-wrap gap-8">
//               {project.metrics.map((metric, metricIndex) => (
//                 <div
//                   key={`${metric.l}-${metricIndex}`}
//                   className="flex flex-col gap-1"
//                 >
//                   <div className="font-display text-4xl tracking-[-0.03em] text-[var(--b2b-orange)] md:text-5xl">
//                     {metric.v}
//                   </div>

//                   <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--b2b-text-muted)]">
//                     {metric.l}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           <div className="mt-10 flex flex-wrap gap-3">
//             <Link
//               href={`/case-study/${project.slug}`}
//               className="b2b-btn-ghost"
//             >
//               View case study

//               <svg
//                 width="14"
//                 height="14"
//                 viewBox="0 0 14 14"
//                 fill="none"
//               >
//                 <path
//                   d="M3 7h8M7 3l4 4-4 4"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>

//         <motion.div
//           data-testid={extraData.work.browserExpand(project.id)}
//           className={`relative ddff ${index % 2 === 1 ? "md:order-1" : ""}`}
//         >
//           <motion.div
//             aria-hidden
//             style={{
//               opacity: glow,
//             }}
//             className="pointer-events-none absolute -inset-6 rounded-[28px]"
//           >
//             <div
//               className="absolute inset-0 rounded-[28px]"
//               style={{
//                 background:
//                   "radial-gradient(closest-side, rgba(244,123,82,0.35), transparent 70%)",
//                 filter: "blur(20px)",
//               }}
//             />
//           </motion.div>

//           <BrowserWindow project={project} imageBorderColor={imageBorderColor} />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

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
      className="relative flex items-center px-6 md:px-12 py-12"
    >
      <div className={`max-w-[1180px] mx-auto w-full grid ${wide_container ? index % 2 === 1 ? 'md:grid-cols-[4fr_2fr]' : 'md:grid-cols-[2fr_4fr]' : index % 2 === 1 ? 'grid-cols-[3fr_2fr]' : 'grid-cols-[2fr_3fr]'}  gap-8 items-center`}>
        {/* Copy side */}
        <div className={index % 2 === 1 ? "md:order-2" : ""}>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--b2b-orange)]">
              {project.n}
            </span>
            <span className="h-px w-8 bg-[var(--b2b-orange)]/50" />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--b2b-text-muted)]">
              {project.tag}
            </span>
          </div>
          <h3 className="font-display text-white text-[30px] md:text-[38px] leading-[1.05] tracking-[-0.03em] max-w-[520px]">
            {project.title}
          </h3>

          <div className="mt-2 flex flex-wrap gap-8">
            {project.metrics.map((m) => (
              <div key={m.l} className="flex flex-col gap-1">
                <div className="font-display text-4xl text-[var(--b2b-orange)] tracking-[-0.03em]">
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
        <motion.div
          data-testid={extraData.work.browserExpand(project.id)}
          className={`relative ddff ${index % 2 === 1 ? "md:order-1" : ""}`}
        >
          <motion.div
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
          </motion.div>

          <BrowserWindow project={project} imageBorderColor={imageBorderColor} />
        </motion.div>
      </div>
    </div>
  );
}

function BrowserWindow({ project, imageBorderColor }) {
  const { preview } = project;

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/12 bg-gradient-to-br from-[#0E1018] to-[#080910] shadow-[0_40px_120px_-40px_rgb(var(--b2b-primary)/0.35)]">
      <div className="flex items-center gap-3 border-b border-white/8 bg-[rgba(255,255,255,0.02)] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A45]" />
        </div>

        <div className="mx-4 flex-1">
          <div className="mx-auto flex h-6 max-w-[280px] items-center justify-center gap-2 rounded-full bg-white/5 px-3">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
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

            <span className="truncate font-mono text-[10px] text-white/50">
              {project.url || project.slug}
            </span>
          </div>
        </div>

        <span className="font-mono text-[10px] text-[var(--b2b-orange)]/80">
          ● live
        </span>
      </div>

      {/* Screenshot — top attached, sides + bottom padded, bottom corners rounded */}
      <div className="px-4 pb-4 md:px-5 md:pb-5">
        {preview.screenshot ? (
          <div
            className="overflow-hidden rounded-b-3xl bg-[#0c101a]"
            style={
              imageBorderColor
                ? {
                  borderLeft: `1px solid ${imageBorderColor}`,
                  borderRight: `1px solid ${imageBorderColor}`,
                  borderBottom: `1px solid ${imageBorderColor}`,
                }
                : undefined
            }
          >
            <img
              src={preview.screenshot}
              alt={`${project.title} dashboard preview`}
              // width={1022}
              // height={758}
              className="block w-full h-auto"
              loading="lazy"
            />
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

export default function Work({
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

          <h2 className="max-w-[820px] font-display text-[38px] leading-[0.98] tracking-[-0.035em] text-white md:text-[56px]">
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



// staging code
// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { extraData } from "@/constants/testIds/extraData";
// import { CASE_STUDIES } from "@/case-study/data/caseStudiesData";

// // Portfolio uses static screenshots that expand fullscreen — no live iframes.

// /**
//  * ProjectCase — a single browser card that expands towards viewport as user
//  * scrolls into it. Uses useScroll to drive scale/translate/opacity.
//  * When the rocket "docks", we crossfade the card into a full‑bleed preview.
//  */
// function ProjectCase({ project, index, imageBorderColor, wide_container }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const glow = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

//   return (
//     <div
//       ref={ref}
//       data-testid={extraData.work.project(project.id)}
//       className="relative flex items-center px-6 md:px-12 py-12"
//     >
//       <div className={`max-w-[1180px] mx-auto w-full grid ${wide_container ? index % 2 === 1 ? 'md:grid-cols-[4fr_2fr]' : 'md:grid-cols-[2fr_4fr]' : index % 2 === 1 ? 'grid-cols-[3fr_2fr]' : 'grid-cols-[2fr_3fr]'}  gap-8 items-center`}>
//         {/* Copy side */}
//         <div className={index % 2 === 1 ? "md:order-2" : ""}>
//           <div className="flex items-center gap-3 mb-6">
//             <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--b2b-orange)]">
//               {project.n}
//             </span>
//             <span className="h-px w-8 bg-[var(--b2b-orange)]/50" />
//             <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--b2b-text-muted)]">
//               {project.tag}
//             </span>
//           </div>
//           <h3 className="font-display text-white text-[30px] md:text-[38px] leading-[1.05] tracking-[-0.03em] max-w-[520px]">
//             {project.title}
//           </h3>

//           <div className="mt-2 flex flex-wrap gap-8">
//             {project.metrics.map((m) => (
//               <div key={m.l} className="flex flex-col gap-1">
//                 <div className="font-display text-4xl text-[var(--b2b-orange)] tracking-[-0.03em]">
//                   {m.v}
//                 </div>
//                 <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--b2b-text-muted)]">
//                   {m.l}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4 flex flex-wrap gap-3">
//             <Link href={`/case-study/${project.slug || project.id}`} className="hidden sm:inline-flex items-center gap-2 rounded-full font-semibold text-sm px-4 py-2 hover:brightness-110 transition group bg-(--b2b-primary)">
//               View case study
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path
//                   d="M3 7h8M7 3l4 4-4 4"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>

//         {/* Browser side */}
//         <motion.div
//           data-testid={extraData.work.browserExpand(project.id)}
//           className={`relative ddff ${index % 2 === 1 ? "md:order-1" : ""}`}
//         >
//           <motion.div
//             aria-hidden
//             style={{ opacity: glow }}
//             className="absolute -inset-6 rounded-[28px] pointer-events-none"
//           >
//             <div
//               className="absolute inset-0 rounded-[28px]"
//               style={{
//                 background:
//                   "radial-gradient(closest-side, rgba(244,123,82,0.35), transparent 70%)",
//                 filter: "blur(20px)",
//               }}
//             />
//           </motion.div>

//           <BrowserWindow project={project} imageBorderColor={imageBorderColor} />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// function BrowserWindow({ project, imageBorderColor }) {
//   const { preview } = project;

//   return (
//     <div className="relative rounded-[20px] overflow-hidden border border-white/12 bg-gradient-to-br from-[#0E1018] to-[#080910] shadow-[0_40px_120px_-40px_rgba(244,123,82,0.35)] transition-transform duration-500 ease-out will-change-transform hover:scale-[1.03] hover:-rotate-1">
//       {/* Chrome */}
//       <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-[rgba(255,255,255,0.02)]">
//         <div className="flex items-center gap-2">
//           <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
//           <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
//           <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
//         </div>
//         <div className="flex-1 mx-4">
//           <div className="mx-auto max-w-[280px] h-6 rounded-full bg-white/5 flex items-center justify-center gap-2 px-3">
//             <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//               <rect
//                 x="2"
//                 y="4.5"
//                 width="6"
//                 height="4"
//                 rx="1"
//                 stroke="rgba(255,255,255,0.5)"
//                 strokeWidth="0.8"
//               />
//               <path
//                 d="M3.5 4.5V3.2a1.5 1.5 0 013 0v1.3"
//                 stroke="rgba(255,255,255,0.5)"
//                 strokeWidth="0.8"
//               />
//             </svg>
//             <span className="font-mono text-[10px] text-white/50 truncate">
//               {project.url}
//             </span>
//           </div>
//         </div>
//         <span className="font-mono text-[10px] text-[var(--b2b-orange)]/80">
//           ● live
//         </span>
//       </div>

//       {/* Screenshot — top attached, sides + bottom padded, bottom corners rounded */}
//       <div className="">
//         {preview.screenshot ? (
//           <div
//             className="overflow-hidden rounded-b-3xl bg-[#0c101a]"
//           // style={
//           //   imageBorderColor
//           //     ? {
//           //         borderLeft: `1px solid ${imageBorderColor}`,
//           //         borderRight: `1px solid ${imageBorderColor}`,
//           //         borderBottom: `1px solid ${imageBorderColor}`,
//           //       }
//           //     : undefined
//           // }
//           >
//             <Image
//               src={preview.screenshot}
//               alt={`${project.title} dashboard preview`}
//               width={5000}
//               height={1000}
//               className="w-full h-auto"
//               loading="lazy"
//             />
//           </div>
//         ) : (
//           <div className="aspect-[16/10] rounded-b-xl bg-[#0c101a] border border-dashed border-white/20 border-t-0 flex items-center justify-center text-center px-6">
//             <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/45">
//               Screenshot will appear here
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function Work({
//   title = "Selected anonymised cases.",
//   titleLower = "Outcomes, not optics.",
//   cardsData = CASE_STUDIES,
//   imageBorderColor,
//   wide_container
// }) {
//   return (
//     <section
//       id="work"
//       data-section="work"
//       data-testid={extraData.work.root}
//       className="relative"
//     >
//       <div className="px-6 md:px-12 pt-14 pb-6 md:pb-10">
//         <div className="max-w-[1180px] mx-auto">
//           <div className="eyebrow mb-4">Proof</div>
//           <h2 className="font-display text-white text-[38px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[820px]">
//             {title} <br />
//             <span className="text-[var(--b2b-text-muted)]">{titleLower}</span>
//           </h2>
//         </div>
//       </div>
//       {cardsData.map((p, i) => (
//         <ProjectCase key={p.id} project={p} index={i} imageBorderColor={imageBorderColor} wide_container={wide_container} />
//       ))}

//       {/* <div className="flex flex-col gap-4">
//         {cardsData.slice(0, 1).map((p, i) => (
//           <ProjectCaseDmPreview key={p.id} project={p} index={i} />
//         ))}
//       </div> */}
//     </section>
//   );
// }