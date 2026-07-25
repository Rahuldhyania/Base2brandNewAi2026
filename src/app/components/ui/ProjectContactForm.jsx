'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  FileText,
  Globe2,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
} from 'lucide-react';

const REQUIREMENTS = [
  'AI Automation',
  'Software Development',
  'Apple Ecosystem Development',
  'Growth Visibility / GEO',
  'Enterprise Systems',
  'Emerging Technologies',
  'Performance Marketing',
  'Shopify & Ecommerce',
  'CRO & Growth Optimization',
  'Brand & Creative',
];

const RANGES = [
  'Select your range',
  'Under $2,000',
  '$2,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
];

const inputBase =
  'w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:border-[var(--b2b-primary)] focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--b2b-primary)_16%,transparent)]';

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

export default function ProjectContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '', // now stores full E.164 value e.g. "+919876543210"
    requirement: '',
    range: '',
    website: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value || '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Project form submitted:', formData);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
    >
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
            ease: 'easeInOut',
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
            ease: 'easeInOut',
          }}
          className="absolute right-[16%] bottom-[18%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_24px_#67e8f9]"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-start gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#05070D]/90 p-5 shadow-2xl backdrop-blur-2xl"
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
                  >
                    {RANGES.map((item, index) => (
                      <option
                        key={item}
                        value={index === 0 ? '' : item}
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
                  />
                </div>
              </div>
            </div>

            <div className="relative mt-6">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--b2b-primary)] px-6 py-4 text-sm font-bold text-black transition-all hover:shadow-[0_0_40px_color-mix(in_srgb,var(--b2b-primary)_45%,transparent)]"
              >
                Get Your Free Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-white/45 sm:text-sm">
                <span>🔒</span>
                <span>No spam. We reply within 2 hours on business days.</span>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}