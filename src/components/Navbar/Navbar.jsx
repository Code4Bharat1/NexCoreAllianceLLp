"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname);
      const handleScroll = () => setIsScrolled(window.scrollY > 10);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false); // Close mobile menu
  };

  const menuItems = [
    { href: "/", label: "Main" },
    { href: "/our-masterminds", label: "Innovators" },
    { href: "/contact-us", label: "Talk to us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 select-none ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white shadow-md border-b border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center h-20 px-5 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" onClick={() => handleLinkClick("/")}>
          <Image
            src="/nex.png"
            alt="Nexcore Logo"
            width={200}
            height={150}
            className="object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex ml-auto space-x-4 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-300 ${
                activeLink === item.href
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-800 hover:text-blue-600 hover:bg-blue-50/50"
              }`}
              onClick={() => handleLinkClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? "rotate-45 top-3" : "top-1"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white/95 backdrop-blur-md shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-blue-600 transition text-2xl font-bold"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col mt-4 px-6 space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform ${
                activeLink === item.href
                  ? "bg-blue-50 text-blue-600 translate-x-2"
                  : "hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2 text-gray-800"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => handleLinkClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
