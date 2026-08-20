'use client'
import React from "react";
import { m } from "framer-motion";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 2xl:gap-16">
          <div className="lg:col-span-5">
            <m.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
            {highlightTag}  
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-[30px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-medium tracking-tight text-white"
            >
              {titleUpper}{' '}
              <br />
              <span className="text-orange-gradient"> {titleLower}</span>
            </m.h2>

            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 md:mt-8 h-px bg-gradient-to-r from-[var(--b2b-primary)] to-transparent origin-left"
            />
          </div>

          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-1 md:space-y-3 text-[16px] md:text-[18px] leading-[1.7] text-zinc-300"
          >
            {
              description.map((item, index) => (
                <p key={index} className="text-zinc-400">
                  {item}
                </p>
              ))
            }
          </m.div>
        </div>
      </div>
    </section>
  );
}
