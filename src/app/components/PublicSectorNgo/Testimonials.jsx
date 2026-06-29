'use client'
import { motion } from "framer-motion";

const organizations = [
  "Africa Wildlife Foundation",
  "The Nature Conservancy",
  "Campaign for Tobacco-Free Kids",
  "Nelson Mandela Children's Fund",
  "Afrika Tikkun",
  "Uganda Health Marketing Group (UHMG)",
  "Vijana Corps",
];

export const Testimonials = () => {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-12 md:py-16 border-y border-border bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
              ▸ Collaborative Experience
            </p>
            <h2
              data-testid="experience-headline"
              className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Experience That{" "}
              <span className="text-brand">Shapes Our</span>
              <br />
              Perspective.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-base md:text-lg text-muted-foreground"
          >
            <p>
              Through our partner ecosystem and collaborative engagements, our
              team has supported initiatives associated with organizations
              focused on conservation, public health, child welfare, education,
              and community development.
            </p>
            <div>
              <p className="text-sm uppercase tracking-wider text-foreground font-semibold mb-4">
                Examples include:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {organizations.map((org) => (
                  <li
                    key={org}
                    className="flex items-start gap-2 text-sm md:text-base text-foreground"
                    data-testid={`experience-org-${org.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="text-brand shrink-0 mt-1">•</span>
                    <span>{org}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              These experiences continue to shape our understanding of how
              technology can support organizations working toward meaningful
              social impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
