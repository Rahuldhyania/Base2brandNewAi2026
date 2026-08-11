import React, { useState } from "react";
import { HOME } from "@/constants/testIds";
import { Base2BrandLogo } from "@/components/Logo";

const NAV_ITEMS = [
  { id: "services", label: "Services", testId: HOME.nav.linkServices },
  { id: "solutions", label: "Solutions", testId: HOME.nav.linkSolutions },
  { id: "industries", label: "Industries", testId: HOME.nav.linkIndustries },
  { id: "work", label: "Work", testId: HOME.nav.linkWork },
  { id: "resources", label: "Resources", testId: HOME.nav.linkResources },
  { id: "about", label: "About", testId: HOME.nav.linkAbout },
];

/**
 * TopNav — sticky glass navigation with logo, links, and Get Proposal CTA.
 */
export default function TopNav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
    else if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      data-testid={HOME.nav.root}
      data-nosnippet
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-24px)] max-w-[1240px]"
    >
      <div className="b2b-glass rounded-full px-4 md:px-6 py-2.5 flex items-center gap-6">
        <a
          href="#launch"
          onClick={scrollTo("launch")}
          data-testid={HOME.nav.logo}
          className="flex items-center h-8"
          aria-label="Base2Brand home"
        >
          <Base2BrandLogo height={22} />
        </a>

        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-testid={item.testId}
              onClick={scrollTo(item.id)}
              className="px-3 py-1.5 text-[13px] text-[var(--b2b-text-muted)] hover:text-white transition-colors font-medium tracking-[-0.005em]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={scrollTo("contact")}
          data-testid={HOME.nav.ctaGetProposal}
          className="hidden md:inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white/8 hover:bg-white text-white hover:text-black transition-colors font-medium text-[13px] border border-white/10"
        >
          Get Proposal
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          data-testid={HOME.nav.mobileToggle}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/80"
          aria-label="Toggle menu"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d={open ? "M3 3l8 8M11 3l-8 8" : "M2 4h10M2 10h10"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 b2b-glass rounded-2xl p-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-testid={item.testId}
              onClick={scrollTo(item.id)}
              className="px-3 py-2 text-[13px] text-white/80 hover:text-[var(--b2b-orange)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid={HOME.nav.ctaGetProposal}
            onClick={scrollTo("contact")}
            className="mt-2 b2b-btn-primary justify-center"
          >
            Get Proposal
          </a>
        </div>
      )}
    </header>
  );
}
