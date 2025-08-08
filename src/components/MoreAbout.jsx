import React, { useState } from 'react';

function MoreAbout() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl">
        <h2 className="text-2xl font-semibold mb-6">
          Know More About Our IT Solution
        </h2>

        <div className="grid grid-cols-1 gap-4">
          <div
            className={`border border-gray-200 rounded-lg p-4 cursor-pointer ${
              activeQuestion === 0 ? 'bg-gray-50' : ''
            }`}
            onClick={() => toggleQuestion(0)}
          >
            <h3 className="text-lg font-medium mb-2">
              Where can I get analytics help?
            </h3>
            {activeQuestion === 0 && (
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            )}
          </div>

          <div
            className={`border border-gray-200 rounded-lg p-4 cursor-pointer ${
              activeQuestion === 1 ? 'bg-gray-50' : ''
            }`}
            onClick={() => toggleQuestion(1)}
          >
            <h3 className="text-lg font-medium mb-2">
              How long should a business plan be?
            </h3>
            {activeQuestion === 1 && (
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            )}
          </div>

          <div
            className={`border border-gray-200 rounded-lg p-4 cursor-pointer ${
              activeQuestion === 2 ? 'bg-gray-50' : ''
            }`}
            onClick={() => toggleQuestion(2)}
          >
            <h3 className="text-lg font-medium mb-2">Do I need a business plan?</h3>
            {activeQuestion === 2 && (
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreAbout;