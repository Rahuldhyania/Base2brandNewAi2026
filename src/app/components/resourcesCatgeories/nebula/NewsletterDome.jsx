import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";

export default function NewsletterDome() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle"); // idle | sending | success

  const submit = (e) => {
    e.preventDefault();
    if (!email || status !== "idle") return;
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1200);
  };

  return (
    <div className="relative flex justify-center pt-18" data-testid="newsletter-dome">
      <div className="relative w-full max-w-3xl">
        {/* Dome — top rounded observatory shape */}
        <div
          className="relative overflow-hidden text-center px-8 pt-12 pb-12relative z-10 mx-auto max-w-6xl px-6 md:px-10 -mt-6 md:-mt-10 mb-12 md:pt-24"
          style={{
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%",
            border: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "none",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(123,77,255,0.06) 50%, rgba(4,5,7,0) 100%)",
            backdropFilter: "blur(28px)",
          }}
        >
          {/* Sun / light source */}
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(66,212,255,0.55) 0%, rgba(123,77,255,0.3) 40%, rgba(4,5,7,0) 70%)",
              filter: "blur(4px)",
            }}
          />
          <p className="relative uppercase tracking-[0.35em] text-[11px] text-white/50 mb-4">
            Signal from the Observatory
          </p>
          <h2 className="relative font-display text-3xl md:text-5xl leading-tight tracking-tight">
            <span className="gradient-text">Stay Connected To <br /> The Universe</span>
          </h2>
          <p className="relative mt-4 max-w-lg mx-auto text-white/60">
            One thoughtful dispatch every fortnight — new research, prompt drops and
            case studies. No noise. Unsubscribe anytime.
          </p>

          <form
            onSubmit={submit}
            className="relative mt-8 mx-auto flex max-w-lg items-center gap-2 rounded-full glass-strong p-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@brand.com"
              disabled={status !== "idle"}
              data-testid="newsletter-email"
              className="flex-1 bg-transparent px-4 py-2.5 text-sm md:text-base text-white placeholder:text-white/40 outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status !== "idle"}
              data-testid="newsletter-submit"
              className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium overflow-hidden"
              style={{
                background:
                  "linear-gradient(120deg, rgba(123,77,255,0.9), rgba(66,212,255,0.9))",
                boxShadow: "0 0 30px rgba(123,77,255,0.35)",
              }}
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="relative z-10 inline-flex items-center gap-2 text-white"
                  >
                    Subscribe <Send className="h-4 w-4" />
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 inline-flex items-center gap-2 text-white"
                  >
                    Transmitting…
                  </motion.span>
                )}
                {status === "success" && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 inline-flex items-center gap-2 text-white"
                  >
                    <Check className="h-4 w-4" /> On the beam
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>
        </div>

        {/* Dome base */}
        <div
          className="mx-auto h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(123,77,255,0.5), rgba(66,212,255,0.5), transparent)",
          }}
        />
      </div>
    </div>
  );
}
