const API_BASE =
  process.env.NEXT_PUBLIC_LOCAL_API_URL ||
  process.env.NEXT_LOCAL_API_URL ||
  "http://localhost:5000/api";

const INDUSTRY_ICONS = ["🏥", "💳", "🛍️", "🏭", "🎓", "🏛️", "⚡", "🌐"];
const INDUSTRY_COLORS = [
  "from-cyan-500/10 via-cyan-500/5 to-transparent",
  "from-violet-500/10 via-violet-500/5 to-transparent",
  "from-emerald-500/10 via-emerald-500/5 to-transparent",
  "from-amber-500/10 via-amber-500/5 to-transparent",
  "from-rose-500/10 via-rose-500/5 to-transparent",
  "from-sky-500/10 via-sky-500/5 to-transparent",
  "from-indigo-500/10 via-indigo-500/5 to-transparent",
  "from-teal-500/10 via-teal-500/5 to-transparent",
];

export function cleanDescription(description) {
  if (!description) return "";
  return description.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function formatResourceDate(date) {
  if (!date) return "";

  try {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

const SPAN_CYCLE = ["tall", "wide", null, null, "tall", null, "wide", null];

export function normalizeArticle(item, index = 0) {
  if (!item) return null;

  const excerpt =
    item.sub_title || cleanDescription(item.description).slice(0, 180);

  return {
    id: item._id || item.id,
    slug: item.slug || "",
    title: item.title || "",
    excerpt,
    category: item.category || "Article",
    readingTime: item.readingTime || "12 min read",
    date: formatResourceDate(item.createdAt),
    author: {
      name: item.author?.name || "Base2Brand Editorial",
    },
    cover: item.image_poster || item.imageUrl || "",
    tags: Array.isArray(item.tags) ? item.tags : [],
    span: item.span || SPAN_CYCLE[index % SPAN_CYCLE.length] || undefined,
    createdAt: item.createdAt,
    description: item.description,
    pageTitle: item.pageTitle,
    pageDescription: item.pageDescription,
  };
}

export function normalizeInsight(item, index = 0) {
  return normalizeArticle(item, index);
}

export function normalizeIndustry(item, index = 0) {
  if (!item) return null;

  return {
    id: item._id || item.id,
    slug: item.slug || "",
    code: item.code || "",
    title: item.title || "",
    icon: item.icon || INDUSTRY_ICONS[index % INDUSTRY_ICONS.length],
    reports: item.reports ?? 0,
    growth: item.growth || "—",
    status: item.status || "Active",
    color: item.color || INDUSTRY_COLORS[index % INDUSTRY_COLORS.length],
    trend: Array.isArray(item.trend) ? item.trend : [],
    tagline: item.tagline || "",
    description: item.description || "",
    stats: item.stats || {},
    focusAreas: Array.isArray(item.focusAreas) ? item.focusAreas : [],
    reportsList: Array.isArray(item.reportsList) ? item.reportsList : [],
  };
}

async function clientFetch(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) return null;

  try {
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchArticles({ page = 1, limit = 50 } = {}) {
  try {
    const data = await clientFetch(
      `${API_BASE}/articles?page=${page}&limit=${limit}`
    );
    const items = data?.articles || [];

    return {
      items: items.map((item, index) => normalizeArticle(item, index)),
      totalPages: data?.totalPages || 1,
      total: data?.totalArticles || items.length,
    };
  } catch {
    return { items: [], totalPages: 1, total: 0 };
  }
}

export async function searchArticles(query, { page = 1, limit = 50 } = {}) {
  try {
    const q = encodeURIComponent(query.trim());
    const data = await clientFetch(
      `${API_BASE}/articles/search?q=${q}&page=${page}&limit=${limit}`
    );
    const items = data?.articles || [];

    return {
      items: items.map((item, index) => normalizeArticle(item, index)),
      totalPages: data?.totalPages || 1,
      total: data?.totalArticles || items.length,
    };
  } catch {
    return { items: [], totalPages: 1, total: 0 };
  }
}

export async function getArticleBySlug(slug) {
  try {
    if (!slug) return null;

    const data = await clientFetch(`${API_BASE}/articles/slug/${slug}`);
    return data?.article || null;
  } catch {
    return null;
  }
}

export async function fetchInsights({ page = 1, limit = 50 } = {}) {
  try {
    const data = await clientFetch(
      `${API_BASE}/insights?page=${page}&limit=${limit}`
    );
    const items = data?.insights || [];

    return {
      items: items.map((item, index) => normalizeInsight(item, index)),
      totalPages: data?.totalPages || 1,
      total: data?.totalInsights || items.length,
    };
  } catch {
    return { items: [], totalPages: 1, total: 0 };
  }
}

export async function searchInsights(query, { page = 1, limit = 50 } = {}) {
  try {
    const q = encodeURIComponent(query.trim());
    const data = await clientFetch(
      `${API_BASE}/insights/search?q=${q}&page=${page}&limit=${limit}`
    );
    const items = data?.insights || [];

    return {
      items: items.map((item, index) => normalizeInsight(item, index)),
      totalPages: data?.totalPages || 1,
      total: data?.totalInsights || items.length,
    };
  } catch {
    return { items: [], totalPages: 1, total: 0 };
  }
}

export async function getInsightBySlug(slug) {
  try {
    if (!slug) return null;

    const data = await clientFetch(`${API_BASE}/insights/slug/${slug}`);
    return data?.insight || null;
  } catch {
    return null;
  }
}

export async function fetchIndustries({ page = 1, limit = 50 } = {}) {
  try {
    const data = await clientFetch(
      `${API_BASE}/industries?page=${page}&limit=${limit}`
    );
    const items = data?.industries || [];

    return {
      items: items.map((item, index) => normalizeIndustry(item, index)),
      totalPages: data?.totalPages || 1,
      total: data?.totalIndustries || items.length,
    };
  } catch {
    return { items: [], totalPages: 1, total: 0 };
  }
}

export async function getIndustryBySlug(slug) {
  try {
    if (!slug) return null;

    const data = await clientFetch(`${API_BASE}/industries/slug/${slug}`);
    const industry = data?.industry;
    return industry ? normalizeIndustry(industry) : null;
  } catch {
    return null;
  }
}

export async function fetchBlogs({ page = 1, limit = 9 } = {}) {
  try {
    const data = await clientFetch(
      `${API_BASE}/blogs?page=${page}&limit=${limit}`
    );
    const blogs = data?.blogs || [];

    return {
      items: blogs,
      totalPages:
        data?.totalPages ||
        Math.ceil((data?.totalBlogs || blogs.length) / limit) ||
        1,
      total: data?.totalBlogs || blogs.length,
    };
  } catch {
    return { items: [], totalPages: 1, total: 0 };
  }
}

export async function getBlogBySlug(slug) {
  try {
    if (!slug) return null;

    const data = await clientFetch(`${API_BASE}/blogs/slug/${slug}`);
    return data?.blog || null;
  } catch {
    return null;
  }
}

export { API_BASE };
