"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

export default function WhatAlcoholIsBestForFrenchPolishing() {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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

  return (
    <>
      <Head>
        <title>
          What Alcohol is Best for French Polishing? | Adelaide French Polishers
        </title>
        <meta
          name="description"
          content="Learn about the best alcohol for French polishing - methylated spirits, ethanol, and why choosing the right type matters for a clear, smooth finish."
        />
        <meta
          name="keywords"
          content="french polishing alcohol, methylated spirits french polishing, denatured alcohol french polishing, best alcohol for shellac, french polishing solvents"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="What Alcohol is Best for French Polishing? | Adelaide French Polishers"
        />
        <meta
          property="og:description"
          content="Discover which alcohol works best for French polishing and why choosing the right type is crucial for achieving a perfect finish."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/blogs/What-alcohol-is-best-for-French-polishing"
        />
        <link
          rel="canonical"
          href="https://adelaidefrenchpolishers.com.au/blogs/What-alcohol-is-best-for-French-polishing"
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

      <Navbar isCollapsed={isNavbarCollapsed} />

      <main className="pt-32 px-4 md:px-8 lg:px-20 min-h-screen bg-white">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-[#E3A890] hover:text-[#D4A574] transition-colors duration-300 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blogs
          </Link>
        </div>
        {/* Hero Section */}
        <section className="text-center mb-16 max-w-4xl mx-auto">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E3A890] mb-4"
          >
            What Alcohol is Best for French Polishing?
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-6 flex justify-center"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#E3A890]/10 text-[#E3A890] text-sm md:text-base font-medium">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Approx. 6 min read
            </span>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Alcohol is a key ingredient in French polishing because it dissolves
            shellac flakes and helps the finish dry quickly and evenly. But not
            all alcohols are the same, and choosing the right type can make a
            noticeable difference in the clarity, smoothness, and final quality of
            the polish.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4"
          >
            Here's everything you need to know about the best alcohol for French
            polishing.
          </p>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto prose prose-lg">
          {/* Option 1: Methylated Spirits */}
          <section
            data-aos="fade-up"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              1. Methylated Spirits (Denatured Alcohol) – The Best and Most
              Common Choice
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The most widely used and recommended alcohol for French polishing is
              methylated spirits, also known as denatured alcohol.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why it's ideal:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Dissolves shellac flakes quickly and thoroughly</li>
              <li>Evaporates at the right speed for smooth application</li>
              <li>Leaves a clear, clean finish</li>
              <li>Easily available and affordable</li>
              <li>Works perfectly for both polishing and "spiriting off"</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4">
              In Australia, purple-dyed methylated spirits is the standard and
              works extremely well for French polishing.
            </p>
          </section>

          {/* Option 2: Industrial Alcohol */}
          <section
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              2. Industrial Alcohol (Ethanol) – High Purity, Professional Use
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Pure or near-pure ethanol is highly effective for French polishing,
              especially in workshops.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Benefits:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Very clean burning</li>
              <li>Minimal residue</li>
              <li>Produces a clear, crisp polish</li>
              <li>Ideal for premium, high-gloss finishes</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
              Downside:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Harder to buy because it is regulated</li>
              <li>More expensive</li>
              <li>Not necessary for most projects</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Restoration professionals sometimes prefer high-grade ethanol for
              museum-quality work or large instruments.
            </p>
          </section>

          {/* Option 3: Isopropyl Alcohol */}
          <section
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm border-l-4 border-red-400"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              3. Isopropyl Alcohol (IPA) – Not Ideal
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Some people ask whether they can use isopropyl alcohol.
            </p>
            <p className="text-gray-700 text-lg mb-4 font-semibold">
              Short answer: No.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Reasons:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Doesn't dissolve shellac as well</li>
              <li>Slower evaporation leads to streaks</li>
              <li>Can soften or cloud the finish</li>
              <li>Not suitable for polishing or thinning</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              It is acceptable only for cleaning tools — not for making shellac
              polish.
            </p>
          </section>

          {/* Option 4: Methanol */}
          <section
            data-aos="fade-up"
            data-aos-delay="300"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm border-l-4 border-red-400"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              4. Methanol – Effective but Unsafe
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Methanol dissolves shellac very well, but it is very toxic and
              unsafe, especially indoors.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Issues:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Highly poisonous</li>
              <li>Dangerous fumes</li>
              <li>Absorbs through skin</li>
              <li>Not recommended for home or professional use</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Most modern restorers avoid methanol entirely.
            </p>
          </section>

          {/* Option 5: Denatured vs Pure */}
          <section
            data-aos="fade-up"
            data-aos-delay="400"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              5. Denatured Alcohol vs Pure Alcohol — What's the Difference?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Denatured alcohol contains small additives to make it undrinkable.
              These additives don't affect the performance for French polishing.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              The key factors are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Evaporation rate</li>
              <li>Purity</li>
              <li>Absence of oily additives</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              High-quality methylated spirits from a hardware store is perfectly
              suitable.
            </p>
          </section>

          {/* Recommendation */}
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            className="mb-12 bg-gradient-to-r from-[#E3A890] to-[#D4A574] rounded-lg p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Alcohol Should You Use for the Best Results?
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-white text-lg font-semibold mb-2">
                  ✔ Best Overall:
                </p>
                <p className="text-white text-xl font-bold mb-2">
                  Methylated Spirits (Denatured Alcohol)
                </p>
                <p className="text-white text-lg">
                  Affordable, reliable, safe enough for indoor use, and perfect
                  for dissolving shellac.
                </p>
              </div>
              <div className="mt-6">
                <p className="text-white text-lg font-semibold mb-2">
                  ✔ Best Professional Choice (Premium):
                </p>
                <p className="text-white text-xl font-bold mb-2">
                  High-purity Ethanol (95–99%)
                </p>
                <p className="text-white text-lg">
                  Ideal for high-end restorations and instrument finishing.
                </p>
              </div>
              <div className="mt-6">
                <p className="text-white text-lg font-semibold mb-2">✘ Avoid:</p>
                <ul className="list-disc list-inside space-y-1 text-white text-lg ml-4">
                  <li>Isopropyl alcohol (IPA)</li>
                  <li>Methanol</li>
                  <li>Alcohols with oils, scents, or additives</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why It Matters */}
          <section
            data-aos="fade-up"
            data-aos-delay="600"
            className="mb-16 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              Why the Right Alcohol Matters
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Using the correct alcohol ensures:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Shellac dissolves evenly</li>
              <li>The pad glides smoothly</li>
              <li>Layers dry clean and streak-free</li>
              <li>The finish develops a clear, rich shine</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Poor-quality alcohol leads to cloudiness, drag marks, and uneven
              layers.
            </p>
          </section>
        </article>

        {/* CTA Section */}
        <section
          data-aos="fade-up"
          className="bg-gradient-to-r from-[#E3A890] to-[#D4A574] py-16 mt-16 mb-16 rounded-lg shadow-xl"
        >
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trust the Experts for Professional French Polishing
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our skilled craftsmen use the right materials and techniques to
              achieve perfect results. From material selection to final polish,
              we ensure every detail is handled with expertise and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contactus">
                <button className="cursor-pointer bg-white text-[#E3A890] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Get a Free Quote
                </button>
              </Link>
              <Link href="/gallery">
                <button className="cursor-pointer bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#E3A890] transition-all duration-300 w-full sm:w-auto">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Next/Previous Navigation */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
            <Link
              href="/blogs/Is-French-polishing-worth-it"
              className="flex items-center text-[#E3A890] hover:text-[#D4A574] transition-colors duration-300 group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <div>
                <p className="text-xs text-gray-500 mb-1">Previous</p>
                <p className="font-semibold">Is French Polishing Worth It?</p>
              </div>
            </Link>
            <Link
              href="/blogs/Is-French-polish-the-same-as-shellac"
              className="flex items-center text-[#E3A890] hover:text-[#D4A574] transition-colors duration-300 group"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Next</p>
                <p className="font-semibold">Is French Polish the Same as Shellac?</p>
              </div>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

