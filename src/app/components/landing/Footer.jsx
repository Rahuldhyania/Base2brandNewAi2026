import React from "react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const groups = [
  {
    title: "Services",
    links: [
      "GEO Strategy",
      "AEO Implementation",
      "AI Visibility",
      "Knowledge Graph",
      "AI Analytics",
    ],
  },
  {
    title: "Company",
    links: ["About", "Case Studies", "Careers", "Contact", "Blog"],
  },
  {
    title: "Resources",
    links: [
      "AI Visibility Audit",
      "GEO Playbook",
      "Prompt Library",
      "Industry Reports",
    ],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookie Policy", "DPA"],
  },
];

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative pt-24 pb-12 border-t border-white/5 bg-[#030305]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-display text-2xl font-semibold tracking-tight">
              BASE
              <span className="text-blue-400">2</span>
              BRAND
            </div>
            <p className="mt-5 text-zinc-400 max-w-sm text-sm leading-relaxed">
              An AI-first growth partner helping brands become the
              recommendation inside ChatGPT, Gemini, Perplexity, Claude and the
              next generation of search.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[Linkedin, Twitter, Github, Mail].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:border-blue-400/40 hover:text-blue-300 text-zinc-400 transition-colors"
                  aria-label="social"
                >
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-mono">
                  {g.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-zinc-300 hover:text-white transition-colors"
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

        {/* Mega wordmark */}
        <div className="mt-20 mb-10 overflow-hidden">
          <div className="font-display text-[18vw] leading-none font-light tracking-tighter text-white/[0.04] select-none whitespace-nowrap text-center">
            BASE2BRAND
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Base2Brand. Engineering AI visibility.
          </div>
          <div className="text-xs text-zinc-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Now optimizing across 6 AI platforms
          </div>
        </div>
      </div>
    </footer>
  );
}
