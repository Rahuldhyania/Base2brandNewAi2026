"use client";
import React from "react";
import { m } from "framer-motion";
import { Monitor, Briefcase, ShieldCheck, Boxes, Database, Cloud, ChevronDown } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const LAYERS = [
  { icon: Monitor, title: "Presentation Layer", desc: "Web, mobile, dashboards and user-facing interfaces built for clarity and speed." },
  { icon: Briefcase, title: "Business Services", desc: "The logic layer where workflows, policies, rules and validations live." },
  { icon: ShieldCheck, title: "API Gateway", desc: "Routing, authentication, permissions, rate limits, observability and API contracts." },
  { icon: Boxes, title: "Microservices Layer", desc: "Composable services with clear ownership and independent scalability." },
  { icon: Database, title: "Data Layer", desc: "Transactional databases, analytics stores, caching, search and reporting systems." },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Compute, networking, identity, deployment pipelines, monitoring and cost controls." },
];

const Architecture = () => {
  return (
    <section id="architecture" className="py-2 md:py-12 relative">
      <div className="b2b-container">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.06)}
          className="grid grid-cols-12 gap-6 md:gap-10"
        >
          <div className="col-span-12 lg:col-span-5">
            <m.div variants={fadeUp} className="text-(--b2b-primary) mb-2 md:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--b2b-primary)]" />
              Architecture
            </m.div>
            <h2 className="mt-2 md:mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              <span className="b2b-text-gradient">Systems designed to </span>
              <span className="text-(--b2b-primary)">evolve, not collapse.</span>
            </h2>
            <m.p variants={fadeUp} className="text-white/65 text-sm sm:text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed md:pt-3 mt-4 sm:mt-6">
              Our enterprise software solutions are built with clear layers, secure access, scalable data models and operational visibility from the beginning.

            </m.p>

            <m.div variants={fadeUp} className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 max-w-md">
              {[
                { k: " System Layers", v: "6" },
                { k: " Target P95 Latency", v: "180ms" },
                { k: " Release Capability", v: "Daily" },
                { k: "Recovery Target", v: "<15m" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">{s.k}</div>
                  <div className="mt-1.5 text-xl font-semibold text-white b2b-number">{s.v}</div>
                </div>
              ))}
            </m.div>
          </div>

          <m.div
            variants={fadeUp}
            className="col-span-12 lg:col-span-7"
          >
            <div className="relative p-2 md:p-6 lg:p-9 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#080d1f] to-[#060a18] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 b2b-section-grid opacity-30" />
              <div className="relative space-y-3">
                {LAYERS.map((layer, idx) => {
                  const Icon = layer.icon;
                  return (
                    <m.div
                      key={layer.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="group relative rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 sm:p-4 lg:p-5 hover:border-[color:var(--b2b-red)]/40 hover:bg-[color:var(--b2b-red)]/[0.04] transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-lg border border-white bg-[color:var(--b2b-red)]/10 grid place-items-center rounded-2xl">
                          <Icon className="w-4 h-4 text-[color:var(--b2b-red)]" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[14.5px] font-medium text-white">{layer.title}</div>
                          <div className="text-[12.5px] text-white/55 mt-0.5">{layer.desc}</div>
                        </div>
                        <span className="text-[11px] text-white/35 b2b-number">L{idx + 1}</span>
                      </div>
                      {idx !== LAYERS.length - 1 && (
                        <div className="flex justify-center pt-3">
                          <ChevronDown className="w-4 h-4 text-[color:var(--b2b-red)]/70" />
                        </div>
                      )}
                    </m.div>
                  );
                })}
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default Architecture;
