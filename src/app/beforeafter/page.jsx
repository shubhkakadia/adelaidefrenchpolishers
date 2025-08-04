"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Slider from "@/components/slider";
import { beforeafter } from "@/components/gallerydata/beforeafter";
import Head from "next/head";
import Image from "next/image";
import NewsletterPopup from "@/components/newsLetterPopup";
import Script from "next/script";

const ProjectCard = ({ job, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`cursor-pointer group relative overflow-hidden rounded-lg transition-all duration-300 ${
      isSelected ? "ring-2 ring-[#E3A890]" : "hover:ring-2 hover:ring-gray-300"
    }`}
  >
    <div className="aspect-video w-64 overflow-hidden">
      <Image
        src={job.after}
        alt={`After - ${job.name} furniture restoration by Adelaide French Polishers`}
        width={500}
        height={500}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
    <div
      className={`p-2 text-center ${
        isSelected
          ? "bg-[#E3A890] text-white"
          : "bg-white group-hover:bg-gray-50"
      }`}
    >
      <h3 className="text-sm font-medium truncate">{job.name}</h3>
    </div>
  </button>
);

export default function Beforeafter() {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(beforeafter[0]);
  const [selectedJob, setSelectedJob] = useState(
    beforeafter[0].jobList ? beforeafter[0].jobList[0] : beforeafter[0]
  );
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
      setNavbarCollapsed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedJob(category.jobList ? category.jobList[0] : category);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Head>
        <title>
          Before and After | Furniture Restoration Projects | Adelaide French
          Polishers
        </title>
        <meta
          name="description"
          content="View dramatic before-and-after transformations of antique furniture, modern finishes, and French polishing projects handled by Adelaide French Polishers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

      <Navbar isCollapsed={isNavbarCollapsed} />

      <div className="container py-32 max-w-7xl mx-auto px-4">
        <h1 className="md:text-4xl text-2xl text-center pb-6 font-bold text-[#E3A890]">
          Furniture Restoration – Before & After Transformations
        </h1>
        <p className="text-center text-gray-600 mt-4 md:text-lg pb-4">
          Discover our expert craftsmanship in every project – from antique
          repairs to modern furniture refinishing. Swipe or click through real
          before-and-after restoration results done in our Adelaide workshop.
        </p>

        {/* Main Categories */}
        <div className="flex md:gap-8 gap-2 justify-center mt-4">
          {beforeafter?.map((category, index) => (
            <button
              key={index}
              className={`cursor-pointer text-lg px-4 py-2 rounded-md transition-colors duration-300 ${
                selectedCategory.name === category.name
                  ? "text-[#E3A890] underline"
                  : "hover:text-[#E3A890]"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Comparison Area */}
        <div className="mt-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-medium mb-4 text-center">
              {selectedJob.name}
            </h2>
            <Slider
              beforeImage={selectedJob.before}
              afterImage={selectedJob.after}
            />
          </div>
        </div>

        {/* Project Selection Cards */}
        {selectedCategory.jobList && selectedCategory.jobList.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl mb-4 text-center">More Projects</h2>
            <div className="flex gap-4 overflow-x-auto p-4">
              {selectedCategory.jobList.map((job, index) => (
                <ProjectCard
                  key={index}
                  job={job}
                  isSelected={selectedJob.name === job.name}
                  onClick={() => setSelectedJob(job)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <Script id="gallery-schema" type="application/ld+json">
        {`
  {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Furniture Restoration Before & After Gallery",
    "description": "Before and after transformations of furniture restoration projects by Adelaide French Polishers",
    "creator": {
      "@type": "LocalBusiness",
      "name": "Adelaide French Polishers"
    },
    "about": {
      "@type": "Service",
      "name": "Furniture Restoration",
      "provider": {
        "@type": "LocalBusiness", 
        "name": "Adelaide French Polishers"
      }
    },
    "image": [
      ${
        selectedCategory.jobList
          ? selectedCategory.jobList
              .map(
                (job) => `
      {
        "@type": "ImageObject",
        "name": "${job.name} - Before and After",
        "description": "Furniture restoration transformation showing before and after results",
        "contentUrl": "${job.after}",
        "thumbnailUrl": "${job.before}",
        "creator": {
          "@type": "LocalBusiness",
          "name": "Adelaide French Polishers"
        }
      }`
              )
              .join(",")
          : ""
      }
    ]
  }
`}
      </Script>
    </div>
  );
}
