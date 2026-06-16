import React from "react";

// Volumetric wave animation background
// Inspired by 21st.dev wave-animation but recolored amber (#FFB800),
// 20% opacity, slow speed (~35% slower), soft blur — enterprise spatial feel.
export default function WaveBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050814]"
    >
      {/* Deep navy radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(255,184,0,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,rgba(255,184,0,0.06),transparent_50%)]" />

      {/* SVG wave field — amber 20% opacity */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.22] mix-blend-screen"
        style={{ filter: "blur(8px)" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-amber" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFB800" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFB800" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFC93C" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-amber-2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFB800" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFB800" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFB800" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[...Array(18)].map((_, i) => {
          const y = 60 + i * 42;
          const dur = 14 + (i % 5) * 3;
          return (
            <path
              key={i}
              d={`M0 ${y} C 200 ${y - 22}, 400 ${y + 22}, 600 ${y} S 1000 ${y - 22}, 1200 ${y} S 1600 ${y + 22}, 1600 ${y}`}
              fill="none"
              stroke={i % 2 === 0 ? "url(#wave-amber)" : "url(#wave-amber-2)"}
              strokeWidth="1.1"
              opacity={0.55 + (i % 4) * 0.1}
            >
              <animate
                attributeName="d"
                dur={`${dur}s`}
                repeatCount="indefinite"
                values={`
                  M0 ${y} C 200 ${y - 22}, 400 ${y + 22}, 600 ${y} S 1000 ${y - 22}, 1200 ${y} S 1600 ${y + 22}, 1600 ${y};
                  M0 ${y} C 200 ${y + 22}, 400 ${y - 22}, 600 ${y} S 1000 ${y + 22}, 1200 ${y} S 1600 ${y - 22}, 1600 ${y};
                  M0 ${y} C 200 ${y - 22}, 400 ${y + 22}, 600 ${y} S 1000 ${y - 22}, 1200 ${y} S 1600 ${y + 22}, 1600 ${y}
                `}
              />
            </path>
          );
        })}
      </svg>

      {/* Volumetric blobs for spatial depth */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#FFB800]/[0.06] blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[700px] h-[700px] rounded-full bg-[#FFB800]/[0.05] blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#FFC93C]/[0.04] blur-[120px]" />

      {/* Fine grid overlay */}
      <div className="absolute inset-0 spatial-grid opacity-60" />
    </div>
  );
}
