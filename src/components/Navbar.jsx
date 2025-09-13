import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold text-2xl tracking-wide hover:opacity-80 transition"
        >
           Dambal Foundation 
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link className="hover:text-yellow-400 transition" to="/education">
            Education
          </Link>
          <Link className="hover:text-yellow-400 transition" to="/healthcare">
            Healthcare
          </Link>
          <Link className="hover:text-yellow-400 transition" to="/programs">
            Programs
          </Link>
          <Link className="hover:text-yellow-400 transition" to="/about">
            About
          </Link>
          <Link
            to="/donate"
            className="bg-yellow-400 text-black px-5 py-2 rounded font-bold hover:bg-yellow-500 transition"
          >
            DONATE
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-black/90 text-white font-medium">
          <Link onClick={toggleMenu} to="/education" className="hover:text-yellow-400 transition">
            Education
          </Link>
          <Link onClick={toggleMenu} to="/healthcare" className="hover:text-yellow-400 transition">
            Healthcare
          </Link>
          <Link onClick={toggleMenu} to="/programs" className="hover:text-yellow-400 transition">
            Programs
          </Link>
          <Link onClick={toggleMenu} to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link
            onClick={toggleMenu}
            to="/donate"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-500 transition"
          >
            DONATE
          </Link>
        </div>
      </div>
    </nav>
  );
}
