import React from "react";
import Head from "next/head";

export default function ProductPricing() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Product Pricing - Code4Bharat",
    "description": "Transparent pricing for Code4Bharat's coding bootcamp courses and programming training programs. Competitive rates with no hidden costs.",
    "url": "https://code4bharat.example.com/pricing",
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
          "name": "Pricing",
          "item": "https://code4bharat.example.com/pricing"
        }
      ]
    }
  };

  const coursePricingData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Code4Bharat Coding Bootcamp",
    "provider": {
      "@type": "Organization",
      "name": "NexCore-Alliance"
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Programming Course Pricing",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Full Stack Development Bootcamp",
            "description": "Comprehensive coding bootcamp covering frontend and backend development"
          },
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Pricing - Code4Bharat | Affordable Coding Bootcamp Courses in India</title>
        <meta
          name="description"
          content="Discover transparent pricing for Code4Bharat's coding bootcamp courses. Competitive rates for programming training with no hidden costs. View course fees and available discounts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Code4Bharat pricing, coding bootcamp fees, programming course cost India, affordable coding courses, NexCore Alliance pricing, full stack development cost, coding bootcamp India price, transparent pricing programming courses"
        />
        <meta name="author" content="NexCore-Alliance" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <link rel="canonical" href="https://code4bharat.example.com/pricing" />
        <meta charset="UTF-8" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Pricing - Code4Bharat | Affordable Coding Bootcamp Courses" />
        <meta
          property="og:description"
          content="Transparent pricing for Code4Bharat's coding bootcamp courses. Competitive rates for programming training with no hidden costs."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4D0BAQEnef6G5AdkIw/company-logo_200_200/company-logo_200_200/0/1735105659930/nexcore_alliance_logo?e=1743033600&v=beta&t=pXp39RKk3wVFwR1WPS7ArGZOnnO6khuD_ShWahSlFPc"
        />
        <meta
          property="og:url"
          content="https://code4bharat.example.com/pricing"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Code4Bharat Pricing | Affordable Coding Courses" />
        <meta name="twitter:description" content="Transparent pricing for coding bootcamp courses in India. No hidden costs, competitive rates." />

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
            __html: JSON.stringify(coursePricingData),
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
              Course Pricing & Fees
            </h1>
            <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transparent and competitive pricing for world-class coding education in India
            </p>
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex justify-center mt-6">
              <ol className="flex items-center space-x-2 text-gray-500">
                <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-800 font-semibold" aria-current="page">Pricing</li>
              </ol>
            </nav>
          </header>

          <section className="space-y-8 text-gray-700 text-lg">
            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="bg-blue-500 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#051d40] mb-3">Why Choose Code4Bharat?</h2>
                  <p className="text-xl leading-relaxed text-gray-700">
                    At <strong>NexCore-Alliance</strong>, our coding bootcamp courses are designed to deliver maximum value 
                    at competitive prices. We believe quality programming education should be accessible to aspiring 
                    developers across India.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
            <nav className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#051d40]">Pricing Information</h2>
              <div className="grid md:grid-cols-2 gap-4 text-blue-600">
                <a href="#transparent-pricing" className="hover:underline flex items-center">
                  <span className="mr-2">💰</span>Transparent Pricing Policy
                </a>
                <a href="#tax-inclusion" className="hover:underline flex items-center">
                  <span className="mr-2">🧾</span>Tax Inclusion Details
                </a>
                <a href="#discounts" className="hover:underline flex items-center">
                  <span className="mr-2">🎯</span>Discounts & Promotions
                </a>
                <a href="#price-changes" className="hover:underline flex items-center">
                  <span className="mr-2">📈</span>Price Change Policy
                </a>
              </div>
            </nav>

            {/* Pricing Details Sections */}
            <section id="transparent-pricing" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-green-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">1. Transparent Pricing Policy</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      All our coding bootcamp course prices are clearly listed on our website, ensuring complete transparency 
                      for prospective students. No hidden fees, no surprise charges.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">What's Included:</h3>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Complete course materials and resources</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Live instructor-led sessions</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Hands-on projects and assignments</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Career support and job placement assistance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="tax-inclusion" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-blue-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Tax Inclusion & GST Details</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      All displayed prices include applicable taxes as per Indian taxation laws, ensuring you know 
                      the exact amount you'll pay for your programming education.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Tax Information:</h3>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>GST (18%) included in all course fees</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>GST invoices provided for all transactions</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>No additional charges unless explicitly mentioned</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Compliant with Indian tax regulations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="discounts" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-purple-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-purple-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-purple-700 mb-4">3. Discounts & Promotions</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      We regularly offer special discounts and promotions to make quality coding education more accessible. 
                      All available offers are automatically applied at checkout.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-purple-800 mb-2">Current Offers:</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start"><span className="text-purple-500 mr-2">🎓</span>Early bird discounts for new batches</li>
                          <li className="flex items-start"><span className="text-purple-500 mr-2">👥</span>Group enrollment benefits</li>
                          <li className="flex items-start"><span className="text-purple-500 mr-2">🎯</span>Scholarship programs for deserving candidates</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-orange-800 mb-2">Special Categories:</h3>
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start"><span className="text-orange-500 mr-2">🎖️</span>Student and military discounts</li>
                          <li className="flex items-start"><span className="text-orange-500 mr-2">💼</span>Corporate training packages</li>
                          <li className="flex items-start"><span className="text-orange-500 mr-2">🔄</span>Referral program rewards</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="price-changes" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-orange-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-orange-700 mb-4">4. Price Change Policy</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      Course prices may be updated periodically to reflect market conditions and program enhancements. 
                      However, your investment is protected once enrollment is confirmed.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-800 mb-2">Price Protection Guarantee:</h3>
                      <ul className="space-y-2 text-orange-700">
                        <li className="flex items-start"><span className="text-orange-500 mr-2">🛡️</span>Confirmed enrollments are unaffected by price changes</li>
                        <li className="flex items-start"><span className="text-orange-500 mr-2">📧</span>Advance notice provided for any price updates</li>
                        <li className="flex items-start"><span className="text-orange-500 mr-2">⏰</span>Grace period offered for pending enrollments</li>
                        <li className="flex items-start"><span className="text-orange-500 mr-2">💯</span>Honor existing promotional rates for active campaigns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Options Section */}
            <section className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-center text-[#051d40] mb-6">Flexible Payment Options</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Credit/Debit Cards</h3>
                  <p className="text-gray-600 text-sm">Visa, Mastercard, RuPay accepted</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Digital Wallets</h3>
                  <p className="text-gray-600 text-sm">UPI, Paytm, PhonePe, Google Pay</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Installment Plans</h3>
                  <p className="text-gray-600 text-sm">EMI options available</p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-[#051d40] to-[#1976d2] text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
              <p className="text-xl mb-6 text-blue-100">
                View detailed pricing for individual courses on their respective pages or contact our admissions team for personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                
                <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#051d40] transition-colors">
                  Get Pricing Details
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-center text-[#051d40] mb-6">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Are there any hidden fees?</h3>
                  <p className="text-gray-600 text-sm">No, all prices are transparent and inclusive of applicable taxes.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Can I get a refund?</h3>
                  <p className="text-gray-600 text-sm">Yes, we offer a refund policy as per our terms of service.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Do you offer student discounts?</h3>
                  <p className="text-gray-600 text-sm">Yes, we provide special pricing for students and other eligible categories.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Is EMI available?</h3>
                  <p className="text-gray-600 text-sm">Yes, flexible EMI options are available for course payments.</p>
                </div>
              </div>
            </section>

            <footer className="text-center pt-8 border-t border-gray-200">
              <p className="text-xl text-gray-700 leading-relaxed">
                For detailed pricing information, please visit the respective course pages on our website or 
                <a href="/contact" className="text-blue-600 hover:underline font-semibold ml-1">contact our admissions team</a> 
                for personalized assistance.
              </p>
              <p className="text-gray-500 mt-4">
                All prices are in Indian Rupees (₹) and subject to change without prior notice.
              </p>
            </footer>
          </section>
        </article>
      </main>
    </>
  );
}