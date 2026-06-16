import React from "react";

/**
 * Hero background — Base2Brand Software Red theme.
 * Pure CSS radial gradients — zero WebGL, zero GPU load.
 */
const WarpBackground = ({ opacity = 0.15, className = "" }) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      {/* Primary red glow — top-left */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,59,48,0.18) 0%, transparent 70%)",
          opacity,
        }}
      />
      {/* Secondary glow — bottom-right */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,59,48,0.12) 0%, transparent 65%)",
          opacity,
        }}
      />
      {/* Vignette + base wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050814_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050814]/30 via-transparent to-[#050814]" />
    </div>
  );
};

export default WarpBackground;
