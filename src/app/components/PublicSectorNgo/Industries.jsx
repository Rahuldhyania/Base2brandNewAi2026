'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const industries = [
  {
    id: "education",
    label: "Education",
    title: "Education & Student Success",
    desc: "Helping educational institutions improve operational efficiency and enhance student experiences through technology.",
    outcomes: [
      "Improved transportation visibility",
      "Better parent communication",
      "Streamlined administration",
      "Enhanced student engagement",
    ],
    solutions: [
      "School transportation management systems",
      "Fleet and bus tracking platforms",
      "Parent communication portals",
      "Student information systems",
      "Educational web applications",
      "Administrative workflow automation",
    ],
    highlight: {
      label: "Current Area of Focus",
      text: "We're actively exploring intelligent school transportation solutions that improve safety, route visibility, and operational efficiency for educational institutions.",
    },
    image:
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "government",
    label: "Government",
    title: "Government Digital Services",
    desc: "Supporting public sector organizations in delivering accessible, secure, and efficient services.",
    outcomes: [
      "Improved service delivery",
      "Reduced administrative burden",
      "Better citizen experiences",
      "Greater operational transparency",
    ],
    solutions: [
      "Citizen portals",
      "Digital transformation initiatives",
      "Process modernization",
      "Case management systems",
      "Public service applications",
      "Secure web platforms",
    ],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "nonprofits",
    label: "Nonprofits",
    title: "Nonprofit Technology Solutions",
    desc: "Helping mission-driven organizations maximize impact through scalable technology.",
    outcomes: [
      "Increased engagement",
      "Improved reporting",
      "Better donor experiences",
      "Scalable growth infrastructure",
    ],
    solutions: [
      "Fundraising platforms",
      "Volunteer management systems",
      "Impact dashboards",
      "CRM implementation",
      "Digital outreach systems",
      "Website modernization",
    ],
    image:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "public-operations",
    label: "Public Operations",
    title: "Operational Intelligence for Public Services",
    desc: "Creating visibility across assets, resources, and operations.",
    outcomes: [
      "Better decision making",
      "Increased accountability",
      "Operational efficiency",
      "Real-time visibility",
    ],
    solutions: [
      "Fleet monitoring systems",
      "Resource utilization tracking",
      "Operational dashboards",
      "Reporting and analytics",
      "Workflow optimization",
    ],
    image:
      "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const Industries = () => {
  const [active, setActive] = useState(industries[0].id);
  const current = industries.find((i) => i.id === active);

  return (
    <section
      id="industries"
      data-testid="industry-tabs"
      className="relative py-16 border-y border-border bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
            ▸ Industry Solution Tabs
          </p>
          <h2
            data-testid="industries-headline"
            className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Solutions Built{" "}
            <span className="text-brand">Around Your</span>
            <br />
            Mission.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 md:mb-10" data-testid="industry-tablist">
          {industries.map((ind) => {
            const isActive = ind.id === active;
            return (
              <button
                key={ind.id}
                data-testid={`industry-tab-${ind.id}`}
                onClick={() => setActive(ind.id)}
                className={`relative px-3 md:px-5 py-1.5 md:py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="industry-active-pill"
                    className="absolute inset-0 bg-brand rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{ind.label}</span>
              </button>
            );
          })}
        </div>

        <div className="hairline rounded-3xl bg-background overflow-hidden">
          <div className="grid lg:grid-cols-12 border border-white/40">
            <div className="lg:col-span-7 p-4 md:p-8 xl:p-14 rounded-[50px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full hairline bg-secondary text-xs uppercase tracking-wider text-muted-foreground mb-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {current.label}
                  </div>
                  <h3
                    data-testid={`industry-title-${current.id}`}
                    className="font-display uppercase text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground"
                  >
                    {current.title}
                  </h3>
                  <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                    {current.desc}
                  </p>

                  <div className="mt-4 md:mt-8 grid md:grid-cols-2 gap-3 md:gap-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-brand font-semibold mb-4">
                        Outcomes
                      </p>
                      <ul className="space-y-3">
                        {current.outcomes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm md:text-base text-foreground"
                          >
                            <Check size={16} className="text-brand shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-brand font-semibold mb-4">
                        Solutions
                      </p>
                      <ul className="space-y-3">
                        {current.solutions.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm md:text-base text-muted-foreground"
                          >
                            <span className="text-brand shrink-0 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {current.highlight && (
                    <div
                      className="mt-8 hairline rounded-2xl p-5 md:p-6 bg-secondary/40"
                      data-testid={`industry-highlight-${current.id}`}
                    >
                      <p className="text-[10px] uppercase tracking-wider text-brand font-semibold mb-2">
                        {current.highlight.label}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {current.highlight.text}
                      </p>
                    </div>
                  )}

                  <a
                    href={`mailto:hello@base2brand.com?subject=Public%20Sector%20Solutions%20-%20${encodeURIComponent(
                      current.label
                    )}`}
                    data-testid={`industry-cta-${current.id}`}
                    className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand transition-colors"
                  >
                    Discuss your initiative <ArrowUpRight size={16} />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-border overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                  data-testid={`industry-image-${current.id}`}
                >
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-brand/20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
