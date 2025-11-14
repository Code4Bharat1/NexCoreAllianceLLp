"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaRocket,
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaAward,
  FaGlobe,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    brands: 0,
    students: 0,
    projects: 0,
    years: 0,
  });
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

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      const targets = {
        brands: 5,
        students: 10000,
        projects: 500,
        years: 13,
      };

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          brands: Math.floor(targets.brands * progress),
          students: Math.floor(targets.students * progress),
          projects: Math.floor(targets.projects * progress),
          years: Math.floor(targets.years * progress),
        });

        if (currentStep >= steps) {
          setCounts(targets);
          clearInterval(timer);
        }
      }, increment);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const coreValues = [
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Innovation",
      description: "Constantly pushing boundaries with creative solutions and cutting-edge technology.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Collaboration",
      description: "Building strong partnerships and fostering teamwork for collective success.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality in everything we do.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical practices in all interactions.",
      color: "from-green-500 to-teal-600",
    },
  ];

  const statistics = [
    { label: "Active Brands", value: counts.brands, suffix: "+", icon: <FaRocket /> },
    { label: "Students Trained", value: counts.students, suffix: "+", icon: <FaGraduationCap /> },
    { label: "Projects Delivered", value: counts.projects, suffix: "+", icon: <FaLaptopCode /> },
    { label: "Years of Experience", value: counts.years, suffix: "+", icon: <FaChartLine /> },
  ];

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 overflow-hidden select-none"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-500 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider mb-6 shadow-lg">
              Who We Are
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-[#2F6B6B] via-[#1976d2] to-[#2F6B6B] bg-clip-text text-transparent">
              About Nexcore Alliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future through innovation, education, and transformative technology solutions
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex justify-center items-center mt-8">
            <div className={`w-20 h-0.5 bg-gradient-to-r from-transparent via-[#2F6B6B] to-transparent transition-all duration-1000 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
            <div className={`w-4 h-4 bg-gradient-to-r from-[#2F6B6B] to-blue-600 rounded-full mx-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100 rotate-180" : "opacity-0 scale-0"}`} />
            <div className={`w-20 h-0.5 bg-gradient-to-l from-transparent via-blue-600 to-transparent transition-all duration-1000 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
          </div>
        </div>

        {/* Main Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Nexcore Alliance Card */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl border-2 border-teal-100 hover:shadow-3xl transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F6B6B] to-[#1F4B4B] rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                  <FaGlobe className="text-white text-3xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Nexcore Alliance LLP
                  </h3>
                  <p className="text-[#2F6B6B] font-semibold">Visionary Organization</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nexcore Alliance LLP is a visionary organization at the forefront of driving change in the fields of{" "}
                  <span className="font-bold text-[#2F6B6B]">IT solutions</span>,{" "}
                  <span className="font-bold text-blue-600">STEM education</span>, and{" "}
                  <span className="font-bold text-purple-600">professional development</span>.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With a diverse portfolio of brands, we are committed to empowering individuals, institutions, and businesses with innovative tools, knowledge, and services to thrive in the modern digital and educational landscape.
                </p>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2F6B6B]">{counts.brands}+</div>
                    <div className="text-sm text-gray-600">Active Brands</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{counts.years}+</div>
                    <div className="text-sm text-gray-600">Years Strong</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Foundation Card */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl border-2 border-blue-100 hover:shadow-3xl transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                  <FaRocket className="text-white text-3xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Our Foundation
                  </h3>
                  <p className="text-blue-600 font-semibold">Core Beliefs</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Founded with the core belief that{" "}
                  <span className="font-bold text-blue-600">education</span> and{" "}
                  <span className="font-bold text-[#2F6B6B]">technology</span> are the twin pillars of progress, Nexcore Alliance LLP seeks to create a sustainable impact.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through our distinct brands, we represent the mission to bridge the gap between learning and technology, ensuring the next generation is prepared for the challenges of tomorrow.
                </p>

                {/* Key Highlights */}
                <div className="space-y-3 mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Education-first approach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2F6B6B] rounded-full"></div>
                    <span className="text-gray-700">Technology-driven solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Global impact focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border-2 border-gray-100 hover:border-[#2F6B6B] hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2F6B6B] to-[#1F4B4B] rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Nexcore Alliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students, educators, and businesses who trust Nexcore Alliance for their growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2F6B6B] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Explore Our Brands
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#2F6B6B] transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float linear infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default About;