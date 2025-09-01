"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Head from "next/head";
import CountUp from "react-countup";
import NewsletterPopup from "@/components/newsLetterPopup";
import Script from "next/script";

const steven = "/assets/Steven.png";
const furnitureicon = "/assets/Furniture.png";
const moneyicon = "/assets/Money.png";
const timeicon = "/assets/Time.png";

export default function AboutUs() {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
  const startYear = new Date().getFullYear(); // Dynamic starting year
  const endYear = 1971;
  const [year, setYear] = useState(startYear);
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
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation triggers only once
    });
  }, []);

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

  useEffect(() => {
    let timeoutId;
    let intervalId;

    // Delay before animation starts
    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setYear((prevYear) => {
          if (prevYear > endYear) {
            return prevYear - 1;
          } else {
            clearInterval(intervalId);
            return prevYear;
          }
        });
      }, getMountainSpeed(year));
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [year]);

  // Mountain speed profile: slow → medium → fast → medium → slow
  const getMountainSpeed = (currentYear) => {
    const totalSteps = startYear - endYear;
    const stepsCompleted = startYear - currentYear;
    const progress = stepsCompleted / totalSteps;

    if (progress < 0.0005) return 150; // slow at start
    if (progress < 0.005) return 80; // medium
    if (progress < 0.1) return 30; // fast in middle
    if (progress < 0.9) return 80; // medium
    return 150; // slow at end
  };

  return (
    <div>
      <Head>
        <title>
          About Us | Adelaide French Polishers - Trusted Furniture Restoration
          Experts | South Australia
        </title>
        <meta
          name="description"
          content="Learn about Adelaide French Polishers - a second-generation, family-run furniture restoration business since 1971, specializing in French polishing, antique restoration, and eco-conscious craftsmanship across South Australia."
        />
        <meta
          name="keywords"
          content="adelaide french polishers about, steven garreffa furniture restoration, french polishing expert adelaide, furniture restoration family business, antique furniture restoration adelaide, french polishing craftsmanship, furniture restoration since 1971, glynde furniture restoration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="About Us | Adelaide French Polishers - Trusted Furniture Restoration Experts"
        />
        <meta
          property="og:description"
          content="Learn about Adelaide French Polishers - a second-generation, family-run furniture restoration business since 1971."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/aboutus"
        />
        <meta
          property="og:image"
          content="https://adelaidefrenchpolishers.com.au/assets/AFP_Logo2_800x_no_bg.png"
        />
        <link
          rel="canonical"
          href="https://adelaidefrenchpolishers.com.au/aboutus"
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

      <section className="h-screen flex items-center justify-center md:px-8 px-4">
        <div className="space-y-14 text-center">
          <section className="hero-section">
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-5xl font-bold text-[#E3A890] z-[5]"
            >
              Adelaide’s Trusted Furniture Restoration & French Polishing
              Experts Since{" "}
              <CountUp
                start={2025}
                end={1971}
                duration={5}
                delay={1}
                separator=""
              >
                {year}
              </CountUp>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay={300}
              className="text-md md:text-xl text-gray-500 mt-4"
            >
              A second-generation family business with decades of experience in
              quality craftsmanship.
            </p>
          </section>
        </div>
      </section>

      {/* Icons Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-32 space-y-16 bg-white">
        <p
          data-aos="fade-up"
          className="text-center md:text-2xl text-md mb-8 text-gray-700"
        >
          Our purpose-built workshop has state-of-the-art facilities to cater
          for any size job. Whether it be repairing a picture frame, polishing
          an entire dining suite, or a piano, we apply the same high standard.
          Our vision is simple; we aim to exceed each client’s expectation every
          time.
        </p>
        <h2
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-2xl font-bold text-center text-gray-700"
        >
          Why Choose Adelaide French Polishers?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-y-0 md:space-x-20 space-y-14">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-col items-center text-center"
          >
            <Image
              src={furnitureicon}
              alt="Quality Workmanship"
              width={100}
              height={100}
              className="w-auto h-12 mb-2"
            />
            <p className="font-semibold text-gray-700">
              Precision Craftsmanship in Every Furniture Repair
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="flex flex-col items-center text-center"
          >
            <Image
              src={moneyicon}
              alt="Value for Money"
              width={100}
              height={100}
              className="w-auto h-12 mb-2"
            />
            <p className="font-semibold text-gray-700">
              Affordable Furniture Restoration Without Compromise
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1500"
            className="flex flex-col items-center text-center"
          >
            <Image
              src={timeicon}
              alt="Specific Turn Around Time"
              width={100}
              height={100}
              className="w-auto h-12 mb-2"
            />
            <p className="font-semibold text-gray-700">
              Reliable Turnaround Times for Every Job
            </p>
          </div>
        </div>
      </section>

      {/* Photo and Text Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center md:px-64 px-4 md:space-x-10">
        <Image
          data-aos="fade-up"
          src={steven}
          width={500}
          height={500}
          alt="Steven Garreffa – French Polishing Expert and Business Owner"
          className="w-1/2 md:w-1/4 rounded-lg mb-8 md:mb-0 md:mr-8"
        />
        <div
          data-aos="fade-up"
          className="md:text-lg text-md text-center md:text-left text-gray-400"
        >
          <p>
            At Adelaide French Polishers, we combine heritage craftsmanship with
            modern techniques to deliver premium results in every restoration
            project.
          </p>
          <p className="mt-4">
            Business owner <strong>Steven Garreffa</strong> brings decades of
            expertise as a second-generation craftsman, ensuring top-tier
            quality and consistency in every job. He personally oversees all
            work, from consultation to final polish.
          </p>
          <p className="mt-4">
            Our workshop in Glynde, Adelaide uses advanced materials and
            eco-conscious practices to reduce environmental impact while
            achieving exceptional finishes.
          </p>
          <p className="mt-4">
            Every team member is trained to uphold our legacy of excellence.
            From antique heirlooms to modern cabinetry, your furniture is in
            skilled, caring hands.
          </p>
        </div>
      </section>
      <Script id="person-schema" type="application/ld+json">
        {`
  [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Steven Garreffa",
      "jobTitle": "Owner & Master Craftsman",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "Adelaide French Polishers"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Glynde",
        "addressRegion": "SA",
        "addressCountry": "AU"
      },
      "knowsAbout": [
        "French Polishing",
        "Furniture Restoration",
        "Antique Repair",
        "Wood Finishing"
      ],
      "image": "https://adelaidefrenchpolishers.com.au/assets/Steven.png"
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Adelaide French Polishers",
      "foundingDate": "1971",
      "founder": {
        "@type": "Person",
        "name": "Steven Garreffa"
      },
      "description": "Second-generation family business specializing in furniture restoration and French polishing",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Glynde",
        "addressRegion": "SA", 
        "addressCountry": "AU"
      },
      "employee": {
        "@type": "Person",
        "name": "Steven Garreffa",
        "jobTitle": "Owner & Master Craftsman"
      }
    }
  ]
`}
      </Script>
    </div>
  );
}
