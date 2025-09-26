"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaHandsHelping, FaGlobe, FaLightbulb, FaStar } from "react-icons/fa";
import Link from "next/link";

const reasons = [
  {
    title: "Holistic Approach",
    description:
      "We take a holistic approach to education and technology, ensuring students, educators, and businesses benefit from our expertise.",
    icon: <FaHandsHelping size={36} />,
    color: "from-blue-500 to-blue-700",
    hoverColor: "from-cyan-400 to-cyan-600",
    accentColor: "text-cyan-300",
  },
  {
    title: "Global Reach",
    description:
      "Our brands work with clients and participants across the globe through education, IT services, and job placement networks.",
    icon: <FaGlobe size={36} />,
    color: "from-purple-500 to-purple-700",
    hoverColor: "from-pink-400 to-pink-600",
    accentColor: "text-pink-300",
  },
  {
    title: "Commitment to Innovation",
    description:
      "Innovation drives us. From education tech to cutting-edge IT solutions, we stay ahead of trends with forward-thinking solutions.",
    icon: <FaLightbulb size={36} />,
    color: "from-green-500 to-green-700",
    hoverColor: "from-emerald-400 to-emerald-600",
    accentColor: "text-emerald-300",
  },
  {
    title: "Excellence in Service",
    description:
      "From STEM competitions to flawless applications and global placements, we deliver excellence every step of the way.",
    icon: <FaStar size={36} />,
    color: "from-orange-500 to-orange-700",
    hoverColor: "from-yellow-400 to-yellow-600",
    accentColor: "text-yellow-300",
  },
];

const WhyChooseUs = () => {
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

  return (
    <>
      <section
        ref={sectionRef}
        id="why-choose-us"
        className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800 overflow-hidden"
      >
        {/* Background Circles (lighter for performance) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-12 left-12 w-48 h-48 bg-blue-300/20 rounded-full animate-blob"></div>
          <div className="absolute bottom-12 right-12 w-56 h-56 bg-green-300/20 rounded-full animate-blob animation-delay-2000"></div>
        </div>

        {/* Floating Elements (reduced to 6 for performance) */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-20 animate-float ${
                i % 2 === 0 ? "w-2 h-2 bg-blue-500" : "w-3 h-3 bg-purple-500"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <span
              className={`inline-block text-blue-600 text-sm font-bold uppercase tracking-widest mb-4 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Why Choose Us
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent leading-tight transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Nex Core Alliance: Where Learning Meets Innovation
            </h2>
            <p
              className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Discover what makes us the preferred choice for education, technology, and innovation.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-b ${reason.color} text-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 flex flex-col items-center text-center min-h-[280px]`}
              >
                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${reason.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-yellow-200 group-hover:text-white transition-colors">
                    {reason.title}
                  </h3>
                  <p className="flex-1 text-sm sm:text-base text-gray-200 group-hover:text-gray-100">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center mt-12 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-white/30">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#051d40] mb-4">
                Ready to Experience Excellence?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our growing community of successful students, educators, and businesses.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact-us">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/our-brands">
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all">
                    Learn About Our Brands
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-blob {
          animation: blob 6s infinite ease-in-out;
        }
        .animate-float {
          animation: float 5s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
};

export default WhyChooseUs;
