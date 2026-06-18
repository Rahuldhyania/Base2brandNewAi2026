import { Logo } from "../Logo";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: [
      "Performance Marketing",
      "SEO + GEO",
      "Conversion Optimization",
      "Social Media Growth",
      "Retention & Automation",
      "Analytics & Tracking",
    ],
  },
  {
    title: "Industries",
    links: [
      "Ecommerce & Shopify",
      "Real Estate",
      "Healthcare",
      "Manufacturing",
      "Local Businesses",
    ],
  },
  {
    title: "Company",
    links: ["About", "Case Studies", "Careers", "Contact"],
  },
];

export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="relative pt-20 pb-10 border-t border-border bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Logo size="lg" testId="footer-logo" />
            <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
              Digital marketing systems built around revenue, not vanity
              metrics. We help growing businesses turn marketing into
              measurable, predictable growth.
            </p>
            <a
              href="mailto:hello@base2brand.com"
              data-testid="footer-email"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand transition-colors"
            >
              <Mail size={16} /> hello@base2brand.com
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-5">
                  {c.title}
                </h4>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="mailto:hello@base2brand.com"
                        className="text-sm text-foreground hover:text-brand transition-colors"
                        data-testid={`footer-link-${l.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
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

        {/* Massive wordmark */}
        <div className="border-t border-border pt-10">
          <div
            data-testid="footer-mega-wordmark"
            className="font-display font-bold uppercase text-[clamp(3rem,16vw,14rem)] leading-[0.85] tracking-tighter text-foreground select-none"
          >
            BASE<span className="text-brand">2</span>BRAND
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Base2Brand. All rights reserved. Built
            for businesses ready to scale smarter.
          </p>
          <div className="flex items-center gap-2">
            {[
              { Icon: Linkedin, label: "linkedin" },
              { Icon: Instagram, label: "instagram" },
              { Icon: Twitter, label: "twitter" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href={`https://${label}.com`}
                target="_blank"
                rel="noreferrer"
                data-testid={`footer-social-${label}`}
                className="h-9 w-9 grid place-items-center rounded-full hairline hover:border-brand hover:text-brand transition-colors"
                aria-label={label}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
