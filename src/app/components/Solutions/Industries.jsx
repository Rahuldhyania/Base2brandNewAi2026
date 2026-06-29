'use client'
import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  ShoppingBag,
  Factory,
  Truck,
  Cpu,
  Briefcase,
  Building2,
  Landmark,
  Users
} from "lucide-react";

const Icons = {
  HeartPulse,
  ShoppingBag,
  Factory,
  Truck,
  Cpu,
  Briefcase,
  Building2,
  Landmark,
  Users
}

export default function Industries({highlightTag, titleUpper, titleLower, description, industriesData}) {
  return (
    <section
      id="industries"
      className="relative py-10 overflow-hidden"
      data-testid="industries-section"
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 lg:gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              {highlightTag}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-3 md:mt-6 font-display text-[30px] sm:text-[42px] lg:text-[52px] leading-[1.05] font-medium text-white"
            >
              {titleUpper}{" "}
              {titleLower}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:max-w-sm text-zinc-400 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex flex-wrap gap-3"
          data-testid="industries-list"
        >
          {industriesData.map((ind, i) => {
            const Icon = Icons[ind.icon];
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="industry-tag hover:bg-[var(--b2b-primary)]/30"
                data-testid={`industry-${ind.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                <Icon className="w-4 h-4 text-(--b2b-primary)" />
                {ind.name}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Ticker */}
        <div className="mt-4 lg:mt-10 border-y border-white/5 py-5 overflow-hidden">
          <div className="ticker font-mono text-[11px] tracking-[0.3em] uppercase text-zinc-500">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="inline-flex items-center gap-8 mr-8">
                {industriesData.map((i) => (
                  <span key={i.name + k} className="inline-flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--b2b-primary)" />
                    {i.name}
                  </span>
                ))}
                <span className="text-(--b2b-primary)">// B2B GROWTH OPS //</span>  
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
