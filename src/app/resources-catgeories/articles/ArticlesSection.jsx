"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import StickyFilters from "@/components/resourcesCatgeories/nebula/StickyFilters";
import ResourceGrid from "@/components/resourcesCatgeories/nebula/ResourceGrid";
import { CATEGORIES } from "@/components/resourcesCatgeories/data/resources";
import { fetchArticles, searchArticles } from "../lib/resourcesApi";
import ResourcePagination from "../components/ResourcePagination";
import { ArticleGridSkeleton } from "../components/ResourceSkeletons";
import { useScrollToSectionOnPageChange } from "../hooks/useScrollToSectionOnPageChange";

const ITEMS_PER_PAGE = 9;
const FILTER_FETCH_LIMIT = 100;

function filterArticles(items, activeCategory, activeTopic) {
  return items.filter((item) => {
    if (activeCategory !== "All" && item.category !== activeCategory) {
      return false;
    }

    if (activeTopic) {
      const hay = [item.category, ...(item.tags || []), item.title]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(activeTopic.toLowerCase())) {
        return false;
      }
    }

    return true;
  });
}

export default function ArticlesSection({
  query = "",
  activeCategory = "All",
  activeTopic = null,
  libraryRef,
  onCategoryChange,
  onClearTopic,
}) {
  const internalSectionRef = useRef(null);
  const sectionRef = libraryRef ?? internalSectionRef;
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const hasClientFilters =
    activeCategory !== "All" || Boolean(activeTopic);

  useScrollToSectionOnPageChange(sectionRef, currentPage, loading);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, activeCategory, activeTopic]);

  useEffect(() => {
    let cancelled = false;

    const loadArticles = async () => {
      try {
        setLoading(true);
        setError(false);

        const trimmedQuery = query.trim();

        if (trimmedQuery) {
          const result = await searchArticles(trimmedQuery, {
            page: currentPage,
            limit: ITEMS_PER_PAGE,
          });

          if (!cancelled) {
            setArticles(result.items);
            setTotalPages(result.totalPages || 1);
          }
          return;
        }

        if (hasClientFilters) {
          const result = await fetchArticles({ limit: FILTER_FETCH_LIMIT });
          const filtered = filterArticles(
            result.items,
            activeCategory,
            activeTopic
          );
          const pages = Math.max(
            1,
            Math.ceil(filtered.length / ITEMS_PER_PAGE)
          );
          const start = (currentPage - 1) * ITEMS_PER_PAGE;

          if (!cancelled) {
            setArticles(filtered.slice(start, start + ITEMS_PER_PAGE));
            setTotalPages(pages);
          }
          return;
        }

        const result = await fetchArticles({
          page: currentPage,
          limit: ITEMS_PER_PAGE,
        });

        if (!cancelled) {
          setArticles(result.items);
          setTotalPages(result.totalPages || 1);
        }
      } catch {
        if (!cancelled) {
          setArticles([]);
          setTotalPages(1);
          setError(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadArticles();

    return () => {
      cancelled = true;
    };
  }, [query, activeCategory, activeTopic, currentPage, hasClientFilters]);

  const displayItems = useMemo(() => articles, [articles]);

  return (
    <section
      ref={sectionRef}
      id="library"
      className="relative z-10 mx-auto max-w-7xl px-4 md:px-10 scroll-mt-24 md:scroll-mt-28"
    >
      <StickyFilters
        active={activeCategory}
        onChange={onCategoryChange}
        categories={CATEGORIES}
      />

      {activeTopic && (
        <div className="mt-4 mb-2 text-sm text-white/60 flex items-center gap-2">
          <span>Filtered by topic:</span>
          <button
            type="button"
            data-testid="clear-topic"
            onClick={onClearTopic}
            className="rounded-full glass px-3 py-1 text-white/85 hover:text-white"
          >
            {activeTopic} ×
          </button>
        </div>
      )}

      <div className="mt-8 min-h-[320px]">
        {loading ? (
          <ArticleGridSkeleton count={6} />
        ) : error ? (
          <div className="text-center py-16 text-white/50">
            Unable to load articles. Please try again later.
          </div>
        ) : (
          <ResourceGrid
            items={displayItems}
            hrefPrefix="/resources-catgeories/articles"
          />
        )}
      </div>

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
