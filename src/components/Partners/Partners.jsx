"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);

  // SEO Data
  const seoData = {
    title: "Our Trusted Partners & Clients - NexCore Alliance LLP | ISRC, Code4Bharat Partnerships",
    description: "Discover NexCore Alliance LLP's prestigious partners and clients including educational institutions, tech companies, and industry leaders. Building strong partnerships for ISRC competitions and Code4Bharat solutions.",
    keywords: "NexCore Alliance partners, ISRC partners, Code4Bharat clients, tech partnerships, educational partnerships, Mumbai IT partnerships, robotics competition sponsors",
    canonicalUrl: "https://www.nexcorealliance.com/#partners",
    organization: "NexCore Alliance LLP"
  };

  // Partner data with SEO-friendly information
  const partners = [
    { 
      src: "gkcc.png", 
      name: "GKCC", 
      alt: "GKCC - Educational Partner",
      category: "Education"
    },
    { 
      src: "kws.png", 
      name: "KWS", 
      alt: "KWS - Technology Partner",
      category: "Technology"
    },
    { 
      src: "kcd.png", 
      name: "KCD", 
      alt: "KCD - Industry Partner",
      category: "Industry"
    },
    { 
      src: "kcj.png", 
      name: "KCJ", 
      alt: "KCJ - Business Partner",
      category: "Business"
    },
    { 
      src: "dl.png", 
      name: "DL", 
      alt: "DL - Strategic Partner",
      category: "Strategic"
    },
    { 
      src: "rm.png", 
      name: "RM", 
      alt: "RM - Corporate Partner",
      category: "Corporate"
    },
    { 
      src: "sta.png", 
      name: "STA", 
      alt: "STA - Academic Partner",
      category: "Academic"
    },
    { 
      src: "tiss.png", 
      name: "TISS", 
      alt: "TISS - Research Partner",
      category: "Research"
    },
    { 
      src: "tt.png", 
      name: "TT", 
      alt: "TT - Innovation Partner",
      category: "Innovation"
    },
    { 
      src: "kj.webp", 
      name: "KJ", 
      alt: "KJ - Development Partner",
      category: "Development"
    },
    { 
      src: "lmt.png", 
      name: "LMT", 
      alt: "LMT - Solutions Partner",
      category: "Solutions"
    },
    { 
      src: "urbanicon.png", 
      name: "Urban Icon", 
      alt: "Urban Icon - Design Partner",
      category: "Design"
    },
    { 
      src: "overseas.png", 
      name: "Overseas", 
      alt: "Overseas - Global Partner",
      category: "Global"
    },
    { 
      src: "icco.png", 
      name: "ICCO", 
      alt: "ICCO - International Partner",
      category: "International"
    },
    { 
      src: "fresco.png", 
      name: "Fresco", 
      alt: "Fresco - Creative Partner",
      category: "Creative"
    },
    { 
      src: "falcon.png", 
      name: "Falcon", 
      alt: "Falcon - Technology Solutions Partner",
      category: "Technology"
    },
    { 
      src: "bkccrown.png", 
      name: "BKC Crown", 
      alt: "BKC Crown - Premium Partner",
      category: "Premium"
    },
    { 
      src: "constrochem.png", 
      name: "Constrochem", 
      alt: "Constrochem - Industrial Partner",
      category: "Industrial"
    }
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NexCore Alliance LLP",
    "url": "https://www.nexcorealliance.com",
    "logo": "https://www.nexcorealliance.com/logo.png",
    "description": "Leading IT solutions and educational services provider with trusted partners across industries",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN",
      "postalCode": "400070"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919594430295",
      "contactType": "customer service",
      "email": "nexcorealiancellp@gmail.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/nexcore-alliance",
      "https://twitter.com/nexcorealliance"
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
    "hasPartner": partners.map(partner => ({
      "@type": "Organization",
      "name": partner.name,
      "category": partner.category
    }))
  };

  useEffect(() => {
    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const section = document.getElementById('partners');
    if (section) observer.observe(section);

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
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:site_name" content={seoData.organization} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={seoData.canonicalUrl} />
      </Head>

      <section
        id="partners"
        className="bg-gradient-to-r from-[#e0f7fa] to-[#ffffff] py-12 md:py-16 overflow-hidden mt-8 md:mt-12 mb-8 md:mb-12 select-none"
        itemScope
        itemType="https://schema.org/Organization"
        role="region"
        aria-label="Partners and Clients Section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading - SEO Optimized */}
          <header className="text-center mb-8 md:mb-12">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-800"
              itemProp="name"
            >
              Our Trusted Partners & Clients
            </h2>
            
            {/* SEO-friendly subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Building strong partnerships across education, technology, and industry sectors to deliver exceptional results
            </p>

            {/* Decorative Line */}
            <div className="flex justify-center mb-8">
              <div className="w-32 md:w-40 h-1 bg-gradient-to-r from-[#3498db] to-[#2c3e50] rounded-full"></div>
            </div>
          </header>

          {/* Partnership Categories */}
          <div className="text-center mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['Education', 'Technology', 'Industry', 'Research', 'Global'].map((category, index) => (
                <span 
                  key={category}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium border border-gray-200 shadow-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Scrolling Logos - Performance Optimized */}
          <div 
            className="overflow-hidden relative"
            role="img"
            aria-label="Partner and client logos carousel"
          >
            <div className="flex animate-scroll whitespace-nowrap justify-center items-center space-x-6 md:space-x-8">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div 
                  key={`partner-1-${index}`} 
                  className="flex-shrink-0 group"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <div className="relative overflow-hidden rounded-lg bg-white/50 backdrop-blur-sm p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={`/images/partners/${partner.src}`}
                      alt={partner.alt}
                      title={`${partner.name} - ${partner.category} Partner`}
                      width={120}
                      height={120}
                      className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                      quality={85}
                      priority={index < 6}
                      loading={index < 6 ? "eager" : "lazy"}
                      itemProp="logo"
                    />
                    {/* Hidden text for SEO */}
                    <span className="sr-only" itemProp="name">{partner.name}</span>
                    <span className="sr-only" itemProp="description">{partner.category} partner of NexCore Alliance</span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div 
                  key={`partner-2-${index}`} 
                  className="flex-shrink-0 group"
                  aria-hidden="true"
                >
                  <div className="relative overflow-hidden rounded-lg bg-white/50 backdrop-blur-sm p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={`/images/partners/${partner.src}`}
                      alt=""
                      title={`${partner.name} - ${partner.category} Partner`}
                      width={120}
                      height={120}
                      className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                      quality={85}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Stats */}
          <div className="mt-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-[#3498db] mb-1">{partners.length}+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Trusted Partners</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-[#2c3e50] mb-1">50+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Active Projects</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-[#27ae60] mb-1">5</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Industry Sectors</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-[#e74c3c] mb-1">100%</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Optimized CSS Animation */}
        <style jsx>{`
          .animate-scroll {
            animation: scroll 45s linear infinite;
            width: max-content;
            will-change: transform;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* Performance optimizations for mobile */
          @media (max-width: 768px) {
            .animate-scroll {
              animation-duration: 35s;
            }
          }

          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .animate-scroll {
              animation-duration: 120s;
            }
            
            .group:hover {
              transform: none;
            }
          }

          /* Improved accessibility */
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
        `}</style>
      </section>
    </>
  );
};

export default Partners;