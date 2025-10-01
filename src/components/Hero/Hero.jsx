"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center select-none"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#051D40] via-[#0a2f5f] to-[#051D40]">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
            style={{
              transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
          <div
            className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${-mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
            }}
          ></div>
        </div>
      </div>

      {/* Hero Background Images */}
      {/* <div className="absolute inset-0">
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/desktop-hero.jpg')" }}
        ></div>
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/mobile-hero.jpg')" }}
        ></div>
      </div> */}

      {/* Overlay with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`relative max-w-7xl mx-auto px-4 py-24 md:py-32 w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ userSelect: "none" }}
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge/Tag */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">
              Innovating Since 2020
            </span>
          </div>

          {/* Main Heading with gradient text */}
          <h1
            id="hero-heading"
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
              Empowering Innovation,
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Education & Technology
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Bridging the gap between education and technology to create a
            brighter, more connected future for everyone.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/our-brands"
              className="group relative bg-white text-[#051D40] px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
            
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Explore Our Brands
              </span>
            </Link>
            <Link
              href="/contact-us"
              className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-[#051D40] shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
             
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <span className="relative z-10 transition-colors duration-300">
                Get in Touch
              </span>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div
            className={`mt-16 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-sm text-gray-300 font-medium">
              Discover More
            </span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
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
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100vh) translateX(50px);
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