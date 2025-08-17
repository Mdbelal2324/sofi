// ConsultationBanner.jsx
import React from "react";
import { Mail, User, Phone, MessageSquare, MapPin } from "lucide-react";

const ConsultationBanner = () => {
  return (
    <section className="relative pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Heading */}
        <div className="text-center mb-10">
          <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold">
            Transform Your Business Idea Into Reality!
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold leading-snug text-gray-800">
              <span className="text-orange-500">
                Looking for a reliable technology partner?
              </span>
              <br />
              Let’s <span className="font-extrabold">make it</span> simple.
              <br />
              Schedule a call and <br />
              <span className="text-blue-600">we’ll be in touch shortly.</span>
            </h3>

            {/* Decorative Images */}
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                alt="Notebook"
                className="w-16 h-16 object-contain"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921226.png"
                alt="Coffee"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border">
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

            {/* Client Logos */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/05/Coca-Cola-logo.png"
                alt="CocaCola"
                className="h-6"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2022/06/Titan-Logo.png"
                alt="Titan"
                className="h-6"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2021/05/Adani-logo.png"
                alt="Adani"
                className="h-6"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo.png"
                alt="Pepsi"
                className="h-6"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2021/05/Hero-MotoCorp-logo.png"
                alt="Hero"
                className="h-6"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2016/10/Samsung-Logo.png"
                alt="Samsung"
                className="h-6"
              />
            </div>
          </div>
        </div>

        {/* Contact With Me Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Contact with me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sales Department */}
            <div className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col items-start">
              <Phone className="w-8 h-8 text-gray-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-700">
                Sales Department
              </h3>
              <p className="text-indigo-900 font-medium mt-2">
                +91 9468967000
              </p>
            </div>

            {/* HR Department */}
            <div className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col items-start">
              <Mail className="w-8 h-8 text-gray-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-700">
                HR Department
              </h3>
              <p className="text-indigo-900 font-medium mt-2">
                HR@webinfosoftware.com
              </p>
            </div>

            {/* Office Location */}
            <div className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col items-start">
              <MapPin className="w-8 h-8 text-gray-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-700">
                Office Location
              </h3>
              <p className="text-indigo-900 font-medium mt-2">
                Jaipur, Rajasthan, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
