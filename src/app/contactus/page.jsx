"use client";

import React, { use, useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import Image from "next/image";
import NewsletterPopup from "@/components/newsLetterPopup";
import Script from "next/script";
import { Bounce, toast } from "react-toastify";

const location = "/assets/Location.svg";
const emailIcon = "/assets/Email.svg";
const phone = "/assets/Phone.svg";
const time = "/assets/Time.svg";

export default function Contactus() {
  const form = useRef();
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [interaction, setInteraction] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  // const [mounted, setMounted] = useState(false);

  // Fix for v11+ hydration issues
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  // Remove an image from selection
  const removeImage = (index) => {
    setSelectedFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });

    setPreviewImages((prevPreviews) => {
      URL.revokeObjectURL(prevPreviews[index]);
      const newPreviews = [...prevPreviews];
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  };

  // Clean up preview URLs
  useEffect(() => {
    return () => {
      previewImages.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [previewImages]);

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
      setNavbarCollapsed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted, starting process...");

    // Validation with v11 toast config
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.message
    ) {
      console.log("Validation failed - showing error toast");
      toast.error("Please fill out all the fields!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    // First name should only contain letters!
    if (!validateName(formData.firstName)) {
      toast.error("First name should only contain letters!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    if (!validateName(formData.lastName)) {
      toast.error("Last name should only contain letters!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      toast.error("Phone number should only contain digits!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    console.log("Validation passed, showing loading toast");

    // Show loading toast with v11 config
    const loadingToastId = toast.loading("Sending message...", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    try {
      let imageUrls = [];

      // Handle file uploads
      if (selectedFiles.length > 0) {
        console.log("Uploading files...");
        const uploadToast = toast.loading(
          `Uploading ${selectedFiles.length} image(s)...`,
          {
            position: "top-right",
            theme: "light",
          }
        );

        const formDataWithFiles = new FormData();
        formDataWithFiles.append("firstName", formData.firstName);
        formDataWithFiles.append("lastName", formData.lastName);

        selectedFiles.forEach((file) => {
          formDataWithFiles.append("files", file);
        });

        try {
          const uploadResponse = await fetch("/api/upload", {
            method: "POST",
            body: formDataWithFiles,
          });

          if (!uploadResponse.ok) {
            throw new Error("Failed to upload images");
          }

          const uploadResult = await uploadResponse.json();
          imageUrls = uploadResult.imageUrls || [];

          toast.update(uploadToast, {
            render: "✅ Images uploaded successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
        } catch (uploadError) {
          console.error("Upload error:", uploadError);
          toast.update(uploadToast, {
            render: `❌ Upload failed: ${uploadError.message}`,
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
          throw uploadError;
        }
      }

      // Prepare email data
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: formData.message,
        phone_number: formData.phoneNumber,
        image_urls:
          imageUrls.length > 0 ? imageUrls.join("\n") : "No images attached",
      };

      // Send email
      const emailResult = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      console.log("Updating loading toast to success");

      // Update loading toast to success with v11 syntax
      toast.update(loadingToastId, {
        render: "Message sent successfully! We'll get back to you soon.",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
      setSelectedFiles([]);
      setPreviewImages([]);
      setUploadedImageUrls([]);
    } catch (error) {
      console.error("Submission error:", error);
      console.log("Updating loading toast to error");

      toast.update(loadingToastId, {
        render: `❌ Failed to send message: ${
          error.message || "Unknown error occurred"
        }`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    return /^[A-Za-z\s-]+$/.test(name);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phoneNumber);
  };

  // Don't render until mounted to avoid hydration issues
  // if (!mounted) {
  //   return null;
  // }

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>
          Contact Us | Adelaide French Polishers | Get a Furniture Restoration
          Quote
        </title>
        <meta
          name="description"
          content="Contact Adelaide French Polishers for professional furniture restoration, French polishing, and refinishing services. Located in Glynde, SA. Call or email us today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Google Analytics Script */}
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

      {/* {showPopup && <NewsletterPopup onClose={() => setShowPopup(false)} onSubmit={() => setShowPopup(false)} />} */}
      {showPopup && (
        <NewsletterPopup
          onClose={() => setShowPopup(false)}
          onSubmit={() => setShowPopup(false)}
        />
      )}
      {/* Navbar */}
      <Navbar isCollapsed={isNavbarCollapsed} />

      <main className="flex-grow pt-20 pb-12 px-4 sm:px-6 lg:px-16 xl:px-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 pt-10 font-bold text-[#E3A890]">
          Contact Adelaide French Polishers – Furniture Restoration Specialists
        </h1>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
            {/* Map and Contact Info Section */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[30rem] overflow-hidden rounded-lg shadow-md">
                <iframe
                  aria-label="Adelaide French Polishers Google Maps location"
                  className="w-full h-full"
                  title="Adelaide French Polishers Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.445635850288!2d138.65071147648075!3d-34.89526457295504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ca30c573fe0f%3A0xd2b95bdc0265a18d!2sAdelaide%20French%20Polishers!5e0!3m2!1sen!2sau!4v1731635371470!5m2!1sen!2sau"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-700">
                <a
                  href="https://maps.app.goo.gl/2PVq6Wff2qW3ZcrL6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                  aria-label="View our location on Google Maps"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={location}
                      width={20}
                      height={20}
                      alt="Adelaide French Polishers workshop location in Glynde SA"
                      className="w-5 h-5"
                    />
                  </div>
                  <p>24 Sunbeam Rd, Glynde SA 5070</p>
                </a>

                <a
                  href="mailto:admin@adelaidefrenchpolishers.com.au"
                  className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                  aria-label="Send us an email"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={emailIcon}
                      width={20}
                      height={20}
                      alt="Email contact for Adelaide French Polishers"
                      className="w-5 h-5"
                    />
                  </div>
                  <p className="break-words">
                    admin@adelaidefrenchpolishers.com.au
                  </p>
                </a>

                <a
                  href="tel:0881653886"
                  className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                  aria-label="Call our office"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={phone}
                      width={20}
                      height={20}
                      alt="Phone number for Adelaide French Polishers"
                      className="w-5 h-5"
                    />
                  </div>
                  <p>(08) 8165 3886</p>
                </a>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={time}
                      width={20}
                      height={20}
                      alt="Business hours - Adelaide French Polishers"
                      className="w-5 h-5"
                    />
                  </div>
                  <p>Monday - Thursday, 9 am - 5 pm</p>
                </div>
              </div>
            </div>
            

            {/* Contact Form Section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
                  For a more accurate quote, please send us detailed information
                  of the damaged furniture along with your name and contact
                  details.
                </p>

                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder=" "
                        // required
                        className="peer block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#E3A890]"
                      />
                      <label className="absolute mx-1 rounded text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#E3A890] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                        First Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder=" "
                        // required
                        className="peer block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#E3A890]"
                      />
                      <label className="absolute mx-1 rounded text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#E3A890] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                        Last Name
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder=" "
                      // required
                      className="peer block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#E3A890]"
                    />
                    <label className="absolute mx-1 rounded text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#E3A890] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                      Phone Number
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      // required
                      className="peer block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#E3A890]"
                    />
                    <label className="absolute mx-1 rounded text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#E3A890] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                      Email
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      rows="4"
                      // required
                      className="peer block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-[#E3A890]"
                    />
                    <label className="absolute mx-1 rounded text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#E3A890] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                      Message
                    </label>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Attach Photos (optional)
                    </label>
                    <div
                      className="cursor-pointer hover:border-[#E3A890]  mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                      onClick={() =>
                        document.getElementById("file-upload").click()
                      }
                    >
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-[#E3A890] hover:text-[#d89880] focus-within:outline-none"
                          >
                            <span>Upload images</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              multiple
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>

                    {/* Preview selected images */}
                    {previewImages.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {previewImages.map((preview, index) => (
                          <div key={index} className="relative">
                            <img
                              src={preview}
                              alt={`Preview ${index + 1}`}
                              className="h-24 w-full object-cover rounded-md"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="cursor-pointer hover:bg-red-700 absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                              aria-label="Remove image"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isUploading}
                    className="w-full bg-[#E3A890] text-white py-3 rounded-lg hover:bg-[#d89880] transition duration-200 font-medium cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isUploading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Script id="local-business-schema" type="application/ld+json">
        {`
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adelaide French Polishers",
    "image": "https://yourwebsite.com/assets/workshop-exterior.jpg",
    "description": "Professional furniture restoration, French polishing, and refinishing services in Adelaide",
    "@id": "https://adelaidefrenchpolishers.com.au/",
    "url": "https://adelaidefrenchpolishers.com.au/",
    "telephone": "+61881653886",
    "email": "admin@adelaidefrenchpolishers.com.au",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Furniture Restoration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "French Polishing",
            "description": "Traditional French polishing for antique furniture restoration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Furniture Repair",
            "description": "Professional repair of damaged timber furniture"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Modern Finishes",
            "description": "Contemporary spray finishes and painted surfaces"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "15"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sample Customer"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent furniture restoration work. Highly recommended."
      }
    ]
  }
`}
      </Script>
    </div>
  );
}
