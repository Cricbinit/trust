import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaLinkedinIn, FaSearch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <Link className="footer-left footer-logo" to="/">
            Dambal Foundation
          </Link>
          <div className="footer-divider"></div>

          {/* Center Section */}
          <div className="center_div">
            <div className="footer-info">
              <h3 className="footer-title"> Dambal Foundation </h3>
              <p className="footer-text">
                <a
                  href="https://www.google.com/maps?q=Gokul+Rd,+Akshay+Park,+Basaveshvar+Nagar,+Hubballi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2  transition"
                >
                  <span className="icon">
                    <IoLocationSharp />
                  </span>
                  Abcd Rd, Xyz Park, Basaveshvar Nagar, Hubballi
                </a>
              </p>

              <p className="footer-text">
                <span className="icon">
                  <HiPhone />
                </span>
                +91 99552 XXXXX
              </p>
            </div>

            <div className="footer-social">
              <a href="https://www.youtube.com/@BrightBusinessSchool24">
                <FaYoutube />
              </a>
              <a
                href="https://x.com/bright_b_school
"
              >
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/bright_business_school/">
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/bright-business-school-hubli/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BZGH7aR0dSly3YsiUvhiNIA%3D%3D
"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Right Section */}
          <div className="footer-right">
            {/* Search */}
            <div className="footer-search">
              <input
                type="text"
                placeholder="Search"
                className="footer-input"
              />
              <button className="footer-search-btn cursor-pointer">
                <IoMdSearch /> SEARCH
              </button>
            </div>

            {/* Links */}
            <ul className="footer-links">
              <li>
                <Link onClick={() => window.scrollTo(0, 0)}>Education</Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)}>Healthcare</Link>
              </li>
              <li>
                <Link>Program</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="bg-yellow-400 text-black px-5 py-2 rounded font-bold hover:bg-yellow-500 transition"
                >
                  DONATE
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="footer-bottom">
          2025 Dam Foundation School. All rights reserved. Developed by{" "}
          <span>UNITECHNO</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
