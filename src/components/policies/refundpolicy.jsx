"use client";
import React, { useEffect } from "react";
import Link from "next/link";
export default function RefundPolicy() {
  useEffect(() => {
    // Set page title and meta description
    document.title =
      "Refund Policy | NexCore-Alliance - Fair & Transparent Returns";

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "Learn about NexCore-Alliance's fair refund policy. 7-day eligibility window, 25% content access limit, and 10 business day processing. Clear terms for course refunds.";

    // Update or create keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content =
      "refund policy, course refunds, NexCore-Alliance, return policy, money back guarantee, education refunds, online course returns";

    // Add Open Graph tags
    const ogTags = [
      { property: "og:title", content: "Refund Policy | NexCore-Alliance" },
      {
        property: "og:description",
        content:
          "Fair and transparent refund policy for NexCore-Alliance courses. 7-day eligibility window with clear guidelines.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
    ];

    ogTags.forEach((tag) => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = tag.content;
    });

    // Add Twitter Card tags
    const twitterTags = [
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Refund Policy | NexCore-Alliance" },
      {
        name: "twitter:description",
        content:
          "Fair and transparent refund policy for NexCore-Alliance courses.",
      },
    ];

    twitterTags.forEach((tag) => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement("meta");
        twitterTag.name = tag.name;
        document.head.appendChild(twitterTag);
      }
      twitterTag.content = tag.content;
    });

    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Refund Policy",
      description:
        "NexCore-Alliance refund policy outlining terms and conditions for course returns",
      publisher: {
        "@type": "Organization",
        name: "NexCore-Alliance",
      },
      mainEntity: {
        "@type": "Policy",
        name: "Refund Policy",
        description:
          "Course refund policy with 7-day eligibility window and 25% content access limit",
        publisher: {
          "@type": "Organization",
          name: "NexCore-Alliance",
        },
      },
    };

    let scriptTag = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none">
      <article className="relative max-w-7xl mt-10 w-full bg-white shadow-2xl rounded-3xl p-8 md:p-16 overflow-hidden">
        {/* Decorative background blur */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"
          aria-hidden="true"
        ></div>

        <header>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
            Refund Policy
          </h1>
        </header>

        <main className="space-y-6 text-gray-700 text-lg">
          <section>
            <p>
              At <strong>NexCore-Alliance</strong>, we strive to ensure your
              satisfaction. However, we understand that circumstances may
              change, and we are here to assist you with a fair refund process:
            </p>
          </section>

          <section>
            <h2 className="sr-only">Refund Policy Terms</h2>
            <ol className="list-decimal list-inside space-y-4 pl-4" role="list">
              <li>
                <h3 className="inline font-bold">Eligibility for Refunds:</h3>
                <div className="mt-2 space-y-1">
                  <p>
                    Refund requests must be submitted within{" "}
                    <strong>7 days</strong> of enrollment.
                  </p>
                  <p>
                    Refunds are applicable only if less than{" "}
                    <strong>25% of the course content</strong> has been
                    accessed.
                  </p>
                </div>
              </li>
              <li>
                <h3 className="inline font-bold">Processing Fees:</h3>
                <div className="mt-2">
                  <p>
                    Any applicable processing fees will be deducted from the
                    refund amount.
                  </p>
                </div>
              </li>
              <li>
                <h3 className="inline font-bold">Refund Timeline:</h3>
                <div className="mt-2">
                  <p>
                    Approved refunds will be processed within{" "}
                    <strong>10 business days</strong>.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section>
            <p>
              We are committed to providing a seamless refund experience while
              maintaining fairness for all parties.
            </p>
          </section>

          {/* Additional SEO-friendly content */}
          <section className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              How to Request a Refund
            </h2>
            <p className="text-gray-600">
              To initiate a refund request, please contact our support team with
              your enrollment details. We'll review your request based on our
              policy guidelines and respond promptly.
            </p>
          </section>
        </main>

        {/* Breadcrumb for SEO */}
        <nav
      aria-label="Breadcrumb"
      className="mt-8 pt-4 border-t border-gray-100"
    >
      <ol
        className="flex space-x-2 text-sm text-gray-500"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Home */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link href="/" itemProp="item" className="hover:text-blue-600">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {/* Refund Policy */}
        <li
          className="before:content-['/'] before:mr-2"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/policies/refund"
            itemProp="item"
            className="hover:text-blue-600"
          >
            <span itemProp="name">Refund Policy</span>
          </Link>
          <meta itemProp="position" content="2" />
        </li>
      </ol>
    </nav>
      </article>
    </div>
  );
}
