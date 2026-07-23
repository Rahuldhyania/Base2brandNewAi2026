import React from "react";

const SEO_PARAS = [
  {
    h: "An Apple app development company built around modern Apple engineering.",
    p: "Base2Brand is an Apple ecosystem development company that designs and ships native software across iPhone, iPad, Apple Watch, Vision Pro, Apple TV, CarPlay and Mac. Whether you need iPhone app development, enterprise iOS app development or Vision Pro app development, we operate with the same product discipline: clear strategy, strong UX, production-grade engineering and long-term evolution.",
  },
  {
    h: "Swift, SwiftUI and native iOS development at production scale.",
    p: "Our native Apple engineering team builds iOS applications for startups, enterprises, healthcare platforms, logistics operators, ecommerce brands and internal business systems. We treat enterprise iOS app development as more than app screens. It includes modular architecture, secure authentication, scalable backends, performance testing, accessibility, analytics, release management and ongoing product improvement.",
  },
  {
    h: "Apple Watch app development, Vision Pro development and the rest of the surface area.",
    p: "Beyond iPhone app development, we build companion and ecosystem experiences across Apple Watch, iPad, Mac, CarPlay and Apple TV. Our Vision Pro app development practice is built for brands and enterprises exploring spatial computing for training, product visualization, remote collaboration, healthcare, education and immersive customer experiences.",
  },
  {
    h: "Why enterprises choose Base2Brand for Apple development.",
    p: "Clients do not choose Base2Brand as a generic app vendor. They choose us when the product needs to be secure, scalable, premium and connected to business outcomes. We bring strategy, design, engineering, Apple ecosystem thinking, enterprise deployment, privacy-aware architecture and post-launch operation into one team.",
  },
];

export default function SeoBlock() {
  return (
    <section className="b2b-container py-8 sm:py-12">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/45 mb-3 sm:mb-4">
        Apple Ecosystem Development · Engineering perspective
      </p>
      <div className="grid lg:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6">
        {SEO_PARAS.map((s) => (
          <div key={s.h}>
            <h3 className="font-display text-lg sm:text-xl lg:text-2xl leading-snug text-white/90">{s.h}</h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/55 leading-relaxed">{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
