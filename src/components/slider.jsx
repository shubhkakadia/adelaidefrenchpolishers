import React, { useState } from "react";

export default function Slider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging) return;

    // Prevent scrolling when sliding
    event.preventDefault();

    // Support both mouse and touch events
    const clientX = event.touches?.[0]?.clientX || event.clientX;

    const rect = event.currentTarget.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;

    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const startDragging = (event) => {
    setIsDragging(true);

    // Prevent any scroll jump when starting to drag
    event.preventDefault();
  };

  const stopDragging = () => setIsDragging(false);

  // Apply blur only when "Before" occupies 80% or more
  const shouldBlurAfter = sliderPosition >= 75;
  const shouldBlurBefore = sliderPosition <= 25;

  return (
    <div
      className="w-full relative py-8 flex flex-col items-center"
      onMouseUp={stopDragging}
      onTouchEnd={stopDragging}
    >
      <h1 className="text-lg mb-4">Before & After Comparison</h1>
      <div
        className="relative w-full max-w-[900px] m-auto aspect-[70/45] overflow-hidden select-none border rounded-lg shadow-lg"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseDown={startDragging}
        onTouchStart={startDragging}
      >
        {/* After Image (Background with conditional blur) */}
        <img
          src={afterImage}
          className="object-cover aspect-[70/45]"
          style={{
            filter: shouldBlurAfter ? "blur(5px)" : "none",
          }}
          alt="after"
        />

        {/* Before Image (clipped with conditional blur) */}
        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[900px] aspect-[70/45] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            className="object-cover aspect-[70/45]"
            style={{
              filter: shouldBlurBefore ? "blur(5px)" : "none",
            }}
            alt="before"
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-[5px] bg-theme cursor-ew-resize"
          style={{ left: `calc(${sliderPosition}% - 1.5px)` }}
        >
          {/* Handle Circle */}
          <div className="bg-theme absolute rounded-full h-8 w-8 -left-[14px] top-[calc(50%-12px)] border-4 border-white shadow-md transform transition-transform hover:scale-110"></div>
        </div>

        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded shadow-lg">
          Before
        </div>

        {/* After Label */}
        <div className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-bold px-3 py-1 opacity-80 rounded shadow-lg">
          After
        </div>
      </div>
    </div>
  );
}
