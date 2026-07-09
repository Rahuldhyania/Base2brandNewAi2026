'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, User, Bookmark, Share2, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import { Link } from "react-router-dom";
import axios from "axios";

const BLOGS = [
  {
    id: "blog-1",
    slug: "ai-agents-changing-commerce",
    title: "How AI Agents Are Quietly Rewriting Commerce",
    excerpt:
      "A deep field study on autonomous AI agents transforming Shopify Plus and enterprise commerce with intelligent automation.",
    category: "AI",
    readingTime: "18 min read",
    date: "Dec 04, 2025",
    author: { name: "Aarav Menon", role: "Principal Engineer" },
    cover: "https://picsum.photos/seed/ai/1200/800",
    tags: ["AI Agents", "Shopify Plus", "RAG"],
  },
  {
    id: "blog-2",
    slug: "future-of-shopify-headless-commerce",
    title: "The Future of Headless Commerce with Shopify",
    excerpt:
      "Discover how Shopify Hydrogen is redefining modern commerce experiences.",
    category: "Shopify",
    readingTime: "12 min read",
    date: "Nov 28, 2025",
    author: { name: "Riya Kapoor", role: "Shopify Architect" },
    cover: "https://picsum.photos/seed/shopify/1200/800",
    tags: ["Shopify", "Hydrogen", "Headless"],
  },
  {
    id: "blog-3",
    slug: "nextjs-performance-optimization-guide",
    title: "Next.js Performance Optimization Guide",
    excerpt:
      "Improve Core Web Vitals and create blazing-fast web applications.",
    category: "Web Development",
    readingTime: "14 min read",
    date: "Nov 21, 2025",
    author: { name: "Kabir Sharma", role: "Frontend Lead" },
    cover: "https://picsum.photos/seed/nextjs/1200/800",
    tags: ["Next.js", "Performance", "SEO"],
  },
  {
    id: "blog-4",
    slug: "enterprise-ai-automation-workflows",
    title: "Enterprise AI Automation Beyond Chatbots",
    excerpt:
      "How enterprises are automating complex workflows using LLM-powered systems.",
    category: "AI",
    readingTime: "16 min read",
    date: "Nov 15, 2025",
    author: { name: "Meera Joshi", role: "AI Consultant" },
    cover: "https://picsum.photos/seed/automation/1200/800",
    tags: ["Automation", "LLM", "Enterprise"],
  },
  {
    id: "blog-5",
    slug: "cloud-native-development",
    title: "Cloud-Native Development for Modern Apps",
    excerpt:
      "Learn how Kubernetes and microservices power scalable applications.",
    category: "Cloud",
    readingTime: "11 min read",
    date: "Nov 08, 2025",
    author: { name: "Rohan Gupta", role: "Cloud Engineer" },
    cover: "https://picsum.photos/seed/cloud/1200/800",
    tags: ["Cloud", "Kubernetes", "DevOps"],
  },
  {
    id: "blog-6",
    slug: "ai-powered-user-experience",
    title: "Designing AI-Powered User Experiences",
    excerpt:
      "Build smarter interfaces with predictive UX and AI-driven personalization.",
    category: "UI/UX",
    readingTime: "10 min read",
    date: "Oct 30, 2025",
    author: { name: "Ananya Singh", role: "Product Designer" },
    cover: "https://picsum.photos/seed/design/1200/800",
    tags: ["UX", "AI", "Design"],
  },
  {
    id: "blog-7",
    slug: "cybersecurity-best-practices",
    title: "Cybersecurity Best Practices for Businesses",
    excerpt:
      "Protect applications with zero-trust security and proactive monitoring.",
    category: "Security",
    readingTime: "13 min read",
    date: "Oct 24, 2025",
    author: { name: "Vikram Desai", role: "Security Specialist" },
    cover: "https://picsum.photos/seed/security/1200/800",
    tags: ["Security", "Zero Trust", "Cloud"],
  },
];

const ITEMS_PER_PAGE = 9;

export default function FeaturedResource() {
  const [blogData, setBlogData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setcategory] = useState(null);
  const [showfeature, setShofeature] = useState(3);
  const [categoryCounts, setcategoryCounts] = useState(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs?page=${currentPage}&limit=${ITEMS_PER_PAGE}`
        );

        console.log("API Response:", res.data);

        const blogs = res?.data?.blogs || [];

        const apiTotalPages =
          res?.data?.totalPages ||
          res?.data?.pagination?.totalPages ||
          res?.data?.data?.totalPages;

        const totalBlogs =
          res?.data?.totalBlogs ||
          res?.data?.total ||
          res?.data?.count ||
          res?.data?.pagination?.total ||
          blogs.length;

        setBlogData(blogs);
        setTotalPages(apiTotalPages || Math.ceil(totalBlogs / ITEMS_PER_PAGE) || 1);
      } catch (error) {
        console.log("Error:", error);
        console.log("Response:", error?.response?.data);
        setBlogData([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const featuredBlogs = blogData.filter(item => item.featured);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage || loading) return;
    setCurrentPage(page);
  };

  const getPaginationNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let page = startPage; page <= endPage; page++) {
      pages.push(page);
    }

    return pages;
  };

  console.log("blogData", blogData);

  return (
    <div>
      <div className="pt-3 md:pt-10">
        {loading ? (
          <div className="text-center text-white/60 py-10">
            Loading blogs...
          </div>
        ) : (
          blogData.slice(0, 1).map((blog, index) => (
            <Link
              key={blog?._id || blog?.id || index}
              href={`/blog/${blog?.slugUrl}`}
            >
              <motion.div
                // initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
                // whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                // transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
                data-testid="featured-resource"
              >
                {/* Animated border */}
                <div className="absolute -inset-px rounded-3xl overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1/2"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, rgba(123,77,255,0.7) 60deg, rgba(66,212,255,0.7) 120deg, transparent 180deg, transparent 360deg)",
                    }}
                  />
                  <div className="absolute inset-[2px] rounded-[calc(1.5rem-2px)] bg-[#050609]" />
                </div>

                <div className="relative glass rounded-lg md:rounded-3xl overflow-hidden">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="relative md:col-span-3 md:aspect-[16/10] md:aspect-auto overflow-hidden min-h-60 md:min-h-100">
                      <img
                        src={blog?.imageUrl}
                        alt={blog?.heading}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ filter: "brightness(0.75) saturate(1.1)" }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(120deg, rgba(4,5,7,0.4) 0%, rgba(4,5,7,0) 40%, rgba(4,5,7,0.55) 100%)",
                        }}
                      />
                      <div className="absolute top-6 left-6 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full glass text-[11px] tracking-widest uppercase text-white/90">
                          Featured
                        </span>
                        <span className="px-3 py-1 rounded-full glass text-[11px] tracking-widest uppercase text-white/70">
                          {blog?.category || "Blog"}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2 p-4 md:p-6 flex flex-col justify-center">
                      <div>
                        <div className="flex items-center gap-4 text-white/50 text-xs mb-2 md:mb-5">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> {"8 min"}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {blog?.createdAt
                              ? new Date(blog?.createdAt).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "2-digit",
                                  year: "numeric",
                                })
                              : ""}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Eye className="h-3.5 w-3.5" /> {blog?.blogViews}
                          </span>
                        </div>

                        <h3 className="font-display text-xl md:text-2xl lg:text-3xl tracking-tight text-white line-clamp-2 md:line-clamp-3">
                          {blog?.heading}
                        </h3>

                        <p
                          className="mt-1 text-sm md:text-base !text-white leading-relaxed line-clamp-2 md:line-clamp-3 blog_description"
                          dangerouslySetInnerHTML={{ __html: blog?.description }}
                        />

                        {/* <div className="mt-6 flex flex-wrap gap-2">
                          {blog.tags.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-full text-[11px] text-white/60 border border-white/10 bg-white/[0.03]"
                            >
                              {t}
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))
        )}
      </div>

      {!loading && (
        <div className="grid md:grid-cols-2 gap-4 pt-8 md:pt-10">
          {blogData.slice(1).map((blog, index) => (
            <motion.div
              key={blog?._id || blog?.id || index}
              // initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
              // whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              // transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
              data-testid="featured-resource"
            >
              <Link href={`/blog/${blog?.slugUrl}`}>
                <div className="absolute -inset-px rounded-3xl overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1/2"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, rgba(123,77,255,0.7) 60deg, rgba(66,212,255,0.7) 120deg, transparent 180deg, transparent 360deg)",
                    }}
                  />
                  <div className="absolute inset-[2px] rounded-[calc(1.5rem-2px)] bg-[#050609]" />
                </div>

                <div className="relative glass rounded-lg md:rounded-3xl overflow-hidden">
                  <div className="grid gap-0">
                    <div className="py-4 md:py-6 px-4 md:px-6 flex flex-col justify-between">
                      <div>
                        <img
                          src={blog?.imageUrl}
                          alt={blog?.heading}
                          loading="lazy"
                          className="max-h-55 w-full object-cover rounded-lg"
                          style={{ filter: "brightness(0.75) saturate(1.1)" }}
                        />
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center gap-4 text-white/50 text-xs mb-2 md:mb-5">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> {"8 min"}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {blog?.createdAt
                              ? new Date(blog?.createdAt).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "2-digit",
                                  year: "numeric",
                                })
                              : ""}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Eye className="h-3.5 w-3.5" /> {blog?.blogViews}
                          </span>
                        </div>

                        <h3 className="font-display text-lg md:text-2xl text-white line-clamp-1">
                          {blog?.heading}
                        </h3>

                        <p
                          className="mt-1 text-white! leading-relaxed line-clamp-2 blog_description"
                          dangerouslySetInnerHTML={{ __html: blog?.description }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {!loading && totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 pt-10">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              currentPage === 1
                ? "border-white/10 text-white/30 cursor-not-allowed"
                : "border-white/20 text-white/80 hover:bg-white/10"
            }`}
          >
            Previous
          </button>

          {getPaginationNumbers().map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
              className={`h-10 min-w-10 px-3 rounded-full border text-sm transition ${
                currentPage === page
                  ? "border-white bg-white text-black"
                  : "border-white/20 text-white/80 hover:bg-white/10"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              currentPage === totalPages
                ? "border-white/10 text-white/30 cursor-not-allowed"
                : "border-white/20 text-white/80 hover:bg-white/10"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}