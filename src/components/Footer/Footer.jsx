import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-5 flex flex-col md:flex-row justify-between items-start md:items-center ">
        {/* Left Side */}
        <div>
          <h1 className="md:text-5xl font-semibold tracking-widest text-3xl text-yellow-500">
            Gates Foundation
          </h1>
        </div>
        <div className=" border-amber-400 md:h-[320px] md:border-2 "></div>
        {/* Right Side */}
        <div className="flex flex-col gap-6 text-sm max-w-xl">
          <p className="leading-relaxed pt-3">
            We are a nonprofit fighting poverty, disease, and inequity around
            the world.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3 text-lg">
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-yellow-500 hover:text-black "
            >
              <FiX />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-yellow-500 hover:text-black "
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-yellow-500 hover:text-black "
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-yellow-500 hover:text-black "
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-yellow-500 hover:text-black "
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-400 hover:bg-yellow-500 hover:text-black "
            >
              <FaRegCircle />
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-3">
            <Link to='/' className="underline text-yellow-500">
              About
            </Link>
            <span>-</span>
            <Link className="underline text-yellow-500">
              Our work
            </Link>
            <span>-</span>
            <Link className="underline text-yellow-500">
              Ideas
            </Link>
          </div>

          <hr className="border-gray-500 my-2" />

          {/* Secondary Links */}
          <div className="flex flex-wrap gap-3">
            <Link className="underline text-yellow-500">
              Contact
            </Link>
            <span>-</span>
            <Link className="underline text-yellow-500">
              Media Center
            </Link>
            <span>-</span>
            <Link className="underline text-yellow-500">
              Careers
            </Link>
            <span>-</span>
            <Link className="underline text-yellow-500">
              Discovery Center
            </Link>
            <span>-</span>
            <Link className="underline text-yellow-500">
              Give with us
            </Link>
          </div>

          <Link className="underline text-yellow-500">
            Goalkeepers
          </Link>

          {/* Policies */}
          <div className="flex flex-wrap gap-3 text-gray-400">
            <Link className="underline">
              Reporting scams
            </Link>{" "}
            |
            <Link className="underline">
              Ethics reporting
            </Link>{" "}
            |
            <Link className="underline">
              Privacy & Cookies Notice
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 text-gray-400">
            <Link className="underline">
              Terms of Use
            </Link>{" "}
            |
            <Link className="underline">
              Brand guidelines
            </Link>{" "}
            |
            <Link className="underline">
              Vendors
            </Link>
          </div>

          <p className="text-gray-400 mt-4">
            © 2025 Gates Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
