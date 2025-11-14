"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaGraduationCap,
  FaRocket,
  FaBriefcase,
  FaChartBar,
  FaGlobe,
  FaBullseye,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const MissionVisionHistory = () => {
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
      icon: <FaRocket />,
      text: "Driving digital transformation for businesses with cutting-edge IT solutions.",
    },
    {
      icon: <FaGraduationCap />,
      text: "Empowering educators and students through practical and innovative STEM programs.",
    },
    {
      icon: <FaBriefcase />,
      text: "Creating job opportunities and equipping professionals with skills to thrive in tech.",
    },
  ];

  const missionItems = [
    {
      icon: <FaGlobe />,
      text: "Provide world-class IT solutions to businesses globally.",
    },
    {
      icon: <FaChartBar />,
      text: "Reach 10 million teachers in STEM education by 2030.",
    },
    {
      icon: <FaBullseye />,
      text: "Train and place thousands of students in IT roles.",
    },
  ];

  const timelineEvents = [
    {
      year: "Year 2022 - 2025",
      title: "Established as a trusted technology partner for growing businesses",
      position: "top",
      color: "teal",
    },
    {
      year: "Year 2018",
      title: "Launched education technology initiatives across multiple states",
      position: "bottom",
      color: "blue",
    },
    {
      year: "Years 2020-2021",
      title: "Adapted and thrived during global challenges with remote solutions",
      position: "top",
      color: "teal",
    },
    {
      year: "Year 2015",
      title: "Introduced comprehensive STEM training programs for educators",
      position: "bottom",
      color: "purple",
    },
    {
      year: "Year 2019",
      title: "Achieved significant growth in client partnerships and student placements",
      position: "top",
      color: "purple",
    },
    {
      year: "Years 2012-2014",
      title: "Expanded operations with focus on digital marketing and IT services",
      position: "bottom",
      color: "orange",
    },
    {
      year: "Year 2017",
      title: "Launched job placement programs connecting students with industry",
      position: "top",
      color: "orange",
    },
    {
      year: "Years 2011 - 2012",
      title: "Founded Nexcore Alliance with vision to transform education and technology",
      position: "bottom",
      color: "green",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden select-none"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Mission & Vision Section */}
      <div className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider mb-6 shadow-lg">
              Our Purpose
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-[#2F6B6B] via-[#1976d2] to-[#2F6B6B] bg-clip-text text-transparent leading-tight">
              Mission & Vision
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Shaping the future through innovation, education, and
              technology-driven solutions
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
            {/* Vision Card */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-teal-100 h-full">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2F6B6B] to-[#1F4B4B] rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                    <FaLightbulb className="text-white text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  At Nexcore Alliance LLP, our vision is to be a global leader
                  in STEM education, IT solutions, and professional training.
                </p>

                {/* Vision Items */}
                <div className="space-y-4">
                  {visionItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-teal-50 hover:bg-teal-100 transition-all duration-300 group hover:translate-x-2"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#2F6B6B] to-[#1F4B4B] rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed flex-1">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 h-full">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                    <FaBullseye className="text-white text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Our mission is to create sustainable growth through education
                  and technology. We empower students and professionals to
                  thrive.
                </p>

                {/* Mission Items */}
                <div className="space-y-4">
                  {missionItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 group hover:translate-x-2"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed flex-1">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline History Section */}
      <div className="relative bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline Header */}
          <div
            className={`mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
                Our Journey
              </span>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 hidden lg:block ">
              <div className="h-2 bg-gradient-to-r from-teal-400 via-blue-400 via-purple-400 via-orange-400 to-green-400 rounded-full shadow-lg"></div>
            </div>

            {/* Timeline Events */}
            <div className="relative grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-6">
              {timelineEvents.map((event, index) => {
                const colorClasses = {
                  teal: {
                    dot: "bg-gradient-to-br from-teal-400 to-teal-600",
                    text: "text-teal-700",
                    bg: "bg-gradient-to-br from-teal-50 to-teal-100",
                    border: "border-teal-300",
                    glow: "shadow-teal-500/50",
                  },
                  blue: {
                    dot: "bg-gradient-to-br from-blue-400 to-blue-600",
                    text: "text-blue-700",
                    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
                    border: "border-blue-300",
                    glow: "shadow-blue-500/50",
                  },
                  purple: {
                    dot: "bg-gradient-to-br from-purple-400 to-purple-600",
                    text: "text-purple-700",
                    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
                    border: "border-purple-300",
                    glow: "shadow-purple-500/50",
                  },
                  orange: {
                    dot: "bg-gradient-to-br from-orange-400 to-orange-600",
                    text: "text-orange-700",
                    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
                    border: "border-orange-300",
                    glow: "shadow-orange-500/50",
                  },
                  green: {
                    dot: "bg-gradient-to-br from-green-400 to-green-600",
                    text: "text-green-700",
                    bg: "bg-gradient-to-br from-green-50 to-green-100",
                    border: "border-green-300",
                    glow: "shadow-green-500/50",
                  },
                };

                const colors = colorClasses[event.color];

                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Mobile/Tablet Layout - Vertical */}
                    <div className="lg:hidden flex items-start gap-5">
                      <div className="flex flex-col items-center flex-shrink-0 pt-2">
                        <div
                          className={`w-8 h-8 ${colors.dot} rounded-full shadow-lg ${colors.glow} z-10 flex items-center justify-center`}
                        >
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        {index !== timelineEvents.length - 1 && (
                          <div className={`w-0.5 h-full ${colors.dot} mt-3 rounded-full`}></div>
                        )}
                      </div>

                      <div className="flex-1 pb-10">
                        <div
                          className={`${colors.bg} border-2 ${colors.border} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group`}
                        >
                          {/* Decorative Corner */}
                          <div className={`absolute top-0 right-0 w-20 h-20 ${colors.dot} opacity-10 rounded-bl-full`}></div>
                          
                          <span
                            className={`${colors.text} text-sm font-bold uppercase tracking-wider block mb-3 relative z-10`}
                          >
                            {event.year}
                          </span>
                          <p className="text-gray-900 font-semibold text-base leading-relaxed relative z-10">
                            {event.title}
                          </p>
                          
                          {/* Hover Effect Line */}
                          <div className={`absolute bottom-0 left-0 h-1 ${colors.dot} w-0 group-hover:w-full transition-all duration-500`}></div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout - Horizontal */}
                    <div className="hidden lg:block">
                      <div className="relative h-96">
                        {/* Connecting Line */}
                        <div
                          className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 ${colors.dot} rounded-full ${
                            event.position === "top"
                              ? "bottom-1/2 h-20"
                              : "top-1/2 h-20"
                          }`}
                        ></div>

                        {/* Content Card */}
                        <div
                          className={`absolute left-1/2 transform -translate-x-1/2 w-full ${
                            event.position === "top"
                              ? "bottom-[calc(50%+2rem)]"
                              : "top-[calc(50%+2rem)]"
                          }`}
                        >
                          <div
                            className={`${colors.bg} border-2 ${colors.border} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                              event.position === "top" ? "hover:-translate-y-2" : "hover:translate-y-2"
                            } relative overflow-hidden group`}
                          >
                            {/* Decorative Elements */}
                            <div className={`absolute top-0 right-0 w-16 h-16 ${colors.dot} opacity-10 rounded-bl-full`}></div>
                            <div className={`absolute bottom-0 left-0 w-12 h-12 ${colors.dot} opacity-10 rounded-tr-full`}></div>
                            
                            <span
                              className={`${colors.text} text-xs font-bold uppercase tracking-wider block mb-3 relative z-10`}
                            >
                              {event.year}
                            </span>
                            <p className="text-gray-900 font-bold text-sm leading-snug relative z-10">
                              {event.title}
                            </p>
                            
                            {/* Animated Border */}
                            <div className={`absolute bottom-0 left-0 h-1 ${colors.dot} w-0 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                          </div>
                        </div>

                        {/* Timeline Dot */}
                        <div
                          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 ${colors.dot} rounded-full shadow-2xl ${colors.glow} z-30 hover:scale-125 transition-all duration-300 flex items-center justify-center cursor-pointer group`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full group-hover:animate-ping"></div>
                          <div className="absolute w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                    // <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                    //   A peek into our history
                    // </h2>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] rounded-3xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">
                Ready to Be Part of Our Journey?
              </h3>
              <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto text-center">
                Join Nexcore Alliance on a mission to transform education,
                technology, and innovation for a better tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#2F6B6B] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Get Started Today
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#2F6B6B] transition-all duration-300">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default MissionVisionHistory;