"use client";

import React from "react";
import CardFanCarousel from "@/components/ui/card-fan-carousel";
import MissionDossierCard from "@/components/ui/MissionDossierCard";
import Container from "@/components/shopify-solution/site/Container";
import SectionHeader from "@/components/shopify-solution/site/SectionHeader";
import StatusChip from "@/components/shopify-solution/site/StatusChip";
import Reveal from "@/components/shopify-solution/site/Reveal";
import { cn } from "@/lib/utils";


/**
 * Ready-to-use mission dossier fan carousel.
 * Pass `cards` to override defaults, or `renderCard` for fully custom slots.
 * Pass `cardImage` to show the same image on every card (omitted by default);
 * a card can override it with its own `image` field.
 */
export function MissionDossierFan({
    cards ,
    renderCard,
    className,
    eyebrow = "PLAYBOOKS · MISSION DOSSIERS",
    title = "Six dossiers. One Shopify mission.",
    subtitle = "How we run a Shopify engagement — from discovery to growth operations — as a fan of focused dossiers.",
    badgeLabel,
    showHeader = true,
    cardImage,
}) {
    // const dossierCount = cards.length; 
    const resolvedBadge =`${badgeLabel} DOSSIERS`;

    return (
        <section
            className={cn(
                "relative py-12 md:py-16 overflow-visible border-t border-white/[0.06] scroll-mt-24 md:scroll-mt-28",
                className,
            )}
            id="mission-dossier"
        >
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none "
                style={{
                    background:
                      "radial-gradient(700px circle at 50% 40%, color-mix(in srgb, var(--b2b-primary) 60%, transparent), color-mix(in srgb, var(--b2b-primary) 20%, transparent), transparent 55%)",
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
                            ? "relative left-1/2 mt-4 w-screen -translate-x-1/2"
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
                                    image={card.image || cardImage}
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
