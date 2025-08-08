import React from "react";

export default function Webdevelopment() {
  return (
    <div className="bg-[#f5f6ff] text-gray-800">
      {/* Header Section */}
      <div className="relative bg-blue-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Web Development</h1>
        <nav className="mt-4 text-sm">
          <span className="inline-block mr-1">
  <a href="/" className="text-white-600 hover:underline">Home</a>
</span>
<span className="inline-block mx-1">&gt;</span>
         
          <span className="text-green-400 font-semibold">Web Development</span>
        </nav>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Left - Image/Graphic */}
        <div className="bg-gradient-to-br from-blue-900 to-green-500 rounded-lg p-6 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
            Web Application Development
          </h2>
        </div>

        {/* Right - Description */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-green-600">Web</span> Development
          </h2>
          <p className="mb-4">
            Web development is the process of designing, building, and maintaining
            websites and web applications. It encompasses front-end development,
            responsible for user interface and design, and back-end development,
            which manages server-side functionality. Full-stack developers excel
            in both areas, while web designers focus on aesthetics.
          </p>
          <p>
            Web development has evolved from static web pages to dynamic,
            feature-rich applications. Its significance lies in establishing digital
            presence, engaging users with interactive experiences, facilitating
            e-commerce, and helping companies grow online. Modern web development
            blends aesthetics with usability, creating solutions that are visually
            appealing and highly functional.
          </p>
        </div>
      </div>
    </div>
  );
}