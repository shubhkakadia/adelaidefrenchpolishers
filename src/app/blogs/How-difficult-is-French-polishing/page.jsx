"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

export default function HowDifficultIsFrenchPolishing() {
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
          How Difficult is French Polishing? | Adelaide French Polishers
        </title>
        <meta
          name="description"
          content="French polishing is considered one of the most challenging and skill-intensive wood finishing techniques. Learn why it requires years of experience and precision craftsmanship."
        />
        <meta
          name="keywords"
          content="french polishing difficulty, how hard is french polishing, french polishing skills, professional french polishing, french polishing expertise, wood finishing challenges"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="How Difficult is French Polishing? | Adelaide French Polishers"
        />
        <meta
          property="og:description"
          content="Discover why French polishing is considered one of the most challenging wood finishing techniques and why it requires skilled professionals."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/blogs/How-difficult-is-French-polishing"
        />
        <link
          rel="canonical"
          href="https://adelaidefrenchpolishers.com.au/blogs/How-difficult-is-French-polishing"
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
            How Difficult is French Polishing?
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
            French polishing is considered one of the most challenging and
            skill-intensive wood finishing techniques. While the materials
            themselves are simple — shellac, alcohol, oil, and a polishing pad —
            the difficulty lies in the precision, timing, and craftsmanship
            required to achieve a flawless, mirror-like finish. Even experienced
            furniture restorers take years to master it.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4"
          >
            If you're wondering why French polishing is known as a specialist
            trade, here's everything you need to know.
          </p>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto prose prose-lg">
          {/* Section 1: High Level of Skill */}
          <section
            data-aos="fade-up"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              1. It Requires a High Level of Skill and Control
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              French polishing is not a "brush-on, leave-to-dry" type of finish.
              It involves hundreds of careful hand movements performed in the
              right pattern and pressure.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              What makes it difficult?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>
                The polishing pad must glide smoothly without leaving streaks.
              </li>
              <li>Pressure must be controlled at all times.</li>
              <li>
                The shellac must be applied in ultra-thin, even layers.
              </li>
              <li>
                Any hesitation or incorrect stroke becomes instantly visible.
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              This level of precision is why professionals typically spend years
              refining their technique.
            </p>
          </section>

          {/* Section 2: Many Thin Layers */}
          <section
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              2. It Involves Many Thin Layers — Not One Thick Coat
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Unlike modern finishes (lacquer, polyurethane, varnish), French
              polishing is built up from dozens of ultra-thin layers.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              This requires:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Patience</li>
              <li>Consistency</li>
              <li>Time</li>
              <li>
                An understanding of how each layer interacts with the previous
                one
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Missing just one stage — such as not filling grain properly or
              applying too much shellac — can ruin the entire finish.
            </p>
          </section>

          {/* Section 3: Timing Is Critical */}
          <section
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              3. Timing Is Critical
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Shellac dries quickly, which is both a benefit and a challenge.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Timing issues include:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>
                If the pad is too dry → it drags and leaves marks
              </li>
              <li>If it's too wet → it floods the surface</li>
              <li>
                If applied too soon → it re-dissolves the earlier layers
              </li>
              <li>
                If left too long → the surface may become uneven or dull
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              This balance of speed and precision takes practice to master.
            </p>
          </section>

          {/* Section 4: Wood Type Changes Technique */}
          <section
            data-aos="fade-up"
            data-aos-delay="300"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              4. The Wood Type Changes the Technique
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Every timber behaves differently.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Examples:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>
                <strong>Mahogany and walnut:</strong> Pores need filling, or the
                finish looks uneven
              </li>
              <li>
                <strong>Pine:</strong> Soft and tricky; dents easily
              </li>
              <li>
                <strong>Maple:</strong> Hard and less absorbent
              </li>
              <li>
                <strong>Rosewood:</strong> Oily and needs special preparation
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Understanding wood behaviour is a key part of successful French
              polishing, and only experience teaches this.
            </p>
          </section>

          {/* Section 5: Spiriting Off */}
          <section
            data-aos="fade-up"
            data-aos-delay="400"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              5. "Spiriting Off" Is Especially Challenging
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The final stage — removing oil and refining the shine — is where
              many people make mistakes.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Common difficulties:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Over-spiriting can make the finish dull</li>
              <li>Insufficient spiriting leaves oily streaks</li>
              <li>
                Incorrect motion can remove layers instead of smoothing them
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Professionals often say this last step requires the most finesse.
            </p>
          </section>

          {/* Section 6: Repairs and Touch-Ups */}
          <section
            data-aos="fade-up"
            data-aos-delay="500"
            className="mb-12 bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E3A890] mb-6">
              6. Repairs and Touch-Ups Need Expertise
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              One advantage of shellac is that it is repairable — but repairing
              it well is another skill entirely.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Challenges include:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
              <li>Matching colour</li>
              <li>Blending new shellac into old layers</li>
              <li>Avoiding cloudy patches</li>
              <li>Restoring a uniform sheen</li>
            </ul>
            <p className="text-gray-700 text-lg mt-4 italic">
              Restorers often spend as much time mastering repairs as the
              initial polishing technique.
            </p>
          </section>

          {/* Conclusion */}
          <section
            data-aos="fade-up"
            data-aos-delay="600"
            className="mb-16 bg-gradient-to-r from-[#E3A890] to-[#D4A574] rounded-lg p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              So, Is French Polishing Difficult?
            </h2>
            <p className="text-white text-lg mb-4">
              Yes — French polishing is highly difficult, and that's exactly why
              the results are so admired. It's a craft that blends:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white text-lg ml-4 mb-6">
              <li>Technique</li>
              <li>Patience</li>
              <li>Experience</li>
              <li>A deep understanding of timber</li>
              <li>Hand-eye coordination</li>
              <li>Precision</li>
            </ul>
            <p className="text-white text-lg italic">
              For this reason, homeowners and antique collectors usually trust
              trained professionals to carry out French polishing rather than
              attempting it themselves.
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
              Trust the Experts for Your French Polishing Needs
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              With decades of experience and refined craftsmanship, our skilled
              professionals bring the precision and expertise needed to achieve
              that perfect French polish finish. Don't risk your treasured
              furniture — let our experts handle it.
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
              href="/blogs/How-is-French-polishing-done"
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
                <p className="font-semibold">How is French Polishing Done?</p>
              </div>
            </Link>
            <Link
              href="/blogs/What-are-the-advantages-of-French-polishing"
              className="flex items-center text-[#E3A890] hover:text-[#D4A574] transition-colors duration-300 group"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Next</p>
                <p className="font-semibold">What are the Advantages of French Polishing?</p>
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

