import React from "react";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon
import Image from "next/image"; // Using Image component for optimized images

const DirectorCard = ({ image, name, position, linkedIn }) => {
  return (
    <div className="w-full sm:w-[300px] lg:w-[300px] h-auto rounded-lg overflow-hidden shadow-lg bg-[#FFFFFF] hover:bg-[#1F375D] transition-all duration-300 text-center p-6 flex flex-col justify-between group mx-auto sm:mx-0">
  {/* Circular Profile Image */}
  <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 lg:h-56 mx-auto mb-6">

    <Image
      className="rounded-full object-cover"
      src={image}
      alt={`${name}'s photo`}
      width={160}
      height={160}
    />
  </div>

  {/* Name and Position */}
  <div>
    <div className="font-bold text-xl sm:text-2xl lg:text-3xl mb-3 text-[#051D40] group-hover:text-white transition-all duration-300">
      {name}
    </div>
    <p className="text-[#051D40] text-base sm:text-lg lg:text-xl group-hover:text-white transition-all duration-300">
      {position}
    </p>
  </div>

  {/* LinkedIn Logo */}
  <div className="pt-4 sm:pt-6">
    <a
      href={linkedIn}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-white text-blue-600 rounded-full w-12 h-12 sm:w-14 sm:h-14 hover:text-white hover:bg-blue-600 transition duration-300"
    >
      <FaLinkedin size={32} className="sm:size-[40px]" /> {/* Icon adjusts dynamically */}
    </a>
  </div>
</div>

  );
};

export default DirectorCard;
