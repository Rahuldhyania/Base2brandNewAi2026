import React from "react";
import { motion } from "framer-motion";

export const CTA = () => {
    return (
        <section
            id="cta"
            className="relative py-12 md:py-16 overflow-hidden"
            data-testid="cta-section"
        >
            {/* ambient accent */}
            <div className="absolute inset-x-0 -top-32 mx-auto w-[900px] h-[500px] pointer-events-none cta-accent-glow" />
            <div
                className="absolute inset-x-0 bottom-0 mx-auto w-[1200px] h-[500px] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
                >
                    <span className="w-1.5 h-1.5 rounded-full status-dot" />
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/65">
                        Initiate transmission
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mt-8 font-display text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.02] tracking-[-0.025em] font-light text-white"
                    data-testid="cta-headline"
                >
                    Step into the{" "}
                    <span className="text-white/45 italic font-extralight">
                        command center
                    </span>{" "}
                    of your business.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-7 text-[15.5px] leading-relaxed text-white/55 max-w-2xl mx-auto"
                >
                    Schedule a discovery call with our ERP architects. We will
                    map your current operations, identify the singularities
                    and chart the path to clarity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="#"
                        className="btn-primary inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-[14px] font-semibold tracking-tight"
                        data-testid="cta-primary"
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
                        className="btn-ghost inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-[14px] font-medium tracking-tight"
                        data-testid="cta-secondary"
                    >
                        Explore ERP Capabilities
                    </a>
                </motion.div>

                {/* trust strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/35"
                >
                    <span>SOC 2 · Type II</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>ISO 27001</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>GDPR aligned</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>99.99% uptime SLA</span>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
