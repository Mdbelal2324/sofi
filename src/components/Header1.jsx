import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const dropdownItems = {
    Services: [
      { label: 'Web Development', path: '/webdevelopment' },
      { label: 'App Development', path: '/appdevelopment' },
      { label: 'E-commerce Development', path: '/ecommercedevelopment' },
      { label: 'Salesforce Development', path: '/salesforcedevelopment' },
      { label: 'AI Automation Chatbot', path: '/' },
      { label: 'SEO Service', path: '/seoservice' },
    ],
    Portfolio: [
      { label: 'Case Studies', path: '/case-studies' },
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

  const toggleDropdown = (label) => {
    setDropdown(dropdown === label ? null : label);
  };

  const navItems = ['Services', 'Portfolio', 'Resources', 'About'];

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
          <Link to="/" className="text-gray-900 hover:text-orange-600 transition">Home</Link>

          {navItems.map((label) => (
            <div key={label} className="relative group">
              <button
                onClick={() => toggleDropdown(label)}
                className="flex items-center gap-4 text-gray-900 hover:text-orange-600"
              >
                {label} <ChevronDown size={0} />
              </button>
              {dropdown === label && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border rounded z-50">
                  <ul className="text-sm text-gray-700">
                    {dropdownItems[label].map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.path}
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
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
          <Link to="/" className="block text-gray-700 hover:text-orange-600 py-2" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {navItems.map((label) => (
            <div key={label} className="py-2">
              <button
                onClick={() => toggleDropdown(label)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-orange-600"
              >
                {label}
                <ChevronDown size={16} className={`${dropdown === label ? 'rotate-180' : ''} transition-transform`} />
              </button>
              {dropdown === label && (
                <ul className="mt-1 pl-4 space-y-1">
                  {dropdownItems[label].map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        className="block text-sm text-gray-600 hover:text-orange-500"
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
