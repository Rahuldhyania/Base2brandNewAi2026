'use client';
import React from "react";
import { m } from "framer-motion";
import { CheckCircle2, Clock, MessageSquare, Rocket } from "lucide-react";
import ContactFormTabs from "@/components/ui/ContactFormTabs";

const STEPS = [
  { icon: MessageSquare, title: "We review your brief", desc: "Our team evaluates every product requirement." },
  { icon: Clock, title: "Custom roadmap crafted", desc: "A focused Apple plan built for your goals." },
  { icon: Rocket, title: "We get to work", desc: "Clear milestones, native engineering, strong delivery." },
];

export function FinalCTA() {
  return (
    <section
      id="contact"
      data-testid="final-cta-section"
      className="relative py-6 md:py-14 lg:py-20 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-12 xl:gap-16 items-start">

          {/* Left column */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 space-y-3 pt-4 h-full"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-(--b2b-primary) shadow-[0_0_10px_var(--b2b-primary)]" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/50">Start a transformation</span>
              </div>

              <h2 className="font-display text-white text-4xl sm:text-5xl leading-[1.10] tracking-tight">
                Tell us where growth is stuck.{" "}
                <em
                  className="not-italic text-(--b2b-primary) bg-clip-text"
                >
                  We'll show you how to unlock it.
                </em>
              </h2>

              <p className="mt-2 text-white/55 text-base sm:text-lg leading-relaxed">
                Need better leads, ROAS, conversions, CRO, automation or a digital product? We'll map the growth system your brand needs next.
              </p>
            </div>

            {/* Checkpoints */}
            <ul className="space-y-3">
              {[
                "No generic proposal.",
                "No confusing discovery process.",
                "Just a clear, practical plan built around your business goals.",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/80 text-sm sm:text-base">
                  <span className="grid place-items-center h-5 w-5 shrink-0 rounded-full bg-(--b2b-primary)/15 text-(--b2b-primary)">
                    <CheckCircle2 size={13} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-white/10 via-white/5 to-transparent" />

            {/* What happens next */}
            <div>
              <p className="text-[10px] uppercase tracking-widest font-mono text-white/35 mb-3">What happens next</p>
              <div className="space-y-1.5">
                {STEPS.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4">
                        <step.icon size={16} className="text-(--b2b-primary)" />
                      </div>
                      {/* {i < STEPS.length - 1 && (
                        <div className="mt-1 w-px bg-linear-to-b from-white/10 to-transparent" style={{ minHeight: 24 }} />
                      )} */}
                    </div>
                    <div className="pb-1 pt-1.5">
                      <p className="text-sm font-medium text-white">{step.title}</p>
                      <p className="mt-0.5 text-xs text-white/45">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

          {/* Right column — Form */}
          <div className="pt-4">
            <ContactFormTabs />
          </div>
        </div>
      </div>
    </section>
  );
}