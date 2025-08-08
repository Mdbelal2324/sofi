// FullFooter.jsx
import React from 'react';
import {
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram
} from 'react-icons/fa6';

const FullFooter = () => {
  return (
    <footer className="bg-black text-white text-sm">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get in touch</h3>
          <div className="space-y-3">
            <p>
              <strong>SALES</strong><br />
              <a href="mailto:info@devtechnosys.com" className="text-purple-400">info@devtechnosys.com</a>
            </p>
            <p>
              <strong>SALES UAE</strong><br />
              <a href="mailto:info@devtechnosys.ae" className="text-purple-400">info@devtechnosys.ae</a>
            </p>
            <p>
              <strong>CAREER WITH US</strong><br />
              <a href="mailto:hr@devtechnosys.com" className="text-purple-400">hr@devtechnosys.com</a>
            </p>
            <p>
              <strong>SALES</strong><br />+1 415-992-5493<br />+44 20 8638 7669
            </p>
            <p>
              <strong>HR</strong><br />+91 141-4107667<br />7852883297
            </p>
            <p>
              <strong>HEADQUARTER INDIA</strong><br />
              B-11-12, Lal Bahadur Nagar,<br />
              Sector 9 Malviya Nagar, Jaipur,<br />
              Rajasthan - INDIA 302017
            </p>
          </div>
        </div>

        {/* Newsletter + Links */}
        <div className="md:col-span-1 lg:col-span-3">
          <h3 className="font-semibold text-lg mb-2">Subscribe Our Newsletter</h3>
          <p className="mb-4 text-gray-300 max-w-xl">Be the first one to stay updated on the latest industry trends, news, new product features, and events.</p>

          <div className="relative w-full max-w-md mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 px-4 rounded-lg bg-white text-black focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl">✈️</button>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Insights</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-semibold mb-3">Our Industries</h4>
              <ul className="space-y-2">
                <li><a href="#">Real Estate</a></li>
                <li><a href="#">On-Demand</a></li>
                <li><a href="#">Healthcare</a></li>
                <li><a href="#">Event & Tickets</a></li>
                <li><a href="#">Travel & Tours</a></li>
                <li><a href="#">Ecommerce & Retail</a></li>
                <li><a href="#">Auction</a></li>
                <li><a href="#">Food & Restaurant</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-3">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="#">Mobile Application Development</a></li>
                <li><a href="#">IOT Application Development</a></li>
                <li><a href="#">Blockchain Development</a></li>
                <li><a href="#">POS Development Solution</a></li>
                <li><a href="#">AI Development</a></li>
                <li><a href="#">ICO Development</a></li>
                <li><a href="#">Custom Web Development</a></li>
                <li><a href="#">Web3 Development</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#222] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
          {/* Social Icons */}
          <div className="flex space-x-3 justify-center sm:justify-start">
            <a href="#" className="text-white bg-[#1877F2] p-2 rounded-full hover:scale-110 transition"><FaFacebookF /></a>
            <a href="#" className="text-white bg-[#FF0000] p-2 rounded-full hover:scale-110 transition"><FaYoutube /></a>
            <a href="#" className="text-white bg-black p-2 rounded-full hover:scale-110 transition"><FaXTwitter /></a>
            <a href="#" className="text-white bg-[#0A66C2] p-2 rounded-full hover:scale-110 transition"><FaLinkedinIn /></a>
            <a href="#" className="text-white bg-[#E60023] p-2 rounded-full hover:scale-110 transition"><FaPinterestP /></a>
            <a href="#" className="text-white bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition"><FaInstagram /></a>
          </div>

          {/* Rating */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-white text-sm">
            <div className="bg-green-500 px-4 py-1 rounded-full font-semibold flex items-center space-x-1">
              <span>⭐</span>
              <span>4.9 / 5.0</span>
            </div>
            <span className="max-w-xs text-center sm:text-left">by 800+ customers for 1000+ Web and Mobile App Development Projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FullFooter;
