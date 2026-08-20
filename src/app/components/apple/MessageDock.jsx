'use client'
import React, { useEffect, useRef, useState } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Message Dock — converted from supplied TypeScript component to JSX and
 * adapted to the Apple Ecosystem dark/blue design system. Re-purposed as the
 * Apple Intelligence Features showcase: each "character" represents one
 * intelligence capability (Smart Actions, Context Awareness, Private Processing,
 * Intelligent Workflows). Clicking a feature expands the dock to reveal a
 * concise feature brief inline.
 *
 * Public API preserved (characters, onMessageSend, onCharacterSelect, etc.)
 * with two added affordances: `mode="inline"` to render statically inside a
 * section (vs the original fixed positioning) and `inputLabel` for the
 * expanded state subhead.
 */

const defaultCharacters = [
  { id: "sparkle", emoji: "✨", name: "Sparkle", online: false },
  { id: "smart-actions", emoji: "⚡", name: "Smart Actions", online: true, gradientColors: "rgba(10,132,255,0.55), rgba(10,132,255,0.18)" },
  { id: "context", emoji: "🧠", name: "Context Awareness", online: true, gradientColors: "rgba(90,200,250,0.5), rgba(90,200,250,0.16)" },
  { id: "private", emoji: "🔒", name: "Private Processing", online: true, gradientColors: "rgba(100,210,255,0.5), rgba(100,210,255,0.16)" },
  { id: "workflows", emoji: "🌀", name: "Intelligent Workflows", online: true, gradientColors: "rgba(64,156,255,0.55), rgba(64,156,255,0.18)" },
];

const getGradient = (c) => c.gradientColors || "rgba(10,132,255,0.5), rgba(10,132,255,0.15)";

export default function MessageDock({
  characters = defaultCharacters,
  onMessageSend,
  onCharacterSelect,
  onDockToggle,
  className,
  expandedWidth = 520,
  mode = "fixed", // "fixed" | "inline"
  position = "bottom",
  showSparkleButton = true,
  showMenuButton = true,
  enableAnimations = true,
  animationDuration = 1,
  placeholder = (name) => `Ask ${name} about your workflow…`,
  inputLabel,
  autoFocus = true,
  closeOnClickOutside = true,
  closeOnEscape = true,
  closeOnSend = true,
  testId,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const dockRef = useRef(null);
  const [collapsedWidth, setCollapsedWidth] = useState(320);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (dockRef.current && !hasInitialized) {
      const w = dockRef.current.offsetWidth;
      if (w > 0) { setCollapsedWidth(w); setHasInitialized(true); }
    }
  }, [hasInitialized]);

  useEffect(() => {
    if (!closeOnClickOutside) return;
    const handler = (e) => {
      if (dockRef.current && !dockRef.current.contains(e.target)) {
        setExpanded(null); setMessageInput(""); onDockToggle?.(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [closeOnClickOutside, onDockToggle]);

  const isExpanded = expanded !== null;
  const selected = isExpanded ? characters[expanded] : null;

  const positionClasses =
    mode === "inline"
      ? "relative inline-block"
      : position === "top"
      ? "fixed top-6 left-1/2 -translate-x-1/2 z-50"
      : "fixed bottom-6 left-1/2 -translate-x-1/2 z-50";

  const containerVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 280, damping: 28, mass: 0.8, staggerChildren: 0.08, delayChildren: 0.15 } },
  };

  const hoverAnim = shouldReduceMotion
    ? { scale: 1.02 }
    : { scale: 1.06, y: -4, transition: { type: "spring", stiffness: 400, damping: 24 } };

  const handleCharacterClick = (index) => {
    if (expanded === index) { setExpanded(null); setMessageInput(""); onDockToggle?.(false); return; }
    setExpanded(index);
    onCharacterSelect?.(characters[index], index);
    onDockToggle?.(true);
  };

  const handleSend = () => {
    if (messageInput.trim() && expanded !== null) {
      onMessageSend?.(messageInput, characters[expanded], expanded);
      setMessageInput("");
      if (closeOnSend) { setExpanded(null); onDockToggle?.(false); }
    }
  };

  return (
    <m.div
      ref={dockRef}
      data-testid={testId}
      className={cn(positionClasses, className)}
      initial={enableAnimations ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={enableAnimations ? containerVariants : {}}
    >
      <m.div
        className="rounded-full px-4 py-2 border mx-auto   max-w-[360px] md:max-w-[520px]"
        animate={{
          width: isExpanded ? expandedWidth : collapsedWidth,
          background: isExpanded && selected
            ? `linear-gradient(180deg, ${getGradient(selected)}), #0A0F18`
            : "linear-gradient(180deg, rgba(20,28,40,0.85) 0%, rgba(10,16,28,0.85) 100%)",
        }}
        style={{
          borderColor: "rgba(90,200,250,0.22)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 24px 60px -16px rgba(10,132,255,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
        transition={enableAnimations ? {
          type: "spring", stiffness: isExpanded ? 300 : 500, damping: isExpanded ? 30 : 34, mass: 0.7,
          background: { duration: 0.2 * animationDuration, ease: "easeInOut" },
        } : { duration: 0 }}
      >
        <div className="flex items-center gap-2 relative">
          {/* Sparkle */}
          {showSparkleButton && (
            <m.div
              className="flex items-center justify-center"
              animate={{ opacity: isExpanded ? 0 : 1, x: isExpanded ? -20 : 0, scale: isExpanded ? 0.8 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <m.button
                type="button"
                className="w-11 h-11 flex items-center justify-center cursor-pointer rounded-full"
                whileHover={!isExpanded ? { scale: 1.06, y: -2 } : undefined}
                whileTap={{ scale: 0.95 }}
                aria-label="Apple Intelligence"
              >
                <span className="text-xl">✨</span>
              </m.button>
            </m.div>
          )}

          <m.div
            className="w-px h-6 bg-white/12 mr-2 -ml-2"
            animate={{ opacity: isExpanded ? 0 : 1, scaleY: isExpanded ? 0 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: isExpanded ? 0 : 0.3 }}
          />

          {/* Character buttons (slice for showSparkleButton/showMenuButton parity) */}
          {characters.slice(1, characters.length).map((character, idx) => {
            const actualIndex = idx + 1;
            const isSelected = expanded === actualIndex;
            return (
              <m.div
                key={character.name}
                className={cn("relative", isSelected && isExpanded && "absolute left-1 top-1 z-20")}
                style={{
                  width: isSelected && isExpanded ? 0 : "auto",
                  minWidth: isSelected && isExpanded ? 0 : "auto",
                  overflow: "visible",
                }}
                animate={{
                  opacity: isExpanded && !isSelected ? 0 : 1,
                  y: isExpanded && !isSelected ? 60 : 0,
                  scale: isExpanded && !isSelected ? 0.8 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30, delay: isExpanded && !isSelected ? idx * 0.04 : 0 }}
              >
                <m.button
                  type="button"
                  className={cn(
                    "relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer",
                  )}
                  style={{
                    background: isSelected && isExpanded
                      ? "rgba(255,255,255,0.95)"
                      : `linear-gradient(180deg, ${getGradient(character)})`,
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  onClick={() => handleCharacterClick(actualIndex)}
                  whileHover={!isExpanded ? hoverAnim : { scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Show ${character.name}`}
                  data-testid={`apple-intel-feature-${character.id || character.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="text-xl">{character.emoji}</span>
                  {character.online && (
                    <m.span
                      className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2"
                      style={{ background: "#64D2FF", borderColor: "#020408" }}
                      initial={{ scale: 0 }}
                      animate={{ scale: isExpanded && !isSelected ? 0 : 1 }}
                      transition={{ delay: isExpanded ? (isSelected ? 0.3 : 0) : (idx + 1) * 0.08 + 0.4, type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </m.button>
              </m.div>
            );
          })}

          <AnimatePresence>
            {isExpanded && (
              <m.input
                key={`input-${expanded}`}
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                  if (e.key === "Escape" && closeOnEscape) { setExpanded(null); setMessageInput(""); onDockToggle?.(false); }
                }}
                placeholder={inputLabel || placeholder(selected?.name || "")}
                className="w-[150px] md:w-[300px] absolute left-14 right-0 bg-transparent border-none outline-none text-sm font-medium z-50 text-white placeholder-white/55"
                autoFocus={autoFocus}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 30 } }}
                exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeOut" } }}
              />
            )}
          </AnimatePresence>

          <m.div
            className="w-px h-6 bg-white/12 ml-2 -mr-2"
            animate={{ opacity: isExpanded ? 0 : 1, scaleY: isExpanded ? 0 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {showMenuButton && (
            <m.div
              className={cn("flex items-center justify-center z-20", isExpanded && "absolute right-0")}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <AnimatePresence mode="wait">
                {!isExpanded ? (
                  <m.button
                    key="menu"
                    type="button"
                    className="w-11 h-11 flex items-center justify-center cursor-pointer rounded-full"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Menu"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/70">
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  </m.button>
                ) : (
                  <m.button
                    key="send"
                    type="button"
                    onClick={handleSend}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/95 hover:bg-white transition-colors disabled:opacity-50 cursor-pointer relative z-30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={!messageInput.trim()}
                    initial={{ opacity: 0, scale: 0, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { delay: 0.25, type: "spring", stiffness: 400, damping: 30 } }}
                    exit={{ opacity: 0, scale: 0, rotate: 90, transition: { duration: 0.1, ease: "easeIn" } }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2.5">
                      <path d="m22 2-7 20-4-9-9-4z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </m.button>
                )}
              </AnimatePresence>
            </m.div>
          )}
        </div>
      </m.div>
    </m.div>
  );
}
