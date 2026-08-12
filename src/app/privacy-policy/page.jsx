"use client";

import React from "react";

/**
 * Privacy Policy — Base2Brand
 * Theme: dark (near-black) + orange accent, matching base2brand.com
 *
 * Accent color ek jagah define hai. Change karna ho to `ACCENT` waale
 * hex (#FF6A00) find-replace kar lena, ya CSS var se bind kar dena.
 */

const ACCENT = "#FF6A00";
const LAST_UPDATED = "12 August 2026";

const sections = [
  {
    num: "01",
    id: "scope",
    title: "Scope",
    body: [
      "This Policy applies to information collected through our website, enquiry and booking forms, marketing subscriptions, email, telephone and WhatsApp communications, recruitment submissions, AI-powered features, cookies, analytics, and other digital interactions.",
    ],
  },
  {
    num: "02",
    id: "information-we-collect",
    title: "Information We Collect",
    body: [
      "Depending on your interaction with us, we may collect your name, business name, job title, professional information, email address, telephone or WhatsApp number, country or location, project requirements, services of interest, meeting details, messages, enquiries, attachments, recruitment information, and other information you voluntarily provide.",
      "We may automatically collect IP address, browser and device information, operating system, approximate location, referring website, pages viewed, time spent, navigation data, visit dates, website performance information, and cookie or advertising identifiers.",
    ],
  },
  {
    num: "03",
    id: "how-we-use",
    title: "How We Use Information",
    body: [
      "We may use personal information to operate our website; respond to enquiries; understand project requirements; schedule consultations; provide service information; prepare proposals; communicate about projects; provide support; deliver contracted services; improve website functionality; analyse traffic; measure marketing effectiveness; send permitted communications; develop services and internal processes; operate AI or automation features; prevent fraud and misuse; protect our systems and legal rights; maintain records; and comply with applicable laws.",
    ],
  },
  {
    num: "04",
    id: "legal-bases",
    title: "Legal Bases",
    body: [
      "Where laws apply, we may process information based on consent, contractual necessity, legitimate interests, or legal obligations. Legitimate interests may include responding to enquiries, improving services, security, analytics, business development, preventing fraud, and managing relationships.",
    ],
  },
  {
    num: "05",
    id: "cookies",
    title: "Cookies and Tracking",
    body: [
      "Our website may use cookies and similar technologies for functionality, visitor analysis, performance, and marketing measurement. Third-party technologies may include Google, Meta, LinkedIn, or similar providers. Where required by law, we seek consent before using non-essential cookies.",
    ],
  },
  {
    num: "06",
    id: "ai-automation",
    title: "AI and Automation",
    body: [
      "Information submitted to an AI-powered feature may be processed to respond to requests, qualify enquiries, provide support, automate workflows, generate recommendations, or improve efficiency. We aim to apply privacy and security safeguards.",
    ],
  },
  {
    num: "07",
    id: "marketing",
    title: "Marketing Communications",
    body: [
      "Where permitted by law, we may send company updates, newsletters, service information, industry insights, and promotional communications. You may unsubscribe using the available unsubscribe option or by contacting us.",
    ],
  },
  {
    num: "08",
    id: "sharing",
    title: "Sharing Information",
    body: [
      "We do not disclose personal information unnecessarily. We may share information with trusted providers where reasonably necessary, including hosting and cloud providers, communication platforms, CRM systems, analytics and advertising providers, scheduling services, IT and cybersecurity providers, payment or accounting providers, professional advisers, contractors, technology partners, and government authorities where legally required.",
    ],
  },
  {
    num: "09",
    id: "transfers-retention",
    title: "Sale, Transfers and Retention",
    body: [
      "Base2Brand does not sell personal information for monetary consideration as part of its ordinary business operations. Certain disclosures to advertising or analytics providers may be considered \u201Csharing\u201D under some privacy laws.",
      "Information may be processed or stored outside the country where it was collected. Where required, we use safeguards including contractual obligations, standard contractual clauses, security measures, or other recognised mechanisms.",
      "We retain personal information only as long as reasonably necessary for enquiries, business relationships, service delivery, financial records, disputes, legal protection, and regulatory requirements. When no longer required, information may be securely deleted, anonymised, or otherwise disposed of.",
    ],
  },
  {
    num: "10",
    id: "data-security",
    title: "Data Security",
    body: [
      "We use reasonable administrative, organisational, and technical safeguards designed to protect personal information against unauthorised access, accidental loss, misuse, alteration, disclosure, and destruction. Measures may include access controls, secure infrastructure, monitoring, and authentication.",
    ],
  },
  {
    num: "11",
    id: "your-rights",
    title: "Your Privacy Rights",
    body: [
      "Depending on your location and law, you may have rights to access personal information, request correction or deletion, restrict or object to certain processing, withdraw consent, request portability, opt out of direct marketing, opt out of sharing or targeted advertising, request information about personal information collected or disclosed, lodge a grievance, and exercise privacy rights without unlawful discrimination.",
    ],
  },
  {
    num: "12",
    id: "regional-rights",
    title: "Regional Rights",
    body: [
      "Where India\u2019s Digital Personal Data Protection Act, 2023, and rules apply, individuals may have rights concerning information about processing, access, correction, updating, erasure, consent withdrawal, grievance redressal, and other rights provided by law.",
    ],
  },
  {
    num: "13",
    id: "third-party-children",
    title: "Third-Party Websites and Children",
    body: [
      "Our website may contain links to third-party websites, social networks, platforms, or services.",
      "Our website and services are primarily intended for businesses and professional users and are not directed at children. We do not knowingly collect children's information in violation of law.",
    ],
  },
  {
    num: "14",
    id: "recruitment-client-data",
    title: "Recruitment and Client Data",
    body: [
      "For employment applications, we may collect names, contact details, CVs, employment history, education, professional skills, portfolio information, and other voluntarily submitted information.",
      "When providing websites, ecommerce, CRM, AI automation, enterprise, advertising, analytics, or similar services, Base2Brand may process information on behalf of clients. The client may act as controller or primary decision-maker, while Base2Brand may act as processor or service provider under contractual instructions.",
    ],
  },
  {
    num: "15",
    id: "changes",
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy periodically to reflect changes in services, website functionality, technologies, privacy practices, or legal requirements.",
    ],
  },
];

function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: ACCENT }}
      />
      {children}
    </p>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-neutral-100 antialiased">
      {/* ambient orange glow — top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(255,106,0,0.14) 0%, rgba(255,106,0,0.04) 40%, transparent 70%)",
        }}
      />

      <div className="relative">
        {/* Hero */}
        <header className="px-4 md:px-12 md:max-w-[1240px] mx-auto pt-14 pb-8 md:pt-16 2xl:pt-30 md:pb-10">
          <Eyebrow>Legal · Privacy &amp; Data</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-neutral-100">
            At Base2Brand, operated by Base2brand Infotech Private Limited
            (&ldquo;Base2Brand&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;), we respect your privacy and are committed to
            protecting personal information. This Privacy Policy explains how we
            collect, use, store, disclose, and protect information when you
            interact with us.
          </p>
          <div
            className="mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-neutral-300"
            style={{ borderColor: "rgba(255,106,0,0.35)" }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
            Last Updated: {LAST_UPDATED}
          </div>
        </header>

        {/* Body */}
        <div className="px-4 md:px-12 md:max-w-[1180px] mx-auto pb-16">
          <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
            {/* Sticky TOC (desktop) */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  On this page
                </p>
                <ul className="space-y-2 text-sm">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex items-baseline gap-2.5 text-neutral-500 transition-colors hover:text-white"
                      >
                        <span className="text-[11px] font-mono text-neutral-600 group-hover:text-[color:var(--accent)]">
                          {s.num}
                        </span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#contact"
                      className="group flex items-baseline gap-2.5 text-neutral-500 transition-colors hover:text-white"
                    >
                      <span className="text-[11px] font-mono text-neutral-600">
                        16
                      </span>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <div className="max-w-3xl" style={{ ["--accent"]: ACCENT }}>
              {sections.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24 border-t border-white/[0.06] py-5 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-sm font-mono font-medium"
                      style={{ color: ACCENT }}
                    >
                      {s.num}
                    </span>
                    <h2 className="text-xl md:text-2xl font-semibold text-white">
                      {s.title}
                    </h2>
                  </div>
                  <div className="mt-3 space-y-3 text-[15px] md:text-base leading-7 text-neutral-200">
                    {s.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}

              {/* Contact card */}
              <section id="contact" className="scroll-mt-24 pt-5">
                <div className="flex items-center gap-3">
                  <span
                    className="text-sm font-mono font-medium"
                    style={{ color: ACCENT }}
                  >
                    16
                  </span>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    Contact Us
                  </h2>
                </div>
                <p className="mt-3 text-[15px] md:text-base leading-7 text-neutral-200">
                  For questions about this Privacy Policy, our handling of
                  personal information, or privacy rights, contact us using the
                  details below.
                </p>

                <div
                  className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8"
                  style={{
                    boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.03)",
                  }}
                >
                  <p className="text-lg font-semibold text-white">Base2Brand</p>
                  <dl className="mt-5 space-y-3.5 text-[15px]">
                    {[
                      ["Website", "www.base2brand.com", "https://www.base2brand.com"],
                      ["Email", "tech@base2brand.com", "mailto:tech@base2brand.com"],
                      ["Phone", "+91 788 910 1844", "tel:+917889101844"],
                    ].map(([label, text, href]) => (
                      <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                        <dt className="w-24 shrink-0 font-medium text-neutral-500">
                          {label}
                        </dt>
                        <dd>
                          <a
                            href={href}
                            className="transition-opacity hover:opacity-80"
                            style={{ color: ACCENT }}
                          >
                            {text}
                          </a>
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-6 border-t border-white/[0.06] pt-5 text-sm leading-6 text-neutral-500">
                    For privacy-related requests, please provide enough
                    information for us to understand and respond, as required by
                    law. We may request additional information where necessary to
                    verify your identity or process the request.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}