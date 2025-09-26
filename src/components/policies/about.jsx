"use client"
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Target, BookOpen, Lightbulb, Users, Award, TrendingUp, Globe } from "lucide-react";

// Reusable ContactSection component
const ContactSection = ({
  email = "nexcorealiancellp@gmail.com",
  phone = "+91 95944 30295",
  address = "Mumbai, India",
  mapLink = "https://www.google.com/maps/place/Mumbai,+India"
}) => {
  return (
    <section
      className="text-center bg-gray-50 rounded-2xl p-6 md:p-8"
      itemProp="contactPoint"
      itemScope
      itemType="https://schema.org/ContactPoint"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-[#051d40] mb-4">
        Ready to Start Your Journey?
      </h3>
      <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto">
        Join thousands of students who have transformed their careers with NexCore Alliance. 
        Contact us today to learn more about our programs.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm md:text-base">
        <a
          href={`mailto:${email}`}
          itemProp="email"
          className="text-[#1976d2] font-medium hover:underline"
        >
          {email}
        </a>
        <span className="hidden sm:inline text-gray-400">|</span>
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          itemProp="telephone"
          className="text-[#1976d2] font-medium hover:underline"
        >
          {phone}
        </a>
        <span className="hidden sm:inline text-gray-400">|</span>
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          itemProp="address"
          className="text-gray-600 hover:underline"
        >
          {address}
        </a>
      </div>
    </section>
  );
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  // SEO Data
  const seoData = {
    title: "About NexCore Alliance LLP - Leading IT Education & Training Provider | ISRC, Code4Bharat",
    description: "Learn about NexCore Alliance LLP's mission to empower students with future-ready skills through innovative education solutions, coding programs, and market intelligence training in Mumbai, India.",
    keywords: "NexCore Alliance about, IT education Mumbai, coding training programs, market intelligence courses, ISRC robotics, Code4Bharat services, student skill development, professional training India",
    canonicalUrl: "https://www.nexcorealliance.com/about",
    organization: "NexCore Alliance LLP",
    foundingYear: "2020",
    location: "Mumbai, India"
  };

  // Company statistics for credibility
  const companyStats = [
    { number: "1000+", label: "Students Trained", icon: Users },
    { number: "50+", label: "Industry Partners", icon: Globe },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "5+", label: "Years Experience", icon: TrendingUp }
  ];

  // Core services with SEO-friendly descriptions
  const coreServices = [
    {
      icon: Target,
      title: "Mission-Driven Education",
      description: "Focused on equipping students with industry-relevant skills for competitive advantage in today's market.",
      details: [
        "Industry-aligned curriculum development",
        "Real-world project implementation",
        "Career-focused skill building"
      ]
    },
    {
      icon: BookOpen,
      title: "Comprehensive Training Programs",
      description: "Specialized courses designed for modern industry requirements and career growth.",
      details: [
        "Advanced coding and programming courses",
        "Market intelligence and data analytics",
        "Professional development workshops"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovative Learning Methods",
      description: "Results-oriented approach with inclusive and tailored educational solutions.",
      details: [
        "Interactive learning environments",
        "Personalized course pathways",
        "Hands-on practical training"
      ]
    },
    {
      icon: Users,
      title: "Expert Mentorship Team",
      description: "Dedicated professionals committed to student success and career advancement.",
      details: [
        "One-on-one mentoring sessions",
        "Industry expert guidance",
        "Continuous career support"
      ]
    }
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NexCore Alliance LLP",
    "alternateName": ["NexCore Alliance", "Nexcore Alliance"],
    "url": "https://www.nexcorealliance.com",
    "logo": "https://www.nexcorealliance.com/logo.png",
    "description": seoData.description,
    "foundingDate": seoData.foundingYear,
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
      "contactType": "customer service",
      "email": "nexcorealiancellp@gmail.com",
      "areaServed": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/nexcore-alliance"
    ],
    "brand": [
      {
        "@type": "Brand",
        "name": "ISRC - International STEM and Robotics Championship"
      },
      {
        "@type": "Brand",
        "name": "Code4Bharat"
      },
      {
        "@type": "Brand",
        "name": "Education.Code4Bharat"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": [
      "IT Training",
      "Educational Services",
      "Software Development",
      "Robotics Education",
      "Professional Development"
    ]
  };

  useEffect(() => {
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Intersection observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const aboutSection = document.getElementById('about-section');
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:site_name" content={seoData.organization} />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NexCore Alliance LLP" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
      </Head>

      <main 
        id="about-section"
        className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 mt-16 select-none"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="max-w-7xl mt-6 md:mt-10 w-full bg-white shadow-2xl rounded-3xl p-6 md:p-12 relative overflow-hidden">
          {/* Decorative gradient blur - Optimized for mobile */}
          <div className="absolute -top-10 md:-top-20 -right-10 md:-right-20 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full blur-3xl opacity-30 md:opacity-40 animate-pulse" />
          <div className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full blur-3xl opacity-30 md:opacity-40 animate-pulse" />

          {/* Header Section */}
          <header className="text-center mb-8 md:mb-12">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent"
              itemProp="name"
            >
              About NexCore Alliance
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6"
              itemProp="description"
            >
              Leading IT education and training provider empowering students with future-ready skills through innovative solutions
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
              {companyStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className={`bg-white/60 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-sm border border-gray-100 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#1976d2] mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-[#051d40] mb-1">{stat.number}</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </header>

          <div className="space-y-8 md:space-y-12">
            {/* Introduction Section */}
            <section className="text-center space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                Transforming Education for Tomorrow's Leaders
              </h2>
              <p 
                className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
                itemProp="slogan"
              >
                At NexCore Alliance LLP, we bridge the gap between traditional education and industry demands, 
                creating pathways for students to excel in the digital economy through our comprehensive 
                training programs and innovative learning methodologies.
              </p>
            </section>

            {/* Core Services Grid */}
            <section 
              className="grid md:grid-cols-2 gap-6 md:gap-8"
              itemProp="serviceType"
            >
              {coreServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <article 
                    key={service.title}
                    className={`text-left bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <header className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 
                        className="text-xl md:text-2xl font-semibold text-[#106EB5]"
                        itemProp="name"
                      >
                        {service.title}
                      </h3>
                    </header>
                    
                    <p 
                      className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed"
                      itemProp="description"
                    >
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex}
                          className="flex items-start gap-2 text-gray-600 text-sm md:text-base"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </section>

            {/* Brand Portfolio Section */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-100">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-[#051d40] mb-6">
                Our Brand Portfolio
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-lg text-[#051d40] mb-2">ISRC</h4>
                  <p className="text-gray-600 text-sm">International STEM and Robotics Championship - Global competitions and educational programs</p>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-lg text-[#051d40] mb-2">Code4Bharat</h4>
                  <p className="text-gray-600 text-sm">Comprehensive IT solutions including web development and mobile applications</p>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-lg text-[#051d40] mb-2">Education.Code4Bharat</h4>
                  <p className="text-gray-600 text-sm">Professional IT training courses with job placement assistance</p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
          
          </div>
        </div>
      </main>
    </>
  );
}