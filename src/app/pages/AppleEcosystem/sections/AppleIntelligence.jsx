'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    size: SIZE_PRESETS.COMPACT,
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
      <div className="flex items-center gap-1.5 absolute right-10 top-10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#64D2FF] animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-[0.18em] text-white/45">Live</span>
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
      {/* Phone frame illusion */}
      <div className="relative w-full max-w-[760px] aspect-[16/10] rounded-[44px] b2b-glass overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(10,132,255,0.18) 0%, transparent 70%)" }}
        />
        <DynamicIslandProvider initialSize={SIZE_PRESETS.COMPACT}>
          <div className="absolute top-6 left-0 right-0 flex justify-center">
            <DynamicIsland id="apple-intelligence-island">
              <IslandContent index={index} />
            </DynamicIsland>
          </div>
        </DynamicIslandProvider>

        {/* Caption strip */}
        <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center text-center px-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="font-mono text-xs uppercase tracking-[0.24em] text-white/50"
            >
              {STATES[index].sub}
            </motion.p>
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
      </div>
    </div>
  );
}

export default function AppleIntelligence() {
  return (
    <section className="b2b-container py-12">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
            Apple Intelligence
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight mt-4">
            Intelligence that respects the user —{" "}
            <span className="apple-text-gradient">designed for the enterprise.</span>
          </h2>
          <p className="mt-6 text-white/65 leading-relaxed max-w-md">
            Apple Intelligence brings a new substrate to product engineering: on-device
            foundation models, App Intents, contextual actions, system-wide writing tools,
            and private cloud compute that audits like a regulated workload should.
          </p>
          <p className="mt-5 text-white/55 leading-relaxed max-w-md text-sm">
            We help product and security teams design intelligence that ships in real apps —
            integrated through App Intents, exposed in the right surface (Siri, Spotlight,
            Shortcuts, the Dynamic Island, Live Activities) and governed by the privacy
            posture your CISO already trusts.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><Dot /> Custom App Intents that expose your domain to Siri and system search.</li>
            <li className="flex gap-3"><Dot /> On-device intelligence with Foundation Models — no data leaves the phone.</li>
            <li className="flex gap-3"><Dot /> Contextual experiences via Live Activities, Widgets and the Dynamic Island.</li>
            <li className="flex gap-3"><Dot /> Audit-ready privacy: data minimisation, ATT, Private Cloud Compute.</li>
          </ul>
        </div>

        <IslandShow />
      </div>

      {/* Intelligence features Message Dock */}
      <div className="mt-24 lg:mt-32">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
            Intelligence Features
          </p>
          <h3 className="font-display text-xl sm:text-2xl leading-tight mt-3 max-w-3xl mx-auto">
            Smart Actions. Context Awareness. Private Processing. Intelligent Workflows.
          </h3>
          <p className="mt-4 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
            Tap a feature to compose a brief — explore how each capability shows up inside
            the products we build.
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

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { icon: "⚡", title: "Smart Actions", body: "Surface the right action at the right moment via App Intents and predictive surfaces." },
            { icon: "🧠", title: "Context Awareness", body: "Models that understand the screen, the calendar, the task — without compromising privacy." },
            { icon: "🔒", title: "Private Processing", body: "On-device inference and Private Cloud Compute keep regulated data inside trust boundaries." },
            { icon: "🌀", title: "Intelligent Workflows", body: "Multi-step flows that chain App Intents into agentic, auditable enterprise routines." },
          ].map((f) => (
            <div key={f.title} className="b2b-glass rounded-2xl p-5">
              <span className="text-2xl">{f.icon}</span>
              <h4 className="mt-3 font-display text-lg leading-tight">{f.title}</h4>
              <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{f.body}</p>
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
