"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(nextSlide, 4000);
    }
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 4000);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full">
      {/* Carousel Slides */}
      <div className="relative overflow-hidden w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            width={1920}
            height={1080}
            className={`absolute w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="opacity-70 relative w-16 h-2 rounded-full cursor-pointer transition-opacity duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="absolute inset-0 rounded-full bg-gray-300" />
            {index === currentIndex && (
              <div className="absolute inset-0 rounded-full bg-[#E3A890] origin-left animate-progress-fill" />
            )}
          </button>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        @keyframes progress-fill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-progress-fill {
          animation: progress-fill 4s linear;
          transform-origin: left;
        }
      `}</style>
    </div>
  );
}
