"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import DirectorCard from "./DirectorCard";
import Link from "next/link";
import Head from "next/head";

const Directors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Memoize directors data
  const directors = useMemo(
    () => [
      {
        name: "Prashant Patil",
        position: "CEO & Founder",
        description:
          "Seasoned leader in digital business and operations, known for driving innovative growth strategies.",
        image: "/prashant.png",
        linkedIn: "https://www.linkedin.com/in/prashant-patil-04642219b",
        whatsapp: "919594430295",
      },
      {
        name: "Awab Fakih",
        position: "CAO & Founder",
        description:
          "Passionate academic, edtech innovator, and mentor focused on STEM and organizational excellence.",
        image: "/awab.png",
        linkedIn: "https://www.linkedin.com/in/awabfakih",
        whatsapp: "918976104646",
      },
      {
        name: "Neha Fakih",
        position: "CFO & Founder",
        description:
          "Accomplished financial strategist with extensive experience in guiding organizations.",
        image: "/neha.png",
        linkedIn: "https://www.linkedin.com/in/neha-mehnaz-awab-fakih-2359a189",
        whatsapp: "919022477293",
      },
      {
        name: "Ayaan Raje",
        position: "CMO & Founder",
        description:
          "Creative marketing leader skilled in digital strategy, user experience, and business development.",
        image: "/ayan.png",
        linkedIn: "https://www.linkedin.com/in/raje-ayaan-327593229",
        whatsapp: "919920892689",
      },
    ],
    []
  );

  const stats = useMemo(
    () => 
    []
  );

  // IntersectionObserver for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: isMobile ? "-20px" : "-50px",
        threshold: isMobile ? 0.05 : 0.1,
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  // Conditional floating shapes
  const floatingShapes = useMemo(() => {
    const shapeCount = isMobile ? 5 : 10;
    return [...Array(shapeCount)].map((_, i) => (
      <div
        key={i}
        className={`absolute opacity-${
          isMobile ? "5" : "15"
        } animate-float will-change-transform ${
          i % 3 === 0
            ? "w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"
            : i % 3 === 1
            ? "w-2 h-0.5 md:w-3 md:h-0.5 bg-purple-500"
            : "w-0.5 h-0.5 md:w-1 md:h-1 bg-indigo-500 rounded-full"
        }`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${isMobile ? 2 : 3 + Math.random() * 2}s`,
        }}
      />
    ));
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-labelledby="directors-heading"
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 md:py-16 lg:py-20 mt-8 md:mt-16 lg:mt-20 overflow-hidden select-none"
    >
      {/* Structured Data for all directors */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: directors.map((d, index) => ({
                "@type": "Person",
                position: index + 1,
                name: d.name,
                image: d.image,
                jobTitle: d.position,
                url: d.linkedIn || "",
                sameAs: [d.linkedIn, d.whatsapp].filter(Boolean),
              })),
            }),
          }}
        />
      </Head>

      {/* Conditional background effects */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-60 h-60 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob-slow will-change-transform"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 lg:w-96 lg:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob-slow animation-delay-3000 will-change-transform"></div>
        </div>
      )}

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes}
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div
            className={`transition-all ${
              isMobile ? "duration-500" : "duration-700"
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-block text-blue-600 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 md:mb-4 px-2 md:px-4 py-1 md:py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/30">
              Leadership Excellence
            </span>

            <h2
              id="directors-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent leading-tight"
            >
              Innovators
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4 md:mb-8 px-2 md:px-4">
              Meet the visionary leaders who drive innovation and excellence
            </p>
          </div>

          {/* Decorative line */}
          <div className="flex justify-center items-center mb-6 md:mb-12">
            <div
              className={`w-8 md:w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-600 transition-all ${
                isMobile ? "duration-500" : "duration-700"
              } ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
            <div
              className={`w-2 h-2 md:w-4 md:h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-2 md:mx-4 transition-all ${
                isMobile ? "duration-500" : "duration-700"
              } delay-200 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            />
            <div
              className={`w-8 md:w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-600 transition-all ${
                isMobile ? "duration-500" : "duration-700"
              } ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
          </div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-16">
          {directors.map((director, index) => (
            <div
              key={director.name}
              className={`transition-all ${
                isMobile ? "duration-400" : "duration-500"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
              style={{
                transitionDelay: `${200 + index * (isMobile ? 50 : 100)}ms`,
              }}
            >
              <DirectorCard {...director} />
            </div>
          ))}
        </div>

        {/* Leadership Stats */}
        <div
          className={`transition-all ${
            isMobile ? "duration-500" : "duration-700"
          } delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* <div className="bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-8 md:mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 border border-blue-100">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#051D40] mb-2 md:mb-4">
              Ready to Connect with Our Leadership?
            </h3>
            <p className="text-gray-600 mb-4 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-base px-2">
              Discover how our experienced leadership team can help transform
              your vision into reality.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              aria-label="Schedule a meeting with leadership"
            >
              <span>Schedule a Meeting</span>
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob-slow {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(10px, -15px) scale(1.02);
          }
          66% {
            transform: translate(-10px, 10px) scale(0.98);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
        }

        .animate-blob-slow {
          animation: blob-slow 8s ease-in-out infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .will-change-transform {
          will-change: transform;
        }

        @media (max-width: 767px) {
          .animate-blob-slow {
            animation: none;
          }
          .animate-float {
            animation-duration: 2s;
            animation-iteration-count: 3;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-blob-slow,
          .animate-float {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Directors;
