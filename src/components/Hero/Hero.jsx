"use client";

import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center select-none"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background - About Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DBE2EF] via-[#F8FAFF] to-[#E8F2FF]">
        {/* Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
            style={{
              transform: `translate(${-mousePosition.x}px, ${
                mousePosition.y
              }px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
            style={{
              transform: `translate(${
                mousePosition.x * 0.5
              }px, ${-mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
        </div>

        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(5,29,64,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(5,29,64,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.3}px, ${
              mousePosition.y * 0.3
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Parallax content container */}
      <div
        className={`relative max-w-7xl mx-auto px-4 py-24 md:py-32 w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{
          userSelect: "none",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge with pulse effect */}
          <div
            className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-blue-200 rounded-full px-5 py-2.5 mb-8 transition-all duration-700 delay-200 hover:scale-105 hover:bg-white/90 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Innovating Since 2011
            </span>
          </div>

          {/* Main Heading with plain text */}
          <h1
            id="hero-heading"
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Empowering Innovation,
            <br />
            Education & Technology
          </h1>

          {/* Decorative Line */}
          <div className="flex justify-center items-center mb-8">
            <div
              className={`w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
            <div
              className={`w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 scale-100 rotate-180"
                  : "opacity-0 scale-0"
              }`}
            />
            <div
              className={`w-20 h-0.5 bg-gradient-to-l from-transparent via-purple-600 to-transparent transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
          </div>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed transition-all duration-700 delay-500 font-light ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Bridging the gap between education and technology to create a
            brighter future.
          </p>

          {/* Feature Highlights */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full max-w-4xl transition-all duration-700 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {[
              {
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                label: "IT Solutions",
                color: "from-purple-600 to-pink-600",
              }
              ,{
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                label: "STEM Education",
                color: "from-blue-600 to-blue-800",
              },
              ,
              {
                icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                label: "Professional Development",
                color: "from-green-600 to-teal-600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300`}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item.icon}
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto transition-all duration-700 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <button className="group relative bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1976d2] to-[#051d40] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <a
                href="/our-brands"
                className="group relative z-10 flex items-center gap-2 justify-center transition-colors duration-300"
              >
                <span className="flex items-center gap-2">
                  Explore Our Brands
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                </span>
              </a>
            </button>
            <button className="group relative bg-white/80 backdrop-blur-sm border-2 border-[#051d40] text-[#051d40] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#051d40] hover:text-white shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-[#051d40] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <a
                href="/contact-us"
                className="group relative z-10 flex items-center gap-2 justify-center transition-colors duration-300"
              >
                <span className="flex items-center gap-2">
                  Get in Touch
                  <svg
                    className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </a>
            </button>
          </div>

          {/* Scroll indicator */}
          <div
            className={`mt-20 flex flex-col items-center gap-3 transition-all duration-700 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-sm text-gray-500 font-medium tracking-wider uppercase">
              Discover More
            </span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2 hover:border-blue-600 transition-colors duration-300 cursor-pointer">
              <div className="w-1.5 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float linear infinite;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
