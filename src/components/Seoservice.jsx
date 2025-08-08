import React from "react";

export default function Seoservice() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">SEO Services</h1>
        <nav className="mt-4 text-sm">
           <span className="inline-block mr-1">
  <a href="/" className="text-white-600 hover:underline">Home</a>
</span>
<span className="inline-block mx-1">&gt;</span>
          <span className="text-yellow-300 font-semibold">SEO Services</span>
        </nav>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Image/Icon Section */}
        <div className="flex items-center justify-center">
          <div className="w-60 h-60 bg-indigo-100 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl text-indigo-700 font-bold text-center">🔍</span>
          </div>
        </div>

        {/* Right - Description */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-indigo-700">SEO</span> Services
          </h2>
          <p className="mb-4">
            SEO (Search Engine Optimization) is the process of optimizing websites
            to rank higher on search engines like Google. It includes keyword research,
            on-page optimization, technical improvements, and content strategy.
          </p>
          <p>
            Effective SEO drives organic traffic, improves visibility, and helps build
            brand authority online. It’s a crucial part of digital marketing that ensures
            your business reaches the right audience at the right time through strategic,
            data-driven practices.
          </p>
        </div>
      </div>
    </div>
  );
}
