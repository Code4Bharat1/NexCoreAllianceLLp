// src/app/policies/refund-policy/page.jsx


import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import RefundPolicy from '@/components/policies/refundpolicy';
import React from 'react';

// ✅ SEO Metadata for Refund Policy Page
export const metadata = {
  title: "Refund Policy | Nexcorealliance",
  description:
    "Read Nexcorealliance’s Refund Policy to understand our guidelines for refunds, cancellations, and customer satisfaction.",
  keywords:
    "Nexcorealliance Refund Policy, refund guidelines, cancellations, return policy, customer satisfaction",
  openGraph: {
    title: "Refund Policy | Nexcorealliance",
    description:
      "Learn about Nexcorealliance’s Refund Policy — guidelines for refunds, cancellations, and ensuring customer satisfaction.",
    url: "https://www.nexcorealliance.com/policies/refund-policy",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Refund Policy - Nexcorealliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Nexcorealliance",
    description:
      "Understand Nexcorealliance’s Refund Policy — refunds, cancellations, and customer satisfaction guidelines.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/refund-policy",
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
      <RefundPolicy />
      <Footer />
    </div>
  );
};

export default Page;
