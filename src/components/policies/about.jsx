import React from "react";
import { Target, BookOpen, Lightbulb, Users } from "lucide-react";

export default function About() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 mt-16 select-none ">
      <div className="max-w-7xl mt-10 w-full bg-white shadow-2xl rounded-3xl p-6 md:p-12 relative overflow-hidden">
        {/* Decorative gradient blur */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse" />

        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#051d40] via-[#1976d2] to-[#051d40] bg-clip-text text-transparent">
          About Us
        </h1>

        <div className="space-y-12 text-center">
          {/* Intro Section */}
          <section className="space-y-6">
            <h2 className="text-4xl font-semibold bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              Welcome to Nexcore-Alliance
            </h2>
            <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
              Empowering students with future-ready skills through innovative education solutions
              that inspire growth, creativity, and success.
            </p>
          </section>

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <section className="text-left bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-semibold text-[#106EB5]">Mission-Driven</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
                <li>Focused on equipping students with industry-relevant skills for a competitive edge.</li>
                <li>Dedicated to preparing learners for a brighter and more successful future.</li>
              </ul>
            </section>

            {/* Programs */}
            <section className="text-left bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-semibold text-[#106EB5]">Comprehensive Programs</h3>
              </div>
              <p className="text-gray-700 text-lg mb-2">Specialized courses in:</p>
              <ul className="list-disc list-inside text-gray-700 text-lg ml-4 space-y-2">
                <li><strong>Coding:</strong> Master programming and software development.</li>
                <li><strong>Market Intelligence:</strong> Develop data-driven decision-making skills.</li>
                <li><strong>Growth-Centric Training:</strong> Cultivate personal and professional growth.</li>
              </ul>
            </section>

            {/* Learning Approach */}
            <section className="text-left bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-semibold text-[#106EB5]">Innovative Learning Approach</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
                <li><strong>Inclusive:</strong> Accessible to students from diverse backgrounds.</li>
                <li><strong>Results-Oriented:</strong> Designed for measurable success and career impact.</li>
                <li><strong>Tailored Solutions:</strong> Courses aligned with industry demands and real-world applications.</li>
              </ul>
            </section>

            {/* Support Team */}
            <section className="text-left bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-semibold text-[#106EB5]">Expert Support Team</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
                <li>A passionate team committed to guiding students every step of the way.</li>
                <li>Ongoing mentorship to unlock potential and ensure success.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
