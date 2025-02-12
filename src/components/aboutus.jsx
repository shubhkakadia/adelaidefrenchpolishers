import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import steven from "../assets/Steven.png";
import furnitureicon from "../assets/Furniture.png";
import moneyicon from "../assets/Money.png";
import timeicon from "../assets/Time.png";

const AboutUs = () => {
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
    <div className="text-gray-800">
      {/* Navbar */}
      <Navbar isCollapsed={isNavbarCollapsed} />

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 h-[50%] bg-gradient-to-b from-themegrey opacity-30 z-[1]"></div> */}

      <section className="h-screen flex items-center justify-center px-8">
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-4xl text-center font-bold md:w-[75%] w-full text-theme z-[5]"
        >
          Established in 1971, Adelaide French Polishers is a second generation
          family business with a wealth of industry experience.
        </h2>
      </section>

      {/* Icons Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 md:px-32 space-y-16 bg-white">
        <p data-aos="fade-up" className="text-center md:text-2xl text-md mb-8">
          Our purpose-built workshop has state-of-the-art facilities to cater
          for any size job. Whether it be repairing a picture frame, polishing
          an entire dining suite, or a piano, we apply the same high standard.
          Our vision is simple; we aim to exceed each client’s expectation every
          time.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-y-0 md:space-x-20 space-y-14">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-col items-center text-center"
          >
            <img
              src={furnitureicon}
              alt="Quality Workmanship"
              className="w-auto h-12 mb-2"
            />
            <p className="font-semibold">Quality Workmanship</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="flex flex-col items-center text-center"
          >
            <img
              src={moneyicon}
              alt="Value for Money"
              className="w-auto h-12 mb-2"
            />
            <p className="font-semibold">Value for Money</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1500"
            className="flex flex-col items-center text-center"
          >
            <img
              src={timeicon}
              alt="Specific Turn Around Time"
              className="w-auto h-12 mb-2"
            />
            <p className="font-semibold">A specific turn around time</p>
          </div>
        </div>
      </section>

      {/* Photo and Text Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center md:px-64 px-8 md:space-x-10">
        <img
          data-aos="fade-up"
          src={steven}
          alt="Business Owner"
          className="w-1/2 md:w-1/4 rounded-lg mb-8 md:mb-0 md:mr-8"
        />
        <div data-aos="fade-up" className="md:text-lg text-md text-center md:text-left text-gray-400">
          <p>
            At Adelaide French Polishers we have a passion for the furniture
            industry and pride ourselves on our attention to detail.
          </p>
          <p className="mt-4">
            Business owner, Steven Garreffa is across your job from start to
            finish and you have direct access to him with the line of work.
            Steven is a second-generation craftsman and is highly knowledgeable
            in the world of French Polish and furniture restoration.
          </p>
          <p className="mt-4">
            Steven continues to evolve and grow the business by staying at the
            forefront of new material developments that may result in richer
            finishes and also produce a smaller carbon footprint.
          </p>
          <p className="mt-4">
            All of our employees are highly skilled and you can be assured that
            we will take great care with each and every job we receive.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
