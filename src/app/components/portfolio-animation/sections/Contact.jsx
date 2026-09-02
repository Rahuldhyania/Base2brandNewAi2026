'use client'
import React, { useState } from "react";
import { m } from "framer-motion";
import { extraData } from "@/constants/testIds/extraData";
import { Base2BrandLogo } from "@/components/portfolio-animation/Logo";

export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", company: "", problem: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // Static demo — no backend wired for the prototype
    setSent(true);
    setTimeout(() => setSent(false), 3600);
    setState({ name: "", email: "", company: "", problem: "" });
  };

  return (
    <section
      id="contact"
      data-section="contact"
      data-testid={extraData.contact.root}
      className="relative px-6 md:px-12 py-24 md:py-32"
    >
      <div className="max-w-[1180px] mx-auto">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-14 md:gap-20 items-start">
          {/* Left */}
          <div>
            <div className="eyebrow mb-4">Start a transformation</div>
            <h2 className="font-display text-white text-[38px] md:text-[56px] leading-[0.98] tracking-[-0.035em]">
              Tell us the hardest problem<br />you&apos;ve postponed.<br />
              <span className="text-[var(--b2b-orange)]">We&apos;ll send back a 1‑page plan.</span>
            </h2>
            <p className="mt-8 max-w-[520px] text-[15px] md:text-[16px] text-[var(--b2b-text-muted)] leading-[1.6]">
              No discovery deck. No scoping tax. A single senior architect drafts a plan you can circulate to your steering committee — usually within 5 business days.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/40 mb-2">
                  General inquiry
                </div>
                <a
                  href="mailto:hello@base2brand.com"
                  className="font-display text-[24px] md:text-[28px] text-white hover:text-[var(--b2b-orange)] transition-colors"
                >
                  hello@base2brand.com
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6 max-w-[420px]">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/40 mb-1.5">HQ</div>
                  <div className="text-[13.5px] text-white/80">New Delhi · India</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/40 mb-1.5">Response SLA</div>
                  <div className="text-[13.5px] text-white/80">≤ 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            data-testid={extraData.contact.form}
            onSubmit={submit}
            data-nosnippet
            className="b2b-panel rounded-2xl p-6 md:p-8 flex flex-col gap-4"
          >
            <div>
              <label className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">Your name</label>
              <input
                data-testid={extraData.contact.inputName}
                type="text"
                required
                value={state.name}
                onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[var(--b2b-orange)] outline-none py-2 text-[15px] text-white placeholder:text-white/25 transition-colors"
                placeholder="Ada Lovelace"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">Work email</label>
              <input
                data-testid={extraData.contact.inputEmail}
                type="email"
                required
                value={state.email}
                onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[var(--b2b-orange)] outline-none py-2 text-[15px] text-white placeholder:text-white/25 transition-colors"
                placeholder="ada@your‑company.com"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">Company</label>
              <input
                data-testid={extraData.contact.inputCompany}
                type="text"
                value={state.company}
                onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))}
                className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[var(--b2b-orange)] outline-none py-2 text-[15px] text-white placeholder:text-white/25 transition-colors"
                placeholder="Analytical Engines Ltd."
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">
                The hardest problem you&apos;ve postponed
              </label>
              <textarea
                data-testid={extraData.contact.inputProblem}
                required
                value={state.problem}
                onChange={(e) => setState((s) => ({ ...s, problem: e.target.value }))}
                rows={4}
                className="mt-2 w-full bg-transparent border border-white/12 rounded-lg focus:border-[var(--b2b-orange)] outline-none p-3 text-[15px] text-white placeholder:text-white/25 transition-colors resize-none"
                placeholder="Legacy underwriting stack. 4M policies. 2‑day turnaround. Compliance frozen us for 18 months…"
              />
            </div>

            <button
              type="submit"
              data-testid={extraData.contact.submit}
              className="b2b-btn-primary mt-2 justify-center"
            >
              {sent ? "Brief received · we\u2019ll be in touch" : "Send brief"}
              {!sent && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

            <p className="font-mono text-[10px] text-white/35 mt-1 leading-[1.5]">
              We treat every brief as confidential. Any exchange can move to NDA within one email.
            </p>
          </form>
        </div>

        {/* Footer */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 pt-8 border-t border-white/8 flex flex-wrap items-center gap-6 justify-between"
        >
          <Base2BrandLogo height={20} />
          <div className="font-mono text-[11px] text-white/40 tracking-[0.08em]">
            © 2026 Base2Brand. Architecting the digital backbone.
          </div>
          <div className="flex gap-4 font-mono text-[11px] text-white/50">
            <a href="#" className="hover:text-[var(--b2b-orange)]">Legal</a>
            <a href="#" className="hover:text-[var(--b2b-orange)]">Privacy</a>
            <a href="#" className="hover:text-[var(--b2b-orange)]">Careers</a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
