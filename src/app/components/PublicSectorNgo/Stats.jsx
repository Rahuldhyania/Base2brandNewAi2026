'use client'
import { m } from "framer-motion";
import {
  Code2,
  Globe,
  Building2,
  Bot,
  BarChart3,
  Radio,
  Workflow,
  RefreshCw,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Purpose-built applications for unique operational needs.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Accessible and scalable digital experiences.",
  },
  {
    icon: Building2,
    title: "Enterprise Platforms",
    desc: "Systems designed for long-term organizational growth.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    desc: "Reducing manual work and improving efficiency.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Turning information into actionable insights.",
  },
  {
    icon: Radio,
    title: "Connected Solutions",
    desc: "Real-time visibility across operations and assets.",
  },
  {
    icon: Workflow,
    title: "Operational Optimization",
    desc: "Improving processes through technology.",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    desc: "Modernizing services and internal workflows.",
  },
];

export const Stats = () => {
  return (
    <section
      id="expertise"
      data-testid="expertise-grid"
      className="relative py-12 md:py-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-dense radial-fade opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-10">
        <div className="max-w-3xl mb-8 md:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
            ▸ Expertise Grid
          </p>
          <h2
            data-testid="expertise-headline"
            className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-[clamp(1.75rem,4.5vw,3.75rem)]"
          >
            Mission First.{" "}
            <span className="text-brand">Technology</span>
            <br />
            Second.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <m.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                data-testid={`expertise-card-${i}`}
                className="group border border-(--b2b-primary)/30 rounded-2xl p-4 xl:p-8 bg-card/40 backdrop-blur hover:border-brand/40 transition-colors relative overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-brand/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl border border-border bg-secondary/60 grid place-items-center text-brand mb-5 group-hover:border-brand/40 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display uppercase text-lg font-bold tracking-tight leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
