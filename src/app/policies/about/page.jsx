// src/app/policies/about/page.jsx

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/policies/about";
import React from "react";

// ✅ SEO Metadata for About Policy Page
export const metadata = {
  title: "About Policy | NexCoreAlliance",
  description:
    "Learn about NexCoreAlliance’s company policies, values, and approach to managing multiple brands with innovation and integrity.",
  keywords:
    "NexCoreAlliance About Policy, company policies, corporate values, business ethics, brand management",
  openGraph: {
    title: "About Policy | NexCoreAlliance",
    description:
      "Explore the policies and values that guide NexCoreAlliance in managing multiple brands and delivering strategic business solutions.",
    url: "https://www.nexcorealliance.com/policies/about",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "About Policy - NexCoreAlliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Policy | NexCoreAlliance",
    description:
      "Understand NexCoreAlliance’s company policies, values, and strategic approach to brand management.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/about",
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
      <About />
      <Footer />
    </div>
  );
};

export default Page;
