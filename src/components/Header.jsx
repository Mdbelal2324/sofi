import React from 'react';

const Header = () => {
  const headerData = [
    {
      title: 'Address',
      description: ' kachi pakki Muzzaffar pur ',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V7.618a1 1 0 01.553-.894L9 4m6 0l5.447 2.724A1 1 0 0121 7.618v8.764a1 1 0 01-.553.894L15 20M9 4v16m6-16v16"
          />
        </svg>
      ),
    },
    {
      title: 'Send Email',
      description: 'mdbelala35@gmail.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12H8m4-8v16m0-8H5.882a2.882 2.882 0 01-2.882-2.882V5.882A2.882 2.882 0 015.882 3H8M3 16h18"
          />
        </svg>
      ),
    },
    {
      title: 'Call Emergency',
      description: '+91 8823919595\n+91 9785621765',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10v4a1 1 0 001 1h4l2-3 3 6 3-6 2 3h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4l-2 3-3-6-3 6-2-3H4a1 1 0 00-1 1z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        {headerData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border border-gray-700 rounded-lg hover:border-blue-500 transition duration-300"
          >
            <div className="bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 whitespace-pre-line">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;
