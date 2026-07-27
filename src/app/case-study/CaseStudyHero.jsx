'use client';
import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
    { key: 'cases', value: '5', label: 'Published briefs' },
    { key: 'sectors', value: '5', label: 'Industry sectors' },
    { key: 'impact', value: '$82M+', label: 'Documented lift' },
    { key: 'reach', value: '9.4M', label: 'Users impacted' },
];

const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function CaseStudyHero() {
    return (
        <section
            id="top"
            data-testid="case-study-hero"
            className="relative px-6 md:px-12 pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_30%,rgba(0,230,255,0.06),transparent_55%)] pointer-events-none" />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full"
                style={{
                    background:
                        'radial-gradient(circle at 30% 35%, rgba(0,230,255,0.12), rgba(244,123,82,0.06) 45%, transparent 65%)',
                    filter: 'blur(2px)',
                }}
            />

            <div className="max-w-[1180px] mx-auto grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 lg:gap-16 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="eyebrow flex items-center gap-3 mb-6 md:mb-8"
                    >
                        <span className="inline-block w-2 h-2 rounded-full bg-[var(--b2b-orange)] shadow-[0_0_10px_rgba(244,123,82,0.9)]" />
                        Case Studies · Anonymised briefs
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display text-white text-[40px] md:text-[64px] lg:text-[72px] leading-[0.96] tracking-[-0.04em]"
                    >
                        Our Latest
                        <br />
                        <span className="text-[var(--b2b-text-muted)]">Work</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.2 }}
                        className="mt-4 max-w-[560px] text-[15px] md:text-[17px] leading-[1.6] text-[var(--b2b-text-muted)]"
                    >
                       Explore our latest projects—where strategy, creativity, and technology come together to deliver measurable results and meaningful business growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.32 }}
                        className="mt-8 flex flex-wrap items-center gap-3"
                    >
                        <a
                            href="#work"
                            onClick={scrollTo('work')}
                            className="b2b-btn-primary"
                            data-testid="case-study-hero-cta-primary"
                        >
                            Browse case studies
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            onClick={scrollTo('contact')}
                            className="b2b-btn-ghost"
                            data-testid="case-study-hero-cta-secondary"
                        >
                            Request unredacted brief
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-[20px] overflow-hidden border border-white/12 bg-gradient-to-br from-[#0E1018] to-[#080910] shadow-[0_40px_120px_-40px_rgba(0,230,255,0.25)]"
                >
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-[rgba(255,255,255,0.02)]">
                        <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A45]" />
                        </div>
                        <div className="flex-1 mx-2">
                            <div className="mx-auto max-w-[240px] h-6 rounded-full bg-white/5 flex items-center justify-center px-3">
                                <span className="font-mono text-[10px] text-white/50 truncate">briefs.base2brand.io/index</span>
                            </div>
                        </div>
                        <span className="font-mono text-[10px] text-[#00e6ff]/80">● indexed</span>
                    </div>

                    {/* <div className="p-5 md:p-6">
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
                            Case Study Index — Q3 2026
                        </div>
                        <div className="space-y-3">
                            {[
                                { n: '01', tag: 'BFSI · AI Risk', metric: '61% faster' },
                                { n: '02', tag: 'Govtech · Healthcare', metric: '9.4M users' },
                                { n: '03', tag: 'Industry 4.0', metric: '17% OEE lift' },
                                { n: '04', tag: 'Ecommerce · D2C', metric: '5.2X ROAS' },
                                { n: '05', tag: 'Healthcare · CRM', metric: '+39% leads' },
                            ].map((item) => (
                                <div
                                    key={item.n}
                                    className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <span className="font-mono text-[10px] text-[var(--b2b-orange)] shrink-0">
                                            CASE {item.n}
                                        </span>
                                        <span className="font-mono text-[10px] text-white/50 truncate">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <span className="font-display text-sm text-white shrink-0 ml-2">
                                        {item.metric}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <img src="/images/b2bjdp-sm.png" alt="" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45 }}
                className="max-w-[1180px] mx-auto mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px b2b-hairline rounded-2xl overflow-hidden"
            >
                {STATS.map((s) => (
                    <div
                        key={s.key}
                        className="bg-[rgba(10,11,18,0.55)] px-5 md:px-6 py-6 md:py-8 flex flex-col gap-2"
                    >
                        <div className="font-display text-3xl md:text-5xl text-[var(--b2b-orange)] tracking-[-0.03em]">
                            {s.value}
                        </div>
                        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--b2b-text-muted)]">
                            {s.label}
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
