import React, { useState } from "react";
import { Linkedin, Facebook, MessageCircle } from "lucide-react";

const DirectorCard = ({
  image = "https://readymadeui.com/team-1.webp",
  name = "",
  position = "",
  description = "",
  linkedIn,
  facebook,
  whatsapp,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 group w-full h-full min-h-[400px] flex flex-col border border-white/30 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 transition-opacity duration-700 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div className="relative p-8 flex flex-col flex-grow items-center justify-between">
        {/* Profile Image Section */}
        <div className="relative mb-6">
          <div className="relative w-28 h-28">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
            )}
            <img
              className={`w-full h-full rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 group-hover:border-blue-200 transition-all duration-500 relative z-10 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              src={image}
              alt={`${name}'s photo`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>

        {/* Name, Position and Description */}
        <div className="text-center mb-6 space-y-3 flex-grow flex flex-col justify-start">
          <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
            {name}
          </h3>
          <p className="text-slate-500 text-sm font-medium group-hover:text-slate-700 transition-colors duration-300">
            {position}
          </p>
          {description && (
            <p className="text-black text-sm leading-relaxed px-2 group-hover:text-slate-800 transition-colors duration-300">
              {description}
            </p>
          )}
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-auto">
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group/social bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-11 h-11 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Linkedin
                size={20}
                className="text-white group-hover/social:scale-110 transition-transform duration-200"
              />
            </a>
          )}

          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group/social bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 w-11 h-11 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Facebook
                size={20}
                className="text-white group-hover/social:scale-110 transition-transform duration-200"
              />
            </a>
          )}

          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/social bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 w-11 h-11 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl ml-auto"
            >
              <MessageCircle
                size={20}
                className="text-white group-hover/social:scale-110 transition-transform duration-200"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectorCard;
