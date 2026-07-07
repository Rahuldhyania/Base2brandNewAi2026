'use client'
import React from "react";
import { motion } from "framer-motion";
import { FLOATING_CATEGORIES } from "../data/resources";

/**
 * Small glass pills that gently orbit around the hero nebula.
 * Positioned absolutely across the hero, with soft parallax on hover.
 */
export default function CategoryOrbits({ onSelect }) {
  // Radial positions around center — carefully placed to avoid the headline
  const positions = [
    { top: "20%", left: "6%" },
    { top: "22%", right: "8%" },
    { top: "42%", left: "3%" },
    { top: "44%", right: "4%" },
    { top: "62%", left: "6%" },
    { top: "64%", right: "6%" },
    { top: "16%", left: "42%" },
    { top: "82%", left: "36%" },
    { top: "84%", right: "18%" },
    { top: "82%", left: "20%" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block" aria-hidden>
      {FLOATING_CATEGORIES.map((cat, i) => (
        <motion.button
          key={cat}
          data-testid={`floating-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
          onClick={() => onSelect && onSelect(cat)}
          style={positions[i]}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0, 6, 0],
          }}
          transition={{
            opacity: { duration: 1.2, delay: 2 + i * 0.12 },
            scale: { duration: 1.2, delay: 2 + i * 0.12, type: "spring" },
            y: {
              duration: 6 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            },
          }}
          whileHover={{ scale: 1.08 }}
          className="pointer-events-auto absolute select-none px-4 py-2 rounded-full glass text-xs md:text-sm font-sans text-white/80 hover:text-white transition-colors group"
        >
          <span className="relative">
            {cat}
            <span
              className="pointer-events-none absolute inset-0 -m-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(123,77,255,0.35), transparent 70%)",
              }}
            />
          </span>
        </motion.button>
      ))}
    </div>
  );
}
