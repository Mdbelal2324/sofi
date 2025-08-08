import React from "react";

export default function Appdevelopment() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-blue-800 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">App Development</h1>
        <nav className="mt-4 text-sm">
          <span className="inline-block mr-1">
  <a href="/" className="text-white-600 hover:underline">Home</a>
</span>
<span className="inline-block mx-1">&gt;</span>
          
          <span className="text-yellow-300 font-semibold">App Development</span>
        </nav>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Image/Icon Section */}
        <div className="flex items-center justify-center">
          <div className="w-60 h-60 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl text-blue-700 font-bold text-center">📱</span>
          </div>
        </div>

        {/* Right - Description */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-blue-700">App</span> Development
          </h2>
          <p className="mb-4">
            App development involves creating software applications for mobile devices
            and platforms like Android and iOS. It includes user-friendly design,
            efficient coding, and seamless performance to ensure a top-tier user experience.
          </p>
          <p>
            From simple utility apps to complex enterprise solutions, mobile apps are
            transforming the way businesses engage with their audience. With responsive design,
            integration capabilities, and robust performance, app development bridges
            innovation and functionality in the digital age.
          </p>
        </div>
      </div>
    </div>
  );
}