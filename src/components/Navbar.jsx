import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20">
      {/* Logo */}
      <Link className="text-white font-bold text-2xl" to='/'>LOGO</Link>

      {/* Links + Donate */}
      <div className="gap-10 flex justify-between items-center">
        <div className="hidden md:flex gap-6 text-white font-medium">
          <Link to="/education">Education</Link>
          <Link to="/healthcare">Healthcare</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/about">About</Link>
        </div>
        {/* Donate Button */}
        <Link
          to="/donate"
          className="bg-white text-black px-5 py-2 rounded-lg font-bold cursor-pointer"
        >
          DONATE
        </Link>
      </div>
    </div>
  );
}
