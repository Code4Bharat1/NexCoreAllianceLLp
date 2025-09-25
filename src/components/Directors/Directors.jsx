
"use client";
import React, { useEffect, useRef, useState } from "react";
import DirectorCard from "./DirectorCard";
import Link from "next/link";

const Directors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const directors = [
    {
      name: "Prashant Patil",
      position: "CEO & Founder",
      description:
        "Seasoned leader in digital business and operations, known for driving innovative growth strategies.",
      image: "/prashant.png",
      linkedIn: "https://www.linkedin.com/in/prashant-patil-04642219b",
      whatsapp: "91 9594430295",
    },
    {
      name: "Awab Fakih",
      position: "CAO & Founder",
      description:
        "Passionate academic, edtech innovator, and mentor focused on STEM and organizational excellence.",
      image: "/awab.png",
      linkedIn: "https://www.linkedin.com/in/awabfakih",
      whatsapp: "91 8976104646",
    },
    {
      name: "Neha Fakih",
      position: "CFO & Founder",
      description:
        "Accomplished financial strategist with extensive experience in guiding organizations .",

      image: "/neha.png",
      linkedIn: "https://www.linkedin.com/in/neha-mehnaz-awab-fakih-2359a189",
      whatsapp: "91 9022477293",
    },
    {
      name: "Ayaan Raje",
      position: "CMO & Founder",
      description:
        "Creative marketing leader skilled in digital strategy, user experience, and business development.",
      image: "/ayan.png",
      linkedIn: "https://www.linkedin.com/in/raje-ayaan-327593229",
      whatsapp: "91 9920892689",
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { root: null, rootMargin: "-100px", threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 mt-20 overflow-hidden select-none"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-20 animate-float ${
              i % 3 === 0
                ? "w-2 h-2 bg-blue-500 rounded-full"
                : i % 3 === 1
                ? "w-3 h-0.5 bg-purple-500"
                : "w-1 h-1 bg-indigo-500 rounded-full"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/30">
              Leadership Excellence
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
              Masterminds
            </h2>

            <p className="text-2xl sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Meet the visionary leaders who drive innovation, inspire
              excellence, and shape the future of our organization
            </p>
          </div>

          <div className="flex justify-center items-center mb-12">
            <div
              className={`w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-600 transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
            <div
              className={`w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 scale-100 rotate-180"
                  : "opacity-0 scale-0"
              }`}
            />
            <div
              className={`w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-600 transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
          </div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16">
          {directors.map((director, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <div className="pointer-events-auto">
                <DirectorCard {...director} />
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Stats */}
        <div
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Years Combined Experience" },
                { number: "500+", label: "Projects Led" },
                { number: "50+", label: "Team Members" },
                { number: "3", label: "Countries Served" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1200`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 pointer-events-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#051D40] mb-4">
              Ready to Connect with Our Leadership?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how our experienced leadership team can help transform
              your vision into reality through innovative solutions and
              strategic partnerships.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pointer-events-auto">
              <Link href="/contact-us" legacyBehavior>
                <a className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
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
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Directors;
