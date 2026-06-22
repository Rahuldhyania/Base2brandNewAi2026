"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiSap,
    SiSalesforce,
    SiSnowflake,
    SiStripe,
    SiSlack,
    SiHubspot,
    SiZoho,
    SiQuickbooks,
    SiCloudflare,
    SiPostgresql,
    SiShopify,
    SiZapier,
    SiAsana,
    SiAirtable,
    SiMongodb,
    SiDatadog,
    SiZendesk,
    SiTwilio,
    SiNotion,
    SiSage,
} from "react-icons/si";
import { SectionHeading } from "./SectionHeading";

const LOGOS = [
    { Icon: SiSap, label: "SAP" },
    { Icon: SiSalesforce, label: "Salesforce" },
    { Icon: SiSnowflake, label: "Snowflake" },
    { Icon: SiStripe, label: "Stripe" },
    { Icon: SiSlack, label: "Slack" },
    { Icon: SiHubspot, label: "HubSpot" },
    { Icon: SiZoho, label: "Zoho" },
    { Icon: SiQuickbooks, label: "QuickBooks" },
    { Icon: SiCloudflare, label: "Cloudflare" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: SiShopify, label: "Shopify" },
    { Icon: SiZapier, label: "Zapier" },
    { Icon: SiAsana, label: "Asana" },
    { Icon: SiAirtable, label: "Airtable" },
    { Icon: SiMongodb, label: "MongoDB" },
    { Icon: SiDatadog, label: "Datadog" },
    { Icon: SiZendesk, label: "Zendesk" },
    { Icon: SiTwilio, label: "Twilio" },
    { Icon: SiNotion, label: "Notion" },
    { Icon: SiSage, label: "Sage" },
];

const MARQUEE_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS];

const LogoItem = ({ Icon, label, index }) => (
    <div
        className="group flex items-center gap-3 shrink-0"
        data-testid={`integration-${label.toLowerCase()}-${index}`}
    >
        <Icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors duration-300" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35 group-hover:text-white/80 transition-colors">
            {label}
        </span>
    </div>
);

const MarqueeRow = ({ reverse = false }) => (
    <div className="overflow-hidden">
        <div
            className={`flex items-center gap-12 w-max whitespace-nowrap ${reverse
                    ? "animate-marquee-reverse [animation-duration:75s]"
                    : "animate-marquee [animation-duration:65s]"
                }`}
        >
            {MARQUEE_LOGOS.map(({ Icon, label }, i) => (
                <LogoItem
                    key={`${label}-${i}`}
                    Icon={Icon}
                    label={label}
                    index={i}
                />
            ))}
        </div>
    </div>
);

export const Integrations = () => {
    return (
        <section
            id="integrations"
            className="relative py-12 md:py-16 overflow-hidden"
            data-testid="integrations-section"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
                <SectionHeading
                    eyebrow="Connected Ecosystem"
                    title={
                        <>
                            Wired into your stack.{" "}
                            <span className="text-brand">
                                Native, not bolted on.
                            </span>
                        </>
                    }
                    description="Bidirectional sync with the operational tools your teams already trust — ledgers, CRMs, warehouses, payment rails and warehouses."
                    align="center"
                    testId="integrations-heading"
                />
            </div>

            <div className="mt-16 relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[var(--b2b-bg)] to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[var(--b2b-bg)] to-transparent" />

                <div className="flex flex-col gap-10">
                    <MarqueeRow />
                    <MarqueeRow reverse />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-16 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16"
            >
                <div className="rounded-2xl border border-white/[0.07] erp-surface-panel backdrop-blur-sm px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full status-dot" />
                        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/70">
                            120+ pre-built connectors · custom integrations on
                            request
                        </span>
                    </div>
                    <a
                        href="#cta"
                        className="text-[13px] font-medium text-white/85 hover:text-brand inline-flex items-center gap-2 transition-colors"
                        data-testid="integrations-cta"
                    >
                        Request a connector
                        <svg
                            viewBox="0 0 24 24"
                            className="w-3.5 h-3.5"
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
                </div>
            </motion.div>
        </section>
    );
};

export default Integrations;
