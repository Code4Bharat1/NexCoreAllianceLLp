// src/app/our-masterminds/page.jsx

import React from "react";
import Directors from "@/components/Directors/Directors";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// ✅ SEO Metadata for Our Masterminds Page
export const metadata = {
  title: "Our Masterminds | NexCoreAlliance",
  description:
    "Meet the visionary leaders and directors behind NexCoreAlliance who drive innovation, growth, and strategic business solutions.",
  keywords:
    "NexCoreAlliance masterminds, directors, leadership team, company leaders, corporate vision, innovation leaders",
  openGraph: {
    title: "Our Masterminds | NexCoreAlliance",
    description:
      "Discover the leadership team of NexCoreAlliance – the masterminds driving innovation, growth, and success across multiple brands.",
    url: "https://www.nexcorealliance.com/our-masterminds",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Our Masterminds - NexCoreAlliance Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Masterminds | NexCoreAlliance",
    description:
      "Get to know the directors and leadership team of NexCoreAlliance who drive innovation and growth across multiple brands.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/our-masterminds",
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
      <Directors />
      <Footer />
    </div>
  );
};

export default Page;
