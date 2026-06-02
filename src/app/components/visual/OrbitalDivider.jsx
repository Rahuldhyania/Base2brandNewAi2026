import React from "react";
import { motion } from "framer-motion";

/**
 * Subtle elliptical orbit divider used between major sections.
 * Renders a thin orbit arc with a tiny travelling planet/dot — premium
 * space-themed without being overly sci-fi.
 *
 * Use sparingly: between Trust → Footprint, Solutions → Voices,
 * Innovation → Cases, Global → Insights.
 */
export function OrbitalDivider({
  variant = "wide",
  className = "",
  ariaLabel = "section divider",
}) {
  // viewBox + ellipse params per variant
  const cfg =
    variant === "tight"
      ? { vb: "0 0 800 60", rx: 360, ry: 18, cx: 400, cy: 30 }
      : { vb: "0 0 1200 80", rx: 560, ry: 24, cx: 600, cy: 40 };

  const orbitId = React.useId();

  return (
    <div
      role="presentation"
      aria-label={ariaLabel}
      data-testid={`orbital-divider-${variant}`}
      className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}
    >
      <svg
        viewBox={cfg.vb}
        preserveAspectRatio="none"
        className="block w-full h-[60px] sm:h-[80px]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={`orbit-grad-${orbitId}`} x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="35%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="50%" stopColor="rgba(255,106,0,0.55)" />
            <stop offset="65%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <radialGradient id={`orbit-glow-${orbitId}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,106,0,0.6)" />
            <stop offset="60%" stopColor="rgba(255,106,0,0.18)" />
            <stop offset="100%" stopColor="rgba(255,106,0,0)" />
          </radialGradient>
        </defs>

        {/* main orbit arc */}
        <ellipse
          cx={cfg.cx}
          cy={cfg.cy}
          rx={cfg.rx}
          ry={cfg.ry}
          fill="none"
          stroke={`url(#orbit-grad-${orbitId})`}
          strokeWidth="1"
          strokeDasharray="2 4"
        />

        {/* secondary inner orbit */}
        <ellipse
          cx={cfg.cx}
          cy={cfg.cy}
          rx={cfg.rx * 0.62}
          ry={cfg.ry * 0.55}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />

        {/* center accent */}
        <circle
          cx={cfg.cx}
          cy={cfg.cy}
          r="2.5"
          fill="#ff6a00"
          style={{ filter: "drop-shadow(0 0 4px rgba(255,106,0,0.8))" }}
        />
        <circle
          cx={cfg.cx}
          cy={cfg.cy}
          r="22"
          fill={`url(#orbit-glow-${orbitId})`}
          opacity="0.55"
        />

        {/* travelling planet — slow loop along the ellipse */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${cfg.cx}px ${cfg.cy}px` }}
        >
          <circle
            cx={cfg.cx + cfg.rx}
            cy={cfg.cy}
            r="2"
            fill="#ffffff"
            opacity="0.85"
          />
        </motion.g>
      </svg>
    </div>
  );
}

export default OrbitalDivider;
