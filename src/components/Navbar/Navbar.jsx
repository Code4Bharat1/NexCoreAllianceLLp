import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
    if (path === "/") {
      window.location.href = "/";
    }
  };

  return (
    <nav className="bg-white text-gray-800 shadow-md border-b border-gray-200 fixed top-0 left-0 w-full h-20 z-50">
    <div className="flex justify-between items-center h-20 px-5">
      {/* Logo aligned to the left */}
      <div className="flex-shrink-0">
        <Link href="/" passHref>
          <Image
            src="/images/corelogo.png"
            alt="Nexcore Logo"
            width={200}
            height={150}
            layout="fixed"
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>
  
      {/* Mobile Menu Button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="text-gray-800 hover:text-blue-600 focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>
  
      {/* Desktop Menu */}
      <div className="hidden md:flex ml-auto space-x-8 justify-end items-center">
        <Link
          href="/"
          className={`text-lg font-semibold hover:text-blue-600 transition-colors duration-300 ${
            activeLink === "/" ? "underline text-blue-900" : "text-gray-800"
          }`}
          onClick={() => handleLinkClick("/")}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className={`text-lg font-semibold hover:text-blue-600 transition-colors duration-300 ${
            activeLink === "/about-us" ? "underline text-blue-600" : "text-gray-800"
          }`}
          onClick={() => handleLinkClick("/about-us")}
        >
          About Us
        </Link>
        <Link
          href="/our-brands"
          className={`text-lg font-semibold hover:text-blue-600 transition-colors duration-300 ${
            activeLink === "/our-brands" ? "underline text-blue-600" : "text-gray-800"
          }`}
          onClick={() => handleLinkClick("/our-brands")}
        >
          Our Brands
        </Link>
        <Link
          href="/our-masterminds"
          className={`text-lg font-semibold hover:text-blue-600 transition-colors duration-300 ${
            activeLink === "/our-masterminds" ? "underline text-blue-600" : "text-gray-800"
          }`}
          onClick={() => handleLinkClick("/our-masterminds")}
        >
          Masterminds
        </Link>
      </div>
    </div>
  
    {/* Mobile Menu */}
    {isOpen && (
      <div
        className="absolute top-20 left-0 w-full bg-white shadow-lg z-40"
        id="mobile-menu"
      >
        <div className="px-6 pt-4 pb-6 space-y-4">
          <Link
            href="/"
            className={`block text-xl font-semibold hover:text-blue-600 transition-colors duration-300 ${
              activeLink === "/" ? "underline text-blue-600" : "text-gray-800"
            }`}
            onClick={() => {
              handleLinkClick("/");
              setIsOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`block text-xl font-semibold hover:text-blue-600 transition-colors duration-300 ${
              activeLink === "/about-us"
                ? "underline text-blue-600"
                : "text-gray-800"
            }`}
            onClick={() => {
              handleLinkClick("/about-us");
              setIsOpen(false);
            }}
          >
            About Us
          </Link>
          <Link
            href="/our-brands"
            className={`block text-xl font-semibold hover:text-blue-600 transition-colors duration-300 ${
              activeLink === "/our-brands"
                ? "underline text-blue-600"
                : "text-gray-800"
            }`}
            onClick={() => {
              handleLinkClick("/our-brands");
              setIsOpen(false);
            }}
          >
            Our Brands
          </Link>
          <Link
            href="/our-masterminds"
            className={`block text-xl font-semibold hover:text-blue-600 transition-colors duration-300 ${
              activeLink === "/our-masterminds"
                ? "underline text-blue-600"
                : "text-gray-800"
            }`}
            onClick={() => {
              handleLinkClick("/our-masterminds");
              setIsOpen(false);
            }}
          >
            Masterminds
          </Link>
        </div>
      </div>
    )}
  </nav>
  );
};

export default Navbar;
