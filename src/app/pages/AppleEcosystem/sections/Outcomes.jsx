'use client'
import React from "react";
import { m } from "framer-motion";
import AppleActivityCard from "@/components/apple/AppleActivityCard";
import { APPLE } from "@/constants/testIds";

const OUTCOMES_ACTIVITY = [
  { label: "PERFORMANCE",   value: 94, color: "#0A84FF", size: 240, current: "60",  target: "60", unit: "fps" },
  { label: "SECURITY",      value: 88, color: "#5AC8FA", size: 200, current: "SOC 2", target: "Type II", unit: "" },
  { label: "ACCESSIBILITY", value: 82, color: "#64D2FF", size: 160, current: "AA+", target: "AAA", unit: "WCAG" },
  { label: "SCALABILITY",   value: 90, color: "#40C8E0", size: 120, current: "10×",  target: "10×", unit: "load" },
];

const PROOF = [
  { value: "60 fps", label: "Native interaction floor on shipped apps" },
  { value: "<200 ms", label: "P95 cold start across consumer apps" },
  { value: "AA+", label: "WCAG conformance shipped by default" },
  { value: "99.95%", label: "Crash-free sessions on production releases" },
  { value: "4.7★", label: "Average App Store rating across launches" },
  { value: "30 d", label: "Median time-to-TestFlight from kickoff" },
];

export default function Outcomes() {
  return (
    <section className="b2b-container py-12">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
            Outcomes & Business Impact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight mt-4">
            Premium isn't a colour palette —{" "}
            <span className="apple-text-gradient">it's a measurable outcome.</span>
          </h2>
          <p className="mt-6 text-white/65 leading-relaxed max-w-md">
            We engineer to four production outcomes that buyers, security teams and end
            users can verify: performance, security, accessibility and scalability. Each
            ring represents the floor we hit on a representative Apple engagement —
            not a marketing illustration.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-px b2b-glass rounded-2xl overflow-hidden max-w-md">
            {PROOF.map((p) => (
              <div key={p.label} className="bg-[rgba(10,12,18,0.55)] p-5">
                <p className="font-display text-2xl text-white">{p.value}</p>
                <p className="mt-1 text-xs text-white/50 leading-snug">{p.label}</p>
              </div>
            ))}
          </div>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="b2b-glass-strong rounded-3xl p-2 lg:p-4"
          data-testid={APPLE.outcomesActivity}
        >
          <AppleActivityCard
            activities={OUTCOMES_ACTIVITY}
            ringContainerSize={260}
            title="Apple Engagement Production Floor · representative metrics"
          />
        </m.div>
      </div>
    </section>
  );
}
