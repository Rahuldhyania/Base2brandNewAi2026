import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import MonoLabel from "./MonoLabel";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(2, "Please enter your company"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Please enter a valid phone"),
  projectType: z.string().min(1, "Choose a project type"),
  budget: z.string().min(1, "Choose a budget range"),
  message: z.string().min(10, "Tell us a bit more (min 10 chars)"),
});

const PROJECT_TYPES = [
  "Shopify Design",
  "Shopify Development",
  "Shopify Plus",
  "Migration to Shopify",
  "ERP Integration",
  "Subscription Commerce",
  "Growth Services",
  "Other / Not Sure",
];

const BUDGETS = [
  "< $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k – $250k",
  "$250k+",
];

const inputBase = cn(
  "h-11 bg-white/[0.04] border border-white/12 text-white placeholder:text-white/35 rounded-xl",
  "focus-visible:ring-2 focus-visible:ring-[#95BF47]/45 focus-visible:border-white/22",
  "transition-colors duration-150",
);

const labelBase = "text-white/70 text-xs font-mono tracking-[0.18em] uppercase";

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

/**
 * LeadForm — componentized form with frontend validation + MOCKED submit.
 * onSubmit prop is invoked with payload; if not provided, defaults to mock delay.
 * idPrefix lets us namespace the data-testid per instance (modal vs inline).
 */
export const LeadForm = ({
  onSubmit,
  className = "",
  compact = false,
  embedded = false,
  idPrefix = "lead-form",
}) => {
  const tid = (name) => `${idPrefix}-${name}`;
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle"); // idle | loading | success | error
  const [confirmationCode, setConfirmationCode] = useState("");

  const update = (key) => (e) => {
    const val = typeof e === "string" ? e : e?.target?.value ?? "";
    setValues((v) => ({ ...v, [key]: val }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const parsed = schema.safeParse(values);
    if (parsed.success) {
      setErrors({});
      return true;
    }
    const fieldErrors = {};
    for (const issue of parsed.error.issues) {
      const k = issue.path[0];
      if (!fieldErrors[k]) fieldErrors[k] = issue.message;
    }
    setErrors(fieldErrors);
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors and try again.");
      return;
    }
    setState("loading");
    try {
      if (onSubmit) {
        await onSubmit(values);
      } else {
        // MOCK delay 900-1200ms
        await new Promise((r) => setTimeout(r, 1050));
      }
      // Generate confirmation code (mock)
      const code = `B2B-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationCode(code);
      setState("success");
      toast.success("Request received — we'll be in touch within 24 hours.");
    } catch (err) {
      setState("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleReset = () => {
    setValues(initial);
    setErrors({});
    setState("idle");
    setConfirmationCode("");
  };

  const wrapperClass = cn(
    embedded
      ? "rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-7 backdrop-blur-xl"
      : "",
    className,
  );

  return (
    <div className={wrapperClass}>
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <m.div
            key="success"
            data-testid={tid("success-state")}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-white/[0.03] border border-white/10"
          >
            <div
              aria-hidden
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(149,191,71,0.25), transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#95BF47]/15 border border-[#95BF47]/35 mb-4">
                <CheckCircle2 className="h-6 w-6 text-[#95BF47]" />
              </div>
              <h3 className="font-display text-2xl font-[650] tracking-[-0.02em] text-white">
                Request received.
              </h3>
              <p className="mt-2 text-white/65 leading-relaxed">
                Thanks {values.name?.split(" ")[0] || "there"} &mdash; we&apos;ve logged
                your inquiry in mission control. A Shopify strategist will
                reach out within 24 hours.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-3 py-1">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#95BF47]"
                  style={{ boxShadow: "0 0 12px rgba(149,191,71,0.6)" }}
                />
                <span className="font-mono text-[11px] tracking-[0.20em] uppercase text-white/75">
                  Reference&nbsp;·&nbsp;{confirmationCode}
                </span>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-white/[0.04] text-white/80 border border-white/12 hover:border-white/22 hover:text-white transition-colors duration-150"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          </m.div>
        ) : (
          <m.form
            key="form"
            data-testid={idPrefix}
            data-nosnippet
            initial={false}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <MonoLabel dot>BRIEF · TRANSMIT TO BASE2BRAND</MonoLabel>

            <div className={cn("grid grid-cols-1 gap-4", !compact && "sm:grid-cols-2")}>
              <Field
                id={`${idPrefix}-name`}
                label="Name"
                value={values.name}
                onChange={update("name")}
                error={errors.name}
                placeholder="Jane Cooper"
                testId={tid("name-input")}
              />
              <Field
                id={`${idPrefix}-company`}
                label="Company"
                value={values.company}
                onChange={update("company")}
                error={errors.company}
                placeholder="Acme Commerce"
                testId={tid("company-input")}
              />
              <Field
                id={`${idPrefix}-email`}
                label="Work email"
                type="email"
                value={values.email}
                onChange={update("email")}
                error={errors.email}
                placeholder="jane@acme.com"
                testId={tid("email-input")}
              />
              <Field
                id={`${idPrefix}-phone`}
                label="Phone"
                value={values.phone}
                onChange={update("phone")}
                error={errors.phone}
                placeholder="+1 555 010 2034"
                testId={tid("phone-input")}
              />
              <SelectField
                id={`${idPrefix}-projectType`}
                label="Project type"
                value={values.projectType}
                onChange={update("projectType")}
                error={errors.projectType}
                options={PROJECT_TYPES}
                testId={tid("project-type-select")}
              />
              <SelectField
                id={`${idPrefix}-budget`}
                label="Budget"
                value={values.budget}
                onChange={update("budget")}
                error={errors.budget}
                options={BUDGETS}
                testId={tid("budget-select")}
              />
            </div>

            <div>
              <Label htmlFor={`${idPrefix}-message`} className={labelBase}>
                Message
              </Label>
              <Textarea
                id={`${idPrefix}-message`}
                data-testid={tid("message-textarea")}
                value={values.message}
                onChange={update("message")}
                placeholder="Tell us about your Shopify project, goals, timelines…"
                className={cn(inputBase, "min-h-[120px] py-3")}
              />
              {errors.message && (
                <p className="mt-1 text-[12px] text-red-400/90">{errors.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-white/40">
                We respond within 24 hours.
              </p>
              <button
                type="submit"
                disabled={state === "loading"}
                data-testid={tid("submit-button")}
                className={cn(
                  "inline-flex items-center gap-2 h-11 px-5 rounded-xl text-sm font-medium",
                  "bg-[#95BF47] text-[#071006] hover:bg-[#B7E36A] active:bg-[#7FA83C]",
                  "transition-colors duration-200 b2b-shadow-cta",
                  "disabled:opacity-70 disabled:cursor-not-allowed",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95BF47]/55",
                )}
              >
                {state === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Transmitting…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Project Brief
                  </>
                )}
              </button>
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
};

const Field = ({ id, label, value, onChange, error, placeholder, type = "text", testId }) => (
  <div>
    <Label htmlFor={id} className={labelBase}>
      {label}
    </Label>
    <Input
      id={id}
      data-testid={testId}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={cn(inputBase, "mt-1.5")}
      autoComplete="off"
    />
    {error && <p className="mt-1 text-[12px] text-red-400/90">{error}</p>}
  </div>
);

const SelectField = ({ id, label, value, onChange, error, options, testId }) => (
  <div>
    <Label htmlFor={id} className={labelBase}>
      {label}
    </Label>
    <Select value={value} onValueChange={(v) => onChange(v)}>
      <SelectTrigger
        id={id}
        data-testid={testId}
        className={cn(
          inputBase,
          "mt-1.5 w-full justify-between",
          !value && "text-white/55",
        )}
      >
        <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent className="bg-[#0B0C0D] border border-white/10 text-white">
        {options.map((opt) => (
          <SelectItem key={opt} value={opt}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    {error && <p className="mt-1 text-[12px] text-red-400/90">{error}</p>}
  </div>
);

export default LeadForm;
