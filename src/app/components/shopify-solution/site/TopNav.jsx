import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/shopify-solution/shopifyui/sheet";
import { cn } from "@/lib/utils";
import { Base2BrandWordmark } from "@/components/visual/Base2BrandLogo";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Integrations", href: "#integrations" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const TopNav = ({ onOpenLeadForm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.6] },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((io) => io.disconnect());
  }, []);

  const handleAnchorClick = (e, href) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
    }
  };

  return (
    <header
      data-testid="top-nav"
      data-nosnippet
      className={cn(
        "sticky top-0 z-50 w-full",
        "backdrop-blur-xl",
        scrolled
          ? "bg-black/65 border-b border-white/10"
          : "bg-black/30 border-b border-transparent",
      )}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#top"
            className="shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Base2Brand home"
          >
            <Base2BrandWordmark />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const active = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={cn(
                    "relative text-sm transition-colors duration-150",
                    active ? "text-white" : "text-white/65 hover:text-white",
                  )}
                  data-testid={`nav-link-${id}`}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute -bottom-2 left-0 right-0 h-px"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #95BF47, transparent)",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenLeadForm}
              data-testid="nav-start-project-button"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-xl",
                "bg-[#95BF47] text-[#071006] font-medium text-sm",
                "hover:bg-[#B7E36A] active:bg-[#7FA83C] active:translate-y-px",
                "transition-colors duration-200",
                "shadow-[0_0_0_1px_rgba(149,191,71,0.25),0_18px_60px_rgba(0,0,0,0.55),0_0_40px_rgba(149,191,71,0.18)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95BF47]/55",
              )}
            >
              Start Your Project
            </button>

            {/* Mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  data-testid="mobile-nav-open-button"
                  className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/[0.04] text-white"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#050505] border-l border-white/10 text-white w-[88%] sm:w-[420px]"
              >
                <div className="flex items-center justify-between">
                  <Base2BrandWordmark />
                  <SheetClose asChild>
                    <button
                      data-testid="mobile-nav-close-button"
                      className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]"
                      aria-label="Close menu"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </SheetClose>
                </div>

                <nav className="mt-10 flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                        className="py-3 px-2 rounded-lg text-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-8">
                  <SheetClose asChild>
                    <button
                      type="button"
                      onClick={onOpenLeadForm}
                      className="w-full h-12 inline-flex items-center justify-center rounded-xl bg-[#95BF47] text-[#071006] font-medium hover:bg-[#B7E36A] transition-colors duration-200"
                      data-testid="mobile-nav-start-project-button"
                    >
                      Start Your Project
                    </button>
                  </SheetClose>
                </div>

                <p className="mt-10 font-mono text-[10px] tracking-[0.18em] uppercase text-white/40">
                  Base2Brand · Commerce Mission Control
                </p>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
