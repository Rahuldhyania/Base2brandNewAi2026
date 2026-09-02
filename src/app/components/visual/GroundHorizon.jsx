'use client';
import React from "react";
import { m } from "framer-motion";

/**
 * Dark, rocky lunar-style horizon that sits between FinalCTA and Footer.
 * Creates the visual sensation that the rocket has descended through space
 * and touched down on terrain — finishing the user's scroll journey.
 *
 * Layers:
 *  1. Subtle orange atmosphere glow along the horizon line.
 *  2. Distant mountain silhouette (lighter, hazier).
 *  3. Foreground rocky terrain silhouette (darker, sharper).
 *  4. A pulsing "landing pad" glow centred on the page.
 */
export function GroundHorizon() {
  return (
    <div
      data-testid="ground-horizon"
      aria-hidden
      className="relative w-full h-[180px] sm:h-[240px] pointer-events-none select-none -mt-8 z-10"
    >
      {/* horizon glow */}
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(255,106,0,0.25), rgba(255,106,0,0.06) 45%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      {/* landing pad pulse */}
      <m.div
        className="absolute left-1/2 -translate-x-1/2 bottom-[22%] h-8 w-8 rounded-full"
        animate={{ opacity: [0.35, 0.85, 0.35], scale: [1, 1.25, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "rgba(255,106,0,0.8)",
          boxShadow:
            "0 0 30px 6px rgba(255,106,0,0.55), 0 0 80px 18px rgba(255,106,0,0.25)",
          filter: "blur(1px)",
        }}
      />

      {/* distant mountains (hazier, lighter) */}
      <svg
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 w-full h-full"
      >
        <defs>
          <linearGradient id="ground-distant" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0a0e2a" stopOpacity="0.0" />
            <stop offset="40%" stopColor="#0a0e2a" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#04061a" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="ground-near" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#02030a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* distant ridge */}
        <path
          d="M0,160 L80,140 L180,150 L260,120 L360,135 L460,110 L560,128 L660,108 L780,130 L900,118 L1020,138 L1140,120 L1260,142 L1360,128 L1440,148 L1440,240 L0,240 Z"
          fill="url(#ground-distant)"
        />
        {/* hairline orange edge along distant ridge */}
        <path
          d="M0,160 L80,140 L180,150 L260,120 L360,135 L460,110 L560,128 L660,108 L780,130 L900,118 L1020,138 L1140,120 L1260,142 L1360,128 L1440,148"
          fill="none"
          stroke="rgba(255,106,0,0.45)"
          strokeWidth="1"
          style={{ filter: "drop-shadow(0 0 6px rgba(255,106,0,0.6))" }}
        />

        {/* near rocky terrain */}
        <path
          d="M0,210 L60,200 L120,212 L200,196 L280,208 L360,190 L450,206 L540,192 L640,210 L740,198 L840,214 L940,200 L1040,212 L1140,198 L1240,214 L1340,202 L1440,212 L1440,240 L0,240 Z"
          fill="url(#ground-near)"
        />
      </svg>
    </div>
  );
}

export default GroundHorizon;
