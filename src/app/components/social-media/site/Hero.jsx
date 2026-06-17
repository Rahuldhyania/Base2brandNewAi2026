"use client";
import React, { useEffect, useState } from "react";
import {
  Search,
  Target,
  ShoppingBag,
  ThumbsUp,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { FLOATING_CARDS, HERO_TAGS, BRAND } from "../site/mock";
import SlotText from "@/components/ui/SlotText";
import Link from "next/link";

const ICONS = { Search, Target, ShoppingBag, ThumbsUp, Youtube };

function FloatingCard({ card, mouse }) {
  const Icon = ICONS[card.icon];
  const tx = (mouse.x - 0.5) * 14;
  const ty = (mouse.y - 0.5) * 14;
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/social-media-services/#${card.id}`}
      className="absolute hidden md:block z-20"
      style={{
        ...card.style,
        transform: `translate(${hovered ? 0 : tx}px, ${hovered ? 0 : ty}px) rotate(${hovered ? "0deg" : card.style.rotate}) scale(${hovered ? 1.06 : 1})`,
        transition: "transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative px-5 py-4 rounded-2xl border cursor-pointer"
        style={{
          background: "rgba(15,15,17,0.7)",
          borderColor: hovered ? card.color : `${card.color}55`,
          boxShadow: hovered
            ? `0 0 80px ${card.glow}, 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)`
            : `0 0 60px ${card.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
          backdropFilter: "blur(8px)",
          transition: "border-color 350ms ease, box-shadow 350ms ease",
        }}
      >
        <span
          className="absolute top-3 right-3 w-2 h-2 rounded-full"
          style={{ background: card.color, boxShadow: `0 0 12px ${card.color}` }}
        />
        <div className="flex items-center gap-2 mb-1">
          {Icon && <Icon size={18} style={{ color: card.color }} />}
          <span
            className="font-black tracking-tight text-white text-lg"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            {card.title}
          </span>
        </div>
        <div
          className="text-[10px] tracking-[0.18em] text-zinc-400"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {card.sub}
        </div>
      </div>
    </Link>
  );
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const onMove = (e) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#08080A" }}
    >
      {/* glow blobs */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-60"
        style={{ background: "#F37335" }}
      />
      <div
        className="absolute top-1/3 left-10 w-[420px] h-[420px] rounded-full blur-[120px] opacity-45"
        style={{ background: "#FF2D87" }}
      />
      <div
        className="absolute bottom-0 right-1/3 w-[600px] h-[600px] rounded-full blur-[140px] opacity-40"
        style={{ background: "#6C5CE7" }}
      />
      <div
        className="absolute top-1/4 right-10 w-[420px] h-[420px] rounded-full blur-[120px] opacity-30"
        style={{ background: "#C6FF3D" }}
      />

      {/* grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      {/* Top scrolling tape */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <div
          className="flex gap-10 pt-2 pb-2 whitespace-nowrap animate-marquee"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {[...HERO_TAGS, ...HERO_TAGS, ...HERO_TAGS].map((t, i) => (
            <span
              key={i}
              className="text-xs tracking-[0.2em] text-zinc-500 flex items-center gap-10"
            >
              {t}
              <span className="text-zinc-700">●</span>
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center">
        <p
          className="text-[11px] tracking-[0.28em] text-zinc-500"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {BRAND.name.toUpperCase()} · DIGITAL MARKETING
        </p>
      </div>

      {/* Floating cards */}
      {FLOATING_CARDS.map((c) => (
        <FloatingCard key={c.id} card={c} mouse={mouse} />
      ))}

      {/* Hero content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <div
          className="mb-6 px-4 py-1.5 rounded-full border border-white/10"
          style={{ background: "rgba(20,20,22,0.5)" }}
        >
          <span
            className="text-[10px] tracking-[0.28em] text-zinc-400 flex items-center gap-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#F37335",
                boxShadow: "0 0 10px #F37335",
              }}
            />
            DIGITAL MARKETING SERVICES TO DRIVE GROWTH
          </span>
        </div>

        <h1
          className="text-center font-black text-white leading-[0.9] tracking-tight"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(56px, 9vw, 150px)",
          }}
        >
          <span className="block">GROW.</span>
          <SlotText
            default_text="RANK."
            items_text={["CONVERT.", "DOMINATE.", "PERFORM.", "SCALE.", "WIN."]}
            ClassName="justify-center"
          />
        </h1>

        <p className="mt-10 max-w-2xl text-center text-zinc-400 text-[16px] leading-relaxed">
          Digital marketing services built to drive business growth — boost
          online visibility, attract targeted audiences and increase
          conversions. Tailored strategies for lasting success.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-[1.03] bg-(--b2b-primary)"
            style={{
              color: "#fff",
              boxShadow: "0 10px 40px rgba(243,115,53,0.4)",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.08em",
            }}
          >
            REQUEST A QUOTE
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#services"
            className="px-6 py-3 rounded-full font-semibold text-sm border border-white/15 text-white hover:bg-white/5 transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.08em",
            }}
          >
            SEE SERVICES
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">★★★★★</span>
            <span
              className="text-[12px] tracking-[0.18em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              4.9 / 5 (89+ REVIEWS)
            </span>
          </div>
          <span className="w-1 h-1 rounded-full bg-zinc-600" />
          <span
            className="text-[12px] tracking-[0.18em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            TRUSTED BY 200+ BRANDS
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-600" />
          <span
            className="text-[12px] tracking-[0.18em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            A DECADE OF EXPERIENCE
          </span>
        </div>

        <div className="mt-14 flex items-center gap-3">
          <span className="w-10 h-px bg-zinc-700" />
          <span
            className="text-[10px] tracking-[0.28em] text-zinc-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            SCROLL FOR THE DETAIL
          </span>
          <span className="w-10 h-px bg-zinc-700" />
        </div>
      </div>
    </section>
  );
}
