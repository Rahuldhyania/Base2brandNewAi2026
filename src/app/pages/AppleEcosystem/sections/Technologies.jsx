"use client";
import React from "react";
import { motion } from "framer-motion";

const TECHNOLOGIES = [
  { name: "Swift", category: "Language" },
  { name: "SwiftUI", category: "UI" },
  { name: "UIKit", category: "UI" },
  { name: "VisionOS", category: "OS" },
  { name: "RealityKit", category: "Spatial" },
  { name: "ARKit", category: "Spatial" },
  { name: "CoreML", category: "Intelligence" },
  { name: "Create ML", category: "Intelligence" },
  { name: "WidgetKit", category: "Surface" },
  { name: "StoreKit 2", category: "Commerce" },
  { name: "HealthKit", category: "Data" },
  { name: "CloudKit", category: "Backend" },
  { name: "App Intents", category: "Intelligence" },
  { name: "Apple Intelligence", category: "Intelligence" },
  { name: "Combine", category: "Reactive" },
  { name: "Metal", category: "Graphics" },
  { name: "AVFoundation", category: "Media" },
  { name: "Vision", category: "Perception" },
  { name: "Live Activities", category: "Surface" },
  { name: "Server-side Swift", category: "Backend" },
  { name: "Xcode Cloud", category: "DevOps" },
  { name: "TestFlight", category: "Release" },
  { name: "Swift Charts", category: "Visualization" },
  { name: "Swift Data", category: "Persistence" },
];

const CATEGORY_COLOR = {
  Language: "#0A84FF",
  UI: "#5AC8FA",
  OS: "#64D2FF",
  Spatial: "#40C8E0",
  Intelligence: "#5AC8FA",
  Surface: "#0A84FF",
  Commerce: "#64D2FF",
  Data: "#0A84FF",
  Backend: "#40C8E0",
  Reactive: "#64D2FF",
  Graphics: "#5AC8FA",
  Media: "#0A84FF",
  Perception: "#40C8E0",
  DevOps: "#5AC8FA",
  Release: "#64D2FF",
  Visualization: "#0A84FF",
  Persistence: "#40C8E0",
};

export default function Technologies() {
  return (
    <section className="b2b-container py-12">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#5AC8FA]">
            Modern Apple Technologies
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-4">
            The current Apple stack —{" "}
            <span className="apple-text-gradient">
              used like it was designed to be.
            </span>
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed max-w-md">
            We ship on Apple's modern frameworks, not generation-old patterns.
            SwiftUI first. App Intents for intelligence. Swift Concurrency for
            async. Swift Data for local persistence. RealityKit for spatial.
            This is what production Apple software looks like today.
          </p>
        </div>

        <div className="flex items-center">
          <div className="flex flex-wrap gap-2.5 content-start">
            {TECHNOLOGIES.map((t, i) => (
              <motion.span
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.02, ease: "easeOut" }}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full border bg-white/[0.02] hover:bg-white/[0.06] transition cursor-default"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-150"
                  style={{
                    background: CATEGORY_COLOR[t.category] || "#5AC8FA",
                    boxShadow: `0 0 6px ${CATEGORY_COLOR[t.category] || "#5AC8FA"}`,
                  }}
                />
                <span className="text-sm text-white/90 font-medium">
                  {t.name}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-white/40 hidden sm:inline">
                  {t.category}
                </span>
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
