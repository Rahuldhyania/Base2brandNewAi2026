'use client'
import React from "react";
import { motion } from "framer-motion";
import { Lock, Zap, Layers, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: Zap,
    title: "Native performance is non-negotiable",
    body:
      "Apple silicon is the most efficient consumer hardware on the planet. Native apps tap into Metal, the Neural Engine and Apple's media stack — delivering 60fps interactions, instant launches and battery life cross-platform frameworks simply cannot match.",
  },
  {
    icon: Lock,
    title: "Privacy is engineered, not promised",
    body:
      "On-device processing, Secure Enclave, App Tracking Transparency and Apple's privacy review process raise the floor for trust. We build to that floor on day one — so privacy reviews, enterprise security questionnaires and regulated workloads clear without surprises.",
  },
  {
    icon: Layers,
    title: "Ecosystem continuity multiplies value",
    body:
      "A single Apple engagement compounds across iPhone, iPad, Watch, Mac, CarPlay and Vision Pro. Handoff, Continuity, iCloud sync and Universal Purchase make every additional surface cheaper to ship and more sticky for the customer.",
  },
  {
    icon: Sparkles,
    title: "Craft is still the competitive advantage",
    body:
      "Apple users notice the difference between an app and an Apple app. We engineer to that bar — type, spacing, motion, haptics, sound and accessibility — because it is the most durable moat enterprise software has left.",
  },
];

export default function WhyApple() {
  return (
    <section className="b2b-container py-8 sm:py-12">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-4 sm:gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#5AC8FA]">
            Why Apple
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.05] tracking-tight mt-4">
            Why Apple still defines{" "}
            <span className="apple-text-gradient">premium digital experiences.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/60 leading-relaxed max-w-md">
            For enterprises whose customers, executives and field teams live on Apple hardware,
            the platform is not a UI choice — it is the operating substrate. Four reasons
            Apple-first remains the highest-leverage place to invest in product engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-5"> 
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="b2b-glass rounded-2xl p-4 sm:p-6 hover:bg-white/[0.05] transition"
              >
                <span
                  className="inline-flex w-10 h-10 rounded-xl items-center justify-center"
                  style={{ background: "rgba(10,132,255,0.13)", border: "1px solid rgba(10,132,255,0.35)" }}
                >
                  <Icon size={18} color="#64D2FF" strokeWidth={1.8} />
                </span>
                <h3 className="mt-3 sm:mt-5 font-display text-lg sm:text-xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
