"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Target,
  ThumbsUp,
  Youtube,
  ShieldCheck,
  PenLine,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "../site/mock";

const ICONS = { Search, Target, ThumbsUp, Youtube, ShieldCheck, PenLine };
const TOTAL = SERVICES.length.toString().padStart(2, "0");

function ServiceCard({ service, index }) {
  const Icon = ICONS[service.icon];
  const isEven = index % 2 === 1;
  const [hover, setHover] = useState(null);

  return (
    <div
      id={service.id}
      className="relative grid md:grid-cols-2 gap-x-14 items-center py-14"
    >
      <div
        className={`md:col-span-2 ${
          isEven ? "md:text-right" : "md:text-left"
        }`}
      >
        <span
          className="text-[11px] tracking-[0.3em]"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: service.tagColor,
          }}
        >
          {service.index} <span className="text-zinc-400">/ {TOTAL}</span>
        </span>
      </div>

      <div className={`${isEven ? "md:order-2" : ""}`}>
        <div
          className="relative aspect-[5/4] w-full max-w-[560px] mx-auto rounded-[28px] overflow-hidden"
          style={{
            background: service.cardGradient,
            transform: `rotate(${isEven ? "3deg" : "-3deg"})`,
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          <div
            className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/85 text-white"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
            }}
          >
            <span style={{ color: service.tagColor }}>{service.index}</span>
            <span className="text-zinc-500 mx-1">/</span>
            <span>{TOTAL}</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Icon
              size={140}
              strokeWidth={1.2}
              className="opacity-90"
              style={{ color: "rgba(10,10,10,0.85)" }}
            />
          </div>

          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 font-black uppercase tracking-tight whitespace-nowrap"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "38px",
              color: "rgba(10,10,10,0.25)",
              letterSpacing: "-0.02em",
            }}
          >
            {service.title}
          </div>

          <div
            className="absolute -top-20 -left-20 w-60 h-60 rounded-full blur-3xl"
            style={{ background: "rgba(255,255,255,0.25)" }}
          />
        </div>
      </div>

      <div className={`${isEven ? "md:order-1" : ""}`}>
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: service.cardGradient,
              boxShadow: `0 8px 24px ${service.tagColor}40`,
            }}
          >
            <Icon size={28} className="text-zinc-900" strokeWidth={2} />
          </div>
          <div>
            <h2
              className="font-black tracking-tight text-white"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(36px, 4.5vw, 64px)",
                lineHeight: "0.95",
                letterSpacing: "-0.02em",
              }}
            >
              {service.title.toUpperCase()}
            </h2>
            <p
              className="text-white mt-1 text-[12px] tracking-[0.18em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {service.fullName.toUpperCase()}
            </p>
          </div>
        </div>

        <h3
          className="text-white mt-4 mb-4 font-bold"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(18px, 1.5vw, 22px)",
            letterSpacing: "0.01em",
            lineHeight: "1.2",
          }}
        >
          {service.headline}
        </h3>
        <p className="text-white max-w-md leading-relaxed mb-6 text-[15px]">
          {service.description}
        </p>

        <ul className="divide-y divide-zinc-200 border-t border-zinc-200 mb-8">
          {service.items.map((it, i) => {
            const num = String(i + 1).padStart(2, "0");
            const active = hover === i;
            return (
              <li
                key={it}
                className="group flex items-center gap-4 py-3.5 cursor-pointer"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              >
                <span
                  className="text-[11px] tracking-[0.2em] w-8"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: active ? service.tagColor : "#9CA3AF",
                    transition: "color 200ms",
                  }}
                >
                  {num}
                </span>
                <span
                  className="flex-1 text-white font-medium"
                  style={{
                    transform: active ? "translateX(6px)" : "none",
                    transition: "transform 250ms ease",
                  }}
                >
                  {it}
                </span>
                <ArrowRight
                  size={16}
                  style={{
                    color: active ? service.tagColor : "#9CA3AF",
                    transform: active ? "translateX(4px)" : "none",
                    transition: "all 250ms ease",
                  }}
                />
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.08em",
          }}
        >
          {service.cta.toUpperCase()}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}

const SOCIAL_MEDIA_DEFAULT_LOGO = "/images/socialmedialogo.png";
const TRIGGER_OFFSET = 10; // px from top of viewport

export default function ServicesSection() {
  useEffect(() => {
    const dispatch = (logoUrl, color) =>
      window.dispatchEvent(
        new CustomEvent("serviceActive", { detail: { logoUrl, color } })
      );

    const handleScroll = () => {
      let activeService = null;

      for (const service of SERVICES) {
        const el = document.getElementById(service.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= TRIGGER_OFFSET) {
          activeService = service;
        }
      }

      if (activeService) {
        dispatch(activeService.logoUrl, activeService.tagColor);
      } else {
        dispatch(SOCIAL_MEDIA_DEFAULT_LOGO, null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="services"
      className="relative"
      // style={{ background: "#F4F2EE" }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="mb-3">
          <span
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] text-white"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            OUR DIGITAL MARKETING SERVICES
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <h2
            className="font-black text-white leading-[0.92] tracking-tight"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(56px, 8vw, 120px)",
              letterSpacing: "-0.03em",
            }}
          >
            Built To Drive Growth
          </h2>
          <div>
            <p className="text-white text-[16px] leading-relaxed max-w-lg mb-6">
              Six disciplines, one engine — turn your brand into a measurable
              growth machine. Every service works alone or together to deliver
              traffic, leads and revenue.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { l: "6 disciplines", c: "#FF2D87" },
                { l: "Tailored strategies", c: "#6C5CE7" },
                { l: "Measurable ROI", c: "#F37335" },
              ].map((c) => (
                <span
                  key={c.l}
                  className="px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-[11px] tracking-[0.18em] flex items-center gap-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: c.c }}
                  />
                  {c.l.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.id} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}
