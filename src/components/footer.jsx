import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactComponent as FacebookIcon } from "../assets/facebook_icon.svg"; // Adjust path if needed
import { ReactComponent as InstagramIcon } from "../assets/instagram_icon.svg"; // Adjust path if needed
import { Link } from "react-router-dom";
import companylogo from "../assets/Company Logo.png"; // Adjust path if needed

export default function Footer() {
  const [email, setEmail] = useState("");

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

  const handleJoinClick = async () => {
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
    } catch (error) {
      if (error.message === "ALREADY_SUBSCRIBED") {
        toast.update(toastId, {
          render: "You're already subscribed to our newsletter!",
          type: "info", // Using info type for a friendly message
          isLoading: false,
          autoClose: 3000,
        });
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
    <footer className="bg-[#404041] text-white py-6 text-center">
      <ToastContainer />
      <div className="justify-around my-10 items-center space-y-16 md:space-y-0 flex flex-col md:flex-row">
        <img
          src={companylogo}
          alt="adelaide french polishers"
          className="h-[100px] w-auto"
        />
        <div>
          <p className="mb-4">Join our mailing list for updates</p>
          <div className="flex items-center bg-white rounded-full border border-gray-300 overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-full outline-none text-theme"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-gray-800 text-white px-4 m-1 py-1 rounded-full hover:bg-theme transition-colors duration-200"
              onClick={handleJoinClick}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-10 mb-10">
        <Link
          to="https://www.facebook.com/AdelaideFrenchPolishers/"
          aria-label="Facebook"
          className="w-6 h-6 fill-current text-white"
        >
          <FacebookIcon />
        </Link>
        <Link
          to="https://www.instagram.com/adelaidefrenchpolishers/"
          aria-label="Instagram"
          className="w-6 h-6 fill-current text-white"
        >
          <InstagramIcon />
        </Link>
      </div>

      <div className="text-gray-400 md:text-lg text-sm">
        © 2024 Adelaide French Polishers | All Rights Reserved
      </div>
    </footer>
  );
}
