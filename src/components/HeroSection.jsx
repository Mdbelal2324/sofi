import React from "react";
import Hero from "../assets/image/home.webp"; 

export default function HeroSection() {
  return (
    <section className="bg-[#3f51b5] py-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
         

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Where Traditional Software Development Meets 
             <span className="text-yellow-300">  Cutting-Edge Artificial Intelligence
</span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8">
           From custom web development to AI-powered applications, we deliver cutting-edge digital solutions that transform how you serve your customers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#services"
              className="bg-white text-[#3f51b5] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 shadow-md"
            >
              Get Started
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
