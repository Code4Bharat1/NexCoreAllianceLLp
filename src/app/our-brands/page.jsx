// src/app/our-brands/page.jsx

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OurBrands from "@/components/OurBrands/OurBrands";
import React from "react";

// ✅ SEO Metadata for Our Brands Page
export const metadata = {
  title: "Our Brands | NexCoreAlliance",
  description:
    "Discover the diverse portfolio of brands under NexCoreAlliance, driving innovation, growth, and strategic business solutions across industries.",
  keywords:
    "NexCoreAlliance brands, our brands, business portfolio, innovation, strategic growth, company divisions",
  openGraph: {
    title: "Our Brands | NexCoreAlliance",
    description:
      "Explore the different brands managed by NexCoreAlliance, each contributing to growth, innovation, and corporate success.",
    url: "https://www.nexcorealliance.com/our-brands",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Our Brands - NexCoreAlliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Brands | NexCoreAlliance",
    description:
      "NexCoreAlliance manages multiple brands focused on innovation, growth, and business solutions across industries.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/our-brands",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div>
      <Navbar />
      <OurBrands />
      <Footer />
    </div>
  );
};

export default Page;
