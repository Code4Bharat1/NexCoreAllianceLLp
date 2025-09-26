// src/app/policies/terms-and-conditions/page.jsx


import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import TermsAndConditions from '@/components/policies/TermsAndConditions';
import React from 'react';

// ✅ SEO Metadata for Terms & Conditions Page
export const metadata = {
  title: "Terms & Conditions | NexCoreAlliance",
  description:
    "Read NexCoreAlliance’s Terms & Conditions to understand our rules, user obligations, and legal policies for using our services.",
  keywords:
    "NexCoreAlliance Terms and Conditions, user agreement, legal policies, rules, obligations",
  openGraph: {
    title: "Terms & Conditions | NexCoreAlliance",
    description:
      "Learn about NexCoreAlliance’s Terms & Conditions — user obligations, legal policies, and rules for using our services.",
    url: "https://www.nexcorealliance.com/policies/terms-and-conditions",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions - NexCoreAlliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | NexCoreAlliance",
    description:
      "Understand NexCoreAlliance’s Terms & Conditions — user obligations, rules, and legal policies.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/terms-and-conditions",
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
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default Page;
