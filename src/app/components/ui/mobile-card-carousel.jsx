"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Simple horizontal scroll carousel for mobile
 * @param {Object} props
 * @param {Array} props.cards - Array of card data objects
 * @param {(card: any, index: number) => React.ReactNode} [props.renderCard]
 * @param {string} [props.className]
 */
export default function MobileCardCarousel({
    cards = [],
    renderCard,
    className,
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = cards.length;

    if (!totalCards) return null;

    const renderCardContent = (card, index) => {
        const isCenter = index === currentIndex;
        const meta = { isCenter, centerIndex: currentIndex };

        if (renderCard) return renderCard(card, index, meta);

        if (card.content) return card.content;

        if (card.imgUrl) {
            return (
                <img
                    src={card.imgUrl}
                    alt={card.alt || ""}
                    className="h-full w-full object-cover rounded-[inherit]"
                    draggable={false}
                />
            );
        }

        return null;
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalCards);
    };

    return (
        <section
            className={cn("w-full select-none", className)}
            data-testid="mobile-card-carousel"
        >
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {cards.map((card, index) => {
                        const content = renderCardContent(card, index);

                        const cardNode = (
                            <div className="h-full w-full overflow-hidden rounded-[inherit]">
                                {content}
                            </div>
                        );

                        if (card.linkUrl) {
                            return (
                                <a
                                    key={card.id ?? card.key ?? index}
                                    href={card.linkUrl}
                                    className="flex-shrink-0 w-full h-[400px] sm:h-[440px] px-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="h-full w-full rounded-3xl overflow-hidden">
                                        {cardNode}
                                    </div>
                                </a>
                            );
                        }

                        return (
                            <div
                                key={card.id ?? card.key ?? index}
                                className="flex-shrink-0 w-full h-[400px] sm:h-[440px] px-4"
                            >
                                <div className="h-full w-full rounded-3xl overflow-hidden">
                                    {cardNode}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {totalCards > 1 && (
                <div className="mt-6 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:border-white/25 hover:text-white/80 active:opacity-70 transition-colors duration-300"
                        aria-label="Previous"
                        data-testid="mobile-card-prev"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <div
                        className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/55 min-w-[72px] text-center tabular-nums"
                        data-testid="mobile-card-counter"
                    >
                        {(currentIndex + 1).toString().padStart(2, "0")} /{" "}
                        {totalCards.toString().padStart(2, "0")}
                    </div>

                    <button
                        type="button"
                        onClick={handleNext}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:border-white/25 hover:text-white/80 active:opacity-70 transition-colors duration-300"
                        aria-label="Next"
                        data-testid="mobile-card-next"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
}
