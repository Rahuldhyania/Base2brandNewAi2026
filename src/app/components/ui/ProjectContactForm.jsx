"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Globe2,
  Mail,
  User,
} from "lucide-react";

const API_BASE =
  process.env.NEXT_PUBLIC_LOCAL_API_URL || "http://localhost:5000/api";

const REQUIREMENTS = [
  "AI Automation",
  "Software Development",
  "Apple Ecosystem Development",
  "Growth Visibility / GEO",
  "Enterprise Systems",
  "Emerging Technologies",
  "Performance Marketing",
  "Shopify & Ecommerce",
  "CRO & Growth Optimization",
  "Brand & Creative",
];

const RANGES = [
  "Select your range",
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  requirement: "",
  range: "",
  website: "",
  description: "",
};

const inputBase =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 md:py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:border-[var(--b2b-primary)] focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--b2b-primary)_16%,transparent)]";

function FieldLabel({ children }) {
  return (
    <label className="mb-2 block text-sm font-medium text-white/75">
      {children}
    </label>
  );
}

function InputIcon({ children }) {
  return (
    <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
      {children}
    </div>
  );
}

export default function ProjectContactForm({ embedded = false }) {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitMessage) {
      setSubmitMessage("");
      setSubmitStatus("");
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value || "",
    }));

    if (submitMessage) {
      setSubmitMessage("");
      setSubmitStatus("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus("");

    try {
      const response = await fetch(`${API_BASE}/forms/main-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone || "",
          website: formData.website.trim(),
          range: formData.range || "",
          requirement: formData.requirement || "",
          description: formData.description.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      setSubmitStatus("success");
      setSubmitMessage(
        result.message ||
          "Thank you! Your project details have been submitted successfully.",
      );

      setFormData(initialFormData);
    } catch (error) {
      console.error("Project form submission error:", error);

      setSubmitStatus("error");
      setSubmitMessage(
        "Something went wrong while submitting the form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formCard = (
    <form
      onSubmit={handleSubmit}
      data-nosnippet
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#05070D]/90 px-3 py-5 shadow-2xl backdrop-blur-2xl sm:py-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--b2b-primary)_18%,transparent),transparent_36%)]" />

      <div className="relative text-center">
        <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          Tell us about your project
        </h3>

        <p className="mt-2 text-sm text-white/50">
          We’ll respond within 2 business hours.
        </p>
      </div>

      <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel>First Name *</FieldLabel>

          <div className="relative">
            <InputIcon>
              <User className="h-4 w-4" />
            </InputIcon>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className={`${inputBase} pl-11`}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <FieldLabel>Last Name *</FieldLabel>

          <div className="relative">
            <InputIcon>
              <User className="h-4 w-4" />
            </InputIcon>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className={`${inputBase} pl-11`}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <FieldLabel>Email *</FieldLabel>

          <div className="relative">
            <InputIcon>
              <Mail className="h-4 w-4" />
            </InputIcon>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your business email"
              className={`${inputBase} pl-11`}
              required
              disabled={isSubmitting}
            />
          </div>
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
              placeholder="Phone number"
              className="w-full"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="">
          <FieldLabel>What do you need?</FieldLabel>

          <div className="relative">
            <select
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className={`${inputBase} appearance-none pr-12`}
              disabled={isSubmitting}
            >
              <option value="" className="bg-[#05070D]">
                Select your requirement
              </option>

              {REQUIREMENTS.map((item) => (
                <option key={item} value={item} className="bg-[#05070D]">
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
          </div>
        </div>

        <div className="">
          <FieldLabel>Range</FieldLabel>

          <div className="relative">
            <select
              name="range"
              value={formData.range}
              onChange={handleChange}
              className={`${inputBase} appearance-none pr-12`}
              disabled={isSubmitting}
            >
              {RANGES.map((item, index) => (
                <option
                  key={item}
                  value={index === 0 ? "" : item}
                  className="bg-[#05070D]"
                >
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <FieldLabel>Website URL</FieldLabel>

          <div className="relative">
            <InputIcon>
              <Globe2 className="h-4 w-4" />
            </InputIcon>

            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Enter your website URL"
              className={`${inputBase} pl-11`}
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <FieldLabel>Brief description</FieldLabel>

          <div className="relative">
            <div className="absolute left-4 top-4 text-white/35">
              <FileText className="h-4 w-4" />
            </div>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us more about your project..."
              rows={5}
              className={`${inputBase} min-h-32 resize-none pl-11`}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        {submitMessage && (
          <div
            role="alert"
            className={`mb-4 rounded-2xl border px-4 py-3 text-center text-sm ${
              submitStatus === "success"
                ? "border-green-500/20 bg-green-500/10 text-green-300"
                : "border-red-500/20 bg-red-500/10 text-red-300"
            }`}
          >
            {submitMessage}
          </div>
        )}

        <motion.button
          whileHover={isSubmitting ? undefined : { y: -2 }}
          whileTap={isSubmitting ? undefined : { scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--b2b-primary)] px-6 py-3 md:py-4 text-sm font-bold text-black transition-all hover:shadow-[0_0_40px_color-mix(in_srgb,var(--b2b-primary)_45%,transparent)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Get Your Free Audit"}

          {!isSubmitting && (
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
        </motion.button>

        <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-white/45 sm:text-sm">
          <span>🔒</span>
          <span>No spam. We reply within 2 hours on business days.</span>
        </div>
      </div>
    </form>
  );

  if (embedded) {
    return formCard;
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--b2b-primary)_20%,transparent)] blur-[150px]" />

        <div className="absolute -left-28 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute -right-28 top-24 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <motion.div
          animate={{
            y: [0, -18, 0],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-[var(--b2b-primary)] shadow-[0_0_24px_var(--b2b-primary)]"
        />

        <motion.div
          animate={{
            y: [0, 22, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[16%] bottom-[18%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_24px_#67e8f9]"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-start gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{
            once: true,
            margin: "-10% 0px",
          }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative"
        >
          {formCard}
        </motion.div>
      </div>
    </section>
  );
}
