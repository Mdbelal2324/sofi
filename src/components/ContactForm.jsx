// ConsultationBanner.jsx
import React, { useState } from "react";
import { Mail, User, Phone, MessageSquare, MapPin } from "lucide-react";

const ConsultationBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Mobile App Development",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbyiRPMR5eNe079Sas--SAgXGW4UuYbhkx9orfABTkZVawxHw97pkPh0tdC6jO4B3iPlzQ/exec"; // apna Google Apps Script WebApp URL yaha paste karo

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert("Thank you for reaching Out! we'll contact you soon...");
      console.log(result);

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Mobile App Development",
        message: "",
      });
    } catch (error) {
      console.error("Error!", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

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
              <span className="text-yellow-500">
                Looking for a reliable technology partner?
              </span>
              <br />
              Let’s <span className="font-extrabold">make it</span> simple.
              <br />
              Schedule a call and <br />
              <span className="text-blue-600">we’ll be in touch shortly.</span>
            </h3>
          </div>

          {/* Right Form */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <User className="text-gray-400 mr-2 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full outline-none text-sm"
                    required
                  />
                </div>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <Mail className="text-gray-400 mr-2 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full outline-none text-sm"
                  required
                />
              </div>

              {/* Select Option */}
              <div className="border rounded-lg px-3 py-2">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full outline-none text-sm"
                >
                  <option>Mobile App Development</option>
                  <option>Website Development</option>
                  <option>E-Commerce Development</option>
                  <option>AI ML Solutions</option>
                  <option>Chatbot Development</option>
                  <option>AI Agents Development</option>
                  <option>CRM Solutions</option>
                  <option>Digital Marketing</option>
                  <option>UI/UX Design</option>
                  <option>Others</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex items-start border rounded-lg px-3 py-2">
                <MessageSquare className="text-gray-400 mr-2 w-5 h-5 mt-1" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write a Message *"
                  rows="3"
                  className="w-full outline-none text-sm resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
              >
                {loading ? "Submitting..." : "Schedule Free Consultation"}
              </button>
            </form>
          </div>
        </div>

        {/* Contact With Me Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-14">
            Get in <span className="text-green-500">Touch</span> With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            {/* Sales Department */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start border border-green-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-3 rounded-xl bg-green-500 text-white mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Sales Department
              </h3>
              <p className="text-indigo-700 font-medium text-lg tracking-wide">
                +916200 212 591
              </p>
            </div>

            {/* HR Department */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start border border-green-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-3 rounded-xl bg-green-500 text-white mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                HR Department
              </h3>
              <p className="text-indigo-700 font-medium text-lg tracking-wide">
                HR@sofiloft.com
              </p>
            </div>

            {/* Office Location */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start border border-green-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-3 rounded-xl bg-green-500 text-white mb-4">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Office Location
              </h3>
              <p className="text-indigo-700 font-medium text-lg tracking-wide">
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
