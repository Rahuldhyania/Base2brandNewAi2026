import { motion, useReducedMotion } from "framer-motion";
import Rocket from "@/components/site/Rocket";

/**
 * NeuralCommandCenter
 * Living enterprise AI command center.
 * - Central neural core (subtle purple)
 * - Concentric orbital rings (slow, opposing rotations)
 * - 10 tech-label nodes positioned along orbits
 * - Connection spokes + tangential arcs (desaturated whites + restrained purple)
 * - Orbiting Base2Brand rocket on outer ring (subtle, identity tie-in)
 */

const NODES = [
  { label: "GPT-5", angle: 12, radius: 38, accent: true },
  { label: "Claude", angle: 70, radius: 42 },
  { label: "Gemini", angle: 125, radius: 39, accent: true },
  { label: "Llama", angle: 178, radius: 43 },
  { label: "MCP", angle: 220, radius: 36, accent: true },
  { label: "Agents", angle: 268, radius: 41 },
  { label: "Voice AI", angle: 312, radius: 37 },
  { label: "RAG", angle: 350, radius: 44, accent: true },
  { label: "Automation", angle: 50, radius: 60 },
  { label: "Knowledge", angle: 200, radius: 58 },
];

const polarToXY = (angleDeg, radiusPct) => {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: 50 + radiusPct * Math.cos(a),
    y: 50 + radiusPct * Math.sin(a),
  };
};

const NeuralCommandCenter = () => {
  const reduce = useReducedMotion();

  return (
    <div
      data-testid="neural-command-center"
      className="relative aspect-square w-full max-w-[640px] mx-auto"
    >
      {/* Backdrop radial glow — reduced intensity */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),rgba(3,3,10,0)_60%)]" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),rgba(3,3,10,0)_45%)]" />

      {/* SVG layers */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradAccent" x1="0" x2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Connection spokes from core to nodes */}
        {NODES.map((n, i) => {
          const { x, y } = polarToXY(n.angle, n.radius);
          return (
            <line
              key={`spoke-${i}`}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke={n.accent ? "url(#lineGradAccent)" : "url(#lineGrad)"}
              strokeWidth="0.18"
            />
          );
        })}

        {/* Tangential inter-node arcs (subset) */}
        {NODES.slice(0, 8).map((n, i) => {
          const next = NODES[(i + 1) % 8];
          const a = polarToXY(n.angle, n.radius);
          const b = polarToXY(next.angle, next.radius);
          return (
            <line
              key={`arc-${i}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="0.1"
            />
          );
        })}

        {/* Orbital rings — dual layer: neutral + faint violet */}
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="0.12"
          strokeDasharray="0.6 0.9"
        />
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="rgba(168,85,247,0.10)"
          strokeWidth="0.12"
          strokeDasharray="0.4 1.2"
        />
        <circle
          cx="50"
          cy="50"
          r="14"
          fill="none"
          stroke="rgba(192,132,252,0.28)"
          strokeWidth="0.18"
        />

        {/* Rotating dashed rings */}
        <g
          style={{
            transformOrigin: "50% 50%",
            animation: reduce ? "none" : "b2b-orbit-slow 80s linear infinite",
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="22"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.15"
            strokeDasharray="1 2"
          />
        </g>
        <g
          style={{
            transformOrigin: "50% 50%",
            animation: reduce
              ? "none"
              : "b2b-orbit-slow 120s linear infinite reverse",
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="29"
            fill="none"
            stroke="rgba(192,132,252,0.14)"
            strokeWidth="0.12"
            strokeDasharray="0.5 2.5"
          />
        </g>

        {/* Outer orbit (rocket path) */}
        <circle
          cx="50"
          cy="50"
          r="50"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.12"
        />

        {/* Central core */}
        <circle cx="50" cy="50" r="6" fill="url(#coreGrad)" />
        <circle
          cx="50"
          cy="50"
          r="2.5"
          fill="#fff"
          opacity="0.85"
          style={{ filter: "drop-shadow(0 0 3px #C084FC)" }}
        />
      </svg>

      {/* Orbiting rocket — base2brand identity tie-in */}
      <div
        className="absolute inset-0"
        style={{
          transformOrigin: "50% 50%",
          animation: reduce ? "none" : "b2b-orbit-slow 45s linear infinite",
        }}
      >
        <div
          className="absolute"
          style={{
            top: "0%",
            left: "50%",
            transform: "translate(-50%, -10%) rotate(90deg)",
          }}
        >
          <Rocket size={18} color="#ffffff" flame="#A855F7" />
        </div>
      </div>

      {/* Central core label — positioned just below the central glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 mt-9 text-center pointer-events-none">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-[#C084FC] drop-shadow-[0_1px_4px_rgba(3,3,10,0.9)]">
          Neural Core
        </div>
        <div className="font-display text-sm font-semibold text-white mt-0.5 drop-shadow-[0_2px_6px_rgba(3,3,10,0.95)]">
          B2B AI
        </div>
      </div>

      {/* Node chips */}
      {NODES.map((n, i) => {
        const { x, y } = polarToXY(n.angle, n.radius);
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            data-testid={`neural-node-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div
              className={`px-2.5 py-1 rounded-full text-xs font-mono tracking-wider whitespace-nowrap backdrop-blur-md ${
                n.accent
                  ? "bg-[#8B5CF6]/12 border border-[#8B5CF6]/35 text-[#E9D5FF] shadow-[0_0_12px_-3px_rgba(139,92,246,0.5)]"
                  : "bg-white/[0.04] border border-white/12 text-white/80"
              }`}
            >
              <span
                className={`inline-block w-1 h-1 rounded-full mr-1.5 align-middle ${
                  n.accent ? "bg-[#A855F7]" : "bg-white/60"
                }`}
              />
              {n.label}
            </div>
          </motion.div>
        );
      })}

      {/* Floating soft sparks */}
      {!reduce &&
        [...Array(4)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute w-1 h-1 rounded-full bg-[#C084FC] shadow-[0_0_8px_2px_rgba(192,132,252,0.5)]"
            initial={{
              x: `${20 + Math.random() * 60}%`,
              y: `${20 + Math.random() * 60}%`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.7, 0],
              y: [`${50}%`, `${30 + Math.random() * 40}%`],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
};

export default NeuralCommandCenter;
