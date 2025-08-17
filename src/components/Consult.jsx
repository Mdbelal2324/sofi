import React from "react";
import personImg from "../assets/image/girl.webp"; // replace with your image path

const Consultant = () => {
  return (
    <section className="bg-[#3f51b5] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={personImg}
            alt="Person working"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Boost Your Business & Make It Productive With Our AI Services!
          </h1>
          <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-900 transition">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Consultant;
