"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Single alternating row — visual card + copy.
 * Reused for every item in Core Technologies; only `item` content changes.
 */
export default function CoreTechnologyRow({ item, index }) {
  const Icon = item.icon;
  const visualFirst = item.visualPosition === "left";

  const copy = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: 0.05 }}
      className="flex flex-col justify-center"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
        {item.eyebrow}
      </p>

      <h3 className="mt-4 font-display text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.08] font-medium tracking-tight text-white">
        {item.title}
      </h3>

      <p className="mt-3 md:mt-5 text-[16px] sm:text-[17px] leading-[1.7] text-zinc-400 max-w-xl">
        {item.description}
      </p>

      <ul className="mt-3 md:mt-7 space-y-2 md:space-y-3.5">
        {item.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-[15px] sm:text-[16px] leading-snug text-zinc-300"
          >
            <span className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full bg-brand shadow-[0_0_8px_color-mix(in_srgb,var(--b2b-primary)_70%,transparent)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-9 inline-flex w-fit max-w-full items-center gap-3 rounded-lg md:rounded-full border border-brand/25 bg-brand/[0.06] px-2 md:px-5 py-3.5 text-sm leading-snug text-zinc-300">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/15">
          <ArrowRight className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
        </span>
        <span>{item.cta}</span>
      </div>
    </motion.div>
  );

  const visual = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative"
      data-testid={`core-tech-visual-${index}`}
    >
      <div className="core-tech-visual-card relative w-full aspect-[5/4] md:min-h-[300px] md:min-h-[340px] overflow-hidden rounded-[20px]">
        <div className="core-tech-corner core-tech-corner--tr" aria-hidden />
        <div className="core-tech-corner core-tech-corner--bl" aria-hidden />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="core-tech-icon-glow" aria-hidden />
          <div className="core-tech-icon-spin core-tech-icon-hub">
            <Icon
              className="h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] text-brand drop-shadow-[0_0_18px_color-mix(in_srgb,var(--b2b-primary)_45%,transparent)]"
              strokeWidth={1.15}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <article>
      <div
        className="hidden lg:grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20"
        data-testid={`core-tech-row-${index}`}
      >
        {visualFirst ? (
          <>
            {visual}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {visual}
          </>
        )}
      </div>
      <div
        className="grid lg:hidden grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20"
        data-testid={`core-tech-row-${index}`}
      >
          <>
            {copy}
            {visual}
          </>
      </div>
    </article>
  );
}
