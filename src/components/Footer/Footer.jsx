import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2c3640] text-gray-200 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Left Side */}
        <div>
          <h1 className="text-3xl font-serif font-bold">Gates Foundation</h1>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6 text-sm max-w-xl">
          <p className="leading-relaxed">
            We are a nonprofit fighting poverty, disease, and inequity around the world.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3 text-lg">
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-gray-600"><FiX /></a>
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-gray-600"><FaFacebookF /></a>
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-gray-600"><FaLinkedinIn /></a>
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-gray-600"><FaInstagram /></a>
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-gray-600"><FaYoutube /></a>
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-gray-600"><FaRegCircle /></a>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-3">
            <a href="#" className="underline">About</a>
            <span>-</span>
            <a href="#" className="underline">Our work</a>
            <span>-</span>
            <a href="#" className="underline">Ideas</a>
          </div>

          <hr className="border-gray-500 my-2" />

          {/* Secondary Links */}
          <div className="flex flex-wrap gap-3">
            <a href="#" className="underline">Contact</a>
            <span>-</span>
            <a href="#" className="underline">Media Center</a>
            <span>-</span>
            <a href="#" className="underline">Careers</a>
            <span>-</span>
            <a href="#" className="underline">Discovery Center</a>
            <span>-</span>
            <a href="#" className="underline">Give with us</a>
          </div>

          <a href="#" className="underline">Goalkeepers</a>

          {/* Policies */}
          <div className="flex flex-wrap gap-3 text-gray-400">
            <a href="#" className="underline">Reporting scams</a> |
            <a href="#" className="underline">Ethics reporting</a> |
            <a href="#" className="underline">Privacy & Cookies Notice</a>
          </div>

          <div className="flex flex-wrap gap-3 text-gray-400">
            <a href="#" className="underline">Terms of Use</a> |
            <a href="#" className="underline">Brand guidelines</a> |
            <a href="#" className="underline">Vendors</a>
          </div>

          <p className="text-gray-400 mt-4">
            © 2025 Gates Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
