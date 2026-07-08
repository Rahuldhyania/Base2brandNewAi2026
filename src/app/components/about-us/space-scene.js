'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Cinematic Three.js space scene:
 *  - Deep-space starfield with additive-blended points
 *  - Warp streaks (LineSegments) that stretch on scroll velocity
 *  - Camera flies through space along -Z as user scrolls
 *  - Subtle nebula plane far behind
 *
 * progressRef.current: 0..1 (scroll progress across the whole document)
 * velocityRef.current: 0..N   (px/ms style scroll velocity, we clamp inside)
 * focusRef.current:    0..1   (0 = deep dark, 1 = brightest final galaxy)
 */
export default function SpaceScene({ progressRef, velocityRef, focusRef }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x040507)
    scene.fog = new THREE.FogExp2(0x040507, 0.0055)

    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 800)
    camera.position.set(0, 0, 5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(0x040507, 1)
    mount.appendChild(renderer.domElement)

    // -------------------- STAR FIELD --------------------
    const STAR_COUNT = 3200
    const positions = new Float32Array(STAR_COUNT * 3)
    const colors = new Float32Array(STAR_COUNT * 3)
    const sizes = new Float32Array(STAR_COUNT)
    const seeds = new Float32Array(STAR_COUNT)

    // Color palette (matches design: white, purple, blue, pink)
    const palette = [
      [1.0, 1.0, 1.0],
      [1.0, 1.0, 1.0],
      [1.0, 1.0, 1.0],
      [1.0, 1.0, 1.0],
      [0.48, 0.30, 1.0],   // #7B4DFF
      [0.26, 0.83, 1.0],   // #42D4FF
      [0.75, 0.52, 0.99],  // #C084FC
    ]

    for (let i = 0; i < STAR_COUNT; i++) {
      // Distribute inside a cylinder that stretches deep along -z
      const r = Math.pow(Math.random(), 0.55) * 55
      const theta = Math.random() * Math.PI * 2
      positions[i * 3] = Math.cos(theta) * r
      positions[i * 3 + 1] = Math.sin(theta) * r
      positions[i * 3 + 2] = -Math.random() * 300

      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = c[0]
      colors[i * 3 + 1] = c[1]
      colors[i * 3 + 2] = c[2]

      sizes[i] = Math.random() * 1.8 + 0.6
      seeds[i] = Math.random() * 100
    }

    const starGeom = new THREE.BufferGeometry()
    starGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    starGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    starGeom.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
    starGeom.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1))

    const starMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPR: { value: renderer.getPixelRatio() },
        uBrightness: { value: 1.0 },
      },
      vertexShader: /* glsl */`
        attribute float aSize;
        attribute float aSeed;
        varying vec3 vColor;
        varying float vTwinkle;
        uniform float uTime;
        uniform float uPR;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          float t = uTime * 1.8 + aSeed * 6.28;
          vTwinkle = 0.55 + 0.45 * sin(t);
          gl_PointSize = aSize * uPR * (240.0 / max(-mv.z, 0.1));
        }
      `,
      fragmentShader: /* glsl */`
        varying vec3 vColor;
        varying float vTwinkle;
        uniform float uBrightness;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float core = smoothstep(0.5, 0.0, d);
          float halo = smoothstep(0.5, 0.15, d) * 0.35;
          float alpha = (core + halo) * vTwinkle * uBrightness;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    })

    const stars = new THREE.Points(starGeom, starMat)
    scene.add(stars)

    // -------------------- WARP STREAKS --------------------
    // Line segments sharing the same star positions. tail attr = 0 for head, 1 for tail vertex.
    const linePositions = new Float32Array(STAR_COUNT * 6)
    const lineColors = new Float32Array(STAR_COUNT * 6)
    const tailAttr = new Float32Array(STAR_COUNT * 2)
    for (let i = 0; i < STAR_COUNT; i++) {
      const x = positions[i * 3]
      const y = positions[i * 3 + 1]
      const z = positions[i * 3 + 2]
      linePositions[i * 6] = x
      linePositions[i * 6 + 1] = y
      linePositions[i * 6 + 2] = z
      linePositions[i * 6 + 3] = x
      linePositions[i * 6 + 4] = y
      linePositions[i * 6 + 5] = z // will be shifted in shader
      for (let j = 0; j < 2; j++) {
        lineColors[i * 6 + j * 3] = colors[i * 3]
        lineColors[i * 6 + j * 3 + 1] = colors[i * 3 + 1]
        lineColors[i * 6 + j * 3 + 2] = colors[i * 3 + 2]
      }
      tailAttr[i * 2] = 0
      tailAttr[i * 2 + 1] = 1
    }

    const lineGeom = new THREE.BufferGeometry()
    lineGeom.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    lineGeom.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))
    lineGeom.setAttribute('aTail', new THREE.BufferAttribute(tailAttr, 1))

    const lineMat = new THREE.ShaderMaterial({
      uniforms: {
        uWarp: { value: 0 },
      },
      vertexShader: /* glsl */`
        attribute float aTail;
        varying vec3 vColor;
        varying float vTail;
        uniform float uWarp;
        void main() {
          vColor = color;
          vTail = aTail;
          vec3 p = position;
          // Stretch tail toward +z (behind the camera direction of travel) -> creates streaks
          p.z += aTail * uWarp * 14.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        varying vec3 vColor;
        varying float vTail;
        uniform float uWarp;
        void main() {
          float alpha = (1.0 - vTail) * uWarp * 0.9;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    })

    const warpLines = new THREE.LineSegments(lineGeom, lineMat)
    scene.add(warpLines)

    // -------------------- COSMIC DUST (soft point cloud) --------------------
    const DUST_COUNT = 800
    const dustPos = new Float32Array(DUST_COUNT * 3)
    const dustCol = new Float32Array(DUST_COUNT * 3)
    const dustSize = new Float32Array(DUST_COUNT)
    for (let i = 0; i < DUST_COUNT; i++) {
      const r = Math.pow(Math.random(), 0.4) * 80
      const theta = Math.random() * Math.PI * 2
      dustPos[i * 3] = Math.cos(theta) * r
      dustPos[i * 3 + 1] = Math.sin(theta) * r
      dustPos[i * 3 + 2] = -Math.random() * 300
      // purple-blue dust
      const mix = Math.random()
      dustCol[i * 3] = 0.4 + mix * 0.2
      dustCol[i * 3 + 1] = 0.25 + mix * 0.4
      dustCol[i * 3 + 2] = 0.9
      dustSize[i] = Math.random() * 6 + 3
    }
    const dustGeom = new THREE.BufferGeometry()
    dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))
    dustGeom.setAttribute('color', new THREE.BufferAttribute(dustCol, 3))
    dustGeom.setAttribute('aSize', new THREE.BufferAttribute(dustSize, 1))

    const dustMat = new THREE.ShaderMaterial({
      uniforms: {
        uPR: { value: renderer.getPixelRatio() },
        uBrightness: { value: 0.28 },
      },
      vertexShader: /* glsl */`
        attribute float aSize;
        varying vec3 vColor;
        uniform float uPR;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aSize * uPR * (300.0 / max(-mv.z, 0.1));
        }
      `,
      fragmentShader: /* glsl */`
        varying vec3 vColor;
        uniform float uBrightness;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float a = smoothstep(0.5, 0.0, d) * uBrightness;
          gl_FragColor = vec4(vColor, a);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    })
    const dust = new THREE.Points(dustGeom, dustMat)
    scene.add(dust)

    // -------------------- ANIMATION LOOP --------------------
    let raf = 0
    const clock = new THREE.Clock()
    let smoothWarp = 0
    let smoothProgress = 0
    let smoothFocus = 0

    const starPos = starGeom.attributes.position.array
    const linePos = lineGeom.attributes.position.array

    const animate = () => {
      const t = clock.getElapsedTime()
      const targetProgress = progressRef.current || 0
      const targetVelocity = velocityRef.current || 0
      const targetFocus = focusRef.current || 0

      smoothProgress += (targetProgress - smoothProgress) * 0.06
      smoothFocus += (targetFocus - smoothFocus) * 0.05

      // Camera flies through space (from z=5 to z=-260)
      const camTargetZ = 5 - smoothProgress * 265
      camera.position.z += (camTargetZ - camera.position.z) * 0.1

      // Slow cinematic roll & yaw
      camera.rotation.z = Math.sin(t * 0.08) * 0.03 + smoothProgress * 0.4
      camera.position.x = Math.sin(t * 0.15) * 0.6
      camera.position.y = Math.cos(t * 0.12) * 0.4

      // Warp intensity - baseline + scroll velocity
      const targetWarp = Math.min(1.6, targetVelocity * 4.0) + 0.06 + smoothFocus * 0.15
      smoothWarp += (targetWarp - smoothWarp) * 0.09

      starMat.uniforms.uTime.value = t
      starMat.uniforms.uBrightness.value = 0.85 + smoothFocus * 0.6
      lineMat.uniforms.uWarp.value = smoothWarp
      dustMat.uniforms.uBrightness.value = 0.22 + smoothFocus * 0.5

      // Recycle stars that pass behind camera to create infinite starfield
      const camZ = camera.position.z
      for (let i = 0; i < STAR_COUNT; i++) {
        const idx = i * 3
        if (starPos[idx + 2] > camZ + 15) {
          const newZ = camZ - 260 - Math.random() * 60
          starPos[idx + 2] = newZ
          linePos[i * 6 + 2] = newZ
          linePos[i * 6 + 5] = newZ
        }
      }
      starGeom.attributes.position.needsUpdate = true
      lineGeom.attributes.position.needsUpdate = true

      // Fog gets less dense at the very end (bright galaxy reveal)
      scene.fog.density = 0.0055 * (1.0 - smoothFocus * 0.55)

      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      starGeom.dispose(); starMat.dispose()
      lineGeom.dispose(); lineMat.dispose()
      dustGeom.dispose(); dustMat.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
