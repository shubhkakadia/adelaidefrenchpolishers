"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

export default function HowLongDoesFrenchPolishingTake() {
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
          How Long Does French Polishing Take? | Adelaide French Polishers
        </title>
        <meta
          name="description"
          content="Learn about French polishing timelines - from 2-5 days for small items to 2-3 weeks for pianos. Discover why this handcrafted technique takes time and why it's worth it."
        />
        <meta
          name="keywords"
          content="french polishing time, how long french polishing takes, french polishing duration, french polishing timeline, french polishing process time"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="How Long Does French Polishing Take? | Adelaide French Polishers"
        />
        <meta
          property="og:description"
          content="Discover the typical timeframes for French polishing - from small furniture pieces to grand pianos, and why this handcrafted technique requires patience."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/blogs/How-long-does-French-polishing-take"
        />
        <link
          rel="canonical"
          href="https://adelaidefrenchpolishers.com.au/blogs/How-long-does-French-polishing-take"
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
            How Long Does French Polishing Take?
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
            French polishing is known for its beautiful, mirror-like finish —
            but it's also one of the most time-consuming wood finishing
            techniques. Unlike modern spray or brush-on coatings, French
            polishing is done entirely by hand, building up dozens of thin
            layers of shellac over several sessions.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4"
          >
            The exact time it takes depends on the size of the piece, the wood
            type, and the condition of the surface. Below is a detailed
            breakdown.
          </p>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto prose prose-lg">
          {/* Section 1: General Timeframe */}
          <section
            data-aos="fade-up"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              1. General Timeframe
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              On average, French polishing takes:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-[#E3A890] mr-3 font-bold text-xl">✔</span>
                <div>
                  <p className="text-gray-700 text-lg font-semibold">
                    2–5 days for small items
                  </p>
                  <p className="text-gray-600 text-md italic">
                    (e.g., bedside tables, dining chairs, small cabinets)
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#E3A890] mr-3 font-bold text-xl">✔</span>
                <div>
                  <p className="text-gray-700 text-lg font-semibold">
                    1–2 weeks for large furniture
                  </p>
                  <p className="text-gray-600 text-md italic">
                    (e.g., dining tables, antique wardrobes, writing desks)
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#E3A890] mr-3 font-bold text-xl">✔</span>
                <div>
                  <p className="text-gray-700 text-lg font-semibold">
                    2–3 weeks for pianos or complex, carved pieces
                  </p>
                  <p className="text-gray-600 text-md italic">
                    (grand pianos, intricate antiques, multi-panel furniture)
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-4">
              This timeline includes preparation, pore filling, polishing
              sessions, drying times, and final finishing.
            </p>
          </section>

          {/* Section 2: Why It Takes Time */}
          <section
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              2. Why French Polishing Takes Time
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing is not a single coat — it's a layering process.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Here's what makes it time-intensive:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>
                <strong>Multiple coats:</strong> Often 20–30+ ultra-thin layers
              </li>
              <li>
                <strong>Drying time:</strong> Shellac dries fast, but layers must
                be built carefully
              </li>
              <li>
                <strong>Grain filling:</strong> Pumice and shellac are used to
                create a smooth base
              </li>
              <li>
                <strong>Spiriting off:</strong> Refining the finish requires
                precision and patience
              </li>
              <li>
                <strong>Handwork:</strong> Every stroke is done manually with a
                polishing pad
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              The process simply cannot be rushed without affecting the final
              shine and clarity.
            </p>
          </section>

          {/* Section 3: Wood Type Influence */}
          <section
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              3. Influence of Wood Type
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Different woods take different times.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Open-grain woods (slower):
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
                  <li>Mahogany</li>
                  <li>Walnut</li>
                  <li>Oak</li>
                </ul>
                <p className="text-gray-700 text-lg mt-2 italic">
                  These require more pore-filling, adding extra hours or days.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Tight-grain woods (faster):
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
                  <li>Maple</li>
                  <li>Cherry</li>
                  <li>Birch</li>
                </ul>
                <p className="text-gray-700 text-lg mt-2 italic">
                  These need fewer preparation steps.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Condition of Furniture */}
          <section
            data-aos="fade-up"
            data-aos-delay="300"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              4. Condition of the Furniture
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The starting condition significantly affects the polishing time.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Takes longer if:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
                  <li>The old finish must be stripped</li>
                  <li>The wood is damaged or uneven</li>
                  <li>Deep scratches need repairing</li>
                  <li>Veneer needs stabilising</li>
                  <li>Water or sun damage must be corrected</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Faster if:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
                  <li>The surface is clean and ready</li>
                  <li>
                    Only refinishing is required, not restoration
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-4 italic">
              Most antique pieces require detailed restoration before polishing
              even begins.
            </p>
          </section>

          {/* Section 5: Size and Complexity */}
          <section
            data-aos="fade-up"
            data-aos-delay="400"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              5. Size and Complexity of the Piece
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              A simple flat tabletop will polish much faster than:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Carved legs</li>
              <li>Turned components</li>
              <li>Raised panels</li>
              <li>Ornamental details</li>
              <li>Large surfaces (e.g., grand pianos)</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              More surface area = more layers = more working time.
            </p>
          </section>

          {/* Section 6: Drying and Curing */}
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              6. Drying and Curing Time
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polish dries quickly, but curing takes longer.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Drying:
                </h3>
                <p className="text-gray-700 text-lg">
                  Shellac dries within minutes between coats.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Curing:
                </h3>
                <p className="text-gray-700 text-lg">
                  The finish continues to harden over 7–14 days.
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mt-4 italic">
              Many professionals recommend avoiding heavy use or placing objects
              on the surface during this curing period.
            </p>
          </section>

          {/* Section 7: Can It Be Done Faster */}
          <section
            data-aos="fade-up"
            data-aos-delay="600"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              7. Can French Polishing Be Done Faster?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Experienced polishers can work efficiently, but the process still
              requires:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Repeated sessions</li>
              <li>Correct timing</li>
              <li>Layer building</li>
              <li>Rest periods</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 mb-4">
              Trying to shorten the process usually leads to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Stickiness</li>
              <li>Cloudy finish</li>
              <li>Streak marks</li>
              <li>Uneven gloss</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              So while it can be done efficiently, it cannot be rushed without
              compromising quality.
            </p>
          </section>

          {/* Summary */}
          <section
            data-aos="fade-up"
            data-aos-delay="700"
            className="mb-16 bg-gradient-to-r from-[#E3A890] to-[#D4A574] rounded-lg p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Summary: How Long Does French Polishing Take?
            </h2>
            <p className="text-white text-lg mb-4">
              French polishing typically takes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white text-lg ml-4 mb-6">
              <li>2–5 days for small pieces</li>
              <li>1–2 weeks for medium to large furniture</li>
              <li>2–3 weeks for pianos and high-value antiques</li>
            </ul>
            <p className="text-white text-lg italic">
              The timeline depends on preparation, wood type, condition, and
              detail. The result, however, is a luxurious, long-lasting,
              mirror-like finish that makes the time investment completely
              worthwhile.
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
              Ready to Start Your French Polishing Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              While French polishing takes time, the result is a stunning,
              long-lasting finish that enhances the beauty of your furniture for
              decades. Our experienced craftsmen will work with you to provide
              realistic timelines and deliver exceptional results.
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
              href="/blogs/Is-French-polish-the-same-as-shellac"
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
                <p className="font-semibold">Is French Polish the Same as Shellac?</p>
              </div>
            </Link>
            <Link
              href="/blogs/How-is-French-polishing-done"
              className="flex items-center text-[#E3A890] hover:text-[#D4A574] transition-colors duration-300 group"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Next</p>
                <p className="font-semibold">How is French Polishing Done?</p>
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

