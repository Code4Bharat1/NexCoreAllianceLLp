
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

// ✅ SEO Metadata for About Page
export const metadata = {
  title: "About Us | Nexcorealliance",
  description:
    "Learn about Nexcorealliance, a parent company managing multiple brands with a focus on innovation, strategic growth, and business solutions.",
  keywords:
    "About Nexcorealliance, parent company, innovation, business solutions, strategic growth, corporate brands",
  openGraph: {
    title: "About Us | Nexcorealliance",
    description:
      "Discover Nexcorealliance's journey, vision, and mission as a parent company empowering multiple brands for sustainable growth.",
    url: "https://www.Nexcorealliance.com/about-us",
    type: "website",
    images: [
      {
        url: "/seo-banner.png", // place in /public
        width: 1200,
        height: 630,
        alt: "About Nexcorealliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Nexcorealliance",
    description:
      "Explore Nexcorealliance’s vision, mission, and leadership driving growth across multiple brands.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.Nexcorealliance.com/about-us",
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
      <About />
      <Footer />
    </div>
  );
};

export default Page;
