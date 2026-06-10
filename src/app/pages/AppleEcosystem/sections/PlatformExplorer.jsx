'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Tablet, Watch, Glasses, Tv, Car } from "lucide-react";
import PlatformSwitcher from "@/components/apple/PlatformSwitcher";
import { APPLE } from "@/constants/testIds";

const PLATFORMS = [
  { id: "iphone",  label: "iPhone",       icon: Smartphone },
  { id: "ipad",    label: "iPad",         icon: Tablet },
  { id: "watch",   label: "Apple Watch",  icon: Watch },
  { id: "vision",  label: "Vision Pro",   icon: Glasses },
  { id: "tv",      label: "Apple TV",     icon: Tv },
  { id: "carplay", label: "CarPlay",      icon: Car },
];

const DETAILS = {
  iphone: {
    headline: "The flagship surface — and your highest-leverage canvas.",
    body:
      "Most enterprise mobile journeys start (and end) on iPhone. We design and engineer iPhone apps in Swift and SwiftUI with App Intents, WidgetKit, Live Activities and Apple Intelligence built in — so the experience feels native, contextual and trustworthy from the first tap.",
    tags: ["Swift", "SwiftUI", "App Intents", "WidgetKit", "Live Activities"],
    stat: { value: "60fps", label: "Native interaction floor" },
  },
  ipad: {
    headline: "A productivity surface, engineered for power workflows.",
    body:
      "iPad is where complex enterprise work happens — multi-column layouts, drag and drop, Pencil input, Stage Manager and external display support. We build iPad apps as first-class citizens, not stretched phone UI, so field operators, clinicians and creators get real tools.",
    tags: ["iPadOS", "Pencil & Scribble", "Stage Manager", "Drag & Drop"],
    stat: { value: "12.9″", label: "Designed for the canvas" },
  },
  watch: {
    headline: "Glanceable, contextual, always on the wrist.",
    body:
      "Apple Watch is the most intimate surface in computing. We build watchOS apps and complications around the only metric that matters on the wrist — time-to-information. HealthKit-backed workflows, Smart Stack widgets, Double Tap interactions and on-wrist payments.",
    tags: ["watchOS", "Complications", "Smart Stack", "HealthKit"],
    stat: { value: "<1s", label: "Glance-to-action target" },
  },
  vision: {
    headline: "Spatial computing for serious enterprise work.",
    body:
      "Vision Pro is not a gimmick — it is the new high-end workstation. We build immersive applications for product visualization, simulation, surgical planning, remote inspection, training and spatial collaboration using SwiftUI, RealityKit and ARKit.",
    tags: ["visionOS", "RealityKit", "ARKit", "Shared Space"],
    stat: { value: "Spatial", label: "First-class design language" },
  },
  tv: {
    headline: "The shared screen — content, dashboards, and signage.",
    body:
      "tvOS apps for premium media products, broadcast operations centres, retail signage, hospitality experiences and conference-room collaboration. Built around the focus engine and Siri Remote, not a touch screen.",
    tags: ["tvOS", "Focus Engine", "TVMLKit", "Top Shelf"],
    stat: { value: "4K HDR", label: "Render target" },
  },
  carplay: {
    headline: "The hands-on-wheel surface for mobility and logistics.",
    body:
      "CarPlay extensions for navigation, EV charging, fleet operations, delivery logistics, parking and audio. Engineered to Apple's strict CarPlay guidelines so the experience clears review and stays safe.",
    tags: ["CarPlay", "Templates", "Sirius / Audio", "EV Charging"],
    stat: { value: "Hands-free", label: "Designed for safety" },
  },
};

export default function PlatformExplorer() {
  const [platform, setPlatform] = useState("iphone");
  const detail = DETAILS[platform];

  return (
    <section className="b2b-container py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#5AC8FA]">
          Ecosystem Explorer
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-4 max-w-4xl">
          Every device. Same engineering team. One coherent product.
        </h2>
        <p className="mt-5 text-white/60 max-w-2xl leading-relaxed">
          Pick a surface to see how we approach it — the technologies, the design constraints,
          and what we consider the engineering bar for production quality.
        </p>
      </div>

      <div className="flex justify-center mb-12 overflow-x-auto px-2">
        <PlatformSwitcher
          platforms={PLATFORMS}
          value={platform}
          onChange={setPlatform}
          testId={APPLE.platformSwitcher}
        />
      </div>

      <div
        className="relative b2b-glass-strong rounded-3xl p-8 overflow-hidden"
        data-testid={APPLE.platformDetail}
      >
        <div
          className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(10,132,255,0.22) 0%, transparent 70%)" }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={platform}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid lg:grid-cols-[1.6fr_1fr] gap-10 items-start"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#64D2FF]">
                {PLATFORMS.find((p) => p.id === platform)?.label}
              </p>
              <h3 className="mt-2 font-display text-3xl md:text-4xl leading-tight max-w-2xl">
                {detail.headline}
              </h3>
              <p className="mt-5 text-white/65 leading-relaxed max-w-xl">
                {detail.body}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {detail.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono uppercase tracking-[0.16em] text-white/65 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="b2b-glass rounded-2xl p-6 lg:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                Engineering bar
              </p>
              <p className="mt-3 font-display text-5xl apple-text-gradient">{detail.stat.value}</p>
              <p className="mt-1.5 text-sm text-white/55">{detail.stat.label}</p>
              <div className="mt-7 pt-5 border-t border-white/10 space-y-2 text-xs text-white/55">
                <p>· Native Apple frameworks only — no cross-platform shims.</p>
                <p>· TestFlight CI, App Store Connect API, automated phased releases.</p>
                <p>· Crash-free sessions tracked against an internal SLA.</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
