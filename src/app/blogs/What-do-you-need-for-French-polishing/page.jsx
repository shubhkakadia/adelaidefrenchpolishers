"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

export default function WhatDoYouNeedForFrenchPolishing() {
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
          What do you need for French Polishing? | Adelaide French Polishers
        </title>
        <meta
          name="description"
          content="Complete guide to the materials and tools needed for French polishing - from shellac flakes and methylated spirits to polishing pads and finishing oils."
        />
        <meta
          name="keywords"
          content="french polishing materials, french polishing tools, shellac flakes, french polishing supplies, what you need for french polishing, french polishing equipment"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="What do you need for French Polishing? | Adelaide French Polishers"
        />
        <meta
          property="og:description"
          content="Discover the complete list of materials and tools needed for French polishing - surprisingly simple materials for a premium finish."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/blogs/What-do-you-need-for-French-polishing"
        />
        <link
          rel="canonical"
          href="https://adelaidefrenchpolishers.com.au/blogs/What-do-you-need-for-French-polishing"
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
            What do you need for French Polishing?
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
              Approx. 7 min read
            </span>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            French polishing is a traditional, skill-based finishing technique
            that uses shellac applied in thin, repeated layers to achieve a deep,
            glossy, mirror-like finish. Although the process is detailed and
            time-consuming, the materials required are surprisingly simple. Most
            of the magic comes from technique — not complicated tools.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4"
          >
            Below is a complete list of what you need for French polishing, and
            why each item is important.
          </p>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto prose prose-lg">
          {/* Item 1: Shellac Flakes */}
          <section
            data-aos="fade-up"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              1. Shellac Flakes
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Shellac is the core ingredient of French polishing.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why shellac is essential:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Provides the signature warm glow</li>
              <li>Builds a deep, glass-like finish</li>
              <li>Dries quickly for multi-layer application</li>
              <li>Can be repaired easily</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4">
              Shellac flakes come in various shades — blonde, garnet, ruby, and
              more — allowing you to match the timber's natural tone.
            </p>
          </section>

          {/* Item 2: Methylated Spirits */}
          <section
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              2. Methylated Spirits (Denatured Alcohol)
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Shellac must be dissolved in alcohol to turn it into a liquid
              polish.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why it's needed:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Acts as a solvent for shellac flakes</li>
              <li>Helps the polish dry quickly</li>
              <li>Allows thin, even coats</li>
              <li>
                Used in the "spiriting off" stage to refine the finish
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Using high-quality alcohol ensures a clearer, smoother final
              result.
            </p>
          </section>

          {/* Item 3: Polishing Pad */}
          <section
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              3. Polishing Pad (Rubber or Fad)
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The rubber is the hand-held pad used to apply the shellac.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              What it consists of:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>A soft cotton or wool core</li>
              <li>Wrapped in lint-free cotton or linen</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
              Purpose:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Holds the polish</li>
              <li>Releases shellac evenly</li>
              <li>Allows smooth, controlled motion</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              This simple tool is at the heart of the entire process.
            </p>
          </section>

          {/* Item 4: Fine Sandpaper */}
          <section
            data-aos="fade-up"
            data-aos-delay="300"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              4. Fine Sandpaper
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Good preparation makes all the difference.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Useful grits:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>180</li>
              <li>240</li>
              <li>320</li>
              <li>400 or higher</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
              Used for:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Smoothing the timber</li>
              <li>Removing old finishes</li>
              <li>Leveling imperfections</li>
              <li>Preparing the surface for grain filling</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Proper sanding helps achieve that flawless, mirror-like shine.
            </p>
          </section>

          {/* Item 5: Pumice Powder */}
          <section
            data-aos="fade-up"
            data-aos-delay="400"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              5. Pumice Powder (for Grain Filling)
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing often includes pore filling, especially for
              open-grain woods like mahogany and walnut.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why pumice is used:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Fills natural pores</li>
              <li>Creates a level surface</li>
              <li>Helps shellac build evenly</li>
              <li>Enhances clarity and smoothness</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4">
              Pumice is worked into the grain using the polishing pad and shellac.
            </p>
          </section>

          {/* Item 6: Finishing Oil */}
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              6. Finishing Oil
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              A few drops of oil help the pad glide smoothly as shellac is
              applied.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Common oils:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Olive oil</li>
              <li>Mineral oil</li>
              <li>Walnut oil</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
              Why it's needed:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Reduces friction</li>
              <li>Prevents pad sticking</li>
              <li>Helps avoid swirl marks or tearing</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Only a very small amount is used — too much will affect the shine.
            </p>
          </section>

          {/* Item 7: Clean Cotton Cloths */}
          <section
            data-aos="fade-up"
            data-aos-delay="600"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              7. Clean Cotton Cloths
            </h2>
            <p className="text-gray-700 text-lg mb-4">These are used for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Wiping surfaces</li>
              <li>Making polishing pads</li>
              <li>Applying alcohol for spiriting off</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Cloths must be lint-free to prevent debris from getting into the
              finish.
            </p>
          </section>

          {/* Item 8: Dust-Free Workspace */}
          <section
            data-aos="fade-up"
            data-aos-delay="700"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              8. A Dust-Free Workspace
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Because French polishing builds a delicate, glossy surface, even
              tiny dust particles can leave imperfections.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              A good workspace includes:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Minimal airflow</li>
              <li>Clean surfaces</li>
              <li>Controlled environment</li>
              <li>Stable temperature</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              A clean area is just as important as the tools themselves.
            </p>
          </section>

          {/* Item 9: Optional Wax */}
          <section
            data-aos="fade-up"
            data-aos-delay="800"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              9. Optional: Wax Polish
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              After curing, some restorers finish with a thin layer of beeswax
              or carnauba wax.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Benefits:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Adds extra sheen</li>
              <li>Protects the shellac</li>
              <li>Enhances smoothness</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Not required, but a popular final touch.
            </p>
          </section>

          {/* Summary */}
          <section
            data-aos="fade-up"
            data-aos-delay="900"
            className="mb-16 bg-gradient-to-r from-[#E3A890] to-[#D4A574] rounded-lg p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Summary: What You Need for French Polishing
            </h2>
            <p className="text-white text-lg mb-4">
              To perform French polishing properly, you need:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white text-lg ml-4 mb-6">
              <li>Shellac flakes</li>
              <li>Methylated spirits</li>
              <li>Polishing pad (rubber)</li>
              <li>Fine sandpaper</li>
              <li>Pumice powder</li>
              <li>Finishing oil</li>
              <li>Clean cotton cloths</li>
              <li>A dust-free workspace</li>
              <li>Optional: wax for final protection</li>
            </ul>
            <p className="text-white text-lg italic">
              Although the materials are simple, mastering the technique takes
              practice, patience, and an understanding of wood behaviour.
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
              Let Our Experts Handle Your French Polishing Needs
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              While the materials for French polishing are simple, the technique
              requires years of practice and expertise. Our skilled craftsmen have
              mastered this traditional art and can deliver that perfect finish
              for your treasured furniture.
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
              href="/blogs/What-are-the-advantages-of-French-polishing"
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
                <p className="font-semibold">What are the Advantages of French Polishing?</p>
              </div>
            </Link>
            <Link
              href="/blogs/Is-French-polishing-worth-it"
              className="flex items-center text-[#E3A890] hover:text-[#D4A574] transition-colors duration-300 group"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Next</p>
                <p className="font-semibold">Is French Polishing Worth It?</p>
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

