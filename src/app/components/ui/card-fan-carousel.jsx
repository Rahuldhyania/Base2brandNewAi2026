"use client";

import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import MobileCardCarousel from "./mobile-card-carousel";

const MAX_VISIBLE = 7;
const HALF = 3;

const FAN_POSITIONS = [
    { rot: -21, scale: 0.7756, x: -30, y: 7.3, zIndex: 1 },
    { rot: -14, scale: 0.8498, x: -22, y: 4.0, zIndex: 2 },
    { rot: -7, scale: 0.9346, x: -11, y: 1.3, zIndex: 3 },
    { rot: 0, scale: 1.0, x: 0, y: 0.0, zIndex: 10 },
    { rot: 7, scale: 0.9346, x: 11, y: 1.3, zIndex: 3 },
    { rot: 14, scale: 0.8498, x: 22, y: 4.0, zIndex: 2 },
    { rot: 21, scale: 0.7756, x: 30, y: 7.3, zIndex: 1 },
];

function getResponsiveMultiplier(width) {
    if (width < 480) return 0.28;
    if (width < 640) return 0.38;
    if (width < 768) return 0.5;
    if (width < 1024) return 0.75;
    return 1.0;
}

function getHeightMultiplier(width) {
    let idealPx;
    if (width < 480) idealPx = 22 * 16;
    else if (width < 640) idealPx = 26 * 16;
    else if (width < 768) idealPx = 28 * 16;
    else if (width < 1024) idealPx = 34 * 16;
    else idealPx = 38 * 16;

    const available = window.innerHeight * 0.82;
    if (available >= idealPx) return 1;
    return Math.max(0.88, available / idealPx);
}

function getSlotConfig(totalCards, slot) {
    if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot];

    const center = totalCards >> 1;
    const distance =
        totalCards > 1 ? (slot - center) / center : 0;
    const absDistance = Math.abs(distance);

    return {
        rot: distance * 21,
        scale: 1.0 - 0.2244 * absDistance * absDistance,
        x: distance * 32,
        y: absDistance * absDistance * 7.3,
        zIndex: 10 - Math.abs(slot - center),
    };
}

function getOuterFanX(totalCards) {
    return totalCards >= MAX_VISIBLE ? 30 : 32;
}

function getFanSpreadScale(width, totalCards) {
    const multiplier = getResponsiveMultiplier(width);
    const cardHalfWidthPx = width < 640 ? 132 : width < 1024 ? 160 : 180;
    const outerDistanceRem = getOuterFanX(totalCards) * multiplier;
    const offsetRem = getVisualBalanceOffset(
        totalCards,
        multiplier,
        1,
    );
    const requiredHalfWidthPx =
        (Math.abs(outerDistanceRem) + offsetRem) * 16 +
        cardHalfWidthPx +
        48;
    const availableHalfWidthPx = width / 2 - 32;

    if (requiredHalfWidthPx <= availableHalfWidthPx) return 1;
    return Math.max(0.68, availableHalfWidthPx / requiredHalfWidthPx);
}

/** Compensate for origin-bottom rotation so fan looks visually centered. */
function getVisualBalanceOffset(totalCards, multiplier, spreadScale = 1) {
    const base =
        totalCards >= 7 ? 3.75 : totalCards >= 6 ? 2.5 : 1.75;

    return base * multiplier * spreadScale;
}

function toFanX(xRem, multiplier, spreadScale, totalCards) {
    return (
        xRem * multiplier * spreadScale +
        getVisualBalanceOffset(totalCards, multiplier, spreadScale)
    );
}

const ARROW_CLASSES =
    "relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:border-white/25 hover:text-white/80 active:opacity-70 transition-colors duration-300";

const CARD_SHELL =
    "fan-card absolute left-1/2 top-[48%] w-[min(74vw,300px)] sm:w-[min(68vw,340px)] lg:w-[360px] h-[440px] sm:h-[480px] -translate-x-1/2 -translate-y-1/2 origin-bottom rounded-3xl will-change-transform cursor-pointer";

function Chevron({ direction }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
        >
            {direction === "left" ? (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                />
            ) : (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                />
            )}
        </svg>
    );
}

/**
 * @param {Object} props
 * @param {Array} props.cards - Array of card data objects
 * @param {(card: any, index: number) => React.ReactNode} [props.renderCard]
 * @param {string} [props.className]
 */
export default function CardFanCarousel({
    cards = [],
    renderCard,
    className,
}) {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const isAnimating = useRef(false);
    const hasEntered = useRef(false);
    const directionRef = useRef(null);
    const prevVisible = useRef(new Set());
    const [isInView, setIsInView] = useState(false);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1024,
    );

    const totalCards = cards.length;
    const needsPagination = totalCards > MAX_VISIBLE;
    const [centerIndex, setCenterIndex] = useState(totalCards >> 1);

    const getVisibleMap = useCallback(
        (center) => {
            const map = new Map();
            const visibleCount = needsPagination
                ? MAX_VISIBLE
                : totalCards;
            const centerSlot = visibleCount >> 1;

            for (let slot = 0; slot < visibleCount; slot++) {
                const cardIndex =
                    ((center + slot - centerSlot) % totalCards +
                        totalCards) %
                    totalCards;
                map.set(cardIndex, slot);
            }

            return map;
        },
        [totalCards, needsPagination],
    );

    const cycle = useCallback(
        (direction) => {
            if (isAnimating.current || totalCards <= 1) return;

            isAnimating.current = true;
            directionRef.current = direction;

            setCenterIndex((prev) =>
                direction === "right"
                    ? (prev + 1) % totalCards
                    : (prev - 1 + totalCards) % totalCards,
            );
        },
        [totalCards],
    );

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -8% 0px",
            },
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !totalCards) return undefined;

        const cardElements = Array.from(
            container.querySelectorAll(".fan-card"),
        );

        if (!cardElements.length) return undefined;

        const visibleMap = getVisibleMap(centerIndex);
        const previouslyVisible = prevVisible.current;
        const direction = directionRef.current;
        const playEntrance = isInView && !hasEntered.current;
        const multiplier = getResponsiveMultiplier(window.innerWidth);
        const spreadScale = getFanSpreadScale(
            window.innerWidth,
            totalCards,
        );
        const hMult = getHeightMultiplier(window.innerWidth);
        const slotCount = needsPagination ? MAX_VISIBLE : totalCards;
        const config = (slot) => getSlotConfig(slotCount, slot);
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (!isInView && !hasEntered.current) {
            cardElements.forEach((card) => {
                gsap.set(card, {
                    opacity: 0,
                    scale: 0.5,
                    x: 0,
                    y: `${12 * hMult}rem`,
                    rotation: 0,
                    zIndex: 0,
                });
            });
            return undefined;
        }

        if (playEntrance) isAnimating.current = true;

        let completedCount = 0;
        const visibleCount = visibleMap.size;

        const onCardDone = () => {
            if (++completedCount >= visibleCount) {
                isAnimating.current = false;
                if (playEntrance) hasEntered.current = true;
            }
        };

        cardElements.forEach((card, cardIndex) => {
            const slot = visibleMap.get(cardIndex);
            const wasVisible = previouslyVisible.has(cardIndex);

            if (slot !== undefined) {
                const { x, y, rot, scale, zIndex } = config(slot);
                const target = {
                    x: `${toFanX(x, multiplier, spreadScale, totalCards)}rem`,
                    y: `${y * hMult}rem`,
                    rotation: rot,
                    scale,
                    opacity: 1,
                    zIndex,
                };

                if (playEntrance) {
                    gsap.set(card, {
                        x: 0,
                        y: `${12 * hMult}rem`,
                        rotation: 0,
                        scale: 0.5,
                        opacity: 0,
                    });

                    if (reducedMotion) {
                        gsap.set(card, target);
                        onCardDone();
                    } else {
                        gsap.to(card, {
                            ...target,
                            duration: 1.2,
                            ease: "elastic.out(1.05,.78)",
                            delay: 0.2 + slot * 0.06,
                            onComplete: onCardDone,
                        });
                    }
                } else if (!wasVisible) {
                    const enterX = direction === "right" ? 40 : -40;
                    gsap.set(card, {
                        x: `${enterX}rem`,
                        y: `${y * hMult}rem`,
                        rotation: direction === "right" ? 30 : -30,
                        scale: 0.5,
                        opacity: 0,
                    });
                    gsap.to(card, {
                        ...target,
                        duration: 0.6,
                        ease: "power2.out",
                        onComplete: onCardDone,
                    });
                } else {
                    gsap.to(card, {
                        ...target,
                        duration: 0.5,
                        ease: "power2.out",
                        onComplete: onCardDone,
                    });
                }
            } else if (wasVisible) {
                const exitX = direction === "right" ? -40 : 40;
                gsap.to(card, {
                    x: `${exitX}rem`,
                    opacity: 0,
                    scale: 0.5,
                    rotation: direction === "right" ? -30 : 30,
                    duration: 0.4,
                    ease: "power2.in",
                    zIndex: 0,
                });
            } else if (playEntrance) {
                gsap.set(card, {
                    opacity: 0,
                    scale: 0.3,
                    x: 0,
                    y: 0,
                    zIndex: 0,
                });
            }
        });

        prevVisible.current = new Set(visibleMap.keys());

        const visibleEntries = [];
        cardElements.forEach((el, i) => {
            const slot = visibleMap.get(i);
            if (slot !== undefined) visibleEntries.push({ el, slot });
        });
        visibleEntries.sort((a, b) => a.slot - b.slot);

        let activeSlot = null;
        let leaveTimer = null;
        const centerSlot = visibleEntries.length >> 1;

        const updateHoverLayout = (hoveredSlot) => {
            const mult = getResponsiveMultiplier(window.innerWidth);
            const spread = getFanSpreadScale(
                window.innerWidth,
                totalCards,
            );
            const hM = getHeightMultiplier(window.innerWidth);

            visibleEntries.forEach(({ el, slot }) => {
                const base = config(slot);
                let targetX = toFanX(
                    base.x,
                    mult,
                    spread,
                    totalCards,
                );
                let targetY = base.y * hM;
                let targetRot = base.rot;
                let targetScale = base.scale;
                let delay = 0;
                let targetZ = base.zIndex;

                if (hoveredSlot !== null) {
                    const distance = Math.abs(slot - hoveredSlot);
                    delay = distance * 0.02;

                    if (slot === hoveredSlot) {
                        targetY -= 2.5 * hM;
                        targetScale *= 1.08;
                        targetRot = 0;
                        targetZ = 20;
                    } else {
                        const normalized =
                            centerSlot > 0
                                ? (slot - centerSlot) / centerSlot
                                : 0;
                        const pushStrength =
                            8 *
                            (1 - Math.abs(normalized)) *
                            (1 + 0.2 * Math.max(0, 3 - distance));

                        if (slot < hoveredSlot) {
                            targetX -= pushStrength * mult * spread;
                            targetRot -= 3 / (distance + 1);
                        } else {
                            targetX += pushStrength * mult * spread;
                            targetRot += 3 / (distance + 1);
                        }

                        if (
                            slot === visibleEntries.length - 1 &&
                            hoveredSlot < centerSlot
                        ) {
                            targetY -= 1 * hM;
                        }

                        if (slot === 0 && hoveredSlot > centerSlot) {
                            targetY -= 1 * hM;
                        }
                    }
                } else {
                    delay = Math.abs(slot - centerSlot) * 0.02;
                }

                gsap.to(el, {
                    x: `${targetX}rem`,
                    y: `${targetY}rem`,
                    rotation: targetRot,
                    scale: targetScale,
                    duration: 0.5,
                    delay,
                    ease: "elastic.out(1,.75)",
                    overwrite: "auto",
                });
                gsap.set(el, { zIndex: targetZ });
            });
        };

        const enterHandlers = visibleEntries.map(({ el, slot }) => {
            const handler = () => {
                if (isAnimating.current) return;
                if (leaveTimer) {
                    clearTimeout(leaveTimer);
                    leaveTimer = null;
                }
                if (activeSlot !== slot) {
                    activeSlot = slot;
                    updateHoverLayout(slot);
                }
            };
            el.addEventListener("mouseenter", handler);
            return { el, handler };
        });

        const onMouseLeave = () => {
            if (isAnimating.current) return;
            if (leaveTimer) clearTimeout(leaveTimer);
            leaveTimer = setTimeout(() => {
                activeSlot = null;
                updateHoverLayout(null);
            }, 50);
        };

        container.addEventListener("mouseleave", onMouseLeave);

        const onResize = () => {
            if (!isAnimating.current) updateHoverLayout(activeSlot);
        };

        window.addEventListener("resize", onResize);

        return () => {
            enterHandlers.forEach(({ el, handler }) =>
                el.removeEventListener("mouseenter", handler),
            );
            container.removeEventListener("mouseleave", onMouseLeave);
            window.removeEventListener("resize", onResize);
            if (leaveTimer) clearTimeout(leaveTimer);
        };
    }, [
        centerIndex,
        totalCards,
        getVisibleMap,
        needsPagination,
        isInView,
    ]);

    if (!totalCards) return null;

    // Use mobile carousel on screens < 768px
    if (windowWidth < 768) {
        return <MobileCardCarousel cards={cards} renderCard={renderCard} className={className} />;
    }

    const renderCardContent = (card, index) => {
        const isCenter = index === centerIndex;
        const meta = { isCenter, centerIndex };

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

    return (
        <section
            ref={sectionRef}
            className={cn("w-full select-none overflow-visible", className)}
            data-testid="card-fan-carousel"
        >
            <div
                ref={containerRef}
                className="relative mx-auto w-full overflow-visible h-[25rem] sm:h-[34rem] md:h-[36rem] lg:h-[40rem]"
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
                                className={CARD_SHELL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {cardNode}
                            </a>
                        );
                    }

                    return (
                        <div
                            key={card.id ?? card.key ?? index}
                            className={CARD_SHELL}
                            role="presentation"
                        >
                            {cardNode}
                        </div>
                    );
                })}
            </div>

            {totalCards > 1 && (
                <div className="mt-6 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => cycle("left")}
                        className={ARROW_CLASSES}
                        aria-label="Previous"
                        data-testid="card-fan-prev"
                    >
                        <Chevron direction="left" />
                    </button>

                    <div
                        className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/55 min-w-[72px] text-center tabular-nums"
                        data-testid="card-fan-counter"
                    >
                        {(centerIndex + 1).toString().padStart(2, "0")} /{" "}
                        {totalCards.toString().padStart(2, "0")}
                    </div>

                    <button
                        type="button"
                        onClick={() => cycle("right")}
                        className={ARROW_CLASSES}
                        aria-label="Next"
                        data-testid="card-fan-next"
                    >
                        <Chevron direction="right" />
                    </button>
                </div>
            )}
        </section>
    );
}

export { CardFanCarousel };
