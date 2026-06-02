'use client';
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  id,
}) {
  return (
    <div
      id={id}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
      data-testid={id ? `${id}-header` : "section-header"}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 text-xs font-mono-display uppercase tracking-[0.25em] text-mute">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-brand shadow-[0_0_10px_#ff6a00]" />
          {eyebrow}
        </div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-mute text-base sm:text-lg max-w-2xl"
          style={align === "center" ? { marginInline: "auto" } : undefined}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
