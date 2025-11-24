"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

export default function WhatAreTheAdvantagesOfFrenchPolishing() {
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
          What are the Advantages of French Polishing? | Adelaide French
          Polishers
        </title>
        <meta
          name="description"
          content="Discover the key advantages of French polishing - from stunning high-gloss finishes to eco-friendly materials, perfect for antiques, fine furniture, and musical instruments."
        />
        <meta
          name="keywords"
          content="french polishing advantages, benefits of french polishing, shellac finish benefits, traditional wood finishing, french polish vs modern finishes, antique furniture finishing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="What are the Advantages of French Polishing? | Adelaide French Polishers"
        />
        <meta
          property="og:description"
          content="Learn why French polishing remains one of the most premium and respected wood finishing methods for antiques, fine furniture, and musical instruments."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/blogs/What-are-the-advantages-of-French-polishing"
        />
        <link
          rel="canonical"
          href="https://adelaidefrenchpolishers.com.au/blogs/What-are-the-advantages-of-French-polishing"
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
            What are the Advantages of French Polishing?
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
              Approx. 8 min read
            </span>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            French polishing is one of the most premium and traditional wood
            finishing methods ever developed. Known for its deep, glass-like
            shine, it enhances the natural beauty of timber in a way that modern
            finishes cannot fully replicate. While the process is time-intensive,
            the results are unmatched — making it a preferred choice for antique
            restoration, fine furniture, and musical instruments.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4"
          >
            Below are the key advantages of French polishing and why it remains a
            highly respected craft.
          </p>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto prose prose-lg">
          {/* Advantage 1: Stunning Finish */}
          <section
            data-aos="fade-up"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              1. Stunning, High-Gloss Finish
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The biggest advantage of French polishing is the rich, mirror-like
              sheen it produces.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why it stands out:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Enhances the grain and colour of the wood</li>
              <li>Adds natural depth and clarity</li>
              <li>Creates a luxurious, reflective surface</li>
              <li>
                Looks far superior on fine timbers like mahogany, walnut, and
                rosewood
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              No spray finish or polyurethane can replicate this classic, elegant
              appearance.
            </p>
          </section>

          {/* Advantage 2: Perfect for Antiques */}
          <section
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              2. Perfect for Antique and Fine Furniture
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing is the gold standard for restoring antiques.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Because it:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Maintains historical authenticity</li>
              <li>Preserves the character and warmth of old timber</li>
              <li>Doesn't create a thick plastic-like coating</li>
              <li>Matches the original finish used for centuries</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              For heritage pieces, French polishing is often the only appropriate
              finishing method.
            </p>
          </section>

          {/* Advantage 3: Easy to Repair */}
          <section
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              3. Easy to Repair and Restore
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Unlike varnish and lacquer, which require full stripping, shellac
              can be repaired without removing the entire finish.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Benefits:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Minor scratches and marks can be blended seamlessly</li>
              <li>Damaged areas can be spot-treated</li>
              <li>
                Restorers can revive the shine without harsh chemicals
              </li>
              <li>Saves time and preserves more of the original wood</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              This makes it ideal for pianos, antiques, and furniture that may
              see long-term use.
            </p>
          </section>

          {/* Advantage 4: Natural and Eco-Friendly */}
          <section
            data-aos="fade-up"
            data-aos-delay="300"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              4. Natural and Eco-Friendly
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing uses shellac, a natural resin, and methylated
              spirits.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Advantages:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Non-toxic once cured</li>
              <li>Low environmental impact</li>
              <li>Safe for indoor use</li>
              <li>Contains no harsh industrial chemicals</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              For people who prefer traditional, sustainable finishes, this is a
              big benefit.
            </p>
          </section>

          {/* Advantage 5: Enhances Natural Beauty */}
          <section
            data-aos="fade-up"
            data-aos-delay="400"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              5. Enhances the Natural Beauty of Timber
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Instead of sitting on top of the wood like modern coatings, shellac
              penetrates the grain and highlights its organic character.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              The result:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Warm, rich colour tones</li>
              <li>Visible grain detail</li>
              <li>True timber texture</li>
              <li>A silky, hand-crafted finish</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              French polishing doesn't hide the wood — it celebrates it.
            </p>
          </section>

          {/* Advantage 6: Lightweight Finish */}
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              6. Lightweight Finish (Doesn't Add Bulk)
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing does not create a thick barrier.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why this is good:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Keeps the natural feel of the surface</li>
              <li>Preserves carved details</li>
              <li>
                Prevents the "plastic" look common in modern coatings
              </li>
              <li>Ideal for fine woodworking and instruments</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              This is especially important for music pieces like guitars, violins,
              and pianos.
            </p>
          </section>

          {/* Advantage 7: Excellent for Instruments */}
          <section
            data-aos="fade-up"
            data-aos-delay="600"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              7. Excellent for Musical Instruments
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Many high-end pianos, violins, guitars, and cellos use shellac
              finishes.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Benefits for instruments:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Allows natural resonance</li>
              <li>Doesn't choke the wood</li>
              <li>Lightweight</li>
              <li>Easy to maintain</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              This is why classical instrument builders still prefer it today.
            </p>
          </section>

          {/* Advantage 8: Handcrafted Appearance */}
          <section
            data-aos="fade-up"
            data-aos-delay="700"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              8. Unique Handcrafted Appearance
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Every French polish is applied by hand, resulting in a surface with
              personality and craftsmanship.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              This gives:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>A one-of-a-kind finish</li>
              <li>A premium, artisan feel</li>
              <li>Exceptional smoothness</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Homeowners and collectors value this handcrafted quality.
            </p>
          </section>

          {/* Summary */}
          <section
            data-aos="fade-up"
            data-aos-delay="800"
            className="mb-16 bg-gradient-to-r from-[#E3A890] to-[#D4A574] rounded-lg p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Summary: Why Choose French Polishing?
            </h2>
            <p className="text-white text-lg mb-4">
              French polishing offers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white text-lg ml-4 mb-6">
              <li>A deep, luxurious shine</li>
              <li>Perfect finish for antiques and fine furniture</li>
              <li>Easy repairs and long-term maintenance</li>
              <li>A natural, eco-friendly solution</li>
              <li>A lightweight, resonant finish for musical instruments</li>
              <li>Unmatched hand-crafted beauty</li>
            </ul>
            <p className="text-white text-lg italic">
              It remains one of the most elegant and respected furniture finishing
              techniques in the world.
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
              Experience the Premium Benefits of French Polishing
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover why French polishing remains the gold standard for fine
              furniture, antiques, and musical instruments. Our expert craftsmen
              bring decades of experience to deliver that unmatched, handcrafted
              finish your furniture deserves.
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
              href="/blogs/How-difficult-is-French-polishing"
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
                <p className="font-semibold">How Difficult is French Polishing?</p>
              </div>
            </Link>
            <Link
              href="/blogs/What-do-you-need-for-French-polishing"
              className="flex items-center text-[#E3A890] hover:text-[#D4A574] transition-colors duration-300 group"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Next</p>
                <p className="font-semibold">What do you need for French Polishing?</p>
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

