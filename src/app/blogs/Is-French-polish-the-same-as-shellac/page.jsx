"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

export default function IsFrenchPolishTheSameAsShellac() {
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
          Is French Polish the Same as Shellac? | Adelaide French Polishers
        </title>
        <meta
          name="description"
          content="Learn the difference between French polish and shellac - French polishing is a technique, while shellac is the material used in that technique."
        />
        <meta
          name="keywords"
          content="french polish vs shellac, difference between french polish and shellac, shellac finish, french polishing technique, shellac material"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Is French Polish the Same as Shellac? | Adelaide French Polishers"
        />
        <meta
          property="og:description"
          content="Discover the key difference: French polishing is a technique, while shellac is the material used in that technique."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/blogs/Is-French-polish-the-same-as-shellac"
        />
        <link
          rel="canonical"
          href="https://adelaidefrenchpolishers.com.au/blogs/Is-French-polish-the-same-as-shellac"
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
            Is French Polish the Same as Shellac?
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
            French polish and shellac are closely related, but they are not the
            same thing. Many people confuse the two because shellac is the main
            ingredient used in French polishing. However, French polishing is
            actually a technique, while shellac is a material.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4"
          >
            Here's the difference explained simply.
          </p>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto prose prose-lg">
          {/* Section 1: Shellac */}
          <section
            data-aos="fade-up"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              1. Shellac – The Material
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Shellac is a natural resin that comes in flake form and is
              dissolved in alcohol to create a liquid wood finish.
            </p>
            <p className="text-gray-700 text-lg mb-4">Shellac is:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>A natural resin</li>
              <li>Mixed with alcohol to create polish</li>
              <li>
                Available in different colours (blonde, garnet, ruby, etc.)
              </li>
              <li>
                Used for many types of wood finishing, not just French polishing
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4">
              Shellac can be applied with a brush, sprayed, or wiped on in
              various ways.
            </p>
          </section>

          {/* Section 2: French Polish */}
          <section
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              2. French Polish – The Technique
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing is a traditional hand-applied finishing method
              that uses shellac applied in many thin layers using a cloth pad
              called a rubber or fad.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              French polishing involves:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Applying dozens of ultra-thin shellac layers</li>
              <li>Using circular, figure-eight, and sweeping motions</li>
              <li>Filling the timber grain with pumice</li>
              <li>"Spiriting off" to remove excess oil</li>
              <li>Building a deep, glossy, mirror-like finish</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              French polishing is a method, not a substance.
            </p>
          </section>

          {/* Section 3: How They Work Together */}
          <section
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              3. How They Work Together
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishers use shellac as the finishing material, but the
              shine, clarity, and depth you see in a French-polished piece come
              from the technique, not just the shellac itself.
            </p>
            <p className="text-gray-700 text-lg mb-4">Think of it like this:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Shellac = the ingredient</li>
              <li>French polishing = the recipe</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              You can use shellac without French polishing, but you cannot
              French polish without shellac.
            </p>
          </section>

          {/* Section 4: Can You Apply Shellac Without French Polishing */}
          <section
            data-aos="fade-up"
            data-aos-delay="300"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              4. Can You Apply Shellac Without French Polishing?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Yes — shellac can be applied in many other ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Brushed-on shellac</li>
              <li>Sprayed shellac</li>
              <li>Wipe-on shellac</li>
              <li>Shellac-based sanding sealer</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              These methods create a nice finish, but none will achieve the same
              deep, hand-crafted, glass-like shine as French polishing.
            </p>
          </section>

          {/* Section 5: Why the Confusion */}
          <section
            data-aos="fade-up"
            data-aos-delay="400"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              5. Why the Confusion?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              People often say "French polish" when they actually mean "shellac
              finish," because:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Both have been used for centuries</li>
              <li>Many antique pieces originally used shellac</li>
              <li>Shellac is the core ingredient in French polishing</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              However, the professional terminology is different, especially in
              restoration work.
            </p>
          </section>

          {/* Summary with Comparison Table */}
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            className="mb-16 bg-gradient-to-r from-[#E3A890] to-[#D4A574] rounded-lg p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Summary: Are French Polish and Shellac the Same?
            </h2>
            <p className="text-white text-lg mb-6">
              No — they are related but not the same:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-white border-collapse">
                <thead>
                  <tr className="border-b-2 border-white/30">
                    <th className="text-left py-3 px-4 font-bold text-lg">
                      French Polish
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-lg">
                      Shellac
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/20">
                    <td className="py-3 px-4">A technique</td>
                    <td className="py-3 px-4">A material</td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="py-3 px-4">Uses many thin layers</td>
                    <td className="py-3 px-4">
                      Comes as flakes dissolved in alcohol
                    </td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="py-3 px-4">Creates a mirror-like finish</td>
                    <td className="py-3 px-4">Can be applied in various ways</td>
                  </tr>
                  <tr className="border-b border-white/20">
                    <td className="py-3 px-4">Requires high skill and time</td>
                    <td className="py-3 px-4">Easy to prepare and use</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Hand-crafted method</td>
                    <td className="py-3 px-4">
                      The resin used in that method
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white text-lg mt-6 italic">
              If you want the deepest, glossiest, most elegant finish possible,
              French polishing is the method — and shellac is the ingredient that
              makes it possible.
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
              Experience True French Polishing Expertise
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our skilled craftsmen use the traditional French polishing
              technique with premium shellac to create that unmatched, deep,
              mirror-like finish your furniture deserves. It's not just about
              the material — it's about the mastery of the technique.
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
              href="/blogs/What-alcohol-is-best-for-French-polishing"
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
                <p className="font-semibold">What Alcohol is Best for French Polishing?</p>
              </div>
            </Link>
            <Link
              href="/blogs/How-long-does-French-polishing-take"
              className="flex items-center text-[#E3A890] hover:text-[#D4A574] transition-colors duration-300 group"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Next</p>
                <p className="font-semibold">How Long Does French Polishing Take?</p>
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

