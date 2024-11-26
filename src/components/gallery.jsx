import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { items } from "./gallerydata/items";

export default function Gallery() {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);

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

      {/* Gallery Section */}
      <div className="container mx-auto py-32 px-4">
        <h1 className="md:text-5xl text-3xl text-black text-center pb-10">
          Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <SlideshowCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideshowCard({ item }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % item.media.length
        );
      }, 2000); // Change image every 2 seconds
    } else {
      setCurrentImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, item.media.length]);

  return (
    <div
      className="relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowDescription(false); // Hide description when mouse leaves
      }}
    >
      {/* Media (Slideshow on Hover) */}
      <img
        src={item.media[currentImageIndex]}
        alt={item.name}
        className="w-full h-[350px] object-cover transform transition-transform duration-300 group-hover:scale-105"
      />

      {/* Description Overlay */}
      {showDescription && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col overflow-y-auto gap-2 items-center justify-center text-white px-4 py-2">
          <h4 className="text-2xl font-bold text-center text-theme">{item.name}</h4>
          <p className="text-center text-sm">{item.description}</p>
        </div>
      )}

      {/* Read More Button */}
      <div
        className={`absolute bottom-0 w-full flex justify-center text-white px-4 py-2 transition-opacity duration-300 ${
          isHovered && !showDescription ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          className="px-4 py-2 opacity-90 bg-theme text-white text-sm rounded-md hover:bg-theme-dark"
          onClick={() => setShowDescription(true)}
        >
          Read More
        </button>
      </div>
    </div>
  );
}
