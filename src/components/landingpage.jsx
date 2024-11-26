import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
// import slide1 from "../assets/adelaidefrenchpolishers301_large.webp";
import slide2 from "../assets/IMG_E7393.png";
import slide3 from "../assets/gallery media/adel_french_polishers6_480x480.webp";
import slide4 from "../assets/IMG_7388 - after.png";
import Carousel from "./carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import RepairRestoration from "../assets/RepairRestoration.png";
import ModernFinishes from "../assets/ModernFinishes.png";
import FrenchPolishing from "../assets/FrenchPolishing.png";

export default function Landingpage() {
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
        "Metallic",
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

  const images = [slide2, slide3, slide4];
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation triggers only once
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
    <div>
      <div className="relative h-screen">
        {/* Navbar */}
        <Navbar isCollapsed={isNavbarCollapsed} />

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 h-full bg-gradient-to-b from-black opacity-40 z-[1]"></div> */}

        {/* Fullscreen Background Image */}
        <div className="absolute inset-0">
          <Carousel images={images} />
        </div>
      </div>

      {/* TAG */}
      <div className="flex justify-center items-center h-screen">
        <span
          data-aos="fade-up"
          className="text-xl text-center font-bold text-theme text-shad fade-in-down md:text-5xl"
        >
          Furniture restoration is not just about fixing something that is
          broken.
        </span>
      </div>

      {/* Full-page Text Section */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Upper Text */}
        <p
          data-aos="fade-up"
          className="md:w-[75%] w-[90%] text-center text-lg font-medium mb-32 md:text-2xl"
          data-aos-delay="300"
        >
          If you’re looking to repair some household furniture, an old family
          heirloom, or even reclaiming some of that old used furniture in the
          shed - it's important to make sure you get quality service and advice.
        </p>

        {/* Bottom Row (Left and Right Columns) */}
        <div className="md:w-[60%] w-[75%] flex flex-col md:flex-row justify-center items-start md:space-x-10 space-y-14 md:space-y-0">
          {/* Left Column */}
          <p
            data-aos="fade-up"
            className="md:text-center md:text-lg text-sm text-themegrey text-left"
            data-aos-delay="600"
          >
            The team at Adelaide French Polishers pride ourselves on
            personalised service. You have direct access to the owner of the
            business, who will be across your job from start to finish. Quality
            is our primary focus, but also making sure that your piece of
            furniture, whether it be old or new, gets the attention it deserves.
          </p>

          {/* Right Column */}
          <p
            data-aos="fade-up"
            className="text-left md:text-center md:text-lg text-sm text-themegrey"
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

      <div className="min-h-screen bg-white py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              {/* Image */}
              <div
                
                className="w-full md:w-1/2 flex justify-center"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="md:w-[50%] w-[75%] h-auto rounded-3xl shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="w-[90%] md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold text-gray-600">
                  {service.title}
                </h2>
                <p className="text-md text-gray-400">{service.description}</p>

                {service.bulletPoints && (
                  <ul className="list-disc pl-5 text-gray-400 space-y-2">
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
          className="md:w-[75%] w-[90%] text-center md:text-2xl text-lg font-medium mb-32"
          data-aos-delay="300"
        >
          If you are a medium to large business, government organisation, school
          or Church, we can do commercial repairs and restoration in large
          volumes.
        </p>
      </div>
    </div>
  );
}
