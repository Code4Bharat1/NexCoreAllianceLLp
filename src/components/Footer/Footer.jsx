"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Heart,
  ChevronRight,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setShowBackToTop(window.scrollY > 300);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
    return () => {};
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialLinks = [
    { href: "https://www.facebook.com/profile.php?id=61570113656994", icon: FaFacebook, color: "text-blue-600 hover:text-blue-700", label: "Facebook" },
    { href: "https://www.linkedin.com/company/105730702/admin/dashboard/", icon: FaLinkedin, color: "text-blue-700 hover:text-blue-800", label: "LinkedIn" },
    { href: "https://www.instagram.com/nexcorealliancellp/", icon: FaInstagram, color: "text-pink-600 hover:text-pink-700", label: "Instagram" },
    { href: "https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag", icon: FaYoutube, color: "text-red-600 hover:text-red-700", label: "YouTube" },
  ];

  const quickLinks = [
    { href: "/", label: "Main" },
    
    { href: "/terms-and-condition", label: "Terms & Conditions" },
  ];

  const policies = [
    { href: "/policies/about", label: "About" },
    { href: "/policies/contact", label: "Contact" },
    { href: "/policies/termsandcondition", label: "Terms and Conditions" },
    { href: "/policies/privacy", label: "Privacy Policy" },
    { href: "/policies/product-pricing", label: "Product Pricing" },
    { href: "/policies/delivery-policy", label: "Delivery Policy" },
    { href: "/policies/cancellation-policy", label: "Cancellation Policy" },
    { href: "/policies/refund-policy", label: "Refund Policy" },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 mt-16 overflow-hidden select-none">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Follow Us Section */}
            <div>
              <div className="mb-5 flex justify-center">
                <a href="/">
                  <img
                    src="/nex.png"
                    alt="Nexcore logo"
                    className="w-[280px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <h4 className="text-2xl font-bold mb-6 text-black text-center">Follow Us</h4>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group p-3 bg-gray-100 hover:bg-white rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className={`h-6 w-6 ${social.color}`} />
                  </a>
                ))}
              </div>
              <p className="text-black text-base text-center">
                Stay connected for the latest updates and innovations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-black">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center text-black hover:text-blue-600 transition-colors duration-300 text-base"
                    >
                      <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies Section */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-slate-800">Policies</h4>
              <ul className="space-y-3">
                {policies.map((policy, index) => (
                  <li key={index}>
                    <a
                      href={policy.href}
                      className="group flex items-center text-black hover:text-purple-600 transition-colors duration-300 text-base"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {policy.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-slate-800">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-blue-500 mr-3" />
                  <div>
                    <p className="text-black text-xs">Email</p>
                    <a
                      href="mailto:nexcorealliance@gmail.com"
                      className="text-black hover:text-blue-500 transition-colors duration-300 text-sm"
                    >
                      nexcorealliance@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-green-500 mr-3" />
                  <div>
                    <p className="text-black text-xs">Phone</p>
                    <a
                      href="tel:+919594430295"
                      className="text-black hover:text-green-500 transition-colors duration-300 text-sm"
                    >
                      +91 95944 30295
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-purple-500 mr-3 mt-1" />
                  <div>
                    <p className="text-black text-xs">Address</p>
                    <a
                      href="https://maps.app.goo.gl/VBg1XznP8dy9dzGd6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-purple-500 transition-colors duration-300 flex items-start text-sm"
                    >
                      Off BKC, Mumbai, India 400070
                      <ExternalLink className="h-3 w-3 ml-2 mt-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="relative z-10 border-t border-slate-200/50 bg-white/60 backdrop-blur-sm select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 text-center">
              <p className="text-slate-600 text-sm flex items-center order-2 sm:order-1">
                Built with <Heart className="text-red-500 mx-1 h-4 w-4" /> and
                passion by{" "}
                <a
                  href="https://code4bharat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-200"
                >
                  Code4Bharat
                </a>
              </p>
              <div className="hidden sm:block w-px h-4 bg-slate-300/50 mx-6"></div>
              <p className="text-slate-600 text-sm order-1 sm:order-2 mt-1 sm:mt-0">
                &copy; 2011 – {new Date().getFullYear()} Nexcore Alliance. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 8s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <button
          onClick={scrollToTop}
          className={`p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
            showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 text-white" />
        </button>
        <a
          href="https://wa.me/9594430295"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </a>
      </div>
    </>
  );
};

export default Footer;
