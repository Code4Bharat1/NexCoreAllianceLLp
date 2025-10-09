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
    setIsOpen(false);
  };

  const menuItems = [
    { href: "/", label: "Main" },
    { href: "/our-masterminds", label: "Innovators" },
    { href: "/contact-us", label: "Talk to us" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-16 sm:h-20 z-50 transition-all duration-300 select-none ${
          isScrolled
            ? "bg-gradient-to-br from-[#DBE2EF]/95 via-[#F8FAFF]/95 to-[#E8F2FF]/95 backdrop-blur-md shadow-lg border-b border-blue-200/50"
            : "bg-gradient-to-br from-[#DBE2EF] via-[#F8FAFF] to-[#E8F2FF] shadow-md border-b border-blue-200"
        }`}
      >
        {/* Background Effects - Only visible when not scrolled */}
        {!isScrolled && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
          </div>
        )}

        <div className="relative z-10 flex justify-between items-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" onClick={() => handleLinkClick("/")}>
            <Image
              src="/nex.png"
              alt="Nexcore Logo"
              width={200}
              height={150}
              className="w-32 sm:w-40 md:w-48 h-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex ml-auto space-x-2 lg:space-x-4 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 lg:px-4 py-2 text-base lg:text-lg font-semibold rounded-lg transition-all duration-300 ${
                  activeLink === item.href
                    ? "text-blue-600 bg-white/80 backdrop-blur-sm shadow-md"
                    : "text-gray-800 hover:text-blue-600 hover:bg-white/60 hover:backdrop-blur-sm"
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
              className="p-2 rounded-lg text-gray-800 hover:text-blue-600 hover:bg-white/60 transition"
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

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -20px) scale(1.1); }
            66% { transform: translate(-20px, 10px) scale(0.9); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}</style>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 sm:w-80 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Background with theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DBE2EF] via-[#F8FAFF] to-[#E8F2FF] backdrop-blur-md shadow-xl">
          {/* Background Effects for Sidebar */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
          </div>

          {/* Sidebar Content */}
          <div className="relative z-10 h-full">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-blue-200/50">
              <Image
                src="/nex.png"
                alt="Nexcore Logo"
                width={150}
                height={100}
                className="w-32 sm:w-36 h-auto object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-blue-600 transition text-2xl font-bold p-2 rounded-lg hover:bg-white/60"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col mt-6 px-4 sm:px-6 space-y-3 sm:space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform ${
                    activeLink === item.href
                      ? "bg-white/80 backdrop-blur-sm text-blue-600 translate-x-2 shadow-md"
                      : "hover:bg-white/60 hover:backdrop-blur-sm hover:text-blue-600 hover:translate-x-2 text-gray-800"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => handleLinkClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -20px) scale(1.1); }
            66% { transform: translate(-20px, 10px) scale(0.9); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}</style>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}