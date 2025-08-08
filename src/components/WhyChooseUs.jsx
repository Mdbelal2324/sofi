import React from 'react';
import Why from '../assets/image/why.svg'; // Ensure path is correct

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
              You Get IT & Business Solution
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
              Dynamically brand plug-and-play action items for extensive leadership.
              Seamlessly collaborate and quickly leverage 24/7 portals through scalable alignment.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {[
                'Big Data Analysis',
                'High Quality Security',
                '24/7 Online Support',
                'Virtual Support Team',
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-base md:text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 text-sm md:text-base"
            >
              LEARN MORE →
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="w-full">
            <img
              src={Why}
              alt="Why Choose Us"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
