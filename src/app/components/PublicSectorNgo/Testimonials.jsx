'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Within 90 days, our ROAS jumped from 1.8 to 4.6. Base2Brand didn't just run ads — they rebuilt our entire conversion funnel.",
    name: "Aarav Mehta",
    role: "Founder, D2C Apparel Brand",
    avatar:
      "https://images.unsplash.com/photo-1607503873903-c5e95f80d7b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3OTg0MTY0NHww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "Lead quality used to be our biggest problem. Now our sales team actually fights over the leads we hand them. That's the difference.",
    name: "Priya Sharma",
    role: "Marketing Head, Real Estate Group",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3OTg0MTY0NHww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "We moved from chasing random vanity metrics to actual revenue tracking. Their dashboards finally tell us what's working and what isn't.",
    name: "Vikram Iyer",
    role: "CEO, Healthcare Network",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3OTg0MTY0NHww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "Most agencies overpromise. These guys underpromise and overdeliver. CAC down 41%, repeat purchase rate up 28% — in 6 months.",
    name: "Sana Kapoor",
    role: "Co-founder, Beauty DTC",
    avatar:
      "https://images.pexels.com/photos/26872232/pexels-photo-26872232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section
      data-testid="testimonials-carousel"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
              ▸ Client Voices
            </p>
            <h2
              data-testid="testimonials-headline"
              className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-[clamp(2rem,5vw,4.25rem)]"
            >
              Results That Sound Better From <span className="text-brand">Them</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 flex gap-2 lg:justify-end">
            <button
              data-testid="testimonials-prev"
              onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="h-12 w-12 grid place-items-center rounded-full hairline hover:bg-secondary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              data-testid="testimonials-next"
              onClick={() => setI((i + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="h-12 w-12 grid place-items-center rounded-full hairline hover:bg-secondary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="hairline rounded-3xl bg-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <Quote
            className="absolute top-6 right-8 text-brand/10"
            size={140}
            strokeWidth={1}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={18} className="text-brand fill-brand" />
                ))}
              </div>
              <p
                data-testid="testimonial-quote"
                className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-tight text-foreground max-w-4xl"
              >
                "{t.quote}"
              </p>
              <div className="mt-10 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover border border-border"
                  data-testid="testimonial-avatar"
                />
                <div>
                  <div className="font-semibold text-foreground" data-testid="testimonial-name">
                    {t.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid="testimonial-role">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* dots */}
          <div className="mt-10 flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                data-testid={`testimonial-dot-${idx}`}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-10 bg-brand" : "w-5 bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
