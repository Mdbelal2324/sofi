import React from "react";
import Hero from "../assets/image/Ptt.png"; 

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#1e3a8a] min-h-screen flex items-stretch">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-stretch gap-12 w-full mb-12 lg:mb-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Where Traditional Software Development Meets 
            <span className="text-yellow-300"> Cutting-Edge Artificial Intelligence</span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8">
            From custom web development to AI-powered applications, we deliver
            cutting-edge digital solutions that transform how you serve your
            customers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="/ContactForm"
              className="bg-green-500 text-white font-semibold px-6 py-3 rounded-md
              shadow-md transition duration-300 
              hover:bg-green-600 hover:shadow-lg hover:scale-105"
            >
              + Get Started
            </a>
          </div>
        </div>

        {/* Right Image (hidden on mobile) */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-end pt-28">
          <img
            src={Hero}
            alt="IT Consultant"
            className="h-full max-h-screen object-contain"
          />
        </div>
      </div>
    </section>
  );
}
