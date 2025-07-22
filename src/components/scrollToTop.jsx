"use client";
import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Toggle visibility of the button based on scroll position
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 50; // Adjust the divisor to control speed
    const interval = setInterval(() => {
      if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust the interval speed in milliseconds
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer z-20 fixed bottom-6 right-6 bg-[#E3A890] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-theme-dark transition-all duration-300 ease-in-out"
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Extra shadow
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
