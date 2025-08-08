import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">About Our IT Company</h1>
        <p className="text-gray-700 text-lg mb-6">
          We are a leading IT solutions provider, delivering cutting-edge technology services to clients worldwide. Our goal is to help businesses thrive in the digital era.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl w-full p-6">
        {/* Mission Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Empowering businesses with innovative technology solutions that drive success and efficiency.
          </p>
        </div>
        
        {/* Vision Section */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            To be the global leader in IT services, creating impactful digital experiences for enterprises.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-10 max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-purple-600">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Software Engineer</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
