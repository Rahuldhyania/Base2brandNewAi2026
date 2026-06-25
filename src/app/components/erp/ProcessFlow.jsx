"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ArrowLeftRight,
    BadgeCheck,
    ClipboardCheck,
    CloudOff,
    FileSpreadsheet,
    FileWarning,
    GitMerge,
    Keyboard,
    MailCheck,
    ShieldCheck,
    SlidersHorizontal,
    Sparkles,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "./SectionHeading";

const STAGES = [
    {
        index: "01",
        kicker: "Ingestion",
        title: "Operational chaos enters the singularity.",
        body: "Disconnected tools, spreadsheets, manual processes and silos are pulled into the ERP gravitational field — every signal, every record, every transaction.",
        labels: [
            { label: "Spreadsheets", Icon: FileSpreadsheet },
            { label: "Email approvals", Icon: MailCheck },
            { label: "Manual entry", Icon: Keyboard },
            { label: "Disconnected SaaS", Icon: CloudOff },
            { label: "Reconciliation", Icon: ArrowLeftRight },
            { label: "Stale reports", Icon: FileWarning },
        ],
        side: "left",
    },
    {
        index: "02",
        kicker: "Synthesis",
        title: "The core synthesises one source of truth.",
        body: "Inside the ERP nucleus, data is normalised, reconciled and joined across departments — finance to inventory to logistics — in real time.",
        labels: [
            { label: "Normalise", Icon: SlidersHorizontal },
            { label: "Reconcile", Icon: GitMerge },
            { label: "Govern", Icon: ShieldCheck },
            { label: "Validate", Icon: BadgeCheck },
            { label: "Enrich", Icon: Sparkles },
            { label: "Audit", Icon: ClipboardCheck },
        ],
        side: "center",
    },
    {
        index: "03",
        kicker: "Emission",
        title: "Clarity emerges from the white hole.",
        body: "Unified operations, real-time reporting, automated workflows and business intelligence — emitted continuously across every team and decision.",
        labels: [
            "Unified ops",
            "Live reporting",
            "Automation",
            "Forecasting",
            "Inventory control",
            "BI",
        ],
        side: "right",
    },
];

const CHAOS_CHIP_POSITIONS = [
    { left: "6%", top: "12%" },
    { left: "34%", top: "24%" },
    { left: "58%", top: "66%" },
    { left: "50%", top: "4%" },
    { left: "3%", top: "52%" },
    { left: "8%", top: "74%" },
];

const ChaosVis = ({ labels }) => (
    <div className="relative w-full h-full">
        {labels.map(({ label, Icon }, i) => {
            const position =
                CHAOS_CHIP_POSITIONS[i] ??
                CHAOS_CHIP_POSITIONS[0];

            return (
                <motion.div
                    key={label}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.55, 0.85, 0.55],
                        y: [0, -4, 0],
                        rotate: [
                            (i % 2 === 0 ? -1 : 1) * 2,
                            0,
                            (i % 2 === 0 ? -1 : 1) * 2,
                        ],
                    }}
                    transition={{
                        duration: 4 + i * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 erp-surface-panel backdrop-blur-sm font-mono text-[10px] tracking-[0.12em] uppercase text-white/70 whitespace-nowrap"
                    style={{
                        left: position.left,
                        top: position.top,
                    }}
                >
                    <Icon
                        className="w-3 h-3 shrink-0"
                        strokeWidth={1.5}
                    />
                    {label}
                </motion.div>
            );
        })}
    </div>
);

const CoreVis = ({ labels }) => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="rounded-lg erp-surface-panel border border-white/15 px-3 py-2 z-10 erp-core-pulse">
            <div className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/55">
                Nucleus
            </div>
            <div className="font-display text-[11px] font-medium text-white">
                ERP CORE
            </div>
        </div>

        {labels.map(({ label, Icon }, i) => {
            const angle = (i * 360) / labels.length;
            const r = 95;
            const rad = (angle * Math.PI) / 180;
            const x = 50 + (r / 4) * Math.cos(rad);
            const y = 50 + (r / 3.4) * Math.sin(rad);

            return (
                <motion.div
                    key={label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.4, 0.85, 0.4] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.25,
                    }}
                    className="absolute flex items-center gap-1 px-2 py-0.5 rounded-full border border-white/10 erp-surface-panel font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/70 whitespace-nowrap"
                    style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Icon
                        className="w-2.5 h-2.5 shrink-0"
                        strokeWidth={1.5}
                    />
                    {label}
                </motion.div>
            );
        })}
    </div>
);

const ClarityVis = ({ labels }) => (
    <div className="relative w-full h-full flex flex-col justify-center gap-2">
        {labels.map((l, i) => (
            <motion.div
                key={l}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex items-center gap-3 group"
            >
                <span className="w-1 h-1 rounded-full bg-(--b2b-primary)" />
                <div className="h-px flex-1 bg-gradient-to-r from-white/25 via-white/10 to-transparent" />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/75">
                    {l}
                </span>
            </motion.div>
        ))}
    </div>
);

const StageVisual = ({ stage }) => (
    <div className="relative mt-3 rounded-xl border border-white/[0.07] erp-surface-panel backdrop-blur-sm p-4 overflow-hidden h-[170px] flex items-center justify-center">
        {stage.side === "left" && <ChaosVis labels={stage.labels} />}
        {stage.side === "center" && <CoreVis labels={stage.labels} />}
        {stage.side === "right" && <ClarityVis labels={stage.labels} />}
    </div>
);

const Stage = ({ stage, idx }) => {
    const onLeft = idx % 2 === 0;

    return (
        <motion.div
            variants={fadeUp}
            className="relative grid grid-cols-12 gap-4 items-start"
            data-testid={`process-stage-${stage.index}`}
        >
            <div className="col-span-12 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2 z-10">
                <div className="flex items-center gap-3 md:flex-col">
                    <div className="relative shrink-0 w-10 h-10 rounded-lg border border-white/20 bg-[var(--b2b-bg)] ring-[3px] ring-[var(--b2b-bg)] grid place-items-center text-white font-display text-xs shadow-[0_10px_30px_-12px_var(--b2b-glow-shadow)]">
                        {stage.index}
                        <span className="absolute -inset-1 -z-10 rounded-2xl bg-[color:var(--b2b-primary)]/20 blur-md" />
                    </div>
                </div>
            </div>

            <div
                className={`col-span-12 md:col-span-5 ${onLeft ? "md:col-start-1" : "md:col-start-8"
                    } pl-16 md:pl-0`}
            >
                <div className="p-4 sm:p-5 rounded-2xl border border-[color:var(--b2b-primary)]/25 hover:border-[color:var(--b2b-primary)]/45 erp-surface-panel backdrop-blur-sm transition-all duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_80px_-40px_var(--b2b-glow-shadow)]">
                    <div className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-(--b2b-primary)">
                        {stage.kicker}
                    </div>

                    <h3 className="mt-1.5 font-display text-xl sm:text-2xl leading-[1.2] tracking-tight font-medium text-white">
                        {stage.title}
                    </h3>

                    <p className="mt-2 text-[13.5px] leading-[1.55] text-white/60">
                        {stage.body}
                    </p>

                    <StageVisual stage={stage} />

                    <div className="mt-3 pt-3 border-t border-white/[0.06] text-[10px] uppercase tracking-[0.2em] text-white/40">
                        Phase {stage.index} · {stage.kicker}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const ProcessFlow = () => {
    return (
        <section
            id="process"
            className="relative py-12 md:py-16"
            data-testid="process-section"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <SectionHeading
                        eyebrow="Transformation Sequence"
                        title={
                            <>
                                Three stages.{" "}
                                <span className="text-(--b2b-primary)">
                                    One trajectory.
                                </span>
                            </>
                        }
                        description="The journey from operational chaos to enterprise clarity — modelled on space-time physics."
                        testId="process-heading"
                    />
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35 lg:pb-2">
                        / chaos → core → clarity
                    </div>
                </div>

                <div className="mt-10 relative">
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--b2b-primary)]/10 via-[color:var(--b2b-primary)]/40 to-[color:var(--b2b-primary)]/10" />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger(0.1)}
                        className="space-y-7 md:space-y-8"
                    >
                        {STAGES.map((stage, idx) => (
                            <Stage
                                key={stage.index}
                                stage={stage}
                                idx={idx}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
