'use client'
import React from "react";
import { motion } from "framer-motion";
import { Code2, ShieldCheck, Cloud, Smartphone, Cpu, Workflow, Eye, Compass } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Smartphone,
    title: "Native iOS & iPadOS",
    body: "Production-grade applications in Swift and SwiftUI — from greenfield products to large-scale modernisations of legacy iOS portfolios.",
    keywords: "iOS App Development · iPhone · iPad",
  },
  {
    icon: Eye,
    title: "VisionOS & spatial computing",
    body: "Immersive applications for Vision Pro: enterprise training, product visualization, mixed-reality field operations and spatial collaboration.",
    keywords: "Vision Pro · RealityKit · ARKit",
  },
  {
    icon: Cpu,
    title: "Apple Watch & wearables",
    body: "WatchOS applications optimised for glanceable interactions, complications, workouts and HealthKit-grade longitudinal data.",
    keywords: "watchOS · HealthKit · Complications",
  },
  {
    icon: Compass,
    title: "Apple TV, CarPlay & Mac",
    body: "tvOS apps, CarPlay extensions and macOS desktop applications — built around the unique input model of each surface.",
    keywords: "tvOS · CarPlay · macOS · Catalyst",
  },
  {
    icon: Cpu,
    title: "Apple Intelligence integration",
    body: "Leverage on-device Foundation Models, App Intents and private cloud compute to embed contextual, secure intelligence into your product.",
    keywords: "Apple Intelligence · Foundation Models · App Intents",
  },
  {
    icon: Workflow,
    title: "Backend, CloudKit & sync",
    body: "Production backends with CloudKit, server-side Swift, GraphQL gateways and resilient sync engines for offline-first Apple apps.",
    keywords: "CloudKit · Server Swift · Sync",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise security & MDM",
    body: "App Transport Security hardening, Keychain, biometric auth, MDM-aware configuration and SOC 2-aligned delivery.",
    keywords: "MDM · Keychain · Compliance",
  },
  {
    icon: Code2,
    title: "Modernisation & SwiftUI migration",
    body: "We bring UIKit, AppKit and React Native portfolios forward — incrementally migrating to SwiftUI without freezing your roadmap.",
    keywords: "SwiftUI Migration · UIKit · Modernisation",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="b2b-container py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
            Capabilities
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.05] tracking-tight mt-4 max-w-3xl">
            One engineering team. Every Apple surface.
          </h2>
        </div>
        <p className="text-white/55 max-w-md text-xs sm:text-sm lg:text-base leading-relaxed">
          Apple Ecosystem Development at Base2Brand is delivered by a single cross-platform
          team — so design language, data layers and intelligence behave consistently across
          every device your customer or workforce uses.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {CAPABILITIES.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative b2b-glass rounded-2xl p-4 sm:p-6 hover:bg-white/[0.05] transition overflow-hidden"
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(10,132,255,0.18), transparent 70%)" }}
              />
              <div className="relative">
                <span
                  className="inline-flex w-9 h-9 rounded-lg items-center justify-center"
                  style={{ background: "rgba(10,132,255,0.1)", border: "1px solid rgba(10,132,255,0.3)" }}
                >
                  <Icon size={16} color="#64D2FF" strokeWidth={1.8} />
                </span>
                <h3 className="mt-3 sm:mt-5 font-display text-base sm:text-lg leading-tight">{c.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/55 leading-relaxed">{c.body}</p>
                <p className="mt-2 sm:mt-3 md:mt-5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white/35">
                  {c.keywords}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
