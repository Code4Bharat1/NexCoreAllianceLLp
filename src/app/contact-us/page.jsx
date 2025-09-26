// src/app/contact-us/page.jsx
import ContactPage from "@/components/Contactus/contact-us";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

// ✅ SEO Metadata for Contact Page
export const metadata = {
  title: "Contact Us | NexCoreAlliance",
  description:
    "Get in touch with NexCoreAlliance for business inquiries, partnerships, or brand-related support. We’re here to help you with your questions.",
  keywords:
    "Contact NexCoreAlliance, business inquiries, partnerships, support, parent company, corporate contact",
  openGraph: {
    title: "Contact Us | NexCoreAlliance",
    description:
      "Reach out to NexCoreAlliance for collaborations, partnerships, or customer support across our multiple brands.",
    url: "https://www.nexcorealliance.com/contact-us",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Contact NexCoreAlliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | NexCoreAlliance",
    description:
      "Connect with NexCoreAlliance for inquiries, partnerships, and support across our multiple brands.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/contact-us",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}
