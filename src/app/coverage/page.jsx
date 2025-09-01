"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/navbar";
import NewsletterPopup from "@/components/newsLetterPopup";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Coverage() {
  const [showPopup, setShowPopup] = useState(false);
  const [interaction, setInteraction] = useState(false);
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);

  const data = [
    {
      title: "Adelaide",
      locations: ["Adelaide CBD", "All Metropolitan Suburbs"],
      description: "Metropolitan Adelaide and surrounding suburbs",
    },
    {
      title: "Mount Gambier",
      locations: [
        "Mount Gambier",
        "Port MacDonnell",
        "Millicent",
        "Glenburnie",
        "Suttontown",
      ],
      description: "South East region of South Australia",
    },
    {
      title: "Whyalla",
      locations: [
        "Whyalla",
        "Whyalla Norrie",
        "Whyalla Stuart",
        "Whyalla Playford",
      ],
      description: "Upper Spencer Gulf region",
    },
    {
      title: "Port Augusta",
      locations: ["Port Augusta", "Port Augusta West", "Stirling North"],
      description: "Gateway to the Outback",
    },
    {
      title: "Port Pirie",
      locations: ["Port Pirie", "Solomontown", "Risdon Park", "Napier"],
      description: "Spencer Gulf coastal region",
    },
    {
      title: "Murray Bridge",
      locations: ["Murray Bridge", "Mobilong", "Callington", "Tailem Bend"],
      description: "Murray River region",
    },
    {
      title: "Port Lincoln",
      locations: ["Port Lincoln", "North Shields", "Tiatukia"],
      description: "Eyre Peninsula coastal area",
    },
    {
      title: "Gawler",
      locations: ["Gawler", "Evanston", "Willaston", "Hewett"],
      description: "Northern Adelaide region",
    },
    {
      title: "Victor Harbor",
      locations: ["Victor Harbor", "Encounter Bay", "McCracken", "Hayborough"],
      description: "Fleurieu Peninsula",
    },
    {
      title: "Coober Pedy",
      locations: ["Coober Pedy", "Opal Fields Area"],
      description: "Outback opal mining region",
    },
    {
      title: "Roxby Downs",
      locations: ["Roxby Downs", "Olympic Dam"],
      description: "Mining and industrial region",
    },
    {
      title: "Ceduna",
      locations: ["Ceduna", "Thevenard", "Kalanbi"],
      description: "West Coast region",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!interaction) {
        setInteraction(true);
        setTimeout(() => {
          setShowPopup(true);
        }, 10000);
      }
    };

    window.addEventListener("mousemove", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [interaction]);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Head>
        <title>
          Coverage Areas | French Polishing Services Adelaide & South Australia
        </title>
        <meta
          name="description"
          content="Professional French polishing services across South Australia. We cover Adelaide, Mount Gambier, Whyalla, Port Augusta, Port Pirie, Murray Bridge, Port Lincoln, Gawler, Victor Harbor, Coober Pedy, Roxby Downs, Ceduna and Broken Hill. Free quotes available."
        />
        <meta
          name="keywords"
          content="French polishing Adelaide, furniture restoration South Australia, French polishing Mount Gambier, Whyalla French polishing, Port Augusta furniture restoration, Port Pirie French polishing, Murray Bridge furniture services, Port Lincoln French polishing, Gawler furniture restoration, Victor Harbor French polishing, Coober Pedy furniture services, Roxby Downs French polishing, Ceduna furniture restoration, Broken Hill French polishing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Coverage Areas | French Polishing Services Adelaide & South Australia"
        />
        <meta
          property="og:description"
          content="Professional French polishing services across South Australia. We cover Adelaide, Mount Gambier, Whyalla, Port Augusta, Port Pirie, Murray Bridge, Port Lincoln, Gawler, Victor Harbor, Coober Pedy, Roxby Downs, Ceduna and Broken Hill. Free quotes available."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/coverage"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Coverage Areas | French Polishing Services Adelaide & South Australia"
        />
        <meta
          name="twitter:description"
          content="Professional French polishing services across South Australia. We cover Adelaide, Mount Gambier, Whyalla, Port Augusta, Port Pirie, Murray Bridge, Port Lincoln, Gawler, Victor Harbor, Coober Pedy, Roxby Downs, Ceduna and Broken Hill. Free quotes available."
        />
        <link
          rel="canonical"
          href="https://adelaidefrenchpolishers.com.au/coverage"
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
        <Script id="structured-data" type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "French Polishing Services",
            "description": "Professional French polishing and furniture restoration services across South Australia",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Adelaide French Polishers",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Adelaide"
                },
                {
                  "@type": "City", 
                  "name": "Mount Gambier"
                },
                {
                  "@type": "City",
                  "name": "Whyalla"
                },
                {
                  "@type": "City",
                  "name": "Port Augusta"
                },
                {
                  "@type": "City",
                  "name": "Port Pirie"
                },
                {
                  "@type": "City",
                  "name": "Murray Bridge"
                },
                {
                  "@type": "City",
                  "name": "Port Lincoln"
                },
                {
                  "@type": "City",
                  "name": "Gawler"
                },
                {
                  "@type": "City",
                  "name": "Victor Harbor"
                },
                {
                  "@type": "City",
                  "name": "Coober Pedy"
                },
                {
                  "@type": "City",
                  "name": "Roxby Downs"
                },
                {
                  "@type": "City",
                  "name": "Ceduna"
                },
                {
                  "@type": "City",
                  "name": "Broken Hill"
                }
              ]
            },
            "serviceArea": {
              "@type": "State",
              "name": "South Australia"
            }
          }
        `}
        </Script>
      </Head>

      {showPopup && (
        <NewsletterPopup
          onClose={() => setShowPopup(false)}
          onSubmit={() => setShowPopup(false)}
        />
      )}

      <Navbar isCollapsed={isNavbarCollapsed} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E3A890] to-[#D4A574] opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <header data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="text-[#E3A890]">Coverage</span> Areas
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Serving South Australia with professional French polishing
              services from Adelaide to regional areas
            </p>
          </header>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-[#E3A890] mb-2">
                  13+
                </div>
                <div className="text-gray-600">Major Regions</div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-[#E3A890] mb-2">
                  50+
                </div>
                <div className="text-gray-600">Localities Covered</div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-[#E3A890] mb-2">
                  100%
                </div>
                <div className="text-gray-600">Service Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas Grid */}
      <main className="container mx-auto px-4 py-16">
        <h2 className="sr-only">Coverage Areas in South Australia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <CoverageCard
              key={item.title}
              title={item.title}
              locations={item.locations}
              description={item.description}
              delay={index * 100}
            />
          ))}
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#E3A890] to-[#D4A574] py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Restore Your Furniture?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. We service all
              areas listed above and beyond.
            </p>
            <a
              href="/contactus"
              className="inline-block bg-white text-[#E3A890] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              aria-label="Get a free quote for French polishing services"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function CoverageCard({ title, locations, description, delay }) {
  return (
    <article
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 overflow-hidden relative"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#E3A890] transition-colors duration-300">
            {title}
          </h3>
        </header>

        <p className="text-gray-600 text-sm mb-4 italic">{description}</p>

        <div className="space-y-2">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex items-center text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300"
            >
              <div className="w-2 h-2 bg-[#E3A890] rounded-full mr-3 flex-shrink-0"></div>
              <span>{location}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E3A890]/5 to-[#D4A574]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </article>
  );
}
