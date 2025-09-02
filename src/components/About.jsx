import React from "react";
import aboutImg1 from "../assets/image/about1.webp";
import aboutImg2 from "../assets/image/about2.webp";

// Brand Logos (example - replace later)
import gartner from "../assets/image/logo1.webp";
import movex from "../assets/image/logo1.webp";
import a4tech from "../assets/image/logo1.webp";
import radiant from "../assets/image/logo1.webp";
import maxhub from "../assets/image/logo1.webp";
import icsolutions from "../assets/image/logo1.webp";
import exotech from "../assets/image/logo1.webp";

import { FaUserTie, FaShieldAlt, FaThumbsUp, FaBullseye } from "react-icons/fa";
import TeamImg from "../assets/image/team.webp";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  const stats = [
    {
      icon: <FaUserTie className="text-blue-700 text-5xl md:text-7xl mb-3" />,
      value: "25+",
      label: "Years of experience",
    },
    {
      icon: <FaShieldAlt className="text-blue-700 text-5xl md:text-7xl mb-3" />,
      value: "280+",
      label: "Success Stories",
    },
    {
      icon: <FaThumbsUp className="text-blue-700 text-5xl md:text-7xl mb-3" />,
      value: "56K+",
      label: "Companies Trust Us",
    },
    {
      icon: <FaBullseye className="text-blue-700 text-5xl md:text-7xl mb-3" />,
      value: "100%",
      label: "Results Guaranteed",
    },
  ];

  return (
    <div className="bg-[#010C30] min-h-screen pt-20 pb-16">
      {/* ==== First Section - About Us ==== */}
      <div className="text-center mb-6 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">About Us</h1>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          We are passionate about delivering top-notch IT solutions, combining
          creativity, technology, and expertise to help businesses grow.
        </p>
      </div>

      {/* ==== Hero Image Section (Hidden on Mobile) ==== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-10 hidden md:grid">
        {/* Left Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={aboutImg1}
            alt="About 1"
            className="w-full h-[280px] md:h-[380px] object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={aboutImg2}
            alt="About 2"
            className="w-full h-[280px] md:h-[380px] object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
              ▶
            </div>
          </button>
        </div>
      </div>

      {/* ==== Second Section - Services ==== */}
      <section className="bg-[#E6F0FA] py-12 md:py-16 mt-12 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <div>
              <p className="text-gray-900 font-medium text-sm md:text-base">
                SofiLoft Technologies{" "}
                <span className="bg-green-500 text-white px-2 py-0.5 rounded-full">
                  Solutions 😊
                </span>
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-[#031B4E] mt-2 leading-snug">
                Flexible Services, Tailored for You
              </h2>
            </div>
            <div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                At Sofiloft Technologies, we provide innovative IT solutions
                tailored to your unique requirements. Our flexible approach
                covers everything from custom software development to strategic
                IT consulting and reliable infrastructure support—growing
                alongside you to ensure success at every stage.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Our History */}
            <div className="bg-white rounded-3xl p-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="blue"
                  className="w-6 h-6 md:w-8 md:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 6a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#031B4E] mb-2">
                Our History
              </h3>
              <p className="text-gray-600 text-sm">
                Since 1997 we have been a visionary and a reliable software
                engineering partner for world-class brands.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-3xl p-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-xl md:text-2xl">🎯</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#031B4E] mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                A mission statement clarifies what the company wants to achieve,
                who they want to support, and why they want to support them.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-3xl p-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <span className="text-xl md:text-2xl">👁</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#031B4E] mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm">
                A vision statement for a company or organization focuses on the
                potential inherent in the company’s future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==== Fourth Section - Stats + Image ==== */}
      <section className="bg-blue-50 py-10 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Left - Stats (4 Cards) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start min-h-[180px] md:min-h-[220px]"
              >
                {item.icon}
                <h3 className="text-3xl md:text-6xl font-bold text-gray-900">
                  {item.value}
                </h3>
                <p className="text-gray-500 text-base md:text-2xl">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Right - Image (hidden on mobile) */}
          <div className="rounded-xl overflow-hidden hidden md:block">
            <img
              src={TeamImg}
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ==== Sixth Section - CTA ==== */}
      <section
        className="relative bg-cover bg-center bg-no-repeat mt-12 md:mt-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center text-white">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Work, Let’s Chat
          </h2>
          <p className="text-sm md:text-xl mb-6 md:mb-8">
            Our team of experts is ready to collaborate with you every step of
            the way, from initial consultation to implementation.
          </p>
          <button className="bg-green-500 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center justify-center gap-2 mx-auto transition duration-300 text-sm md:text-base">
            CONTACT US TODAY!
            <ArrowUpRight size={18} className="md:size-20" />
          </button>
        </div>
      </section>
    </div>
  );
}
