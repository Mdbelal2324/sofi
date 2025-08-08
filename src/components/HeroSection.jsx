import React from "react";
import Hero from "../assets/image/home.webp"; 

export default function HeroSection() {
  return (
    <section className="bg-[#3f51b5] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h4 className="text-white text-sm md:text-base font-semibold uppercase mb-4 tracking-wide">
            IT Design & Consulting
          </h4>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Facilitate All <br />
            Local <span className="text-yellow-300">IT-related Service Providers</span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8">
            We help local IT businesses scale their services through world-class design, consultation, and technological innovation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#services"
              className="bg-white text-[#3f51b5] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 shadow-md"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="bg-yellow-300 text-[#1b1f2d] font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition duration-300 shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Hero}
            alt="IT Consultant"
            className="rounded-3xl shadow-2xl w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
