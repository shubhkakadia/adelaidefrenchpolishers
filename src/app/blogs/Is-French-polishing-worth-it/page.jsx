"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

export default function IsFrenchPolishingWorthIt() {
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
          Is French Polishing Worth It? | Adelaide French Polishers
        </title>
        <meta
          name="description"
          content="Discover why French polishing is worth the investment - from unmatched beauty and depth to easy repairs and value enhancement for antique and quality furniture."
        />
        <meta
          name="keywords"
          content="is french polishing worth it, french polishing value, french polishing cost, french polishing benefits, worth french polishing furniture, french polishing investment"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Is French Polishing Worth It? | Adelaide French Polishers"
        />
        <meta
          property="og:description"
          content="Learn why French polishing is worth the investment, especially for valuable, antique, or high-quality furniture pieces."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/blogs/Is-French-polishing-worth-it"
        />
        <link
          rel="canonical"
          href="https://adelaidefrenchpolishers.com.au/blogs/Is-French-polishing-worth-it"
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
            Is French Polishing Worth It?
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
            French polishing is known for producing one of the most beautiful and
            luxurious wood finishes ever developed. It creates a deep, glassy,
            mirror-like sheen that enhances the natural character of fine timber.
            But because the process is time-consuming and skilled, many people
            wonder: Is French polishing really worth it?
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-[#E3A890] font-semibold mt-4"
          >
            The short answer: Yes — especially for valuable, antique, or
            high-quality furniture.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4"
          >
            Here's why.
          </p>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto prose prose-lg">
          {/* Reason 1: Unmatched Results */}
          <section
            data-aos="fade-up"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              1. The Results Are Unmatched
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing offers a level of beauty, depth, and clarity that
              modern finishes simply cannot replicate.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why it stands out:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Creates a rich, high-gloss finish</li>
              <li>Shows off the natural grain of the timber</li>
              <li>Gives furniture a luxurious, handcrafted look</li>
              <li>Provides a warm, elegant character</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              If your furniture is made from high-quality timber or has
              sentimental value, the finish alone makes it worth the investment.
            </p>
          </section>

          {/* Reason 2: Perfect for Antiques */}
          <section
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              2. Perfect for Antique & Heritage Furniture
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing is the traditional finish used for centuries on
              antique furniture, pianos, and fine woodworking.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Benefits for antiques:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Preserves historical authenticity</li>
              <li>Maintains original craftsmanship</li>
              <li>Avoids heavy plastic-like coatings</li>
              <li>Keeps the value of antique pieces</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              If you own heirloom or antique furniture, French polishing is the
              most respectful and accurate restoration method.
            </p>
          </section>

          {/* Reason 3: Easy Repairs */}
          <section
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              3. Repairs Are Easy and Cost-Effective
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Unlike varnish or polyurethane that require complete stripping to
              fix damage, French-polished surfaces can be repaired without
              removing the entire finish.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why this matters:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Scratches can be blended out</li>
              <li>Small areas can be touched up</li>
              <li>The shine can be revived easily</li>
              <li>Long-term maintenance is simple</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              This means the finish lasts for decades with minimal intervention —
              saving money in the long run.
            </p>
          </section>

          {/* Reason 4: Brings Furniture Back to Life */}
          <section
            data-aos="fade-up"
            data-aos-delay="300"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              4. It Brings Tired Furniture Back to Life
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing does more than add shine — it enhances the colour,
              grain, and warmth of timber.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              It can transform furniture that is:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Faded</li>
              <li>Scratched</li>
              <li>Dull</li>
              <li>Sun-damaged</li>
              <li>Dry or uneven</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Many customers are surprised at how new and vibrant their old
              timber looks after polishing.
            </p>
          </section>

          {/* Reason 5: Safe and Natural */}
          <section
            data-aos="fade-up"
            data-aos-delay="400"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              5. Safe, Natural, and Eco-Friendly
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing uses shellac, a natural resin, mixed with alcohol.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Advantages:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Non-toxic</li>
              <li>Low environmental impact</li>
              <li>Safe once cured</li>
              <li>Ideal for indoor surfaces</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              If you prefer traditional, sustainable finishing methods, this is a
              major benefit.
            </p>
          </section>

          {/* Reason 6: Adds Value */}
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              6. It Adds Value to Quality Furniture
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Because the finish is premium and labour-intensive, French polishing
              can increase the overall value and appeal of fine furniture.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              It is especially worthwhile for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Mahogany</li>
              <li>Walnut</li>
              <li>Rosewood</li>
              <li>Cedar</li>
              <li>Antique cabinets, pianos, tables, and desks</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Pieces made from these woods look significantly better with a
              French-polished finish.
            </p>
          </section>

          {/* Reason 7: Handcrafted Finish */}
          <section
            data-aos="fade-up"
            data-aos-delay="600"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              7. A Handcrafted, Artisan Finish
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing is done entirely by hand, giving each piece a
              unique, bespoke character.
            </p>
            <p className="text-gray-700 text-lg mb-4">You get:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>A flawless surface</li>
              <li>A personalised finish</li>
              <li>
                A level of craftsmanship modern sprays cannot imitate
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              It's not just a coating — it's a work of art.
            </p>
          </section>

          {/* Conclusion */}
          <section
            data-aos="fade-up"
            data-aos-delay="700"
            className="mb-16 bg-gradient-to-r from-[#E3A890] to-[#D4A574] rounded-lg p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              So, Is French Polishing Worth It?
            </h2>
            <p className="text-white text-lg mb-4">
              French polishing is absolutely worth it if:
            </p>
            <ul className="list-none space-y-2 text-white text-lg ml-4 mb-6">
              <li className="flex items-start">
                <span className="text-white mr-3 font-bold">✔</span>
                <span>
                  Your furniture is antique or made from quality timber
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 font-bold">✔</span>
                <span>You want a luxurious, mirror-like finish</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 font-bold">✔</span>
                <span>
                  You prefer natural, repairable, handcrafted techniques
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 font-bold">✔</span>
                <span>
                  You want to restore the original beauty of an old piece
                </span>
              </li>
            </ul>
            <p className="text-white text-lg italic">
              While it costs more than modern spray finishes, the results,
              longevity, and craftsmanship make it one of the most valuable
              timber restoration methods available.
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
              Invest in Premium French Polishing for Your Furniture
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the unmatched beauty and value that French polishing
              brings to your furniture. Our expert craftsmen deliver
              handcrafted finishes that enhance the natural beauty of your
              treasured pieces for decades to come.
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
              href="/blogs/What-do-you-need-for-French-polishing"
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
                <p className="font-semibold">What do you need for French Polishing?</p>
              </div>
            </Link>
            <Link
              href="/blogs/What-alcohol-is-best-for-French-polishing"
              className="flex items-center text-[#E3A890] hover:text-[#D4A574] transition-colors duration-300 group"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Next</p>
                <p className="font-semibold">What Alcohol is Best for French Polishing?</p>
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

