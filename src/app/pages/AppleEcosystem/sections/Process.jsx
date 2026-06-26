'use client'
import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Discovery & product strategy",
    body: "We start with a structured intake — business model, user contexts, regulatory posture and an audit of any existing Apple footprint. Outcome: an opinionated point of view on what to build, on which surface, in which order.",
    artefacts: ["Opportunity map", "Surface decision matrix", "Risk & compliance audit"],
  },
  {
    n: "02",
    title: "Experience architecture",
    body: "Design and engineering work together from week one. Native interaction models, accessibility, motion, haptics and content strategy are scoped at the same table as the data model and intelligence strategy.",
    artefacts: ["IA & interaction model", "Design system in Figma + SwiftUI", "Motion & haptics spec"],
  },
  {
    n: "03",
    title: "Production engineering",
    body: "Swift, SwiftUI, modular targets, App Intents and a hardened backend. Xcode Cloud or GitHub Actions, TestFlight phased releases, automatic crash and performance telemetry from the first build.",
    artefacts: ["Modular SwiftUI codebase", "App Intents catalogue", "Xcode Cloud + TestFlight"],
  },
  {
    n: "04",
    title: "Apple Intelligence & ecosystem",
    body: "Intelligence is integrated as a first-class surface — App Intents, Spotlight, Siri, Live Activities, Dynamic Island, Widgets, Watch complications and Vision Pro touchpoints designed in concert.",
    artefacts: ["Intent + entity model", "Live Activity / DI design", "Cross-surface continuity plan"],
  },
  {
    n: "05",
    title: "Release & App Store strategy",
    body: "We don't just submit — we engineer the release. App Store Connect API, metadata localisation, A/B test set-up, phased release, ASA and post-launch crash-monitoring SLAs.",
    artefacts: ["Phased release plan", "Metadata & ASO", "Crash-free SLA dashboard"],
  },
  {
    n: "06",
    title: "Operate, scale, evolve",
    body: "We operate Apple software in production: SwiftUI version migrations, OS-version cohort tracking, performance budgets, security patches and feature roadmap aligned to WWDC cycles.",
    artefacts: ["Quarterly OS-rollout plan", "Performance budgets", "WWDC adoption roadmap"],
  },
];

export default function Process() {
  return (
    <section className="b2b-container py-8 sm:py-12">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
          Development Process
        </p>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.05] tracking-tight mt-4">
          From discovery to operate —{" "}
          <span className="apple-text-gradient">one continuous engagement.</span>
        </h2>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute left-[60px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

        <div className="space-y-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-[auto_1fr] lg:grid-cols-[120px_1fr] gap-4 sm:gap-5 lg:gap-10 items-start"
            >
              <div className="relative">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl text-white/15 leading-none">{s.n}</span>
                <span
                  className="hidden lg:block absolute left-[60px] top-2 w-2 h-2 rounded-full"
                  style={{ background: "#64D2FF", boxShadow: "0 0 10px #64D2FF" }}
                />
              </div>
              <div className="b2b-glass rounded-2xl p-4 sm:p-6 lg:p-7">
                <h3 className="font-display text-xl sm:text-2xl leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-white/60 leading-relaxed">{s.body}</p>
                <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                  {s.artefacts.map((a) => (
                    <span key={a} className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em] sm:tracking-[0.16em] text-white/55 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
