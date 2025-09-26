"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin, FileText, Clock, MessageCircle, Globe, Users } from 'lucide-react';

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);

  // SEO Data
  const seoData = {
    title: "Contact NexCore Alliance LLP - Get in Touch | Mumbai IT Training & Education Services",
    description: "Contact NexCore Alliance LLP for IT training, ISRC robotics programs, and Code4Bharat services. Located in Mumbai, India. Call +91-9594430295 or email nexcorealliance@gmail.com",
    keywords: "contact NexCore Alliance, Mumbai IT training contact, ISRC contact details, Code4Bharat support, education services Mumbai, IT training inquiry, robotics program contact",
    canonicalUrl: "https://www.nexcorealliance.com/contact-us",
    organization: "NexCore Alliance LLP",
    email: "nexcorealliance@gmail.com",
    phone: "+91-9594430295",
    address: "Off BKC, Mumbai, India 400070"
  };

  // Contact methods with enhanced information
  const contactMethods = [
    {
      icon: Mail,
      label: "Email Support",
      value: seoData.email,
      href: `mailto:${seoData.email}`,
      description: "Get detailed responses within 24 hours",
      availability: "24/7 Email Support"
    },
    {
      icon: Phone,
      label: "Phone Support",
      value: seoData.phone,
      href: `tel:${seoData.phone}`,
      description: "Speak directly with our team",
      availability: "Mon-Fri: 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      label: "Office Location",
      value: seoData.address,
      href: "https://www.google.com/maps/place/Code4Bharat/@19.0726494,72.8804081,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9598ad468b5:0xa355e25756e9a44f!8m2!3d19.0726494!4d72.8804081!16s%2Fg%2F11vyp7wnp7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
      description: "Visit our office in Mumbai's business district",
      availability: "By Appointment Only"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Chat",
      value: "+91-9594430295",
      href: "https://wa.me/919594430295",
      description: "Quick responses via WhatsApp",
      availability: "Mon-Fri: 9 AM - 8 PM IST"
    }
  ];

  // Service inquiries for better UX
  const serviceInquiries = [
    { icon: Users, title: "ISRC Programs", description: "Robotics competitions and STEM education" },
    { icon: Globe, title: "Code4Bharat Services", description: "Web development and IT solutions" },
    { icon: FileText, title: "Training Courses", description: "Professional development programs" },
    { icon: Clock, title: "Consultation", description: "Free consultation and project discussion" }
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": seoData.organization,
    "url": "https://www.nexcorealliance.com",
    "logo": "https://www.nexcorealliance.com/logo.png",
    "description": seoData.description,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": seoData.phone,
        "contactType": "customer service",
        "email": seoData.email,
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Off BKC",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400070",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0726494",
      "longitude": "72.8804081"
    },
    "sameAs": [
      "https://www.linkedin.com/company/nexcore-alliance"
    ]
  };

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
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        
        {/* Local Business Schema */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0726494;72.8804081" />
        <meta name="ICBM" content="19.0726494, 72.8804081" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NexCore Alliance LLP" />
      </Head>

      <main 
        className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="max-w-7xl mt-6 md:mt-10 w-full bg-white shadow-2xl rounded-3xl p-6 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Decorative background blur - Mobile optimized */}
          <div className="absolute -top-16 md:-top-24 -right-16 md:-right-24 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full blur-3xl opacity-20 md:opacity-30 animate-pulse" />
          <div className="absolute -bottom-16 md:-bottom-24 -left-16 md:-left-24 w-48 h-48 md:w-72 md:h-72 bg-purple-200 rounded-full blur-3xl opacity-20 md:opacity-30 animate-pulse" />

          {/* Header Section */}
          <header className="text-center mb-8 md:mb-12">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent"
              itemProp="name"
            >
              Contact NexCore Alliance
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Ready to transform your future with cutting-edge IT training and education? 
              We're here to help you every step of the way.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">24/7 Email Support</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Quick Response</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">Expert Guidance</span>
            </div>
          </header>

          <div className="space-y-8 md:space-y-12">
            {/* Contact Methods Grid */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051d40] mb-6 md:mb-8">
                Get in Touch
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={method.label}
                      className={`bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      itemProp="contactPoint"
                      itemScope
                      itemType="https://schema.org/ContactPoint"
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        
                        <h3 
                          className="font-bold text-lg text-[#051d40] mb-2"
                          itemProp="contactType"
                        >
                          {method.label}
                        </h3>
                        
                        <a
                          href={method.href}
                          target={method.icon === MapPin ? "_blank" : "_self"}
                          rel={method.icon === MapPin ? "noopener noreferrer" : ""}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm md:text-base block mb-2 hover:underline transition-colors"
                          itemProp={method.icon === Mail ? "email" : method.icon === Phone ? "telephone" : "url"}
                        >
                          {method.value}
                        </a>
                        
                        <p className="text-gray-600 text-xs md:text-sm mb-1">
                          {method.description}
                        </p>
                        
                        <p className="text-gray-500 text-xs font-medium">
                          {method.availability}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Service Inquiries */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-[#051d40] mb-6">
                What Can We Help You With?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {serviceInquiries.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={service.title}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-[#051d40] mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Business Hours */}
            <section 
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-100"
              itemProp="openingHours"
            >
              <h2 className="text-2xl font-bold text-center text-[#051d40] mb-6">
                Business Hours & Response Times
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-[#051d40] mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 8:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">8:00 AM - 8:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-red-600">Closed</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-[#051d40] mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Response Times
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Email Queries:</span>
                      <span className="font-medium text-green-600">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phone Calls:</span>
                      <span className="font-medium text-green-600">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>WhatsApp:</span>
                      <span className="font-medium text-green-600">Within 2 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center bg-gray-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#051d40] mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                Don't wait to transform your future. Contact us today and take the first step 
                towards mastering the skills that matter in today's digital world.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`mailto:${seoData.email}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
                <a
                  href={`tel:${seoData.phone}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}