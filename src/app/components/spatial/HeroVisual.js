import React from "react";
import { m } from "framer-motion";

// CSS/SVG-built spatial visual: floating amber holographic panels,
// orbital rings, vision-pro glass surfaces and digital twin wireframe.
// Pure CSS — no external images.
export default function HeroVisual() {
  return (
    <div className="relative aspect-square w-full md:max-w-[560px] mx-auto">
      {/* Backdrop subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.18),transparent_60%)]" />

      {/* Outer orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[92%] h-[92%] rounded-full border border-[#FFB800]/15 animate-orbit-slow">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FFB800] shadow-[0_0_18px_rgba(255,184,0,0.8)]" />
        </div>
        <div className="absolute w-[78%] h-[78%] rounded-full border border-[#FFB800]/10 animate-orbit-reverse">
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FFC93C] shadow-[0_0_12px_rgba(255,201,60,0.8)]" />
        </div>
        <div className="absolute w-[64%] h-[64%] rounded-full border border-dashed border-[#FFB800]/20 animate-orbit-slow" />
      </div>

      {/* Center digital-twin wireframe globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-[44%] h-[44%] text-[#FFB800]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <defs>
            <radialGradient id="globe-fill" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFB800" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFB800" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#globe-fill)" />
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="0.8"
          />
          {[...Array(6)].map((_, i) => (
            <ellipse
              key={`v${i}`}
              cx="100"
              cy="100"
              rx={80 - i * 4}
              ry="80"
              stroke="currentColor"
              strokeOpacity={0.18 + i * 0.04}
              strokeWidth="0.5"
              fill="none"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
          {[...Array(7)].map((_, i) => {
            const ry = 12 + i * 11;
            return (
              <ellipse
                key={`h${i}`}
                cx="100"
                cy="100"
                rx="80"
                ry={ry}
                stroke="currentColor"
                strokeOpacity="0.22"
                strokeWidth="0.5"
                fill="none"
              />
            );
          })}
          {/* Data points */}
          {[
            [60, 70],
            [130, 60],
            [78, 130],
            [150, 110],
            [110, 90],
            [40, 110],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="3" fill="#FFB800" />
              <circle
                cx={cx}
                cy={cy}
                r="3"
                fill="none"
                stroke="#FFB800"
                strokeOpacity="0.6"
                strokeWidth="0.6"
              >
                <animate
                  attributeName="r"
                  values="3;8;3"
                  dur={`${2 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.6;0;0.6"
                  dur={`${2 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </svg>
      </div>

      {/* Floating glass panel — top-left */}
      <m.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-[8%] left-[2%] w-44 rounded-2xl glass-panel p-4 animate-float-soft"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#FFB800]/90">
            Twin · Live
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse-amber" />
        </div>
        <div className="text-white text-lg font-semibold font-display">98.4%</div>
        <div className="text-white/50 text-[10px]">Asset uptime</div>
        <div className="mt-3 flex gap-1">
          {[6, 9, 4, 11, 7, 10, 12, 8].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-[#FFB800]/30 to-[#FFC93C]/80"
              style={{ height: `${h * 2}px` }}
            />
          ))}
        </div>
      </m.div>

      {/* Floating glass panel — right */}
      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="absolute top-[28%] right-[0%] w-44 md:w-52 rounded-2xl glass-panel p-2 md:p-4 animate-float-soft-2"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-md bg-[#FFB800]/15 border border-[#FFB800]/30 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-sm bg-[#FFB800]" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/70">
            visionOS Module
          </span>
        </div>
        <div className="text-white font-display text-sm md:text-base leading-tight">
          Maintenance Procedure 04
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[62%] bg-gradient-to-r from-[#FFB800] to-[#FFC93C]" />
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-white/50">
          <span>Step 3 / 8</span>
          <span>62% complete</span>
        </div>
      </m.div>

      {/* Floating glass panel — bottom */}
      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-[6%] left-0 md:left-[10%] w-56 rounded-2xl glass-panel p-4 animate-float-soft"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">
            Spatial Session
          </span>
          <span className="text-[10px] text-[#FFB800]">3 active</span>
        </div>
        <div className="flex -space-x-2 mb-3">
          {["#FFB800", "#FFC93C", "#FFE89E"].map((c, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full border-2 border-[#050814]"
              style={{
                background: `linear-gradient(135deg, ${c}, rgba(255,255,255,0.4))`,
              }}
            />
          ))}
        </div>
        <div className="text-white text-xs leading-relaxed">
          Distributed review — assembly line, Plant 12.
        </div>
      </m.div>

      {/* Subtle ambient corner brackets */}
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#FFB800]/30" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#FFB800]/30" />
    </div>
  );
}
