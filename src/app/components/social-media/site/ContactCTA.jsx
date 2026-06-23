import React, { useEffect, useState } from "react";
import { Mail, ArrowUpRight, Phone, Send } from "lucide-react";
import { BRAND } from "../../mock";

export default function ContactCTA() {
  const [rot, setRot] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let raf;
    const tick = () => {
      setRot((r) => (r + 0.25) % 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const text = "GOT A PROJECT? ✦ GET IN TOUCH ✦ ";
  const chars = (text + text).split("");

  const onSubmit = (e) => {
    e.preventDefault();
    // mock submit - store in localStorage so user sees feedback
    try {
      const existing = JSON.parse(
        localStorage.getItem("b2b_leads") || "[]"
      );
      existing.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("b2b_leads", JSON.stringify(existing));
    } catch (_) {
      // ignore
    }
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      style={{ background: "#0A0A0C" }}
    >
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[160px] opacity-25"
        style={{ background: "#F37335" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{ background: "#C6FF3D" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-[11px] tracking-[0.28em] text-zinc-400"
              >
                ● GOT A PROJECT?
              </span>
            </div>
            <h2
              className="font-black text-white leading-[0.92] tracking-tight"
              style={{                fontSize: "clamp(56px, 8vw, 120px)",
                letterSpacing: "-0.03em",
              }}
            >
              Let's Discuss
              <br />
              With Base<span style={{ color: "#F37335" }}>2</span>brand
            </h2>
            <p className="text-zinc-400 mt-6 text-[16px] max-w-md leading-relaxed">
              Tell us about your goals. We'll come back with a tailored plan,
              timeline and quote within 24 hours.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-4 text-white hover:text-orange-400 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center group-hover:border-orange-400">
                  <Mail size={16} />
                </div>
                <span
                  className="text-[14px]"
                >
                  {BRAND.email}
                </span>
              </a>
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-4 text-white hover:text-orange-400 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center group-hover:border-orange-400">
                  <Phone size={16} />
                </div>
                <span
                  className="text-[14px]"
                >
                  {BRAND.phone}
                </span>
              </a>
            </div>

            {/* rotating disc */}
            <div className="hidden lg:flex mt-12">
              <div className="relative w-[260px] h-[260px]">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  style={{ transform: `rotate(${rot}deg)` }}
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    />
                  </defs>
                  <text
                    fill="#F37335"
                    style={{                      fontSize: "11px",
                      letterSpacing: "0.32em",
                      fontWeight: 700,
                    }}
                  >
                    <textPath href="#circlePath">{chars.join("")}</textPath>
                  </text>
                </svg>
                <div
                  className="absolute inset-0 m-auto w-24 h-24 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, #FF8A2B, #D44E00)",
                    boxShadow:
                      "0 20px 60px rgba(243,115,53,0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                >
                  <Mail size={36} className="text-white" strokeWidth={2.2} />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 p-8 backdrop-blur"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
            }}
          >
            <h3
              className="font-black text-white mb-6"
              style={{                fontSize: "28px",
                letterSpacing: "-0.02em",
              }}
            >
              Get In Touch
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="text-[10px] tracking-[0.22em] text-zinc-500 mb-2 block"
                >
                  NAME
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-orange-400 focus:bg-white/[0.07] transition-colors"
                />
              </div>
              <div>
                <label
                  className="text-[10px] tracking-[0.22em] text-zinc-500 mb-2 block"
                >
                  EMAIL
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="you@brand.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-orange-400 focus:bg-white/[0.07] transition-colors"
                />
              </div>
              <div>
                <label
                  className="text-[10px] tracking-[0.22em] text-zinc-500 mb-2 block"
                >
                  PHONE
                </label>
                <input
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="+91 …"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-orange-400 focus:bg-white/[0.07] transition-colors"
                />
              </div>
              <div>
                <label
                  className="text-[10px] tracking-[0.22em] text-zinc-500 mb-2 block"
                >
                  SERVICE
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-400 focus:bg-white/[0.07] transition-colors"
                >
                  <option value="" className="bg-zinc-900">
                    Select service
                  </option>
                  <option value="seo" className="bg-zinc-900">
                    SEO
                  </option>
                  <option value="ads" className="bg-zinc-900">
                    Google & Meta Ads
                  </option>
                  <option value="smo" className="bg-zinc-900">
                    Social Media (SMO)
                  </option>
                  <option value="youtube" className="bg-zinc-900">
                    YouTube Marketing
                  </option>
                  <option value="orm" className="bg-zinc-900">
                    ORM
                  </option>
                  <option value="content" className="bg-zinc-900">
                    Content Writing
                  </option>
                  <option value="other" className="bg-zinc-900">
                    Other
                  </option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  className="text-[10px] tracking-[0.22em] text-zinc-500 mb-2 block"
                >
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell us about your project, goals and timeline…"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-orange-400 focus:bg-white/[0.07] transition-colors resize-none"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-zinc-500 text-[12px]">
                We reply within 24 hours.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-[1.03]"
                style={{
                  background: "#F37335",
                  color: "#fff",
                  boxShadow: "0 10px 30px rgba(243,115,53,0.4)",                  letterSpacing: "0.08em",
                }}
              >
                {submitted ? "SENT ✓" : "SEND MESSAGE"}
                {!submitted && <Send size={14} />}
                {submitted && <ArrowUpRight size={14} />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
