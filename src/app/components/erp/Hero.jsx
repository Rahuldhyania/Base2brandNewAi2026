import React from "react";
import { motion } from "framer-motion";
import { BlackHoleWhiteHole } from "./BlackHoleWhiteHole";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

export const Hero = () => {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative min-h-screen overflow-hidden"
        >
            {/* Background atmosphere */}
            <div className="absolute inset-0 grain pointer-events-none" />
            <div className="absolute inset-0 vignette pointer-events-none" />

            {/* Soft top spotlight to anchor the brand */}
            <div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 pt-32 sm:pt-40 pb-18 lg:pb-18">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
                    {/* Left: content */}
                    <div className="max-w-xl">
                        <motion.div
                            {...fadeUp}
                            transition={{
                                ...fadeUp.transition,
                                delay: 0.1,
                            }}
                            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
                            data-testid="hero-eyebrow"
                        >
                            <span className="status-dot w-1.5 h-1.5 rounded-full" />
                            <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/70">
                                Mission Control for Operations
                            </span>
                        </motion.div>

                        <motion.h1
                            {...fadeUp}
                            transition={{
                                ...fadeUp.transition,
                                delay: 0.2,
                            }}
                            className="mt-8 font-display text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.02] tracking-[-0.025em] font-light text-white"
                            data-testid="hero-headline"
                        >
                            From{" "}
                            <span className="text-white/45 italic font-extralight">
                                operational chaos
                            </span>
                            <br />
                            to complete{" "}
                            <span className="relative inline-block">
                                visibility
                                <svg
                                    className="absolute -bottom-2 left-0 w-full h-2 overflow-visible"
                                    viewBox="0 0 200 8"
                                    preserveAspectRatio="none"
                                    fill="none"
                                >
                                    <motion.path
                                        d="M0 5 Q 50 1 100 5 T 200 5"
                                        stroke="var(--b2b-primary)"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{
                                            duration: 1.6,
                                            delay: 1.1,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    />
                                </svg>
                            </span>
                            .
                        </motion.h1>

                        <motion.p
                            {...fadeUp}
                            transition={{
                                ...fadeUp.transition,
                                delay: 0.35,
                            }}
                            className="mt-7 text-[15.5px] sm:text-[17px] leading-[1.55] text-white/75 max-w-[560px]"
                            data-testid="hero-subheading"
                        >
                            Unify inventory, finance, procurement,
                            manufacturing, sales, logistics and customer
                            operations into a single intelligent ERP ecosystem.
                        </motion.p>

                        <motion.p
                            {...fadeUp}
                            transition={{
                                ...fadeUp.transition,
                                delay: 0.5,
                            }}
                            className="mt-5 text-[14px] leading-relaxed text-white/50 max-w-[560px]"
                            data-testid="hero-description"
                        >
                            Most businesses operate through disconnected tools,
                            spreadsheets and manual processes. Our ERP solutions
                            create a single source of truth — giving your teams
                            real-time visibility, automation and control across
                            every department.
                        </motion.p>

                        <motion.div
                            {...fadeUp}
                            transition={{
                                ...fadeUp.transition,
                                delay: 0.65,
                            }}
                            className="mt-10 flex flex-wrap items-center gap-3.5"
                        >
                            <a
                                href="#cta"
                                className="btn-primary inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[13.5px] font-semibold tracking-tight"
                                data-testid="hero-primary-cta"
                            >
                                Book ERP Consultation
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 12h14M13 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#capabilities"
                                className="btn-ghost inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[13.5px] font-medium tracking-tight"
                                data-testid="hero-secondary-cta"
                            >
                                Explore ERP Capabilities
                            </a>
                        </motion.div>

                        {/* Stat strip */}
                        <motion.div
                            {...fadeUp}
                            transition={{
                                ...fadeUp.transition,
                                delay: 0.85,
                            }}
                            className="mt-14 grid grid-cols-3 gap-6 max-w-[520px] border-t border-white/[0.06] pt-7"
                            data-testid="hero-stats"
                        >
                            {[
                                { v: "98%", l: "Process automation" },
                                { v: "12x", l: "Faster reporting" },
                                { v: "1×", l: "Source of truth" },
                            ].map((s) => (
                                <div key={s.l}>
                                    <div className="font-display text-2xl font-light text-white">
                                        {s.v}
                                    </div>
                                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                                        {s.l}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: black hole / white hole */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.2,
                        }}
                        className="relative"
                    >
                        <BlackHoleWhiteHole />
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="hidden lg:flex items-center gap-3 mt-16 text-white/40"
                    data-testid="hero-scroll-hint"
                >
                    <span className="font-mono text-[10px] uppercase tracking-[0.32em]">
                        Scroll to begin transmission
                    </span>
                    <motion.span
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="block w-8 h-px bg-white/30"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
