"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, Bookmark, Share2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

function ResourceCard({ r, index }) {
  const heightClass =
    r.span === "tall"
      ? "aspect-[4/5]"
      : r.span === "wide"
        ? "aspect-[16/10]"
        : "aspect-[4/3]";

  const [bookmarked, setBookmarked] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
      data-testid={`resource-card-${r.id}`}
      style={{ transition: "box-shadow 400ms ease, border-color 400ms ease" }}
    >
      <Link href={`/resources/${r.slug}`} className="block">
        <div className={`relative ${heightClass} overflow-hidden`}>
          <motion.img
            src={r.cover}
            alt={r.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "brightness(0.7) saturate(1.15)" }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(4,5,7,0) 30%, rgba(4,5,7,0.75) 100%)",
            }}
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full glass text-[10px] tracking-widest uppercase text-white/90">
              {r.category}
            </span>
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-1.5">
            <button
              type="button"
              aria-label="Bookmark"
              data-testid={`bookmark-${r.id}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setBookmarked((b) => !b);
              }}
              className="h-8 w-8 rounded-full glass flex items-center justify-center text-white/80 hover:text-white transition-colors"
            >
              <Bookmark className="h-3.5 w-3.5" fill={bookmarked ? "#42D4FF" : "none"} />
            </button>
            <button
              type="button"
              aria-label="Share"
              data-testid={`share-${r.id}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="h-8 w-8 rounded-full glass flex items-center justify-center text-white/80 hover:text-white transition-colors"
            >
              <Share2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-white/45 text-[11px]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" /> {r.readingTime}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3 w-3" /> {r.date}
            </span>
            <span className="text-white/50">· {r.author.name}</span>
          </div>
          <h3 className="mt-3 font-display text-xl md:text-2xl leading-snug tracking-tight text-white group-hover:text-white">
            {r.title}
          </h3>
          <p className="mt-3 text-sm text-white/60 leading-relaxed line-clamp-3">
            {r.excerpt}
          </p>
          <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-white/70 group-hover:text-[#42D4FF] transition-colors">
            Read article
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow:
            "0 0 0 1px rgba(123,77,255,0.25), 0 30px 80px rgba(123,77,255,0.18), 0 10px 40px rgba(66,212,255,0.15)",
        }}
      />
    </motion.div>
  );
}

export default function ResourceGrid({ items }) {
  return (
    <div className="masonry" data-testid="resource-grid">
      {items.map((r, i) => (
        <ResourceCard key={r.id} r={r} index={i} />
      ))}
      {items.length === 0 && (
        <div className="col-span-full text-center py-16 text-white/50">
          Nothing found in this corner of the universe. Try another filter.
        </div>
      )}
    </div>
  );
}
