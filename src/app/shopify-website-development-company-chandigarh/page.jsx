import { notFound } from "next/navigation";
import ShopifyCityPage from "../_shopify-city-pages/ShopifyCityPage";
import { getShopifyCityPage } from "../_shopify-city-pages/data/shopifyCityData";

const SLUG = "shopify-website-development-company-chandigarh";

export function generateMetadata() {
  const data = getShopifyCityPage(SLUG);

  if (!data) {
    return { title: "Shopify Website Development Company | Base2Brand" };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    alternates: {
      canonical: `https://www.base2brand.com/${SLUG}`,
    },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: `https://www.base2brand.com/${SLUG}`,
    },
  };
}

export default function Page() {
  const data = getShopifyCityPage(SLUG);

  if (!data) {
    notFound();
  }

  return <ShopifyCityPage data={data} />;
}
