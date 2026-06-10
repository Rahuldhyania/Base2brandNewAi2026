'use client'
import React from "react";
import { motion } from "framer-motion";
import { Truck, Stethoscope, Factory, ShoppingBag, Briefcase } from "lucide-react";

const PILLARS = [
  {
    icon: Briefcase,
    title: "Fleet-grade engineering",
    body: "MDM-aware configuration profiles, App Configuration, managed identity (Sign in with Apple at Work & School), and remote diagnostics shipped from day one.",
  },
  {
    icon: Truck,
    title: "Field-ready performance",
    body: "Offline-first sync with conflict-aware merge, bandwidth-tolerant uploads, peripheral integrations (BLE, NFC, barcode, dock connectors) and rugged-device support.",
  },
  {
    icon: Stethoscope,
    title: "Regulated workload posture",
    body: "HIPAA-aligned data flows, GDPR / DPDP-aware data residency, FIPS-grade crypto with the Secure Enclave, and full audit trails for clinical, financial and public-sector workloads.",
  },
];

const INDUSTRIES = [
  { icon: Truck,        title: "Logistics & Field Ops",     body: "Driver, dispatcher, warehouse and last-mile applications that synchronise across the entire delivery chain — built on iPhone, iPad, Watch and CarPlay." },
  { icon: Stethoscope,  title: "Healthcare & Life Sciences", body: "Patient-engagement apps, clinician tools, HealthKit-powered RPM, surgical planning on Vision Pro and HIPAA-grade data pipelines." },
  { icon: Factory,      title: "Manufacturing & Energy",     body: "Inspection, MRO, and quality apps with AR overlays, sensor integration, and visionOS-based training and remote-expert workflows." },
  { icon: ShoppingBag,  title: "Retail & Hospitality",       body: "Clienteling, mobile POS, store-ops, immersive product reviews and CarPlay-aware loyalty experiences." },
];

export default function Enterprise() {
  return (
    <>
      {/* ENTERPRISE MOBILITY */}
      <section className="b2b-container py-12">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#5AC8FA]">
              Enterprise Mobility Solutions
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-4">
              Apple at enterprise scale —{" "}
              <span className="apple-text-gradient">engineered to deploy, secure and govern.</span>
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed max-w-md">
              Most Apple development agencies stop at App Store delivery. We continue —
              MDM, identity, telemetry, audit, configuration and lifecycle — because
              enterprise software lives or dies in the operational layer.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 gap-5">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="b2b-glass rounded-2xl p-6 flex gap-5"
                >
                  <span className="flex-shrink-0 inline-flex w-11 h-11 rounded-xl items-center justify-center self-start" style={{ background: "rgba(10,132,255,0.13)", border: "1px solid rgba(10,132,255,0.32)" }}>
                    <Icon size={18} color="#64D2FF" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-tight">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRY APPLICATIONS */}
      <section className="b2b-container pb-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#5AC8FA]">
            Industry Applications
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-4">
            Built for the industries Apple devices already operate in.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="b2b-glass rounded-2xl p-7"
                data-testid={`apple-industry-card-${ind.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              >
                <span className="inline-flex w-11 h-11 rounded-xl items-center justify-center" style={{ background: "rgba(10,132,255,0.12)", border: "1px solid rgba(10,132,255,0.32)" }}>
                  <Icon size={18} color="#64D2FF" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-2xl leading-tight">{ind.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{ind.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
