import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white relative mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Follow Us Section */}
      <div>
        <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
        <div className="flex space-x-6 mb-6">
          <a
            href="https://www.facebook.com/profile.php?id=61570113656994"
            className="hover:opacity-75"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="h-8 w-8" color="#1877F2" />
          </a>
          <a
            href="https://www.linkedin.com/company/105730702/admin/dashboard/"
            className="hover:opacity-75"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-8 w-8" color="#0A66C2" />
          </a>
          <a
            href="https://www.instagram.com/nexcorealliance/"
            className="hover:opacity-75"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="h-8 w-8" color="#E4405F" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag"
            className="hover:opacity-75"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="h-8 w-8" color="#FF0000" />
          </a>
        </div>
      </div>
  
      {/* Quick Links */}
      <div>
        <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-3">
          <li>
            <Link href="/" className="hover:text-lightBlue text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-lightBlue text-lg">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/our-brands" className="hover:text-lightBlue text-lg">
              Our Brands
            </Link>
          </li>
          <li>
            <Link
              href="/terms-&-condition"
              className="hover:text-lightBlue text-lg"
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
  
      {/* Contact Information */}
      <div>
        <h4 className="text-2xl font-semibold mb-4">Contact Us</h4>
        <p className="text-lg mb-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:nexcorealliance@gmail.com"
            className="hover:text-lightBlue"
          >
            nexcorealliance@gmail.com
          </a>
        </p>
        <p className="text-lg mb-2">
          <strong>Phone:</strong>{" "}
          <a href="tel:+919594430295" className="hover:text-lightBlue">
            +91 95944 30295
          </a>
        </p>
        <p className="text-lg">
          <strong>Address:</strong>{" "}
          <a
            href="https://maps.app.goo.gl/VBg1XznP8dy9dzGd6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Off BKC, Mumbai, India 400070
          </a>
        </p>
      </div>
    </div>
  
    {/* Sticky WhatsApp Icon */}
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/9594430295"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-lightBlue"
      >
        <FaWhatsapp className="h-16 w-16" color="#25D366" />
      </a>
    </div>
  
    {/* Bottom Footer */}
    <div className="bg-darkBlue text-center py-4 border-t border-gray-700">
      <p className="text-sm sm:text-base mb-2">
        Built with ❤️ and passion by{" "}
        <a
          href="https://code4bharat.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightBlue hover:underline"
        >
          Code4Bharat
        </a>
      </p>
      <p className="text-sm sm:text-base">
        &copy; 2011 &ndash; {new Date().getFullYear()} NexCoreAlliance. All rights
        reserved.
      </p>
    </div>
  </footer>
  
  );
};

export default Footer;
