"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Partner data
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

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="partners"
      className="relative py-16 md:py-24 overflow-hidden select-none"
      role="region"
      aria-label="Partners and Clients Section"
    >
      {/* Animated Background - Nexcore Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          ></div>
          <div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          ></div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-500 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Nexcore Style */}
        <header className="text-center mb-12 md:mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider mb-6 shadow-lg">
              Trusted Partnerships
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-[#2F6B6B] via-[#1976d2] to-[#2F6B6B] bg-clip-text text-transparent">
              Our Partners & Clients
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building strong partnerships across education, technology, and industry sectors to deliver exceptional results
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex justify-center items-center mt-8">
            <div
              className={`w-20 h-0.5 bg-gradient-to-r from-transparent via-[#2F6B6B] to-transparent transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
            <div
              className={`w-4 h-4 bg-gradient-to-r from-[#2F6B6B] to-blue-600 rounded-full mx-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100 rotate-180" : "opacity-0 scale-0"
              }`}
            />
            <div
              className={`w-20 h-0.5 bg-gradient-to-l from-transparent via-blue-600 to-transparent transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
          </div>
        </header>

        {/* Scrolling Logos - Enhanced */}
        <div 
          className={`overflow-hidden relative mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          role="img"
          aria-label="Partner and client logos carousel"
        >
          <div className="flex animate-scroll whitespace-nowrap justify-center items-center gap-8">
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div 
                key={`partner-1-${index}`} 
                className="flex-shrink-0 group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl border-2 border-gray-100 hover:border-teal-300 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  <Image
                    src={`/images/partners/${partner.src}`}
                    alt={partner.alt}
                    title={`${partner.name} - ${partner.category} Partner`}
                    width={120}
                    height={120}
                    className="relative w-28 h-28 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    quality={90}
                    priority={index < 6}
                    loading={index < 6 ? "eager" : "lazy"}
                  />
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
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl border-2 border-gray-100 hover:border-teal-300 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  <Image
                    src={`/images/partners/${partner.src}`}
                    alt=""
                    title={`${partner.name} - ${partner.category} Partner`}
                    width={120}
                    height={120}
                    className="relative w-28 h-28 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    quality={90}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Stats - Enhanced */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:border-teal-300 transition-all duration-300 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent mb-2">
                  {partners.length}+
                </div>
                <div className="text-sm font-semibold text-gray-600">Trusted Partners</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-sm font-semibold text-gray-600">Active Projects</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:border-green-300 transition-all duration-300 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-2">
                  9
                </div>
                <div className="text-sm font-semibold text-gray-600">Industry Sectors</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:border-purple-300 transition-all duration-300 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm font-semibold text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to Become Our Partner?
            </h3>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Join our ecosystem of trusted partners and create impact together
            </p>
            <button className="bg-white text-[#2F6B6B] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float linear infinite;
        }

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

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 35s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation-duration: 120s;
          }
          
          .group:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;