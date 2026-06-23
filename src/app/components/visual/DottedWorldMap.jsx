'use client';
import React, { useMemo, useState, useEffect, useRef } from "react";
import DottedMap from "dotted-map";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * Premium dotted world map. Pins are rendered as SVG overlays on top of a
 * generated dotted basemap so we can animate orange glow markers + draw
 * orbit-style arcs between them (used in Global Presence section).
 */

// Convert lat/lng to projected x/y within the dotted-map viewBox.
// dotted-map uses an equirectangular-ish projection inside an 800x400 viewBox
// when height = 60. We mirror the same math the lib uses internally.
function project(lat, lng, w = 800, h = 400) {
  const x = ((lng + 180) / 360) * w;
  const y = ((90 - lat) / 180) * h;
  return { x, y };
}

// Quadratic bezier path from a -> b with a control point pulled "up" along
// the perpendicular for a soft orbital arc.
function arcPath(a, b, lift = 0.28) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  // perpendicular unit vector, biased upward
  const nx = -dy / (dist || 1);
  let ny = dx / (dist || 1);
  if (ny > 0) {
    ny = -ny; // ensure curves bow upward visually
  }
  const cx = mx + nx * dist * lift;
  const cy = my + ny * dist * lift;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

export function DottedWorldMap({
  className,
  locations = [],
  originIndex = 0,
  pinColor = "#ff6a00",
  dotColor = "rgba(255,255,255,0.18)",
}) {
  const svgBg = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: dotColor,
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [dotColor]);

  const points = locations.map((l) => ({
    ...l,
    ...project(l.lat, l.lng),
  }));
  const origin = points[originIndex];
  const others = points.filter((_, i) => i !== originIndex);

  const [hoverIdx, setHoverIdx] = useState(null);

  return (
    <div
      className={cn("relative w-full", className)}
      data-testid="dotted-world-map"
    >
      {/* Dotted base */}
      <div
        className="w-full"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: svgBg }}
        style={{ filter: "drop-shadow(0 0 25px rgba(255,106,0,0.05))" }}
      />

      {/* SVG overlay for arcs + pins */}
      <svg
        viewBox="0 0 800 400"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff6a00" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="pinGlow">
            <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff6a00" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Orbit arcs from origin -> each other location */}
        {origin &&
          others.map((p, i) => {
            const d = arcPath(origin, p);
            return (
              <g key={`arc-${p.city}`}>
                <motion.path
                  d={d}
                  stroke="url(#arcGrad)"
                  strokeWidth="1.2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.4, delay: 0.2 + i * 0.18, ease: "easeInOut" }}
                />
                {/* travelling pulse along arc */}
                <motion.circle
                  r="2.4"
                  fill="#ff6a00"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <animateMotion
                    dur={`${5 + i * 0.4}s`}
                    repeatCount="indefinite"
                    path={d}
                  />
                </motion.circle>
              </g>
            );
          })}

        {/* Pins */}
        {points.map((p, i) => (
          <g
            key={p.city}
            transform={`translate(${p.x} ${p.y})`}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
          >
            <circle r="18" fill="url(#pinGlow)" />
            <motion.circle
              r="3"
              fill={pinColor}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08, type: "spring" }}
            />
            <circle r="6" fill="none" stroke={pinColor} strokeOpacity="0.5" strokeWidth="0.8">
              <animate attributeName="r" values="3;9;3" dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.7;0;0.7" dur="2.6s" repeatCount="indefinite" />
            </circle>
            {/* label */}
            <g transform="translate(8 -8)">
              <text
                fontFamily="var(--font-manrope), sans-serif"
                fontSize="7"
                fill={hoverIdx === i ? "#ffffff" : "rgba(255,255,255,0.7)"}
                style={{ transition: "fill 0.2s" }}
              >
                {p.city}
              </text>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
