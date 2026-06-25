import React from "react";

export default function GridBackground({
  intensity = 0.5,
  showSpot = true,
  className = "",
}) {
  const primary = "var(--b2b-primary)";

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 grid-bg-fine"
        style={{
          opacity: 0.25 * intensity,
          backgroundImage: `
            linear-gradient(rgba(var(--b2b-primary-rgb, 255, 106, 0), 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--b2b-primary-rgb, 255, 106, 0), 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute inset-0 grid-bg"
        style={{
          opacity: 0.35 * intensity,
          backgroundImage: `
            linear-gradient(rgba(var(--b2b-primary-rgb, 255, 106, 0), 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--b2b-primary-rgb, 255, 106, 0), 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />
      {showSpot && (
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.9 * intensity,
            background: `radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--b2b-primary) 22%, transparent), transparent 60%)`,
          }}
        />
      )}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background: `linear-gradient(to bottom, var(--b2b-bg, #05060a), transparent)`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: `linear-gradient(to top, var(--b2b-bg, #05060a), transparent)`,
        }}
      />
    </div>
  );
}