// src/app/policies/cancellation-policy/page.jsx


import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import CancellationPolicy from '@/components/policies/cancellationpolicy';
import React from 'react';

// ✅ SEO Metadata for Cancellation Policy Page
export const metadata = {
  title: "Cancellation Policy | Nexcorealliance",
  description:
    "Read Nexcorealliance’s Cancellation Policy to understand the guidelines and process for cancelling orders, services, or subscriptions.",
  keywords:
    "Nexcorealliance Cancellation Policy, order cancellation, service cancellation, refund process, company policies",
  openGraph: {
    title: "Cancellation Policy | Nexcorealliance",
    description:
      "Learn about Nexcorealliance’s Cancellation Policy, including procedures, timelines, and conditions for order or service cancellations.",
    url: "https://www.nexcorealliance.com/policies/cancellation-policy",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Cancellation Policy - Nexcorealliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation Policy | Nexcorealliance",
    description:
      "Understand Nexcorealliance’s Cancellation Policy covering order cancellations, procedures, and timelines.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/cancellation-policy",
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
      <CancellationPolicy />
      <Footer />
    </div>
  );
};

export default Page;
