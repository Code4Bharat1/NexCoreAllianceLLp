"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  FaCube, 
  FaRobot, 
  FaCloud, 
  FaUsers, 
  FaCode,
  FaLaptopCode,
  FaMobile,
  FaRocket,
  FaLightbulb,
  FaServer,
  FaCogs,
  FaNetworkWired,
  FaBrain,
  FaMicrochip,
  FaDatabase,
  FaChartLine,
  FaUserFriends,
  FaHandshake
} from "react-icons/fa";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("product-development");
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

  const tabs = [
    {
      id: "product-development",
      label: "Product Development",
      icon: <FaCube className="text-xl" />,
    },
    {
      id: "digital-engineering",
      label: "Digital Engineering",
      icon: <FaCode className="text-xl" />,
    },
    {
      id: "artificial-intelligence",
      label: "Artificial Intelligence",
      icon: <FaRobot className="text-xl" />,
    },
    {
      id: "cloud-devops",
      label: "Cloud & DevOps",
      icon: <FaCloud className="text-xl" />,
    },
    {
      id: "cooperation-models",
      label: "Cooperation Models",
      icon: <FaUsers className="text-xl" />,
    },
  ];

  const servicesData = {
    "product-development": [
      {
        title: "Product Development",
        description: "Build scalable digital products from the ground up with agile teams that fast-track time to market.",
        icon: <FaCube className="text-3xl" />,
      },
      {
        title: "SaaS Development",
        description: "Develop secure, cloud-native SaaS platforms that scale seamlessly and serve users across geographies.",
        icon: <FaCloud className="text-3xl" />,
      },
      {
        title: "POC Development",
        description: "Quickly validate new product ideas with proof of concept builds that reduce risk and guide investments.",
        icon: <FaLightbulb className="text-3xl" />,
      },
      {
        title: "MVP Development",
        description: "Launch a market-ready MVP in weeks with core features needed to validate ideas and user interest.",
        icon: <FaRocket className="text-3xl" />,
      },
      {
        title: "UI/UX Development",
        description: "Design engaging, frictionless interfaces that improve usability and lead to long-term user retention.",
        icon: <FaMobile className="text-3xl" />,
      },
      {
        title: "Software Product Development",
        description: "Build production-grade software with scalable architecture tailored to your exact business workflows.",
        icon: <FaLaptopCode className="text-3xl" />,
      },
      {
        title: "Enterprise Software Development",
        description: "Modernize complex processes with enterprise software designed for operationally intensive systems.",
        icon: <FaServer className="text-3xl" />,
      },
      {
        title: "Offshore Software Development",
        description: "Extend in-house capabilities with offshore teams aligned to your time zone that qualify expectations.",
        icon: <FaNetworkWired className="text-3xl" />,
      },
    ],
    "digital-engineering": [
      {
        title: "Digital Transformation",
        description: "Modernize legacy systems into intelligent, connected ecosystems with cloud, artificial intelligence and automation.",
        icon: <FaCogs className="text-3xl" />,
      },
      {
        title: "App Modernization",
        description: "Refactor outdated applications into scalable, high-performing systems built for modern digital needs.",
        icon: <FaMobile className="text-3xl" />,
      },
      {
        title: "IoT Services",
        description: "Engineer connected solutions for real-time data, smart device control, and intelligent automation at scale.",
        icon: <FaNetworkWired className="text-3xl" />,
      },
      {
        title: "Digital Product Engineering",
        description: "Create impactful digital products with agile, cross-functional teams, guiding you from concept to launch.",
        icon: <FaRocket className="text-3xl" />,
      },
    ],
    "artificial-intelligence": [
      {
        title: "AI Software Development",
        description: "Develop intelligent software powered by custom-trained models, APIs, and advanced data pipelines.",
        icon: <FaBrain className="text-3xl" />,
      },
      {
        title: "AI Agent Development",
        description: "Build autonomous AI agents that can reason, plan, and execute complex tasks across multiple workflows.",
        icon: <FaRobot className="text-3xl" />,
      },
      {
        title: "Self-hosted Agentic AI Solution",
        description: "Deploy self-hosted agentic AI solutions with full control over privacy, performance, and scalability.",
        icon: <FaServer className="text-3xl" />,
      },
      {
        title: "AI Voice Agent Development",
        description: "Build conversational AI voice agents that understand, automate, and respond contextually in real-time.",
        icon: <FaMicrochip className="text-3xl" />,
      },
    ],
    "cloud-devops": [
      {
        title: "DevOps Services",
        description: "Speed up software delivery using CI/CD pipelines, infrastructure as code, and real-time monitoring tools.",
        icon: <FaCogs className="text-3xl" />,
      },
      {
        title: "Cloud Migration",
        description: "Migrate apps, data, and infrastructure to the cloud with zero downtime and full post-move optimization.",
        icon: <FaCloud className="text-3xl" />,
      },
      {
        title: "Cloud Integration",
        description: "Connect cloud and on-prem systems seamlessly to enable data sync, automation, and unified operations.",
        icon: <FaNetworkWired className="text-3xl" />,
      },
      {
        title: "Cloud Managed Services",
        description: "Ensure cloud efficiency with 24/7 monitoring, cost control, security, and on-demand expert support.",
        icon: <FaDatabase className="text-3xl" />,
      },
    ],
    "cooperation-models": [
      {
        title: "Hire Remote Developers",
        description: "Access global tech talent to fill immediate skill gaps and scale your engineering team on demand.",
        icon: <FaUserFriends className="text-3xl" />,
      },
      {
        title: "Hire Dedicated Development Team",
        description: "Build long-term capacity with vetted developers who work as a true extension of your in-house team.",
        icon: <FaUsers className="text-3xl" />,
      },
      {
        title: "Software Development Outsourcing",
        description: "Outsource end-to-end projects to expert teams and cut costs without compromising software quality.",
        icon: <FaHandshake className="text-3xl" />,
      },
    ],
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24 overflow-hidden select-none"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl font-black mb-4 text-gray-900 leading-tight">
            Digital Transformation Services for
            <br />
            <span className="bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
              Every Small to Large Enterprises in the World
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Tabs */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-3 sticky top-24">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-left transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] text-white shadow-lg scale-105"
                      : "bg-white/60 text-gray-600 hover:bg-white hover:text-[#2F6B6B] shadow-sm hover:shadow-md"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <span className="text-2xl">{tab.icon}</span>
                  <span className="text-sm leading-tight">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area - Service Cards */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesData[activeTab].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-[#2F6B6B]/30"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2F6B6B] to-[#1F4B4B] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2F6B6B] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Explore More Link */}
                  <button className="flex items-center gap-2 text-[#2F6B6B] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Explore More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Partner with Nexcore Alliance to build scalable, innovative solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2F6B6B] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Get Started Today
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#2F6B6B] transition-all duration-300">
                Schedule a Consultation
              </button>
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

        @media (max-width: 768px) {
          h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;