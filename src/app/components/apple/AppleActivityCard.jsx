import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Apple Activity Card — converted from supplied TypeScript component to
 * JSX and adapted to the Enterprise Outcomes section. The four rings now
 * visualise: Performance, Security, Accessibility and Scalability outcomes.
 *
 * Public surface: optional `title`, `activities` (defaults provided),
 * `className`, and `ringContainerSize` to fine-tune layout.
 */

const defaultActivities = [
  { label: "PERFORMANCE",   value: 92, color: "#0A84FF", size: 240, current: 92, target: 100, unit: "P95" },
  { label: "SECURITY",      value: 84, color: "#5AC8FA", size: 200, current: 84, target: 100, unit: "ATT&CK" },
  { label: "ACCESSIBILITY", value: 78, color: "#64D2FF", size: 160, current: "AA+", target: "AAA", unit: "WCAG" },
  { label: "SCALABILITY",   value: 88, color: "#40C8E0", size: 120, current: 88, target: 100, unit: "RPS" },
];

function CircleProgress({ data, index }) {
  const strokeWidth = 14;
  const radius = (data.size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = ((100 - data.value) / 100) * circumference;
  const gradientId = `apple-ring-${data.label.toLowerCase().replace(/[^a-z]/g, "")}-${index}`;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative">
        <svg
          width={data.size}
          height={data.size}
          viewBox={`0 0 ${data.size} ${data.size}`}
          className="transform -rotate-90"
          aria-label={`${data.label} ${data.value}%`}
        >
          <title>{`${data.label} — ${data.value}%`}</title>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: data.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#5AC8FA", stopOpacity: 0.85 }} />
            </linearGradient>
          </defs>
          <circle
            cx={data.size / 2}
            cy={data.size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={data.size / 2}
            cy={data.size / 2}
            r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: progress }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.8, delay: index * 0.18, ease: "easeInOut" }}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 12px ${data.color}66)` }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

function DetailedInfo({ activities }) {
  return (
    <motion.div
      className="flex flex-col gap-6 ml-0 lg:ml-12"
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {activities.map((a) => (
        <div key={a.label} className="flex flex-col">
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/50">
            {a.label}
          </span>
          <span className="text-3xl font-display mt-1.5" style={{ color: a.color }}>
            {a.current}
            {typeof a.target !== "undefined" && (
              <span className="text-base text-white/45 ml-1.5 font-sans">/{a.target}</span>
            )}
            {a.unit && <span className="text-xs ml-2 text-white/45 font-mono">{a.unit}</span>}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export default function AppleActivityCard({
  title,
  activities = defaultActivities,
  className,
  ringContainerSize = 260,
}) {
  return (
    <div
      className={cn(
        "relative w-full mx-auto p-8 rounded-3xl",
        "text-white",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div
          className="relative flex-shrink-0"
          style={{ width: ringContainerSize, height: ringContainerSize }}
        >
          {activities.map((a, i) => (
            <CircleProgress key={a.label} data={a} index={i} />
          ))}
        </div>
        <DetailedInfo activities={activities} />
      </div>
      {title && (
        <motion.p
          className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45 text-center lg:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.p>
      )}
    </div>
  );
}
