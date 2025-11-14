"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";

const WhyChooseUsStats = () => {
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

  const reasons = [
    {
      metric: "5X",
      description: "Agile Speed to Market.",
    },
    {
      metric: "100%",
      description: "Customer Success Centric Approach.",
    },
    {
      metric: "300+",
      description: "Digital Transformation Success Stories.",
    },
    {
      metric: "99%",
      description: "Advanced CI/CD and Devops Capabilities.",
    },
    {
      metric: "100%",
      description: "Scalable Micro Services Architecture.",
    },
    {
      metric: "16+",
      description: "Years of Digital First Approach.",
    },
  ];

  const stats = [
    {
      value: "4.9",
      label: "Customer Satisfaction Score (CSAT)",
      bgColor: "bg-[#F5DEB3]",
      textColor: "text-gray-900",
    },
    {
      value: "90%",
      label: "Maximum ROI Guaranteed",
      bgColor: "bg-[#2C1810]",
      textColor: "text-white",
    },
    {
      value: "100%",
      label: "Transparent and Effective Collaboration",
      bgColor: "bg-[#F5DEB3]",
      textColor: "text-gray-900",
      fullWidth: true,
    },
    {
      value: "40+",
      label: "Analytics & Performance Integrations",
      bgColor: "bg-[#2C1810]",
      textColor: "text-white",
    },
    {
      value: "99%",
      label: "Risk Free MVP Launches",
      bgColor: "bg-[#F5DEB3]",
      textColor: "text-gray-900",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#2F6B6B] overflow-hidden select-none py-16 md:py-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel - Reasons */}
          <div
            className={`bg-white rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Heading */}
            <div className="mb-8">
              <h3 className="text-base text-gray-600 mb-2 font-medium">
                Top 6 Reasons
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Why Global Companies
                <br />
                Choose <span className="text-[#2F6B6B]">Nexcore Alliance</span>
              </h2>
            </div>

            {/* Reasons List */}
            <div className="space-y-6 mb-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <FaArrowUp className="text-[#2F6B6B] text-xl group-hover:text-[#1F4B4B] transition-colors" />
                  </div>
                  {/* Content */}
                  <div>
                    <span className="text-2xl font-bold text-gray-900 mr-2">
                      {reason.metric}
                    </span>
                    <span className="text-gray-700 text-base">
                      {reason.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore More Button */}
            <button className="group flex items-center gap-2 text-[#2F6B6B] font-semibold hover:gap-3 transition-all duration-300">
              <span>Explore More</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Panel - Stats Grid */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Our Customer Success
                <br />
                Is Our Growth
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bgColor} ${
                    stat.textColor
                  } rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 ${
                    stat.fullWidth ? "col-span-2" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className={`text-4xl md:text-5xl font-bold mb-2 ${
                      stat.textColor === "text-white"
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm md:text-base ${
                      stat.textColor === "text-white"
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsStats;  