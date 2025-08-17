import React from "react";
import aboutImg1 from "../assets/image/about1.webp";
import aboutImg2 from "../assets/image/about2.webp";
import { Phone } from "lucide-react";
import Marquee from "react-fast-marquee";

// Brand Logos
import gartner from "../assets/image/logo1.webp";
import movex from "../assets/image/logo1.webp";
import a4tech from "../assets/image/logo1.webp";
import radiant from "../assets/image/logo1.webp";
import maxhub from "../assets/image/logo1.webp";
import icsolutions from "../assets/image/logo1.webp";
import exotech from "../assets/image/logo1.webp";
import { FaUserTie, FaShieldAlt, FaThumbsUp, FaBullseye } from "react-icons/fa";
import TeamImg from "../assets/image/team.webp";
import { FaPhoneAlt } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  const logos = [
    gartner,
    movex,
    movex,
    a4tech,
    radiant,
    maxhub,
    icsolutions,
    exotech,
  ];

  const stats = [
    {
      icon: <FaUserTie className="text-blue-700 text-7xl mb-3" />,
      value: "25+",
      label: "Years of experience",
    },
    {
      icon: <FaShieldAlt className="text-blue-700 text-7xl mb-3" />,
      value: "280+",
      label: "Success Stories",
    },
    {
      icon: <FaThumbsUp className="text-blue-700 text-7xl mb-3" />,
      value: "56K+",
      label: "Companies Trust Us",
    },
    {
      icon: <FaBullseye className="text-blue-700 text-7xl mb-3" />,
      value: "100%",
      label: "Results Guaranteed",
    },
  ];

  const experts = [
    {
      name: "Satnam Singh",
      title: "SYSTEMS ENGINEER",
      img: "https://via.placeholder.com/300x300",
    },
    {
      name: "Pooja Khowal",
      title: "DIGITAL MARKETING CONSULTANT",
      img: "https://via.placeholder.com/300x300",
    },
    {
      name: "Bhaskar Yogi",
      title: "FULL STACK WEB DEVELOPER",
      img: "https://via.placeholder.com/300x300",
    },
  ];

  return (
    <div className="bg-[#010C30] min-h-screen pt-20 pb-16">
      {/* ==== First Section - About Us ==== */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white mt-2">About Us</h1>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto px-4">
          We are passionate about delivering top-notch IT solutions, combining
          creativity, technology, and expertise to help businesses grow.
        </p>
      </div>

      {/* Image Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-10">
        {/* Left Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={aboutImg1}
            alt="About 1"
            className="w-full h-[320px] md:h-[380px] object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={aboutImg2}
            alt="About 2"
            className="w-full h-[320px] md:h-[380px] object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
              ▶
            </div>
          </button>
        </div>
      </div>

      {/* ==== Second Section - Services ==== */}
      <section className="bg-[#E6F0FA] py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-900 font-medium">
                Groot Software{" "}
                <span className="bg-pink-500 text-white px-3 py-0.5 rounded-full">
                  Solutions😊
                </span>
              </p>
              <h2 className="text-4xl font-bold text-[#031B4E] mt-2 leading-snug">
                Flexible Services, Tailored for You
              </h2>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                At Groot Software, we deliver dynamic IT solutions designed to
                fit your unique needs. Our adaptable approach offers everything
                from custom software development to strategic IT consultancy and
                robust infrastructure support—evolving with you to drive
                success, every step of the way.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Our History */}
            <div className="bg-white rounded-3xl p-6 relative">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="blue"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 6a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#031B4E] mb-2">
                Our History
              </h3>
              <p className="text-gray-600 text-sm">
                Since 1997 we have been a visionary and a reliable software
                engineering partner for world-class brands.
              </p>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="bg-blue-600 p-3 rounded-full text-white">
                  <Phone size={18} />
                </div>
                <span className="bg-gray-200 px-2 py-0.5 rounded text-xs text-black">
                  Call Now
                </span>
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-3xl p-6">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-[#031B4E] mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                A mission statement clarifies what the company wants to achieve,
                who they want to support, and why they want to support them.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-3xl p-6">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <span className="text-2xl">👁</span>
              </div>
              <h3 className="text-xl font-semibold text-[#031B4E] mb-2">
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

      {/* ==== Third Section - Brand Partners ==== */}
      <section className="bg-[#E6F0FA] py-10">
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="bg-pink-500 text-white text-sm px-3 py-1 rounded-full">
            Our Trusted
          </span>
          <h2 className="text-gray-700 text-lg font-medium">Brand Partners</h2>
        </div>

        <Marquee gradient={false} speed={40}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white flex justify-center items-center w-48 h-28 rounded-lg shadow-sm mx-4 p-4"
            >
              <img
                src={logo}
                alt={`Brand ${index}`}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </section>

      {/* ==== Fourth Section - Stats + Image ==== */}
      <section className="bg-blue-50 py-10 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Left - Stats (4 Cards) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start min-h-[220px]"
              >
                {item.icon}
                <h3 className="text-6xl font-bold text-gray-900">{item.value}</h3>
                <p className="text-gray-500 text-2xl">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={TeamImg}
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ==== Fifth Section - Experts ==== */}
      <section className="py-12 px-4 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0b0b40]">
          Top Skilled Experts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-2xl p-4 flex flex-col items-center relative overflow-hidden group"
            >
              {/* Image */}
              <div className="relative w-full h-72 flex justify-center items-center bg-white rounded-xl overflow-hidden">
                <img
                  src={expert.img}
                  alt={expert.name}
                  className="object-contain h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition bg-black/20">
                  <div className="bg-blue-600 p-4 rounded-full text-white">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Call Button */}
              <a
                href={expert.phone}
                className="absolute bottom-4 left-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-blue-700 transition"
              >
                <FaPhoneAlt />
                <span className="bg-gray-800 px-2 py-0.5 rounded text-xs">
                  Call Now
                </span>
              </a>

              {/* Name & Title */}
              <div className="mt-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-[#0b0b40]">
                  {expert.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide mt-1">
                  {expert.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==== Sixth Section - CTA ==== */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Work, Let’s Chat
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Our team of experts is ready to collaborate with you every step of
            the way, from initial consultation to implementation.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 mx-auto transition duration-300">
            CONTACT US TODAY!
            <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Floating Call Now Button */}
        <div className="fixed bottom-6 left-6 z-20 flex items-center">
          <a
            href="tel:+1234567890"
            className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition"
          >
            📞 Call Now
          </a>
        </div>
      </section>
    </div>
  );
}
