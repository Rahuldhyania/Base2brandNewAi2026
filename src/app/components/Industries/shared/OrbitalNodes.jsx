import React, { useMemo } from "react";
import { m } from "framer-motion";


// Floating ecosystem nodes — abstract SVG with orbital rings and pulsing dots.
// Used in the industry hero and other accent areas.
export default function OrbitalNodes({
  className = "",
  nodes = [
    { label: "AI",       angle: 30,  ring: 1 },
    { label: "Data",     angle: 110, ring: 2 },
    { label: "Cloud",    angle: 200, ring: 1 },
    { label: "Workflow", angle: 280, ring: 2 },
    { label: "Citizens", angle: 340, ring: 3 },
    { label: "Decisions",angle: 70,  ring: 3 },
  ],
}) {
  // Position helper for ring nodes
  const sized = useMemo(() => {
    return nodes.map((n) => {
      const r = [0, 110, 175, 240][n.ring] ?? 175;
      const a = (n.angle * Math.PI) / 180;
      return { ...n, x: Math.cos(a) * r, y: Math.sin(a) * r };
    });
  }, [nodes]);


  return (
    <div className={`relative aspect-square w-full max-w-[560px] mx-auto ${className}`} aria-hidden="true">
      {/* Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[260, 350, 480].map((size, i) => (
          <m.div
            key={size}
            className="absolute rounded-full border border-white/8"
            style={{
              width: size,
              height: size,
              borderColor:
                i === 1
                  ? "color-mix(in srgb, var(--b2b-primary) 18%, transparent)"
                  : "rgba(255,255,255,0.07)",
              boxShadow:
                i === 1
                  ? "0 0 0 1px color-mix(in srgb, var(--b2b-primary) 12%, transparent)"
                  : "none",
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 80 + i * 22, ease: "linear", repeat: Infinity }}
          />
        ))}
      </div>


      {/* Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* <div className="w-24 h-24 rounded-full bg-white blur-2xl absolute inset-0 top-0" /> */}
          {/* <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-brand to-brand-600 shadow-[0_0_60px_-10px_rgba(244,123,82,0.7)] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white animate-pulse-soft" />
          </div> */}
        </div>
      </div>


      {/* Nodes */}
      <div className="absolute inset-0">
        {sized.map((n, idx) => (
          <div
            key={idx}
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{ transform: `translate(${n.x - 22}px, ${n.y - 22}px)` }}
          >
            <m.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative group"
            >
              <div
                className="absolute inset-0 rounded-full blur-md animate-pulse-soft"
                style={{ background: "color-mix(in srgb, var(--b2b-primary) 35%, transparent)" }}
              />
              <div
                className="relative w-11 h-11 rounded-full bg-ink-900/85 border border-white/10 backdrop-blur-md flex items-center justify-center text-[10px] uppercase tracking-widest2 text-white/80"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--b2b-primary) 10%, rgba(5,6,10,0.85))",
                  borderColor: "color-mix(in srgb, var(--b2b-primary) 18%, rgba(255,255,255,0.10))",
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                <span className="px-1">{n.label}</span>
              </div>
            </m.div>
          </div>
        ))}
      </div>
    </div>
  );
}