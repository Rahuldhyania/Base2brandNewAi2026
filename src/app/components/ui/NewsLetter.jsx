"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase/client";
import { usePathname } from "next/navigation";
export default function NewsLetter({ lable }) {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.from("newsletter_subscribers").insert([
        {
          email: email.trim().toLowerCase(),
          source: pathname,
          status: "new",
        },
      ]);

      if (error) {
        throw error;
      }

      setMessage("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Newsletter error:", error);

      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="mt-8 max-w-md"
      onSubmit={handleSubmit}
      data-testid="footer-newsletter-form"
    >
      {lable && (
        <label className="block text-xs font-mono-display uppercase tracking-[0.22em] text-mute mb-2">
          {lable}
        </label>
      )}

      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="work@email.com"
          data-testid="footer-newsletter-email"
          className="flex-1 bg-[#04061a] border border-line rounded-full px-5 py-3 text-white text-sm placeholder:text-mute/60 focus:border-orange-brand/60 focus:outline-none transition"
          disabled={loading}
        />

        <button
          type="submit"
          data-testid="footer-newsletter-submit"
          disabled={loading}
          className="rounded-full bg-(--b2b-primary) font-semibold text-sm px-5 py-3 hover:brightness-110 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Subscribe"}
        </button>
      </div>

      {message && <p className="mt-3 text-xs text-white/60">{message}</p>}
    </form>
  );
}
