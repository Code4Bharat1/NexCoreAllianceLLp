// src/app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

// Next.js metadata (automatic support)
export const metadata = {
  title: "NexCoreAlliance - Parent Company with Multiple Brands",
  description:
    "NexCoreAlliance is a parent company managing multiple brands, delivering innovation, growth, and strategic business solutions.",
  keywords:
    "NexCoreAlliance, parent company, business solutions, brands, innovation, growth",
  metadataBase: new URL("https://www.nexcorealliance.com"), // ✅ required for Open Graph/Twitter images
  openGraph: {
    title: "NexCoreAlliance - Parent Company with Multiple Brands",
    description:
      "NexCoreAlliance is a parent company managing multiple brands, delivering innovation, growth, and strategic business solutions.",
    url: "https://www.nexcorealliance.com",
    images: ["/seo-banner.png"], // make sure this file exists in public/
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexCoreAlliance - Parent Company with Multiple Brands",
    description:
      "NexCoreAlliance is a parent company managing multiple brands, delivering innovation, growth, and strategic business solutions.",
    images: ["/seo-banner.png"], // same file as Open Graph
  },
  icons: {
    icon: "/favicon.ico", // place in public/
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
