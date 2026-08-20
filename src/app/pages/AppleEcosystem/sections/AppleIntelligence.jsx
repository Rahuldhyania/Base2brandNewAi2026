'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  DynamicIslandProvider,
  DynamicIsland,
  DynamicContainer,
  useDynamicIslandSize,
  SIZE_PRESETS,
} from "@/components/apple/DynamicIsland";
import MessageDock from "@/components/apple/MessageDock";
import { APPLE } from "@/constants/testIds";

/* ----------------------------------------------------------------------------
   Dynamic Island states — cycle through real Apple Intelligence-style moments
   to illustrate contextual interactions and ambient computing.
---------------------------------------------------------------------------- */

const STATES = [
  {
    size: SIZE_PRESETS.COMPACT_LONG,
    label: "Summarising email…",
    sub: "Apple Intelligence · on-device",
    pill: "✦",
  },
  {
    size: SIZE_PRESETS.LONG,
    label: "Schedule shift swap with Maya?",
    sub: "Tap to confirm · App Intents",
    pill: "⌖",
  },
  {
    size: SIZE_PRESETS.MEDIUM,
    label: "Live Activity",
    sub: "Flight UA 412 · Boarding in 18 min",
    pill: "✈︎",
  },
  {
    size: SIZE_PRESETS.COMPACT_MEDIUM,
    label: "Suggested action",
    sub: "Reply with calendar invite",
    pill: "↩︎",
  },
];

function IslandContent({ index }) {
  const { setSize } = useDynamicIslandSize();
  const s = STATES[index];

  useEffect(() => {
    setSize(s.size);
  }, [index, s.size, setSize]);

  return (
    <DynamicContainer className="absolute inset-0 flex justify-center items-center px-5">
      <div className="flex items-center gap-3">
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs"
          style={{
            background: "linear-gradient(135deg,#0A84FF,#5AC8FA)",
            boxShadow: "0 0 12px rgba(10,132,255,0.7)",
          }}
        >
          {s.pill}
        </span>
        <div className="flex flex-col items-start text-left">
          <p className="text-sm text-white font-medium leading-tight">{s.label}</p>
          <p className="text-xs text-white/60">{s.sub}</p>
        </div>
      </div>
    </DynamicContainer>
  );
}

function IslandShow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % STATES.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center" data-testid={APPLE.intelligenceIsland}>
      {/* iPhone frame illusion */}
      <div className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-[635/507] rounded-t-[83px] overflow-hidden bg-[#05060a]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(10,132,255,0.22) 0%, transparent 70%)" }}
        />

        <DynamicIslandProvider initialSize={SIZE_PRESETS.COMPACT}>
          <div className="absolute top-[8%] sm:top-[9%] left-0 right-0 flex justify-center z-10">
            <div className="scale-[0.56] sm:scale-[0.63] origin-top">
              <DynamicIsland id="apple-intelligence-island">
                <IslandContent index={index} />
              </DynamicIsland>
            </div>
          </div>
        </DynamicIslandProvider>

        {/* Live indicator — pinned relative to the phone frame, not the resizing island */}
        <div className="absolute top-[9.5%] sm:top-[10.5%] right-7 sm:right-9 flex items-center gap-1.5 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#64D2FF] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-white/45">Live</span>
        </div>

        {/* Caption strip */}
        <div className="absolute bottom-[10%] left-0 right-0 flex flex-col items-center text-center px-6 sm:px-8 z-10">
          <AnimatePresence mode="wait">
            <m.p
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] text-white/50"
            >
              {STATES[index].sub}
            </m.p>
          </AnimatePresence>
          <div className="mt-3 flex items-center gap-1.5">
            {STATES.map((_, i) => (
              <span
                key={i}
                className="h-1 rounded-full transition-all"
                style={{
                  width: i === index ? 18 : 6,
                  background: i === index ? "#64D2FF" : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Real iPhone frame overlay */}
        <Image
          src="/images/Iphone_frame.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 640px) 420px, 480px"
          className="absolute inset-0 object-cover pointer-events-none select-none z-20"
          priority={false}
        />
      </div>
    </div>
  );
}

export default function AppleIntelligence() {
  return (
    <section className="b2b-container py-8 sm:py-12">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
            Apple Intelligence
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.05] tracking-tight mt-4">
            Intelligent Workflows That Honor{" "}
            <span className="apple-text-gradient">User Autonomy and Trust.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/65 leading-relaxed max-w-md">
            Apple intelligence features are strongest when they feel invisible, useful and
            private. We help product and security teams design intelligent Apple experiences
            that improve workflows without compromising trust — from App Intents and
            contextual actions to smart summaries, private automation and AI-supported user
            journeys.
          </p>
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-white/55 leading-relaxed max-w-md">
            For businesses investing in enterprise iOS app development, intelligence is not
            just a feature. It becomes part of how users search, act, decide and complete work.
          </p>

          <ul className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/70">
            <li className="flex gap-3"><Dot /> Custom App Intents that expose your product actions to system-level experiences.</li>
            <li className="flex gap-3"><Dot /> Context-aware workflows through widgets, Live Activities and device surfaces.</li>
            <li className="flex gap-3"><Dot /> Privacy-conscious intelligence design for regulated business environments.</li>
            <li className="flex gap-3"><Dot /> On-device and private-cloud-aligned architecture where required.</li>
            <li className="flex gap-3"><Dot /> AI-assisted workflows connected to your app, backend and business logic.</li>
          </ul>
        </div>

        <IslandShow />
      </div>

      {/* Intelligence features Message Dock */}
      <div className="mt-16 sm:mt-20 lg:mt-32">
        <div className="text-center mb-8 sm:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
            Intelligence Features
          </p>
          <h3 className="font-display text-lg sm:text-xl lg:text-2xl leading-tight mt-3 max-w-3xl mx-auto">
            Smart Actions. Context Awareness. Private Processing. Intelligent Workflows.
          </h3>
          <p className="mt-3 sm:mt-4 text-white/55 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
           Apple apps should not just display information. They should help users act faster.
          </p>
        </div>

        <div className="flex justify-center">
          <MessageDock
            mode="inline"
            position="bottom"
            expandedWidth={520}
            testId={APPLE.intelligenceDock}
            inputLabel="Describe your use case — e.g. shift swap, claim filing, asset lookup…"
            onMessageSend={() => {}}
          />
        </div>

        <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {[
            { icon: "⚡", title: "Smart Actions", body: "Surface the right action at the right moment through App Intents, shortcuts, widgets, notifications and predictive surfaces." },
            { icon: "🧠", title: "Context Awareness", body: "Use device context, user journeys, app state and workflow signals to create experiences that feel timely and relevant." },
            { icon: "🔒", title: "Private Processing", body: "Engineer data handling around trust, consent, secure storage and privacy-first architecture." },
            { icon: "🌀", title: "Intelligent Workflows", body: "Connect app actions, backend systems, AI logic and business workflows into one measurable operating layer." },
          ].map((f) => (
            <div key={f.title} className="b2b-glass rounded-2xl p-5">
              <span className="text-2xl">{f.icon}</span>
              <h4 className="mt-2 sm:mt-3 font-display text-base sm:text-lg leading-tight">{f.title}</h4>
              <p className="mt-1 text-xs sm:text-sm text-white/55 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#64D2FF", boxShadow: "0 0 8px #64D2FF" }} />
  );
}
