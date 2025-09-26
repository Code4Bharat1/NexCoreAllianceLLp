// src/app/terms-and-conditions/page.jsx


import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import TermsAndConditions from '@/components/TermsAndCondition/TermsAndCondition';

// ✅ SEO Metadata for Terms & Conditions Page
export const metadata = {
  title: "Terms & Conditions | NexCoreAlliance",
  description:
    "Read the Terms & Conditions of NexCoreAlliance to understand our policies, guidelines, and user responsibilities when engaging with our brands and services.",
  keywords:
    "NexCoreAlliance Terms and Conditions, policies, guidelines, user agreement, company policies",
  openGraph: {
    title: "Terms & Conditions | NexCoreAlliance",
    description:
      "Learn about the Terms & Conditions that govern your use of NexCoreAlliance’s website, brands, and services.",
    url: "https://www.nexcorealliance.com/terms-and-conditions",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Terms and Conditions - NexCoreAlliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | NexCoreAlliance",
    description:
      "Review NexCoreAlliance’s Terms & Conditions for clear guidelines on our services, policies, and brand use.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default Page;
