const focusAreas = [
  "Education",
  "Public Services",
  "Nonprofits",
  "Community Development",
  "Operational Modernization",
];

export const TrustBar = () => {
  return (
    <section data-testid="trust-bar" className="pb-12 md:pt-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p
          data-testid="trust-bar-title"
          className="text-center text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground font-medium"
        >
          Trusted Partner for Mission-Driven Organizations
        </p>
        <p className="text-center text-base md:text-lg text-foreground/90 mt-3 max-w-3xl mx-auto">
          Supporting education, public services, nonprofits, community
          development, and operational modernization initiatives.
        </p>

        <div className="mt-5 overflow-hidden relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-12 md:gap-16 animate-marquee whitespace-nowrap">
            {[...focusAreas, ...focusAreas].map((area, i) => (
              <div
                key={`${area}-${i}`}
                data-testid={`trust-pill-${area.toLowerCase().replace(/\s+/g, "-")}-${i}`}
                className="flex items-center gap-3 shrink-0"
              >
                <div className="h-2 w-2 rounded-full bg-(--b2b-primary)" />
                <span className="font-display text-xl md:text-2xl uppercase tracking-wide text-muted-foreground">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
