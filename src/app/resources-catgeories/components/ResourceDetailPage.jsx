import React from "react";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  Eye,
  User,
  Bookmark,
  Share2,
} from "lucide-react";
import { cleanDescription, formatResourceDate } from "../lib/resourcesApi";

function getExcerpt(description, subTitle) {
  if (subTitle) return subTitle;

  const text = cleanDescription(description);
  if (!text) return "";
  return text.length > 230 ? `${text.slice(0, 230)}...` : text;
}

export default function ResourceDetailPage({
  resource,
  resourceType = "Article",
  viewsField,
}) {
  if (!resource) {
    notFound();
  }

  const excerpt = getExcerpt(resource?.description, resource?.sub_title);
  const displayTags =
    Array.isArray(resource?.tags) && resource.tags.length > 0
      ? resource.tags.slice(0, 4)
      : [resource?.category || resourceType, "Insights", "Research"].filter(Boolean);

  const views = viewsField ? resource?.[viewsField] : resource?.views;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02050b] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-120px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#173dff]/15 blur-[150px]" />
        <div className="absolute left-1/2 top-[80px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#7c3aed]/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[140px] h-[420px] w-[420px] rounded-full bg-[#4fd1ff]/10 blur-[140px]" />
        <div className="absolute left-[8%] top-[260px] h-[340px] w-[340px] rounded-full bg-[#8b5cf6]/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(95,90,255,0.14),transparent_26%),linear-gradient(180deg,rgba(2,5,11,0)_0%,#02050b_55%,#02050b_100%)]" />
        <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <section className="relative mx-auto w-full max-w-[980px] px-4 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[940px]">
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {displayTags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-white/75 backdrop-blur-xl"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="max-w-[820px] bg-[linear-gradient(180deg,#dff7ff_0%,#68d7ff_44%,#7f8cff_78%,#b28dff_100%)] bg-clip-text text-[48px] font-medium leading-[1.2] tracking-[-0.06em] text-transparent text-[60px]">
            {resource?.title}
          </h1>

          {excerpt && (
            <p className="mt-8 max-w-[920px] text-lg leading-8 text-white/75 sm:text-xl">
              {excerpt}
            </p>
          )}

          <div className="mt-10 border-t border-white/10 pt-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-5 text-white/55">
                <div className="inline-flex items-center gap-2.5 text-sm">
                  <User className="h-4 w-4" />
                  <span>{resource?.author?.name || "Base2Brand Editorial"}</span>
                </div>

                <div className="inline-flex items-center gap-2.5 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{formatResourceDate(resource?.createdAt)}</span>
                </div>

                <div className="inline-flex items-center gap-2.5 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>18 min read</span>
                </div>

                {views !== undefined && (
                  <div className="inline-flex items-center gap-2.5 text-sm">
                    <Eye className="h-4 w-4" />
                    <span>{views || 0}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition hover:bg-white/[0.08] hover:text-white"
                >
                  <Bookmark className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition hover:bg-white/[0.08] hover:text-white"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {resource?.image_poster && (
          <div className="relative mx-auto mt-8 max-w-[1120px]">
            <div className="absolute -inset-[1px] rounded-[34px] bg-[linear-gradient(135deg,rgba(97,218,251,0.24),rgba(124,58,237,0.22),rgba(255,255,255,0.06))]" />

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#050912]/90 p-2 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <img
                src={resource.image_poster}
                alt={resource?.title || `${resourceType} image`}
                className="h-auto max-h-[700px] w-full rounded-[26px] object-cover"
              />

              <div className="pointer-events-none absolute inset-2 rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_24%,rgba(2,5,11,0.16)_100%)]" />
            </div>
          </div>
        )}
      </section>

      <section className="relative mx-auto w-full max-w-[980px] px-4 pb-24 pt-14 sm:px-6 lg:px-8">
        <article className="bg-transparent">
          <div
            className="blog_description !text-white"
            dangerouslySetInnerHTML={{
              __html: resource?.description || "",
            }}
          />
        </article>
      </section>
    </main>
  );
}

export { cleanDescription, getExcerpt };
