"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const AFP_LOGO = "/assets/AFP_Logo2_800x_no_bg.png";
const AFP_LOGO_WHITE = "/assets/AFP_Logo2_800x_white.png";

export default function Navbar({ isCollapsed }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setOpened(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpened(false);
      setMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 py-2 lg:left-10 px-8 lg:px-0 z-20 transition-all duration-300 ease-in-out ${
        isCollapsed
          ? `bg-[#404041] opacity-95 ${!opened ? "w-[25%]" : "w-[90%]"}`
          : "lg:w-[90%] w-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src={isCollapsed ? AFP_LOGO_WHITE : AFP_LOGO}
            alt="Adelaide French Polishers"
            height={100}
            width={100}
            className={`h-16 w-auto`}
          />
        </Link>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`${
              isCollapsed ? "text-white" : "text-black"
            } focus:outline-none cursor-pointer`}
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
          <div className="hidden lg:flex space-x-12">
            <NavLink isCollapsed={isCollapsed} href="/aboutus">
              About Us
            </NavLink>
            <NavLink isCollapsed={isCollapsed} href="/gallery">
              Gallery
            </NavLink>
            <NavLink isCollapsed={isCollapsed} href="/beforeafter">
              Before/After
            </NavLink>
            <NavLink isCollapsed={isCollapsed} href="/movingservice">
              Moving Service
            </NavLink>
            <NavLink isCollapsed={isCollapsed} href="/coverage">
              Coverage
            </NavLink>
            <NavLink isCollapsed={isCollapsed} href="/contactus">
              Contact Us
            </NavLink>
          </div>
        ) : (
          <button
            onClick={() => setOpened(true)}
            className="text-white focus:outline-none cursor-pointer mx-4"
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
        <div className="lg:hidden flex flex-col mt-4 space-y-4 bg-opacity-95 p-4 rounded-lg bg-[#404041] text-white">
          <NavLink isCollapsed={isCollapsed} href="/aboutus">
            About Us
          </NavLink>
          <NavLink isCollapsed={isCollapsed} href="/gallery">
            Gallery
          </NavLink>
          <NavLink isCollapsed={isCollapsed} href="/beforeafter">
            Before/After
          </NavLink>
          <NavLink isCollapsed={isCollapsed} href="/movingservice">
            Moving Service
          </NavLink>
          <NavLink isCollapsed={isCollapsed} href="/coverage">
            Coverage
          </NavLink>
          <NavLink isCollapsed={isCollapsed} href="/contactus">
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
}

// NavLink component for reusable link style
const NavLink = ({ isCollapsed, href, children }) => (
  <Link
    href={href}
    className={`relative ${
      isCollapsed ? "text-white" : "md:text-black text-white"
    } font-regular hover:text-[#E3A890] transition-colors duration-300 group`}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E3A890] transform scale-x-0 transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100"></span>
  </Link>
);
