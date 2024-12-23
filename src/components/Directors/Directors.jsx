import React from "react";
import DirectorCard from "./DirectorCard";

const Directors = () => {
  const directors = [
    {
      name: "Prashant Patil",
      position: "CEO & Founder",
      image: "/directors/prashantpatil.png",
      linkedIn:
        "https://www.linkedin.com/in/prashant-patil-04642219b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Awab Fakih",
      position: "CAO & Founder",
      image: "/directors/awabfakih.png",
      linkedIn:
        "https://www.linkedin.com/in/awabfakih?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Neha Fakih",
      position: "CFO & Founder",
      image: "/directors/nehafakih.png",
      linkedIn:
        "https://www.linkedin.com/in/neha-mehnaz-awab-fakih-2359a189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ayaan Raaje",
      position: "CMO & Founder",
      image: "/directors/ayaanraaje.png",
      linkedIn:
        "https://www.linkedin.com/in/raje-ayaan-327593229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <section className="bg-[#4A9BD3] min-h-[80vh] py-16 mt-20">
  <div className="max-w-7xl mx-auto px-4">
    {/* Section Heading */}
    <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-[#051d40]">
      Masterminds
    </h2>

    {/* Decorative Line */}
    <div className="flex justify-center mb-12">
      <div className="w-24 h-1 bg-[#051d40] rounded-full"></div>
    </div>

    {/* Directors Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {directors.map((director, index) => (
        <DirectorCard
          key={index}
          name={director.name}
          position={director.position}
          image={director.image}
          linkedIn={director.linkedIn}
        />
      ))}
    </div>
  </div>

  <style jsx>{`
    .grid {
      gap: 16px; /* Default spacing */
    }

    /* iPad Air (820x1180) and similar resolutions */
    @media (min-width: 820px) and (max-width: 1180px) {
      .grid {
        grid-template-columns: repeat(2, 1fr); /* Two directors per row */
        gap: 20px; /* Adjust spacing */
      }
    }

    /* Nest Hub (1024x600) and similar resolutions */
    @media (min-width: 1024px) and (max-width: 1280px) {
      .grid {
        grid-template-columns: repeat(2, 1fr); /* Two directors per row */
        gap: 20px;
      }
    }

    /* Asus Zenbook Fold (853x1280) in portrait */
    @media (min-width: 853px) and (max-width: 1280px) and (orientation: portrait) {
      .grid {
        grid-template-columns: repeat(2, 1fr); /* Two directors per row */
        gap: 20px;
      }
    }

    /* Small screens (default layout) */
    @media (max-width: 639px) {
      .grid {
        grid-template-columns: 1fr; /* Stack directors in one column */
      }
    }

    /* Larger screens (1024px and above) */
    @media (min-width: 1024px) and (orientation: landscape) {
      .grid {
        grid-template-columns: repeat(4, 1fr); /* Four directors per row */
        gap: 24px;
      }
    }
  `}</style>
</section>

  
  );
};

export default Directors;
