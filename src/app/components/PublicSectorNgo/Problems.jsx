'use client'
import { motion } from "framer-motion";
import {
  Unplug,
  ClipboardList,
  EyeOff,
  Users,
  Wallet,
  ServerCrash,
} from "lucide-react";

const problems = [
  {
    icon: Unplug,
    title: "Disconnected Systems",
    text: "Critical information spread across multiple platforms.",
  },
  {
    icon: ClipboardList,
    title: "Manual Processes",
    text: "Time-consuming workflows reduce operational efficiency.",
  },
  {
    icon: EyeOff,
    title: "Limited Visibility",
    text: "Lack of real-time data for informed decisions.",
  },
  {
    icon: Users,
    title: "Citizen Expectations",
    text: "Growing demand for modern digital experiences.",
  },
  {
    icon: Wallet,
    title: "Resource Constraints",
    text: "Doing more with limited budgets and staff.",
  },
  {
    icon: ServerCrash,
    title: "Legacy Infrastructure",
    text: "Outdated systems limiting innovation and growth.",
  },
];

export const Problems = () => {
  return (
    <section
      id="problems"
      data-testid="problems-grid"
      className="relative py-16 bg-secondary/40 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
            ▸ Challenges We Help Solve
          </p>
          <h2
            data-testid="problems-headline"
            className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-[clamp(2rem,5vw,4.25rem)] mb-6"
          >
            The Challenges{" "}
            <span className="text-brand">Public Organizations</span>
            <br />
            Face Today.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                data-testid={`problem-card-${i}`}
                className="group relative p-7 md:p-8 border-r border-b border-border bg-background hover:bg-card transition-colors"
              >
                <div className="absolute top-0 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                <div className="w-10 h-10 rounded-lg border border-border bg-secondary/60 grid place-items-center mb-5 group-hover:border-brand group-hover:text-brand transition-colors">
                  <Icon size={18} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug mb-2">
                  {p.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {p.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
