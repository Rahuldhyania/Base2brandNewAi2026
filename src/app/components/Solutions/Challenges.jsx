'use client'
import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  GitBranch,
  Compass,
  TrendingDown,
  Network,
  Eye,
} from "lucide-react";


const icons = {
  Target,
  GitBranch,
  Compass,
  TrendingDown,
  Network,
  Eye,
}
export default function Challenges({highlightTag, titleUpper, titleLower, description, challengesData}) {
  return (
    <section
      id="challenges"
      className="relative py-10  overflow-hidden"
      data-testid="challenges-section"
    >
      {/* Side glows */}
      <div
        className="glow-orange"
        style={{ width: 600, height: 600, top: 100, left: -200, opacity: 0.35 }}
      />
      <div
        className="glow-orange"
        style={{ width: 500, height: 500, bottom: 80, right: -150, opacity: 0.25 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
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
            className="mt-6 font-display text-[32px] sm:text-[40px] md:text-[52px] leading-[1.05] font-medium text-white"
          >
            {titleUpper}{' '}
            <br />
            <span className="text-orange-gradient"> {titleLower}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-2    text-zinc-400 text-base md:text-lg"
          >
            {description}
          </motion.p>
        </div>

        <div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-testid="challenges-grid"
        >
          {challengesData.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="glass-card p-7 relative group"
                data-testid={`challenge-card-${c.id}`}
              >
                <span className="card-corner-mark card-corner-mark--tl" />
                <span className="card-corner-mark card-corner-mark--br" />
                <div className="spotlight" />

                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl border border-(--b2b-primary)/25 bg-(--b2b-primary)/5 flex items-center justify-center group-hover:bg-(--b2b-primary)/15 transition-colors">
                    {
                      Icon ? 
                        <Icon className="w-5 h-5 text-(--b2b-primary)" />
                        : <p>sdsdas</p>
                    }
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500 tracking-[0.25em]">
                    {c.id}
                  </span>
                </div>

                <h3 className="mt-4 text-[20px] font-medium text-white leading-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
