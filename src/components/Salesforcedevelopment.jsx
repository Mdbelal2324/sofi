import React from "react";

export default function SalesforceDevelopment() {
  return (
    <div className="bg-[#f5f6ff] text-gray-800">
      {/* Header Section */}
      <div className="relative bg-indigo-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Salesforce Development</h1>
        <nav className="mt-4 text-sm">
          <span className="inline-block mr-1">
            <a href="/" className="text-white hover:underline">Home</a>
          </span>
          <span className="inline-block mx-1">&gt;</span>
          <span className="text-blue-300 font-semibold">Salesforce Development</span>
        </nav>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Left - Image/Graphic */}
        <div className="bg-gradient-to-br from-indigo-900 to-blue-500 rounded-lg p-6 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
            Salesforce CRM Solutions
          </h2>
        </div>

        {/* Right - Description */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-blue-600">Salesforce</span> Development
          </h2>
          <p className="mb-4">
            Salesforce development involves building custom solutions on the Salesforce platform to automate business processes, improve customer relationships, and drive growth. It includes Apex coding, Lightning Components, and Salesforce integrations tailored to business needs.
          </p>
          <p>
            As a powerful cloud-based CRM, Salesforce empowers businesses to streamline sales, service, and marketing operations. With custom app development, automation through Flows, and third-party integrations, Salesforce developers help companies enhance productivity and deliver seamless customer experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
