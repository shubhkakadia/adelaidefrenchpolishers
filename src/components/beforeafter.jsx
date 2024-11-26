import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Slider from "./slider";
import { beforeafter } from "./gallerydata/beforeafter";

export default function Beforeafter() {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
  const [selectedOption, setSelectedOption] = useState(beforeafter[0]); // Default selection: Fire

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarCollapsed(true);
      } else {
        setNavbarCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <Navbar isCollapsed={isNavbarCollapsed} />

      <div className="md:pt-28 pt-32">
        <h1 className="text-center text-3xl">Before and After</h1>

        {/* Options */}
        <div className="flex md:gap-8  gap-2 justify-center mt-4">
          {beforeafter.map((item, index) => (
            <button
              key={index}
              className={`text-lg px-4 py-2 rounded-md transition-colors duration-300 ${
                selectedOption.name === item.name
                  ? "text-theme underline"
                  : "hover:text-theme"
              }`}
              onClick={() => setSelectedOption(item)}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="mt-2">
          <Slider
            beforeImage={selectedOption.before}
            afterImage={selectedOption.after}
          />
        </div>
      </div>
    </div>
  );
}
