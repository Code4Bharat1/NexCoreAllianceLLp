"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      <div
  className={`relative max-w-7xl mx-auto px-4 py-40 md:py-48 flex flex-col-reverse md:flex-row items-center transition-all duration-1000 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  } hero-content`}
  style={{ userSelect: "none" }} // Prevent text selection
>
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Empowering Innovation, Education, and Technology
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-lg mx-auto md:mx-0 drop-shadow-sm">
            Bridging the gap between education and technology to create a brighter future.
          </p>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <Link
              href="/our-brands"
              className="bg-[#051D40] text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#051D40] shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              Explore Our Brands
            </Link>
            <Link
              href="/contact-us"
              className="bg-white text-[#051D40] px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        
        
      </div>

      <style jsx>{`
        section {
          background-color: #051d40;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        @media (min-width: 820px) {
          section {
            background-image: url("/images/desktop-hero.jpg");
          }
        }

        @media (max-width: 819px) {
          section {
            background-image: url("/images/mobile-hero.jpg");
          }

          .hero-content {
            justify-content: flex-start;
            padding-top: 100px;
            padding-bottom: 0;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
