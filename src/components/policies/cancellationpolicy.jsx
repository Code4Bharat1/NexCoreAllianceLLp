import React from "react";
import Head from "next/head";

export default function CancellationPolicy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cancellation Policy - Code4Bharat",
    "description": "Comprehensive cancellation and refund policy for Code4Bharat coding bootcamp courses. Transparent process with clear eligibility criteria and refund timelines.",
    "url": "https://code4bharat.example.com/cancellation-policy",
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
          "name": "Cancellation Policy",
          "item": "https://code4bharat.example.com/cancellation-policy"
        }
      ]
    }
  };

  const refundPolicyData = {
    "@context": "https://schema.org",
    "@type": "MerchantReturnPolicy",
    "name": "Code4Bharat Course Cancellation Policy",
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "merchantReturnDays": 30,
    "returnMethod": "https://schema.org/ReturnByMail",
    "returnFees": "https://schema.org/FreeReturn",
    "refundType": "https://schema.org/FullRefund",
    "itemCondition": "https://schema.org/NewCondition",
    "applicableCountry": "IN",
    "merchant": {
      "@type": "Organization",
      "name": "NexCore-Alliance"
    }
  };

  return (
    <>
      <Head>
        <title>Cancellation Policy - Code4Bharat | Course Refund & Cancellation Terms</title>
        <meta
          name="description"
          content="Code4Bharat's transparent cancellation and refund policy for coding bootcamp courses. Learn about eligibility criteria, refund timelines, and cancellation procedures for programming courses."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Code4Bharat cancellation policy, coding bootcamp refund policy, course cancellation terms, programming course refund, NexCore Alliance cancellation, course refund eligibility, coding course cancellation procedure"
        />
        <meta name="author" content="NexCore-Alliance" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <link rel="canonical" href="https://code4bharat.example.com/cancellation-policy" />
        <meta charSet="UTF-8" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Cancellation Policy - Code4Bharat | Course Refund Terms" />
        <meta
          property="og:description"
          content="Transparent cancellation and refund policy for Code4Bharat coding courses. Clear procedures and fair refund terms for students."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4D0BAQEnef6G5AdkIw/company-logo_200_200/company-logo_200_200/0/1735105659930/nexcore_alliance_logo?e=1743033600&v=beta&t=pXp39RKk3wVFwR1WPS7ArGZOnnO6khuD_ShWahSlFPc"
        />
        <meta
          property="og:url"
          content="https://code4bharat.example.com/cancellation-policy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Code4Bharat Cancellation Policy | Fair Refund Terms" />
        <meta name="twitter:description" content="Learn about our transparent course cancellation and refund procedures." />

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
            __html: JSON.stringify(refundPolicyData),
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
              Cancellation & Refund Policy
            </h1>
            <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fair and transparent cancellation terms for all Code4Bharat coding courses
            </p>
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex justify-center mt-6">
              <ol className="flex items-center space-x-2 text-gray-500">
                <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-800 font-semibold" aria-current="page">Cancellation Policy</li>
              </ol>
            </nav>
          </header>

          <section className="space-y-8 text-gray-700 text-lg">
            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="bg-blue-500 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#051d40] mb-3">Our Commitment to Fair Cancellation</h2>
                  <p className="text-xl leading-relaxed text-gray-700">
                    At <strong>NexCore-Alliance</strong>, we understand that circumstances can change. Our transparent and 
                    user-friendly cancellation process ensures you have flexibility while maintaining fairness for all students. 
                    We're committed to making the cancellation process as straightforward as possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Overview */}
            <section className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-[#051d40] mb-6 text-center">Cancellation Policy Overview</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-green-700 mb-2">30-Day Window</h3>
                  <p className="text-gray-600">Full refund available within 30 days of enrollment</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-blue-700 mb-2">25% Progress Limit</h3>
                  <p className="text-gray-600">Eligible for refund if less than 25% course completed</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-purple-700 mb-2">Email Submission</h3>
                  <p className="text-gray-600">All requests must be submitted via email for processing</p>
                </div>
              </div>
            </section>

            {/* Quick Navigation */}
            <nav className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#051d40]">Policy Details</h2>
              <div className="grid md:grid-cols-2 gap-4 text-blue-600">
                <a href="#submission-process" className="hover:underline flex items-center">
                  <span className="mr-2">📧</span>Cancellation Request Process
                </a>
                <a href="#eligibility-criteria" className="hover:underline flex items-center">
                  <span className="mr-2">✅</span>Refund Eligibility Criteria
                </a>
                <a href="#refund-timeline" className="hover:underline flex items-center">
                  <span className="mr-2">⏰</span>Refund Processing Timeline
                </a>
                <a href="#special-circumstances" className="hover:underline flex items-center">
                  <span className="mr-2">🌟</span>Special Circumstances
                </a>
              </div>
            </nav>

            {/* Detailed Sections */}
            <section id="submission-process" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-green-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">1. Cancellation Request Submission Process</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      To ensure proper documentation and processing, all cancellation requests must be submitted in writing through our official channels.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-3">Required Information:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start"><span className="text-green-500 mr-2">📝</span>Full name and registered email address</li>
                          <li className="flex items-start"><span className="text-green-500 mr-2">🆔</span>Student ID or enrollment number</li>
                          <li className="flex items-start"><span className="text-green-500 mr-2">📚</span>Course name and batch details</li>
                          <li className="flex items-start"><span className="text-green-500 mr-2">📅</span>Enrollment date and payment receipt</li>
                          <li className="flex items-start"><span className="text-green-500 mr-2">📋</span>Reason for cancellation (optional)</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-3">Submission Methods:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">📧</span>
                            Email: <a href="mailto:nexcorealliance@gmail.com" className="underline">nexcorealliance@gmail.com</a>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">📞</span>
                            Phone: +91-95944 30295 (followed by email confirmation)
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">💬</span>
                            Student portal cancellation form
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">🏢</span>
                            In-person at our office (by appointment)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-300">
                      <p className="text-green-800 text-sm">
                        <strong>Processing Time:</strong> Cancellation requests are acknowledged within 24 hours and processed within 3-5 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="eligibility-criteria" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-blue-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">2. Refund Eligibility Criteria</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      Our refund policy is designed to be fair to both students and the institution. Eligibility depends on course progress and timing of the request.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                          <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">1</span>
                          Full Refund Eligibility
                        </h3>
                        <ul className="space-y-2 text-blue-700 ml-8">
                          <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span>Cancellation within 7 days of enrollment (cooling-off period)</li>
                          <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span>Course hasn't started yet</li>
                          <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span>Technical issues preventing course access (our fault)</li>
                          <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span>Course cancellation by Code4Bharat</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                          <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">2</span>
                          Partial Refund Eligibility
                        </h3>
                        <ul className="space-y-2 text-green-700 ml-8">
                          <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Less than 25% of course content accessed</li>
                          <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Within 30 days of course commencement</li>
                          <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>No assignments or projects submitted</li>
                          <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Medical emergencies with documentation</li>
                        </ul>
                        <div className="mt-3 p-3 bg-green-100 rounded">
                          <p className="text-green-800 text-sm">
                            <strong>Refund Amount:</strong> 75% of paid fees after deducting processing and administrative charges
                          </p>
                        </div>
                      </div>

                      <div className="bg-red-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-red-800 mb-3 flex items-center">
                          <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">3</span>
                          No Refund Situations
                        </h3>
                        <ul className="space-y-2 text-red-700 ml-8">
                          <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>More than 25% of course content accessed</li>
                          <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>After 30 days from course commencement</li>
                          <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>Assignments or projects submitted</li>
                          <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>Certificate of completion issued</li>
                          <li className="flex items-start"><span className="text-red-500 mr-2">✗</span>Course completed successfully</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="refund-timeline" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-purple-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-purple-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-purple-700 mb-4">3. Refund Processing Timeline & Fees</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      We strive to process refunds efficiently while maintaining transparency about any applicable fees and timelines.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-purple-800 mb-3">Processing Timeline:</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</div>
                            <div>
                              <p className="font-medium text-purple-700">Request Review</p>
                              <p className="text-purple-600 text-sm">3-5 business days</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</div>
                            <div>
                              <p className="font-medium text-purple-700">Approval & Processing</p>
                              <p className="text-purple-600 text-sm">2-3 business days</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</div>
                            <div>
                              <p className="font-medium text-purple-700">Bank Transfer</p>
                              <p className="text-purple-600 text-sm">5-10 business days</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-orange-800 mb-3">Applicable Fees:</h3>
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex justify-between">
                            <span>Administrative Fee:</span>
                            <span className="font-medium">₹500</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Payment Gateway Charges:</span>
                            <span className="font-medium">2-3%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Processing Fee:</span>
                            <span className="font-medium">₹200</span>
                          </li>
                          <li className="flex justify-between border-t pt-2 mt-2">
                            <span className="font-semibold">Total Deduction:</span>
                            <span className="font-bold">₹700 + Gateway %</span>
                          </li>
                        </ul>
                        <div className="mt-3 p-3 bg-orange-100 rounded">
                          <p className="text-orange-800 text-sm">
                            <strong>Note:</strong> Fees are waived for cancellations within the 7-day cooling-off period
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="special-circumstances" className="scroll-mt-20">
              <div className="bg-white border-l-4 border-indigo-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-indigo-500 rounded-full p-3 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-indigo-700 mb-4">4. Special Circumstances & Exceptions</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      We understand that exceptional situations may arise. Our team evaluates each case individually to provide fair solutions.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-indigo-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-indigo-800 mb-3">Medical Emergencies:</h3>
                        <ul className="space-y-2 text-indigo-700">
                          <li className="flex items-start"><span className="text-indigo-500 mr-2">🏥</span>Hospitalization with medical certificates</li>
                          <li className="flex items-start"><span className="text-indigo-500 mr-2">👨‍⚕️</span>Doctor's recommendation for rest</li>
                          <li className="flex items-start"><span className="text-indigo-500 mr-2">🦽</span>Disability affecting course participation</li>
                          <li className="flex items-start"><span className="text-indigo-500 mr-2">💊</span>Mental health conditions with documentation</li>
                        </ul>
                        <div className="mt-3 p-3 bg-indigo-100 rounded">
                          <p className="text-indigo-800 text-sm">
                            <strong>Benefit:</strong> Extended refund window and reduced fees
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-teal-50 p-6 rounded-lg">
                        <h3 className="font-semibold text-teal-800 mb-3">Life Circumstances:</h3>
                        <ul className="space-y-2 text-teal-700">
                          <li className="flex items-start"><span className="text-teal-500 mr-2">👪</span>Family emergencies or bereavements</li>
                          <li className="flex items-start"><span className="text-teal-500 mr-2">💼</span>Sudden job loss or financial hardship</li>
                          <li className="flex items-start"><span className="text-teal-500 mr-2">🏠</span>Relocation to areas without internet</li>
                          <li className="flex items-start"><span className="text-teal-500 mr-2">⚖️</span>Legal proceedings requiring attention</li>
                        </ul>
                        <div className="mt-3 p-3 bg-teal-100 rounded">
                          <p className="text-teal-800 text-sm">
                            <strong>Evaluation:</strong> Case-by-case assessment with documentation
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                      <h3 className="font-semibold text-yellow-800 mb-3">Course Transfer Option:</h3>
                      <p className="text-yellow-700 mb-3">
                        Instead of cancellation, students may transfer to a future batch within 6 months at no additional cost.
                      </p>
                      <ul className="space-y-1 text-yellow-700">
                        <li className="flex items-start"><span className="text-yellow-500 mr-2">•</span>One free transfer allowed per enrollment</li>
                        <li className="flex items-start"><span className="text-yellow-500 mr-2">•</span>Subject to seat availability in target batch</li>
                        <li className="flex items-start"><span className="text-yellow-500 mr-2">•</span>Course progress is preserved where applicable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Refund Methods */}
            <section className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-center text-[#051d40] mb-6">Refund Payment Methods</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Original Payment Method</h3>
                  <p className="text-gray-600 text-sm">Refunded to the same card/account used for payment</p>
                  <div className="mt-2 text-xs text-blue-600">5-10 business days</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Bank Transfer</h3>
                  <p className="text-gray-600 text-sm">Direct transfer to provided bank account</p>
                  <div className="mt-2 text-xs text-green-600">3-5 business days</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Digital Wallets</h3>
                  <p className="text-gray-600 text-sm">UPI, Paytm, PhonePe, Google Pay</p>
                  <div className="mt-2 text-xs text-purple-600">1-3 business days</div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white p-8 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-center text-[#051d40] mb-8">Cancellation FAQ</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Can I cancel my course if I've already started attending classes?</h3>
                    <p className="text-gray-600 text-sm">
                      Yes, you can cancel within 30 days if you've accessed less than 25% of the course content. Partial refunds apply after deducting applicable fees.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">How is course progress calculated?</h3>
                    <p className="text-gray-600 text-sm">
                      Progress is measured by lessons completed, assignments submitted, and live sessions attended. Our system tracks this automatically.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">What if I paid using EMI?</h3>
                    <p className="text-gray-600 text-sm">
                      EMI cancellations are handled case-by-case. Refunds are processed after settling with the financing partner, which may take longer.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Can I get a refund for add-on services?</h3>
                    <p className="text-gray-600 text-sm">
                      Add-on services like career coaching or certification fees are refundable only if unused and within the same eligibility criteria.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Is there a cooling-off period?</h3>
                    <p className="text-gray-600 text-sm">
                      Yes, you have 7 days from enrollment to cancel with a full refund, regardless of course progress, with minimal processing fees.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">What happens to my course materials after cancellation?</h3>
                    <p className="text-gray-600 text-sm">
                      Access to course materials and student portal is revoked immediately upon cancellation processing. Downloaded materials should be deleted.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Can I appeal a cancellation decision?</h3>
                    <p className="text-gray-600 text-sm">
                      Yes, appeals can be submitted within 15 days of the decision. Our academic committee reviews appeals with additional documentation.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Do cancellation fees apply to all courses?</h3>
                    <p className="text-gray-600 text-sm">
                      Standard fees apply to most courses. Premium and specialized courses may have different fee structures mentioned in their specific terms.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Support */}
            <section className="bg-gradient-to-r from-[#051d40] to-[#1976d2] text-white p-8 rounded-xl">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-4">Need Help with Cancellation?</h2>
                <p className="text-xl text-blue-100">
                  Our support team is here to guide you through the cancellation process and answer any questions you may have.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Email Cancellations</h3>
                  <a href="mailto:nexcorealliance@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                    nexcorealliance@gmail.com
                  </a>
                  <p className="text-blue-100 text-sm mt-2">Primary channel for all cancellation requests</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <a href="tel:+91 9594430295" className="text-blue-200 hover:text-white transition-colors">
                    +91-9594430295
                  </a>
                  <p className="text-blue-100 text-sm mt-2">Monday-Friday, 9 AM-6 PM IST</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Student Portal</h3>
                  <a href="/student-portal" className="text-blue-200 hover:text-white transition-colors">
                    Login to Portal
                  </a>
                  <p className="text-blue-100 text-sm mt-2">Submit cancellation requests online</p>
                </div>
              </div>
            </section>

            {/* Important Reminders */}
            <section className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
              <h2 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Important Cancellation Reminders
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2 text-yellow-700">
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">⚠️</span>Submit cancellation requests as early as possible</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">⚠️</span>Keep all payment receipts and enrollment documents</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">⚠️</span>Check your course progress before requesting cancellation</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">⚠️</span>Consider course transfer option before cancellation</li>
                </ul>
                <ul className="space-y-2 text-yellow-700">
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">⚠️</span>Provide accurate bank details for refund processing</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">⚠️</span>Allow adequate time for refund processing</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">⚠️</span>Read course-specific cancellation terms carefully</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2">⚠️</span>Contact support for clarification on any doubts</li>
                </ul>
              </div>
            </section>

            <footer className="text-center pt-8 border-t border-gray-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                We understand that circumstances can change, and we're committed to making the cancellation process as smooth as possible. 
                For assistance or queries, please contact our support team at{" "}
                <a 
                  href="mailto:nexcorealliance@gmail.com" 
                  className="text-blue-600 hover:underline font-semibold"
                  aria-label="Email NexCore-Alliance for cancellation support"
                >
                  nexcorealliance@gmail.com
                </a>
                . We're here to help.
              </p>
              <div className="flex justify-center space-x-6 text-blue-600 mb-4">
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
                <a href="/refund-policy" className="hover:underline">Refund Policy</a>
                <a href="/contact" className="hover:underline">Contact Us</a>
              </div>
              <p className="text-gray-500 text-sm">
                This cancellation policy is effective as of September 26, 2025, and applies to all Code4Bharat course enrollments. 
                Terms may vary for specific courses or promotional offers.
              </p>
            </footer>
          </section>
        </article>
      </main>
    </>
  );
}