import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/image/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const navigate = useNavigate();

  const dropdownItems = {
    Services: [
      { label: 'Website Development', path: '/webdevelopment' },
      { label: 'Mobile App Development', path: '/appdevelopment' },
      { label: 'E-commerce Development', path: '/ecommercedevelopment' },
      { label: 'CRM Solution', path: '/crmsolution' },
      { label: 'Digital Marketing', path: '/digitalmarketing' },
      { label: 'Al/ML Development', path: '/aimldevelopment' },
      { label: 'Chatbot Development', path: '/chatbotaidevelopment' },
      { label: 'AR/VR Development', path: '/' },
    ],
    Resources: [
      { label: 'Blog', path: '/blog' },
      { label: 'Whitepapers', path: '/whitepapers' },
      { label: 'FAQs', path: '/faqs' },
    ],
    About: [
      { label: 'About1', path: '/' },
    ],
  };

  const navItems = ['Services', 'Portfolio', 'About'];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <div>
            <h1 className="text-lg font-bold text-gray-800">SofiLoft Technologie LLP</h1>
            <p className="text-xs text-gray-500">
              Technology <span className="text-orange-500">Outsourcing</span> <span className="italic">Simplified</span>
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 relative">

          {/* Let's Talk AI Button */}
         <button
  onClick={() => navigate("/lettalkai")}
  className="relative px-5 py-2 rounded-full font-medium text-gray-900 transition-all duration-300 hover:scale-105"
  style={{
    background: "linear-gradient(white, white) padding-box, linear-gradient(90deg, #ff00cc, #3333ff, #00ffcc) border-box",
    border: "2px solid transparent",
  }}
>
  <span className="flex items-center gap-2">
    ✨ Let's talk AI
  </span>
</button>

          <Link to="/" className="text-gray-900 hover:text-orange-600 transition">Home</Link>

          {navItems.map((label) => (
            label === "Portfolio" ? (
              <Link
                key={label}
                to="/portfolio"
                className="text-gray-900 hover:text-orange-600"
              >
                {label}
              </Link>
            ) : (
              <div key={label} className="relative group">
                <button className="flex items-center gap-2 text-gray-900 hover:text-orange-600">
                  {label} <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 w-64 bg-blue-500 text-white shadow-lg rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                  <ul className="text-sm py-2">
                    {dropdownItems[label].map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.path}
                          className="block px-5 py-3 hover:bg-orange-600 transition duration-200"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          ))}

          <Link to="/ContactFrom">
            <button className="bg-green-800 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
              Get in Touch
            </button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">

          {/* Mobile Let's Talk AI Button */}
          <button
            onClick={() => {
              navigate("/lets-talk-ai");
              setMenuOpen(false);
            }}
            className="w-full px-4 py-2 rounded-full font-medium text-gray-900 transition-all duration-300 mb-3"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(90deg, #ff00cc, #3333ff, #00ffcc) 1",
            }}
          >
            ✨ Let's talk AI
          </button>

          <Link to="/" className="block text-gray-700 hover:text-orange-600 py-2" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {navItems.map((label) => (
            label === "Portfolio" ? (
              <Link
                key={label}
                to="/portfolio"
                className="block text-gray-700 hover:text-orange-600 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ) : (
              <div key={label} className="py-2">
                <button
                  onClick={() => setDropdown(dropdown === label ? null : label)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-orange-600"
                >
                  {label}
                  <ChevronDown size={16} className={`${dropdown === label ? 'rotate-180' : ''} transition-transform`} />
                </button>
                {dropdown === label && (
                  <ul className="mt-1 pl-4 space-y-1 bg-orange-500 rounded-lg text-white overflow-hidden animate-scaleIn">
                    {dropdownItems[label].map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.path}
                          className="block text-sm px-4 py-2 hover:bg-orange-600"
                          onClick={() => {
                            setDropdown(null);
                            setMenuOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          ))}

          <Link to="/ContactFrom" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-green-800 text-white py-2 rounded-full hover:bg-green-700 transition mt-4">
              Get in Touch
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
