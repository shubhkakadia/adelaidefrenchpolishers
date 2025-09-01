"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const companylogo = "/assets/Company Logo.png";
const FacebookIcon = "/assets/facebook_icon.svg";
const InstagramIcon = "/assets/instagram_icon.svg";

export default function Footer() {
  const [email, setEmail] = useState("");

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

    const templateParams = {
      from_name: "",
      from_email: email,
      message: "",
      phone_number: "",
    };
    try {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID_SUBSCRIBERS,
          templateParams,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      // Success! Clear form and show success message
      toast.dismiss(toastId);
      toast.success("Successfully Joined Newsletter!");
      setEmail(""); // Clear the input after successful subscription
    } catch (error) {
      if (error.message === "ALREADY_SUBSCRIBED") {
        toast.update(toastId, {
          render: "You're already subscribed to our newsletter!",
          type: "info",
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
    <footer className="bg-[#404041] text-white">
      <ToastContainer />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src={companylogo}
                alt="Adelaide French Polishers"
                width={200}
                height={200}
                className="h-24 w-auto mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Professional French polishing and furniture restoration services
                across South Australia. Bringing new life to your treasured
                furniture pieces with expert craftsmanship.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/AdelaideFrenchPolishers/"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-[#E3A890] rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors duration-300"
                  target="_blank"
                >
                  <Image
                    src={FacebookIcon}
                    width={20}
                    height={20}
                    alt="Facebook"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/adelaidefrenchpolishers/"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-[#E3A890] rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors duration-300"
                  target="_blank"
                >
                  <Image
                    src={InstagramIcon}
                    width={20}
                    height={20}
                    alt="Instagram"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-[#E3A890] mb-4">
              Our Services
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#E3A890] rounded-full"></div>
                <span className="text-gray-300 text-sm">French Polishing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#E3A890] rounded-full"></div>
                <span className="text-gray-300 text-sm">
                  Furniture Restoration
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#E3A890] rounded-full"></div>
                <span className="text-gray-300 text-sm">
                  Antique Refinishing
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#E3A890] rounded-full"></div>
                <span className="text-gray-300 text-sm">
                  Moving & Transport
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#E3A890] rounded-full"></div>
                <span className="text-gray-300 text-sm">Free Quotes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#E3A890] rounded-full"></div>
                <span className="text-gray-300 text-sm">
                  South Australia Wide
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-[#E3A890] mb-4">
              Quick Links
            </h3>
            <div className="space-y-3">
              <Link
                href="/aboutus"
                className="block text-gray-300 text-sm hover:text-[#E3A890] transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className="block text-gray-300 text-sm hover:text-[#E3A890] transition-colors duration-200"
              >
                Gallery
              </Link>
              <Link
                href="/beforeafter"
                className="block text-gray-300 text-sm hover:text-[#E3A890] transition-colors duration-200"
              >
                Before & After
              </Link>
              <Link
                href="/coverage"
                className="block text-gray-300 text-sm hover:text-[#E3A890] transition-colors duration-200"
              >
                Coverage Areas
              </Link>
              <Link
                href="/movingservice"
                className="block text-gray-300 text-sm hover:text-[#E3A890] transition-colors duration-200"
              >
                Moving Service
              </Link>
              <Link
                href="/contactus"
                className="block text-gray-300 text-sm hover:text-[#E3A890] transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-[#E3A890] mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Get exclusive offers, restoration tips, and updates on our
              services.
            </p>
            <div className="mb-6">
              <div className="flex items-center bg-white rounded-full border border-gray-300 overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-l-full outline-none text-gray-800 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="cursor-pointer bg-[#E3A890] text-white px-6 py-3 rounded-r-full hover:bg-[#D4A574] transition-colors duration-200 font-semibold"
                  onClick={handleJoinClick}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                <span className="text-[#E3A890] font-semibold">
                  Service Areas:
                </span>{" "}
                Adelaide & Regional SA
              </p>
              <p className="text-gray-300 text-sm">
                <span className="text-[#E3A890] font-semibold">
                  Free Quotes:
                </span>{" "}
                Available
              </p>
              <p className="text-gray-300 text-sm">
                <span className="text-[#E3A890] font-semibold">
                  Experience:
                </span>{" "}
                Professional Craftsmanship
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar text center*/}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-2 md:mb-0 text-center">
            © 2025 Adelaide French Polishers | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
