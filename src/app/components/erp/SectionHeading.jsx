import React from "react";
import { m } from "framer-motion";

export const SectionHeading = ({
    eyebrow,
    title,
    description,
    align = "left",
    testId,
}) => {
    const wrap = align === "center" ? "text-center mx-auto" : "text-left";
    return (
        <div
            className={`max-w-3xl ${wrap}`}
            data-testid={testId || "section-heading"}
        >
            {eyebrow && (
                <m.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center gap-2.5 ${align === "center" ? "" : ""}`}
                >
                    <span className="w-1.5 h-1.5 rounded-full status-dot" />
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/55">
                        {eyebrow}
                    </span>
                </m.div>
            )}
            <m.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance text-white"
            >
                {title}
            </m.h2>
            {description && (
                <m.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-5 text-[15px] leading-[1.6] text-white/55 max-w-2xl mx-auto"
                >
                    {description}
                </m.p>
            )}
        </div>
    );
};

export default SectionHeading;
