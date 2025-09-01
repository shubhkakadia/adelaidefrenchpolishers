"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { items } from "@/components/gallerydata/items";
import Image from "next/image";
import Head from "next/head";
import NewsletterPopup from "@/components/newsLetterPopup";
import Script from "next/script";

export default function Gallery() {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [interaction, setInteraction] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!interaction) {
        setInteraction(true);
        setTimeout(() => {
          setShowPopup(true);
        }, 10000); // Show popup after 10 seconds of interaction
      }
    };

    // Add event listeners for user interactions
    window.addEventListener("mousemove", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      // Clean up event listeners
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [interaction]);

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
      <Head>
        <title>
          Furniture Restoration Gallery | Adelaide French Polishers | Before &
          After Photos
        </title>
        <meta
          name="description"
          content="Browse our comprehensive gallery of professional furniture restoration, French polishing, and modern finishes. View stunning before-and-after transformations by Adelaide French Polishers across South Australia."
        />
        <meta
          name="keywords"
          content="furniture restoration gallery adelaide, french polishing before after, antique furniture restoration photos, furniture refinishing gallery, adelaide french polishers gallery, furniture restoration examples, french polishing examples, furniture repair gallery"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Furniture Restoration Gallery | Adelaide French Polishers"
        />
        <meta
          property="og:description"
          content="Browse our comprehensive gallery of professional furniture restoration, French polishing, and modern finishes."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/gallery"
        />
        <meta
          property="og:image"
          content="https://adelaidefrenchpolishers.com.au/assets/AFP_Logo2_800x_no_bg.png"
        />
        <link
          rel="canonical"
          href="https://adelaidefrenchpolishers.com.au/gallery"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6QGSSZ2J06"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6QGSSZ2J06');
        `}
        </Script>
      </Head>
      {showPopup && (
        <NewsletterPopup
          onClose={() => setShowPopup(false)}
          onSubmit={() => setShowPopup(false)}
        />
      )}
      {/* Navbar */}
      <Navbar isCollapsed={isNavbarCollapsed} />

      {/* Gallery Section */}
      <div className="container mx-auto py-32 px-4">
        <h1 className="md:text-4xl text-2xl text-center pb-10 font-bold text-[#E3A890]">
          Furniture Restoration Gallery
        </h1>

        <p className="text-center text-gray-600 md:text-lg md:mx-32 mb-10">
          Explore real projects from our Adelaide workshop, including antique
          furniture repairs, custom spray finishes, and premium French polishing
          work. Hover on each image to see transformations and details.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
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
      <Image
        src={item.media[currentImageIndex]}
        alt={`${item.name} - ${
          item.description ||
          "Furniture Restoration Project by Adelaide French Polishers"
        }`}
        width={500}
        height={350}
        className="w-full h-[350px] object-contain transform transition-transform duration-300 group-hover:scale-105"
      />

      {/* Description Overlay */}
      {showDescription && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col overflow-y-auto gap-2 items-center justify-center text-white px-4 py-2">
          <h4 className="text-2xl font-bold text-center text-[#E3A890]">
            {item.name}
          </h4>
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
          className="px-4 py-2 opacity-90 bg-[#E3A890] text-white text-sm rounded-md cursor-pointer hover:opacity-100 transition-colors duration-200"
          onClick={() => setShowDescription(true)}
        >
          Read More
        </button>
      </div>
    </div>
  );
}
