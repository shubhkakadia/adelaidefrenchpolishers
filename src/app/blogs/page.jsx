"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const blogs = [
  {
    title: "How is French Polishing Done?",
    slug: "How-is-French-polishing-done",
    readTime: "9 min",
    preview:
      "French polishing is a traditional wood finishing technique known for creating a deep, glossy, mirror-like shine. Unlike modern finishes that rely on heavy coatings, French polishing enhances the natural beauty of timber using shellac applied in thin, controlled layers.",
  },
  {
    title: "How Difficult is French Polishing?",
    slug: "How-difficult-is-French-polishing",
    readTime: "7 min",
    preview:
      "French polishing is considered one of the most challenging and skill-intensive wood finishing techniques. While the materials themselves are simple — shellac, alcohol, oil, and a polishing pad — the difficulty lies in the precision, timing, and craftsmanship required.",
  },
  {
    title: "What are the Advantages of French Polishing?",
    slug: "What-are-the-advantages-of-French-polishing",
    readTime: "8 min",
    preview:
      "French polishing is one of the most premium and traditional wood finishing methods ever developed. Known for its deep, glass-like shine, it enhances the natural beauty of timber in a way that modern finishes cannot fully replicate.",
  },
  {
    title: "What do you need for French Polishing?",
    slug: "What-do-you-need-for-French-polishing",
    readTime: "7 min",
    preview:
      "French polishing is a traditional, skill-based finishing technique that uses shellac applied in thin, repeated layers to achieve a deep, glossy, mirror-like finish. Although the process is detailed and time-consuming, the materials required are surprisingly simple.",
  },
  {
    title: "Is French Polishing Worth It?",
    slug: "Is-French-polishing-worth-it",
    readTime: "8 min",
    preview:
      "French polishing is known for producing one of the most beautiful and luxurious wood finishes ever developed. It creates a deep, glassy, mirror-like sheen that enhances the natural character of fine timber.",
  },
  {
    title: "What Alcohol is Best for French Polishing?",
    slug: "What-alcohol-is-best-for-French-polishing",
    readTime: "6 min",
    preview:
      "Alcohol is a key ingredient in French polishing because it dissolves shellac flakes and helps the finish dry quickly and evenly. But not all alcohols are the same, and choosing the right type can make a noticeable difference in the clarity, smoothness, and final quality of the polish.",
  },
  {
    title: "Is French Polish the Same as Shellac?",
    slug: "Is-French-polish-the-same-as-shellac",
    readTime: "6 min",
    preview:
      "French polish and shellac are closely related, but they are not the same thing. Many people confuse the two because shellac is the main ingredient used in French polishing. However, French polishing is actually a technique, while shellac is a material.",
  },
  {
    title: "How Long Does French Polishing Take?",
    slug: "How-long-does-French-polishing-take",
    readTime: "7 min",
    preview:
      "French polishing is known for its beautiful, mirror-like finish — but it's also one of the most time-consuming wood finishing techniques. Unlike modern spray or brush-on coatings, French polishing is done entirely by hand, building up dozens of thin layers of shellac over several sessions.",
  },
];

export default function BlogsPage() {
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
        <title>Blogs | Adelaide French Polishers</title>
        <meta
          name="description"
          content="Explore our comprehensive guides on French polishing, furniture restoration, and wood finishing techniques. Learn everything you need to know about this traditional craft."
        />
        <meta
          name="keywords"
          content="french polishing blog, furniture restoration guides, wood finishing articles, french polishing tips, furniture care advice"
        />
      </Head>

      <Navbar isCollapsed={isNavbarCollapsed} />

      <main className="pt-32 px-4 md:px-8 lg:px-20 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="text-center mb-16 max-w-4xl mx-auto">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E3A890] mb-6"
          >
            French Polishing Blog
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Discover everything you need to know about French polishing, from
            techniques and materials to advantages and expert tips. Our
            comprehensive guides help you understand this traditional craft.
          </p>
        </section>

        {/* Blog Cards Grid */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-[#E3A890] group cursor-pointer">
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Read Time Badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E3A890]/10 text-[#E3A890] text-xs font-medium">
                        <svg
                          className="w-3 h-3 mr-1.5"
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
                        {blog.readTime} read
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#E3A890] transition-colors duration-300">
                      {blog.title}
                    </h2>

                    {/* Preview */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow mb-4 line-clamp-3">
                      {blog.preview}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center text-[#E3A890] font-semibold text-sm mt-auto group-hover:translate-x-2 transition-transform duration-300">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
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
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
