import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-[#3f51b5]  py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Section */}
        <div className="flex-1 text-white space-y-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold">4.9/5.0</h2>
            <p className="text-yellow-400 text-2xl sm:text-3xl mt-2">★★★★★</p>
            <p className="text-black-200 text-base sm:text-lg">
              by 700+ customers for 3200+ clients
            </p>
          </div>

          <div>
            <p className="font-semibold  uppercase text-sm">Call for advice now!</p>
            <p className="text-2xl font-bold text-white">1900 68668</p>
          </div>

          <div>
            <p className="font-semibold text-gray-200 uppercase text-sm">Say Hello</p>
            <p className="text-lg font-bold text-white">hello@mitech.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white text-black rounded-2xl p-6 sm:p-8 shadow-2xl w-full">
          <h3 className="text-2xl font-bold mb-2">Need a hand?</h3>
          <p className="text-gray-600 mb-6">
            Reach out to the world's most reliable IT services.
          </p>

          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-semibold mb-1">
                Select Department to email
              </label>
              <select
                id="department"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="">Select a department</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1">
                Please describe what you need
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Send message
            </button>

          </form>
          
        </div>
      </div>
    </div>
    
  );
};

export default ContactSection;
