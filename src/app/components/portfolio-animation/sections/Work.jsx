"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { extraData } from "@/constants/testIds/extraData";
import { CASE_STUDIES } from "@/case-study/data/caseStudiesData";

// Portfolio uses static screenshots that expand fullscreen — no live iframes.

/**
 * ProjectCase — a single browser card that expands towards viewport as user
 * scrolls into it. Uses useScroll to drive scale/translate/opacity.
 * When the rocket "docks", we crossfade the card into a full‑bleed preview.
 */
function ProjectCase({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.02, 0.94]), {
    stiffness: 90,
    damping: 22,
  });
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [3, -3]), {
    stiffness: 90,
    damping: 22,
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), {
    stiffness: 90,
    damping: 22,
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
          style={{ scale, rotate, y }}
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

          <BrowserWindow project={project} scrollYProgress={scrollYProgress} />
        </motion.div>
      </div>
    </div>
  );
}

function BrowserWindow({ project, scrollYProgress }) {
  const { preview } = project;
  const imageScale = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [1.12, 1, 1.06]);
  const imageY = useTransform(scrollYProgress, [0, 1], [18, -18]);

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

      {/* Body */}
      <div className="p-6 md:p-8 relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              {preview.title}
            </div>
            <div className="font-display text-[22px] md:text-[26px] text-white mt-1 leading-tight">
              Live telemetry
            </div>
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${preview.accent} 0%, rgba(255,255,255,0.05) 100%)`,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 2v10M2 7h10"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {preview.lines.map((l) => (
            <div
              key={l.label}
              className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40 mb-1">
                {l.label}
              </div>
              <div className="font-display text-[18px] text-white tracking-[-0.02em]">
                {l.value}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2 overflow-hidden">
          {preview.screenshot ? (
            <motion.img
              src={preview.screenshot}
              alt={`${project.title} dashboard preview`}
              style={{ scale: imageScale, y: imageY }}
              className="w-full h-[220px] md:h-[250px] rounded-md object-cover will-change-transform"
              loading="lazy"
            />
          ) : (
            <div className="h-[220px] md:h-[250px] rounded-md border border-dashed border-white/20 bg-[#0c101a] flex items-center justify-center text-center px-6">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/45">
                Screenshot will appear here
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Work({
  title = "Selected anonymised cases.",
  titleLower = "Outcomes, not optics.",
  cardsData = CASE_STUDIES,
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
        <ProjectCase key={p.id} project={p} index={i} />
      ))}

      {/* <div className="flex flex-col gap-4">
        {cardsData.slice(0, 1).map((p, i) => (
          <ProjectCaseDmPreview key={p.id} project={p} index={i} />
        ))}
      </div> */}
    </section>
  );
}
