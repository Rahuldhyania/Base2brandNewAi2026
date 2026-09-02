'use client';
import React from "react";
import { m } from "framer-motion";
import {
  HeartPulse,
  Building,
  Cloud,
  Factory,
  ShoppingBag,
  Car,
  GraduationCap,
  Scale,
  Landmark,
} from "lucide-react";

const industries = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Real Estate", icon: Building },
  { name: "SaaS", icon: Cloud },
  { name: "Manufacturing", icon: Factory },
  { name: "Ecommerce", icon: ShoppingBag },
  { name: "Automotive", icon: Car },
  { name: "Education", icon: GraduationCap },
  { name: "Legal", icon: Scale },
  { name: "Finance", icon: Landmark },
];

export default function Industries() {
  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="relative py-28 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="label-mono">· Industries</div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter">
            Built for any category
            <br />
            <span className="text-zinc-500">where buyers ask AI first.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {industries.map((ind, i) => (
            <m.div
              key={ind.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group card-hover rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-7 flex items-center gap-4"
              data-testid={`industry-${ind.name.toLowerCase().replace(" ", "-")}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-blue-400/40 transition-colors">
                <ind.icon className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <div className="font-display text-lg md:text-xl font-medium tracking-tight">
                  {ind.name}
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">
                  AI visibility, mapped to your buyer
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
