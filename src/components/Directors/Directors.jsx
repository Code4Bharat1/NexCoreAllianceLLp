"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import DirectorCard from "./DirectorCard";
import Link from "next/link";

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
            ? "w-1 h-1 md:w-2 md:h-2 bg-teal-500 rounded-full"
            : i % 3 === 1
            ? "w-2 h-0.5 md:w-3 md:h-0.5 bg-teal-600"
            : "w-0.5 h-0.5 md:w-1 md:h-1 bg-blue-500 rounded-full"
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
      {/* Conditional background effects */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-60 h-60 lg:w-96 lg:h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-slow will-change-transform"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-slow animation-delay-3000 will-change-transform"></div>
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
            <span className="inline-block bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider mb-6 shadow-lg">
              Leadership Excellence
            </span>

            <h2
              id="directors-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-[#2F6B6B] via-[#1976d2] to-[#2F6B6B] bg-clip-text text-transparent"
            >
              Our Leadership Team
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 md:px-4">
              Meet the visionary leaders driving innovation and excellence across Nexcore Alliance
            </p>
          </div>

          {/* Decorative line */}
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

        {/* Call-to-Action */}
        <div className="text-center mt-8 md:mt-16">
          <div
            className={`bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Connect with Our Leadership?
            </h3>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Discover how our experienced leadership team can help transform your vision into reality
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2F6B6B] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              aria-label="Schedule a meeting with leadership"
            >
              <span>Schedule a Meeting</span>
              <svg
                className="w-5 h-5"
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