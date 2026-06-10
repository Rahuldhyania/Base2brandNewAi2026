import React from "react";

const SEO_PARAS = [
  {
    h: "An Apple App Development Company built around modern Apple engineering.",
    p: "Base2Brand is an Apple App Development Company that designs and ships native software across the entire Apple ecosystem. Our practice is built around current Apple engineering — SwiftUI, Swift Concurrency, App Intents, Swift Data and the modern Foundation Models — not legacy patterns. Whether you need iOS app development, iPhone app development, iPad applications, watchOS or visionOS engineering, we operate with the same studio, the same craft and the same production discipline.",
  },
  {
    h: "Swift, SwiftUI and native iOS development at production scale.",
    p: "Our Swift development and SwiftUI development teams ship iOS apps for fintechs, healthcare networks, logistics operators and consumer brands. We treat native iOS development as an engineering discipline first — modular Swift targets, dependency injection, snapshot tests, performance budgets and Xcode Cloud pipelines — so the apps remain easy to evolve as Apple's platform evolves each WWDC.",
  },
  {
    h: "Apple Watch app development, Vision Pro development and the rest of the surface area.",
    p: "Beyond iPhone app development, our Apple Watch app development team builds glanceable, complication-driven experiences powered by HealthKit and the Smart Stack. Our Vision Pro development practice is one of the early production cohorts for visionOS — building spatial enterprise workflows, immersive training and product visualization. We also ship CarPlay, Apple TV and Mac applications when the ecosystem strategy calls for them.",
  },
  {
    h: "Why enterprises choose Base2Brand for Apple development.",
    p: "Customers don't choose us as a generic iOS development agency. They engage us because they need an Apple App Development Company that pairs craft with enterprise discipline — security questionnaires answered, MDM and configuration profiles honoured, accessibility shipped, App Store review navigated calmly, and a release management cadence that actually maps to the rest of the business.",
  },
];

export default function SeoBlock() {
  return (
    <section className="b2b-container py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45 mb-4">
        Apple Ecosystem Development · Engineering perspective
      </p>
      <div className="grid lg:grid-cols-2 gap-x-6 gap-y-6">
        {SEO_PARAS.map((s) => (
          <div key={s.h}>
            <h3 className="font-display text-xl lg:text-2xl leading-snug text-white/90">{s.h}</h3>
            <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
