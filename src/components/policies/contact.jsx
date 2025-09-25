
import React from 'react';
import { Mail, Phone, MapPin, FileText, Edit3 } from 'lucide-react';


export default function ContactUs() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 px-4 py-16 select-none">
      <div className="max-w-7xl mt-10 w-full bg-white shadow-2xl rounded-3xl p-8 md:p-16 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
          Contact Us
        </h1>

        <div className="space-y-8 text-gray-700 text-lg">
          <p className="text-center">
            We're here to assist you! If you have any questions or need support, feel free to reach out through any of the following methods:
          </p>

          <ul className="space-y-6">
            <li className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <span>
                <strong>Email:</strong>{' '}
                <a href="mailto:nexcorealliance@gmail.com" className="text-blue-500 hover:underline">
                  nexcorealliance@gmail.com
                </a>
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-blue-600" />
              <span>
                <strong>Phone:</strong>{' '}
                <a href="tel:+919594430295" className="text-blue-500 hover:underline">
                  +91-9594430295
                </a>
              </span>
            </li>

            <li className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span>
                <strong>Address:</strong>{' '}
                <a
                  href="https://www.google.com/maps/place/Code4Bharat/@19.0726494,72.8804081,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9598ad468b5:0xa355e25756e9a44f!8m2!3d19.0726494!4d72.8804081!16s%2Fg%2F11vyp7wnp7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Off BKC, Mumbai, India 400070
                </a>
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-gray-700" />

              <span>
                <strong>Contact Form:</strong>{' '}
                <a href="/contact-us" className="text-blue-500 hover:underline">
                  Use our online form
                </a>{' '}
                for prompt assistance.
              </span>
            </li>
          </ul>

          <p className="text-center">
            We value your inquiries and will respond promptly to ensure your needs are addressed effectively.
          </p>
        </div>
      </div>
    </div>
  );
}
