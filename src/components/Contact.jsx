import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl">
        <div className="flex items-center mb-4">
          <img
            src="avatar.png" // Replace with the actual avatar image URL
            alt="Avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">Md Sumon Mia</h2>
            <p className="text-sm text-gray-500">CEO at Rimasu</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4">
          "Completely drive innovative value whereas out-of-the-box paradigms.
          Interactively pursue stand-alone markets after global results. Globally
          plagiarize intermandated opportunities with. Progressively leverage others
          multifunctional methods."
        </p>

        <div className="flex justify-between">
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button 1
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Button 2
            </button>
          </div>

          <div className="flex space-x-4">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.402-1.402a4.935 4.935 0 01-7-7M2 9.936V14c0 4.97 3.556 9 8.5 9a11.493 11.493 0 006.5-1.215"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;