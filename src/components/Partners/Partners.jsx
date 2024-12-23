import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <section
      id="partners"
      className="bg-gradient-to-r from-[#e0f7fa] to-[#ffffff] py-16 overflow-hidden mt-12 mb-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-800">
          Clients / Partners
        </h2>

        {/* Decorative Line */}
        <div className="flex justify-around mb-12">
          <div className="w-40 h-1 bg-gray-800 rounded-full"></div>
        </div>

        {/* Scrolling Logos */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll whitespace-nowrap justify-center items-center space-x-8">
            {/* Equal Size Images */}
            {[
              "gkcc.png",
              "kws.png",
              "kcd.png",
              "kcj.png",
              "dl.png",
              "rm.png",
              "sta.png",
              "tiss.png",
              "tt.png",
              "kj.webp",
              "lmt.png",
              "urbanicon.png",
              "overseas.png",
              "icco.png",
              "fresco.png",
              "falcon.png",
              "bkccrown.png",
              "constrochem.png",
            ].map((src, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={`/images/partners/${src}`}
                  alt={`Partner Logo ${index + 1}`}
                  width={150}
                  height={150}
                  quality={90} // Higher quality setting
                  priority={index < 6} // Set priority for first few images
                  className="opacity-90"
                />
              </div>
            ))}
            {/* Duplicated Images for Continuous Effect */}
            {[
              "gkcc.png",
              "kws.png",
              "kcd.png",
              "kcj.png",
              "dl.png",
              "rm.png",
              "sta.png",
              "tiss.png",
              "tt.png",
              "kj.webp",
              "lmt.png",
              "urbanicon.png",
              "overseas.png",
              "icco.png",
              "fresco.png",
              "falcon.png",
              "bkccrown.png",
              "constrochem.png",
            ].map((src, index) => (
              <div key={index + 18} className="flex-shrink-0">
                <Image
                  src={`/images/partners/${src}`}
                  alt={`Partner Logo ${index + 1}`}
                  width={150}
                  height={150}
                  quality={90} // Higher quality setting
                  className="opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
