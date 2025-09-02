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
              <a href="mailto:info@devtechnosys.com" className="text-green-500">info@sofiloft.com</a>
            </p>
            <p>
              <strong>CAREER WITH US</strong><br />
              <a href="mailto:hr@devtechnosys.com" className="text-green-500">hr@sofiloft.com</a>
            </p>
            <p>
              <strong>SALES</strong><br />+91 6200 212 591<br />+91 9693 242 017
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
          <p className="mb-4 text-gray-300 max-w-xl">Be the first to learn about events, news, new product features, and trends in the industry.</p>

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
                <li><a href="LetTalkAi">Start With AI</a></li>
                <li><a href="About">About Us</a></li>
                <li><a href="portfolio">Portfolio</a></li>
                <li><a href="ContactFrom">Contact Us</a></li>
                <li><a href="Faq">FAQ</a></li>
                <li><a href="">Careers</a></li>
                 <li><a href="">Privacy policy</a></li>
                 <li><a href="">Terms & Conditions</a></li>
                
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-semibold mb-3">Our Industries</h4>
              <ul className="space-y-2">
                <li><a> Real Estate</a></li>
                <li><a>Education</a></li>
                <li><a>Healthcare & Wellness</a></li>
                <li><a>Travel & Tours</a></li>
                <li><a>Ecommerce & Retail</a></li>
                <li><a>Food & Restaurant</a></li>
                <li><a>Banking & Finance</a></li>
                <li><a>Sports & Fitness</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-3">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="webdevelopment">Website  Development</a></li>
                 <li><a href="appdevelopment">Mobile Application Development</a></li>
                <li><a href="crmsolution"> Crm Solution</a></li>
                 <li><a href="ecommercedevelopment"> Ecommerce Development</a></li>
                 <li><a href="digitalmarketing"> Digital marketing</a></li>
                <li><a href="aimldevelopment">Ai Ml development</a></li>
                <li><a href="chatbotAiDevelopment">Chatbot Development</a></li>
                <li><a href="ar">AR Vr Development</a></li>
         
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
  <a 
    href="https://www.facebook.com/SofiLoft.Technologies" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-white bg-[#1877F2] p-2 rounded-full hover:scale-110 transition"
  >
    <FaFacebookF />
  </a>

  <a 
    href="https://x.com/SofiLoft" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-white bg-black p-2 rounded-full hover:scale-110 transition"
  >
    <FaXTwitter />
  </a>

  <a 
    href="https://www.linkedin.com/company/sofiloft-technologies/posts/?feedView=all" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-white bg-[#0A66C2] p-2 rounded-full hover:scale-110 transition"
  >
    <FaLinkedinIn />
  </a>

  <a 
    href="https://www.instagram.com/sofiloft.tech/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-white bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition"
  >
    <FaInstagram />
  </a>
</div>


          {/* Rating */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-white text-sm">
            <div className="bg-green-500 px-4 py-1 rounded-full font-semibold flex items-center space-x-1">
              <span>⭐</span>
              <span>4.9 / 5.0</span>
            </div>
            <span className="max-w-xs text-center sm:text-left">by 250+ customers for 700+ Web and Mobile App Development Projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FullFooter;
