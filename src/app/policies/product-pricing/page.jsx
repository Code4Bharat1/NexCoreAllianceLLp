// src/app/policies/product-pricing/page.jsx


import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ProductPricing from '@/components/policies/productpricing';
import React from 'react';

// ✅ SEO Metadata for Product Pricing Policy Page
export const metadata = {
  title: "Product Pricing Policy | NexCoreAlliance",
  description:
    "Read NexCoreAlliance’s Product Pricing Policy to understand our pricing structure, transparency, discounts, and how we ensure fair pricing for customers.",
  keywords:
    "NexCoreAlliance Product Pricing Policy, product prices, pricing structure, discounts, offers, pricing transparency",
  openGraph: {
    title: "Product Pricing Policy | NexCoreAlliance",
    description:
      "Learn about NexCoreAlliance’s Product Pricing Policy — transparency in product pricing, discounts, offers, and fair price practices.",
    url: "https://www.nexcorealliance.com/policies/product-pricing",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Product Pricing Policy - NexCoreAlliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Pricing Policy | NexCoreAlliance",
    description:
      "Understand NexCoreAlliance’s Product Pricing Policy — pricing transparency, discounts, and fair price practices.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/product-pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <ProductPricing />
      <Footer />
    </div>
  );
};

export default Page;
