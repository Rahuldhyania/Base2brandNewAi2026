import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Black Hole ↔ White Hole visual.
 *
 * Layout (svg viewBox 800 x 640):
 *   - Black Hole centered at (200, 320)
 *   - White Hole centered at (600, 320)
 *   - ERP CORE node centered at (400, 320)
 *
 * Department labels orbit the black hole and get pulled inward (spiral).
 * Emerging labels stream outward from the white hole.
 * Particles flow continuously left → right (chaos → clarity).
 */

const BH_CX = 200;
const BH_CY = 320;
const WH_CX = 600;
const WH_CY = 320;
const CORE_CX = 400;
const CORE_CY = 320;

const CHAOS_LABELS = [
    { text: "Inventory", angle: 200, r: 150, delay: 0 },
    { text: "Procurement", angle: 235, r: 165, delay: 0.6 },
    { text: "Sales", angle: 275, r: 145, delay: 1.2 },
    { text: "Warehouse", angle: 310, r: 175, delay: 1.8 },
    { text: "HR", angle: 70, r: 140, delay: 2.4 },
    { text: "Finance", angle: 110, r: 168, delay: 3.0 },
    { text: "Manufacturing", angle: 145, r: 155, delay: 3.6 },
];

const ORDERED_LABELS = [
    { text: "Unified Operations", y: -100 },
    { text: "Real-Time Reporting", y: -55 },
    { text: "Automated Workflows", y: -10 },
    { text: "Inventory Control", y: 35 },
    { text: "Financial Visibility", y: 80 },
    { text: "Business Intelligence", y: 125 },
];

const ORBIT_NODES = [
    { label: "Inventory", angle: 0 },
    { label: "Finance", angle: 51 },
    { label: "CRM", angle: 102 },
    { label: "Manufacturing", angle: 154 },
    { label: "Procurement", angle: 206 },
    { label: "Analytics", angle: 257 },
    { label: "Logistics", angle: 308 },
];

const polar = (cx, cy, r, deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

export const BlackHoleWhiteHole = () => {
    const wrapRef = useRef(null);

    // Mouse parallax (very subtle, enterprise-grade)
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 60, damping: 20 });
    const sy = useSpring(my, { stiffness: 60, damping: 20 });

    const tx = useTransform(sx, (v) => v * 14);
    const ty = useTransform(sy, (v) => v * 14);
    const txAlt = useTransform(sx, (v) => v * -10);
    const tyAlt = useTransform(sy, (v) => v * -10);

    const handleMove = (e) => {
        const rect = wrapRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mx.set(x);
        my.set(y);
    };

    const handleLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <div
            ref={wrapRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="relative w-full aspect-[5/4] max-w-[760px] mx-auto select-none"
            data-testid="bh-wh-visual"
        >
            {/* Atmospheric layers */}
            <motion.div
                style={{ x: txAlt, y: tyAlt }}
                className="absolute inset-0 tech-grid pointer-events-none opacity-60"
            />

            {/* SVG core */}
            <motion.svg
                viewBox="0 0 800 640"
                className="absolute inset-0 w-full h-full"
                style={{ x: tx, y: ty }}
            >
                <defs>
                    {/* Distortion for black hole edge */}
                    <filter
                        id="bh-distort"
                        x="-30%"
                        y="-30%"
                        width="160%"
                        height="160%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.018"
                            numOctaves="2"
                            seed="3"
                        >
                            <animate
                                attributeName="baseFrequency"
                                dur="22s"
                                values="0.014;0.028;0.014"
                                repeatCount="indefinite"
                            />
                        </feTurbulence>
                        <feDisplacementMap
                            in="SourceGraphic"
                            scale="36"
                        />
                    </filter>

                    {/* Soft white-hole glow */}
                    <filter
                        id="wh-glow"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                    >
                        <feGaussianBlur stdDeviation="14" result="b" />
                        <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter
                        id="core-glow"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                    >
                        <feGaussianBlur stdDeviation="3" result="b" />
                        <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Gradients */}
                    <radialGradient id="bh-core" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#000000" />
                        <stop offset="65%" stopColor="#000000" />
                        <stop offset="85%" stopColor="#0a0a0a" />
                        <stop offset="100%" stopColor="#171717" />
                    </radialGradient>

                    <radialGradient id="bh-halo" cx="50%" cy="50%" r="50%">
                        <stop
                            offset="0%"
                            stopColor="rgba(255,255,255,0)"
                        />
                        <stop
                            offset="78%"
                            stopColor="rgba(255,255,255,0)"
                        />
                        <stop
                            offset="92%"
                            stopColor="rgba(255,255,255,0.35)"
                        />
                        <stop
                            offset="100%"
                            stopColor="rgba(255,255,255,0)"
                        />
                    </radialGradient>

                    <radialGradient id="wh-core" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="35%" stopColor="rgba(255,255,255,0.85)" />
                        <stop offset="70%" stopColor="rgba(255,255,255,0.15)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>

                    <radialGradient id="wh-aura" cx="50%" cy="50%" r="50%">
                        <stop
                            offset="0%"
                            stopColor="rgba(255,255,255,0.35)"
                        />
                        <stop
                            offset="100%"
                            stopColor="rgba(255,255,255,0)"
                        />
                    </radialGradient>

                    <linearGradient
                        id="stream"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop
                            offset="0%"
                            stopColor="rgba(255,255,255,0)"
                        />
                        <stop
                            offset="50%"
                            stopColor="rgba(255,255,255,0.55)"
                        />
                        <stop
                            offset="100%"
                            stopColor="rgba(255,255,255,0)"
                        />
                    </linearGradient>

                    {/* Path for particles flowing chaos → core → clarity */}
                    <path
                        id="flow-path"
                        d={`M ${BH_CX} ${BH_CY} C 300 280, 350 280, ${CORE_CX} ${CORE_CY} S 540 360, ${WH_CX} ${WH_CY}`}
                    />
                </defs>

                {/* === Ambient halo background === */}
                <circle
                    cx={BH_CX}
                    cy={BH_CY}
                    r="200"
                    fill="url(#bh-halo)"
                    opacity="0.7"
                />
                <circle
                    cx={WH_CX}
                    cy={WH_CY}
                    r="220"
                    fill="url(#wh-aura)"
                    opacity="0.55"
                />

                {/* === Black Hole accretion disk (rotating, distorted) === */}
                <g
                    style={{
                        transformOrigin: `${BH_CX}px ${BH_CY}px`,
                        animation: "accretion 36s linear infinite",
                    }}
                    filter="url(#bh-distort)"
                >
                    <ellipse
                        cx={BH_CX}
                        cy={BH_CY}
                        rx="120"
                        ry="32"
                        fill="none"
                        stroke="rgba(255,255,255,0.45)"
                        strokeWidth="1.1"
                    />
                    <ellipse
                        cx={BH_CX}
                        cy={BH_CY}
                        rx="100"
                        ry="22"
                        fill="none"
                        stroke="rgba(255,255,255,0.25)"
                        strokeWidth="1"
                    />
                    <ellipse
                        cx={BH_CX}
                        cy={BH_CY}
                        rx="140"
                        ry="44"
                        fill="none"
                        stroke="rgba(255,255,255,0.18)"
                        strokeWidth="0.8"
                    />
                </g>

                {/* Black hole event horizon */}
                <circle
                    cx={BH_CX}
                    cy={BH_CY}
                    r="58"
                    fill="url(#bh-core)"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="0.5"
                />
                {/* dense rim */}
                <circle
                    cx={BH_CX}
                    cy={BH_CY}
                    r="58"
                    fill="none"
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth="0.6"
                    opacity="0.7"
                />

                {/* Orbiting outer ring (counter rotation) */}
                <g
                    style={{
                        transformOrigin: `${BH_CX}px ${BH_CY}px`,
                        animation: "accretion-rev 60s linear infinite",
                    }}
                >
                    <circle
                        cx={BH_CX}
                        cy={BH_CY}
                        r="175"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeDasharray="2 6"
                    />
                </g>

                {/* === White Hole === */}
                <circle
                    cx={WH_CX}
                    cy={WH_CY}
                    r="80"
                    fill="url(#wh-core)"
                    filter="url(#wh-glow)"
                />
                <motion.circle
                    cx={WH_CX}
                    cy={WH_CY}
                    r="44"
                    fill="#ffffff"
                    initial={{ opacity: 0.85 }}
                    animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.05, 1] }}
                    transition={{
                        duration: 4.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{ transformOrigin: `${WH_CX}px ${WH_CY}px` }}
                />

                {/* White hole radial emission rays */}
                <g
                    style={{
                        transformOrigin: `${WH_CX}px ${WH_CY}px`,
                        animation: "accretion 80s linear infinite",
                    }}
                    opacity="0.55"
                >
                    {Array.from({ length: 18 }).map((_, i) => {
                        const a = (i * 360) / 18;
                        const p1 = polar(WH_CX, WH_CY, 90, a);
                        const p2 = polar(WH_CX, WH_CY, 160, a);
                        return (
                            <line
                                key={i}
                                x1={p1.x}
                                y1={p1.y}
                                x2={p2.x}
                                y2={p2.y}
                                stroke="rgba(255,255,255,0.35)"
                                strokeWidth="0.7"
                            />
                        );
                    })}
                </g>

                {/* === Connection: black hole → core → white hole === */}
                <path
                    d={`M ${BH_CX + 60} ${BH_CY} C 300 290, 350 290, ${CORE_CX - 40} ${CORE_CY}`}
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1"
                    className="data-line"
                />
                <path
                    d={`M ${CORE_CX + 40} ${CORE_CY} C 460 350, 510 350, ${WH_CX - 60} ${WH_CY}`}
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1"
                    className="data-line"
                />

                {/* Flowing particles along the stream path */}
                {Array.from({ length: 7 }).map((_, i) => (
                    <circle
                        key={`p-${i}`}
                        r={i % 2 === 0 ? 1.6 : 1.1}
                        fill="rgba(255,255,255,0.85)"
                    >
                        <animateMotion
                            dur={`${5 + i * 0.6}s`}
                            repeatCount="indefinite"
                            begin={`${i * 0.6}s`}
                        >
                            <mpath href="#flow-path" />
                        </animateMotion>
                    </circle>
                ))}

                {/* === ERP CORE orbit ring === */}
                <circle
                    cx={CORE_CX}
                    cy={CORE_CY}
                    r="68"
                    fill="none"
                    stroke="rgba(255,255,255,0.10)"
                    strokeDasharray="1 4"
                />
                <circle
                    cx={CORE_CX}
                    cy={CORE_CY}
                    r="92"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                />

                {/* Orbit module dots (rotating as a group) */}
                <g
                    style={{
                        transformOrigin: `${CORE_CX}px ${CORE_CY}px`,
                        animation: "accretion 48s linear infinite",
                    }}
                >
                    {ORBIT_NODES.map((n, i) => {
                        const { x, y } = polar(CORE_CX, CORE_CY, 80, n.angle);
                        return (
                            <g key={n.label}>
                                <line
                                    x1={CORE_CX}
                                    y1={CORE_CY}
                                    x2={x}
                                    y2={y}
                                    stroke="rgba(255,255,255,0.08)"
                                    strokeWidth="0.6"
                                />
                                <circle
                                    cx={x}
                                    cy={y}
                                    r={i === 0 ? 3 : 2.2}
                                    fill={i === 0 ? "var(--b2b-primary)" : "#ffffff"}
                                    opacity={i === 0 ? 1 : 0.9}
                                />
                            </g>
                        );
                    })}
                </g>

                {/* Subtle distant stars inside the visual */}
                {Array.from({ length: 38 }).map((_, i) => {
                    const x = (i * 91) % 800;
                    const y = (i * 53) % 640;
                    const r = (i % 5) === 0 ? 1.1 : 0.6;
                    return (
                        <circle
                            key={`s-${i}`}
                            cx={x}
                            cy={y}
                            r={r}
                            fill="rgba(255,255,255,0.5)"
                            opacity={(i % 4) * 0.18 + 0.2}
                        />
                    );
                })}
            </motion.svg>

            {/* === HTML overlay: ERP CORE node + labels === */}
            <motion.div
                style={{ x: tx, y: ty }}
                className="absolute inset-0 pointer-events-none"
            >
                {/* ERP CORE glass node */}
                <div
                    className="absolute"
                    style={{
                        left: `${(CORE_CX / 800) * 100}%`,
                        top: `${(CORE_CY / 640) * 100}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <div
                        className="relative rounded-xl px-3 py-2 erp-surface-panel backdrop-blur-xl border border-white/12 erp-core-pulse min-w-[108px]"
                        data-testid="erp-core-node"
                    >
                        <div className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full status-dot shrink-0" />
                            <span className="font-mono text-[7.5px] tracking-[0.28em] uppercase text-white/50 leading-none">
                                Singularity
                            </span>
                        </div>
                        <div className="mt-1 text-[11px] font-semibold tracking-[0.08em] text-white leading-tight">
                            ERP CORE
                        </div>
                        <div className="mt-0.5 font-mono text-[7.5px] tracking-[0.18em] uppercase text-white/35 leading-none">
                            v.2.04 · sync online
                        </div>
                    </div>
                </div>

                {/* Chaos labels orbiting the black hole, gradually pulled in */}
                {CHAOS_LABELS.map((lbl, i) => {
                    const start = polar(BH_CX, BH_CY, lbl.r, lbl.angle);
                    const mid = polar(
                        BH_CX,
                        BH_CY,
                        lbl.r * 0.55,
                        lbl.angle + 70,
                    );
                    const end = { x: BH_CX, y: BH_CY };
                    return (
                        <motion.div
                            key={lbl.text}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 0.9, 0.5, 0],
                                left: [
                                    `${(start.x / 800) * 100}%`,
                                    `${(mid.x / 800) * 100}%`,
                                    `${(end.x / 800) * 100}%`,
                                    `${(end.x / 800) * 100}%`,
                                ],
                                top: [
                                    `${(start.y / 640) * 100}%`,
                                    `${(mid.y / 640) * 100}%`,
                                    `${(end.y / 640) * 100}%`,
                                    `${(end.y / 640) * 100}%`,
                                ],
                                scale: [1, 0.85, 0.35, 0.2],
                            }}
                            transition={{
                                duration: 11,
                                repeat: Infinity,
                                delay: lbl.delay,
                                ease: [0.55, 0, 0.85, 0.55],
                                times: [0, 0.5, 0.9, 1],
                            }}
                            style={{
                                transform: "translate(-50%, -50%)",
                            }}
                            className="absolute"
                        >
                            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 erp-surface-panel backdrop-blur-sm">
                                <span className="w-1 h-1 rounded-full bg-white/60" />
                                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/75">
                                    {lbl.text}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Ordered emerging labels from white hole */}
                <div
                    className="absolute"
                    style={{
                        left: `${((WH_CX + 60) / 800) * 100}%`,
                        top: `${(WH_CY / 640) * 100}%`,
                        transform: "translate(0, -50%)",
                    }}
                >
                    <div className="flex flex-col gap-1.5">
                        {ORDERED_LABELS.map((l, i) => (
                            <motion.div
                                key={l.text}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                    opacity: [0, 0.85, 0.85, 0],
                                    x: [-12, 0, 6, 14],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    delay: i * 0.7,
                                    ease: "easeInOut",
                                }}
                                className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 erp-surface-panel backdrop-blur-sm w-fit"
                            >
                                <span className="w-1 h-1 rounded-full bg-brand" />
                                <span className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-white/80 whitespace-nowrap">
                                    {l.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Anchor tags below singularities */}
                <div
                    className="absolute font-mono text-[9px] tracking-[0.32em] uppercase text-white/40"
                    style={{
                        left: `${(BH_CX / 800) * 100}%`,
                        top: `${((BH_CY + 130) / 640) * 100}%`,
                        transform: "translate(-50%, 0)",
                    }}
                >
                    Black Hole · Chaos
                </div>
                <div
                    className="absolute font-mono text-[9px] tracking-[0.32em] uppercase text-white/40"
                    style={{
                        left: `${(WH_CX / 800) * 100}%`,
                        top: `${((WH_CY + 130) / 640) * 100}%`,
                        transform: "translate(-50%, 0)",
                    }}
                >
                    White Hole · Clarity
                </div>
            </motion.div>
        </div>
    );
};

export default BlackHoleWhiteHole;
