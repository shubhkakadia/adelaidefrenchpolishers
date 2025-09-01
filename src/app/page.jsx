"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import NewsletterPopup from "@/components/newsLetterPopup";
import Script from "next/script";
import Head from "next/head";
// adel_french_polishers15_900x
const slide1 = "/assets/gallery media/adel french pol1.jpg";
const slide2 = "/assets/gallery media/adel french pol7.jpg";
const slide3 = "/assets/gallery media/adel_french_polishers15_900x.webp";
const RepairRestoration = "/assets/RepairRestoration.png";
const ModernFinishes = "/assets/ModernFinishes.png";
const FrenchPolishing = "/assets/FrenchPolishing.png";

export default function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [interaction, setInteraction] = useState(false);

  // Show the popup after 10 seconds of user interaction
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

  const services = [
    {
      title: "Repairs and Restoration",
      description:
        "We can restore a variety of antique and modern furniture, bringing it back to its original condition. Traditional methods are used on antiques to respect the integrity of their workmanship whilst our spray booths allow us to produce excellent painted and lacquered finishes on more modern pieces.",
      subText:
        "We can repair damaged timber furniture as well as provide a service to re upholster, fit new mirrors or glass and arrange new fixtures such as handles.",
      image: RepairRestoration,
      delay: 0,
    },
    {
      title: "Modern Finishes",
      description:
        "Sometimes all your tired, used furniture needs is a new coat of paint. Our high quality spray finish can give your furniture a new lease of life and make it a standout piece once again. Used on furniture, kitchens, bathrooms and robes:",
      bulletPoints: [
        "Two pack (satin or gloss)",
        "Water based coatings",
        "Metallic finishes",
      ],
      image: ModernFinishes,
      delay: 200,
    },
    {
      title: "French Polishing",
      description:
        "French polish is a process, not a material, and is often used to finish antique or valuable items such as pianos, staircases and antique chests of drawers. The finish is considered to be one of the most beautiful ways to finish highly figured wood.",
      subText:
        "It is softer than modern varnishes and lacquers and is particularly sensitive to spills of water or alcohol, which can produce white cloudy marks. It is, however, simpler to repair than a damaged varnish finish, as patch repairs to French Polish may be easily blended into an existing finish.",
      image: FrenchPolishing,
      delay: 400,
    },
  ];

  const images = [slide1, slide2, slide3];
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarCollapsed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>
          Adelaide French Polishers – Expert Furniture Restoration & French
          Polishing Services | South Australia
        </title>
        <meta
          name="description"
          content="Professional furniture restoration and French polishing services across South Australia. Expert repair, refinishing, and restoration of antique and modern furniture since 1971. Serving Adelaide, Mount Gambier, Whyalla, Port Augusta, and regional SA."
        />
        <meta
          name="keywords"
          content="french polishing adelaide, furniture restoration south australia, antique furniture repair, timber furniture refinishing, spray finishes adelaide, french polishing mount gambier, furniture restoration whyalla, port augusta french polishing, port pirie furniture restoration, murray bridge french polishing, port lincoln furniture services, gawler french polishing, victor harbor furniture restoration, coober pedy french polishing, roxby downs furniture services, ceduna french polishing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Adelaide French Polishers – Expert Furniture Restoration & French Polishing Services"
        />
        <meta
          property="og:description"
          content="Professional furniture restoration and French polishing services across South Australia. Expert craftsmanship since 1971."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adelaidefrenchpolishers.com.au/"
        />
        <meta
          property="og:image"
          content="https://adelaidefrenchpolishers.com.au/assets/AFP_Logo2_800x_no_bg.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Adelaide French Polishers – Expert Furniture Restoration"
        />
        <meta
          name="twitter:description"
          content="Professional furniture restoration and French polishing services across South Australia."
        />
        <meta
          name="twitter:image"
          content="https://adelaidefrenchpolishers.com.au/assets/AFP_Logo2_800x_no_bg.png"
        />
        <link rel="canonical" href="https://adelaidefrenchpolishers.com.au/" />
        <meta name="geo.region" content="AU-SA" />
        <meta name="geo.placename" content="Glynde, South Australia" />
        <meta
          name="geo.position"
          content="-34.89526457295504;138.65071147648075"
        />
        <meta name="ICBM" content="-34.89526457295504, 138.65071147648075" />
      </Head>
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
      {showPopup && (
        <NewsletterPopup
          onClose={() => setShowPopup(false)}
          onSubmit={() => setShowPopup(false)}
        />
      )}
      <div className="relative h-screen">
        <Navbar isCollapsed={isNavbarCollapsed} />
        <div className="absolute inset-0">
          <Carousel images={images} />
        </div>
      </div>

      <div className="flex justify-center items-center h-screen">
        <section className="hero-section space-y-14">
          <h1
            data-aos="fade-up"
            className="text-xl text-center font-bold text-[#E3A890] text-shadow fade-in-down md:text-5xl px-4"
          >
            Adelaide French Polishers – Expert Furniture Restoration & French
            Polishing Services
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="1000"
            className="text-l text-center font-bold text-gray-600 text-shad fade-in-down md:text-3xl"
          >
            Restore Your Furniture’s Former Glory with Adelaide’s Leading
            Restoration Experts
          </h2>
        </section>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <p
          data-aos="fade-up"
          className="md:w-[75%] w-[90%] text-center text-lg font-medium mb-16 md:text-2xl"
          data-aos-delay="300"
        >
          Whether it's restoring cherished family heirlooms, repairing damaged
          timber furniture, or refinishing antique pieces, Adelaide French
          Polishers delivers expert craftsmanship and attention to detail. Our
          team specialises in premium French polishing, modern spray finishes,
          and complete furniture restoration across Adelaide and nearby.
        </p>
        <div className="md:w-[60%] w-[75%] flex flex-col md:flex-row justify-center items-start md:space-x-10 space-y-14 md:space-y-0">
          <p
            data-aos="fade-up"
            className="text-center md:text-lg text-sm text-gray-400"
            data-aos-delay="600"
          >
            The team at Adelaide French Polishers pride ourselves on
            personalised service. You have direct access to the owner of the
            business, who will be across your job from start to finish. Quality
            is our primary focus, but also making sure that your piece of
            furniture, whether it be old or new, gets the attention it deserves.
          </p>
          <p
            data-aos="fade-up"
            className="text-center md:text-lg text-sm text-gray-400"
            data-aos-delay="1000"
          >
            We take the time to correctly assess your piece for the work
            required. We use quality materials without taking shortcuts.
            Sometimes this can take time, but our facility in Glynde can handle
            any type of work and ensures you get your furniture back in the best
            shape, in the fastest time possible.
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-white py-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={service.image}
                  alt={`Adelaide French Polishers - ${service.title} example`}
                  width={300}
                  height={300}
                  className="md:w-[50%] w-[75%] h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="w-[90%] md:w-1/2 space-y-4 text-center">
                <h2 className="text-3xl font-bold text-gray-600">
                  {service.title}
                </h2>
                <p className="text-md text-gray-400">{service.description}</p>
                {service.bulletPoints && (
                  <ul className="list-disc pl-5 text-gray-400 space-y-2 text-left">
                    {service.bulletPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
                {service.subText && (
                  <p className="text-gray-400 mt-4">{service.subText}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen px-4">
        {/* Upper Text */}
        <p
          data-aos="fade-up"
          className="md:w-[75%] w-[90%] text-center md:text-2xl text-lg font-medium mb-32 text-[#E3a890]"
          data-aos-delay="300"
        >
          We provide large-scale commercial furniture restoration for
          businesses, government agencies, schools, and churches across
          Adelaide. Contact us for bulk restoration projects or ongoing
          maintenance contracts tailored to your needs.
        </p>
      </div>

      <Script id="structured-data" type="application/ld+json">
        {`
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adelaide French Polishers",
    "image": "https://adelaidefrenchpolishers.com.au/assets/AFP_Logo2_800x_no_bg.png",
    "description": "Professional furniture restoration and French polishing services across South Australia. Expert repair, refinishing, and restoration of antique and modern furniture since 1971.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "24 Sunbeam Rd",
      "addressLocality": "Glynde",
      "addressRegion": "SA",
      "postalCode": "5070",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.89526457295504,
      "longitude": 138.65071147648075
    },
    "url": "https://adelaidefrenchpolishers.com.au/",
    "telephone": "+61881653886",
    "email": "admin@adelaidefrenchpolishers.com.au",
    "priceRange": "$$",
    "foundingDate": "1971",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -34.89526457295504,
        "longitude": 138.65071147648075
      },
      "geoRadius": "50000"
    },
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
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Furniture Restoration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "French Polishing",
            "description": "Traditional French polishing for antique furniture, pianos, and staircases"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Restoration",
            "description": "Complete restoration of antique and modern furniture including repairs and refinishing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Modern Finishes",
            "description": "Two-pack, water-based, and metallic spray finishes for modern furniture"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Moving",
            "description": "Professional furniture moving and delivery services across South Australia"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "15"
    }
  }
`}
      </Script>
    </div>
  );
}
