"use client"
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { FileText, Clock, Shield, AlertTriangle, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

export default function TermsAndConditions() {
  const [lastUpdated] = useState("January 15, 2024");
  const [isVisible, setIsVisible] = useState(false);

  // SEO Data
  const seoData = {
    title: "Terms and Conditions - NexCore Alliance LLP | Legal Terms for ISRC, Code4Bharat Services",
    description: "Read comprehensive Terms and Conditions for NexCore Alliance LLP services including ISRC competitions, Code4Bharat IT solutions, and Education.Code4Bharat training programs. Legal compliance and user rights explained.",
    keywords: "NexCore Alliance terms conditions, ISRC terms service, Code4Bharat legal agreement, IT training terms, Mumbai education legal, user agreement India, platform terms conditions",
    canonicalUrl: "https://www.nexcorealliance.com/terms-and-conditions",
    organization: "NexCore Alliance LLP"
  };

  // Structured Data for Legal Document
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions",
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
      }
    },
    "mainEntity": {
      "@type": "TermsOfService",
      "name": "Terms and Conditions",
      "dateModified": "2024-01-15T00:00:00Z",
      "applicableLocation": {
        "@type": "Country",
        "name": "India"
      }
    }
  };

  // Terms sections for better organization
  const termsSections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: CheckCircle,
      content: `By accessing or using our website (www.nexcorealliance.com) and services provided under the brands ISRC (International STEM and Robotics Championship), Code4Bharat, and Education.Code4Bharat, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our websites or services.`
    },
    {
      id: "eligibility", 
      title: "2. User Eligibility",
      icon: Shield,
      content: `Users must be at least 18 years old or have explicit parental/guardian consent to access and use our services. By using our platform, you represent and warrant that you have the legal capacity to enter into this agreement.`
    },
    {
      id: "accuracy",
      title: "3. Information Accuracy", 
      icon: AlertTriangle,
      content: `All users are required to provide accurate, complete, and up-to-date personal and payment details. You are responsible for maintaining the confidentiality of your account information. Falsified or misleading information may result in account suspension or termination without notice.`
    },
    {
      id: "intellectual-property",
      title: "4. Intellectual Property Rights",
      icon: Shield,
      content: `All content, materials, trademarks, logos, and courses on our platform are owned by NexCore Alliance LLP and/or its affiliates and are protected by copyright laws. Users may not reproduce, distribute, modify, or otherwise use any content without express written permission. Unauthorized sharing, duplication, or distribution is strictly prohibited and may lead to legal action.`
    },
    {
      id: "services",
      title: "5. Service Modifications and Availability", 
      icon: FileText,
      content: `NexCore Alliance LLP reserves the right to modify, suspend, or discontinue any service, course, or feature without prior notice. We strive to provide uninterrupted service but do not guarantee continuous availability. Scheduled maintenance and updates may temporarily affect service accessibility.`
    },
    {
      id: "liability",
      title: "6. Limitation of Liability",
      icon: AlertTriangle, 
      content: `NexCore Alliance LLP, including its brands ISRC, Code4Bharat, and Education.Code4Bharat, is not responsible for any indirect, incidental, consequential, or punitive damages arising from the use of our services. Users agree to use the platform at their own risk. Our total liability shall not exceed the amount paid by the user for the specific service in question.`
    },
    {
      id: "disputes",
      title: "7. Dispute Resolution and Governing Law",
      icon: Shield,
      content: `These Terms and Conditions are governed by the laws of India. Any disputes or claims arising from the use of our services shall be subject to the jurisdiction of Mumbai courts. We encourage users to first contact us directly to resolve any issues before pursuing legal action.`
    }
  ];

  useEffect(() => {
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json'; 
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Animation trigger
    const timer = setTimeout(() => setIsVisible(true), 100);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        {/* Enhanced Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={seoData.canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="NexCore Alliance LLP" />
        <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQEnef6G5AdkIw/company-logo_200_200/company-logo_200_200/0/1735105659930/nexcore_alliance_logo?e=1743033600&v=beta&t=pXp39RKk3wVFwR1WPS7ArGZOnnO6khuD_ShWahSlFPc" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NexCore Alliance LLP" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
      </Head>

      <main 
        className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <div className="relative max-w-7xl mt-6 md:mt-10 w-full bg-white shadow-2xl rounded-3xl p-6 md:p-12 lg:p-16 overflow-hidden">
          {/* Decorative background blur - Mobile optimized */}
          <div className="absolute -top-16 md:-top-24 -right-16 md:-right-24 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full blur-3xl opacity-20 md:opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-16 md:-bottom-24 -left-16 md:-left-24 w-48 h-48 md:w-72 md:h-72 bg-purple-200 rounded-full blur-3xl opacity-20 md:opacity-30 animate-pulse"></div>

          {/* Header Section */}
          <header className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#1976d2]" />
              </div>
              <div className="text-left">
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent"
                  itemProp="name"
                >
                  Terms and Conditions
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 mb-6">
              <h2 className="text-lg md:text-xl font-semibold text-[#051d40] mb-3">
                Welcome to NexCore Alliance LLP
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                By accessing or using our website and services provided under the brands 
                ISRC, Code4Bharat, and Education.Code4Bharat, you agree to comply with 
                and be bound by the following Terms and Conditions.
              </p>
            </div>
          </header>

          {/* Terms Sections */}
          <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
            {termsSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <section
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
                  <div 
                    className="text-gray-700 text-sm md:text-base leading-relaxed pl-14"
                    itemProp="articleBody"
                  >
                    {section.content}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Additional Important Information */}
          <section className="space-y-6 md:space-y-8">
            {/* Service-Specific Terms */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#051d40] mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                Service-Specific Terms
              </h3>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-[#051d40] mb-2">ISRC Events</h4>
                  <p className="text-sm text-gray-600">
                    Registration fees are non-refundable unless the event is canceled by ISRC. 
                    Age-based participation requirements must be met.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-[#051d40] mb-2">Code4Bharat Services</h4>
                  <p className="text-sm text-gray-600">
                    Custom service agreements apply. Project timelines depend on client 
                    cooperation and timely feedback provision.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-[#051d40] mb-2">Education Programs</h4>
                  <p className="text-sm text-gray-600">
                    Course fees are non-refundable once training begins. Job placement 
                    assistance provided but employment not guaranteed.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div 
              className="bg-gray-50 rounded-xl p-6 md:p-8"
              itemScope
              itemType="https://schema.org/ContactPoint"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#051d40] mb-6 text-center">
                Questions About These Terms?
              </h3>
              <p className="text-gray-700 text-center mb-6">
                If you have questions about these Terms and Conditions or need clarification 
                on any provision, please contact us:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Email</p>
                    <a 
                      href="mailto:nexcorealiancellp@gmail.com" 
                      className="text-[#1976d2] hover:underline text-sm"
                      itemProp="email"
                    >
                      nexcorealiancellp@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Phone</p>
                    <a 
                      href="tel:+919594430295" 
                      className="text-[#1976d2] hover:underline text-sm"
                      itemProp="telephone"
                    >
                      +91 95944 30295
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600 text-sm">Off BKC, Mumbai, India 400070</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Version Information */}
            <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-6">
              <p>
                <strong>Document Version:</strong> 2.1 | 
                <strong> Effective Date:</strong> {lastUpdated} |
                <strong> Governing Law:</strong> Laws of India
              </p>
              <p className="mt-2">
                © 2024 NexCore Alliance LLP. All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}