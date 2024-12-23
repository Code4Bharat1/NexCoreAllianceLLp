"use client";

import React, { useEffect, useRef, useState } from "react";

const MissionVision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when the section leaves the viewport
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Adjust as needed to control when the animation should trigger
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
    <section
      ref={sectionRef}
      id="mission-vision"
      className="bg-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Heading with animation */}
        <h2
          className={`text-4xl sm:text-5xl font-bold mb-6 text-center text-[#051d40] ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Mission & Vision
        </h2>

        {/* Decorative Line */}
        <div className="flex justify-center mb-12">
          <div
            className={`w-24 h-1 bg-[#051d40] rounded-full ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Vision */}
          <div
            className={`bg-[#1976d2] hover:bg-[#051d40] text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col ${
              isVisible ? "hover:animate-spin delay-100" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Our Vision
            </h3>
            <p className="flex-1 leading-relaxed text-base sm:text-lg mb-4">
              At Nex Core Alliance LLP, our vision is to be a global leader in STEM
              education, IT solutions, and professional training. We believe in
              building an ecosystem where learning, innovation, and technology
              converge to create opportunities for individuals and businesses
              alike.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Empowering educators and students through practical and
                innovative STEM programs.
              </li>
              <li>
                Driving digital transformation for businesses with cutting-edge
                IT solutions.
              </li>
              <li>
                Creating job opportunities and equipping professionals with the
                skills needed to thrive in the evolving tech landscape.
              </li>
            </ul>
          </div>

          {/* Our Mission */}
          <div
            className={`bg-[#1976d2] hover:bg-[#051d40]  text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col ${
              isVisible ? "animate-spin" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="flex-1 leading-relaxed text-base sm:text-lg mb-2">
              Our mission is to create sustainable growth through education and
              technology. Whether through organizing global STEM competitions,
              delivering IT solutions, or providing job-oriented training
              programs, Nex Core Alliance LLP seeks to make a lasting impact on
              individuals and institutions worldwide.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Reach 10 million teachers in STEM education by 2030.</li>
              <li>
                Provide world-class IT solutions to businesses across the globe.
              </li>
              <li>
                Train and place thousands of students in IT roles through
                Education.Code4Bharat.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
