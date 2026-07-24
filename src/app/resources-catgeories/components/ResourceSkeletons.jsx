"use client";

import React from "react";

function Bone({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-white/10 ${className}`}
      aria-hidden
    />
  );
}

export function BlogsSectionSkeleton() {
  return (
    <div className="pt-3 md:pt-10" data-testid="blogs-skeleton">
      <div className="glass rounded-lg md:rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0">
          <Bone className="md:col-span-3 min-h-60 md:min-h-100 rounded-none" />
          <div className="md:col-span-2 p-4 md:p-6 space-y-4">
            <div className="flex gap-3">
              <Bone className="h-3 w-16" />
              <Bone className="h-3 w-20" />
              <Bone className="h-3 w-12" />
            </div>
            <Bone className="h-8 w-full" />
            <Bone className="h-8 w-4/5" />
            <Bone className="h-4 w-full" />
            <Bone className="h-4 w-full" />
            <Bone className="h-4 w-3/4" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 pt-8 md:pt-10">
        {[0, 1].map((key) => (
          <div key={key} className="glass rounded-lg md:rounded-3xl p-4 md:p-6 space-y-4">
            <Bone className="h-44 w-full rounded-lg" />
            <div className="flex gap-3">
              <Bone className="h-3 w-14" />
              <Bone className="h-3 w-18" />
            </div>
            <Bone className="h-6 w-full" />
            <Bone className="h-4 w-full" />
            <Bone className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ArticleGridSkeleton({ count = 6 }) {
  return (
    <div className="masonry" data-testid="articles-skeleton">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="glass rounded-lg md:rounded-2xl overflow-hidden break-inside-avoid mb-7"
        >
          <Bone className="aspect-[4/3] w-full rounded-none" />
          <div className="p-4 md:p-6 space-y-3">
            <div className="flex gap-4">
              <Bone className="h-3 w-16" />
              <Bone className="h-3 w-20" />
            </div>
            <Bone className="h-6 w-full" />
            <Bone className="h-4 w-full" />
            <Bone className="h-4 w-4/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function InsightsGridSkeleton() {
  return (
    <div data-testid="insights-skeleton">
      <div className="flex items-end justify-between mb-8">
        <div className="space-y-3">
          <Bone className="h-3 w-28" />
          <Bone className="h-10 w-56 max-w-full" />
        </div>
        <Bone className="hidden md:block h-4 w-24" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[0, 1, 2].map((key) => (
          <div key={key} className="glass rounded-2xl overflow-hidden">
            <Bone className="aspect-[16/10] w-full rounded-none" />
            <div className="p-5 space-y-3">
              <Bone className="h-6 w-full" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-3/4" />
              <div className="flex justify-between pt-2">
                <Bone className="h-3 w-20" />
                <Bone className="h-3 w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IndustriesTableSkeleton({ rows = 6 }) {
  return (
    <div data-testid="industries-skeleton">
      <div className="max-w-3xl mb-14 space-y-4">
        <Bone className="h-3 w-32" />
        <Bone className="h-12 w-72 max-w-full" />
        <Bone className="h-4 w-full max-w-xl" />
        <Bone className="h-4 w-4/5 max-w-lg" />
      </div>

      <div className="overflow-hidden rounded-xl md:rounded-[32px] border border-white/10 bg-[#080C16]/80">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-[3.5fr_1fr_1fr_1fr_auto] items-center gap-2 md:gap-5 px-4 py-4 md:py-5 border-b border-white/5"
          >
            <div className="flex items-center gap-4">
              <Bone className="h-9 w-9 rounded-xl shrink-0" />
              <div className="space-y-2 flex-1">
                <Bone className="h-2 w-12" />
                <Bone className="h-4 w-32 max-w-full" />
              </div>
            </div>
            <Bone className="h-6 w-8 mx-auto" />
            <Bone className="h-6 w-14 mx-auto rounded-full" />
            <Bone className="h-8 w-12 mx-auto" />
            <Bone className="h-5 w-5 ml-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResourceDetailSkeleton() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#02050b] text-white"
      data-testid="resource-detail-skeleton"
    >
      <section className="relative mx-auto w-full max-w-[980px] px-4 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[940px] space-y-6">
          <div className="flex flex-wrap gap-2">
            {[0, 1, 2].map((i) => (
              <Bone key={i} className="h-9 w-24 rounded-full" />
            ))}
          </div>
          <Bone className="h-14 w-full max-w-2xl" />
          <Bone className="h-14 w-4/5 max-w-xl" />
          <Bone className="h-6 w-full max-w-3xl" />
          <Bone className="h-6 w-11/12 max-w-2xl" />
          <div className="border-t border-white/10 pt-7 flex flex-wrap gap-5">
            {[0, 1, 2, 3].map((i) => (
              <Bone key={i} className="h-4 w-28" />
            ))}
          </div>
        </div>
        <Bone className="mx-auto mt-8 h-64 md:h-96 w-full max-w-[1120px] rounded-[34px]" />
      </section>
      <section className="relative mx-auto w-full max-w-[980px] px-4 pb-24 pt-14 sm:px-6 lg:px-8 space-y-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <Bone key={i} className="h-4 w-full" />
        ))}
        <Bone className="h-4 w-5/6" />
      </section>
    </main>
  );
}

export function IndustryDetailSkeleton() {
  return (
    <section className="relative overflow-hidden pb-24" data-testid="industry-detail-skeleton">
      <div className="container relative z-10 mx-auto px-4 md:px-0 pt-10">
        <Bone className="h-4 w-48 mb-8" />
        <Bone className="h-48 md:h-56 w-full rounded-2xl md:rounded-[32px]" />
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[0, 1, 2, 3].map((i) => (
            <Bone key={i} className="h-24 md:h-28 rounded-xl md:rounded-2xl" />
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Bone className="h-40 rounded-2xl" />
            <Bone className="h-52 rounded-2xl" />
            <Bone className="h-64 rounded-2xl" />
          </div>
          <div className="space-y-6">
            <Bone className="h-56 rounded-2xl" />
            <Bone className="h-44 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
