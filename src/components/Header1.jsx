import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/image/Company Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownItems = {
    Services: [
      { label: "Website Development", path: "/webdevelopment" },
      { label: "Mobile App Development", path: "/appdevelopment" },
      { label: "E-commerce Development", path: "/ecommercedevelopment" },
      { label: "CRM Solution", path: "/crmsolution" },
      { label: "Digital Marketing", path: "/digitalmarketing" },
      { label: "Al/ML Development", path: "/aimldevelopment" },
      { label: "Chatbot Development", path: "/chatbotaidevelopment" },
      { label: "AI Agents Development", path: "/ar" },
    ],
    Resources: [
      { label: "Blog", path: "/blog" },
      { label: "Whitepapers", path: "/whitepapers" },
      { label: "FAQs", path: "/faqs" },
    ],
  };

  const navItems = [
    { label: "Services", dropdown: true },
    { label: "Portfolio", dropdown: false, path: "/portfolio" },
    { label: "About", dropdown: false, path: "/about" },
  ];

  // ✅ Page wise Header color logic
  const isHome = location.pathname === "/";

  const headerClasses = isHome
    ? scrolled
      ? "bg-black/60 backdrop-blur-md shadow-md"
      : "bg-transparent"
    : "bg-white shadow-md"; // ✅ dusre pages pe white solid background

  const textColor = isHome ? "text-white" : "text-gray-900";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
        {/* Logo + Text */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <div>
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }
              }}
            >
              <h1 className={`text-lg font-bold cursor-pointer ${textColor}`}>
                SofiLoft Technologies
              </h1>
            </Link>
            <p
              className={`text-xs ${
                isHome ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Beyond Code.
              <span className="text-orange-500"> Creating</span>{" "}
              <span className="italic">Value</span>
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 relative">
          {/* AI Button */}
          <button
            onClick={() => navigate("/lettalkai")}
            className="relative px-5 py-2 rounded-full font-medium text-gray-900 transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(90deg, #ff00cc, #3333ff, #00ffcc) border-box",
              border: "2px solid transparent",
            }}
          >
            <span className="flex items-center gap-2">✨ Start with AI</span>
          </button>

          <Link to="/" className={`${textColor} hover:text-orange-600`}>
            Home
          </Link>

          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative group">
                <button
                  className={`flex items-center gap-2 ${textColor} hover:text-orange-600`}
                >
                  {item.label} <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white text-gray-900 shadow-lg rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                  <ul className="text-sm py-2">
                    {dropdownItems[item.label].map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.path}
                          className="block px-5 py-3 hover:bg-orange-100 transition duration-200"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={`${textColor} hover:text-orange-600`}
              >
                {item.label}
              </Link>
            )
          )}

          <Link to="/ContactForm">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
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

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          {/* AI Button */}
          <button
            onClick={() => {
              navigate("/lettalkai");
              setMenuOpen(false);
            }}
            className="w-full px-4 py-2 rounded-full font-medium text-gray-900 border border-gray-300 mb-3"
          >
            ✨ Start with AI
          </button>

          <Link
            to="/"
            className="block text-gray-900 hover:text-orange-600 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="py-2">
                <button
                  onClick={() =>
                    setDropdown(dropdown === item.label ? null : item.label)
                  }
                  className="flex items-center justify-between w-full text-gray-900 hover:text-orange-600"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`${
                      dropdown === item.label ? "rotate-180" : ""
                    } transition-transform`}
                  />
                </button>
                {dropdown === item.label && (
                  <ul className="mt-1 pl-4 space-y-1 bg-gray-100 rounded-lg overflow-hidden">
                    {dropdownItems[item.label].map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.path}
                          className="block text-sm px-4 py-2 hover:bg-orange-100"
                          onClick={() => {
                            setDropdown(null);
                            setMenuOpen(false);
                          }}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className="block text-gray-900 hover:text-orange-600 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}

          <Link to="/ContactFrom" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition mt-4">
              Get in Touch
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
