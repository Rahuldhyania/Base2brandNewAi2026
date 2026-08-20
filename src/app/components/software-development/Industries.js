"use client";
import React from "react";
import { m } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  Factory,
  Truck,
  GraduationCap,
  Scale,
  Building2,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const INDUSTRIES = [
  { icon: HeartPulse, name: "Healthcare", note: "HIPAA-aware platforms" },
  { icon: Landmark, name: "Financial Services", note: "Compliance & resilience" },
  { icon: ShoppingBag, name: "Retail & Ecommerce", note: "Conversion & scale" },
  { icon: Factory, name: "Manufacturing", note: "OT ↔ IT integration" },
  { icon: Truck, name: "Logistics", note: "Real-time operations" },
  { icon: GraduationCap, name: "Education", note: "Learning platforms" },
  { icon: Scale, name: "Government", note: "Audit & accessibility" },
  { icon: Building2, name: "Real Estate", note: "Portals & operations" },
];

const Industries = () => {
  return (
    <section id="industries" className="py-12 relative">
      <div className="b2b-container">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.06)}
          className="max-w-3xl"
        >
          <m.div variants={fadeUp} className="text-(--b2b-primary) mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--b2b-red)]" />
            Industries
          </m.div>
          <m.h2 variants={fadeUp} className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            <span className="b2b-text-gradient">Built for industries where </span> <br />
            <span className="text-(--b2b-primary)">reliability matters.</span>
          </m.h2>
          <m.p variants={fadeUp} className="text-white/65 text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed pt-3">
            From regulated financial systems to live operations — we engineer software for
            environments where downtime is not an option.
          </m.p>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.05)}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <m.div
                key={ind.name}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="p-4 md:p-6 group border border-white/50 rounded-2xl transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.02] group-hover:border-[color:var(--b2b-red)]/40 group-hover:bg-[color:var(--b2b-red)]/10 grid place-items-center transition-all">
                  <Icon className="w-5 h-5 text-white/70 group-hover:text-[color:var(--b2b-red)] transition-colors" />
                </div>
                <div className="mt-2 md:mt-5 text-[15px] font-medium text-white">{ind.name}</div>
                <div className="mt-1 text-[12.5px] text-white/50">{ind.note}</div>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
};

export default Industries;
