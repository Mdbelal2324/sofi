import React from 'react'

function ContactFrom() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-6 flex flex-col lg:flex-row gap-10">
      {/* Contact Info Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Contact us</h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Our delivered services elevate us to the status of one of the top app
          development companies. Why delay? Reach out and initiate the process.
        </p>
        <div className="space-y-4">
          <div className="flex items-start sm:items-center gap-4 p-4 border rounded-lg shadow-md">
            <div className="bg-blue-500 text-white p-3 sm:p-4 rounded-full text-xl">
              📍
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Our Address:</h3>
              <p className="text-sm sm:text-base">68/P0, Jagruti Rd, Pratap Nagar, Sanganer, Jaipur, Rajasthan 302033</p>
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-4 p-4 border rounded-lg shadow-md">
            <div className="bg-blue-500 text-white p-3 sm:p-4 rounded-full text-xl">📧</div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Our Mailbox:</h3>
              <p className="text-sm sm:text-base">info@bytonicweb.com</p>
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-4 p-4 border rounded-lg shadow-md">
            <div className="bg-blue-500 text-white p-3 sm:p-4 rounded-full text-xl">📞</div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Phone Number:</h3>
              <p className="text-sm sm:text-base">+91-88239 19595</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Ready to Get Started?</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4">
          Your email address will not be published. Required fields are marked *
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <textarea
            placeholder="Message..."
            className="w-full p-3 border rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 text-sm sm:text-base"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactFrom;
