'use client'
import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  HeartPulse,
  Car,
  ShoppingBag,
  GraduationCap,
  Landmark,
  Zap,
  Building2,
} from "lucide-react";
import { SPATIAL } from "@/constants/testIds";

const industries = [
  { icon: Factory, name: "Manufacturing & Industry 4.0", code: "MFG" },
  { icon: HeartPulse, name: "Healthcare & Life Sciences", code: "HLS" },
  { icon: Car, name: "Automotive", code: "AUTO" },
  { icon: ShoppingBag, name: "Retail & Commerce", code: "RET" },
  { icon: GraduationCap, name: "Education", code: "EDU" },
  { icon: Landmark, name: "Government", code: "GOV" },
  { icon: Zap, name: "Energy & Utilities", code: "ENR" },
  { icon: Building2, name: "Real Estate", code: "RE" },
];

export default function Industries() {
  return (
    <section
      data-testid={SPATIAL.industriesSection}
      className="relative py-3 md:py-12 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="gap-12 mb-10">
          <div className="text-center">
            <div className="text-[11px] tracking-[0.28em] uppercase text-[#FFB800]/90 mb-2">
              · Industries
            </div>
            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Built for industries <br />
              <span className="text-white/55">where precision matters.</span>
            </h2>
          </div>
          <p className="text-white/65 text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed text-center pt-3">
            We work primarily with regulated, safety-critical and operationally-complex organisations — from advanced manufacturing and life sciences to public-sector and global energy operators.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.a
                key={ind.code}
                href="#"
                data-testid={SPATIAL.industryTile(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className="group relative bg-[#050814] p-4 md:p-7 lg:p-9 gap-y-4 md:min-h-[200px] flex flex-col justify-between transition-colors duration-300 hover:bg-[#FFB800]/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={22}
                    className="text-white/70 group-hover:text-[#FFB800] transition-colors"
                    strokeWidth={1.4}
                  />
                  <span className="font-mono text-[10px] text-white/30 group-hover:text-[#FFB800]/70 transition-colors">
                    {ind.code}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-base lg:text-lg leading-tight text-white">
                    {ind.name}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-white/40 group-hover:text-[#FFB800]/80 transition-colors">
                    Explore practice →
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
