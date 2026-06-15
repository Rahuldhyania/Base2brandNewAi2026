import React from "react";
import {
  Crosshair,
  Sparkles,
  UserCheck,
  TrendingUp,
  Eye,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { FEATURES, WHY_US, CASE_HIGHLIGHTS } from "../../mock";

const ICONS = {
  Crosshair,
  Sparkles,
  UserCheck,
  TrendingUp,
  Eye,
  BarChart3,
};

export default function FeaturesGrid() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#0A0A0C" }}
    >
      <div
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[400px] blur-[140px] opacity-25 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #FF2D87, #6C5CE7, #F37335)",
        }}
      />

      {/* Features */}
      <div className="max-w-7xl mx-auto px-6 mb-20 relative">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[11px] tracking-[0.28em] text-zinc-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ● FEATURE-RICH SERVICES
          </span>
        </div>
        <h2
          className="font-black text-white leading-[0.92] tracking-tight max-w-4xl"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(48px, 7vw, 100px)",
            letterSpacing: "-0.03em",
          }}
        >
          Digital Marketing{" "}
          <span style={{ color: "#F37335" }}>That Drives Results</span>
        </h2>
        <p className="text-zinc-400 mt-6 text-[16px] max-w-2xl leading-relaxed">
          Every campaign engineered for real outcomes — traffic, leads,
          conversions and revenue. No vanity metrics, just business growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {FEATURES.map((f) => {
            const Icon = ICONS[f.icon];
            return (
              <div
                key={f.title}
                className="group relative rounded-3xl p-7 border border-white/10 overflow-hidden hover:border-white/25 transition-colors"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                }}
              >
                <div
                  className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity"
                  style={{ background: f.color }}
                />
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${f.color}1F`,
                    border: `1px solid ${f.color}55`,
                  }}
                >
                  <Icon size={22} style={{ color: f.color }} strokeWidth={2} />
                </div>
                <h3
                  className="relative font-black text-white mb-3"
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "22px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
                <p className="relative text-zinc-400 text-[14px] leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        id="why"
        className="max-w-7xl mx-auto px-6 mb-20 relative"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[11px] tracking-[0.28em] text-zinc-500"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ● WHY CHOOSE US
              </span>
            </div>
            <h2
              className="font-black text-white leading-[0.92] tracking-tight"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(44px, 6vw, 88px)",
                letterSpacing: "-0.03em",
              }}
            >
              The Smartest{" "}
              <span style={{ color: "#C6FF3D" }}>Choice</span> To Market
              Your Business
            </h2>
            <p className="text-zinc-400 mt-6 text-[15px] max-w-md leading-relaxed">
              Our team comprises seasoned professionals with years of experience
              in digital marketing. More than a decade of expertise, fueling
              real business growth.
            </p>
          </div>

          <div className="space-y-4">
            {WHY_US.map((w, i) => (
              <div
                key={w.title}
                className="group rounded-2xl p-6 border border-white/10 hover:border-white/25 transition-colors"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "#F37335",
                      boxShadow: "0 8px 24px rgba(243,115,53,0.35)",
                    }}
                  >
                    <CheckCircle2 size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-2 gap-3">
                      <h3
                        className="font-black text-white"
                        style={{
                          fontFamily: "'Archivo Black', sans-serif",
                          fontSize: "20px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {w.title}
                      </h3>
                      <span
                        className="text-[11px] tracking-[0.2em] text-zinc-500"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        0{i + 1}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-[14px] leading-relaxed">
                      {w.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Highlights */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[11px] tracking-[0.28em] text-zinc-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ● RESULTS IN THE WILD
          </span>
        </div>
        <h3
          className="font-black text-white leading-[0.95] tracking-tight mb-12"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(36px, 5vw, 72px)",
            letterSpacing: "-0.03em",
          }}
        >
          Real Brands. <span style={{ color: "#FF2D87" }}>Real Numbers.</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-5">
          {CASE_HIGHLIGHTS.map((c) => (
            <div
              key={c.title}
              className="relative rounded-3xl p-8 border overflow-hidden group hover:-translate-y-1 transition-transform"
              style={{
                background: "#0F0F12",
                borderColor: `${c.accent}44`,
              }}
            >
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: c.accent }}
              />
              <span
                className="relative text-[10px] tracking-[0.28em]"
                style={{
                  color: c.accent,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {c.sector}
              </span>
              <h4
                className="relative font-black text-white mt-3 mb-4"
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: "clamp(32px, 3vw, 44px)",
                  letterSpacing: "-0.02em",
                  lineHeight: "1",
                }}
              >
                {c.title}
              </h4>
              <p className="relative text-zinc-400 text-[14px] leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
