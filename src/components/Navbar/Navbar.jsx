import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#dfd138]">MAJESTIC</span>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-8">
              <Link
                to="/"
                className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/service"
                className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Service
              </Link>
              <Link
                to="/blog"
                className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/service"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            to="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
