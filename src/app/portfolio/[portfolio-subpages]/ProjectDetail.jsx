"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  Quote,
  User,
  Users,
} from "lucide-react";

const API_BASE =
  process.env.NEXT_PUBLIC_LOCAL_API_URL || "http://localhost:5000/api";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
  },
};

const stripHtml = (html = "") => {
  return String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
};

const normalizePortfolio = (item) => {
  return {
    ...item,
    id: item?._id || item?.id,
    title: item?.title || "",
    category: item?.category || "",
    slug: item?.slug || "",
    description: stripHtml(item?.description),
    image: item?.image || "",
    gallery: Array.isArray(item?.gallery) ? item.gallery : [],
    client: item?.client || "",
    year: item?.year || "",
    duration: item?.duration || "",
    teamSize: item?.teamSize || "",
    role: item?.role || "",
    liveUrl: item?.liveUrl || "",
    tags: Array.isArray(item?.tags) ? item.tags : [],
    techStack: Array.isArray(item?.techStack) ? item.techStack : [],
    challenge: stripHtml(item?.challenge),
    solution: stripHtml(item?.solution),
    approach: Array.isArray(item?.approach) ? item.approach : [],
    features: Array.isArray(item?.features) ? item.features : [],
    testimonial:
      item?.testimonial && typeof item.testimonial === "object"
        ? item.testimonial
        : null,
    results: Array.isArray(item?.results) ? item.results : [],
  };
};

export default function ProjectDetail({ slug }) {
  const [project, setProject] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    const fetchProject = async () => {
      try {
        setLoading(true);
        setError("");
        setNotFound(false);

        const projectResponse = await fetch(
          `${API_BASE}/portfolios/slug/${encodeURIComponent(slug)}`,
          {
            cache: "no-store",
          },
        );

        if (projectResponse.status === 404) {
          setNotFound(true);
          setProject(null);
          return;
        }

        if (!projectResponse.ok) {
          throw new Error("Failed to fetch portfolio details");
        }

        const projectData = await projectResponse.json();

        const projectItem =
          projectData.portfolio || projectData.data || projectData;

        if (!projectItem || !projectItem.slug) {
          setNotFound(true);
          setProject(null);
          return;
        }

        const formattedProject = normalizePortfolio(projectItem);

        setProject(formattedProject);

        try {
          const relatedResponse = await fetch(
            `${API_BASE}/portfolios?page=1&limit=12`,
            {
              cache: "no-store",
            },
          );

          if (relatedResponse.ok) {
            const relatedData = await relatedResponse.json();

            const portfolioList =
              relatedData.portfolios || relatedData.data || [];

            const relatedProjects = portfolioList
              .map(normalizePortfolio)
              .filter(
                (item) =>
                  item.slug !== formattedProject.slug &&
                  item.category === formattedProject.category,
              )
              .slice(0, 3);

            if (relatedProjects.length < 3) {
              const remainingProjects = portfolioList
                .map(normalizePortfolio)
                .filter(
                  (item) =>
                    item.slug !== formattedProject.slug &&
                    !relatedProjects.some(
                      (relatedItem) => relatedItem.slug === item.slug,
                    ),
                )
                .slice(0, 3 - relatedProjects.length);

              setRelated([...relatedProjects, ...remainingProjects]);
            } else {
              setRelated(relatedProjects);
            }
          }
        } catch (relatedError) {
          console.error("Related portfolio fetch error:", relatedError);
          setRelated([]);
        }
      } catch (fetchError) {
        console.error("Portfolio detail fetch error:", fetchError);

        setProject(null);
        setError("Unable to load this project right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <section className="relative z-[1] text-[#f0f4ff] pb-24">
          <div className="mx-auto max-w-7xl px-4 md:px-10">
            <div className="pt-10 mb-8">
              <div className="h-4 w-40 animate-pulse rounded bg-white/10" />
            </div>

            <div className="h-7 w-28 animate-pulse rounded-full bg-white/10" />

            <div className="mt-5 h-14 max-w-3xl animate-pulse rounded-xl bg-white/10" />

            <div className="mt-4 h-6 max-w-2xl animate-pulse rounded bg-white/10" />

            <div className="mt-10 aspect-[16/9] w-full animate-pulse rounded-2xl bg-[#11141c]" />

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <div className="h-64 animate-pulse rounded-2xl bg-[#11141c]" />
                <div className="h-64 animate-pulse rounded-2xl bg-[#11141c]" />
              </div>

              <div className="space-y-6">
                <div className="h-40 animate-pulse rounded-2xl bg-[#11141c]" />
                <div className="h-52 animate-pulse rounded-2xl bg-[#11141c]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (notFound || !project) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <section className="relative z-[1] flex min-h-[70vh] items-center justify-center text-[#f0f4ff]">
          <div className="px-6 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-(--b2b-primary)">
              {error ? "Unable to Load" : "404 · Not Found"}
            </p>

            <h1 className="mb-6 text-3xl font-bold md:text-5xl">
              {error ? error : "Project not found"}
            </h1>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-[#9aa5c0] transition hover:border-(--b2b-primary)/30 hover:text-(--b2b-primary)"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden md:min-h-screen">
      <section className="relative z-[1] pb-24 text-[#f0f4ff]">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.4,
            }}
            className="pt-10 mb-8"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#5e6a85] transition hover:text-(--b2b-primary)"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Portfolio
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.5,
            }}
          >
            {project.category && (
              <span className="inline-flex items-center rounded-full border border-(--b2b-primary)/20 bg-(--b2b-primary)/10 px-3 py-1 text-xs font-medium text-(--b2b-primary)">
                {project.category}
              </span>
            )}

            <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            {project.description && (
              <p className="mt-5 text-base leading-relaxed text-[#9aa5c0] md:text-lg">
                {project.description}
              </p>
            )}

            {project.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#9aa5c0]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/5 pt-6">
              {project.client && (
                <div className="flex items-center gap-2 text-sm text-[#9aa5c0]">
                  <User className="h-4 w-4 text-(--b2b-primary)" />
                  {project.client}
                </div>
              )}

              {project.year && (
                <div className="flex items-center gap-2 text-sm text-[#9aa5c0]">
                  <Calendar className="h-4 w-4 text-(--b2b-primary)" />
                  {project.year}
                </div>
              )}

              {project.duration && (
                <div className="flex items-center gap-2 text-sm text-[#9aa5c0]">
                  <Clock className="h-4 w-4 text-(--b2b-primary)" />
                  {project.duration}
                </div>
              )}

              {project.teamSize && (
                <div className="flex items-center gap-2 text-sm text-[#9aa5c0]">
                  <Users className="h-4 w-4 text-(--b2b-primary)" />
                  {project.teamSize}
                </div>
              )}
            </div>
          </motion.div>

          {(project.image) && (
            <motion.div
              {...fadeUp}
              transition={{
                duration: 0.5,
                delay: 0.05,
              }}
              className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#11141c] md:rounded-[28px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </motion.div>
          )}

          {project.results.length > 0 && (
            <motion.div
              {...fadeUp}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {project.results.map((result, index) => (
                <div
                  key={`${result.label}-${index}`}
                  className="rounded-2xl border border-white/10 bg-[#11141c] p-6"
                >
                  <p className="text-2xl font-bold text-(--b2b-primary) md:text-3xl">
                    {result.value}
                  </p>

                  <p className="mt-2 text-sm text-[#9aa5c0]">{result.label}</p>
                </div>
              ))}
            </motion.div>
          )}

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              {project.challenge && (
                <motion.div
                  {...fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: 0.12,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                >
                  <h2 className="text-lg font-bold md:text-2xl">
                    The Challenge
                  </h2>

                  <p className="mt-4 leading-7 text-[#9aa5c0]">
                    {project.challenge}
                  </p>
                </motion.div>
              )}

              {project.solution && (
                <motion.div
                  {...fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: 0.14,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                >
                  <h2 className="text-lg font-bold md:text-2xl">
                    The Solution
                  </h2>

                  <p className="mt-4 leading-7 text-[#9aa5c0]">
                    {project.solution}
                  </p>
                </motion.div>
              )}

              {project.approach.length > 0 && (
                <motion.div
                  {...fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: 0.16,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                >
                  <h2 className="text-lg font-bold md:text-2xl">
                    Our Approach
                  </h2>

                  <div className="mt-6 space-y-6">
                    {project.approach.map((step, index) => (
                      <div
                        key={`${step.phase}-${index}`}
                        className="flex gap-4 md:gap-5"
                      >
                        <div className="flex flex-col items-center">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--b2b-primary)/30 bg-(--b2b-primary)/10 text-xs font-bold text-(--b2b-primary)">
                            {step.phase || index + 1}
                          </span>

                          {index < project.approach.length - 1 && (
                            <span className="mt-2 w-px flex-1 bg-white/10" />
                          )}
                        </div>

                        <div className="pb-2">
                          <h3 className="text-sm font-semibold text-[#f0f4ff] md:text-base">
                            {step.title}
                          </h3>

                          <p className="mt-1.5 text-sm leading-6 text-[#9aa5c0]">
                            {stripHtml(step.description)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {project.features.length > 0 && (
                <motion.div
                  {...fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: 0.18,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                >
                  <h2 className="text-lg font-bold md:text-2xl">
                    Key Deliverables
                  </h2>

                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={`${feature}-${index}`}
                        className="flex items-start gap-2.5 text-sm text-[#9aa5c0]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-(--b2b-primary)" />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {project.testimonial && (
                <motion.div
                  {...fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  className="relative rounded-2xl border border-(--b2b-primary)/20 bg-(--b2b-primary)/5 p-6 md:p-8"
                >
                  <Quote className="h-6 w-6 text-(--b2b-primary)/50" />

                  {project.testimonial.quote && (
                    <p className="mt-4 text-base leading-relaxed text-[#f0f4ff] md:text-lg">
                      “{project.testimonial.quote}”
                    </p>
                  )}

                  {(project.testimonial.author || project.testimonial.role) && (
                    <p className="mt-4 text-sm text-[#9aa5c0]">
                      <span className="font-semibold text-[#f0f4ff]">
                        {project.testimonial.author}
                      </span>

                      {project.testimonial.author &&
                        project.testimonial.role &&
                        " · "}

                      {project.testimonial.role}
                    </p>
                  )}
                </motion.div>
              )}
            </div>

            <div className="space-y-6">
              {project.role && (
                <motion.div
                  {...fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: 0.12,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[#5e6a85]">
                    Our Role
                  </p>

                  <p className="mt-2 text-sm text-[#f0f4ff]">{project.role}</p>
                </motion.div>
              )}

              {project.techStack.length > 0 && (
                <motion.div
                  {...fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: 0.14,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[#5e6a85]">
                    Tech Stack
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={`${tech}-${index}`}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#9aa5c0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {project.liveUrl && (
                <motion.div
                  {...fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[#5e6a85]">
                    Live Project
                  </p>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#f0f4ff] transition hover:border-(--b2b-primary)/30 hover:text-(--b2b-primary)"
                  >
                    View Live Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              )}

              <motion.div
                {...fadeUp}
                transition={{
                  duration: 0.5,
                  delay: 0.16,
                }}
                className="rounded-2xl border border-(--b2b-primary)/20 bg-(--b2b-primary)/5 p-6 md:p-8"
              >
                <h2 className="text-lg font-bold">Have a similar challenge?</h2>

                <p className="mt-3 text-sm leading-6 text-[#9aa5c0]">
                  Let&apos;s talk about how we can bring the same engineering
                  rigor to your project.
                </p>

                <Link
                  href="/contact-us"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-(--b2b-primary) px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,106,0,0.35)]"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="nnnnnkl">
            {project.gallery.length > 1 && (
              <motion.div
                {...fadeUp}
                transition={{
                  duration: 0.5,
                  delay: 0.22,
                }}
                className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 mt-10"
              >
                {project.gallery.map((source, index) => (
                  <div
                    key={`${source}-${index}`}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-[#11141c]"
                  >
                    <img
                      src={source}
                      alt={`${project.title} ${index + 2}`}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {related.length > 0 && (
            <motion.div
              {...fadeUp}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="mt-16"
            >
              <h2 className="mb-6 text-xl font-bold md:text-2xl">
                More Projects
              </h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/portfolio/${item.slug}`}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#11141c] transition hover:border-(--b2b-primary)/30"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#1c2130]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-medium text-(--b2b-primary)">
                        {item.category}
                      </p>

                      <h3 className="mt-2 text-base font-bold text-[#f0f4ff] transition-colors group-hover:text-(--b2b-primary)">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
