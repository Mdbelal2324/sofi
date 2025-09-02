// HeroSection.jsx
import React from "react";
import { ArrowUpRight, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0f172a] to-[#1e3a8a] text-white py-20 px-6 sm:px-10 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Tag */}
        <div className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
          🚀 Ready to Get Started?
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Let&apos;s Build Something <br />
          <span className="text-green-400">Amazing Together</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-base sm:text-lg">
          Transform your ideas into powerful digital solutions. Our team is
          ready to help you achieve your goals with cutting-edge technology and
          innovative design.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Start Project Button */}
          <a
            href="/ContactForm"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md transition duration-300"
          >
            <Rocket className="w-5 h-5" />
            Start Your Project Today
            <ArrowUpRight className="w-5 h-5" />
          </a>

          {/* Learn More Button */}
          <a
            href="/About"
            className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
          >
            Learn More About Us
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
