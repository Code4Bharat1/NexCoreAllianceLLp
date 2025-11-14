"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  ArrowUp,
  ChevronDown,
  ChevronRight,
  Heart,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    services: false,
    productDev: false,
    digitalEng: false,
    cloudDevops: false,
    ai: false,
    cooperation: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setShowBackToTop(window.scrollY > 300);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
    return () => {};
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const socialLinks = [
    { href: "https://www.instagram.com/nexcorealliancellp/", icon: Instagram, label: "Instagram" },
    { href: "https://www.facebook.com/profile.php?id=61570113656994", icon: Facebook, label: "Facebook" },
    { href: "https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag", icon: Youtube, label: "YouTube" },
    { href: "https://twitter.com/nexcore", icon: Twitter, label: "Twitter" },
    { href: "https://www.linkedin.com/company/105730702/admin/dashboard/", icon: Linkedin, label: "LinkedIn" },
  ];

  const productDevelopmentServices = [
    { href: "/services/product-development", label: "Product Development" },
    { href: "/services/saas-development", label: "SaaS Development" },
    { href: "/services/poc-development", label: "POC Development" },
    { href: "/services/mvp-development", label: "MVP Development" },
    { href: "/services/ui-ux-design", label: "UI/UX Design" },
    { href: "/services/software-product", label: "Software Product Development" },
    { href: "/services/enterprise-software", label: "Enterprise Software Development" },
    { href: "/services/offshore-software", label: "Offshore Software Development" },
  ];

  const digitalEngineeringServices = [
    { href: "/services/digital-transformation", label: "Digital Transformation" },
    { href: "/services/app-modernization", label: "App Modernization" },
    { href: "/services/iot-services", label: "IoT Services" },
    { href: "/services/digital-product-engineering", label: "Digital Product Engineering" },
  ];

  const cloudDevopsServices = [
    { href: "/services/devops-services", label: "DevOps Services" },
    { href: "/services/cloud-migration", label: "Cloud Migration" },
    { href: "/services/cloud-integration", label: "Cloud Integration" },
    { href: "/services/cloud-managed-services", label: "Cloud Managed Services" },
  ];

  const aiServices = [
    { href: "/services/ai-software-development", label: "AI Software Development" },
    { href: "/services/ai-agent-development", label: "AI Agent Development" },
    { href: "/services/ai-voice-agent", label: "AI Voice Agent" },
  ];

  const cooperationServices = [
    { href: "/services/hire-remote-developers", label: "Hire Remote Developers" },
    { href: "/services/hire-dedicated-team", label: "Hire Dedicated Development Team" },
    { href: "/services/software-outsourcing", label: "Software Development Outsourcing" },
  ];

  const technologies = [
    { href: "/tech/full-stack", label: "Full Stack" },
    { href: "/tech/flutter", label: "Flutter" },
    { href: "/tech/react-native", label: "React Native" },
    { href: "/tech/reactjs", label: "ReactJs" },
    { href: "/tech/angularjs", label: "AngularJs" },
    { href: "/tech/python", label: "Python" },
    { href: "/tech/nodejs", label: "Node.js" },
  ];

  const companyLinks = [
    { href: "/about", label: "Our Story" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/newsroom", label: "Newsroom" },
    { href: "/careers", label: "We're Hiring" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white overflow-hidden select-none">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Top CTA Section */}
        <div className="relative z-10 border-b border-teal-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Section */}
              <div>
                <p className="text-green-400 font-bold mb-4 text-sm tracking-wider">
                  #WeAreHereForYou
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                  What can we develop<br />together?
                </h2>
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  Let's Talk
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>

              {/* Right Section - Locations */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">
                  We are located in India and USA
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* India Location */}
                  <div className="flex items-start gap-4">
                    <img
                      src="https://flagcdn.com/w40/in.png"
                      alt="India"
                      className="w-10 h-7 mt-1 rounded shadow-md"
                    />
                    <div className="text-sm">
                      <p className="text-white/90 leading-relaxed">
                        The Hive Workspaces, Keppel One<br />
                        Paramount, Campus 3D, Level 6,<br />
                        No. 113, Mount Poonamallee Road,<br />
                        Porur, Chennai, Tamil Nadu - 600116
                      </p>
                    </div>
                  </div>

                  {/* USA Location */}
                  <div className="flex items-start gap-4">
                    <img
                      src="https://flagcdn.com/w40/us.png"
                      alt="USA"
                      className="w-10 h-7 mt-1 rounded shadow-md"
                    />
                    <div className="text-sm">
                      <p className="text-white/90 leading-relaxed">
                        4701 Patrick Henry Drive,<br />
                        Building 3, Santa Clara, CA - 95054,<br />
                        USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - About & CTA */}
        <div className="relative z-10 border-b border-teal-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h3 className="text-xl font-bold mb-6 tracking-wide">ABOUT CONTUS TECH</h3>
                <p className="text-white/80 leading-relaxed text-base mb-0">
                  CONTUS Tech is the trusted AI transformation partner for forward-thinking businesses. 
                  As an AI-led technology company, we help product and engineering teams adapt by 
                  leveraging world-class AI+ platforms, architectures, and concepts.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xl font-bold mb-4 text-white">
                  Want to Build a Next-Gen Digital Solution?
                </p>
                <p className="text-white/80 mb-6 text-base">
                  Let's create something extraordinary together!
                </p>
                <div>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Services Column */}
              <div>
                <button
                  onClick={() => toggleSection("services")}
                  className="flex items-center justify-between w-full text-left mb-6 lg:cursor-default"
                >
                  <h4 className="text-base font-bold text-white tracking-wider">SERVICES</h4>
                  <ChevronDown
                    className={`w-5 h-5 lg:hidden transition-transform duration-300 ${
                      expandedSections.services ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <ul
                  className={`space-y-3 overflow-hidden transition-all duration-300 ${
                    expandedSections.services || (typeof window !== 'undefined' && window.innerWidth >= 1024)
                      ? "max-h-[2000px]"
                      : "max-h-0 lg:max-h-[2000px]"
                  }`}
                >
                  <li>
                    <button
                      onClick={() => toggleSection("productDev")}
                      className="flex items-center justify-between w-full text-white/90 hover:text-white transition-colors text-sm group"
                    >
                      Product Development
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedSections.productDev ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <ul
                      className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                        expandedSections.productDev ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {productDevelopmentServices.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-white/70 hover:text-white transition-colors text-sm block"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="pt-2">
                    <button
                      onClick={() => toggleSection("digitalEng")}
                      className="flex items-center justify-between w-full text-white/90 hover:text-white transition-colors text-sm group"
                    >
                      Digital Engineering
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedSections.digitalEng ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <ul
                      className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                        expandedSections.digitalEng ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {digitalEngineeringServices.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-white/70 hover:text-white transition-colors text-sm block"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="pt-2">
                    <button
                      onClick={() => toggleSection("cloudDevops")}
                      className="flex items-center justify-between w-full text-white/90 hover:text-white transition-colors text-sm group"
                    >
                      Cloud & DevOps
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedSections.cloudDevops ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <ul
                      className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                        expandedSections.cloudDevops ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {cloudDevopsServices.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-white/70 hover:text-white transition-colors text-sm block"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="pt-2">
                    <button
                      onClick={() => toggleSection("ai")}
                      className="flex items-center justify-between w-full text-white/90 hover:text-white transition-colors text-sm group"
                    >
                      Artificial Intelligence
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedSections.ai ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <ul
                      className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                        expandedSections.ai ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {aiServices.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-white/70 hover:text-white transition-colors text-sm block"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="pt-2">
                    <button
                      onClick={() => toggleSection("cooperation")}
                      className="flex items-center justify-between w-full text-white/90 hover:text-white transition-colors text-sm group"
                    >
                      Cooperation Models
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedSections.cooperation ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <ul
                      className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                        expandedSections.cooperation ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {cooperationServices.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-white/70 hover:text-white transition-colors text-sm block"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Technologies Column */}
              <div>
                <h4 className="text-base font-bold text-white mb-6 tracking-wider">TECHNOLOGIES</h4>
                <ul className="space-y-3">
                  {technologies.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/90 hover:text-white transition-colors text-sm block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h4 className="text-base font-bold text-white mb-6 tracking-wider">COMPANY</h4>
                <ul className="space-y-3">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/90 hover:text-white transition-colors text-sm block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media Column */}
              <div>
                <h4 className="text-base font-bold text-white mb-6 tracking-wider">CONNECT WITH US</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-5 w-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="relative z-10 border-t border-teal-700/30 bg-teal-950/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col items-center gap-4 text-center">
              {/* Logo */}
              <div>
                <div className="text-2xl font-bold text-white">NEXCORE ALLIANCE</div>
              </div>

              {/* Copyright */}
              <p className="text-white/60 text-sm">
                © Copyright 2011 – {new Date().getFullYear()} by NEXCORE ALLIANCE
              </p>
              
              {/* Built by */}
              <p className="text-white/40 text-xs flex items-center gap-1">
                Built with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> by{" "}
                <a
                  href="https://code4bharat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  Code4Bharat
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 ${
            showBackToTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9594430295"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </a>
      </div>
    </>
  );
};

export default Footer;