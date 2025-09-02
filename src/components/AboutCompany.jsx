import React from "react";
import About from "../assets/image/about.png";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const AboutCompany = () => {
  return (
    <div className="bg-gradient-to-r from-white via-blue-50 to-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
            <div className="p-6 sm:p-8 md:p-10 shadow-lg bg-white rounded-full">
              <img
                src={About}
                alt="About SofiLoft"
                className="rounded-full w-full h-auto object-cover"
              />
            </div>

            {/* Decorative icons */}
            <div className="absolute -top-4 right-4 sm:-top-6 sm:right-8">
              <div className="bg-blue-100 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow">
               
              </div>
            </div>
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8">
              <div className="bg-green-100 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow">
            
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-green-500 text-base sm:text-lg font-extrabold mb-2">
            About SofiLoft
          </h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 leading-snug">
            Smart Software, Real Results.
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
            We turn your ideas into high-impact digital products. From custom websites and mobile apps to AI-driven platforms and CRM solutions, we combine technical expertise with strategic insight to help you simplify operations and accelerate growth.
          </p>

          {/* Features List */}
          <ul className="space-y-4 mb-6 text-left">
            <li className="flex items-start sm:items-center space-x-2">
              <span className="text-green-500">
                <GoArrowRight className="w-5 h-5" />
              </span>
              <span className="text-gray-700">
                <span className="font-bold">Rapid, tailored web and mobile app development</span> for competitive advantage
              </span>
            </li>
            <li className="flex items-start sm:items-center space-x-2">
              <span className="text-green-500">
                <GoArrowRight className="w-5 h-5" />
              </span>
              <span className="text-gray-700">
                <span className="font-bold">Advanced AI and machine learning</span> integrations unlocking business intelligence
              </span>
            </li>
            <li className="flex items-start sm:items-center space-x-2">
              <span className="text-green-500">
                <GoArrowRight className="w-5 h-5" />
              </span>
              <span className="text-gray-700">
                <span className="font-bold">Custom CRM, ERP, and workflow</span> automation for increased efficiency
              </span>
            </li>
            <li className="flex items-start sm:items-center space-x-2">
              <span className="text-green-500">
                <GoArrowRight className="w-5 h-5" />
              </span>
              <span className="text-gray-700">
                <span className="font-bold">Cloud-based infrastructure</span> with continuous integration and delivery
              </span>
            </li>
            <li className="flex items-start sm:items-center space-x-2">
              <span className="text-green-500">
                <GoArrowRight className="w-5 h-5" />
              </span>
              <span className="text-gray-700">
                <span className="font-bold">Conversation to UX design</span> (baaki text yahan likho)
              </span>
            </li>
          </ul>

          {/* Button */}
          <Link to="/About">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition text-sm sm:text-base">
              Read More →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
