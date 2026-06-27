'use client'
import React from "react";
import { motion } from "framer-motion";
import {
  Headset,
  Boxes,
  Glasses,
  Wrench,
  Network,
  Sparkles,
} from "lucide-react";
import { SPATIAL } from "@/constants/testIds";

const capabilities = [
  {
    icon: Headset,
    title: "Enterprise Training Simulations",
    description:
      "Safety programs, equipment operation, onboarding and certification rehearsed in fully simulated environments.",
    bullets: ["Scenario branching", "Performance analytics", "LMS / SCORM hand-off"],
  },
  {
    icon: Boxes,
    title: "Digital Twin Engineering",
    description:
      "Connected operations dashboards that mirror factories, energy assets and supply chains in real time.",
    bullets: ["IoT data fabric", "Predictive overlays", "Operator workstations"],
  },
  {
    icon: Glasses,
    title: "Vision Pro Development",
    description:
      "Native visionOS experiences with spatial interfaces engineered for executive, design and operations workflows.",
    bullets: ["RealityKit", "SwiftUI + Reality Composer Pro", "MDM-ready deployments"],
  },
  {
    icon: Wrench,
    title: "Industrial XR Solutions",
    description:
      "Maintenance procedures, assembly guidance and field-service tools designed for shop-floor adoption.",
    bullets: ["Step-by-step procedures", "Work order integration", "Offline-first"],
  },
  {
    icon: Network,
    title: "Immersive Collaboration",
    description:
      "Shared spatial workspaces for distributed design reviews, war-rooms and executive briefings.",
    bullets: ["Cross-device sessions", "Persistent rooms", "Recording & playback"],
  },
  {
    icon: Sparkles,
    title: "AI-Powered XR Experiences",
    description:
      "Intelligent NPCs, adaptive learning systems and voice interfaces that personalise every spatial moment.",
    bullets: ["Conversational agents", "Adaptive scenarios", "Computer-vision overlays"],
  },
];

const container = {
  animate: { transition: { staggerChildren: 0.08 } },
};
const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      data-testid={SPATIAL.capabilitiesSection}
      className="relative py-12 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-10">
          <div>
            <div className="text-[11px] tracking-[0.28em] uppercase text-[#FFB800]/90 mb-4">
              · Capabilities
            </div>
            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              One engineering team.
              <br />
              <span className="text-white/55">Every immersive surface.</span>
            </h2>
          </div>
          <p className="text-white/65 text-base lg:text-lg max-w-[640px] self-end leading-relaxed">
            From visionOS to industrial digital twins — our practice covers the
            full spatial computing stack with a single accountable team, applied
            to outcomes your business actually measures.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={item}
                data-testid={SPATIAL.capabilityCard(i)}
                className="card-amber rounded-2xl p-4 flex flex-col border border-(--b2b-primary)/20 hover:shadow-lg transition-all duration-300 hover:border-(--b2b-primary)/40"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center">
                    <Icon size={22} className="text-[#FFB800]" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[11px] text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl text-white leading-tight mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {c.description}
                </p>
                <ul className="mt-auto space-y-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-[13px] text-white/75"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#FFB800]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
