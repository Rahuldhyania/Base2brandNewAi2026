"use client";
import React from "react";
import { motion } from "framer-motion";
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
    <section id="industries" className="b2b-section relative">
      <div className="b2b-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.06)}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="b2b-eyebrow mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--b2b-red)]" />
            Industries
          </motion.div>
          <motion.h2 variants={fadeUp} className="b2b-h2">
            <span className="b2b-text-gradient">Built for industries where </span>
            <span className="b2b-text-red-gradient">reliability matters.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="b2b-lead mt-6">
            From regulated financial systems to live operations — we engineer software for
            environments where downtime is not an option.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.05)}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="b2b-card-quiet p-6 group hover:border-[color:var(--b2b-red)]/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.02] group-hover:border-[color:var(--b2b-red)]/40 group-hover:bg-[color:var(--b2b-red)]/10 grid place-items-center transition-all">
                  <Icon className="w-5 h-5 text-white/70 group-hover:text-[color:var(--b2b-red)] transition-colors" />
                </div>
                <div className="mt-5 text-[15px] font-medium text-white">{ind.name}</div>
                <div className="mt-1 text-[12.5px] text-white/50">{ind.note}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
