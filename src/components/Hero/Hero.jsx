"use client";

import { useEffect, useState } from "react";

const ProductHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: "Faster Time to Market",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      label: "Private Cloud",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      label: "On Premise",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      label: "100% Secured",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      label: "Own Your Data and IP",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      label: "Our Full Stack Team",
    },
  ];

  // Generate hexagon positions for background pattern
  const generateHexagons = () => {
    const hexagons = [];
    const icons = [
      // Robot/AI icon
      <svg key="robot" className="w-8 h-8 text-teal-300/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>,
      // Code icon
      <svg key="code" className="w-8 h-8 text-teal-300/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>,
      // Database icon
      <svg key="database" className="w-8 h-8 text-teal-300/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>,
      // Chart icon
      <svg key="chart" className="w-8 h-8 text-teal-300/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      // Cloud icon
      <svg key="cloud" className="w-8 h-8 text-teal-300/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>,
      // Globe icon
      <svg key="globe" className="w-8 h-8 text-teal-300/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      // Mobile icon
      <svg key="mobile" className="w-8 h-8 text-teal-300/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>,
      // Chat icon
      <svg key="chat" className="w-8 h-8 text-teal-300/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>,
    ];

    const positions = [
      { top: "5%", left: "8%" },
      { top: "15%", right: "12%" },
      { top: "45%", left: "5%" },
      { top: "25%", left: "15%" },
      { top: "60%", right: "8%" },
      { bottom: "15%", left: "10%" },
      { bottom: "25%", right: "15%" },
      { top: "35%", right: "18%" },
    ];

    positions.forEach((pos, index) => {
      hexagons.push(
        <div
          key={index}
          className="absolute animate-float"
          style={{
            ...pos,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${4 + (index % 3)}s`,
          }}
        >
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Hexagon shape */}
            <div className="absolute inset-0 transform rotate-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50 1 95 25 95 75 50 99 5 75 5 25"
                  fill="rgba(255, 255, 255, 0.4)"
                  stroke="rgba(94, 234, 212, 0.3)"
                  strokeWidth="1"
                />
              </svg>
            </div>
            {/* Icon inside hexagon */}
            <div className="relative z-10">
              {icons[index % icons.length]}
            </div>
          </div>
        </div>
      );
    });

    return hexagons;
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center select-none bg-gradient-to-br from-[#E0F2F1] via-[#B2DFDB] to-[#80CBC4]">
      {/* Hexagonal Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {generateHexagons()}
      </div>

      {/* Diagonal line patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-teal-600"
              style={{
                width: "200%",
                top: `${i * 8}%`,
                left: "-50%",
                transform: `rotate(-15deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div
        className={`relative max-w-7xl mx-auto px-4 py-24 md:py-32 w-full transition-all duration-1000 z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 text-gray-900 max-w-5xl leading-tight transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A Full-Cycle Expertise in Product Design & Development
            <br />
            <span className="text-gray-800">
              Serving Businesses Across All Industries Globally
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg md:text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Partner with us to develop, deploy, and maintain end-to-end
            <br />
            custom software solutions tailored to your needs.
          </p>

          {/* Feature Badges with dotted connections */}
          <div className="relative w-full max-w-5xl mb-12">
            {/* Dotted connection lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              {/* Top row connections */}
              <line
                x1="25%"
                y1="15%"
                x2="38%"
                y2="15%"
                stroke="#1e3a5f"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <line
                x1="48%"
                y1="15%"
                x2="62%"
                y2="15%"
                stroke="#1e3a5f"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <line
                x1="72%"
                y1="15%"
                x2="85%"
                y2="15%"
                stroke="#1e3a5f"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              {/* Diagonal connections to bottom row */}
              <line
                x1="30%"
                y1="25%"
                x2="38%"
                y2="45%"
                stroke="#1e3a5f"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              <line
                x1="70%"
                y1="25%"
                x2="62%"
                y2="45%"
                stroke="#1e3a5f"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.4"
              />
              {/* Bottom row connection */}
              <line
                x1="48%"
                y1="55%"
                x2="62%"
                y2="55%"
                stroke="#1e3a5f"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.4"
              />
            </svg>

            {/* Top Row - 4 badges */}
            <div
              className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-700 delay-500 relative z-10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {features.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1e3a5f] text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 justify-center"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <span className="font-semibold text-sm lg:text-base text-center lg:text-left">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Row - 2 badges centered */}
            <div
              className={`flex flex-col sm:flex-row justify-center gap-6 transition-all duration-700 delay-700 relative z-10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {features.slice(4).map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1e3a5f] text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 justify-center"
                  style={{
                    animationDelay: `${(index + 4) * 100}ms`,
                  }}
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <span className="font-semibold text-sm lg:text-base">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button className="group relative bg-[#FF6B35] hover:bg-[#ff5722] text-white px-10 py-4 rounded-lg font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <span>Let's Talk</span>
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
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
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.75rem;
            line-height: 1.3;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductHero;