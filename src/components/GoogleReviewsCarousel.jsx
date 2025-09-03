"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const GoogleReviewsCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Hardcoded place ID as requested
  const PLACE_ID = "ChIJD_5zxTDKsGoRjaFlAtxbudI";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://places.googleapis.com/v1/places/${PLACE_ID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Goog-Api-Key": process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
              "X-Goog-FieldMask": "reviews",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          // Take maximum 4 reviews as requested
          setReviews(data.reviews.slice(0, 4));
        } else {
          setError("No reviews found");
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Auto-rotate reviews every 3 seconds with progress indicator
  useEffect(() => {
    if (reviews.length > 1 && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setProgress(0); // Reset progress when changing slides
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [reviews.length, isHovered]);

  // Progress bar animation
  useEffect(() => {
    if (reviews.length > 1 && !isHovered) {
      setProgress(0); // Reset progress when starting
      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const increment = 100 / 30; // 3000ms / 100ms = 30 steps
          const newProgress = prevProgress + increment;
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [reviews.length, isHovered, currentIndex]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-xl">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-xl">
          ☆
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-xl">
          ☆
        </span>
      );
    }

    return stars;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E3A890]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <p className="text-gray-500">Please try again later.</p>
        </div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <p className="text-gray-500 text-lg">No reviews available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600">
          Real reviews from satisfied customers
        </p>
      </div>

      <div 
        className="relative overflow-hidden rounded-2xl shadow-2xl bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-8 md:p-12"
            >
              <div className="max-w-3xl mx-auto">
                {/* Review Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {review.authorAttribution?.displayName || "Anonymous"}
                  </h3>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      {formatDate(review.publishTime)}
                    </span>
                  </div>
                </div>

                {/* Review Content */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {review.text?.text || "No review text available"}
                  </p>
                </div>

                {/* Review Rating */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-[#E3A890] mr-2">
                      {review.rating}
                    </span>
                    <span className="text-gray-500">out of 5 stars</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Google Review
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        {reviews.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div 
              className="h-full bg-[#E3A890] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Navigation Dots */}
        {reviews.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setProgress(0); // Reset progress when manually clicking
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-[#E3A890]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleReviewsCarousel;
