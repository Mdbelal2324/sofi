import React from "react";
import About from "../assets/image/about.png"
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <div className="bg-gradient-to-r from-white via-blue-50 to-white py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <div className="relative">
            <div className=" p-10 shadow-lg">
              {/* Placeholder for the person illustration */}
              <img
                src={About} // Replace with your illustration URL
                alt="Person"
                className="rounded-full"
              />
            </div>
            {/* Decorative icons */}
            <div className="absolute top-0 right-10">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-blue-500">🔍</span>
              </div>
            </div>
            <div className="absolute bottom-10 left-10">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-green-500">🌿</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-purple-600 text-lg font-bold mb-2">About SofiLoft</h3>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            We've Been Thriving For 25 Years.
          </h1>
          <p className="text-gray-600 mb-6">
           We are your end-to-end software development partner, turning visionary ideas into high-impact digital products. From custom websites and mobile apps to AI/ML-driven platforms and CRM solutions, we combine deep technical skills with strategic insight to help organizations simplify operations, engage users, and accelerate their growth trajectory.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✔️</span>
              <span className="text-gray-700">
               Rapid, tailored web and mobile app development for competitive advantage
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✔️</span>
              <span className="text-gray-700">
                Advanced AI and machine learning integrations unlocking business intelligence
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✔️</span>
              <span className="text-gray-700">
               Custom CRM, ERP, and workflow automation for increased efficiency
              </span>
            </li>
                   <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✔️</span>
              <span className="text-gray-700">
              Cloud-based infrastructure with continuous integration and delivery
              </span>
            </li>
                
                   <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✔️</span>
              <span className="text-gray-700">
             Conversion-optimized UX/UI design focused on user delight and ROI
              </span>
            </li>
          </ul>
          <Link to="/aboutMore">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">
             More started→
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
