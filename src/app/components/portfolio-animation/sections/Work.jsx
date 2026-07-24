"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { extraData } from "@/constants/testIds/extraData";
import { CASE_STUDIES } from "@/case-study/data/caseStudiesData";

// Portfolio uses static screenshots that expand fullscreen — no live iframes.

/**
 * ProjectCase — a single browser card that expands towards viewport as user
 * scrolls into it. Uses useScroll to drive scale/translate/opacity.
 * When the rocket "docks", we crossfade the card into a full‑bleed preview.
 */
function ProjectCase({ project, index, imageBorderColor }) {
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
      <div className="max-w-[1180px] mx-auto w-full grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-8 items-center">
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
          <h3 className="font-display text-white text-[30px] md:text-[42px] leading-[1.05] tracking-[-0.03em] max-w-[520px]">
            {project.title}
          </h3>

          <div className="mt-10 flex flex-wrap gap-8">
            {project.metrics.map((m) => (
              <div key={m.l} className="flex flex-col gap-1">
                <div className="font-display text-4xl md:text-5xl text-[var(--b2b-orange)] tracking-[-0.03em]">
                  {m.v}
                </div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--b2b-text-muted)]">
                  {m.l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={`/case-study/${project.slug || project.id}`} className="b2b-btn-ghost">
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
    <div className="relative rounded-[20px] overflow-hidden border border-white/12 bg-gradient-to-br from-[#0E1018] to-[#080910] shadow-[0_40px_120px_-40px_rgba(244,123,82,0.35)]">
      {/* Chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-[rgba(255,255,255,0.02)]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="mx-auto max-w-[280px] h-6 rounded-full bg-white/5 flex items-center justify-center gap-2 px-3">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
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
            <span className="font-mono text-[10px] text-white/50 truncate">
              {project.url}
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
            <Image
              src={preview.screenshot}
              alt={`${project.title} dashboard preview`}
              width={1022}
              height={758}
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
  return (
    <section
      id="work"
      data-section="work"
      data-testid={extraData.work.root}
      className="relative"
    >
      <div className="px-6 md:px-12 pt-14 pb-6 md:pb-10">
        <div className="max-w-[1180px] mx-auto">
          <div className="eyebrow mb-4">Proof</div>
          <h2 className="font-display text-white text-[38px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[820px]">
            {title} <br />
            <span className="text-[var(--b2b-text-muted)]">{titleLower}</span>
          </h2>
        </div>
      </div>
      {cardsData.map((p, i) => (
        <ProjectCase key={p.id} project={p} index={i} imageBorderColor={imageBorderColor} />
      ))}

      {/* <div className="flex flex-col gap-4">
        {cardsData.slice(0, 1).map((p, i) => (
          <ProjectCaseDmPreview key={p.id} project={p} index={i} />
        ))}
      </div> */}
    </section>
  );
}
