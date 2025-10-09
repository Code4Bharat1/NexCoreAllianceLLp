// src/app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

// ✅ Next.js Metadata API
export const metadata = {
  title: "Nexcorealliance - Parent Company with Multiple Brands",
  description:
    "Nexcorealliance is a parent company managing multiple brands, delivering innovation, growth, and strategic business solutions.",
  keywords:
    "Nexcorealliance, parent company, business solutions, brands, innovation, growth, strategic solutions, corporate management",
  metadataBase: new URL("https://www.nexcorealliance.com"),

  // ✅ Open Graph
  openGraph: {
    title: "Nexcorealliance - Parent Company with Multiple Brands",
    description:
      "Nexcorealliance is a parent company managing multiple brands, delivering innovation, growth, and strategic business solutions.",
    url: "https://www.nexcorealliance.com",
    siteName: "Nexcorealliance",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/seo-banner.png", // must be in public/
        width: 1200,
        height: 630,
        alt: "Nexcorealliance - Parent Company Banner",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Nexcorealliance - Parent Company with Multiple Brands",
    description:
      "Nexcorealliance is a parent company managing multiple brands, delivering innovation, growth, and strategic business solutions.",
    creator: "@Nexcorealliance", // if you have a Twitter handle
    images: ["/seo-banner.png"],
  },

  // ✅ Icons / Favicons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },

  // ✅ Canonical URL (for duplicate content prevention)
  alternates: {
    canonical: "https://www.nexcorealliance.com",
  },

  // ✅ Robots (control crawling + indexing)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Manifest (PWA + SEO benefit)
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data (JSON-LD for Organization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nexcorealliance",
              url: "https://www.nexcorealliance.com",
              logo: "https://www.nexcorealliance.com/seo-banner.png",
              sameAs: [
                "https://www.facebook.com/Nexcorealliance",
                "https://www.linkedin.com/company/Nexcorealliance",
                "https://twitter.com/Nexcorealliance",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
