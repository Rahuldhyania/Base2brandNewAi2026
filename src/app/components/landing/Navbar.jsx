import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { label: "Why Now", href: "#why-now" },
  { label: "Framework", href: "#framework" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-[#030305]/70 border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a
          href="#top"
          data-testid="navbar-logo"
          className="flex items-center gap-2 group"
        >
          <span className="font-display text-xl md:text-2xl font-semibold tracking-tight">
            BASE
            <span className="inline-flex items-center justify-center mx-[1px] text-blue-400 group-hover:text-violet-400 transition-colors">
              2
            </span>
            BRAND
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#final-cta"
            data-testid="navbar-cta"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4" />
            Get AI Audit
          </a>
          <button
            data-testid="navbar-mobile-toggle"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5"
            aria-label="Open menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#030305]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-zinc-300 hover:text-white py-1"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#final-cta"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Get AI Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
