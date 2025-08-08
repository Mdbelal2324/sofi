import React from "react";

const teamMembers = [
  { name: "John Doe", role: "CEO", img: "https://via.placeholder.com/150" },
  { name: "Jane Smith", role: "CTO", img: "https://via.placeholder.com/150" },
  { name: "David Brown", role: "Designer", img: "https://via.placeholder.com/150" },
  { name: "Emily White", role: "Developer", img: "https://via.placeholder.com/150" },
];

function OurTeam() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full border-4 border-gray-300"
              />
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600 text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;

