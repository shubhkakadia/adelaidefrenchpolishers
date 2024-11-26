import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Optional: Reset the timer when manually changing slides
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(nextSlide, 4000);
    }
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 4000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full">
      {/* Carousel Slides */}
      <div className="relative overflow-hidden w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
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
            className={`opacity-70 relative w-16 h-2 rounded-full cursor-pointer transition-opacity duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Background track */}
            <div className="absolute inset-0 rounded-full bg-gray-300" />

            {/* Progress indicator */}
            {index === currentIndex && (
              <div
                className="absolute inset-0 rounded-full bg-theme origin-left animate-progress-fill"
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
              />
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
};

export default Carousel;
