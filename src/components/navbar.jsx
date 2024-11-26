import React, { useState } from "react";
import { Link } from "react-router-dom";
import AFP_LOGO from "../assets/AFP_Logo2_800x_no_bg.png";
import AFP_LOGO_WHITE from "../assets/AFP_Logo2_800x_white.png";

export default function Navbar({ isCollapsed }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setOpened(true);
  };

  window.addEventListener("scroll", () => {
    setOpened(false);
    setMobileMenuOpen(false);
  });

  return (
    <nav
      className={`fixed top-6 py-2 lg:left-10 px-10 z-10 transition-all duration-300 ease-in-out ${
        isCollapsed
          ? `bg-themegrey opacity-95 ${!opened ? "w-[25%] " : "w-[90%]"}`
          : "bg-transparent lg:w-[90%] w-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={isCollapsed?AFP_LOGO_WHITE:AFP_LOGO}
            alt="Adelaide French Polishers"
            className="h-16"
          />
        </Link>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar links for larger screens */}
        {!isCollapsed || opened ? (
          <div className="hidden lg:flex space-x-16">
            <NavLink isCollapsed={isCollapsed} href="/aboutus">
              ABOUT US
            </NavLink>
            <NavLink isCollapsed={isCollapsed} href="/gallery">
              GALLERY
            </NavLink>
            <NavLink isCollapsed={isCollapsed} href="/beforeafter">
              BEFORE/AFTER
            </NavLink>
            <NavLink isCollapsed={isCollapsed} href="/contactus">
              CONTACT US
            </NavLink>
          </div>
        ) : (
          <button
            onClick={() => setOpened(true)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 hidden lg:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        )}
      </div>

      {/* Mobile menu links */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col mt-4 space-y-4 bg-opacity-50 p-4 rounded-lg">
          <NavLink isCollapsed={isCollapsed} href="/aboutus">
            ABOUT US
          </NavLink>
          <NavLink isCollapsed={isCollapsed} href="/gallery">
            GALLERY
          </NavLink>
          <NavLink isCollapsed={isCollapsed} href="/beforeafter">
            BEFORE/AFTER
          </NavLink>
          <NavLink isCollapsed={isCollapsed} href="/contactus">
            CONTACT US
          </NavLink>
        </div>
      )}
    </nav>
  );
}

// NavLink component for reusable link style
const NavLink = ({ isCollapsed, href, children }) => (
  <Link
    to={href}
    className={`relative ${
      isCollapsed ? "text-white" : "text-black"
    } font-regular hover:text-theme transition-colors duration-300 group`}
  >
    {children}
    {/* Underline animation */}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theme transform scale-x-0 transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100"></span>
  </Link>
);
