"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

export default function HowIsFrenchPolishingDone() {
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
          How is French Polishing Done? | Adelaide French Polishers
        </title>
        <meta
          name="description"
          content="Learn about the traditional French polishing technique - a premium wood finishing method that creates a deep, glossy, mirror-like shine using shellac applied in thin, controlled layers."
        />
        <meta
          name="keywords"
          content="french polishing process, how french polishing works, shellac wood finishing, traditional furniture finishing, french polishing technique, wood polishing steps"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="How is French Polishing Done? | Adelaide French Polishers"
        />
        <meta
          property="og:description"
          content="Discover the traditional French polishing technique - a premium wood finishing method that creates a deep, glossy, mirror-like shine."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/blogs/How-is-French-polishing-done"
        />
        <link
          rel="canonical"
          href="https://adelaidefrenchpolishers.com.au/blogs/How-is-French-polishing-done"
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
            How is French Polishing Done?
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
              Approx. 9 min read
            </span>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            French polishing is a traditional wood finishing technique known for
            creating a deep, glossy, mirror-like shine. Unlike modern finishes
            that rely on heavy coatings, French polishing enhances the natural
            beauty of timber using shellac applied in thin, controlled layers.
            The process is slow and highly skilled, which is why it remains one
            of the most premium finishing methods used today — especially for
            antiques, fine furniture, and musical instruments.
          </p>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto prose prose-lg">
          {/* Step 1: Preparing the Surface */}
          <section
            data-aos="fade-up"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              1. Preparing the Surface
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Before polishing begins, the timber must be perfectly smooth and
              clean.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Steps:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>
                <strong>Cleaning & dust removal:</strong> Any old finish, dirt,
                wax, or oils must be removed.
              </li>
              <li>
                <strong>Sanding:</strong> The surface is sanded through several
                grits to remove scratches and open the grain.
              </li>
              <li>
                <strong>Pore filling:</strong> Woods like mahogany or walnut have
                natural pores. These are filled using fine pumice powder and
                shellac to create a glass-like, even base.
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Good preparation is essential — even the best polishing technique
              will not hide surface imperfections.
            </p>
          </section>

          {/* Step 2: Mixing the Shellac */}
          <section
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              2. Mixing the Shellac
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Shellac flakes are dissolved in methylated spirits to create the
              polishing solution.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why shellac?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Natural and eco-friendly</li>
              <li>Dries quickly</li>
              <li>Builds beautiful depth</li>
              <li>Repairs easily without stripping the entire surface</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4">
              The strength (called cut) is adjusted based on the type of wood
              and desired finish.
            </p>
          </section>

          {/* Step 3: Making the "Rubber" */}
          <section
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              3. Making the "Rubber" (Polishing Pad)
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              A French polishing pad — known as a rubber or fad — is made from
              cotton wadding wrapped in a soft cloth.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Its purpose:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Holds the shellac</li>
              <li>Releases it in controlled, even amounts</li>
              <li>
                Allows circular or figure-eight motion without streaks
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              This simple tool is the heart of the entire process.
            </p>
          </section>

          {/* Step 4: Applying Thin Layers */}
          <section
            data-aos="fade-up"
            data-aos-delay="300"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              4. Applying Thin Layers of Shellac
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The polishing begins by moving the rubber across the surface in
              continuous patterns.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Typical motions:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Figure eight</li>
              <li>Straight passes</li>
              <li>Circular wiping</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4">
              Thin layers are built up slowly, often requiring 20–30 coats over
              multiple sessions.
            </p>
            <p className="text-gray-700 text-lg mt-2 italic">
              The aim is not to apply shellac thickly but to gradually build
              clarity and depth.
            </p>
          </section>

          {/* Step 5: Adding Oil */}
          <section
            data-aos="fade-up"
            data-aos-delay="400"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              5. Adding Oil to Maintain Smooth Motion
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              A few drops of oil — usually olive oil or mineral oil — are used
              on the pad to prevent it from sticking.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why oil is needed:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Reduces friction</li>
              <li>Helps the pad glide</li>
              <li>Prevents swirl marks or tearing</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4">
              The oil remains on the surface until the final stage, where it is
              carefully removed.
            </p>
          </section>

          {/* Step 6: Spiriting Off */}
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              6. "Spiriting Off"
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Once enough layers are built, the surface is lightly "spirited off."
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              This involves:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Using a clean pad</li>
              <li>With very diluted shellac</li>
              <li>No oil</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4">
              This step removes any oily residue and refines the clarity of the
              finish, leaving a flawless sheen.
            </p>
          </section>

          {/* Step 7: Curing and Buffing */}
          <section
            data-aos="fade-up"
            data-aos-delay="600"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              7. Curing and Buffing
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The shellac needs time to harden fully.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              After curing:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>The surface may be gently buffed</li>
              <li>A protective wax can be applied</li>
              <li>
                The final look becomes rich, reflective, and silky smooth
              </li>
            </ul>
          </section>

          {/* Final Result */}
          <section
            data-aos="fade-up"
            data-aos-delay="700"
            className="mb-16 bg-gradient-to-r from-[#E3A890] to-[#D4A574] rounded-lg p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Final Result
            </h2>
            <p className="text-white text-lg mb-4">
              The final French-polished surface is:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white text-lg ml-4">
              <li>Deep and glossy</li>
              <li>Smooth to the touch</li>
              <li>Rich in colour and clarity</li>
              <li>Highly reflective</li>
              <li>
                Perfect for antiques, pianos, and high-value timber furniture
              </li>
            </ul>
            <p className="text-white text-lg mt-6 italic">
              It's one of the most beautiful finishes ever developed — and also
              one of the most labour-intensive, which is why it is trusted only
              to skilled craftsmen.
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
              Ready to Restore Your Furniture with French Polishing?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the premium finish of traditional French polishing. Our
              skilled craftsmen bring decades of expertise to every project,
              ensuring your treasured furniture receives the care and attention
              it deserves.
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
              href="/blogs/How-long-does-French-polishing-take"
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
                <p className="font-semibold">How Long Does French Polishing Take?</p>
              </div>
            </Link>
            <Link
              href="/blogs/How-difficult-is-French-polishing"
              className="flex items-center text-[#E3A890] hover:text-[#D4A574] transition-colors duration-300 group"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Next</p>
                <p className="font-semibold">How Difficult is French Polishing?</p>
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
