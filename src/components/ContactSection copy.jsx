import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-[#3f51b5]  py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Section */}
        <div className="flex-1 text-white space-y-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold">4.9/5.0</h2>
            <p className="text-yellow-400 text-2xl sm:text-3xl mt-2">★★★★★</p>
            <p className="text-black-200 text-base sm:text-lg">
              by 200+ customers for 450+ clients
            </p>
          </div>

          <div>
            <p className="font-semibold  uppercase text-sm">Call for advice now!</p>
            <p className="text-2xl font-bold text-white">1900 68668</p>
          </div>

          <div>
            <p className="font-semibold text-gray-200 uppercase text-sm">Say Hello</p>
            <p className="text-lg font-bold text-white">hello@mitech.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white text-black rounded-2xl p-6 sm:p-8 shadow-2xl w-full">
          <h3 className="text-2xl font-bold mb-2">Need a hand?</h3>
          <p className="text-gray-600 mb-6">
            Reach out to the world's most reliable IT services.
          </p>

          <form className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <User className="text-gray-400 mr-2 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full outline-none text-sm"
                    required
                  />
                </div>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <Mail className="text-gray-400 mr-2 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Email ID *"
                    className="w-full outline-none text-sm"
                    required
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <Phone className="text-gray-400 mr-2 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="+91 81234 56789"
                  className="w-full outline-none text-sm"
                  required
                />
              </div>

              {/* Select Option */}
              <div className="border rounded-lg px-3 py-2">
                <select className="w-full outline-none text-sm">
                  <option>Mobile App Development</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Software Consulting</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex items-start border rounded-lg px-3 py-2">
                <MessageSquare className="text-gray-400 mr-2 w-5 h-5 mt-1" />
                <textarea
                  placeholder="Write a Message *"
                  rows="3"
                  className="w-full outline-none text-sm resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Schedule Free Consultation
              </button>
            </form>
          
        </div>
      </div>
    </div>
    
  );
};

export default ContactSection;
