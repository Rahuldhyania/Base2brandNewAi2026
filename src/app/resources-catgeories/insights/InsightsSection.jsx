"use client";

import React, { useEffect, useRef, useState } from "react";
import LatestMeteors from "@/components/resourcesCatgeories/nebula/LatestMeteors";
import { fetchInsights } from "../lib/resourcesApi";
import ResourcePagination from "../components/ResourcePagination";
import { InsightsGridSkeleton } from "../components/ResourceSkeletons";
import { useScrollToSectionOnPageChange } from "../hooks/useScrollToSectionOnPageChange";

const ITEMS_PER_PAGE = 3;

export default function InsightsSection() {
  const sectionRef = useRef(null);
  const [insights, setInsights] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useScrollToSectionOnPageChange(sectionRef, currentPage, loading);

  useEffect(() => {
    let cancelled = false;

    const loadInsights = async () => {
      try {
        setLoading(true);
        setError(false);
        const result = await fetchInsights({
          page: currentPage,
          limit: ITEMS_PER_PAGE,
        });

        if (!cancelled) {
          setInsights(result.items);
          setTotalPages(result.totalPages || 1);
        }
      } catch {
        if (!cancelled) {
          setInsights([]);
          setTotalPages(1);
          setError(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadInsights();

    return () => {
      cancelled = true;
    };
  }, [currentPage]);

  return (
    <section
      ref={sectionRef}
      id="geoinsights"
      className="relative z-10 mx-auto max-w-7xl px-4 md:px-10 py-12 scroll-mt-24 md:scroll-mt-28"
    >
      {loading ? (
        <InsightsGridSkeleton />
      ) : error ? (
        <div className="text-center text-white/50 py-10">
          Unable to load insights. Please try again later.
        </div>
      ) : (
        <LatestMeteors
          items={insights}
          hrefPrefix="/resources-catgeories/insights"
          viewAllHref="/resources-catgeories#geoinsights"
        />
      )}

      {!error && (
        <ResourcePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          loading={loading}
        />
      )}
    </section>
  );
}
