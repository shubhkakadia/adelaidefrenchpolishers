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
    <footer className="bg-[#404041] text-white py-2 text-center">
      <ToastContainer />
      <div className="justify-around my-6 items-center md:space-y-0 flex flex-col md:flex-row">
        <Image
          src={companylogo}
          alt="adelaide french polishers"
          width={200}
          height={200}
          className="h-[100px] w-auto"
        />
        
        {/* Quick Links Section */}
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 text-sm">
            <Link href="/aboutus" className="hover:text-[#E3A890] transition-colors duration-200">
              About Us
            </Link>
            <Link href="/beforeafter" className="hover:text-[#E3A890] transition-colors duration-200">
              Before & After
            </Link>
            <Link href="/contactus" className="hover:text-[#E3A890] transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/gallery" className="hover:text-[#E3A890] transition-colors duration-200">
              Gallery
            </Link>
            <Link href="/movingservice" className="hover:text-[#E3A890] transition-colors duration-200">
              Moving Service
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4">Join our mailing list for updates</p>
          <div className="flex items-center bg-white rounded-full border border-gray-300 overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-full outline-none text-[#404041]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="cursor-pointer bg-gray-800 text-white px-4 m-1 py-1 rounded-full hover:bg-[#E3A890] transition-colors duration-200"
              onClick={handleJoinClick}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-10 mb-6">
        <Link
          href="https://www.facebook.com/AdelaideFrenchPolishers/"
          aria-label="Facebook"
          className="w-10 h-10 fill-current text-amber-100"
          target="_blank"
        >
          <Image src={FacebookIcon} width={50} height={50} alt="Facebook" />
        </Link>
        <Link
          href="https://www.instagram.com/adelaidefrenchpolishers/"
          aria-label="Instagram"
          className="w-10 h-10 fill-current"
          target="_blank"
        >
          <Image src={InstagramIcon} width={50} height={50} alt="Instagram" />
        </Link>
      </div>

      <div className="text-gray-400 md:text-lg text-sm">
        © 2025 Adelaide French Polishers | All Rights Reserved
      </div>
    </footer>
  );
}