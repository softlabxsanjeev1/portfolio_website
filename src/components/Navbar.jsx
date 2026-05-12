import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenu(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0086ff] text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold cursor-pointer whitespace-nowrap"
        >
          Sanjeev Kumar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium items-center absolute left-1/2 -translate-x-1/2">
          <li
            className="cursor-pointer hover:text-blue-900 transition relative group"
            onClick={() => scrollToSection("about")}
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li
            className="cursor-pointer hover:text-blue-900 transition relative group"
            onClick={() => scrollToSection("experience")}
          >
            Experience
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li
            className="cursor-pointer hover:text-blue-900 transition relative group"
            onClick={() => scrollToSection("skills")}
          >
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li
            className="cursor-pointer hover:text-blue-900 transition relative group"
            onClick={() => scrollToSection("projects")}
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-sky-600 px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-900 hover:text-white transition-all duration-300 font-semibold"
          >
            Contact
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-sky-600 px-6 pb-6">
          <ul className="flex flex-col gap-5 text-lg font-medium pt-4">
            <li
              className="cursor-pointer hover:text-blue-900 transition"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>

            <li
              className="cursor-pointer hover:text-blue-900 transition"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </li>

            <li
              className="cursor-pointer hover:text-blue-900 transition"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </li>

            <li
              className="cursor-pointer hover:text-blue-900 transition"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-sky-600 px-5 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-900 hover:text-white transition-all duration-300 font-semibold"
            >
              Contact
              <ArrowUpRight size={18} />
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;