"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaGraduationCap,
  FaRocket,
  FaBriefcase,
  FaChartBar,
  FaGlobe,
  FaBullseye,
} from "react-icons/fa";

const MissionVision = () => {
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

  const visionItems = [
    {
      icon: <FaGraduationCap />,
      text: "Empowering educators and students through practical and innovative STEM programs.",
    },
    {
      icon: <FaRocket />,
      text: "Driving digital transformation for businesses with cutting-edge IT solutions.",
    },
    {
      icon: <FaBriefcase />,
      text: "Creating job opportunities and equipping professionals with the skills needed to thrive in the evolving tech landscape.",
    },
  ];

  const missionItems = [
    {
      icon: <FaChartBar />,
      text: "Reach 10 million teachers in STEM education by 2030.",
    },
    {
      icon: <FaGlobe />,
      text: "Provide world-class IT solutions to businesses across the globe.",
    },
    {
      icon: <FaBullseye />,
      text: "Train and place thousands of students in IT roles through Education.Code4Bharat.",
    },
  ];

  return (
    <>
     <section
  ref={sectionRef}
  id="mission-vision"
  className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 overflow-hidden select-none"
>
  {/* Background Elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 py-20 select-none">
    {/* Section Heading */}
    <div className="text-center mb-16 select-none">
      <div
        className={`inline-block transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2 block select-none">
          Our Purpose
        </span>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent select-none">
          Mission & Vision
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed select-none">
          Shaping the future through innovation, education, and technology-driven
          solutions
        </p>
      </div>

      {/* Decorative Element */}
      <div className="flex justify-center items-center mt-8 mb-12 select-none">
        <div
          className={`w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-600 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
        <div
          className={`w-3 h-3 bg-blue-600 rounded-full mx-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        />
        <div
          className={`w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-600 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
      </div>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-stretch select-none">
      {/* Vision Card */}
      <div
        className={`group relative h-full transition-all duration-700 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
        onMouseEnter={() => setHoveredCard("vision")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-white p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 h-full flex flex-col select-none">
          {/* Card Header */}
          <div className="flex items-center mb-6 select-none">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold ml-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent select-none">
              Our Vision
            </h3>
          </div>

          {/* Card Content */}
          <div className="flex-grow flex flex-col select-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-8 select-none">
              At Nex Core Alliance LLP, our vision is to be a global leader in STEM
              education, IT solutions, and professional training. We believe in
              building an ecosystem where learning, innovation, and technology
              converge to create opportunities for individuals and businesses alike.
            </p>

            {/* Vision Items */}
            <div className="space-y-4 flex-grow select-none">
              {visionItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:translate-x-2 ${
                    isVisible
                      ? `opacity-100 translate-y-0`
                      : `opacity-0 translate-y-4`
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-base select-none">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed select-none">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Card */}
      <div
        className={`group relative h-full transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}
        onMouseEnter={() => setHoveredCard("mission")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-white p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 h-full flex flex-col select-none">
          {/* Card Header */}
          <div className="flex items-center mb-6 select-none">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold ml-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent select-none">
              Our Mission
            </h3>
          </div>

          {/* Card Content */}
          <div className="flex-grow flex flex-col select-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-8 select-none">
              Our mission is to create sustainable growth through education and
              technology. Whether through organizing global STEM competitions,
              delivering IT solutions, or providing job-oriented training
              programs, Nex Core Alliance LLP seeks to make a lasting impact on
              individuals and institutions worldwide.
            </p>

            {/* Mission Items */}
            <div className="space-y-4 flex-grow select-none">
              {missionItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all duration-300 transform hover:translate-x-2 ${
                    isVisible
                      ? `opacity-100 translate-y-0`
                      : `opacity-0 translate-y-4`
                  }`}
                  style={{ transitionDelay: `${800 + index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-base select-none">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed select-none">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
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
        .animate-blob {
          animation: blob 7s infinite;
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

export default MissionVision;
