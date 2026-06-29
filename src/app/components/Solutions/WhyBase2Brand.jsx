'use client'
import React from "react";
import { motion } from "framer-motion";
import { Building2, GitMerge, FlaskConical, Handshake, Icon } from "lucide-react";


const Icons = {
  Building2,
  GitMerge,
  FlaskConical,
  Handshake,
  Icon
}

export default function WhyBase2Brand({highlightTag, titleUpper, titleLower, description, reasonsData}) {
  return (
    <section
      id="why"
      className="relative py-10 overflow-hidden"
      data-testid="why-section"
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-10">
        <div className="max-w-2xl">
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
            className="mt-6 font-display text-[30px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-medium text-white"
          >
            {titleUpper}{' '}
            <span className="text-orange-gradient">{titleLower}</span>
          </motion.h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasonsData.map((r, i) => {
            const Icon = Icons[r.icon];
            return (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="glass-card p-4 md:p-8 relative flex gap-3 md:gap-5"
                data-testid={`why-card-${r.id}`}
              >
                <span className="card-corner-mark card-corner-mark--tl" />
                <span className="card-corner-mark card-corner-mark--br" />
                <div className="spotlight" />

                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--b2b-primary)]/30 to-[var(--b2b-primary)]/var(--b2b-primary)]/25 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[var(--b2b-primary)]" />  
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-zinc-500 uppercase">
                      {r.id}
                    </span>
                    <span className="h-px w-10 bg-white/10" />
                  </div>
                  <h3 className="mt-2 text-xl md:text-[22px] font-medium text-white">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 md:leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
