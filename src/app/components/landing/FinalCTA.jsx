import React, { useState } from "react";
import { m } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function FinalCTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please add your name and work email.");
      return;
    }
    setLoading(true);
    // Frontend mock — simulate request
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast.success("Request received — we'll reach out within 24 hours.");
    }, 900);
  };

  return (
    <section
      id="final-cta"
      data-testid="final-cta-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] rounded-[50%] bg-gradient-to-br from-blue-600/25 via-violet-600/15 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-grid-fine opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-10">
        <div className="rounded-[28px] md:rounded-[36px] border border-white/10 glass-strong p-8 md:p-14 grid lg:grid-cols-2 gap-12 lg:gap-16 relative overflow-hidden">
          <div className="absolute -top-32 -left-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-24 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="label-mono">· Ready</div>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.05]">
              Ready to become
              <br />
              <span className="text-gradient-blue-violet font-medium">
                visible in AI search?
              </span>
            </h2>
            <p className="mt-6 text-zinc-300 text-base md:text-lg max-w-md">
              Don't let competitors dominate the future of discovery. Get a
              free AI visibility audit and a tailored GEO roadmap.
            </p>

            <ul className="mt-10 space-y-3.5 text-sm md:text-base">
              {[
                "Free 30-minute strategy call",
                "Custom AI visibility audit across 6 platforms",
                "Tailored 90-day GEO roadmap",
                "No commitments — just clarity",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            {sent ? (
              <m.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center min-h-[420px] flex flex-col items-center justify-center"
                data-testid="cta-success"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-white/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="font-display mt-6 text-2xl md:text-3xl font-medium tracking-tight">
                  Request received.
                </h3>
                <p className="mt-3 text-zinc-400 max-w-sm">
                  Our strategy team will reach out within 24 hours with your
                  custom AI visibility audit.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                    });
                  }}
                  className="mt-8 text-sm text-blue-300 hover:text-white transition-colors"
                  data-testid="cta-reset-button"
                >
                  Submit another request →
                </button>
              </m.div>
            ) : (
              <form
                onSubmit={submit}
                data-testid="lead-form"
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="Full name" htmlFor="cta-name">
                    <input
                      id="cta-name"
                      data-testid="lead-form-name"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Alex Morgan"
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Work email" htmlFor="cta-email">
                    <input
                      id="cta-email"
                      type="email"
                      data-testid="lead-form-email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="alex@company.com"
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Phone" htmlFor="cta-phone">
                    <input
                      id="cta-phone"
                      type="tel"
                      data-testid="lead-form-phone"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+1 555 010 2210"
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Company" htmlFor="cta-company">
                    <input
                      id="cta-company"
                      data-testid="lead-form-company"
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Company Inc."
                      className="form-input"
                    />
                  </FormField>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="lead-form-submit"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm md:text-base font-medium hover:shadow-[0_0_40px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Get my AI visibility audit"}
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <p className="mt-3 text-xs text-zinc-500 text-center">
                  We respond within 24 hours. No spam — ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 12px 14px;
          color: #fff;
          font-size: 14px;
          font-family: var(--font-manrope), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          transition: border-color .2s ease, background .2s ease;
          outline: none;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.3); }
        .form-input:focus {
          border-color: rgba(99,102,241,0.5);
          background: rgba(255,255,255,0.04);
        }
      `}</style>
    </section>
  );
}

function FormField({ label, htmlFor, children }) {
  return (
    <div className="mt-4 first:mt-0">
      <label
        htmlFor={htmlFor}
        className="block text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2 font-mono"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
