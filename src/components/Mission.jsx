import React from 'react';

const Mission = () => {
  return (
    <div className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At IT Solution, our mission is to empower businesses through innovative technology solutions
          that drive growth, efficiency, and transformation. We are committed to delivering top-quality
          services in web development, UI/UX design, cloud services, and more.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">Innovation</h3>
            <p className="text-gray-600">We believe in building cutting-edge solutions using the latest technologies to meet evolving business needs.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">Client Focus</h3>
            <p className="text-gray-600">Our client-centric approach ensures we understand your goals and help you achieve them with tailored services.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">Teamwork</h3>
            <p className="text-gray-600">We work as one team — supporting and uplifting each other to deliver the best possible outcome for our clients.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">Integrity</h3>
            <p className="text-gray-600">Transparency, honesty, and accountability are the foundation of everything we do.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;