import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import piano from "../assets/Piano.webp";

export default function NewsletterPopup() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleJoin = async () => {
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    // Show loading state
    const toastId = toast.loading("Processing...", {
      position: "top-center",
    });

    try {

      toast.update(toastId, {
        render: "Thank you for joining our newsletter!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setIsVisible(false); // Hide the popup after successful submission
    } catch (error) {
      if (error.message === "ALREADY_SUBSCRIBED") {
        toast.update(toastId, {
          render: "You're already subscribed to our newsletter!",
          type: "info", // Using info type for a friendly message
          isLoading: false,
          autoClose: 3000,
        });
        setIsVisible(false); // Optional: hide the popup for already subscribed users
      } else {
        toast.update(toastId, {
          render: "Failed to join the newsletter. Please try again later.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    isVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <ToastContainer />
        <div className="bg-white w-[90%] md:w-[60%] lg:w-[40%] rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row relative">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-1 right-3 text-gray-500 hover:text-gray-800 transition md:text-[20px] text-[30px]"
          >
            ✕
          </button>

          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 h-48 md:h-auto">
            <img
              src={piano}
              alt="Newsletter"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center md:text-left text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Join Our Newsletter!
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and stay updated on the latest offers,
              exclusive content, and exciting news. Don’t miss out!
            </p>
            <div className="flex gap-2 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 md:w-1/2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
              />
              <button
                onClick={handleJoin}
                className="md:mt-0 md:ml-4 px-4 py-2 bg-theme text-white rounded-md hover:bg-theme-dark transition duration-200"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
