"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaGraduationCap,
  FaRocket,
  FaBriefcase,
  FaChartBar,
  FaGlobe,
  FaBullseye,
} from "react-icons/fa";
import Head from "next/head";

const MissionVision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const visionItems = [
    {
      icon: <FaGraduationCap aria-hidden="true" />,
      text: "Empowering educators and students through practical and innovative STEM programs.",
    },
    {
      icon: <FaRocket aria-hidden="true" />,
      text: "Driving digital transformation for businesses with cutting-edge IT solutions.",
    },
    {
      icon: <FaBriefcase aria-hidden="true" />,
      text: "Creating job opportunities and equipping professionals with skills to thrive in tech.",
    },
  ];

  const missionItems = [
    { icon: <FaChartBar aria-hidden="true" />, text: "Reach 10 million teachers in STEM education by 2030." },
    { icon: <FaGlobe aria-hidden="true" />, text: "Provide world-class IT solutions to businesses globally." },
    { icon: <FaBullseye aria-hidden="true" />, text: "Train and place thousands of students in IT roles." },
  ];

  return (
    <>
      {/* Structured Data for Mission & Vision */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Nex Core Alliance LLP",
              "url": "https://yourwebsite.com",
              "logo": "https://yourwebsite.com/logo.png",
              "mission": visionItems.map((v) => v.text),
              "vision": missionItems.map((m) => m.text),
              "sameAs": [
                "https://www.linkedin.com/company/yourcompany",
                "https://www.facebook.com/yourcompany"
              ]
            }),
          }}
        />
      </Head>

      <section
        ref={sectionRef}
        id="mission-vision"
        role="region"
        aria-labelledby="mission-vision-heading"
        className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 overflow-hidden select-none"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 left-10 w-48 h-48 bg-blue-500 rounded-full animate-blob"></div>
          <div className="absolute top-40 right-10 w-48 h-48 bg-purple-500 rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-48 h-48 bg-pink-500 rounded-full animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <div
              className={`inline-block transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider block mb-2">
                Our Purpose
              </span>
              <h2
                id="mission-vision-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent"
              >
                Mission & Vision
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Shaping the future through innovation, education, and technology-driven solutions
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-stretch">
            {/* Vision */}
            <div
              className={`relative h-full transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
            >
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                    <span className="sr-only">Vision Icon</span>
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold ml-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  At Nexcore Alliance LLP, our vision is to be a global leader in STEM education, IT solutions, and professional training.
                </p>
                <div className="space-y-3">
                  {visionItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
                    >
                      <div className="flex-shrink-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                        {item.icon}
                      </div>
                      <p className="text-gray-700 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission */}
            <div
              className={`relative h-full transition-all duration-500 delay-150 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
              }`}
            >
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                    <span className="sr-only">Mission Icon</span>
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold ml-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Our mission is to create sustainable growth through education and technology. We empower students and professionals to thrive.
                </p>
                <div className="space-y-3">
                  {missionItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition"
                    >
                      <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm">
                        {item.icon}
                      </div>
                      <p className="text-gray-700 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        .animate-blob { animation: blob 6s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @media (prefers-reduced-motion: reduce) {
          .animate-blob { animation: none; }
        }
      `}</style>
    </>
  );
};

export default MissionVision;
