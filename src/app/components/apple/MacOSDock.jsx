import React, { useState, useRef, useCallback, useEffect } from "react";

/**
 * MacOS-style magnification dock — converted from the supplied TypeScript
 * component to JSX and adapted to the Base2Brand Apple Ecosystem design system.
 *
 * Functional surface preserved (cosine magnification, lerp, bounce on click,
 * responsive sizing). Accepts `apps` with `id`, `name`, and `icon` — where
 * `icon` may be a React node (preferred) or an image URL string.
 */
export default function MacOSDock({
  apps,
  onAppClick,
  openApps = [],
  className = "",
}) {
  const [mouseX, setMouseX] = useState(null);
  const [currentScales, setCurrentScales] = useState(() => apps.map(() => 1));
  const [currentPositions, setCurrentPositions] = useState([]);
  const dockRef = useRef(null);
  const iconRefs = useRef([]);
  const animationFrameRef = useRef(null);
  const lastMouseMoveTime = useRef(0);

  const getResponsiveConfig = useCallback(() => {
    if (typeof window === "undefined") {
      return { baseIconSize: 64, maxScale: 1.6, effectWidth: 240 };
    }
    const smaller = Math.min(window.innerWidth, window.innerHeight);
    if (smaller < 480) return { baseIconSize: Math.max(40, smaller * 0.08), maxScale: 1.4, effectWidth: smaller * 0.4 };
    if (smaller < 768) return { baseIconSize: Math.max(48, smaller * 0.07), maxScale: 1.5, effectWidth: smaller * 0.35 };
    if (smaller < 1024) return { baseIconSize: Math.max(56, smaller * 0.06), maxScale: 1.6, effectWidth: smaller * 0.3 };
    return { baseIconSize: Math.max(64, Math.min(80, smaller * 0.05)), maxScale: 1.8, effectWidth: 300 };
  }, []);

  const [config, setConfig] = useState(getResponsiveConfig);
  const { baseIconSize, maxScale, effectWidth } = config;
  const minScale = 1.0;
  const baseSpacing = Math.max(4, baseIconSize * 0.08);

  useEffect(() => {
    const handleResize = () => setConfig(getResponsiveConfig());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getResponsiveConfig]);

  const calculateTargetMagnification = useCallback(
    (mousePosition) => {
      if (mousePosition === null) return apps.map(() => minScale);
      return apps.map((_, index) => {
        const normalIconCenter = index * (baseIconSize + baseSpacing) + baseIconSize / 2;
        const minX = mousePosition - effectWidth / 2;
        const maxX = mousePosition + effectWidth / 2;
        if (normalIconCenter < minX || normalIconCenter > maxX) return minScale;
        const theta = ((normalIconCenter - minX) / effectWidth) * 2 * Math.PI;
        const cappedTheta = Math.min(Math.max(theta, 0), 2 * Math.PI);
        const scaleFactor = (1 - Math.cos(cappedTheta)) / 2;
        return minScale + scaleFactor * (maxScale - minScale);
      });
    },
    [apps, baseIconSize, baseSpacing, effectWidth, maxScale, minScale]
  );

  const calculatePositions = useCallback(
    (scales) => {
      let currentX = 0;
      return scales.map((scale) => {
        const scaledWidth = baseIconSize * scale;
        const centerX = currentX + scaledWidth / 2;
        currentX += scaledWidth + baseSpacing;
        return centerX;
      });
    },
    [baseIconSize, baseSpacing]
  );

  useEffect(() => {
    const initialScales = apps.map(() => minScale);
    setCurrentScales(initialScales);
    setCurrentPositions(calculatePositions(initialScales));
  }, [apps, calculatePositions, minScale, config]);

  const animateToTarget = useCallback(() => {
    const targetScales = calculateTargetMagnification(mouseX);
    const targetPositions = calculatePositions(targetScales);
    const lerpFactor = mouseX !== null ? 0.2 : 0.12;

    setCurrentScales((prev) => prev.map((s, i) => s + (targetScales[i] - s) * lerpFactor));
    setCurrentPositions((prev) => prev.map((p, i) => p + (targetPositions[i] - p) * lerpFactor));

    animationFrameRef.current = requestAnimationFrame(animateToTarget);
  }, [mouseX, calculateTargetMagnification, calculatePositions]);

  useEffect(() => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(animateToTarget);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [animateToTarget]);

  const handleMouseMove = useCallback(
    (e) => {
      const now = performance.now();
      if (now - lastMouseMoveTime.current < 16) return;
      lastMouseMoveTime.current = now;
      if (dockRef.current) {
        const rect = dockRef.current.getBoundingClientRect();
        const padding = Math.max(8, baseIconSize * 0.12);
        setMouseX(e.clientX - rect.left - padding);
      }
    },
    [baseIconSize]
  );

  const handleMouseLeave = useCallback(() => setMouseX(null), []);

  const handleAppClick = (appId, index) => {
    const el = iconRefs.current[index];
    if (el) {
      const bounce = Math.max(-8, -baseIconSize * 0.15);
      el.style.transition = "transform 0.22s cubic-bezier(0.16,1,0.3,1)";
      el.style.transform = `translateY(${bounce}px)`;
      setTimeout(() => { el.style.transform = "translateY(0px)"; }, 200);
    }
    onAppClick?.(appId);
  };

  const contentWidth = currentPositions.length
    ? Math.max(...currentPositions.map((pos, i) => pos + (baseIconSize * currentScales[i]) / 2))
    : apps.length * (baseIconSize + baseSpacing) - baseSpacing;

  const padding = Math.max(8, baseIconSize * 0.12);

  return (
    <div
      ref={dockRef}
      className={`backdrop-blur-2xl ${className}`}
      style={{
        width: `${contentWidth + padding * 2}px`,
        background: "linear-gradient(180deg, rgba(20,28,40,0.78) 0%, rgba(10,16,28,0.78) 100%)",
        borderRadius: `${Math.max(16, baseIconSize * 0.4)}px`,
        border: "1px solid rgba(90,200,250,0.18)",
        boxShadow: `
          0 ${Math.max(8, baseIconSize * 0.15)}px ${Math.max(28, baseIconSize * 0.5)}px rgba(0,0,0,0.55),
          0 0 60px -10px rgba(10,132,255,0.35),
          inset 0 1px 0 rgba(255,255,255,0.08),
          inset 0 -1px 0 rgba(0,0,0,0.4)
        `,
        padding: `${padding}px`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative" style={{ height: `${baseIconSize}px`, width: "100%" }}>
        {apps.map((app, index) => {
          const scale = currentScales[index];
          const position = currentPositions[index] || 0;
          const scaledSize = baseIconSize * scale;

          return (
            <div
              key={app.id}
              ref={(el) => { iconRefs.current[index] = el; }}
              className="absolute cursor-pointer flex flex-col items-center justify-end"
              data-testid={`apple-hero-dock-app-${app.id}`}
              title={app.name}
              onClick={() => handleAppClick(app.id, index)}
              style={{
                left: `${position - scaledSize / 2}px`,
                bottom: "0px",
                width: `${scaledSize}px`,
                height: `${scaledSize}px`,
                transformOrigin: "bottom center",
                zIndex: Math.round(scale * 10),
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center rounded-[22%] overflow-hidden"
                style={{
                  background: app.bg || "linear-gradient(135deg,#0A84FF,#5AC8FA)",
                  boxShadow: scale > 1.2
                    ? "0 12px 28px rgba(0,0,0,0.55), 0 0 24px rgba(10,132,255,0.45)"
                    : "0 6px 14px rgba(0,0,0,0.45)",
                  filter: `drop-shadow(0 ${scale > 1.2 ? Math.max(2, baseIconSize * 0.05) : Math.max(1, baseIconSize * 0.03)}px ${
                    scale > 1.2 ? Math.max(4, baseIconSize * 0.1) : Math.max(2, baseIconSize * 0.06)
                  }px rgba(0,0,0,${0.2 + (scale - 1) * 0.15}))`,
                }}
              >
                {typeof app.icon === "string" ? (
                  <img src={app.icon} alt={app.name} width={scaledSize * 0.62} height={scaledSize * 0.62} className="object-contain" />
                ) : (
                  <span className="text-white" style={{ width: scaledSize * 0.46, height: scaledSize * 0.46, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    {app.icon}
                  </span>
                )}
              </div>

              {openApps.includes(app.id) && (
                <div
                  className="absolute"
                  style={{
                    bottom: `${Math.max(-6, -baseIconSize * 0.08)}px`,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: `${Math.max(3, baseIconSize * 0.06)}px`,
                    height: `${Math.max(3, baseIconSize * 0.06)}px`,
                    borderRadius: "50%",
                    backgroundColor: "rgba(90,200,250,0.95)",
                    boxShadow: "0 0 8px rgba(90,200,250,0.7)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
