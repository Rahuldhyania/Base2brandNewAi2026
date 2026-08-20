'use client'
import React, { useState } from "react";
import { m } from "framer-motion";
import { ArrowUpRight, Smartphone, Tablet, Watch, Tv, Glasses, Car, Laptop, Brain } from "lucide-react";
import { Warp } from "@paper-design/shaders-react";
import MacOSDock from "@/components/apple/MacOSDock";
import { APPLE } from "@/constants/testIds";

const ECOSYSTEM_APPS = [
  { id: "iphone",   name: "iPhone",          icon: <Smartphone strokeWidth={1.6} />, bg: "linear-gradient(135deg,#0A84FF 0%, #5AC8FA 100%)" },
  { id: "ipad",     name: "iPad",            icon: <Tablet strokeWidth={1.6} />,     bg: "linear-gradient(135deg,#1E3A8A 0%, #0A84FF 100%)" },
  { id: "watch",    name: "Apple Watch",     icon: <Watch strokeWidth={1.6} />,      bg: "linear-gradient(135deg,#0F172A 0%, #334155 100%)" },
  { id: "vision",   name: "Vision Pro",      icon: <Glasses strokeWidth={1.6} />,    bg: "linear-gradient(135deg,#1F2937 0%, #64D2FF 100%)" },
  { id: "tv",       name: "Apple TV",        icon: <Tv strokeWidth={1.6} />,         bg: "linear-gradient(135deg,#020617 0%, #1E40AF 100%)" },
  { id: "carplay",  name: "CarPlay",         icon: <Car strokeWidth={1.6} />,        bg: "linear-gradient(135deg,#0A84FF 0%, #40C8E0 100%)" },
  { id: "mac",      name: "Mac",             icon: <Laptop strokeWidth={1.6} />,     bg: "linear-gradient(135deg,#334155 0%, #94A3B8 100%)" },
  // { id: "intel",    name: "Apple Intelligence", icon: <Brain strokeWidth={1.6} />,   bg: "linear-gradient(135deg,#5AC8FA 0%, #FFFFFF 100%)" },
];

export default function Hero() {
  const [active, setActive] = useState(["iphone", "vision"]);

  const handleAppClick = (id) => {
    setActive((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <section className="relative  pt-22 md:pt-16 lg:pt-28 pb-8 sm:pb-12">
      {/* Warp shader background — Apple Blue palette, contained to hero only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 overflow-hidden"
        style={{
          height: "min(108%, 1400px)",
          // soft mask so the shader fades into the cosmic background below
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0) 100%)",
        }}
      >
        <Warp
          style={{ height: "100%", width: "100%", opacity: 0.85 }}
          proportion={0.48}
          softness={1}
          distortion={0.22}
          swirl={0.75}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.08}
          scale={1.05}
          rotation={0}
          speed={0.65}
          colors={[
            "hsl(220, 80%, 4%)",   // near-black navy (matches --b2b-bg)
            "hsl(212, 100%, 42%)", // Apple primary #0A84FF zone
            "hsl(196, 92%, 60%)",  // Apple secondary #5AC8FA zone
            "hsl(192, 100%, 78%)", // Apple highlight #64D2FF zone 
          ]}
        />
        {/* Vignette + dark wash so text/UI remain legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 25%, rgba(2,4,8,0.15) 0%, rgba(2,4,8,0.55) 55%, rgba(2,4,8,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 b2b-container" >
      {/* <m.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]"
      >
        Apple Ecosystem Division · From Idea to Orbit
      </m.p> */} 
      <m.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight md:mt-4 max-w-5xl"
      >
        Build experiences across the{" "}
        <span className="apple-text-gradient">entire Apple ecosystem.</span>
      </m.h1>

      <m.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-2 text-base sm:text-lg lg:text-xl text-white/65 max-w-2xl leading-relaxed"
      >
        Base2Brand designs, develops and operates native Apple applications for businesses that need more than another mobile app. From iPhone app development and enterprise iOS app development to Vision Pro, Apple Watch, iPad, CarPlay, Apple TV and Mac experiences, we engineer products that feel native, perform fast and scale securely.
      </m.p>

      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3"
      >
        <a
          href="#contact"
          data-testid={APPLE.heroCtaPrimary}
          className="inline-flex items-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-full text-sm font-semibold text-white bg-[#0A84FF] hover:bg-[#3CA0FF] transition shadow-[0_10px_36px_-10px_rgba(10,132,255,0.7)]"
        >
          Start an Apple engagement <ArrowUpRight size={16} />
        </a>
        <a
          href="#capabilities"
          data-testid={APPLE.heroCtaSecondary}
          className="inline-flex items-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-full text-sm font-semibold text-white/85 hover:text-white border border-white/15 hover:border-white/30 transition"
        >
          Explore capabilities
        </a>
      </m.div>

      {/* Interactive ecosystem dock */}
      <m.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 sm:mt-14 flex flex-col items-center"
        data-testid={APPLE.heroDock}
      >
        {/* Reflective stage */}
        <div className="relative w-full max-w-4xl sm:max-w-5xl">
          <div className="absolute inset-x-0 -bottom-10 h-40 mx-auto rounded-full opacity-60 pointer-events-none"
               style={{ background: "radial-gradient(ellipse at center, rgba(10,132,255,0.28) 0%, transparent 70%)", filter: "blur(20px)" }} />
          <div className="flex flex-col items-center">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] text-white/40 mb-3 sm:mb-4">
              ↓ Hover. Tap. Explore the surface area we engineer for.
            </p>
            <div className="flex justify-center w-full  pb-2 -mx-2 sm:-mx-4 px-2 sm:px-4">
              <MacOSDock apps={ECOSYSTEM_APPS} onAppClick={handleAppClick} openApps={active} />
            </div>
          </div>
        </div>

        {/* Active app readout */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-white/55">
          <span className="font-mono uppercase tracking-[0.18em] text-white/35">Open:</span>
          {active.length === 0 ? (
            <span className="font-mono text-white/35">— tap a surface to begin</span>
          ) : (
            active.map((id) => {
              const app = ECOSYSTEM_APPS.find((a) => a.id === id);
              return (
                <span key={id} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#64D2FF]" />
                  {app?.name}
                </span>
              );
            })
          )}
        </div>
      </m.div>
      </div>
    </section>
  );
}
