import React from "react";
import { motion } from "framer-motion";

export default function CosmicFooter() {
  return (
    <footer className="relative pt-24 pb-10 overflow-hidden" data-testid="cosmic-footer" data-nosnippet>
      {/* Fading star field */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,5,7,0) 0%, rgba(4,5,7,0.9) 100%)",
        }}
      />
      {/* Tiny constellation line */}
      <svg
        viewBox="0 0 400 60"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-4 h-10 w-full opacity-40"
      >
        <motion.polyline
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
          points="10,30 60,10 120,40 180,20 240,50 300,15 360,35 390,25"
          fill="none"
          stroke="url(#footerGrad)"
          strokeWidth="0.8"
        />
        <defs>
          <linearGradient id="footerGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7B4DFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#42D4FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-lg"
                style={{
                  background:
                    "conic-gradient(from 90deg, #7B4DFF, #42D4FF, #A855F7, #7B4DFF)",
                }}
              />
              <span className="font-display text-lg tracking-tight">Base2Brand</span>
            </div>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              A studio at the intersection of AI, commerce and craft. We help ambitious
              brands ship the next chapter.
            </p>
          </div>
          <div>
            <h5 className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4">
              Explore
            </h5>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Resources</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
              <li><a href="#" className="hover:text-white">Research</a></li>
              <li><a href="#" className="hover:text-white">Prompt Library</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4">
              Company
            </h5>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4">
              Social
            </h5>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white">GitHub</a></li>
              <li><a href="#" className="hover:text-white">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Base2Brand — Signals across the universe.</p>
          <p className="text-xs text-white/40">Made with orbit &amp; craft.</p>
        </div>
      </div>
    </footer>
  );
}
