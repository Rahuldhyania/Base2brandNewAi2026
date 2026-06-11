"use client";
import React, { useEffect, useRef } from "react";

/**
 * Cosmic starfield background — a canvas of softly twinkling stars + a few
 * brighter accent points. Used across the Base2Brand platform as the global
 * background DNA. Respects prefers-reduced-motion.
 *
 * `accent` controls the colour of the brighter stars: orange (homepage),
 * purple (AI), or blue (Apple Ecosystem).
 */
export default function Starfield({
  accent = "blue",
  density = 0.00018,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let stars = [];
    let raf;

    const accentColor =
      accent === "orange"
        ? "rgba(255, 106, 44, "
        : accent === "purple"
        ? "rgba(168, 85, 247, "
        : "rgba(90, 200, 250, ";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);

      const count = Math.floor(window.innerWidth * window.innerHeight * density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: 0.0006 + Math.random() * 0.0012,
        accent: Math.random() < 0.08,
      }));
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        const flicker = reducedMotion ? 1 : 0.6 + Math.sin(t * s.speed + s.phase) * 0.4;
        const alpha = s.a * flicker;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.accent ? accentColor + alpha + ")" : `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });
      if (!reducedMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    if (reducedMotion) draw(0);
    else raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [accent, density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
    />
  );
}
