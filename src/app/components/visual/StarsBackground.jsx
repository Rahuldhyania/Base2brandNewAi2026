'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

const LAYER_CONFIG = [
  { countRatio: 0.55, size: 1, durationScale: 1, warm: false },
  { countRatio: 0.33, size: 1.5, durationScale: 1.5, warm: false },
  { countRatio: 0.12, size: 2, durationScale: 2, warm: true },
];

const TOTAL_STARS_DESKTOP = 320;
const TOTAL_STARS_MOBILE = 160;
const MAX_DPR = 1.5;
const PARALLAX_SMOOTHING = 0.08;

function buildLayers(width, height, totalStars, starColor) {
  return LAYER_CONFIG.map((layer) => {
    const count = Math.max(8, Math.round(totalStars * layer.countRatio));
    const stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      alpha: 0.35 + Math.random() * 0.65,
    }));

    return {
      ...layer,
      stars,
      offset: 0,
      color: layer.warm ? '#ffd9b3' : starColor,
    };
  });
}

export function StarsBackground({
  children,
  className,
  factor = 0.02,
  speed = 90,
  starColor = '#ffffff',
  ...props
}) {
  const containerRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const layersRef = React.useRef([]);
  const frameRef = React.useRef(0);
  const visibleRef = React.useRef(true);
  const reducedMotionRef = React.useRef(false);
  const pointerFineRef = React.useRef(false);
  const parallaxRef = React.useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const sizeRef = React.useRef({ width: 0, height: 0, dpr: 1 });
  const speedRef = React.useRef(speed);
  const factorRef = React.useRef(factor);
  const starColorRef = React.useRef(starColor);

  speedRef.current = speed;
  factorRef.current = factor;
  starColorRef.current = starColor;

  const drawFrame = React.useCallback((deltaMs = 0) => {
    const canvas = canvasRef.current;
    const { width, height, dpr } = sizeRef.current;
    if (!canvas || width === 0 || height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parallax = parallaxRef.current;
    parallax.x += (parallax.targetX - parallax.x) * PARALLAX_SMOOTHING;
    parallax.y += (parallax.targetY - parallax.y) * PARALLAX_SMOOTHING;

    if (!reducedMotionRef.current && deltaMs > 0) {
      const travelMs = Math.max(speedRef.current, 1) * 1000;
      for (const layer of layersRef.current) {
        const driftPerMs = 2000 / (travelMs * layer.durationScale);
        layer.offset = (layer.offset + driftPerMs * deltaMs) % height;
      }
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    layersRef.current.forEach((layer, layerIndex) => {
      const depth = layerIndex + 1;
      const px = parallax.x * depth * 0.35;
      const py = parallax.y * depth * 0.35;

      ctx.fillStyle = layer.color;

      for (const star of layer.stars) {
        let y = star.y + layer.offset;
        if (y > height) y -= height;
        if (y < 0) y += height;

        ctx.globalAlpha = star.alpha;
        ctx.fillRect(star.x + px, y + py, layer.size, layer.size);
      }
    });

    ctx.globalAlpha = 1;
  }, []);

  const resize = React.useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const rect = container.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

    sizeRef.current = { width, height, dpr };
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const totalStars =
      width < 768 ? TOTAL_STARS_MOBILE : TOTAL_STARS_DESKTOP;
    layersRef.current = buildLayers(width, height, totalStars, starColorRef.current);

  }, []);

  React.useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    pointerFineRef.current = window.matchMedia('(pointer: fine)').matches;

    const container = containerRef.current;
    if (!container) return;

    resize();

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry?.isIntersecting ?? true;
      },
      { rootMargin: '120px' }
    );
    intersectionObserver.observe(container);

    let lastTime = 0;

    const tick = (time) => {
      frameRef.current = requestAnimationFrame(tick);

      if (!visibleRef.current) return;

      const deltaMs = lastTime ? time - lastTime : 0;
      lastTime = time;

      drawFrame(reducedMotionRef.current ? 0 : deltaMs);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [drawFrame, resize]);

  React.useEffect(() => {
    resize();
    drawFrame(0);
  }, [starColor, resize, drawFrame]);

  const handleMouseMove = React.useCallback((e) => {
    if (!pointerFineRef.current || reducedMotionRef.current) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    parallaxRef.current.targetX = -(e.clientX - centerX) * factorRef.current;
    parallaxRef.current.targetY = -(e.clientY - centerY) * factorRef.current;
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    parallaxRef.current.targetX = 0;
    parallaxRef.current.targetY = 0;
  }, []);

  return (
    <div
      ref={containerRef}
      data-testid="stars-background"
      className={cn(
        'relative w-full h-full overflow-hidden',
        'bg-[radial-gradient(ellipse_at_bottom,_#0a0e2a_0%,_#02030a_70%,_#000000_100%)]',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
