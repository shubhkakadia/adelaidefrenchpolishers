import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import piano from "../assets/Piano.webp";

export default function NewsletterPopup() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const STORE_NAME = process.env.REACT_APP_SHOPIFY_STORE_NAME;
  const API_KEY = process.env.REACT_APP_SHOPIFY_API_KEY;

  const getLocationFromIP = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();

      // Extract relevant location data
      return {
        city: data.city,
        region: data.region,
        country: data.country_name,
        postal_code: data.postal,
        latitude: data.latitude,
        longitude: data.longitude,
      };
    } catch (error) {
      console.error("Error fetching location:", error);
      return null;
    }
  };

  const addSubscriber = async (email) => {
    try {
      const locationData = await getLocationFromIP();
      const response = await fetch(
        `https://${STORE_NAME}/admin/api/2024-01/customers.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": API_KEY,
          },
          body: JSON.stringify({
            customer: {
              email: email,
              accepts_marketing: true,
              accepts_marketing_updated_at: new Date().toISOString(),
              marketing_opt_in_level: "confirmed_opt_in",
              tags: "newsletter_subscriber",
              email_marketing_consent: {
                state: "subscribed",
                opt_in_level: "confirmed_opt_in",
                consent_updated_at: new Date().toISOString(),
              },
              // Add location data if available
              ...(locationData && {
                addresses: [
                  {
                    address1: "", // We don't get street address from IP
                    city: locationData.city,
                    province: locationData.region,
                    country: locationData.country,
                    zip: locationData.postal_code,
                    latitude: locationData.latitude,
                    longitude: locationData.longitude,
                    default: true,
                  },
                ],
              }),
            },
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Check specifically for the "already taken" error
        if (data.errors?.email?.includes("has already been taken")) {
          throw new Error("ALREADY_SUBSCRIBED");
        }
        throw new Error(JSON.stringify(data.errors) || "Subscription failed");
      }

      // Handle different HTTP status codes
      if (response.status === 403) {
        // Handle CORS issues
        console.error("CORS or authentication error");
      } else if (response.status === 429) {
        // Handle rate limiting
        console.error("Too many requests");
      }

      return data;
    } catch (error) {
      if (error.name === "TypeError" && error.message === "Failed to fetch") {
        // Handle CORS or network errors
        console.error("Network or CORS error");
      }
      throw error;
    }
  };

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
      await addSubscriber(email);

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
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
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
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Join Our Newsletter!
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and stay updated on the latest offers,
              exclusive content, and exciting news. Don’t miss out!
            </p>
            <div className="flex flex-col flex-wrap gap-2 md:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 w-3/4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
              />
              <button
                onClick={handleJoin}
                className="mt-4 md:mt-0 md:ml-4 px-4 py-2 bg-theme text-white rounded-md hover:bg-theme-dark transition duration-200"
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
