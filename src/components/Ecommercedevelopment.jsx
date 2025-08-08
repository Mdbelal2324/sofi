import React from "react";

export default function EcommerceDevelopment() {
  return (
    <div className="bg-[#f5f6ff] text-gray-800">
      {/* Header Section */}
      <div className="relative bg-pink-800 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">E-Commerce Development</h1>
        <nav className="mt-4 text-sm">
          <span className="inline-block mr-1">
            <a href="/" className="text-white hover:underline">Home</a>
          </span>
          <span className="inline-block mx-1">&gt;</span>
          <span className="text-yellow-300 font-semibold">E-Commerce Development</span>
        </nav>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Left - Image/Graphic */}
        <div className="bg-gradient-to-br from-pink-800 to-yellow-500 rounded-lg p-6 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
            Online Store Development
          </h2>
        </div>

        {/* Right - Description */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-pink-600">E-Commerce</span> Development
          </h2>
          <p className="mb-4">
            E-Commerce development involves creating secure, user-friendly, and scalable online shopping platforms. It includes features like product catalogs, shopping carts, secure payments, and order management to deliver seamless customer experiences.
          </p>
          <p>
            Whether building from scratch or enhancing existing platforms like Shopify, WooCommerce, or Magento, e-commerce development is crucial for online success. With mobile optimization, performance tuning, and integration of payment gateways, it helps businesses grow in the digital marketplace.
          </p>
        </div>
      </div>
    </div>
  );
}
