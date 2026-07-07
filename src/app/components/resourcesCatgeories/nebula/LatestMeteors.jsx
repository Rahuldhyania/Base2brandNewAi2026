import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";

/**
 * Latest articles enter the screen as meteor trails — each card slides in
 * diagonally with a soft trail behind it.
 */
export default function LatestMeteors({ items }) {
  return (
    <div className="relative" data-testid="latest-meteors">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/45 mb-2">
            Newest signals
          </p>
          <h3 className="font-display text-3xl md:text-4xl tracking-tight">
            Latest Articles
          </h3>
        </div>
        <Link
          href="/resources"
          className="hidden md:inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
        >
          All articles <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.slice(0, 3).map((r, i) => (
          <motion.div
            key={r.id}
            className="relative"
          >
            {/* Meteor trail */}
            <motion.span
              viewport={{ once: true }}
              className="absolute -top-8 -left-16 h-[1.5px] w-40 origin-left rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(66,212,255,0), rgba(66,212,255,0.9), rgba(255,255,255,0))",
                filter: "blur(0.5px)",
                transform: "rotate(-30deg)",
              }}
            />
            <Link
              href={`/resources/${r.slug}`}
              className="block glass rounded-2xl overflow-hidden group hover:border-white/20 transition-colors"
              data-testid={`latest-meteor-${r.id}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={r.cover}
                  alt={r.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ filter: "brightness(0.7) saturate(1.1)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(4,5,7,0) 40%, rgba(4,5,7,0.85) 100%)",
                  }}
                />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full glass text-[10px] tracking-widest uppercase text-white/85">
                  {r.category}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-display text-lg md:text-xl leading-snug tracking-tight text-white group-hover:text-white">
                  {r.title}
                </h4>
                <p className="mt-3 text-sm text-white/55 line-clamp-2">{r.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-white/50">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3 w-3" /> {r.readingTime}
                  </span>
                  <span>{r.date}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
