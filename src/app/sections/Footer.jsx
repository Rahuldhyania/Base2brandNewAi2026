'use client';
import React from "react";
import { CurrentLogo } from "../components/layout/CurrentLogo";
import { Linkedin, Twitter, Github, Youtube } from "lucide-react";

const OFFICES = [
  { city: "New Delhi", line: "Connaught Place · 110001 · India", role: "Global HQ" },
  { city: "Chandigarh", line: "IT Park · 160101 · India", role: "Engineering Hub" },
  { city: "Bengaluru", line: "Indiranagar · 560038 · India", role: "AI Studio" },
  { city: "Utah", line: "Salt Lake City · UT 84101 · USA", role: "Americas Delivery" },
  { city: "Toronto", line: "King Street W · M5V · Canada", role: "North America" },
  { city: "Leicester", line: "Welford Road · LE2 · United Kingdom", role: "EMEA HQ" },
  { city: "Sydney", line: "Macquarie Park · NSW 2113 · Australia", role: "APAC" },
  { city: "Lagos", line: "Victoria Island · 101241 · Nigeria", role: "Africa" },
];

const NAV = [
  { title: "Capabilities", links: ["Services", "Solutions", "Industries", "Innovation"] },
  { title: "Company", links: ["About", "Leadership", "Careers", "Press"] },
  { title: "Resources", links: ["Insights", "Case Studies", "Trust Center", "Whitepapers"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies", "DPDP / GDPR"] },
];

export function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative border-t border-line/50 bg-transparent pt-16 pb-10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top: brand + nav */}
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-12">
          <div>
            <CurrentLogo />
            <p className="mt-6 text-mute max-w-md text-sm sm:text-base leading-relaxed">
              From base — to brand. From idea — to orbit. Base2Brand is the
              digital transformation, AI and enterprise software partner for
              organisations that build for the public good and the global stage.
            </p>

            <form
              className="mt-8 max-w-md"
              onSubmit={(e) => e.preventDefault()}
              data-testid="footer-newsletter-form"
            >
              <label className="block text-xs font-mono-display uppercase tracking-[0.22em] text-mute mb-2">
                Quarterly briefing
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="work@email.com"
                  data-testid="footer-newsletter-email"
                  className="flex-1 bg-[#04061a] border border-line rounded-full px-5 py-3 text-white text-sm placeholder:text-mute/60 focus:border-orange-brand/60 focus:outline-none transition"
                />
                <button
                  type="submit"
                  data-testid="footer-newsletter-submit"
                  className="rounded-full bg-orange-brand text-black font-semibold text-sm px-5 py-3 hover:brightness-110 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="mt-8 flex items-center gap-2">
              {[
                { I: Linkedin, label: "LinkedIn" },
                { I: Twitter, label: "X" },
                { I: Github, label: "GitHub" },
                { I: Youtube, label: "YouTube" },
              ].map(({ I, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className="grid place-items-center h-10 w-10 rounded-full border border-line text-mute hover:text-orange-brand hover:border-orange-brand/40 transition"
                >
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {NAV.map((col) => (
              <div key={col.title}>
                <div className="text-xs font-mono-display uppercase tracking-[0.22em] text-orange-brand">
                  {col.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        data-testid={`footer-link-${l.toLowerCase().replace(/\s/g, "-")}`}
                        className="text-sm text-white/80 hover:text-orange-brand transition"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 divider-line" />

        {/* Office grid */}
        <div>
          <div className="text-xs font-mono-display uppercase tracking-[0.22em] text-mute mb-6">
            Where we operate
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICES.map((o) => (
              <div
                key={o.city}
                data-testid={`footer-office-${o.city.toLowerCase().replace(/\s/g, "-")}`}
                className="border-l border-orange-brand/30 pl-4"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-orange-brand font-mono-display">
                  {o.role}
                </div>
                <div className="mt-2 font-display text-white text-base">
                  {o.city}
                </div>
                <div className="mt-1 text-xs text-mute leading-relaxed">
                  {o.line}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-mute">
          <div>© {new Date().getFullYear()} Base2Brand Technologies. All rights reserved.</div>
          <div className="font-mono-display uppercase tracking-[0.2em]">
            Crafted in 8 cities · Delivered globally
          </div>
        </div>
      </div>
    </footer>
  );
}
