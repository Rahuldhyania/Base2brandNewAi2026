import { projects as PORTFOLIO_PROJECTS } from "@/portfolio/data/projectsData";
import { SERVICES_PAGES } from "@/services/data/servicesData";
import { SHOPIFY_CITY_PAGES } from "@/_shopify-city-pages/data/shopifyCityData";

const SITE_URL = "https://www.base2brand.com";

const API_BASE =
  process.env.NEXT_PUBLIC_LOCAL_API_URL ||
  process.env.NEXT_LOCAL_API_URL ||
  "http://localhost:5000/api";

const MAX_PAGES = 20;

// Pulls every slug out of a paginated list endpoint. Network/API failures
// are swallowed so a slow or unreachable backend never breaks the sitemap
// (or the production build) — it just contributes fewer URLs that run.
async function fetchAllSlugs(path, listKey) {
  const slugs = [];
  let page = 1;

  while (page <= MAX_PAGES) {
    let data;
    try {
      const res = await fetch(`${API_BASE}${path}?page=${page}&limit=100`, {
        next: { revalidate: 3600 },
      });
      if (!res.ok) break;
      data = await res.json();
    } catch {
      break;
    }

    const items = data?.[listKey] || data?.data || [];
    if (!items.length) break;

    for (const item of items) {
      if (item?.slug) slugs.push(item.slug);
    }

    const totalPages = data?.totalPages;
    if (!totalPages || page >= totalPages) break;
    page += 1;
  }

  return slugs;
}

// Hand-maintained list of core marketing pages that don't come from a data
// file. Add a new static page's path here when you create one under
// src/app/<slug>/page.jsx.
const STATIC_ROUTES = [
  { url: "", changeFrequency: "weekly", priority: 1 },
  { url: "/about-us", changeFrequency: "monthly", priority: 0.7 },
  { url: "/contact-us", changeFrequency: "monthly", priority: 0.7 },
  { url: "/ai-automation", changeFrequency: "monthly", priority: 0.8 },
  { url: "/apple-ecosystem", changeFrequency: "monthly", priority: 0.7 },
  { url: "/e-commerce-solution", changeFrequency: "monthly", priority: 0.8 },
  { url: "/emerging-technologies", changeFrequency: "monthly", priority: 0.7 },
  { url: "/enterprise", changeFrequency: "monthly", priority: 0.7 },
  { url: "/enterprise-systems", changeFrequency: "monthly", priority: 0.7 },
  { url: "/growth-visibility", changeFrequency: "monthly", priority: 0.8 },
  { url: "/intelligent-solutions", changeFrequency: "monthly", priority: 0.7 },
  { url: "/operations-excellence", changeFrequency: "monthly", priority: 0.7 },
  { url: "/public-sector-ngos", changeFrequency: "monthly", priority: 0.6 },
  { url: "/sales-marketing", changeFrequency: "monthly", priority: 0.7 },
  { url: "/social-media-services", changeFrequency: "monthly", priority: 0.7 },
  { url: "/software-development", changeFrequency: "monthly", priority: 0.7 },
  { url: "/success-stories", changeFrequency: "monthly", priority: 0.6 },
  { url: "/case-study", changeFrequency: "weekly", priority: 0.6 },
  { url: "/portfolio", changeFrequency: "weekly", priority: 0.6 },
  { url: "/resources-catgeories", changeFrequency: "weekly", priority: 0.6 },
  { url: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { url: "/industries/automotive", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/education", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/government", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/health-care", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/logistics", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/manufacturing", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/ngo", changeFrequency: "monthly", priority: 0.6 },
  { url: "/industries/retail", changeFrequency: "monthly", priority: 0.6 },
];

export default async function sitemap() {
  const now = new Date();

  const staticRoutes = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // /services/<slug> — driven by src/app/services/data/servicesData.js.
  // Add a page there and it shows up here automatically.
  const serviceRoutes = Object.keys(SERVICES_PAGES).map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Flat Shopify landing pages (best-shopify-agency-<city>,
  // shopify-website-development-company-<city>, ...) — driven by
  // src/app/_shopify-city-pages/data/shopifyCityData.js, keyed by full slug.
  const shopifyCityRoutes = Object.keys(SHOPIFY_CITY_PAGES).map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const portfolioRoutes = (PORTFOLIO_PROJECTS || []).map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const [blogSlugs, caseStudySlugs, articleSlugs, industrySlugs, insightSlugs] =
    await Promise.all([
      fetchAllSlugs("/blogs", "blogs"),
      fetchAllSlugs("/case-studies", "caseStudies"),
      fetchAllSlugs("/articles", "articles"),
      fetchAllSlugs("/industries", "industries"),
      fetchAllSlugs("/insights", "insights"),
    ]);

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const caseStudyRoutes = caseStudySlugs.map((slug) => ({
    url: `${SITE_URL}/case-study/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleRoutes = articleSlugs.map((slug) => ({
    url: `${SITE_URL}/resources-catgeories/articles/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const industryRoutes = industrySlugs.map((slug) => ({
    url: `${SITE_URL}/resources-catgeories/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const insightRoutes = insightSlugs.map((slug) => ({
    url: `${SITE_URL}/resources-catgeories/insights/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...shopifyCityRoutes,
    ...portfolioRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
    ...articleRoutes,
    ...industryRoutes,
    ...insightRoutes,
  ];
}
