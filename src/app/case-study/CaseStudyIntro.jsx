'use client';
import React from 'react';
import { motion } from 'framer-motion';

const DISCIPLINES = [
    'Applied AI',
    'Govtech',
    'Industry 4.0',
    'Ecommerce',
    'Healthcare CRM',
    'Enterprise SaaS',
];

const PROOF_PILLARS = [
    {
        value: '61%',
        label: 'Avg. efficiency gain',
        desc: 'Turnaround, response time, and throughput improvements across engagements.',
    },
    {
        value: '$82M+',
        label: 'Documented business lift',
        desc: 'Revenue, cost reduction, and operational savings verified post-deployment.',
    },
    {
        value: '100%',
        label: 'Production deployments',
        desc: 'Every case study represents a live system — not a prototype or proof-of-concept.',
    },
];

export default function CaseStudyIntro() {
    return (
        <section
            id="case-study-intro"
            data-testid="case-study-intro"
            className="relative border-t border-white/8 px-6 md:px-12 py-14 md:py-20"
        >
            <div className="max-w-[1180px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="eyebrow mb-5">How we measure success</div>
                        <h2 className="font-display text-white text-[32px] md:text-[44px] leading-[1.02] tracking-[-0.035em]">
                            We do not sell activity.
                            <span className="block text-[var(--b2b-text-muted)] mt-1">
                                We build systems that create measurable movement.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="space-y-4 text-[15px] md:text-[16px] leading-[1.65] text-[var(--b2b-text-muted)]"
                    >
                        <p>
                            Each engagement is scoped around a business outcome — not a feature list. We instrument every deployment with telemetry so impact is visible from day one.
                        </p>
                        <p>
                            Briefs are anonymised where client confidentiality requires it, but the metrics, architecture patterns, and engineering decisions remain fully transparent.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.65, delay: 0.15 }}
                    className="mt-10 md:mt-14"
                >
                    <div className="eyebrow-muted mb-4">Disciplines covered</div>
                    <div className="flex flex-wrap gap-2">
                        {DISCIPLINES.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase text-white/70"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {PROOF_PILLARS.map((pillar, i) => (
                        <motion.article
                            key={pillar.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.65, delay: i * 0.08 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(10,11,18,0.5)] p-6 md:p-7"
                        >
                            <div className="font-display text-[var(--b2b-orange)] text-4xl md:text-5xl tracking-[-0.03em] leading-none">
                                {pillar.value}
                            </div>
                            <div className="mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">
                                {pillar.label}
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-[var(--b2b-text-muted)]">
                                {pillar.desc}
                            </p>
                            <div
                                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition"
                                style={{
                                    background:
                                        'linear-gradient(160deg, rgba(0,230,255,0.08), transparent 50%)',
                                }}
                            />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
