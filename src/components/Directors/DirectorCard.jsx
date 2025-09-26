import React, { useState, useCallback, memo } from "react";
import { Linkedin, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";
import Head from "next/head";

const DirectorCard = memo(({
  image = "",
  name = "",
  position = "",
  description = "",
  linkedIn,
  facebook,
  whatsapp,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleImageLoad = useCallback(() => setImageLoaded(true), []);

  return (
    <>
      {/* Structured Data for SEO */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": name,
              "image": image,
              "jobTitle": position,
              "url": linkedIn || facebook || "",
              "sameAs": [linkedIn, facebook].filter(Boolean),
            }),
          }}
        />
      </Head>

      <article
        className="relative bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl md:hover:shadow-3xl transition-all duration-500 md:duration-700 group w-full h-full min-h-[350px] md:min-h-[400px] flex flex-col border border-white/30 select-none will-change-transform"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 transition-opacity duration-500 md:duration-700 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative p-6 md:p-8 flex flex-col flex-grow items-center justify-between">
          {/* Profile Image */}
          <div className="relative mb-4 md:mb-6">
            <div className="relative w-20 h-20 md:w-28 md:h-28">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full animate-pulse" />
              )}
              <Image
                src={image}
                alt={`${name}'s photo`}
                width={112}
                height={112}
                className={`w-full h-full rounded-full object-cover border-2 md:border-4 border-white shadow-lg md:shadow-xl group-hover:scale-105 md:group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300 md:duration-500 relative z-10 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={handleImageLoad}
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 80px, 112px"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-4 md:mb-6 space-y-2 md:space-y-3 flex-grow flex flex-col justify-start">
            <h3 className="font-bold text-lg md:text-xl text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
              {name}
            </h3>
            <p className="text-slate-500 text-xs md:text-sm font-medium group-hover:text-slate-700 transition-colors duration-300">
              {position}
            </p>
            {description && (
              <p className="text-black text-xs md:text-sm leading-relaxed px-1 md:px-2 group-hover:text-slate-800 transition-colors duration-300 line-clamp-3">
                {description}
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 md:gap-4 mt-auto">
            {linkedIn && (
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn profile`}
                className="group/social bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Linkedin
                  size={16}
                  className="md:w-5 md:h-5 text-white group-hover/social:scale-110 transition-transform duration-200"
                />
              </a>
            )}

            {facebook && (
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s Facebook profile`}
                className="group/social bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Facebook
                  size={16}
                  className="md:w-5 md:h-5 text-white group-hover/social:scale-110 transition-transform duration-200"
                />
              </a>
            )}

            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contact ${name} on WhatsApp`}
                className="group/social bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <MessageCircle
                  size={16}
                  className="md:w-5 md:h-5 text-white group-hover/social:scale-110 transition-transform duration-200"
                />
              </a>
            )}
          </div>
        </div>

        {/* Mobile-specific line clamp */}
        <style jsx>{`
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </article>
    </>
  );
});

DirectorCard.displayName = "DirectorCard";

export default DirectorCard;
