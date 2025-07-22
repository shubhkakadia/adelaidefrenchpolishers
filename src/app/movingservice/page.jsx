"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NewsletterPopup from "@/components/newsLetterPopup";
import Script from "next/script";

const vanImage = "/assets/IMG_7378.jpg"; // Replace with your actual image path

export default function MovingService() {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [interaction, setInteraction] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!interaction) {
        setInteraction(true);
        setTimeout(() => {
          setShowPopup(true);
        }, 10000); // Show popup after 10 seconds of interaction
      }
    };

    // Add event listeners for user interactions
    window.addEventListener("mousemove", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      // Clean up event listeners
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [interaction]);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarCollapsed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Furniture Moving Services | Adelaide French Polishers</title>
        <meta
          name="description"
          content="Adelaide French Polishers now offers reliable furniture moving services with our large van. Perfect for relocations, deliveries, and furniture transport. Book now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      {showPopup && (
        <NewsletterPopup
          onClose={() => setShowPopup(false)}
          onSubmit={() => setShowPopup(false)}
        />
      )}

      <Navbar isCollapsed={isNavbarCollapsed} />

      <main className="pt-32 px-6 md:px-20 text-gray-800  min-h-screen">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E3A890]">
            Furniture Moving Services in Adelaide
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We now offer secure and reliable furniture moving services using our
            spacious van. Whether you're relocating, picking up newly restored
            furniture, or need delivery—we've got you covered.
          </p>
        </section>

        {/* Van Image */}
        <section className="flex justify-center mb-12">
          <Image
            src={vanImage}
            alt="Adelaide French Polishers moving van"
            width={800}
            height={500}
            className="rounded-xl shadow-lg"
            loading="lazy"
          />
        </section>

        {/* Highlights / Benefits */}
        <section className="max-w-4xl mx-auto mb-20 px-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              text: "Spacious van for large and delicate furniture pieces",
            },
            {
              text: "Handled by experienced professionals",
            },
            {
              text: "Local moves, pick-up & drop-off, and delivery included",
            },
            {
              text: "Ideal for homes, offices, or commercial spaces",
            },
            {
              text: "Flexible scheduling to suit your convenience",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start bg-white rounded-lg shadow-md p-4 gap-4 border border-gray-100 hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-700 text-md md:text-lg">{item.text}</p>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to move or deliver your furniture?
          </h2>
          <p className="mb-6 text-gray-600">
            Click below to contact us for pricing or to book our moving service.
          </p>
          <Link href="/contactus">
            <button className="bg-[#E3A890] text-white px-6 py-3 rounded-lg hover:opacity-90 transition cursor-pointer">
              Contact Us for a Quote
            </button>
          </Link>
        </section>
      </main>
      <Script id="moving-service-schema" type="application/ld+json">
        {`
  {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Adelaide French Polishers - Furniture Moving Services",
    "description": "Professional furniture moving, transport, and delivery services in Adelaide",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Adelaide French Polishers",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "24 Sunbeam Rd",
        "addressLocality": "Glynde",
        "addressRegion": "SA",
        "postalCode": "5070",
        "addressCountry": "AU"
      },
      "telephone": "+61881653886",
      "url": "https://adelaidefrenchpolishers.com.au",
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -34.89526457295504,
        "longitude": 138.65071147648075
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Furniture Moving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Furniture Moving",
            "description": "Local furniture relocation services within Adelaide metropolitan area"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Delivery",
            "description": "Safe delivery of restored furniture to customer locations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Pickup",
            "description": "Professional pickup service for furniture requiring restoration"
          }
        }
      ]
    },
    "vehicleType": "Van",
    "serviceType": [
      "Furniture Moving",
      "Furniture Delivery", 
      "Furniture Transport",
      "Local Relocation"
    ]
  }
`}
      </Script>
    </>
  );
}
