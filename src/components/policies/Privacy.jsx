import React from "react";
import Head from "next/head";

export default function PrivacyPolicy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Code4Bharat",
    "description": "Code4Bharat's comprehensive privacy policy detailing data collection, usage, and protection practices for our coding bootcamp and programming courses",
    "url": "https://code4bharat.example.com/privacy-policy",
    "publisher": {
      "@type": "Organization",
      "name": "Code4Bharat",
      "url": "https://code4bharat.example.com",
      "logo": "https://media.licdn.com/dms/image/v2/D4D0BAQEnef6G5AdkIw/company-logo_200_200/company-logo_200_200/0/1735105659930/nexcore_alliance_logo?e=1743033600&v=beta&t=pXp39RKk3wVFwR1WPS7ArGZOnnO6khuD_ShWahSlFPc"
    },
    "dateModified": "2025-09-26",
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Code4Bharat",
      "url": "https://code4bharat.example.com"
    }
  };

  return (
    <>
      <Head>
        <title>Privacy Policy | Code4Bharat - Data Protection & Student Privacy</title>
        <meta
          name="description"
          content="Discover how Code4Bharat safeguards your personal data. Our comprehensive privacy policy covers data collection, security measures, and your rights as a student. Updated 2025."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Privacy Policy, Code4Bharat, Data Protection, Student Privacy, Personal Information Security, Indian Coding Bootcamp Privacy, Programming Course Data Protection, GDPR Compliance India"
        />
        <meta name="author" content="NexCore-Alliance" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <link rel="canonical" href="https://code4bharat.example.com/privacy-policy" />
        <meta charset="UTF-8" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Privacy Policy | Code4Bharat - Data Protection & Student Privacy" />
        <meta
          property="og:description"
          content="Discover how Code4Bharat safeguards your personal data. Our comprehensive privacy policy covers data collection, security measures, and your rights as a student."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4D0BAQEnef6G5AdkIw/company-logo_200_200/company-logo_200_200/0/1735105659930/nexcore_alliance_logo?e=1743033600&v=beta&t=pXp39RKk3wVFwR1WPS7ArGZOnnO6khuD_ShWahSlFPc"
        />
        <meta
          property="og:url"
          content="https://code4bharat.example.com/privacy-policy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Code4Bharat" />
        <meta name="twitter:description" content="Learn how Code4Bharat protects your personal data and privacy rights." />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <main role="main" className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none">
        <article className="relative max-w-7xl mt-10 w-full bg-white shadow-2xl rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Decorative background blur - optimized for performance */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse will-change-transform"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse will-change-transform"></div>

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-center text-gray-600 text-lg">
              Last Updated: September 26, 2025 | Effective Date: September 26, 2025
            </p>
          </header>

          <section className="space-y-8 text-gray-700 text-lg">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-xl leading-relaxed">
                At <strong>Code4Bharat</strong>, we are committed to safeguarding your privacy and protecting your personal information. 
                This comprehensive privacy policy explains how we collect, use, store, and protect your data to ensure a secure and 
                transparent experience for all our students and users.
              </p>
            </div>

            <nav className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#051d40]">Table of Contents</h2>
              <ul className="grid md:grid-cols-2 gap-2 text-blue-600">
                <li><a href="#data-collection" className="hover:underline">1. Information We Collect</a></li>
                <li><a href="#data-usage" className="hover:underline">2. How We Use Your Data</a></li>
                <li><a href="#data-security" className="hover:underline">3. Data Security Measures</a></li>
                <li><a href="#third-party" className="hover:underline">4. Third-Party Data Sharing</a></li>
                <li><a href="#cookies" className="hover:underline">5. Cookie Usage Policy</a></li>
                <li><a href="#data-retention" className="hover:underline">6. Data Retention Period</a></li>
                <li><a href="#user-rights" className="hover:underline">7. Your Privacy Rights</a></li>
                <li><a href="#policy-updates" className="hover:underline">8. Policy Updates</a></li>
                <li><a href="#contact" className="hover:underline">9. Contact Information</a></li>
              </ul>
            </nav>

            <section id="data-collection" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-[#051d40] border-b-2 border-blue-200 pb-2">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect only the essential personal information required to provide you with our coding bootcamp and programming services, including:
              </p>
              <div className="bg-white border-l-4 border-blue-300 pl-6 py-4">
                <h3 className="text-xl font-semibold mb-3 text-[#1976d2]">Personal Information:</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Full name and contact details</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Email address for communication</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Phone number for course updates</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Educational background and experience level</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Payment and billing information</li>
                </ul>
              </div>
              <div className="bg-white border-l-4 border-green-300 pl-6 py-4 mt-4">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Technical Information:</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Device information and browser type</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>IP address and location data</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>Course progress and learning analytics</li>
                </ul>
              </div>
            </section>

            <section id="data-usage" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-[#051d40] border-b-2 border-blue-200 pb-2">
                2. How We Use Your Data
              </h2>
              <p className="mb-4">Your personal information is used strictly for legitimate business purposes, including:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-[#1976d2]">Course Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span>Processing course enrollment and payments</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span>Providing personalized learning experiences</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span>Tracking your progress and achievements</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Communication</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Sending course updates and announcements</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Providing customer support and assistance</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>Sharing important policy changes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="data-security" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-[#051d40] border-b-2 border-blue-200 pb-2">
                3. Data Security Measures
              </h2>
              <p className="mb-4">We implement comprehensive security measures to protect your personal information:</p>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-semibold mb-3 text-red-700">Technical Safeguards</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start"><span className="text-red-500 mr-2">🔒</span>Industry-standard SSL/TLS encryption for data transmission</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">🔒</span>Secure cloud storage with regular backups</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">🔒</span>Access controls and authentication systems</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">🔒</span>Regular security audits and vulnerability assessments</li>
                </ul>
              </div>
            </section>

            <section id="third-party" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-[#051d40] border-b-2 border-blue-200 pb-2">
                4. Third-Party Data Sharing Policy
              </h2>
              <p className="mb-4">Your personal data is never sold or shared with third parties except in these limited circumstances:</p>
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="text-yellow-600 mr-2">⚠️</span><strong>Payment Processing:</strong> Secure transaction processing through trusted payment gateways (Razorpay, Stripe)</li>
                  <li className="flex items-start"><span className="text-yellow-600 mr-2">⚠️</span><strong>Legal Requirements:</strong> When required by Indian law or legal proceedings</li>
                  <li className="flex items-start"><span className="text-yellow-600 mr-2">⚠️</span><strong>Service Providers:</strong> Authorized vendors who assist in course delivery (with strict confidentiality agreements)</li>
                </ul>
              </div>
            </section>

            <section id="cookies" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-[#051d40] border-b-2 border-blue-200 pb-2">
                5. Cookie Usage Policy
              </h2>
              <p className="mb-4">Our website uses cookies to enhance your learning experience:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">Essential Cookies</h3>
                  <p className="text-sm">Required for basic website functionality and course access</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">Analytics Cookies</h3>
                  <p className="text-sm">Help us understand user behavior and improve our platform</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-700 mb-2">Preference Cookies</h3>
                  <p className="text-sm">Remember your settings and personalize your experience</p>
                </div>
              </div>
            </section>

            <section id="data-retention" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-[#051d40] border-b-2 border-blue-200 pb-2">
                6. Data Retention Period
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">We retain your personal information only as long as necessary:</p>
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="text-gray-600 mr-2">📅</span><strong>Active Students:</strong> Throughout your course duration and 3 years after completion</li>
                  <li className="flex items-start"><span className="text-gray-600 mr-2">📅</span><strong>Payment Data:</strong> 7 years for tax and legal compliance purposes</li>
                  <li className="flex items-start"><span className="text-gray-600 mr-2">📅</span><strong>Marketing Data:</strong> Until you unsubscribe or request deletion</li>
                  <li className="flex items-start"><span className="text-gray-600 mr-2">📅</span><strong>Inactive Accounts:</strong> Automatically deleted after 5 years of inactivity</li>
                </ul>
              </div>
            </section>

            <section id="user-rights" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-[#051d40] border-b-2 border-blue-200 pb-2">
                7. Your Privacy Rights
              </h2>
              <p className="mb-4">Under Indian data protection laws and international standards, you have the right to:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Access Your Data:</strong>
                      <p className="text-gray-600">Request a copy of all personal information we hold about you</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Correct Inaccuracies:</strong>
                      <p className="text-gray-600">Update or modify incorrect personal information</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Delete Your Data:</strong>
                      <p className="text-gray-600">Request deletion of your personal information (subject to legal obligations)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Data Portability:</strong>
                      <p className="text-gray-600">Receive your data in a structured, machine-readable format</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Restrict Processing:</strong>
                      <p className="text-gray-600">Limit how we process your personal information</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Withdraw Consent:</strong>
                      <p className="text-gray-600">Opt-out of marketing communications at any time</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="policy-updates" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-[#051d40] border-b-2 border-blue-200 pb-2">
                8. Privacy Policy Updates
              </h2>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                <p className="mb-4">
                  <strong>NexCore-Alliance</strong> reserves the right to update this privacy policy to reflect changes in our practices, 
                  technology, or legal requirements. We are committed to transparency in all policy changes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="text-orange-500 mr-2">📢</span>All updates will be prominently displayed on our website</li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">📢</span>Significant changes will be communicated via email to registered users</li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">📢</span>We encourage periodic review of this policy to stay informed about your privacy rights</li>
                </ul>
              </div>
            </section>

            <section id="contact" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-[#051d40] border-b-2 border-blue-200 pb-2">
                9. Contact Information
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
                <p className="text-xl mb-6 text-center">
                  Have questions or concerns about this privacy policy? We're here to help!
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-[#1976d2] mb-2">Privacy Officer</h3>
                    <p className="text-gray-600">privacy@code4bharat.com</p>
                    <p className="text-sm text-gray-500 mt-2">Response within 48 hours</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-[#1976d2] mb-2">General Support</h3>
                    <p className="text-gray-600">support@code4bharat.com</p>
                    <p className="text-sm text-gray-500 mt-2">24/7 assistance available</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-[#1976d2] mb-2">Data Protection</h3>
                    <p className="text-gray-600">dpo@nexcore-alliance.com</p>
                    <p className="text-sm text-gray-500 mt-2">Legal compliance queries</p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-gray-600">
                    You can also reach us through our <a href="/contact" className="text-blue-600 hover:underline font-semibold">contact page</a> or 
                    review our <a href="/terms-of-service" className="text-blue-600 hover:underline font-semibold">Terms of Service</a>.
                  </p>
                </div>
              </div>
            </section>

            <footer className="bg-[#051d40] text-white p-8 rounded-xl mt-8">
              <div className="text-center">
                <p className="text-xl mb-4">
                  At <strong>NexCore-Alliance</strong> and <strong>Code4Bharat</strong>, 
                  your privacy and trust are our highest priorities.
                </p>
                <p className="text-blue-200">
                  We are committed to maintaining the highest standards of data protection and transparency 
                  in all our operations. Thank you for trusting us with your coding education journey.
                </p>
                <div className="mt-6 pt-4 border-t border-blue-800">
                  <p className="text-sm text-blue-300">
                    This policy is compliant with Indian IT Act 2000, Personal Data Protection Bill, and international privacy standards.
                  </p>
                </div>
              </div>
            </footer>
          </section>
        </article>
      </main>
    </>
  );
}