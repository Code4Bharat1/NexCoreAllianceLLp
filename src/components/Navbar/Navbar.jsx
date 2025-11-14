"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronDown, 
  Rocket, 
  Box, 
  FileCode, 
  Layers, 
  Palette, 
  Package, 
  Building2, 
  Globe,
  Settings,
  Boxes,
  Network,
  Cog,
  Cloud,
  Upload,
  Link2,
  ShieldCheck,
  Brain,
  Cpu,
  Bot,
  Mic,
  Users,
  UserPlus,
  Briefcase
} from "lucide-react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [megaMenuTimeout, setMegaMenuTimeout] = useState(null);

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
    setIsMegaMenuOpen(false);
  };

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    const timeout = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
    setMegaMenuTimeout(timeout);
  };

  const menuItems = [
    // { href: "/", label: "Main" },
    // { href: "/our-masterminds", label: "Innovators" },
    // { href: "/contact-us", label: "Talk to us" },
      {href:"",label:"Case studies" },
      {href:"",label:"Company" },
      {href:"",label:"Careers" },
      {href:"",label:"Blog" },


  ];

  const serviceCategories = [
    {
      title: "PRODUCT DEVELOPMENT",
      icon: Rocket,
      items: [
        { name: "Product Development", href: "/services/product-development", icon: Box },
        { name: "SaaS Development", href: "/services/saas-development", icon: Layers },
        { name: "POC Development", href: "/services/poc-development", icon: FileCode },
        { name: "MVP Development", href: "/services/mvp-development", icon: Package },
        { name: "UI/UX Design", href: "/services/ui-ux-design", icon: Palette },
        { name: "Software Product Development", href: "/services/software-product", icon: Box },
        { name: "Enterprise Software Development", href: "/services/enterprise-software", icon: Building2 },
        { name: "Offshore Software Development", href: "/services/offshore-software", icon: Globe },
      ],
    },
    {
      title: "DIGITAL ENGINEERING",
      icon: Settings,
      items: [
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: Cog },
        { name: "App Modernization", href: "/services/app-modernization", icon: Boxes },
        { name: "IoT Services", href: "/services/iot-services", icon: Network },
        { name: "Digital Product Engineering", href: "/services/digital-product-engineering", icon: Settings },
      ],
    },
    {
      title: "CLOUD & DEVOPS",
      icon: Cloud,
      items: [
        { name: "DevOps Services", href: "/services/devops-services", icon: Cog },
        { name: "Cloud Migration", href: "/services/cloud-migration", icon: Upload },
        { name: "Cloud Integration", href: "/services/cloud-integration", icon: Link2 },
        { name: "Cloud Managed Services", href: "/services/cloud-managed-services", icon: ShieldCheck },
      ],
    },
    {
      title: "ARTIFICIAL INTELLIGENCE",
      icon: Brain,
      items: [
        { name: "AI Software Development", href: "/services/ai-software-development", icon: Cpu },
        { name: "AI Agent Development", href: "/services/ai-agent-development", icon: Bot },
        { name: "AI Voice Agent", href: "/services/ai-voice-agent", icon: Mic },
      ],
    },
    {
      title: "COOPERATION MODELS",
      icon: Users,
      items: [
        { name: "Hire Remote Developers", href: "/services/hire-remote-developers", icon: UserPlus },
        { name: "Hire Dedicated Development Team", href: "/services/hire-dedicated-team", icon: Users },
        { name: "Software Development Outsourcing", href: "/services/software-outsourcing", icon: Briefcase },
      ],
    },
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
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <button
                className={`px-3 lg:px-4 py-2 text-2xl lg:text-lg font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  isMegaMenuOpen
                    ? "text-blue-600 bg-white/80 backdrop-blur-sm shadow-md"
                    : "text-gray-800 hover:text-blue-600 hover:bg-white/60 hover:backdrop-blur-sm"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMegaMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

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

            {/* CTA Button */}
            <Link
              href="/contact-us"
              className="px-4 lg:px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center gap-2"
              onClick={() => handleLinkClick("/contact-us")}
            >
              Let's Talk
              <span className="text-lg">↗</span>
            </Link>
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

      {/* Secondary Dark Bar */}
      <div className="fixed left-0 right-0 top-16 sm:top-20 h-2 bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 z-40 shadow-inner"></div>

      {/* Mega Menu Dropdown */}
      <div
        className={`fixed left-0 right-0 top-[4.5rem] sm:top-[5.5rem] z-40 transition-all duration-300 ${
          isMegaMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseEnter={handleMegaMenuEnter}
        onMouseLeave={handleMegaMenuLeave}
      >
        <div className="bg-gradient-to-br from-[#DBE2EF]/98 via-[#F8FAFF]/98 to-[#E8F2FF]/98 backdrop-blur-xl shadow-2xl border-b border-blue-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {serviceCategories.map((category, index) => {
                const CategoryIcon = category.icon;
                return (
                  <div
                    key={index}
                    className="space-y-4 p-4 rounded-lg hover:bg-white/40 transition-all duration-300"
                  >
                    <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                      <CategoryIcon className="w-5 h-5 text-blue-600" />
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="text-gray-800 hover:text-blue-600 text-sm font-medium transition-colors duration-200 flex items-center gap-2 group"
                              onClick={() => handleLinkClick(item.href)}
                            >
                              <ItemIcon className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-8 pt-6 border-t border-blue-200/50">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    Partner With Us for Innovative Solutions
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Book a Meeting to Know More
                  </p>
                </div>
                <Link
                  href="/contact-us"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 whitespace-nowrap"
                  onClick={() => handleLinkClick("/contact-us")}
                >
                  Talk To Our Experts →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 sm:w-80 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Background with theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DBE2EF] via-[#F8FAFF] to-[#E8F2FF] backdrop-blur-md shadow-xl overflow-y-auto">
          {/* Background Effects for Sidebar */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
          </div>

          {/* Sidebar Content */}
          <div className="relative z-10 h-full">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-blue-200/50 sticky top-0 bg-gradient-to-br from-[#DBE2EF] via-[#F8FAFF] to-[#E8F2FF]">
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

            <div className="flex flex-col mt-6 px-4 sm:px-6 space-y-3 sm:space-y-4 pb-6">
              {/* Mobile Services Accordion */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className="w-full px-4 py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 flex items-center justify-between hover:bg-white/60 hover:backdrop-blur-sm hover:text-blue-600 text-gray-800"
                >
                  Services
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isMegaMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isMegaMenuOpen ? "max-h-[2000px]" : "max-h-0"
                  }`}
                >
                  <div className="pl-4 space-y-4 py-2">
                    {serviceCategories.map((category, index) => {
                      const CategoryIcon = category.icon;
                      return (
                        <div key={index} className="space-y-2">
                          <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                            <CategoryIcon className="w-4 h-4 text-blue-600" />
                            {category.title}
                          </h4>
                          <ul className="space-y-1 pl-4">
                            {category.items.map((item, idx) => {
                              const ItemIcon = item.icon;
                              return (
                                <li key={idx}>
                                  <Link
                                    href={item.href}
                                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 py-1"
                                    onClick={() => handleLinkClick(item.href)}
                                  >
                                    <ItemIcon className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                                    {item.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

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

              {/* Mobile CTA Button */}
              <Link
                href="/contact-us"
                className="px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center gap-2"
                onClick={() => handleLinkClick("/contact-us")}
              >
                Let's Talk
                <span className="text-lg">↗</span>
              </Link>
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