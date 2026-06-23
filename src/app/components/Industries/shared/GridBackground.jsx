import React from "react";

// Subtle, layered grid background — used to evoke the dark space theme.
// Pass `intensity` between 0 (very subtle) and 1 (strong).
export default function GridBackground({
  intensity = 0.5,
  showSpot = true,
  className = "",
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {/* fine grid */}
      <div className="absolute inset-0 grid-bg-fine" style={{ opacity: 0.25 * intensity }} />
      {/* coarse grid */}
      <div className="absolute inset-0 grid-bg" style={{ opacity: 0.35 * intensity }} />
      {/* warm radial */}
      {showSpot && <div className="absolute inset-0 radial-spot" style={{ opacity: 0.9 * intensity }} />}
      {/* edge fades */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
