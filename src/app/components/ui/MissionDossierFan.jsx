"use client";

import React from "react";
import CardFanCarousel from "@/components/ui/card-fan-carousel";
import MissionDossierCard from "@/components/ui/MissionDossierCard";
import Container from "@/components/shopify-solution/site/Container";
import SectionHeader from "@/components/shopify-solution/site/SectionHeader";
import StatusChip from "@/components/shopify-solution/site/StatusChip";
import Reveal from "@/components/shopify-solution/site/Reveal";
import { cn } from "@/lib/utils";

export const DEFAULT_DOSSIER_CARDS = [
    {
        id: "dossier-01",
        code: "DOSSIER-01",
        title: "Discovery & Systems Audit",
        body: "We map your commerce stack — storefront, CRM, ERP, OMS, ads — to surface the gaps and the multipliers.",
        accent: "MISSION PLANNING",
        channel: "CHANNEL A · LOCKED",
    },
    {
        id: "dossier-02",
        code: "DOSSIER-02",
        title: "UX & Design System",
        body: "A Shopify-native design system tuned for conversion, scale, and storytelling across PDPs and bundles.",
        accent: "BRAND-LED UX",
        channel: "CHANNEL A · LOCKED",
    },
    {
        id: "dossier-03",
        code: "DOSSIER-03",
        title: "Shopify Build",
        body: "Online Store 2.0, Liquid, Hydrogen — engineered for performance and shipped on cadence.",
        accent: "ENGINEERING",
        channel: "CHANNEL A · LOCKED",
    },
    {
        id: "dossier-04",
        code: "DOSSIER-04",
        title: "Integrations",
        body: "Klaviyo, Recharge, Odoo, Unicommerce, EasyEcom, Increff — wired into a unified commerce OS.",
        accent: "ECOSYSTEM",
        channel: "CHANNEL A · LOCKED",
    },
    {
        id: "dossier-05",
        code: "DOSSIER-05",
        title: "Launch & Stabilize",
        body: "Controlled cutovers, SEO preserved, observability online — we land safely and accelerate from there.",
        accent: "OPERATIONS",
        channel: "CHANNEL A · LOCKED",
    },
    {
        id: "dossier-06",
        code: "DOSSIER-06",
        title: "Growth Ops",
        body: "Continuous experimentation: lifecycle, paid acquisition, CRO, and analytics tied to revenue.",
        accent: "COMPOUNDING",
        channel: "CHANNEL A · LOCKED",
    },
    {
        id: "dossier-07",
        code: "DOSSIER-07",
        title: "Scale & Optimize",
        body: "Performance tuning, CRO experiments, and lifecycle automation — compounding gains across storefront, retention, and acquisition.",
        accent: "OPTIMIZATION",
        channel: "CHANNEL A · LOCKED",
    },
];

/**
 * Ready-to-use mission dossier fan carousel.
 * Pass `cards` to override defaults, or `renderCard` for fully custom slots.
 */
export function MissionDossierFan({
    cards = DEFAULT_DOSSIER_CARDS,
    renderCard,
    className,
    eyebrow = "PLAYBOOKS · MISSION DOSSIERS",
    title = "Six dossiers. One Shopify mission.",
    subtitle = "How we run a Shopify engagement — from discovery to growth operations — as a fan of focused dossiers.",
    badgeLabel,
    showHeader = true,
}) {
    const dossierCount = cards.length;
    const resolvedBadge =
        badgeLabel ?? `${dossierCount} DOSSIERS`;

    return (
        <section
            className={cn(
                "relative py-16 overflow-visible border-t border-white/[0.06]",
                className,
            )}
            data-testid="mission-dossier-fan-section"
        >
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(700px circle at 50% 40%, var(--b2b-primary-soft), rgba(5,5,5,0) 55%)",
                }}
            />

            <Container className="relative">
                {showHeader && (
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <SectionHeader
                            eyebrow={eyebrow}
                            title={title}
                            subtitle={subtitle}
                        />
                        <Reveal delay={0.1}>
                            <StatusChip>{resolvedBadge}</StatusChip>
                        </Reveal>
                    </div>
                )}

                <div
                    className={
                        showHeader
                            ? "relative left-1/2 mt-10 md:mt-12 w-screen -translate-x-1/2"
                            : "relative left-1/2 w-screen -translate-x-1/2"
                    }
                >
                    <CardFanCarousel
                        cards={cards}
                        renderCard={
                            renderCard ??
                            ((card, index, { isCenter }) => (
                                <MissionDossierCard
                                    code={card.code}
                                    title={card.title}
                                    body={card.body}
                                    accent={card.accent}
                                    phase={card.phase}
                                    channel={card.channel}
                                    active={isCenter}
                                />
                            ))
                        }
                    />
                </div>
            </Container>
        </section>
    );
}

export default MissionDossierFan;
