// src/app/policies/contact/page.jsx
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ContactUs from '@/components/policies/contact';
import React from 'react';

// ✅ SEO Metadata for Contact Policy Page
export const metadata = {
  title: "Contact Policy | NexCoreAlliance",
  description:
    "Read NexCoreAlliance’s Contact Policy to understand how to reach us, communication guidelines, and how we handle inquiries and support requests.",
  keywords:
    "NexCoreAlliance Contact Policy, customer support, communication guidelines, company contact, inquiries, support policy",
  openGraph: {
    title: "Contact Policy | NexCoreAlliance",
    description:
      "Learn about NexCoreAlliance’s Contact Policy, including communication methods, customer support handling, and inquiry response process.",
    url: "https://www.nexcorealliance.com/policies/contact",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Contact Policy - NexCoreAlliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Policy | NexCoreAlliance",
    description:
      "Understand NexCoreAlliance’s Contact Policy — how we manage communication, support, and inquiries across our brands.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/contact",
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
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Page;
