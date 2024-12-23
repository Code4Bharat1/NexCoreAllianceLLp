"use client";
import React from "react";
import { FaHandsHelping, FaGlobe, FaLightbulb, FaStar } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion for animations

const reasons = [
  {
    title: "Holistic Approach",
    description:
      "At Nex Core Alliance LLP, we take a holistic approach to education and technology. Through our diverse brands, we offer comprehensive solutions that cater to students, educators, and businesses, ensuring that each stakeholder benefits from our expertise.",
    icon: <FaHandsHelping size={40} />,
  },
  {
    title: "Global Reach",
    description:
      "Our brands have a global presence, working with clients and participants from multiple countries. Whether it’s through ISRC’s international competitions, Code4Bharat’s overseas IT services, or Education.Code4Bharat’s global job placement network, we are truly a global organization.",
    icon: <FaGlobe size={40} />,
  },
  {
    title: "Commitment to Innovation",
    description:
      "Innovation is at the heart of everything we do. From fostering new technologies in education through ISRC to delivering cutting-edge IT solutions with Code4Bharat, we constantly strive to stay ahead of industry trends and provide forward-thinking solutions.",
    icon: <FaLightbulb size={40} />,
  },
  {
    title: "Excellence in Service",
    description:
      "We pride ourselves on delivering excellence in every aspect of our work. Whether it’s ensuring the success of a STEM competition, developing a flawless web application, or placing a student in their dream job, Nex Core Alliance LLP is committed to exceeding expectations.",
    icon: <FaStar size={40} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-[#051d40]">
          Nex Core Alliance: Where Learning Meets Innovation
        </h2>

        {/* Decorative Line */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 flex flex-col items-center text-center hover:bg-gradient-to-b hover:from-green-400 hover:to-green-600"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
            >
              {/* Icon */}
              <div className="mb-4 text-yellow-300">{reason.icon}</div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-yellow-200">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="flex-1 leading-relaxed text-base sm:text-lg mt-4 text-gray-200">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
