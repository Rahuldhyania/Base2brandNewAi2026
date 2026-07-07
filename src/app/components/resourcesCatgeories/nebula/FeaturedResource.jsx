'use client';
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, User, Bookmark, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import { Link } from "react-router-dom";

export default function FeaturedResource({ blogData }) {
  return (

    <div>
      <div className="pt-10">
        {
          blogData.slice(0, 1).map((blog, index) => (
            <Link
              href={`/resources/${blog.slug}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
                data-testid="featured-resource"
              >
                {/* Animated border */}
                <div className="absolute -inset-px rounded-3xl overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1/2"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, rgba(123,77,255,0.7) 60deg, rgba(66,212,255,0.7) 120deg, transparent 180deg, transparent 360deg)",
                    }}
                  />
                  <div className="absolute inset-[2px] rounded-[calc(1.5rem-2px)] bg-[#050609]" />
                </div>

                <div className="relative glass rounded-3xl overflow-hidden">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="relative md:col-span-3 aspect-[16/10] md:aspect-auto overflow-hidden min-h-100">
                      <img
                        src={blog.cover}
                        alt={blog.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ filter: "brightness(0.75) saturate(1.1)" }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(120deg, rgba(4,5,7,0.4) 0%, rgba(4,5,7,0) 40%, rgba(4,5,7,0.55) 100%)",
                        }}
                      />
                      <div className="absolute top-6 left-6 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full glass text-[11px] tracking-widest uppercase text-white/90">
                          Featured
                        </span>
                        <span className="px-3 py-1 rounded-full glass text-[11px] tracking-widest uppercase text-white/70">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2 p-6 flex flex-col justify-center">
                      <div>
                        <div className="flex items-center gap-4 text-white/50 text-xs mb-5">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> {blog.readingTime}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" /> {blog.date}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5" /> {blog.author.name}
                          </span>
                        </div>
                        <h3 className="font-display text-3xl tracking-tight text-white">
                          {blog.title}
                        </h3>
                        <p className="mt-1 text-white/65 leading-relaxed">{blog.excerpt}</p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {blog.tags.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-full text-[11px] text-white/60 border border-white/10 bg-white/[0.03]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))
        }
      </div>
      <div className="grid grid-cols-2 gap-4 pt-10">
        {
          blogData.slice(1).map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
              data-testid="featured-resource"
            >
              <Link
                href={`/resources/${blog.slug}`}>
                {/* Animated border */}
                <div className="absolute -inset-px rounded-3xl overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1/2"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, rgba(123,77,255,0.7) 60deg, rgba(66,212,255,0.7) 120deg, transparent 180deg, transparent 360deg)",
                    }}
                  />
                  <div className="absolute inset-[2px] rounded-[calc(1.5rem-2px)] bg-[#050609]" />
                </div>

                <div className="relative glass rounded-3xl overflow-hidden">
                  <div className="grid  gap-0">
                    {/* <div className="relative  overflow-hidden">
                    
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(120deg, rgba(4,5,7,0.4) 0%, rgba(4,5,7,0) 40%, rgba(4,5,7,0.55) 100%)",
                      }}
                    />
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full glass text-[11px] tracking-widest uppercase text-white/90">
                        Featured
                      </span>
                      <span className="px-3 py-1 rounded-full glass text-[11px] tracking-widest uppercase text-white/70">
                        {blog.category}
                      </span>
                    </div>
                  </div> */}

                    <div className="py-6  px-6 flex flex-col justify-between">
                      <div>
                        <img
                          src={blog.cover}
                          alt={blog.title}
                          // width={500}
                          // height={500}
                          loading="lazy"
                          className="max-h-55 w-full object-cover rounded-lg"
                          style={{ filter: "brightness(0.75) saturate(1.1)" }}
                        />
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center gap-4 text-white/50 text-xs mb-2">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> {blog.readingTime}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" /> {blog.date}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5" /> {blog.author.name}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl text-white line-clamp-1">
                          {blog.title}
                        </h3>
                        <p className="mt-1 text-white/65 leading-relaxed text-base line-clamp-1">{blog.excerpt}</p>

                        <div className="mt-2 flex flex-wrap gap-2">
                          {blog.tags.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-full text-[11px] text-white/60 border border-white/10 bg-white/[0.03]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

          ))
        }
      </div>
    </div>
  );
}
