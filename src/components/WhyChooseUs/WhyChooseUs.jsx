"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaHandsHelping, FaGlobe, FaLightbulb, FaStar } from "react-icons/fa";
import Link from "next/link";

const reasons = [
  {
    title: "Holistic Approach",
    description:
      "At Nex Core Alliance LLP, we take a holistic approach to education and technology. Through our diverse brands, we offer comprehensive solutions that cater to students, educators, and businesses, ensuring that each stakeholder benefits from our expertise.",
    icon: <FaHandsHelping size={40} />,
    color: "from-blue-500 to-blue-700",
    hoverColor: "from-cyan-400 to-cyan-600",
    accentColor: "text-cyan-300",
  },
  {
    title: "Global Reach",
    description:
      "Our brands have a global presence, working with clients and participants from multiple countries. Whether it's through ISRC's international competitions, Code4Bharat's overseas IT services, or Education.Code4Bharat's global job placement network, we are truly a global organization.",
    icon: <FaGlobe size={40} />,
    color: "from-purple-500 to-purple-700",
    hoverColor: "from-pink-400 to-pink-600",
    accentColor: "text-pink-300",
  },
  {
    title: "Commitment to Innovation",
    description:
      "Innovation is at the heart of everything we do. From fostering new technologies in education through ISRC to delivering cutting-edge IT solutions with Code4Bharat, we constantly strive to stay ahead of industry trends and provide forward-thinking solutions.",
    icon: <FaLightbulb size={40} />,
    color: "from-green-500 to-green-700",
    hoverColor: "from-emerald-400 to-emerald-600",
    accentColor: "text-emerald-300",
  },
  {
    title: "Excellence in Service",
    description:
      "We pride ourselves on delivering excellence in every aspect of our work. Whether it's ensuring the success of a STEM competition, developing a flawless web application, or placing a student in their dream job, Nex Core Alliance LLP is committed to exceeding expectations.",
    icon: <FaStar size={40} />,
    color: "from-orange-500 to-orange-700",
    hoverColor: "from-yellow-400 to-yellow-600",
    accentColor: "text-yellow-300",
  },
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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
        rootMargin: "-100px",
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
    <>
      <section
  ref={sectionRef}
  id="why-choose-us"
  className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800 overflow-hidden select-none"
>
  {/* Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
  </div>

  {/* Floating Elements */}
  <div className="absolute inset-0">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className={`absolute rounded-full opacity-20 animate-float ${
          i % 4 === 0
            ? "w-3 h-3 bg-blue-500"
            : i % 4 === 1
            ? "w-2 h-2 bg-purple-500"
            : i % 4 === 2
            ? "w-4 h-4 bg-green-500"
            : "w-2 h-2 bg-orange-500"
        }`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${4 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
    {/* Section Heading */}
    <div className="text-center mb-16 sm:mb-20 select-none">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-block text-blue-600 text-sm font-bold uppercase tracking-widest mb-4 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm select-none">
          Why Choose Us
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent leading-tight select-none">
          Nex Core Alliance: Where Learning Meets Innovation
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium select-none">
          Discover what makes us the preferred choice for education, technology, and innovation solutions
        </p>
      </div>

      {/* Decorative Line */}
      <div className="flex justify-center items-center mt-8 mb-12 select-none">
        <div
          className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
        <div
          className={`w-4 h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100 rotate-180" : "opacity-0 scale-0"
          }`}
        />
        <div
          className={`w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
      </div>
    </div>

    {/* Reasons Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
      {reasons.map((reason, index) => (
        <div
          key={index}
          className={`group relative bg-gradient-to-b ${reason.color} text-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-500 flex flex-col items-center text-center min-h-[300px] sm:min-h-[350px] overflow-hidden select-none`}
          style={{
            transitionDelay: `${index * 150}ms`,
          }}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${reason.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center h-full">
            {/* Icon */}
            <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
              <div className={`${reason.accentColor} group-hover:text-white transition-colors duration-300`}>
                {React.cloneElement(reason.icon, {
                  size: window.innerWidth < 640 ? 36 : 44,
                })}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-black mb-4 text-yellow-200 group-hover:text-white transition-colors duration-300 leading-tight select-none">
              {reason.title}
            </h3>

            {/* Description */}
            <p className="flex-1 leading-relaxed text-sm sm:text-base text-gray-200 group-hover:text-gray-100 transition-colors duration-300 font-medium select-none">
              {reason.description}
            </p>

            {/* Animated Accent Bar */}
            <div className="mt-6 w-full select-none">
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-white/60 rounded-full transition-all duration-1000 ${
                    hoveredCard === index ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full opacity-30 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" />

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500" />
        </div>
      ))}
    </div>

    {/* Bottom Section */}
    <div
      className={`text-center mt-16 sm:mt-20 transition-all duration-1000 delay-800 select-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-white/30 select-none">
        <h3 className="text-2xl sm:text-3xl font-black text-[#051d40] mb-4 bg-gradient-to-r from-[#051d40] to-blue-600 bg-clip-text text-transparent select-none">
          Ready to Experience Excellence?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium select-none">
          Join our growing community of successful students, educators, and businesses who trust Nex Core Alliance for their growth and innovation needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 select-none">
          <Link href="/contact-us">
            <button className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base select-none">
              <span>Get Started Today</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>

          <Link href="/our-brands">
            <button className="inline-flex items-center justify-center space-x-2 bg-white text-gray-800 px-8 py-4 rounded-full font-bold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 text-base select-none">
              <span>Learn About Our Brands</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


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
    </>
  );
};

export default WhyChooseUs;
