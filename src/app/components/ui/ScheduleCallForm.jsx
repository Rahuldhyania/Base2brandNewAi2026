"use client";

import { useMemo, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CalendarDays, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "../../../lib/supabase/client";
const inputBase =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 md:py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:border-[var(--b2b-primary)] focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--b2b-primary)_16%,transparent)]";

function FieldLabel({ children, required }) {
  return (
    <label className="mb-2 block text-sm font-medium text-white/75">
      {children}
      {required && <span className="ml-0.5 text-red-400">*</span>}
    </label>
  );
}

export default function ScheduleCallForm({ className }) {
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);
  const [formData, setFormData] = useState({
    date: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      const { error } = await supabase.from("call_schedule").insert([
        {
          date: formData.date,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          source: "schedule-call",
          status: "new",
        },
      ]);

      if (error) {
        throw error;
      }

      setMessage("Meeting request submitted successfully.");

      setFormData({
        date: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Schedule call error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#05070D]/90 px-3 py-5 shadow-2xl backdrop-blur-2xl sm:py-6",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--b2b-primary)_18%,transparent),transparent_36%)]" />

      <div className="relative text-center">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-[1.65rem]">
          Schedule a Free Call
        </h3>
        <p className="mt-2 text-sm text-white/50">
          Pick a time — we&apos;ll send you the Google Meet link instantly.
        </p>
      </div>

      <div className="relative mt-7 space-y-4">
        <div>
          <FieldLabel required>Select Date</FieldLabel>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={minDate}
            required
            className={cn(inputBase, "[color-scheme:dark]")}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <FieldLabel required>First Name</FieldLabel>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className={inputBase}
              required
            />
          </div>
          <div>
            <FieldLabel required>Last Name</FieldLabel>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className={inputBase}
              required
            />
          </div>
        </div>

        <div>
          <FieldLabel required>Email</FieldLabel>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={inputBase}
            required
          />
        </div>

        <div>
          <FieldLabel>Phone / WhatsApp</FieldLabel>
          <div className="phone-input-wrap flex overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all focus-within:border-[var(--b2b-primary)] focus-within:shadow-[0_0_0_4px_color-mix(in_srgb,var(--b2b-primary)_16%,transparent)]">
            <PhoneInput
              international
              defaultCountry="IN"
              countryCallingCodeEditable={false}
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="+91"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--b2b-primary)] px-6 py-3 md:py-4 text-sm font-bold text-black transition-all hover:shadow-[0_0_40px_color-mix(in_srgb,var(--b2b-primary)_45%,transparent)]"
        >
          <CalendarDays className="h-4 w-4" />
          Confirm Meeting
        </button>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-white/45">
          <Lock className="h-3.5 w-3.5 text-yellow-400/80" />
          Confirmation will be sent to your email instantly.
        </p>
        {
          message && (
            <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-green/45">
              {message}
            </p>
          )
        }
      </div>
    </form>
  );
}
