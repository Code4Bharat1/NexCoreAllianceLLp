"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.replace("/"); // 301-like behavior
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  // Fade-in animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse parallax
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
    return () => {};
  }, []);

  const quickLinks = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "About", path: "/about", icon: "ℹ️" },
    { name: "Services", path: "/services", icon: "⚙️" },
    { name: "Contact", path: "/contact", icon: "📞" },
  ];

  return (
    <div className="fixed inset-0 z-50 min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-auto">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-[#051d40] text-lg">
              Nexcore Alliance
            </span>
          </div>
          <button
            onClick={() => router.push("/")}
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
          >
            <span>🏠</span>
            <span className="hidden sm:inline">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Background Blur Circles */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{
            top: `${20 + (mousePosition.y - 50) * 0.1}%`,
            left: `${10 + (mousePosition.x - 50) * 0.1}%`,
          }}
        />
        <div
          className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{
            bottom: `${20 + (mousePosition.y - 50) * -0.1}%`,
            right: `${10 + (mousePosition.x - 50) * -0.1}%`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-12">
        <h1
          className={`text-8xl sm:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          404
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 text-center max-w-xl">
          Oops! The page you’re looking for doesn’t exist.  
          Redirecting you to the homepage in{" "}
          <span className="font-bold text-blue-600">{countdown}</span> seconds.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => router.push(link.path)}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <div className="text-2xl mb-1">{link.icon}</div>
              <div className="text-sm font-semibold text-gray-700">
                {link.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
