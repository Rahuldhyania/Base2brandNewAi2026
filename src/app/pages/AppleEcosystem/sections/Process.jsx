'use client'
import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Discovery & Product Strategy",
    body: "We start with your business model, user context, existing Apple footprint, technical needs and growth goals. Outcome: A clear point of view on what to build, which Apple surfaces matter and what should ship first.",
    artefacts: ["Opportunity map", "Surface decision matrix", "Risk audit"],
  },
  {
    n: "02",
    title: "Experience Architecture",
    body: "Design and engineering work together from week one. We define interaction models, user journeys, accessibility, motion, haptics, content structure and technical architecture before production begins.",
    artefacts: ["UX architecture", "SwiftUI design system", "Motion & haptics spec", "Accessibility Guidelines"],
  },
  {
    n: "03",
    title: "Production Engineering",
    body: "Our engineering team builds native Apple software using Swift, SwiftUI, secure APIs, App Intents, CloudKit and production-ready release pipelines. This is where iPhone app development and enterprise iOS app development move from concept to working product.",
    artefacts: ["Swift", "SwiftUI", "Xcode Cloud", "TestFlight", "CloudKit", "App Intents"],
  },
  {
    n: "04",
    title: "Apple Intelligence & Ecosystem",
    body: "We integrate intelligence as a first-class product layer — App Intents, Spotlight, Siri, widgets, Live Activities, Watch workflows and Vision Pro touchpoints.",
    artefacts: ["App Intents", "Live Activities", "Cross-surface continuity", "Siri Integration", "WidgetKit"],
  },
  {
    n: "05",
    title: "Release & App Store Strategy",
    body: "We engineer the release, not just the build. From metadata and App Store readiness to phased rollout, TestFlight, analytics, crash monitoring and post-launch optimization.",
    artefacts: ["App Store strategy", "TestFlight", "Release roadmap", "Release Planning", "Phased Rollouts"],
  },
  {
    n: "06",
    title: "Operate, Scale, Evolve",
    body: "After launch, we continue improving performance, security, compatibility, accessibility, analytics and feature roadmap alignment.",
    artefacts: ["Performance budgets", "Version migration", "Product roadmap"],
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
