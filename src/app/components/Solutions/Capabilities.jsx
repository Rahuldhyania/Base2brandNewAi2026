'use client'
import React from "react";
import { m } from "framer-motion";
import {
  Database,
  Users,
  Warehouse,
  Handshake,
  Bot,
  Workflow,
  Truck,
  Package,
  Building2,
  MessageSquare,
  Brain,
  Cpu,
  Network,
  Eye,
  TrendingUp,
  GitBranch,
  Search,
  Factory,
  HeartPulse,
  ShoppingBag,
  Briefcase,
  ArrowUpRight,
  MousePointer2,
  Compass,
  Rocket,
  Sparkles
} from "lucide-react";


const Icons = {
  Database,
  Users,
  Warehouse,
  Handshake,
  Bot,
  Workflow,
  Truck,
  Package,
  Building2,
  MessageSquare,
  Brain,
  Cpu,
  Network,
  Eye,
  TrendingUp,
  GitBranch,
  Search,
  Factory,
  HeartPulse,
  ShoppingBag,
  Briefcase,
  MousePointer2,
  Compass,
  Rocket,
  Sparkles
};


export default function Capabilities({highlightTag, titleUpper, titleLower, description, capabilitiesData}) {
  return (
    <section
      id="capabilities"
      className="relative py-10 overflow-hidden"
      data-testid="capabilities-section"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--b2b-primary)/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2 lg:gap-8">
          <div className="lg:max-w-2xl">
            <m.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              {highlightTag}
            </m.div>
            <m.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-[30px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-medium text-white"
            >
              {titleUpper} {" "}
              <span className="text-orange-gradient">{titleLower}</span>
            </m.h2>
          </div>
          <m.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:max-w-sm text-zinc-400 text-base leading-relaxed"
          >
            {description}
          </m.p>
        </div>

        <div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          data-testid="capabilities-grid"
        >
          {capabilitiesData.map((cap, i) => {
            const Icon = Icons[cap.icon]
            return (
              <m.div
                key={cap.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="glass-card p-4 md:p-7 relative group flex flex-col"
                data-testid={`capability-card-${cap.id}`}
              >
                <span className="card-corner-mark card-corner-mark--tl" />
                <span className="card-corner-mark card-corner-mark--tr" />
                <span className="card-corner-mark card-corner-mark--bl" />
                <span className="card-corner-mark card-corner-mark--br" />
                <div className="spotlight" />

                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-(--b2b-primary)/25 to-[#E26033]/10 border border-(--b2b-primary)/25 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-(--b2b-primary)" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="status-pulse" />
                    <span className="font-mono text-[10px] tracking-[0.22em] text-zinc-500 uppercase">
                      {cap.id}
                    </span>
                  </div>
                </div>

                <h3 className="mt-3 2xl:mt-7 text-[22px] md:text-[24px] font-medium text-white leading-tight">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {cap.description}
                </p>

                <div className="mt-2 pt-2 border-t border-white/5 grid grid-cols-2 gap-x-3 gap-y-2.5">
                  {cap.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-[13px] text-zinc-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-(--b2b-primary)" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="mt-2 md:mt-6 flex items-center justify-between text-zinc-500 text-[12px] font-mono tracking-[0.15em] uppercase">
                  <span>System {String(i + 1).padStart(2, "0")} / 06</span>
                  <ArrowUpRight
                    size={16}
                    className="text-zinc-500 group-hover:text-(--b2b-primary) group-hover:rotate-12 transition-all"
                  />
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
