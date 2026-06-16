'use client'
import React from "react";
import { motion } from "framer-motion";
import { SPATIAL } from "@/constants/testIds";

const techGroups = [
  {
    title: "Spatial platforms",
    items: ["visionOS", "ARKit", "RealityKit", "Meta Quest SDK", "OpenXR"],
  },
  {
    title: "Real-time engines",
    items: ["Unity", "Unreal Engine 5", "NVIDIA Omniverse", "Blender", "Maya", "Substance Painter"],
  },
  {
    title: "Industrial & cloud",
    items: ["Azure Digital Twins", "IoT Integration", "Spatial Anchors"],
  },
  {
    title: "Intelligence layer",
    items: ["OpenAI", "Computer Vision", "Voice AI"],
  },
];

export default function TechStack() {
  // Precompute pill indices per group so each pill gets a unique stable testid
  const offsets = techGroups.reduce(
    (acc, g) => {
      acc.push(acc[acc.length - 1] + g.items.length);
      return acc;
    },
    [0]
  );
  return (
    <section
      data-testid={SPATIAL.techStackSection}
      className="relative py-12 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className=" gap-12 mb-8">
          <div className="text-center">
            <div className="text-[11px] tracking-[0.28em] uppercase text-[#FFB800]/90 mb-2">
              · Technology Stack
            </div>
            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              The Spatial Computing Stack —{" "} <br />
              <span className="text-white/55">engineered deliberately.</span>
            </h2>
          </div>
          <p className="text-white/65 text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed text-center pt-3">
            No accidental tooling. Each component is selected for production readiness, enterprise governance and a long-term maintenance horizon that suits regulated environments.
          </p>
        </div>

        <div className="space-y-10">
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: gi * 0.05 }}
              className="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-12 items-start border-b border-white/[0.05] last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-[#FFB800]/70">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-white">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((t, ti) => (
                  <span
                    key={t}
                    data-testid={SPATIAL.techPill(offsets[gi] + ti)}
                    className="tech-pill px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
