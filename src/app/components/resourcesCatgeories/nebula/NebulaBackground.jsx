/* eslint-disable react/no-unknown-property */
'use client';
import React, { useMemo, useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

/**
 * Volumetric Nebula constructed with two additive point clouds and a soft
 * radial disk. Rotates and pulses gently to feel alive.
 */
function makeCircleTexture() {
  if (typeof document === "undefined") return null;
  const size = 128;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.3, "rgba(255,255,255,0.55)");
  g.addColorStop(0.7, "rgba(255,255,255,0.12)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
}

function Nebula() {
  const inner = useRef();
  const outer = useRef();
  const disk = useRef();

  const circleTex = useMemo(() => makeCircleTexture(), []);

  const [innerGeom, outerGeom] = useMemo(() => {
    const build = (count, radius, colorA, colorB) => {
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const cA = new THREE.Color(colorA);
      const cB = new THREE.Color(colorB);
      for (let i = 0; i < count; i++) {
        const r = Math.pow(Math.random(), 0.55) * radius;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = r * Math.sin(phi) * Math.cos(theta) * 1.25;
        const y = r * Math.sin(phi) * Math.sin(theta) * 0.6;
        const z = r * Math.cos(phi) * 0.9;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        const t = Math.random();
        const c = cA.clone().lerp(cB, t);
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      return g;
    };
    return [
      build(1400, 3.0, "#7B4DFF", "#42D4FF"),
      build(1000, 4.6, "#A855F7", "#2b1f6b"),
    ];
  }, []);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (inner.current) {
      inner.current.rotation.z = t * 0.045;
      inner.current.rotation.y = Math.sin(t * 0.15) * 0.15 + mouse.x * 0.05;
      inner.current.rotation.x = Math.cos(t * 0.1) * 0.1 - mouse.y * 0.05;
      const s = 1 + Math.sin(t * 0.5) * 0.02;
      inner.current.scale.setScalar(s);
    }
    if (outer.current) {
      outer.current.rotation.z = -t * 0.03;
      outer.current.rotation.y = Math.sin(t * 0.08) * 0.2 + mouse.x * 0.08;
      outer.current.rotation.x = Math.cos(t * 0.07) * 0.15 - mouse.y * 0.08;
    }
    if (disk.current) {
      disk.current.rotation.z = t * 0.02;
      disk.current.material.opacity = 0.4 + Math.sin(t * 0.6) * 0.06;
    }
  });

  return (
    <group>
      {/* Soft central glow disk */}
      <mesh ref={disk} position={[0, 0, -0.3]}>
        <planeGeometry args={[9, 9, 1, 1]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={{
            uColorA: { value: new THREE.Color("#7B4DFF") },
            uColorB: { value: new THREE.Color("#42D4FF") },
            uColorC: { value: new THREE.Color("#A855F7") },
          }}
          vertexShader={`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            precision highp float;
            varying vec2 vUv;
            uniform vec3 uColorA;
            uniform vec3 uColorB;
            uniform vec3 uColorC;
            void main() {
              vec2 p = vUv - 0.5;
              float d = length(p);
              float glow = smoothstep(0.5, 0.0, d);
              float ring = smoothstep(0.5, 0.15, d) - smoothstep(0.15, 0.02, d);
              vec3 col = mix(uColorA, uColorB, smoothstep(0.0, 0.35, d));
              col = mix(col, uColorC, smoothstep(0.2, 0.45, d));
              col += vec3(1.0) * pow(1.0 - d * 2.0, 6.0) * 0.6; // white core
              gl_FragColor = vec4(col, glow * 0.85 + ring * 0.35);
            }
          `}
        />
      </mesh>

      <points ref={outer} geometry={outerGeom}>
        <pointsMaterial
          size={0.22}
          map={circleTex}
          alphaMap={circleTex}
          vertexColors
          transparent
          opacity={0.85}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      <points ref={inner} geometry={innerGeom}>
        <pointsMaterial
          size={0.28}
          map={circleTex}
          alphaMap={circleTex}
          vertexColors
          transparent
          opacity={1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

/** Shooting stars — small trails periodically streaking across the sky */
function ShootingStars() {
  const groupRef = useRef();
  const meteors = useMemo(() => {
    return Array.from({ length: 4 }).map((_, i) => ({
      seed: Math.random() * 100 + i * 3,
      speed: 0.6 + Math.random() * 0.8,
      length: 0.4 + Math.random() * 0.6,
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 12,
      z: -6 - Math.random() * 4,
    }));
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const m = meteors[i];
      const cycle = 6 + i * 1.7;
      const p = ((t + m.seed) % cycle) / cycle;
      child.position.set(m.x + p * 14, m.y - p * 8, m.z);
      child.material.opacity = p < 0.08 || p > 0.9 ? 0 : 0.9;
    });
  });

  return (
    <group ref={groupRef}>
      {meteors.map((m, i) => (
        <mesh key={i}>
          <planeGeometry args={[m.length, 0.008]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraDrift() {
  useFrame(({ camera, clock, mouse }) => {
    const t = clock.getElapsedTime();
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.02;
    camera.position.y += (mouse.y * 0.4 - camera.position.y) * 0.02;
    camera.position.z = 7 + Math.sin(t * 0.15) * 0.15;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function NebulaBackground({ intensity = 1, showNebula = true, baseOpacity = 1 }) {
  const [scrollFactor, setScrollFactor] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight || 800;
        // Bright over the hero; fades quickly over one viewport
        const f = Math.max(0, Math.min(1, y / vh));
        setScrollFactor(f);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0"
      style={{ background: "#040507", zIndex: 0 }}
      aria-hidden
      data-testid="nebula-background"
    >
      <div
        className="absolute inset-0"
        style={{
          opacity: (1 - scrollFactor * 0.85) * baseOpacity,
          transition: "opacity 120ms linear",
        }}
      >
        <Canvas
          dpr={[1, 1.3]}
          camera={{ position: [0, 0, 7], fov: 60 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <color attach="background" args={["#040507"]} />
            <fog attach="fog" args={["#040507", 8, 22]} />

            <ambientLight intensity={0.35} />
            <pointLight position={[0, 0, 2]} intensity={2 * intensity} color="#7B4DFF" />
            <pointLight position={[3, 2, 1]} intensity={1.4 * intensity} color="#42D4FF" />

            <Stars
              radius={90}
              depth={60}
              count={3500}
              factor={3.5}
              saturation={0}
              fade
              speed={0.6}
            />

            {showNebula && <Nebula />}
            <ShootingStars />
            <CameraDrift />
          </Suspense>
        </Canvas>
      </div>
      {/* Soft radial vignette so content on top is legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(4,5,7,0) 0%, rgba(4,5,7,0.25) 55%, rgba(4,5,7,0.85) 100%)",
        }}
      />
      {/* Scroll-based dark overlay that gradually deepens the background as user scrolls */}
      <div
        className="absolute inset-0"
        style={{
          background: "#040507",
          opacity: scrollFactor * 0.7,
          transition: "opacity 120ms linear",
        }}
      />
    </div>
  );
}
