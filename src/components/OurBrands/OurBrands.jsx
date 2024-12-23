"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Expanded brand data with tagline and short descriptions
const brands = [
  {
    name: "ISRC: International STEM and Robotics Championship",
    tagline: "Igniting Innovation, Inspiring Future Leaders",
    shortDescription: "STEM & Robotics",
    detailedDescription:
      "ISRC (International STEM and Robotics Championship) is a global initiative dedicated to fostering innovation and hands-on learning in the fields of STEM (Science, Technology, Engineering, and Mathematics). By organizing national and international competitions, workshops, and events, ISRC provides a platform for students and educators to explore and excel in cutting-edge technologies like robotics, AI, and automation.",
    keyFeatures: [
      "Annual STEM and robotics competitions for various age groups.",
      "Global reach with participants from over 10 Indian states and 9 countries.",
      "Focus on sustainable development through STEM innovations.",
      "Partnerships with academic institutions and industry leaders.",
      "Mission to support 10 million teachers in STEM and practical learning by 2030.",
    ],
    logo: "/images/isrc2.jpg",
    link: "https://www.isrc.org.in",
    isExternal: true,
  },
  {
    name: "Code4Bharat: IT Solutions for a Global Marketplace",
    tagline: "Where Indian Expertise Meets Global Excellence",
    shortDescription: "IT Solutions",
    detailedDescription:
      "Code4Bharat is an IT solutions provider that delivers world-class web development, software solutions, and offshore development services to clients across the globe. Specializing in creating customized digital solutions, we work closely with businesses to enhance their digital footprint, streamline operations, and boost productivity.",
    keyFeatures: [
      "Web Development: Custom websites, e-commerce platforms, and web applications.",
      "Mobile Application Development: Robust apps for iOS and Android.",
      "IT Consulting: Strategic guidance for digital transformation and cloud solutions.",
      "Offshore Development: Providing cost-effective development services for international clients.",
      "Digital Marketing: Helping businesses maximize their online presence through SEO, social media, and content marketing.",
    ],
    logo: "/17.png",
    link: "https://code4bharat.org/",
    isExternal: false,
  },
  {
    name: "MarketIQ Junction: Digital Marketing & Strategy",
    tagline: "The Smart Stop for Digital Growth",
    shortDescription: "Digital Marketing",
    detailedDescription:
      "MarketIQ Junction is a premier digital marketing agency focused on helping businesses grow and thrive in the digital landscape. Offering services from SEO to content marketing and performance advertising, MarketIQ Junction ensures businesses reach their target audience with tailored strategies that drive results.",
    keyFeatures: [
      "SEO Optimization: Ensuring your website ranks on the first page of search engines.",
      "Content Marketing: Creating valuable content that attracts and engages your audience.",
      "Social Media Management: Managing your brand's presence on all major platforms.",
      "Performance Advertising: Running high-converting ads across Google, Facebook, and Instagram.",
      "Analytics & Strategy: In-depth analysis and strategy creation for improving ROI.",
    ],
    logo: "/38.png",
    link: "/brands/marketiq-junction",
    isExternal: false,
  }
  
  // Add more brands as needed
];

const OurBrands = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [isVisible, setIsVisible] = useState(false);
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
        rootMargin: "0px",
        threshold: 0.5,
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
      id="our-brands"
      className="bg-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 mt-24 min-h-[80vh]">
        {/* Section Heading */}
        <h2
          className={`text-4xl sm:text-5xl font-bold mb-6  text-center text-[#051d40] ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Our Brands
        </h2>

        {/* Decorative Line */}
        <div className="flex justify-center mb-12">
          <div
            className={`w-24 h-1 bg-[#051d40] rounded-full ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          ></div>
        </div>

        {/* Brands Carousel */}
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`relative bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 overflow-hidden mx-4 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {/* Flip Card Container */}
              <div className="relative w-full h-full flip-card">
                {/* Front Side */}
                <div className="flip-card-front">
                  <div className="flex flex-col items-center">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name.split(":")[0]} Logo`}
                        width={300}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">
                      {brand.tagline}
                    </h3>
                    <p className="text-sm text-center mb-4">
                      {brand.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Back Side (Details) */}
                <div className="flip-card-back absolute inset-0 bg-black bg-opacity-80 text-white p-6 rounded-lg overflow-y-auto">
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    {brand.name.split(":")[0]} Key Features
                  </h3>
                  <p className="mb-4">{brand.detailedDescription}</p>
                  <ul className="list-disc list-inside mb-4">
                    {brand.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                    {brand.isExternal ? (
                      <a
                        href={brand.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#051d40] text-white px-4 py-2 rounded-md hover:bg-[#1976d2] transition-colors duration-300"
                      >
                        Visit {brand.name.split(":")[0]}
                      </a>
                    ) : (
                      <Link
                        href={brand.link}
                        className="bg-[#051d40] text-white px-4 py-2 rounded-md hover:bg-[#1976d2] transition-colors duration-300"
                      >
                        Visit {brand.name.split(":")[0]}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Styles for Flip Effect */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          transition: transform 0.6s;
        }
        .flip-card-front {
          transform: rotateY(0deg);
        }
        .flip-card-back {
          transform: rotateY(180deg);
          max-height: 100%;
          overflow-y: auto;
        }
        .flip-card:hover .flip-card-front {
          transform: rotateY(-180deg);
        }
        .flip-card:hover .flip-card-back {
          transform: rotateY(0deg);
        }
      `}</style>
    </section>
  );
};

export default OurBrands;
