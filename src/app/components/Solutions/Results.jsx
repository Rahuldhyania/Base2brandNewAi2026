'use client'
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Filter,
  Eye,
  Sparkles,
  Users,
  DollarSign,
} from "lucide-react";


const Icons = {
  TrendingUp,
  Filter,
  Eye,
  Sparkles,
  Users,
  DollarSign,
}



export default function Results({highlightTag, titleUpper, titleLower, description, resultsData}) {
  return (
    <section
      id="results"
      className="relative py-10 overflow-hidden"
      data-testid="results-section"
    >
      <div
        className="glow-orange"
        style={{
          width: 800,
          height: 800,
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.35,
        }}
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
            className="mt-6 font-display text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] font-medium text-white"
          >
            {titleUpper}
            <span className="text-orange-gradient">{titleLower}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-zinc-400 text-base md:text-lg"
          >
            {description}
          </motion.p>
        </div>

        <div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-testid="results-grid"
        >
          {resultsData.map((r, i) => {
            const Icon = Icons[r.icon];
            return (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="glass-card p-7 relative overflow-hidden"
                data-testid={`result-card-${r.id}`}
              >
                <span className="card-corner-mark card-corner-mark--tl" />
                <span className="card-corner-mark card-corner-mark--br" />
                <div className="spotlight" />

                {/* Backdrop stat */}
                <div className="absolute -right-2 -bottom-6 text-[100px] font-display font-medium text-white/[0.025] leading-none pointer-events-none select-none">
                  {r.id}
                </div>

                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-(--b2b-primary)/10 border border-(--b2b-primary)/25 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-(--b2b-primary)" />
                  </div>
                  <div className="text-right">
                    <div className="text-orange-gradient font-display text-2xl font-medium leading-none">
                      {r.stat}
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.22em] uppercase text-zinc-500">
                      {r.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="mt-2 text-[20px] font-medium text-white">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {r.desc}
                </p>

                {/* progress line */}
                <div className="mt-6 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${65 + (i * 5)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-(--b2b-primary) to-[#E26033]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
