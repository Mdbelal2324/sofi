import React from "react";
import { FaUserTie, FaCheckCircle, FaUsers } from "react-icons/fa";
import { MdOutlineManageSearch } from "react-icons/md";
import whyImage from "../assets/image/chose.jpg"; // replace with your image path

export default function WhyChooseUs() {
  const features = [
    {
      icon: <MdOutlineManageSearch className="text-blue-500 text-3xl" />,
      title: "Client-Centric Approach",
      desc: "We take the time to delve into your unique goals, challenges, and target audience before crafting any solutions."
    },
    {
      icon: <FaCheckCircle className="text-blue-500 text-3xl" />,
      title: " Proven Track Record of Success",
      desc: "We showcase a curated selection of our best projects across various industries, demonstrating our ability."
    },
    {
      icon: <FaUsers className="text-blue-500 text-3xl" />,
      title: "A Team of Experts You Can Trust",
      desc: "Our team comprises passionate and dedicated IT specialists with a deep understanding of the latest technologies."
    }
  ];

  return (
    <section className="py-16 bg-[#3f51b5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={whyImage}
              alt="Why Choose Us"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="flex items-center text-black-600 font-semibold uppercase tracking-wide mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black-300 b-4">
              Your Trusted Partner For IT Success
            </h2>
            <p className="text-gray-200 mb-6">
              In today's digital landscape, having a strong online presence and
              robust IT infrastructure is crucial for business growth. But with
              so many IT agencies out there, why choose us? Here's why we stand out.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-black-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
