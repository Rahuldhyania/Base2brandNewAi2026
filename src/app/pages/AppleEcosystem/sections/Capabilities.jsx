'use client'
import React from "react";
import { motion } from "framer-motion";
import { Code2, ShieldCheck, Cloud, Smartphone, Cpu, Workflow, Eye, Compass } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Smartphone,
    title: "Native iOS & iPadOS Development",
    body: "Production-grade iPhone app development and iPad applications built with modern Apple frameworks. We build native iOS products for customer apps, internal platforms, field teams, ecommerce journeys, healthcare workflows, logistics operations and enterprise mobility.",
    keywords: "Swift · SwiftUI · UIKit · App Intents · Widgets · Live Activities · StoreKit · Secure local storage",
  },
  {
    icon: Eye,
    title: "VisionOS & Spatial Computing",
    body: "Vision Pro app development for immersive product experiences, enterprise training, healthcare visualization, field operations, spatial dashboards and next-generation collaboration. We design spatial interfaces that feel useful, not gimmicky — built around business value, user context and real-world workflows.",
    keywords: "VisionOS · RealityKit · ARKit · Spatial UI · Immersive training · Product visualization · Mixed-reality workflows",
  },
  {
    icon: Cpu,
    title: "Apple Watch & Wearables",
    body: "Apple Watch apps built for fast, glanceable, high-value moments. We create wearable experiences for health, fitness, logistics, field operations, alerts, task completion and companion app workflows.",
    keywords: "WatchOS · HealthKit · Notifications · Glanceable actions · Wearable workflows",
  },
  {
    icon: Compass,
    title: "Apple TV, CarPlay & Mac",
    body: "Apple ecosystem experiences for larger screens, vehicles and desktop environments. We build tvOS apps, CarPlay extensions and Mac applications that support content, operations, mobility and enterprise workflows.",
    keywords: "tvOS · CarPlay · macOS · Catalyst · Desktop workflows · Vehicle interfaces",
  },
  {
    icon: Cpu,
    title: "Apple Intelligence Integration",
    body: "Intelligence built into the experience, not bolted on later. We help businesses design contextual actions, smart workflows, App Intents, search surfaces and AI-assisted product experiences that respect privacy and improve user productivity.",
    keywords: "App Intents · Contextual actions · Private workflows · AI-assisted experiences · On-device intelligence patterns",
  },
  {
    icon: Workflow,
    title: "Backend, CloudKit & Sync",
    body: "Apple apps need reliable data, sync and backend systems to work in real-world environments. We build backend architecture for Apple applications using secure APIs, CloudKit, server-side Swift, GraphQL, offline-first sync and resilient data flows.",
    keywords: "CloudKit · Server-side Swift · GraphQL · Offline sync · API integrations · Secure data flow",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security & MDM",
    body: "For enterprise Apple products, deployment is only half the job. Our enterprise iOS app development approach includes authentication, app hardening, MDM awareness, device configuration, role-based access and secure release workflows.",
    keywords: "MDM readiness · Keychain · SSO · Biometric authentication · Data protection · Audit-ready architecture",
  },
  {
    icon: Code2,
    title: "Modernisation & SwiftUI Migration",
    body: "We help teams modernise existing iOS portfolios without breaking product momentum. From UIKit to SwiftUI, legacy code cleanup, performance improvement and release pipeline upgrades — we move Apple products forward with control.",
    keywords: "SwiftUI migration · UIKit modernisation · Architecture refactor · Performance improvement · Release stabilisation",
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
            One ecosystem team. From iPhone to Vision Pro. 
          </h2>
        </div>
        {/* <p className="text-white/55 max-w-md text-xs sm:text-sm lg:text-base leading-relaxed">
          Apple Ecosystem Development at Base2Brand is delivered by a single cross-platform
          team — so design language, data layers and intelligence behave consistently across
          every device your customer or workforce uses.
        </p> */}
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
