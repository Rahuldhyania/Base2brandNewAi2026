"use client";

import { useMemo, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CalendarDays, CheckCircle2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

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

function getMinDateTime() {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 30);
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hour}:${minute}`;
}

function formatDisplayTime(value) {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function ScheduleCallForm({ className }) {
  const minDateTime = useMemo(() => getMinDateTime(), []);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    scheduledTime: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.firstname.trim()) {
      nextErrors.firstname = "First name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.firstname.trim())) {
      nextErrors.firstname = "Only letters are allowed";
    }

    if (!formData.lastname.trim()) {
      nextErrors.lastname = "Last name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.lastname.trim())) {
      nextErrors.lastname = "Only letters are allowed";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      nextErrors.email = "Please enter a valid email";
    }

    if (!formData.scheduledTime) {
      nextErrors.scheduledTime = "Please select a date and time";
    } else if (new Date(formData.scheduledTime) <= new Date()) {
      nextErrors.scheduledTime = "Please select a future date and time";
    }

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/schedule-zoom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: formData.firstname.trim(),
          lastname: formData.lastname.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone,
          scheduledTime: formData.scheduledTime,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to book meeting.");
      }

      setBookingSuccess({
        joinUrl: result.joinUrl || result.meetLink,
        startTime: result.startTime || formData.scheduledTime,
        message: result.message,
      });

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        scheduledTime: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Schedule call error:", error);
      setErrors({
        submit: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (bookingSuccess) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#05070D]/90 px-4 py-8 shadow-2xl backdrop-blur-2xl sm:px-6",
          className,
        )}
      >
        <div className="relative text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-400" />
          <h3 className="mt-4 font-display text-2xl font-semibold text-white">
            Meeting Confirmed
          </h3>
          <p className="mt-2 text-sm text-white/60">
            {bookingSuccess.message ||
              "Your Google Meet link is ready. We also emailed you the details."}
          </p>
          <p className="mt-4 text-sm text-white/75">
            {formatDisplayTime(bookingSuccess.startTime)}
          </p>

          {bookingSuccess.joinUrl && (
            <a
              href={bookingSuccess.joinUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[var(--b2b-primary)] px-6 py-3 text-sm font-bold text-black transition-all hover:shadow-[0_0_40px_color-mix(in_srgb,var(--b2b-primary)_45%,transparent)]"
            >
              Join Google Meet
            </a>
          )}

          <button
            type="button"
            onClick={() => setBookingSuccess(null)}
            className="mt-4 block w-full text-sm text-white/45 transition-colors hover:text-white/70"
          >
            Book another meeting
          </button>
        </div>
      </div>
    );
  }

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
          <FieldLabel required>Date & Time</FieldLabel>
          <input
            type="datetime-local"
            name="scheduledTime"
            value={formData.scheduledTime}
            onChange={handleChange}
            min={minDateTime}
            required
            disabled={isSubmitting}
            className={cn(inputBase, "[color-scheme:dark]")}
          />
          {errors.scheduledTime && (
            <p className="mt-1 text-xs text-red-400">{errors.scheduledTime}</p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <FieldLabel required>First Name</FieldLabel>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="John"
              className={inputBase}
              required
              disabled={isSubmitting}
            />
            {errors.firstname && (
              <p className="mt-1 text-xs text-red-400">{errors.firstname}</p>
            )}
          </div>
          <div>
            <FieldLabel required>Last Name</FieldLabel>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Doe"
              className={inputBase}
              required
              disabled={isSubmitting}
            />
            {errors.lastname && (
              <p className="mt-1 text-xs text-red-400">{errors.lastname}</p>
            )}
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
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          )}
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
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--b2b-primary)] px-6 py-3 md:py-4 text-sm font-bold text-black transition-all hover:shadow-[0_0_40px_color-mix(in_srgb,var(--b2b-primary)_45%,transparent)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <CalendarDays className="h-4 w-4" />
          {isSubmitting ? "Booking..." : "Confirm Meeting"}
        </button>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-white/45">
          <Lock className="h-3.5 w-3.5 text-yellow-400/80" />
          Confirmation will be sent to your email instantly.
        </p>

        {errors.submit && (
          <p className="mt-4 text-center text-xs text-red-400">{errors.submit}</p>
        )}
      </div>
    </form>
  );
}
