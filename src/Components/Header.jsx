import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `p-2 font-normal transition-colors duration-200 hover:text-teal-400 ${
      isActive ? "font-semibold text-[#18a995]" : "text-white"
    }`;

  return (
    <div className="w-full  h-16 bg-[#000] bg-opacity-70 sticky top-0 left-0 flex justify-between items-center px-4 sm:px-6 z-50">
      {/* Logo */}
      <div className="text-white text-xl logo sm:text-2xl md:text-3xl font-normal flex justify-center items-center flex-wrap">
        {"<"}Tushar G.{" "}
        <p className="text-teal-400 logo text-2xl sm:text-3xl md:text-5xl px-1 sm:px-2">
          Dhongade
        </p>
        {" />"}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-around items-center gap-4 lg:gap-6 me-3">
        <NavLink to="/home" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact Me
        </NavLink>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-16 left-0 w-full h-screen bg-black bg-opacity-90 transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`bg-[#000] bg-opacity-95 w-full transform transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center py-6 space-y-6">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `text-xl p-4 font-normal transition-colors duration-200 w-full text-center ${
                  isActive
                    ? "font-semibold text-[#18a995] bg-white bg-opacity-10"
                    : "text-white hover:text-teal-400"
                }`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl p-4 font-normal transition-colors duration-200 w-full text-center ${
                  isActive
                    ? "font-semibold text-[#18a995] bg-white bg-opacity-10"
                    : "text-white hover:text-teal-400"
                }`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-xl p-4 font-normal transition-colors duration-200 w-full text-center ${
                  isActive
                    ? "font-semibold text-[#18a995] bg-white bg-opacity-10"
                    : "text-white hover:text-teal-400"
                }`
              }
              onClick={closeMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xl p-4 font-normal transition-colors duration-200 w-full text-center ${
                  isActive
                    ? "font-semibold text-[#18a995] bg-white bg-opacity-10"
                    : "text-white hover:text-teal-400"
                }`
              }
              onClick={closeMenu}
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
