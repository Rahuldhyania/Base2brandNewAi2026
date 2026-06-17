'use client'
import React from "react";
import { motion } from "framer-motion";

export default function Philosophy({highlightTag, titleUpper, titleLower, description}) {
  return (
    <section
      id="philosophy"
      className="relative py-10 overflow-hidden"
      data-testid="philosophy-section"
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
            {highlightTag}  
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-[36px] sm:text-[44px] md:text-[56px] leading-[1.05] font-medium tracking-tight text-white"
            >
              {titleUpper}
              <br />
              <span className="text-orange-gradient"> {titleLower}</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 h-px bg-gradient-to-r from-[var(--b2b-primary)] to-transparent origin-left"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-7 space-y-3 text-[17px] md:text-[18px] leading-[1.7] text-zinc-300"
          >
            {
              description.map((item, index) => (
                <p key={index} className="text-zinc-400">
                  {item}
                </p>
              ))
            }
          </motion.div>
        </div>
      </div>
    </section>
  );
}
