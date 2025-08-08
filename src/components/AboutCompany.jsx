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
          <h3 className="text-purple-600 text-lg font-bold mb-2">ABOUT COMPANY</h3>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            We've Been Thriving For 25 Years.
          </h1>
          <p className="text-gray-600 mb-6">
            Continually harness backward-compatible initiatives and synergistic
            content. Objectively strategize cutting-edge niches with
            collaborative synergy. Globally pontificate e-business processes
            through orthogonal web readiness to enhance backend value.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✔️</span>
              <span className="text-gray-700">
                Dramatically re-engineer value-added IT systems via mission
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✔️</span>
              <span className="text-gray-700">
                Website & Mobile application design & Development
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✔️</span>
              <span className="text-gray-700">
                Professional User Experience & Interface researching
              </span>
            </li>
          </ul>
          <Link to="/aboutMore">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">
            ABOUT MORE →
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
