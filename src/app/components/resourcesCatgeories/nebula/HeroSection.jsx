'use client';
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import CosmicSearch from "./CosmicSearch";
import CategoryOrbits from "./CategoryOrbits";

/**
 * Cinematic hero section. Choreographs a 4-6 second entrance:
 * particles → nebula → constellation → headline reveal.
 */
export default function HeroSection({ query, setQuery, onSelectCategory, onExplore }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 min-h-[100svh] w-full overflow-hidden bg-[linear-gradient(0deg,rgba(34,193,195,0)_0%,rgba(0,0,0,0.81)_100%)]" data-testid="hero-section">
      <CategoryOrbits onSelect={onSelectCategory} />

      {/* Entrance dust — particles converging on the center */}
      {!reduce && <EntranceDust />}

      <div className="relative z-20 mx-auto max-w-6xl px-6 md:px-10 pt-32 md:pt-40 pb-24 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-white/70 mb-8"
        >
          <Sparkles className="h-3.5 w-3.5" style={{ color: "#42D4FF" }} />
          <span className="tracking-widest uppercase">The Base2Brand Knowledge Nebula</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(24px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.1, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-tight text-shadow-glow"
        >
          <span className="gradient-text">Discover the Future</span>
          <br />
          <span className="text-white/90">of Digital Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 1 }}
          className="mt-6 md:mt-8 max-w-2xl mx-auto text-base md:text-lg text-white/60 leading-relaxed"
        >
          Explore premium insights, AI research, Shopify guides, case studies,
          industry reports, prompt libraries and engineering resources — created to
          help ambitious teams scale smarter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.9 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            type="button"
            data-testid="cta-explore-resources"
            onClick={onExplore}
            className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white overflow-hidden"
            style={{
              background:
                "linear-gradient(120deg, rgba(123,77,255,0.95), rgba(66,212,255,0.95))",
              boxShadow:
                "0 0 30px rgba(123,77,255,0.35), 0 0 60px rgba(66,212,255,0.15)",
            }}
          >
            <Compass className="h-4 w-4" />
            <span className="relative z-10">Explore Resources</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.35), transparent 70%)",
              }}
            />
          </button>

          <button
            type="button"
            data-testid="cta-view-latest"
            onClick={onExplore}
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            View Latest Research
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.9 }}
          className="mt-14"
        >
          <CosmicSearch value={query} onChange={setQuery} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.4, duration: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-[0.35em]">Scroll to discover</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-8 w-[1px]"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.6), transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function EntranceDust() {
  const particles = React.useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        startX: (Math.random() - 0.5) * 120,
        startY: (Math.random() - 0.5) * 100,
        delay: Math.random() * 1.6,
        size: 1 + Math.random() * 2.5,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{
            x: `${p.startX}vw`,
            y: `${p.startY}vh`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.4],
          }}
          transition={{
            duration: 3.2,
            delay: p.delay,
            ease: [0.6, 0.05, 0.2, 1],
          }}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.id % 3 === 0 ? "#42D4FF" : p.id % 3 === 1 ? "#A855F7" : "#ffffff",
            boxShadow:
              p.id % 3 === 0
                ? "0 0 10px rgba(66,212,255,0.9)"
                : "0 0 10px rgba(168,85,247,0.9)",
          }}
        />
      ))}
    </div>
  );
}
