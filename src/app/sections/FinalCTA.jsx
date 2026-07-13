'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";
import ProjectContactForm from "@/components/ui/ProjectContactForm";
import Image from "next/image";

const INITIAL = { name: "", email: "", company: "", message: "" };

export function FinalCTA() {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete name, work email and a short message.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company: form.company || undefined,
            message: form.message,
          }),
        }
      );
      if (!res.ok) {
        const detail = await res.json().catch(() => ({}));
        throw new Error(
          detail?.detail?.[0]?.msg || detail?.detail || "Could not send brief."
        );
      }
      const data = await res.json();
      setSent(true);
      toast.success(
        data?.message || "Brief received. A senior partner will respond within 24 hours."
      );
      setTimeout(() => {
        setSent(false);
        setForm(INITIAL);
      }, 4000);
    } catch (err) {
      toast.error(
        typeof err?.message === "string"
          ? err.message
          : "Network error. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="final-cta-section"
      className="relative py-12"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(900px circle at 80% 50%, rgba(255,106,0,0.18), transparent 50%), radial-gradient(700px circle at 10% 80%, rgba(80,90,180,0.15), transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-6 items-start">

        <div className="h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs font-mono-display uppercase tracking-[0.25em] text-mute">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-brand mr-2 align-middle shadow-[0_0_10px_#ff6a00]" />
              Start a transformation
            </div>
            <h2 className="mt-5 font-display text-white text-4xl sm:text-5xl  leading-[1.10] tracking-tight">
              Tell us where growth is stuck. We’ll show you how to unlock it.
            </h2>
            <p className="mt-5 text-mute text-base sm:text-lg max-w-xl leading-relaxed">
              Need better leads, ROAS, conversions, CRO, automation or a digital product? We’ll map the growth system your brand needs next.
            </p>

            <ul className="mt-3 space-y-2 text-white/85 text-sm sm:text-base">
              {[
                "No generic proposal.",
                "No confusing discovery process.",
                "Just a clear, practical plan built around your business goals.",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="grid place-items-center h-5 w-5 rounded-full bg-orange-brand/15 text-orange-brand">
                    <CheckCircle2 size={14} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            {/* <div>
            <Image
             src={'/images/contact-us-image.png'}
             alt="Contact us"
             width={500}
             height={500}
            />
          </div> */}
          </motion.div>
        </div>



        <div>
          <ProjectContactForm />
        </div>
      </div>
    </section>
  );
}

function Field({ label, testId, ...rest }) {
  return (
    <div>
      <label className="block text-xs font-mono-display uppercase tracking-[0.22em] text-mute mb-2">
        {label}
      </label>
      <input
        data-testid={testId}
        className="w-full bg-[#02030a] border border-line rounded-2xl px-4 py-3 text-white placeholder:text-mute/60 focus:border-orange-brand/60 focus:outline-none focus:ring-1 focus:ring-orange-brand/40 transition"
        {...rest}
      />
    </div>
  );
}
