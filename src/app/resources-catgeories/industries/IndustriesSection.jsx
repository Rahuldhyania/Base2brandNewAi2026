"use client";

import React, { useEffect, useRef, useState } from "react";
import IndustryReports from "@/components/portfolio-animation/ui/IndustryReports";
import { fetchIndustries } from "../lib/resourcesApi";
import ResourcePagination from "../components/ResourcePagination";
import { IndustriesTableSkeleton } from "../components/ResourceSkeletons";
import { useScrollToSectionOnPageChange } from "../hooks/useScrollToSectionOnPageChange";

const ITEMS_PER_PAGE = 8;

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const [industries, setIndustries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useScrollToSectionOnPageChange(sectionRef, currentPage, loading);

  useEffect(() => {
    let cancelled = false;

    const loadIndustries = async () => {
      try {
        setLoading(true);
        setError(false);
        const result = await fetchIndustries({
          page: currentPage,
          limit: ITEMS_PER_PAGE,
        });

        if (!cancelled) {
          setIndustries(result.items);
          setTotalPages(result.totalPages || 1);
        }
      } catch {
        if (!cancelled) {
          setIndustries([]);
          setTotalPages(1);
          setError(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadIndustries();

    return () => {
      cancelled = true;
    };
  }, [currentPage]);

  return (
    <section
      ref={sectionRef}
      id="industry-reports"
      className="relative z-10 mx-auto max-w-7xl px-4 md:px-10 py-12 scroll-mt-24 md:scroll-mt-28"
    >
      {loading ? (
        <IndustriesTableSkeleton rows={ITEMS_PER_PAGE} />
      ) : error ? (
        <div className="text-center text-white/50 py-10">
          Unable to load industry reports. Please try again later.
        </div>
      ) : (
        <IndustryReports industries={industries} />
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
