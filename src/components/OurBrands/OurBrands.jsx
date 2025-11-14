"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// All 9 Nexcore Alliance brands
const brands = [
  {
    name: "Code4Bharat",
    tagline: "Where Indian Expertise Meets Global Excellence",
    shortDescription: "Premium IT Solutions & Development",
    detailedDescription:
      "Code4Bharat delivers world-class IT solutions, including web development, mobile apps, and custom software, helping businesses enhance their digital presence and streamline operations with cutting-edge technology.",
    keyFeatures: [
      "Custom web development and e-commerce platforms",
      "Robust mobile applications for iOS and Android",
      "Strategic IT consulting and cloud solutions",
      "Cost-effective offshore development services",
      "Digital transformation and enterprise solutions",
    ],
    stats: [
      { number: "500+", label: "Projects Delivered" },
      { number: "50+", label: "Happy Clients" },
      { number: "24/7", label: "Support" },
    ],
    logo: "/c4b.png",
    link: "https://code4bharat.com/",
    isExternal: true,
    color: "from-[#2F6B6B] to-[#1F4B4B]",
  },
  {
    name: "MarketIQ Junction",
    tagline: "The Smart Stop for Digital Growth",
    shortDescription: "Digital Marketing & Strategy",
    detailedDescription:
      "MarketIQ Junction is a digital marketing powerhouse providing SEO, content marketing, social media management, and performance advertising to help businesses grow their online presence and reach target audiences effectively.",
    keyFeatures: [
      "Advanced SEO optimization for top search rankings",
      "Engaging content marketing strategies",
      "Comprehensive social media management",
      "High-converting performance advertising",
      "Data-driven analytics and ROI optimization",
    ],
    stats: [
      { number: "300%", label: "Avg ROI Increase" },
      { number: "1M+", label: "Impressions" },
      { number: "98%", label: "Satisfaction" },
    ],
    logo: "/mj.png",
    link: "https://marketiqjunction.com/",
    isExternal: true,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "ISRC",
    tagline: "Igniting Innovation, Inspiring Future Leaders",
    shortDescription: "International STEM & Robotics Championship",
    detailedDescription:
      "ISRC (International STEM and Robotics Championship) promotes hands-on learning and innovation in STEM through competitions, workshops, and events, enabling students and educators to excel in robotics, AI, and automation.",
    keyFeatures: [
      "Annual STEM and robotics competitions for various age groups",
      "Global reach with participants from multiple countries",
      "Focus on sustainable development through STEM innovations",
      "Partnerships with academic institutions and industry leaders",
      "Mission to support millions of teachers in STEM education",
    ],
    stats: [
      { number: "10M+", label: "Target Teachers" },
      { number: "9", label: "Countries" },
      { number: "10+", label: "Indian States" },
    ],
    logo: "/isrc.png",
    link: "https://www.isrc.org.in",
    isExternal: true,
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "GIO",
    tagline: "Global Innovation & Opportunities",
    shortDescription: "International Placement & Career Services",
    detailedDescription:
      "GIO connects talented professionals with global opportunities, providing comprehensive placement services, career guidance, and skill development programs to help individuals achieve their international career goals.",
    keyFeatures: [
      "International job placement assistance",
      "Career counseling and guidance services",
      "Resume building and interview preparation",
      "Industry-specific skill development programs",
      "Global networking opportunities",
    ],
    stats: [
      { number: "1000+", label: "Placements" },
      { number: "50+", label: "Countries" },
      { number: "95%", label: "Success Rate" },
    ],
    logo: "/gio.png",
    link: "/brands/gio",
    isExternal: false,
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Student Alliance",
    tagline: "Empowering Students, Building Futures",
    shortDescription: "Student Community & Development Platform",
    detailedDescription:
      "Student Alliance is a vibrant community platform that connects students across institutions, providing resources, mentorship, networking opportunities, and collaborative learning experiences for holistic development.",
    keyFeatures: [
      "Inter-college networking and collaboration",
      "Mentorship programs with industry experts",
      "Skill development workshops and webinars",
      "Career guidance and placement support",
      "Student-led projects and initiatives",
    ],
    stats: [
      { number: "5000+", label: "Active Students" },
      { number: "100+", label: "Institutions" },
      { number: "50+", label: "Mentors" },
    ],
    logo: "/student-alliance.png",
    link: "/brands/student-alliance",
    isExternal: false,
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "BVOC",
    tagline: "Bridging Education with Industry",
    shortDescription: "Vocational Education & Skill Training",
    detailedDescription:
      "BVOC (Bachelor of Vocation) provides industry-aligned vocational education and skill training programs, preparing students with practical knowledge and hands-on experience for immediate employment opportunities.",
    keyFeatures: [
      "Industry-recognized certification programs",
      "Practical hands-on training with real-world projects",
      "Direct placement assistance with partner companies",
      "Flexible learning modules and schedules",
      "Expert faculty from industry and academia",
    ],
    stats: [
      { number: "20+", label: "Programs" },
      { number: "500+", label: "Graduates" },
      { number: "85%", label: "Placement Rate" },
    ],
    logo: "/bvoc.png",
    link: "/brands/bvoc",
    isExternal: false,
    color: "from-indigo-500 to-blue-700",
  },
  {
    name: "Education.Code4Bharat",
    tagline: "Tech Education for Future Innovators",
    shortDescription: "Coding & Technology Education",
    detailedDescription:
      "Education.Code4Bharat specializes in technology education, offering comprehensive coding bootcamps, programming courses, and tech skill development programs designed to create job-ready developers and tech professionals.",
    keyFeatures: [
      "Full-stack development bootcamps",
      "Programming languages and frameworks training",
      "Industry-relevant project-based learning",
      "Placement assistance and career support",
      "Live interactive classes with expert instructors",
    ],
    stats: [
      { number: "3000+", label: "Students Trained" },
      { number: "15+", label: "Courses" },
      { number: "90%", label: "Job Success" },
    ],
    logo: "/edu-c4b.png",
    link: "https://education.code4bharat.com/",
    isExternal: true,
    color: "from-[#2F6B6B] to-blue-600",
  },
  {
    name: "Education.MarketIQ Junction",
    tagline: "Master Digital Marketing Skills",
    shortDescription: "Digital Marketing Training Academy",
    detailedDescription:
      "Education.MarketIQ Junction offers comprehensive digital marketing training programs covering SEO, social media marketing, content strategy, and analytics to build skilled digital marketing professionals.",
    keyFeatures: [
      "Comprehensive digital marketing curriculum",
      "Hands-on campaigns and live projects",
      "Industry certifications and credentials",
      "Expert mentorship from marketing professionals",
      "Internship and placement opportunities",
    ],
    stats: [
      { number: "2000+", label: "Graduates" },
      { number: "10+", label: "Specializations" },
      { number: "88%", label: "Employment Rate" },
    ],
    logo: "/edu-mj.png",
    link: "https://education.marketiqjunction.com/",
    isExternal: true,
    color: "from-green-600 to-teal-600",
  },
  {
    name: "EduMomentum",
    tagline: "Revolutionizing Learning Experiences",
    shortDescription: "Educational Technology & E-Learning Platform",
    detailedDescription:
      "EduMomentum is an innovative e-learning platform that leverages technology to deliver engaging, interactive, and personalized learning experiences for students and professionals across various domains.",
    keyFeatures: [
      "Interactive online courses and tutorials",
      "AI-powered personalized learning paths",
      "Live virtual classrooms and mentoring",
      "Gamified learning and progress tracking",
      "Multi-domain course library",
    ],
    stats: [
      { number: "10K+", label: "Learners" },
      { number: "100+", label: "Courses" },
      { number: "4.8/5", label: "Rating" },
    ],
    logo: "/edumotromu.png",
    link: "/brands/edumomentum",
    isExternal: false,
    color: "from-pink-500 to-rose-600",
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === activeSlide ? "bg-[#2F6B6B] scale-125" : "bg-gray-300"
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 1280,
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
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
                Our Portfolio
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-[#2F6B6B] via-[#1976d2] to-[#2F6B6B] bg-clip-text text-transparent">
                Our Brands
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our diverse ecosystem of 9 innovative brands, each designed to transform industries and empower communities
              </p>
            </div>

            {/* Decorative Line */}
            <div className="flex justify-center items-center mt-8">
              <div className={`w-20 h-0.5 bg-gradient-to-r from-transparent via-[#2F6B6B] to-transparent transition-all duration-1000 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
              <div className={`w-4 h-4 bg-gradient-to-r from-[#2F6B6B] to-blue-600 rounded-full mx-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100 rotate-180" : "opacity-0 scale-0"}`} />
              <div className={`w-20 h-0.5 bg-gradient-to-l from-transparent via-blue-600 to-transparent transition-all duration-1000 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
            </div>
          </div>

          {/* Brands Carousel */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Slider {...settings} className="brands-slider">
              {brands.map((brand, index) => (
                <div key={index} className="px-4">
                  <div
                    className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-teal-300"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ height: "650px" }}
                  >
                    {/* Gradient Border Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${brand.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>

                    {/* Card Content */}
                    <div className="relative p-6 flex flex-col h-full">
                      {/* Brand Logo */}
                      <div className="flex items-center justify-center mb-4 h-32">
                        <div className="relative w-full h-full">
                          <Image
                            src={brand.logo}
                            alt={`${brand.name} Logo`}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                            priority
                          />
                        </div>
                      </div>

                      {/* Brand Info */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#2F6B6B] transition-colors duration-300">
                          {brand.name}
                        </h3>
                        <p className={`text-base font-semibold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent mb-2`}>
                          {brand.tagline}
                        </p>
                        <p className="text-sm text-gray-600 font-medium">
                          {brand.shortDescription}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {brand.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className="text-center p-2 bg-gray-50 rounded-lg group-hover:bg-teal-50 transition-colors duration-300"
                          >
                            <div className={`text-xl font-bold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}>
                              {stat.number}
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Description */}
                      <div className="mb-4 flex-grow">
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">
                          {brand.detailedDescription}
                        </p>

                        {/* Key Features */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-900">
                            Key Features:
                          </h4>
                          {brand.keyFeatures.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${brand.color} mt-1.5 flex-shrink-0`}></div>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto">
                        {brand.isExternal ? (
                          <a
                            href={brand.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${brand.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                          >
                            <span>Visit {brand.name}</span>
                          </a>
                        ) : (
                          <Link
                            href={brand.link}
                            className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${brand.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                          >
                            <span>Explore {brand.name}</span>
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-blue-600/5 rounded-2xl pointer-events-none"></div>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Bottom CTA */}
          <div
            className={`mt-16 text-center transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gradient-to-r from-[#2F6B6B] to-[#1F4B4B] rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Want to Partner with Our Brands?
              </h3>
              <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
                Join our ecosystem and leverage the power of 9 innovative brands under Nexcore Alliance
              </p>
              <button className="bg-white text-[#2F6B6B] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

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

        .brands-slider .slick-dots {
          bottom: -60px;
        }

        .brands-slider .slick-prev,
        .brands-slider .slick-next {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .brands-slider .slick-prev:hover,
        .brands-slider .slick-next:hover {
          background: #2F6B6B;
          transform: scale(1.1);
        }

        .brands-slider .slick-prev {
          left: -25px;
        }

        .brands-slider .slick-next {
          right: -25px;
        }

        .brands-slider .slick-prev:before,
        .brands-slider .slick-next:before {
          color: #2F6B6B;
          font-size: 20px;
        }

        .brands-slider .slick-prev:hover:before,
        .brands-slider .slick-next:hover:before {
          color: white;
        }

        @media (max-width: 768px) {
          .brands-slider .slick-prev {
            left: 10px;
          }

          .brands-slider .slick-next {
            right: 10px;
          }

          .brands-slider .slick-dots {
            bottom: -50px;
          }
        }
      `}</style>
    </>
  );
};

export default OurBrands;