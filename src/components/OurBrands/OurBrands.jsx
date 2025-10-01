"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Enhanced brand data
const brands = [
  {
    name: "ISRC: International STEM and Robotics Championship",
    tagline: "Igniting Innovation, Inspiring Future Leaders",
    shortDescription: "STEM & Robotics Excellence",
    detailedDescription:
      "ISRC (International STEM and Robotics Championship) promotes hands-on learning and innovation in STEM through competitions, workshops, and events, enabling students and educators to excel in robotics, AI, and automation",
    keyFeatures: [
      "Annual STEM and robotics competitions for various age groups",
      "Global reach with participants from over 10 Indian states and 9 countries",
      "Focus on sustainable development through STEM innovations",
      "Partnerships with academic institutions and industry leaders",
      "Mission to support 10 million teachers in STEM and practical learning by 2030",
    ],
    stats: [
      { number: "10M+", label: "Target Teachers" },
      { number: "9", label: "Countries" },
      { number: "10+", label: "Indian States" },
    ],
    logo: "/isrc.png",
    link: "https://www.isrc.org.in",
    isExternal: true,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Code4Bharat: IT Solutions for a Global Marketplace",
    tagline: "Where Indian Expertise Meets Global Excellence",
    shortDescription: "Premium IT Solutions",
    detailedDescription:
      "Code4Bharat delivers world-class IT solutions, including web development, software, and offshore services, helping businesses enhance their digital presence and streamline operations.",
    keyFeatures: [
      "Custom web development and e-commerce platforms",
      "Robust mobile applications for iOS and Android",
      "Strategic IT consulting and cloud solutions",
      "Cost-effective offshore development services",
      "Digital marketing and SEO optimization",
    ],
    stats: [
      { number: "500+", label: "Projects Delivered" },
      { number: "50+", label: "Happy Clients" },
      { number: "24/7", label: "Support" },
    ],
    logo: "/c4b.png",
    link: "https://code4bharat.com/",
    isExternal: false,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "MarketIQ Junction: Digital Marketing & Strategy",
    tagline: "The Smart Stop for Digital Growth",
    shortDescription: "Digital Marketing Mastery",
    detailedDescription:
      "MarketIQ Junction is a digital marketing agency providing SEO, content marketing, and performance advertising to help businesses grow and reach their target audience effectively.",
    keyFeatures: [
      "Advanced SEO optimization for top search rankings",
      "Engaging content marketing strategies",
      "Comprehensive social media management",
      "High-converting performance advertising",
      "Data-driven analytics and ROI optimization",
    ],
    stats: [
      { number: "300%", label: "Avg ROI Increase" },
      { number: "1M+", label: "Impressions Generated" },
      { number: "98%", label: "Client Satisfaction" },
    ],
    logo: "/mj.png",
    link: "https://marketiqjunction.com/",
    isExternal: false,
    color: "from-green-500 to-emerald-500",
  },
];

const OurBrands = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === activeSlide ? "bg-blue-600 scale-125" : "bg-gray-300"
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
  id="our-brands"
  className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 overflow-hidden select-none"
>
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>

  {/* Floating Elements */}
  <div className="absolute inset-0">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-30 animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-16 sm:mt-20 lg:mt-24 min-h-[80vh]">
    {/* Section Heading */}
    <div className="text-center mb-12 sm:mb-16">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-block text-blue-600 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 px-3 sm:px-4 py-1 bg-white/50 rounded-full select-none">
          Our Portfolio
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent select-none">
          Our Brands
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 select-none">
          Discover our diverse ecosystem of innovative brands, each designed to transform industries and empower communities
        </p>
      </div>

      {/* Decorative Line */}
      <div className="flex justify-center items-center mt-6 sm:mt-8 mb-8 sm:mb-12 select-none">
        <div
          className={`w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
        <div
          className={`w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-3 sm:mx-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100 rotate-180" : "opacity-0 scale-0"
          }`}
        />
        <div
          className={`w-16 sm:w-20 h-0.5 bg-gradient-to-l from-transparent via-purple-600 to-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
      </div>
    </div>

    {/* Brands Carousel */}
    <div
      className={`transition-all duration-1000 delay-400 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Slider {...settings} className="enhanced-slider equal-height-slider">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="px-2 sm:px-4"
            style={{ height: "100%", display: "flex" }}
          >
            <div
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-white/20 w-full select-none"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ minHeight: "700px", display: "flex", flexDirection: "column" }}
            >
              {/* Gradient Border */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${brand.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}
              ></div>

              {/* Card Content */}
              <div className="relative p-6 sm:p-8 flex flex-col h-full">
                {/* Brand Icon / Logo */}
                <div className="flex items-center justify-center mb-4 sm:mb-6 w-full">
                  <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-[3/2]">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name.split(":")[0]} Logo`}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      priority
                    />
                  </div>
                </div>

                {/* Brand Info */}
                <div className="mb-4 sm:mb-6 select-none">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#051d40] group-hover:text-blue-600 transition-colors duration-300 select-none">
                    {brand.name.split(":")[0]}
                  </h3>
                  <p
                    className={`text-base sm:text-lg font-semibold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent mb-2 select-none`}
                  >
                    {brand.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 font-medium select-none">
                    {brand.shortDescription}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 select-none">
                  {brand.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-300"
                    >
                      <div
                        className={`text-lg sm:text-2xl font-bold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent select-none`}
                      >
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-600 font-medium select-none">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div
                  className="mb-4 sm:mb-6 select-none"
                  style={{ minHeight: "200px", maxHeight: "200px", overflow: "hidden" }}
                >
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 select-none">
                    {brand.detailedDescription}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 select-none">
                    <h4 className="text-base sm:text-lg font-semibold text-[#051d40] mb-2 sm:mb-3 select-none">
                      Key Features:
                    </h4>
                    {brand.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 sm:space-x-3 select-none">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${brand.color} mt-1.5 sm:mt-2 flex-shrink-0`}
                        ></div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed select-none">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto select-none">
                  {brand.isExternal ? (
                    <a
                      href={brand.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${brand.color} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base select-none`}
                    >
                      <span>Explore {brand.name.split(":")[0]}</span>
                    </a>
                  ) : (
                    <Link
                      href={brand.link}
                      className={`w-full inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${brand.color} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base select-none`}
                    >
                      <span>Visit {brand.name.split(":")[0]}</span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              {hoveredCard === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl pointer-events-none"></div>
              )}
            </div>
          </div>
        ))}
      </Slider>
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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

        /* Equal Height Slider Styles - Enhanced */
        .equal-height-slider .slick-track {
          display: flex !important;
          align-items: stretch !important;
        }

        .equal-height-slider .slick-slide {
          height: auto !important;
          display: flex !important;
        }

        .equal-height-slider .slick-slide > div {
          height: 100%;
          width: 100%;
          display: flex !important;
          flex-direction: column;
        }

        .equal-height-slider .slick-slide .group {
          height: 100% !important;
          min-height: 700px;
        }

        /* Enhanced Slider Styles */
        .enhanced-slider .slick-dots {
          bottom: -170px !important;
          position: relative !important;
        }

        .enhanced-slider .slick-dots li {
          margin: 0 4px;
        }

        .enhanced-slider .slick-prev,
        .enhanced-slider .slick-next {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .enhanced-slider .slick-prev:hover,
        .enhanced-slider .slick-next:hover {
          background: white;
          transform: scale(1.1);
        }

        .enhanced-slider .slick-prev {
          left: -20px;
        }

        .enhanced-slider .slick-next {
          right: -20px;
        }

        .enhanced-slider .slick-prev:before,
        .enhanced-slider .slick-next:before {
          color: #051d40;
          font-size: 16px;
        }

        /* Enhanced responsive styles */
        @media (min-width: 640px) {
          .enhanced-slider .slick-prev,
          .enhanced-slider .slick-next {
            width: 50px;
            height: 50px;
          }

          .enhanced-slider .slick-prev {
            left: -25px;
          }

          .enhanced-slider .slick-next {
            right: -25px;
          }

          .enhanced-slider .slick-prev:before,
          .enhanced-slider .slick-next:before {
            font-size: 20px;
          }
        }

        /* Mobile specific adjustments */
        @media (max-width: 640px) {
          .enhanced-slider .slick-prev {
            left: 10px;
          }

          .enhanced-slider .slick-next {
            right: 10px;
          }

          .enhanced-slider .slick-dots {
            bottom: -100px !important;
          }
        }
      `}</style>
    </>
  );
};

export default OurBrands;
