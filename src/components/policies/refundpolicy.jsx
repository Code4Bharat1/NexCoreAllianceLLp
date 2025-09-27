"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  RefreshCw, 
  Clock, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Mail, 
  Phone, 
  FileText,
  CreditCard,
  Calendar,
  Users
} from "lucide-react";

export default function RefundPolicy() {
  const [lastUpdated] = useState("January 15, 2024");
  const [isVisible, setIsVisible] = useState(false);

  // SEO Data
  const seoData = {
    title: "Refund Policy - NexCore Alliance LLP | Fair Returns for ISRC, Code4Bharat Services",
    description: "Comprehensive refund policy for NexCore Alliance LLP services including ISRC competitions, Code4Bharat IT solutions, and Education.Code4Bharat training programs. 7-day eligibility, transparent process, 10 business day processing.",
    keywords: "NexCore Alliance refund policy, ISRC refund terms, Code4Bharat returns, education course refunds, IT training refund policy, Mumbai refund policy, fair return policy India",
    canonicalUrl: "https://www.nexcorealliance.com/refund-policy",
    organization: "NexCore Alliance LLP"
  };

  // Refund policy sections with enhanced structure
  const refundSections = [
    {
      id: "eligibility",
      title: "Refund Eligibility Criteria",
      icon: CheckCircle,
      content: [
        "Refund requests must be submitted within 7 days of enrollment or purchase",
        "Applicable only if less than 25% of course content has been accessed",
        "Valid government-issued ID required for verification",
        "Original payment method must be available for refund processing"
      ]
    },
    {
      id: "processing",
      title: "Processing & Timeline",
      icon: Clock,
      content: [
        "Refund requests reviewed within 2-3 business days",
        "Approved refunds processed within 10 business days",
        "Refund amount credited to original payment method",
        "Email confirmation sent upon successful processing"
      ]
    },
    {
      id: "fees",
      title: "Processing Fees & Deductions",
      icon: CreditCard,
      content: [
        "Payment gateway charges (2-3%) may be deducted",
        "Administrative processing fee may apply for certain services",
        "No hidden charges - all deductions clearly communicated",
        "Final refund amount confirmed before processing"
      ]
    },
    {
      id: "exclusions",
      title: "Non-Refundable Services",
      icon: AlertTriangle,
      content: [
        "ISRC competition registrations (unless event canceled)",
        "Completed courses or training programs",
        "Custom development projects after work commencement",
        "Third-party service fees and certifications"
      ]
    }
  ];

  // Service-specific refund policies
  const serviceRefundPolicies = [
    {
      service: "ISRC Competitions",
      icon: Users,
      policy: "Non-refundable unless event canceled by organizers",
      exception: "Medical emergencies considered case-by-case"
    },
    {
      service: "Code4Bharat Services",
      icon: FileText,
      policy: "Refunds available before project initiation",
      exception: "Partial refunds for incomplete deliverables"
    },
    {
      service: "Education Courses",
      icon: Shield,
      policy: "7-day window with 25% content limit",
      exception: "Technical issues preventing access"
    }
  ];

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refund Policy",
    "description": seoData.description,
    "url": seoData.canonicalUrl,
    "dateModified": "2024-01-15T00:00:00Z",
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "NexCore Alliance LLP",
      "url": "https://www.nexcorealliance.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NexCore Alliance LLP",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN",
        "postalCode": "400070"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919594430295",
        "email": "nexcorealiancellp@gmail.com",
        "contactType": "customer service"
      }
    },
    "mainEntity": {
      "@type": "Policy",
      "name": "Refund Policy",
      "description": "Comprehensive refund policy covering all NexCore Alliance services",
      "dateModified": "2024-01-15T00:00:00Z"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.nexcorealliance.com"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Refund Policy",
          "item": seoData.canonicalUrl
        }
      ]
    }
  };

  useEffect(() => {
    // Animation trigger
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={seoData.canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:site_name" content={seoData.organization} />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NexCore Alliance LLP" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main 
        className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <article className="relative max-w-7xl mt-6 md:mt-10 w-full bg-white shadow-2xl rounded-3xl p-6 md:p-12 lg:p-16 overflow-hidden">
          {/* Decorative background blur - Mobile optimized */}
          <div className="absolute -top-16 md:-top-24 -right-16 md:-right-24 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full blur-3xl opacity-20 md:opacity-30 animate-pulse" aria-hidden="true" />
          <div className="absolute -bottom-16 md:-bottom-24 -left-16 md:-left-24 w-48 h-48 md:w-72 md:h-72 bg-purple-200 rounded-full blur-3xl opacity-20 md:opacity-30 animate-pulse" aria-hidden="true" />

          {/* Header Section */}
          <header className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent"
                  itemProp="name"
                >
                  Refund Policy
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 md:p-6 mb-6">
              <h2 className="text-lg md:text-xl font-semibold text-[#051d40] mb-3">
                Fair & Transparent Refund Process
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                At NexCore Alliance LLP, we are committed to providing fair and transparent 
                refund policies across all our services including ISRC, Code4Bharat, and 
                Education.Code4Bharat programs.
              </p>
            </div>
          </header>

          {/* Quick Reference Summary */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051d40] mb-6">
              Refund Policy Summary
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-[#051d40] mb-2">7-Day Window</h3>
                <p className="text-sm text-gray-600">Submit refund requests within 7 days of enrollment</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6 text-center border border-yellow-200">
                <CheckCircle className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-bold text-[#051d40] mb-2">25% Content Limit</h3>
                <p className="text-sm text-gray-600">Less than 25% course content accessed</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
                <RefreshCw className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-[#051d40] mb-2">10-Day Processing</h3>
                <p className="text-sm text-gray-600">Refunds processed within 10 business days</p>
              </div>
            </div>
          </section>

          {/* Detailed Policy Sections */}
          <section className="space-y-6 md:space-y-8 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051d40] mb-6">
              Detailed Refund Terms
            </h2>
            {refundSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className={`bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <header className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 
                      className="text-xl md:text-2xl font-semibold text-[#051d40] leading-tight"
                      itemProp="headline"
                    >
                      {section.title}
                    </h3>
                  </header>
                  <ul 
                    className="space-y-2 pl-14"
                    itemProp="articleBody"
                  >
                    {section.content.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-start gap-2 text-gray-700 text-sm md:text-base"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </section>

          {/* Service-Specific Policies */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051d40] mb-6">
              Service-Specific Refund Policies
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {serviceRefundPolicies.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={service.service}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-[#051d40]">{service.service}</h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{service.policy}</p>
                    <p className="text-blue-600 text-xs font-medium">{service.exception}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* How to Request Refund */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 md:p-8 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051d40] mb-6">
              How to Request a Refund
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#051d40] mb-3">Required Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Full name and enrollment/order ID</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Date of purchase/enrollment</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Reason for refund request</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Original payment method details</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#051d40] mb-3">Contact Methods</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:nexcorealiancellp@gmail.com" className="text-blue-600 hover:underline text-sm">
                      nexcorealiancellp@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <a href="tel:+919594430295" className="text-green-600 hover:underline text-sm">
                      +91 95944 30295
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-[#051d40] mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              Important Notes
            </h2>
            <div className="space-y-2 text-gray-700 text-sm md:text-base">
              <p>• Refund policies may vary for promotional offers and discounted courses</p>
              <p>• Processing time may extend during peak seasons or holidays</p>
              <p>• Refunds will be processed in the same currency as the original transaction</p>
              <p>• We reserve the right to decline refund requests that don't meet our policy criteria</p>
            </div>
          </section>

          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mt-8 pt-4 border-t border-gray-100"
          >
            <ol
              className="flex flex-wrap space-x-2 text-sm text-gray-500"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
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
              <li className="before:content-['/'] before:mr-2">
                <span className="text-gray-400">Refund Policy</span>
              </li>
            </ol>
          </nav>

          {/* Footer */}
          <footer className="text-center text-gray-500 text-sm border-t border-gray-200 pt-6 mt-6">
            <p>
              <strong>Document Version:</strong> 2.1 | 
              <strong> Effective Date:</strong> {lastUpdated} |
              <strong> Governing Law:</strong> Laws of India
            </p>
            <p className="mt-2">
              © 2024 NexCore Alliance LLP. All rights reserved.
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}