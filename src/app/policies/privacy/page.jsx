// src/app/policies/privacy-policy/page.jsx
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import PrivacyPolicy from '@/components/policies/Privacy';
import React from 'react';

// ✅ SEO Metadata for Privacy Policy Page
export const metadata = {
  title: "Privacy Policy | NexCoreAlliance",
  description:
    "Read NexCoreAlliance’s Privacy Policy to learn how we collect, use, and protect your personal information while ensuring transparency and data security.",
  keywords:
    "NexCoreAlliance Privacy Policy, data protection, personal information security, data usage, user privacy, GDPR compliance",
  openGraph: {
    title: "Privacy Policy | NexCoreAlliance",
    description:
      "Understand how NexCoreAlliance collects, uses, and protects your data. Our Privacy Policy ensures transparency and user trust.",
    url: "https://www.nexcorealliance.com/policies/privacy",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - NexCoreAlliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | NexCoreAlliance",
    description:
      "Learn how NexCoreAlliance protects your personal data and ensures user privacy with our transparent Privacy Policy.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/privacy",
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
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default Page;
