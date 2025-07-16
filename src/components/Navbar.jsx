import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["home", "about", "skills", "project", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 shadow-md border-b border-teal-500/20 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        {/* Logo */}

<motion.div
  className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Pragati
</motion.div>



        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group text-sm font-medium transition duration-300"
            >
              <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:inline bg-gradient-to-r from-cyan-400 to-sky-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Connect Me
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-[#0f0c29] px-6 py-6 space-y-4 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="block text-white text-base font-medium hover:text-cyan-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}

        <a
          href="#contact"
          className="block w-full text-center mt-2 bg-gradient-to-r from-cyan-400 to-sky-500 text-white px-5 py-2 rounded-full shadow-md hover:brightness-110 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          Connect Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
