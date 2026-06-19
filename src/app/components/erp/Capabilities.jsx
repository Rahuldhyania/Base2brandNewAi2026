import React from "react";
import { motion } from "framer-motion";
import {
    Eye,
    Activity,
    Workflow,
    Shield,
    Network,
    LineChart,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
    {
        icon: Eye,
        title: "Single Source of Truth",
        desc: "One unified data layer across every department. Every record, every transaction, every signal — synchronised.",
        tag: "01 · Unification",
        span: "md:col-span-2",
    },
    {
        icon: Activity,
        title: "Real-Time Visibility",
        desc: "Operational telemetry across inventory, finance and logistics — streamed live, not stitched together monthly.",
        tag: "02 · Telemetry",
        span: "",
    },
    {
        icon: Workflow,
        title: "Workflow Automation",
        desc: "Rule-based and AI-assisted automations replace manual handoffs across teams.",
        tag: "03 · Automation",
        span: "",
    },
    {
        icon: Network,
        title: "Connected Ecosystem",
        desc: "ERP core wired into CRM, manufacturing, procurement, analytics & logistics with native bidirectional sync.",
        tag: "04 · Connectivity",
        span: "md:col-span-2",
    },
    {
        icon: LineChart,
        title: "Predictive Intelligence",
        desc: "Forecast demand, cashflow and capacity using cross-module data — not spreadsheets.",
        tag: "05 · Intelligence",
        span: "md:col-span-2",
    },
    {
        icon: Shield,
        title: "Enterprise Governance",
        desc: "Role-based access, audit trails and regulatory reporting baked into the operating layer.",
        tag: "06 · Trust",
        span: "",
    },
];

const Card = ({ item, idx }) => {
    const Icon = item.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.7,
                delay: idx * 0.06,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`group relative rounded-2xl border border-white/[0.07] erp-surface-panel backdrop-blur-sm p-7 card-glow overflow-hidden ${item.span}`}
            data-testid={`capability-card-${idx}`}
        >
            {/* subtle radial accent on hover */}
            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none capability-hover-glow" />

            <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                    {item.tag}
                </span>
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 group-hover:border-white/25 group-hover:text-brand transition-all">
                    <Icon className="w-4 h-4" strokeWidth={1.4} />
                </div>
            </div>

            <h3 className="mt-8 font-display text-[22px] sm:text-[24px] tracking-[-0.015em] font-light text-white">
                {item.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-white/55 max-w-md">
                {item.desc}
            </p>

            {/* hairline accent */}
            <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60" />
        </motion.div>
    );
};

export const Capabilities = () => {
    return (
        <section
            id="capabilities"
            className="relative py-12 md:py-16"
            data-testid="capabilities-section"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <SectionHeading
                        eyebrow="ERP Capabilities"
                        title={
                            <>
                                The operating layer beneath{" "}
                                <span className="text-white/40 italic font-extralight">
                                    every department.
                                </span>
                            </>
                        }
                        description="Six core capabilities that transform fragmented operations into a single, intelligent system."
                        testId="capabilities-heading"
                    />
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
                        / 06 modules engaged
                    </div>
                </div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                    {ITEMS.map((item, idx) => (
                        <Card key={item.title} item={item} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
