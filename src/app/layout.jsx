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
  title: "NexCoreAlliance",
  description: "Parent Company with Multiple Brands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon */}
        <link rel="icon" href="/favicon_io/favicon.ico" />
        {/* Optional: Add more favicon formats for better support */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
