"use client";

import React, { useEffect, useRef, useState } from "react";
export const metadata = {
  title: "About Us | NexCoreAlliance",
  description:
    "Learn about NexCoreAlliance — a visionary organization driving innovation in STEM education, IT solutions, and professional development.",
  keywords:
    "NexCoreAlliance, About Us, STEM education, IT solutions, professional development, technology solutions",
  openGraph: {
    title: "About Us | NexCoreAlliance",
    description:
      "Discover NexCoreAlliance's mission, vision, and core values. Pioneering the future through education, innovation, and technology.",
    url: "https://www.nexcorealliance.com/about",
    type: "website",
    images: [
      {
        url: "/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "About Us - NexCoreAlliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | NexCoreAlliance",
    description:
      "Explore NexCoreAlliance's journey, mission, and commitment to education, technology, and professional development.",
    images: ["/seo-banner.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "-50px",
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="relative bg-gradient-to-br from-[#DBE2EF] via-[#F8FAFF] to-[#E8F2FF] text-gray-800 mt-28 overflow-hidden select-none"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 mt-16 min-h-[80vh]">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2 px-4 py-1 bg-white/50 rounded-full">
              Who We Are
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future through innovation, education, and
              transformative technology solutions
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex justify-center items-center mt-8 mb-12">
            <div
              className={`w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent transition-all duration-1000 ${
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
              className={`w-20 h-0.5 bg-gradient-to-l from-transparent via-purple-600 to-transparent transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
          </div>
        </div>

        {/* Main Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Nex Core Alliance Card */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#051d40]">
                    Nex Core Alliance LLP
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Visionary Organization
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nex Core Alliance LLP is a visionary organization at the
                  forefront of driving change in the fields of{" "}
                  <span className="font-semibold text-blue-600">
                    STEM education
                  </span>
                  ,
                  <span className="font-semibold text-purple-600">
                    {" "}
                    IT solutions
                  </span>
                  , and
                  <span className="font-semibold text-green-600">
                    {" "}
                    professional development
                  </span>
                  .
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With a diverse portfolio of brands, we are committed to
                  empowering individuals, institutions, and businesses with
                  innovative tools, knowledge, and services to thrive in the
                  modern digital and educational landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Our Foundation Card */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ userSelect: "none" }} // Prevent text selection
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#051d40]">
                    Our Foundation
                  </h3>
                  <p className="text-purple-600 font-medium">Core Beliefs</p>
                </div>
              </div>

              <div className="space-y-7">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Founded with the core belief that{" "}
                  <span className="font-semibold text-blue-600">education</span>{" "}
                  and
                  <span className="font-semibold text-purple-600">
                    {" "}
                    technology
                  </span>{" "}
                  are the twin pillars of progress, Nex Core Alliance LLP seeks
                  to create a sustainable impact.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through our three distinct brands, we represent the mission to
                  bridge the gap between learning and technology, ensuring the
                  next generation is prepared for the challenges of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        ></div>
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
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

export default About;
