import React from "react";
import Head from "next/head";

export default function ShippingPolicy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Shipping and Delivery Policy - Code4Bharat",
    "description": "Comprehensive shipping and delivery policy for Code4Bharat course materials, certificates, and physical items. Fast delivery across India with tracking support.",
    "url": "https://code4bharat.example.com/shipping-policy",
    "publisher": {
      "@type": "Organization",
      "name": "NexCore-Alliance",
      "alternateName": "Code4Bharat",
      "url": "https://code4bharat.example.com",
      "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQEnef6G5AdkIw/company-logo_200_200/company-logo_200_200/0/1735105659930/nexcore_alliance_logo?e=1743033600&v=beta&t=pXp39RKk3wVFwR1WPS7ArGZOnnO6khuD_ShWahSlFPc"
    },
    "dateModified": "2025-09-26",
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Code4Bharat",
      "url": "https://code4bharat.example.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://code4bharat.example.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Shipping Policy",
          "item": "https://code4bharat.example.com/shipping-policy"
        }
      ]
    }
  };

  const deliveryServiceData = {
    "@context": "https://schema.org",
    "@type": "DeliveryService",
    "name": "Code4Bharat Course Materials Delivery",
    "provider": {
      "@type": "Organization",
      "name": "NexCore-Alliance"
    },
    "areaServed": "India",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://code4bharat.example.com",
      "serviceSmsNumber": "+91-XXXXXXXXXX"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Delivery Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Course Certificate Delivery",
            "description": "Physical delivery of course completion certificates"
          },
          "areaServed": "India",
          "availabilityStarts": "2025-09-26"
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Shipping Policy - Code4Bharat | Course Materials & Certificate Delivery</title>
        <meta
          name="description"
          content="Code4Bharat's comprehensive shipping and delivery policy for course materials, certificates, and physical items. Fast delivery across India with tracking support and transparent timelines."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Code4Bharat shipping policy, course certificate delivery, coding bootcamp materials shipping, NexCore Alliance delivery, course materials India delivery, programming certificate shipping, educational materials delivery policy"
        />
        <meta name="author" content="NexCore-Alliance" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <link rel="canonical" href="https://code4bharat.example.com/shipping-policy" />
        <meta charset="UTF-8" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Shipping Policy - Code4Bharat | Course Materials Delivery" />
        <meta
          property="og:description"
          content="Learn about Code4Bharat's shipping and delivery process for course materials and certificates. Fast, reliable delivery across India."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4D0BAQEnef6G5AdkIw/company-logo_200_200/company-logo_200_200/0/1735105659930/nexcore_alliance_logo?e=1743033600&v=beta&t=pXp39RKk3wVFwR1WPS7ArGZOnnO6khuD_ShWahSlFPc"
        />
        <meta
          property="og:url"
          content="https://code4bharat.example.com/shipping-policy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Code4Bharat Shipping Policy | Course Materials Delivery" />
        <meta name="twitter:description" content="Fast and reliable delivery of course materials and certificates across India." />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(deliveryServiceData),
          }}
        />
      </Head>

      <main role="main" className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none">
        <article className="relative max-w-7xl mt-10 w-full bg-white shadow-2xl rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Decorative background blur - optimized for performance */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse will-change-transform"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse will-change-transform"></div>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
              Shipping & Delivery Policy
            </h1>
            <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fast and reliable delivery of course materials and certificates across India
            </p>
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex justify-center mt-6">
              <ol className="flex items-center space-x-2 text-gray-500">
                <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-800 font-semibold" aria-current="page">Shipping Policy</li>
              </ol>
            </nav>
          </header>

          <section className="space-y-8 text-gray-700 text-lg">
            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="bg-blue-500 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#051d40] mb-3">Our Delivery Commitment</h2>
                  <p className="text-xl leading-relaxed text-gray-700">
                    At <strong>NexCore-Alliance</strong>, we ensure a seamless shipping and delivery process for 
                    course materials, certificates, and any physical items related to your coding education journey. 
                    Our comprehensive delivery policy ensures you receive everything you need, when you need it.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Ship */}
            <section className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-[#051d40] mb-6">What We Ship</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-green-700 mb-2">Course Certificates</h3>
                  <p className="text-gray-600">Official completion certificates for coding bootcamp courses</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-blue-700 mb-2">Study Materials</h3>
                  <p className="text-gray-600">Physical books, handbooks, and reference materials</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-purple-700 mb-2">Welcome Kits</h3>
                  <p className="text-gray-600">Branded merchandise and starter kits for new students</p>
                </div>
              </div>
            </section>

            {/* Quick Navigation */}
            <nav className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#051d40]">Shipping Information</h2>
              <div className="grid md:grid-cols-2 gap-4 text-blue-600">
                <a href="#shipping-timeline" className="hover:underline flex items-center">
                  <span className="mr-2">⏰</span>Shipping Timeline
                </a>
                <a href="#delivery-areas" className="hover:underline flex items-center">
                  <span className="mr-2">🌍</span>Delivery Coverage
                </a>
                <a href="#shipping-costs" className="hover:underline flex items-center">
                  <span className="mr-2">💰</span>Shipping Costs
                </a>
                <a href="#tracking" className="hover:underline flex items-center">
                  <span className="mr-2">📦</span>Order Tracking
                </a>
              </div>
            </nav>

            {/* Detailed Sections */}
            <section id="shipping-timeline" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-green-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">1. Processing & Shipping Timeline</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      We process all orders efficiently to ensure timely delivery of your course materials and certificates.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">Processing Time:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start"><span className="text-green-500 mr-2">📋</span>Course certificates: <strong>3-5 business days</strong></li>
                          <li className="flex items-start"><span className="text-green-500 mr-2">📚</span>Study materials: <strong>2-3 business days</strong></li>
                          <li className="flex items-start"><span className="text-green-500 mr-2">🎁</span>Welcome kits: <strong>1-2 business days</strong></li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">Shipping Time:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start"><span className="text-blue-500 mr-2">🚚</span>Standard delivery: <strong>7-10 business days</strong></li>
                          <li className="flex items-start"><span className="text-blue-500 mr-2">⚡</span>Express delivery: <strong>3-5 business days</strong></li>
                          <li className="flex items-start"><span className="text-blue-500 mr-2">🏃</span>Priority delivery: <strong>1-2 business days</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="delivery-areas" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-blue-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Delivery Coverage Areas</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      We provide comprehensive delivery coverage across India through our network of trusted courier partners.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-2">🏙️</div>
                        <h3 className="font-semibold text-blue-800 mb-1">Metro Cities</h3>
                        <p className="text-sm text-blue-700">Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad</p>
                        <p className="text-xs text-blue-600 mt-2">1-3 business days</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">🏘️</div>
                        <h3 className="font-semibold text-green-800 mb-1">Tier 2 Cities</h3>
                        <p className="text-sm text-green-700">Pune, Ahmedabad, Jaipur, Lucknow, Kanpur, Nagpur</p>
                        <p className="text-xs text-green-600 mt-2">3-5 business days</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600 mb-2">🏞️</div>
                        <h3 className="font-semibold text-orange-800 mb-1">Rural Areas</h3>
                        <p className="text-sm text-orange-700">Small towns and villages across India</p>
                        <p className="text-xs text-orange-600 mt-2">7-10 business days</p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-yellow-800 text-sm">
                        <strong>Note:</strong> Delivery times may vary during festive seasons, natural calamities, or due to courier service limitations in remote areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="shipping-costs" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-purple-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-purple-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-purple-700 mb-4">3. Transparent Shipping Costs</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      All shipping charges are clearly displayed at checkout with no hidden fees. We strive to keep delivery costs affordable.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-purple-800 mb-3">Free Shipping Eligibility:</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start"><span className="text-purple-500 mr-2">✓</span>Course enrollments above ₹10,000</li>
                          <li className="flex items-start"><span className="text-purple-500 mr-2">✓</span>Premium course packages</li>
                          <li className="flex items-start"><span className="text-purple-500 mr-2">✓</span>Corporate training orders</li>
                          <li className="flex items-start"><span className="text-purple-500 mr-2">✓</span>Bulk material orders</li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-indigo-800 mb-3">Standard Charges:</h3>
                        <ul className="space-y-2 text-indigo-700">
                          <li className="flex items-start"><span className="text-indigo-500 mr-2">📦</span>Certificates: ₹50-100</li>
                          <li className="flex items-start"><span className="text-indigo-500 mr-2">📚</span>Study materials: ₹100-200</li>
                          <li className="flex items-start"><span className="text-indigo-500 mr-2">⚡</span>Express delivery: +₹200</li>
                          <li className="flex items-start"><span className="text-indigo-500 mr-2">🏃</span>Priority delivery: +₹500</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="tracking" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-orange-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-orange-700 mb-4">4. Order Tracking & Updates</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      Stay informed about your order status with real-time tracking and regular updates throughout the delivery process.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-orange-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-orange-800 mb-3">Tracking Features:</h3>
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start"><span className="text-orange-500 mr-2">📧</span>Email notifications for all status updates</li>
                          <li className="flex items-start"><span className="text-orange-500 mr-2">📱</span>SMS alerts for dispatch and delivery</li>
                          <li className="flex items-start"><span className="text-orange-500 mr-2">🔗</span>Direct tracking links from courier partners</li>
                          <li className="flex items-start"><span className="text-orange-500 mr-2">🌐</span>Online order status portal</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-red-800 mb-3">Delivery Confirmation:</h3>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><span className="text-red-500 mr-2">📞</span>Delivery agent contact for scheduling</li>
                          <li className="flex items-start"><span className="text-red-500 mr-2">✅</span>Digital proof of delivery</li>
                          <li className="flex items-start"><span className="text-red-500 mr-2">📸</span>Photo confirmation of delivered items</li>
                          <li className="flex items-start"><span className="text-red-500 mr-2">⭐</span>Feedback collection post-delivery</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Special Situations */}
            <section className="bg-yellow-50 p-8 rounded-xl border border-yellow-200">
              <h2 className="text-2xl font-bold text-center text-yellow-800 mb-6">Special Delivery Situations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-3 flex items-center">
                    <span className="text-yellow-600 mr-2">🏢</span>Corporate Orders
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Bulk orders for corporate training programs receive priority processing and dedicated account management with flexible delivery options.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-3 flex items-center">
                    <span className="text-yellow-600 mr-2">🌍</span>International Delivery
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Limited international shipping available for certificates. Additional customs duties and extended timelines may apply.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-3 flex items-center">
                    <span className="text-yellow-600 mr-2">❄️</span>Perishable Materials
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Temperature-sensitive materials are shipped using specialized packaging and expedited delivery to maintain quality.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-3 flex items-center">
                    <span className="text-yellow-600 mr-2">🔄</span>Return Requests
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Damaged or incorrect items can be returned within 7 days. Return shipping is covered by us for eligible cases.
                  </p>
                </div>
              </div>
            </section>

            {/* Courier Partners */}
            <section className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-center text-[#051d40] mb-6">Our Trusted Courier Partners</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">BlueDart</h3>
                  <p className="text-gray-600 text-sm">Express delivery nationwide</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">DTDC</h3>
                  <p className="text-gray-600 text-sm">Reliable pan-India coverage</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Delhivery</h3>
                  <p className="text-gray-600 text-sm">Technology-driven logistics</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">India Post</h3>
                  <p className="text-gray-600 text-sm">Government postal service</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white p-8 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-[#051d40] mb-8">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">What if my package is damaged during shipping?</h3>
                    <p className="text-gray-600 text-sm">
                      We provide full insurance coverage for all shipments. Report damage within 24 hours of delivery for immediate replacement or refund.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Can I change my delivery address after placing an order?</h3>
                    <p className="text-gray-600 text-sm">
                      Address changes are possible before dispatch. Contact our support team immediately with your order number and new address details.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Do you deliver on weekends and holidays?</h3>
                    <p className="text-gray-600 text-sm">
                      Our courier partners provide weekend delivery in major cities. Holiday deliveries depend on local courier service availability.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">What happens if I'm not available during delivery?</h3>
                    <p className="text-gray-600 text-sm">
                      The courier will attempt delivery 3 times. After that, packages are held at the local courier office for 7 days before return.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Can someone else receive my package?</h3>
                    <p className="text-gray-600 text-sm">
                      Yes, any adult at the delivery address can receive the package. Valid ID may be required for high-value items.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">How do I track my order?</h3>
                    <p className="text-gray-600 text-sm">
                      Tracking details are sent via email and SMS once your order is dispatched. Use the tracking number on the courier partner's website.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Customer Support */}
            <section className="bg-gradient-to-r from-[#051d40] to-[#1976d2] text-white p-8 rounded-xl">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-4">Need Help with Your Order?</h2>
                <p className="text-xl text-blue-100">
                  Our dedicated shipping support team is here to assist you with any delivery-related concerns.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <a href="mailto:nexcorealliance@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                    nexcorealliance@gmail.com
                  </a>
                  <p className="text-blue-100 text-sm mt-2">Response within 6 hours</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <a href="tel:+ 91 9594430295" className="text-blue-200 hover:text-white transition-colors">
                    +91 9594430295
                  </a>
                  <p className="text-blue-100 text-sm mt-2">Monday-Friday, 9 AM-6 PM</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <a href="/contact" className="text-blue-200 hover:text-white transition-colors">
                    Start Chat
                  </a>
                  <p className="text-blue-100 text-sm mt-2">Real-time assistance</p>
                </div>
              </div>
            </section>

            {/* Important Notes */}
            <section className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
              <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Important Shipping Notes
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Ensure accurate delivery address to avoid delays</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Keep your phone number active for delivery coordination</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Check package contents immediately upon delivery</li>
                </ul>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Report any issues within 24 hours of delivery</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Keep delivery receipts for warranty claims</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Weather conditions may affect delivery schedules</li>
                </ul>
              </div>
            </section>

            <footer className="text-center pt-8 border-t border-gray-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                For any shipping or delivery-related concerns, please contact us at{" "}
                <a 
                  href="mailto:nexcorealliance@gmail.com" 
                  className="text-blue-600 hover:underline font-semibold"
                  aria-label="Email NexCore-Alliance for shipping support"
                >
                  nexcorealliance@gmail.com
                </a>
                . We're here to assist you with all your delivery needs.
              </p>
              <div className="flex justify-center space-x-6 text-blue-600">
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
                <a href="/return-policy" className="hover:underline">Return Policy</a>
                <a href="/contact" className="hover:underline">Contact Us</a>
              </div>
              <p className="text-gray-500 mt-4 text-sm">
                This shipping policy is effective as of September 26, 2025, and applies to all orders placed through Code4Bharat.
              </p>
            </footer>
          </section>
        </article>
      </main>
    </>
  );
}