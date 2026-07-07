import React from "react";

/**
 * Rocket — premium 2D SVG rocket.
 * White body, orange nose cone + engine flame, subtle metallic shading.
 * Exhaust particles rendered as animated CSS dots for cheap GPU cost.
 *
 * The rocket faces "up" natively (0deg = pointing +Y towards top).
 * GSAP MotionPath will rotate it to follow the orbital path tangent.
 */
export default function Rocket({ size = 48, testId = "rocket-navigator", speed = 0 }) {
  // Flame amplification based on speed (0..1)
  const flameScale = 1 + Math.min(speed, 1) * 0.35;
  const glowOpacity = 0.35 + Math.min(speed, 1) * 0.45;

  return (
    <div
      data-testid={testId}
      style={{
        width: size,
        height: size * 1.4,
        pointerEvents: "none",
        willChange: "transform",
        transformOrigin: "50% 50%",
      }}
    >
      {/* Ambient orange glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-40%",
          background:
            "radial-gradient(closest-side, rgba(244,123,82,0.55) 0%, rgba(244,123,82,0.18) 40%, rgba(244,123,82,0) 70%)",
          opacity: glowOpacity,
          filter: "blur(6px)",
          borderRadius: "50%",
        }}
      />

      <svg
        viewBox="0 0 64 96"
        width="100%"
        height="100%"
        style={{ position: "relative", overflow: "visible" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Body gradient — soft metallic white */}
          <linearGradient id="body-grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#DEDEE4" />
            <stop offset="0.4" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#B8B8C2" />
          </linearGradient>
          <linearGradient id="nose-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#FF9A6E" />
            <stop offset="0.6" stopColor="#F47B52" />
            <stop offset="1" stopColor="#C55A34" />
          </linearGradient>
          <linearGradient id="flame-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#FFD9A0" />
            <stop offset="0.35" stopColor="#FF9C4A" />
            <stop offset="0.75" stopColor="#F47B52" />
            <stop offset="1" stopColor="rgba(244,123,82,0)" />
          </linearGradient>
          <radialGradient id="window-grad" cx="0.5" cy="0.4" r="0.6">
            <stop offset="0" stopColor="#FFC9A8" />
            <stop offset="0.5" stopColor="#F47B52" />
            <stop offset="1" stopColor="#7C2E12" />
          </radialGradient>
          <filter id="rocket-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="0.6" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Engine flame — bottom */}
        <g style={{ transformOrigin: "32px 78px", transform: `scaleY(${flameScale})` }}>
          <path
            d="M27 74 Q32 96 37 74 Q34 82 32 92 Q30 82 27 74 Z"
            fill="url(#flame-grad)"
            style={{ animation: "flame-flicker 320ms ease-in-out infinite" }}
          />
          <path
            d="M29.5 74 Q32 88 34.5 74 Q33 80 32 86 Q31 80 29.5 74 Z"
            fill="#FFE1B8"
            opacity="0.9"
          />
        </g>

        {/* Fins */}
        <path
          d="M14 60 L22 52 L22 72 L14 72 Z"
          fill="url(#body-grad)"
          stroke="#8A8A94"
          strokeWidth="0.5"
          filter="url(#rocket-shadow)"
        />
        <path
          d="M50 60 L42 52 L42 72 L50 72 Z"
          fill="url(#body-grad)"
          stroke="#8A8A94"
          strokeWidth="0.5"
          filter="url(#rocket-shadow)"
        />
        {/* Fin tips — orange accent */}
        <path d="M14 60 L22 60 L22 72 L14 72 Z" fill="rgba(244,123,82,0.15)" />
        <path d="M50 60 L42 60 L42 72 L50 72 Z" fill="rgba(244,123,82,0.15)" />

        {/* Body */}
        <path
          d="M22 30 Q22 22 32 8 Q42 22 42 30 L42 72 Q42 76 38 76 L26 76 Q22 76 22 72 Z"
          fill="url(#body-grad)"
          stroke="#7B7B85"
          strokeWidth="0.6"
          filter="url(#rocket-shadow)"
        />

        {/* Nose cone */}
        <path
          d="M22 30 Q22 22 32 8 Q42 22 42 30 Z"
          fill="url(#nose-grad)"
        />
        {/* Nose highlight */}
        <path
          d="M27 26 Q28 18 32 10 Q30 20 29 30 Z"
          fill="rgba(255,255,255,0.28)"
        />

        {/* Metallic band */}
        <rect x="22" y="30" width="20" height="1.5" fill="#7B7B85" opacity="0.6" />
        <rect x="22" y="60" width="20" height="1.5" fill="#7B7B85" opacity="0.5" />

        {/* Cockpit window */}
        <circle cx="32" cy="42" r="6" fill="url(#window-grad)" />
        <circle cx="32" cy="42" r="6" fill="none" stroke="#5B2A15" strokeWidth="1" />
        <circle cx="30" cy="40" r="1.6" fill="#FFE1CB" opacity="0.85" />

        {/* Body highlight strip */}
        <path
          d="M25 32 Q25 26 30 14 L30 72 Q26 72 25 68 Z"
          fill="rgba(255,255,255,0.22)"
        />
        {/* Body shadow strip */}
        <path
          d="M39 32 Q39 26 34 14 L34 72 Q38 72 39 68 Z"
          fill="rgba(0,0,0,0.14)"
        />

        {/* Engine housing */}
        <rect x="24" y="72" width="16" height="4" rx="1" fill="#3A3A42" />
        <rect x="26" y="72" width="12" height="2" rx="0.5" fill="#1B1B22" />

        {/* Orange accent stripes */}
        <rect x="22" y="52" width="20" height="2" fill="#F47B52" />
      </svg>

      {/* Exhaust particles — pure CSS */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          bottom: "-6px",
          width: 20,
          height: 32,
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${30 + i * 10}%`,
              top: 0,
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: i % 2 === 0 ? "#FFB98A" : "#F47B52",
              opacity: 0.75,
              filter: "blur(0.4px)",
              animation: `exhaust-particle ${700 + i * 90}ms linear ${i * 90}ms infinite`,
              "--tx": `${(i - 2) * 3}px`,
              "--ty": `${18 + Math.min(speed, 1) * 14}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
