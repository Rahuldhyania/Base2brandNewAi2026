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
  DevOps: "#5AC8FA",
  Release: "#64D2FF",
  Visualization: "#0A84FF",
  Persistence: "#40C8E0",
};

export default function Technologies() {
  return (
    <section className="b2b-container py-8 sm:py-12">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
            Modern Apple Technologies
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.05] tracking-tight mt-4">
            Modern Apple engineering,{" "}
            <span className="apple-text-gradient">
              built for products that scale. 
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/60 leading-relaxed max-w-md">
            We ship on Apple’s modern engineering stack, not outdated patterns.
SwiftUI first. Swift for performance. App Intents for intelligent actions. CloudKit and secure APIs for sync. RealityKit for spatial experiences. This is how modern enterprise iOS app development and iPhone app development should be delivered.

          </p>
        </div>

        <div className="flex items-center justify-start">
          <div className="flex flex-wrap gap-2 sm:gap-2.5 content-start">
            {TECHNOLOGIES.map((t, i) => (
              <motion.span
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.02, ease: "easeOut" }}
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full border bg-white/[0.02] hover:bg-white/[0.06] transition cursor-default"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-150"
                  style={{
                    background: CATEGORY_COLOR[t.category] || "#5AC8FA",
                    boxShadow: `0 0 6px ${CATEGORY_COLOR[t.category] || "#5AC8FA"}`,
                  }}
                />
                <span className="text-xs sm:text-sm text-white/90 font-medium">
                  {t.name}
                </span>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em] sm:tracking-[0.16em] text-white/40 hidden sm:inline">
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
