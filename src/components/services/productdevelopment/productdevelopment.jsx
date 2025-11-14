// pages/product-development.jsx

"use client";

import Partners from '@/components/Partners/Partners';
import {
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  Clock,
  Target,
  Code,
  Rocket,
  Layers,
  RefreshCw,
  Shield,
  Lightbulb,
  Headphones,
  Cloud,
  ChevronRight,
  TrendingUp,
  Calendar,
} from 'lucide-react';
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductDevelopment() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Product Consulting",
      desc: "Seamless product engineering from start to finish, including research, development, and deployment.",
      tagline: "Big brain energy for your next big thing",
      icon: Lightbulb,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "SaaS Product Development",
      desc: "Transform legacy systems into scalable SaaS platforms supporting multi-tenant architecture.",
      tagline: "From monolith to masterpiece",
      icon: Layers,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Product Design & Engineering",
      desc: "Rapid growth with adaptable frameworks that fit any product timeline.",
      tagline: "Where aesthetics meet algorithms",
      icon: Code,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "MVP Development",
      desc: "Develop fast, scalable MVPs using top-tier engineering talent.",
      tagline: "Ship fast, iterate faster",
      icon: Rocket,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Product Modularization",
      desc: "Re-engineer products to enhance features and reduce downtime.",
      tagline: "Complexity? We broke it down",
      icon: Layers,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "QA & Testing",
      desc: "Thorough validation to guarantee quality, reliability, and security.",
      tagline: "Breaking things so you don't have to",
      icon: Shield,
      gradient: "from-teal-500 to-green-500"
    },
    {
      title: "Product Prototyping",
      desc: "Turn innovative ideas into powerful prototypes that wow customers.",
      tagline: "Ideas → Reality → Vibes ✨",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Product Support & Maintenance",
      desc: "Keep your product running smoothly with proactive updates.",
      tagline: "Always on, never off",
      icon: Headphones,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Cloud Integration Services",
      desc: "Migrate to cloud securely with scalable multi-cloud architecture.",
      tagline: "Elevate to the cloud layer",
      icon: Cloud,
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  const [activeStep, setActiveStep] = useState(null);

  const processSteps = [
    { 
      step: "01", 
      title: "Strategy", 
      desc: "Market research, competitor analysis & product roadmap.",
      details: "We dive deep into your market, analyze competitors, and craft a strategic roadmap that positions your product for success.",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600"
    },
    { 
      step: "02", 
      title: "Planning", 
      desc: "Timeline mapping, milestone creation & resource allocation.",
      details: "Detailed project planning with clear milestones, deliverables, and resource optimization for maximum efficiency.",
      icon: Calendar,
      color: "from-blue-500 to-cyan-600"
    },
    { 
      step: "03", 
      title: "Development", 
      desc: "Agile engineering with focus on scalability & performance.",
      details: "Expert engineering using modern tech stacks, agile methodologies, and best practices for scalable, maintainable code.",
      icon: Code,
      color: "from-purple-500 to-indigo-600"
    },
    { 
      step: "04", 
      title: "Testing", 
      desc: "Rigorous QA to ensure reliability, security & quality.",
      details: "Comprehensive testing across devices, browsers, and scenarios to ensure flawless performance and security.",
      icon: CheckCircle,
      color: "from-orange-500 to-red-600"
    },
    { 
      step: "05", 
      title: "Launch", 
      desc: "Deployment & growth-driven enhancements.",
      details: "Seamless deployment with ongoing support, monitoring, and iterative improvements based on real user data.",
      icon: Rocket,
      color: "from-pink-500 to-rose-600"
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002828] via-[#003B3B] to-[#005050] text-white py-36 px-6 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-24 left-10 w-96 h-96 bg-green-400 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-24 right-10 w-[500px] h-[500px] bg-orange-400 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-full px-7 py-3 shadow-lg shadow-green-900/20">
              <Zap className="w-4 h-4 text-green-300" />
              <span className="text-sm font-semibold tracking-wide text-green-300">
                Engineering Tomorrow's Digital Experiences
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.15] mb-8 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Build Products That
              <br />
              <span className="text-green-300 drop-shadow-xl">Disrupt Markets</span>
            </h1>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed mb-14">
              Nexcore Alliance is your strategic partner in building future-ready digital products.
              From ideation to launch, we combine cutting-edge engineering with design excellence —
              creating products that users love and investors trust.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
              {[
                { icon: <Target className="text-green-400 w-6 h-6" />, value: "200+", label: "Products Launched", color: "green" },
                { icon: <Zap className="text-orange-400 w-6 h-6" />, value: "4X", label: "Faster Time-To-Market", color: "orange" },
                { icon: <Users className="text-blue-400 w-6 h-6" />, value: "50+", label: "Expert Engineers", color: "blue" },
                { icon: <Clock className="text-purple-400 w-6 h-6" />, value: "95%", label: "On-Time Delivery", color: "purple" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 hover:scale-[1.05] shadow-lg shadow-black/10"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {stat.icon}
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              {[
                "End-to-End Product Development",
                "Agile & Scalable Architecture",
                "Dedicated Product Teams",
                "Post-Launch Support",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-all"
                >
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a
                href="/contact-us"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all px-12 py-4 text-lg font-bold rounded-xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.07] inline-flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/portfolio"
                className="bg-white/5 backdrop-blur-md border-2 border-white/20 hover:bg-white/10 transition-all px-12 py-4 text-lg font-bold rounded-xl hover:scale-[1.07] inline-flex items-center justify-center gap-2"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Trusted Logos */}
          {/* <div className="mt-20 pt-12 border-t border-white/10">
            <p className="text-center text-sm text-gray-400 mb-8 tracking-wide">
              TRUSTED BY OUR SISTER BRANDS & PARTNERS
            </p>

            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20 opacity-80">
              {[
                { name: "Code4Bharat", logo: "/c4b.png" },
                { name: "MarketIQ Junction", logo: "/mj.png" },
                { name: "ISRC", logo: "/isrc.png" },
                { name: "GIO", logo: "/gio.png" },
                { name: "EduMomentum", logo: "/edumotromu.png" },
              ].map((brand, idx) => (
                <div key={idx} className="hover:opacity-100 transition-opacity">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-160 md:h-200 w-auto grayscale hover:grayscale-0 transition-all object-contain"
                  />
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </section>


      {/* ================= CLIENT LOGOS ================= */}
      {/* <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-10">
            Trusted by Startups to Fortune Brands in 12+ Countries.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 opacity-80">
            {[
              "ADCB", "HYUNDAI", "VERSA", "COCACOLA", "MERCEDES", "ICICI"
            ].map((logo, i) => (
              <div key={i} className="text-center text-sm font-semibold">
                {logo}
              </div>
            ))}
          </div>
        </div>
        <Partners />
      </section> */}

      {/* ================= CLIENT LOGOS ================= */}
      <section className="py-16 bg-white px-6" id="partners">
        <div className="max-w-6xl mx-auto text-center">
          <p className="inline-block bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider mb-6 shadow-lg">
            {/* Trusted by Startups to Fortune Brands in 12+ Countries. */}
            Trusted Partnerships
          </p>

          {/* Partner data */}
          {(() => {
            const [isVisible, setIsVisible] = React.useState(false);

            React.useEffect(() => {
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

            return (
              <>
                {/* Scrolling Logos - Enhanced */}
                <div
                  className={`overflow-hidden relative mb-12 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100" : "opacity-0"
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
              </>
            );
          })()}

        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                What We Do Best
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Custom product development that hits different.
              <span className="block mt-2 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Data-driven growth. Zero cap.
              </span>
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm font-semibold text-purple-600 mb-4 italic">
                    "{item.tagline}"
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Hover indicator */}
                  <div className={`mt-6 flex items-center text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Learn more
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Let's Build Something Epic
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-purple-300 transform hover:scale-105 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Our Methodology
            </span>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Digital Product Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven framework that transforms ideas into market-ready products
            </p>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block relative mb-12">
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 opacity-20"></div>

            <div className="grid grid-cols-5 gap-6 relative">
              {processSteps.map((p, i) => {
                const Icon = p.icon;
                const isActive = activeStep === i;

                return (
                  <div
                    key={i}
                    className="relative"
                    onMouseEnter={() => setActiveStep(i)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <div className={`
                    p-8 bg-white border-2 rounded-2xl shadow-lg 
                    transition-all duration-300 cursor-pointer
                    ${isActive ? 'transform -translate-y-4 shadow-2xl border-transparent' : 'border-gray-200 hover:border-gray-300'}
                  `}>
                      <div className={`
                      w-16 h-16 rounded-xl bg-gradient-to-br ${p.color} 
                      flex items-center justify-center mb-6 mx-auto
                      transition-transform duration-300
                      ${isActive ? 'scale-110' : ''}
                    `}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className={`
                        inline-block px-3 py-1 bg-gradient-to-r ${p.color} 
                        text-white text-sm font-bold rounded-full shadow-lg
                      `}>
                          {p.step}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-center text-gray-900">
                        {p.title}
                      </h3>
                      <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
                        {p.desc}
                      </p>

                      <div className={`
                      overflow-hidden transition-all duration-300
                      ${isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-xs text-gray-500 text-center leading-relaxed">
                            {p.details}
                          </p>
                        </div>
                      </div>

                      {i < processSteps.length - 1 && (
                        <div className="absolute top-24 -right-3 transform translate-x-1/2 z-10">
                          <ChevronRight className={`
                          w-6 h-6 transition-colors duration-300
                          ${isActive ? 'text-purple-500' : 'text-gray-300'}
                        `} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet: Vertical Timeline */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((p, i) => {
              const Icon = p.icon;
              const isActive = activeStep === i;

              return (
                <div key={i} className="relative pl-16">
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                  )}

                  <div className={`
                  absolute left-0 top-0 w-16 h-16 rounded-xl 
                  bg-gradient-to-br ${p.color}
                  flex items-center justify-center shadow-lg
                  transition-transform duration-300
                  ${isActive ? 'scale-110' : ''}
                `}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div
                    className={`
                    p-6 bg-white border-2 rounded-xl shadow-md
                    transition-all duration-300 cursor-pointer
                    ${isActive ? 'shadow-xl border-transparent' : 'border-gray-200'}
                  `}
                    onClick={() => setActiveStep(activeStep === i ? null : i)}
                  >
                    <span className={`
                    inline-block px-3 py-1 bg-gradient-to-r ${p.color} 
                    text-white text-xs font-bold rounded-full mb-3
                  `}>
                      {p.step}
                    </span>

                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {p.desc}
                    </p>

                    <div className={`
                    overflow-hidden transition-all duration-300
                    ${isActive ? 'max-h-32 opacity-100 mt-3' : 'max-h-0 opacity-0'}
                  `}>
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {p.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Ready to start your project?
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE NEXCORE ================= */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose Nexcore Alliance?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "98% Client Retention", desc: "We focus on long-term relationships, consistent delivery, and measurable results." },
              { title: "Cost‑Efficient Development", desc: "Streamlined processes & smart solutions with no compromise on quality." },
              { title: "On‑Time Delivery", desc: "We deliver on schedule, ensuring your business stays aligned with your goals." },
              { title: "500+ Products Developed", desc: "Proven expertise across industries, delivering world‑class solutions." },
              { title: "16+ Years Experience", desc: "Our engineers solve complex challenges with future‑ready tech." },
              { title: "300+ In‑House Engineers", desc: "A strong team powering end‑to‑end development." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border rounded-xl shadow">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      {/* <section className="py-20 bg-[#003C3C] text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          From Idea To Launch — We Build Digital Products That Grow Your Business
        </h2>
        <p className="max-w-3xl mx-auto text-lg opacity-90 mb-10">
          Nexcore Alliance helps you design, engineer, and deliver world‑class digital products
          customized for your market and your users.
        </p>
        <a
          href="/contact"
          className="bg-orange-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600"
        >
          Let’s Talk
        </a>
      </section> */}
    </div>
  );
}
