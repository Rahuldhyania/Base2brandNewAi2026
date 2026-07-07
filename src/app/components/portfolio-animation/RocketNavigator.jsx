'use client'
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { extraData } from "@/constants/testIds/extraData";
import Rocket from "./Rocket";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/**
 * RocketNavigator — serpentine dotted path through the page with a rocket
 * that follows the line via MotionPath tied to scroll progress.
 */
export default function RocketNavigator({ containerRef, mobile = false }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const rocketWrapRef = useRef(null);
  const glowRef = useRef(null);

  const [speed, setSpeed] = useState(0);
  const speedRef = useRef(0);
  const lastYRef = useRef(0);
  const lastTRef = useRef(performance.now());

  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [pathD, setPathD] = useState("");
  const [waypoints, setWaypoints] = useState([]);

  const computeGeometry = () => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const w = rect.width;
    const h = container.scrollHeight;

    const anchors = Array.from(container.querySelectorAll("section[data-section]"))
      .map((el) => {
        const r = el.getBoundingClientRect();
        const cy = r.top - containerTop + Math.min(r.height * 0.28, 240);
        return { id: el.id || el.dataset.section, cy };
      })
      .filter((a) => a.id && Number.isFinite(a.cy));

    if (anchors.length === 0) return;

    const centerX = w / 2;
    const amp = mobile ? Math.min(64, w * 0.1) : Math.min(220, w * 0.15);
    const pad = 40;
    const topY = pad;
    const bottomY = Math.max(h - pad, topY + 200);

    const sectionPoints = anchors.map((a, i) => {
      const dir = i % 2 === 0 ? -1 : 1;
      const isEdge = i === 0 || i === anchors.length - 1;
      const offset = isEdge ? amp * 0.4 : amp;
      return {
        id: a.id,
        cx: Math.max(72, Math.min(w - 72, centerX + dir * offset)),
        cy: a.cy,
      };
    });

    const pathPoints = [
      { cx: centerX, cy: topY },
      ...sectionPoints,
      { cx: centerX, cy: bottomY },
    ];

    let d = `M ${pathPoints[0].cx.toFixed(1)} ${pathPoints[0].cy.toFixed(1)}`;
    for (let i = 1; i < pathPoints.length; i++) {
      const p0 = pathPoints[i - 1];
      const p1 = pathPoints[i];
      const dy = p1.cy - p0.cy;
      const c1x = p0.cx;
      const c1y = p0.cy + dy * 0.45;
      const c2x = p1.cx;
      const c2y = p1.cy - dy * 0.45;
      d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p1.cx.toFixed(1)} ${p1.cy.toFixed(1)}`;
    }

    setDims({ w, h });
    setPathD(d);
    setWaypoints(sectionPoints);
  };

  useLayoutEffect(() => {
    const run = () => computeGeometry();
    run();

    const ro = new ResizeObserver(() => requestAnimationFrame(run));
    const mo = new MutationObserver(() => requestAnimationFrame(run));

    if (containerRef.current) {
      ro.observe(containerRef.current);
      mo.observe(containerRef.current, { childList: true });
    }

    if (document.fonts?.ready) document.fonts.ready.then(run);
    window.addEventListener("resize", run);
    const t = setTimeout(run, 800);

    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("resize", run);
      clearTimeout(t);
    };
  }, [mobile, containerRef]);

  useLayoutEffect(() => {
    if (!pathRef.current || !rocketWrapRef.current || !containerRef.current || !pathD) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(rocketWrapRef.current, {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: 90,
          start: 0,
          end: 1,
        },
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, containerRef);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, [pathD, containerRef]);

  useEffect(() => {
    let rafId;
    const tick = () => {
      const y = window.scrollY;
      const now = performance.now();
      const dt = Math.max(1, now - lastTRef.current);
      const vy = Math.abs(y - lastYRef.current) / dt;
      lastYRef.current = y;
      lastTRef.current = now;
      speedRef.current = speedRef.current * 0.82 + Math.min(1, vy / 1.6) * 0.18;
      setSpeed((s) => (Math.abs(s - speedRef.current) > 0.02 ? speedRef.current : s));
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const rocketSize = mobile ? 34 : 46;

  return (
    <>
      <svg
        ref={svgRef}
        data-testid={extraData.rocket.path}
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: dims.w || "100%",
          height: dims.h || "100%",
          pointerEvents: "none",
          zIndex: 1,
          overflow: "visible",
        }}
        viewBox={`0 0 ${dims.w || 1440} ${dims.h || 8000}`}
        preserveAspectRatio="none"
      >
        <path ref={pathRef} d={pathD} className="orbital-path" />
        <path d={pathD} className="orbital-path-glow" pointerEvents="none" />

        {waypoints.map((wp) => (
          <g key={wp.id} transform={`translate(${wp.cx}, ${wp.cy})`} data-testid={extraData.rocket.waypoint(wp.id)}>
            <circle r="10" fill="none" stroke="rgba(244,123,82,0.35)" strokeWidth="0.8" />
            <circle r="4.5" fill="#05060A" stroke="#F47B52" strokeWidth="1.4" />
            <circle
              r="2.2"
              fill="#F47B52"
              opacity="0.9"
              style={{ filter: "drop-shadow(0 0 6px rgba(244,123,82,0.9))" }}
            />
          </g>
        ))}
      </svg>

      <div
        ref={rocketWrapRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: rocketSize,
          height: rocketSize * 1.4,
          pointerEvents: "none",
          zIndex: 8,
          willChange: "transform",
          transformOrigin: "50% 50%",
        }}
      >
        <div
          ref={glowRef}
          aria-hidden
          style={{
            position: "absolute",
            inset: "-60%",
            background: "radial-gradient(closest-side, rgba(244,123,82,0.22), transparent 70%)",
            pointerEvents: "none",
            filter: "blur(12px)",
          }}
        />
        <Rocket size={rocketSize} speed={speed} testId={extraData.rocket.root} />
      </div>
    </>
  );
}
