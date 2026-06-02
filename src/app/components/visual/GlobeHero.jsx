'use client';
import React, { useEffect, useRef, useCallback } from "react";
import createGlobe from "cobe";
import { cn } from "../../lib/utils";

/**
 * GlobeHero — premium cobe globe configured for Base2Brand:
 * deep space blue/black, orange markers + glow.
 */
export function GlobeHero({
  markers = defaultMarkers,
  className = "",
  speed = 0.0035,
  size = 600,
}) {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const handlePointerDown = useCallback((e) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    let globe = null;
    let animationId;
    let phi = 0;

    function init() {
      const width = canvas.offsetWidth || size;
      if (width === 0 || globe) return;

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.25,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 18000,
        mapBrightness: 5,
        baseColor: [0.18, 0.22, 0.35],
        markerColor: [1.0, 0.42, 0.0],
        glowColor: [1.0, 0.45, 0.1],
        markerElevation: 0.03,
        markers: markers.map((m) => ({ location: m.location, size: m.size ?? 0.07 })),
      });

      function animate() {
        if (!isPausedRef.current) phi += speed;
        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.25 + thetaOffsetRef.current + dragOffset.current.theta,
        });
        animationId = requestAnimationFrame(animate);
      }
      animate();
      setTimeout(() => canvas && (canvas.style.opacity = "1"));
    }

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
  }, [markers, speed, size]);

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={handlePointerDown}
      data-testid="globe-hero-canvas"
      className={cn("aspect-square w-full", className)}
      style={{
        cursor: "grab",
        opacity: 0,
        transition: "opacity 1.4s ease",
        touchAction: "none",
      }}
    />
  );
}

const defaultMarkers = [
  { location: [28.6139, 77.209], size: 0.1 }, // New Delhi
  { location: [30.7333, 76.7794], size: 0.07 }, // Chandigarh
  { location: [12.9716, 77.5946], size: 0.08 }, // Bengaluru
  { location: [40.7608, -111.891], size: 0.08 }, // Utah
  { location: [43.6532, -79.3832], size: 0.07 }, // Toronto
  { location: [52.6369, -1.1398], size: 0.07 }, // Leicester
  { location: [-33.8688, 151.2093], size: 0.08 }, // Sydney
  { location: [6.5244, 3.3792], size: 0.07 }, // Lagos
];
