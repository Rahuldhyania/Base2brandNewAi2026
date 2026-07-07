import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TopNav() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 120], [0, 1]);
  const topLogoOpacity = useTransform(scrollY, [0, 120], [1, 0]);

  return (
    <>
      <motion.header
        style={{ opacity }}
        className="fixed top-0 inset-x-0 z-40 pointer-events-none"
        data-testid="top-nav"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-4">
          <div className="pointer-events-auto flex items-center justify-between glass-strong rounded-full px-4 py-3">
            <Link to="/" className="flex items-center gap-2" data-testid="nav-logo">
              <span
                className="h-7 w-7 rounded-lg"
                style={{
                  background:
                    "conic-gradient(from 90deg, #7B4DFF, #42D4FF, #A855F7, #7B4DFF)",
                }}
              />
              <span className="font-display tracking-tight text-white">Base2Brand</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a href="#featured" className="hover:text-white">Featured</a>
              <a href="#library" className="hover:text-white">Library</a>
              <a href="#constellation" className="hover:text-white">Topics</a>
              <a href="#downloads" className="hover:text-white">Downloads</a>
            </nav>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white font-medium"
              style={{
                background:
                  "linear-gradient(120deg, rgba(123,77,255,0.9), rgba(66,212,255,0.9))",
              }}
              data-testid="nav-cta"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Initial hero logo (top-left) fades out as user scrolls */}
      <motion.div
        style={{ opacity: topLogoOpacity }}
        className="pointer-events-none fixed top-6 left-6 md:top-8 md:left-10 z-40"
      >
        <div className="pointer-events-auto flex items-center gap-2">
          <span
            className="h-8 w-8 rounded-lg"
            style={{
              background:
                "conic-gradient(from 90deg, #7B4DFF, #42D4FF, #A855F7, #7B4DFF)",
              boxShadow: "0 0 20px rgba(123,77,255,0.4)",
            }}
          />
          <span className="font-display tracking-tight text-white text-lg">
            Base2Brand
          </span>
        </div>
      </motion.div>
    </>
  );
}
