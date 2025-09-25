// "use client";
// // src/app/layout.jsx
// import "./globals.css";
// import Navbar from "../components/Navbar/Navbar";

// const metadata = {
//   title: "NexCoreAlliance",
//   description: "Parent Company with Multiple Brands",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>{/* You can add additional head elements here */}</head>
//       <body>
//         <Navbar />
//         {children}
//       </body>
//     </html>
//   );
// }

"use client";
// src/app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

const metadata = {
  title: "NexCoreAlliance - Parent Company with Multiple Brands",
  description: "NexCoreAlliance is a parent company managing multiple brands, delivering innovation, growth, and strategic business solutions.",
  keywords: "NexCoreAlliance, parent company, business solutions, brands, innovation, growth",
  url: "https://www.nexcorealliance.com", // replace with your domain
  image: "/seo-banner.png", // upload a banner image (1200x630 recommended)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="NexCoreAlliance" />
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Canonical URL */}
        <link rel="canonical" href={metadata.url} />

        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data (JSON-LD for Organization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NexCoreAlliance",
              url: metadata.url,
              logo: "/favicon_io/apple-touch-icon.png",
              sameAs: [
                "https://www.facebook.com/nexcorealliance",
                "https://www.linkedin.com/company/nexcorealliance",
                "https://twitter.com/nexcorealliance",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
