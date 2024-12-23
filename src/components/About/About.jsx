"use client";

import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset to trigger animation again when revisited
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Trigger when 50% of the component is visible
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
    id="about-us"
    className="bg-[#DBE2EF] text-gray-800 mt-28"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-16 min-h-[80vh]">
      {/* Section Heading */}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center text-[#051d40] ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        About Us
      </h2>
  
      {/* Decorative Line */}
      <div className="flex justify-center mb-10">
        <div
          className={`w-16 sm:w-20 lg:w-24 h-1 bg-[#051d40] rounded-full ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
        ></div>
      </div>
  
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Card: About Nex Core Alliance LLP */}
        <div
          className={`bg-[#051d40] hover:bg-[#1976d2] text-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col ${
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          <p className="flex-1 leading-relaxed text-sm sm:text-base md:text-lg">
            Nex Core Alliance LLP is a visionary organization at the forefront of
            driving change in the fields of STEM education, IT solutions, and
            professional development. With a diverse portfolio of brands, Nex
            Core Alliance LLP is committed to empowering individuals, institutions,
            and businesses with innovative tools, knowledge, and services to
            thrive in the modern digital and educational landscape.
          </p>
        </div>
  
        {/* Card: Our Mission */}
        <div
          className={`bg-[#051d40] hover:bg-[#1976d2] text-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col ${
            isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
          }`}
        >
          <p className="flex-1 leading-relaxed text-sm sm:text-base md:text-lg">
            Founded with the core belief that education and technology are the
            twin pillars of progress, Nex Core Alliance LLP seeks to create a
            sustainable impact through its three distinct brands: ISRC
            (International STEM and Robotics Championship), Code4Bharat, and
            Education.Code4Bharat. Each of these brands represents our mission
            to bridge the gap between learning and technology, ensuring the
            next generation is prepared for the challenges of tomorrow.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default About;
