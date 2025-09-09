import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/navbar.css"; // external CSS
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdown
  const [mobileMenu, setMobileMenu] = useState(false); // mobile menu open/close
  const [mobileDropdown, setMobileDropdown] = useState(null); // mobile nested dropdown
  const dropdownRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to='/'>LOGO</Link>
        </div>

        {/* Desktop Nav Items */}
        <ul className="nav_items desktop">
          {["aboutus", "work", "ideas"].map((item) => (
            <li key={item} className="nav_item">
              <button onClick={() => toggleDropdown(item)} className="nav_link">
                {item === "aboutus" && "About Us"}
                {item === "work" && "Our Work"}
                {item === "ideas" && "Ideas"}
                <FaChevronDown
                  className={`chevron ${openDropdown === item ? "rotate" : ""}`}
                />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {openDropdown === item && (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="dropdown"
                  >
                    {item === "aboutus" && (
                      <div className="dropdown_content">
                        <div>
                          <h3>About Us</h3>
                          <p>Learn about our mission and values.</p>
                         <Link to='/aboutus' onClick={()=>setOpenDropdown(true)}>About Us</Link>
                        </div>
                        <div>
                          <a href="#">Our story</a>
                          <a href="#">How we started</a>
                        </div>
                      </div>
                    )}
                    {item === "work" && (
                      <div className="dropdown_content">
                        <div>
                          <h3>Our Work</h3>
                          <p>Explore our projects and impact areas.</p>
                          <a href="#">View projects</a>
                        </div>
                        <div>
                          <a href="#">Case Studies</a>
                          <a href="#">Impact Areas</a>
                        </div>
                      </div>
                    )}
                    {item === "ideas" && (
                      <div className="dropdown_content">
                        <div>
                          <h3>Ideas</h3>
                          <p>Insights, blogs, and research stories.</p>
                          <a href="#">Read more</a>
                        </div>
                        <div>
                          <a href="#">Articles</a>
                          <a href="#">Research</a>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="search desktop">
          <FaSearch className="search-icon" size={18} />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="mobile_menu"
          >
            <ul className="mobile_nav">
              {["aboutus", "work", "ideas"].map((item) => (
                <li key={item} className="mobile_nav_item">
                  <button
                    onClick={() => toggleMobileDropdown(item)}
                    className="mobile_nav_link"
                  >
                    {item === "aboutus" && "About Us"}
                    {item === "work" && "Our Work"}
                    {item === "ideas" && "Ideas"}
                    <FaChevronDown
                      className={`chevron ${mobileDropdown === item ? "rotate" : ""
                        }`}
                    />
                  </button>

                  {/* Nested dropdown for mobile */}
                  {/* Mobile Menu Full Screen */}
                  <AnimatePresence>
                    {mobileMenu && (
                      <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="mobile_menu_full"
                      >
                        {/* Header with Close Button */}
                        <div className="mobile_menu_header">
                          <h2 className="text-xl font-bold">Menu</h2>
                          <button onClick={() => setMobileMenu(false)} className="text-2xl font-bold">
                            &times;
                          </button>
                        </div>

                        {/* Mobile Links */}
                        <ul className="mobile_nav_full">
                          {["aboutus", "work", "ideas"].map((item) => (
                            <li key={item}>
                              <button
                                className="flex justify-between w-full items-center text-lg font-medium"
                                onClick={() => toggleMobileDropdown(item)}
                              >
                                {item === "aboutus" && "About Us"}
                                {item === "work" && "Our Work"}
                                {item === "ideas" && "Ideas"}
                                <FaChevronDown
                                  className={`chevron ${mobileDropdown === item ? "rotate" : ""}`}
                                />
                              </button>

                              {/* Nested Dropdown */}
                              <AnimatePresence>
                                {mobileDropdown === item && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mobile_dropdown_content"
                                  >
                                    {item === "aboutus" && (
                                      <>
                                        <a href="#">Our Story</a>
                                        <a href="#">How we started</a>
                                      </>
                                    )}
                                    {item === "work" && (
                                      <>
                                        <a href="#">Case Studies</a>
                                        <a href="#">Impact Areas</a>
                                      </>
                                    )}
                                    {item === "ideas" && (
                                      <>
                                        <a href="#">Articles</a>
                                        <a href="#">Research</a>
                                      </>
                                    )}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </li>
                          ))}
                        </ul>

                        {/* Optional Mobile Search */}
                        <div className="mobile_search mt-6 flex items-center bg-black px-3 py-1 rounded-lg">
                          <FaSearch className="search-icon" size={18} />
                          <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </li>
              ))}
            </ul>

            {/* Mobile Search */}
            <div className="mobile_search">
              <FaSearch className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;


