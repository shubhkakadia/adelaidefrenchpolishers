import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import location from "../assets/Location.svg";
import emailIcon from "../assets/Email.svg";
import phone from "../assets/Phone.svg";
import time from "../assets/Time.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

export default function Contactus() {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  // const [files, setFiles] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarCollapsed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const validateFile = (file) => {
  //   const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB
  //   const ALLOWED_TYPES = [
  //     "image/jpeg",
  //     "image/png",
  //     "image/gif",
  //     "application/pdf",
  //   ];

  //   if (file.size > MAX_FILE_SIZE) {
  //     throw new Error(`File ${file.name} is too large. Maximum size is 20MB`);
  //   }

  //   if (!ALLOWED_TYPES.includes(file.type)) {
  //     throw new Error(
  //       `File ${file.name} is not supported. Please upload images or PDFs only`
  //     );
  //   }

  //   return true;
  // };

  // const getStagedUploadUrl = async (file, STORE_NAME, ACCESS_TOKEN) => {
  //   const query = `
  //     mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
  //       stagedUploadsCreate(input: $input) {
  //         stagedTargets {
  //           resourceUrl
  //           url
  //           parameters {
  //             name
  //             value
  //           }
  //         }
  //         userErrors {
  //           field
  //           message
  //         }
  //       }
  //     }
  //   `;

  //   const variables = {
  //     input: [
  //       {
  //         filename: file.name,
  //         mimeType: file.type,
  //         resource: "FILE",
  //         fileSize: file.size.toString(),
  //       },
  //     ],
  //   };

  //   try {
  //     const { data } = await axios({
  //       url: `https://${STORE_NAME}/admin/api/2024-01/graphql.json`,
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-Shopify-Access-Token": ACCESS_TOKEN,
  //       },
  //       data: { query, variables },
  //     });

  //     if (data.errors || data.data.stagedUploadsCreate.userErrors.length > 0) {
  //       throw new Error(
  //         data.errors?.[0]?.message ||
  //           data.data.stagedUploadsCreate.userErrors[0].message
  //       );
  //     }

  //     return data.data.stagedUploadsCreate.stagedTargets[0];
  //   } catch (error) {
  //     throw new Error("Failed to get upload URL from Shopify");
  //   }
  // };

  // const uploadFileToStorage = async (file, stagedTarget) => {
  //   const formData = new FormData();

  //   // Add all parameters from staged upload
  //   stagedTarget.parameters.forEach(({ name, value }) => {
  //     formData.append(name, value);
  //   });

  //   // Add the file last
  //   formData.append("file", file);

  //   try {
  //     await axios({
  //       url: stagedTarget.url,
  //       method: "POST",
  //       data: formData,
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     return stagedTarget.resourceUrl;
  //   } catch (error) {
  //     throw new Error(`Failed to upload file ${file.name} to storage`);
  //   }
  // };

  // const createFileRecord = async (
  //   resourceUrl,
  //   file,
  //   STORE_NAME,
  //   ACCESS_TOKEN
  // ) => {
  //   const query = `
  //     mutation fileCreate($files: [FileCreateInput!]!) {
  //       fileCreate(files: $files) {
  //         files {
  //           id
  //           url
  //           originalFileSize
  //         }
  //         userErrors {
  //           field
  //           message
  //         }
  //       }
  //     }
  //   `;

  //   const variables = {
  //     files: [
  //       {
  //         originalSource: resourceUrl,
  //         alt: file.name,
  //         contentType: file.type,
  //       },
  //     ],
  //   };

  //   try {
  //     const { data } = await axios({
  //       url: `https://${STORE_NAME}/admin/api/2024-01/graphql.json`,
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-Shopify-Access-Token": ACCESS_TOKEN,
  //       },
  //       data: { query, variables },
  //     });

  //     if (data.errors || data.data.fileCreate.userErrors.length > 0) {
  //       throw new Error(
  //         data.errors?.[0]?.message ||
  //           data.data.fileCreate.userErrors[0].message
  //       );
  //     }

  //     return data.data.fileCreate.files[0];
  //   } catch (error) {
  //     throw new Error("Failed to create file record in Shopify");
  //   }
  // };

  // const uploadFilesToShopify = async (files, STORE_NAME, ACCESS_TOKEN) => {
  //   const uploadedFiles = [];
  //   try {
  //     for (const file of files) {
  //       // 1. Validate file
  //       validateFile(file);

  //       // 2. Get staged upload URL
  //       const stagedTarget = await getStagedUploadUrl(
  //         file,
  //         STORE_NAME,
  //         ACCESS_TOKEN
  //       );

  //       // 3. Upload to storage
  //       const resourceUrl = await uploadFileToStorage(file, stagedTarget);

  //       // 4. Create file record
  //       const fileRecord = await createFileRecord(
  //         resourceUrl,
  //         file,
  //         STORE_NAME,
  //         ACCESS_TOKEN
  //       );

  //       uploadedFiles.push({
  //         url: fileRecord.url,
  //         id: fileRecord.id,
  //         name: file.name,
  //         size: fileRecord.originalFileSize,
  //       });
  //     }

  //     return uploadedFiles;
  //   } catch (error) {
  //     console.error("Error in uploadFilesToShopify:", error);
  //     throw error;
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please fill out all fields!");
      return;
    }

    if (!validateName(formData.firstName)) {
      toast.error("First name should only contain letters!");
      return;
    }

    if (!validateName(formData.lastName)) {
      toast.error("Last name should only contain letters!");
      return;
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      toast.error("Phone number should only contain digits!");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading("Sending message...");

    try {
      // Replace yourdomain.com with your actual domain
      const response = await fetch(process.env.REACT_APP_CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error('Failed to send message');
      }

      // Success! Clear form and show success message
      toast.dismiss(loadingToast);
      toast.success("Message sent successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
      
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again.");
      console.error("Submission error:", error);
    }
};
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleFileChange = (e) => {
  //   const selectedFiles = Array.from(e.target.files);
  //   if (files.length + selectedFiles.length > 5) {
  //     toast.error("You can only upload up to 5 files!");
  //     return;
  //   }

  //   const validFiles = selectedFiles.filter(
  //     (file) => file.type.includes("image") || file.type === "application/pdf"
  //   );

  //   setFiles([...files, ...validFiles]);
  // };

  // const removeFile = (index) => {
  //   setFiles(files.filter((_, i) => i !== index));
  // };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div>
      {/* Toast Container */}
      <ToastContainer />
      {/* Navbar */}
      <Navbar isCollapsed={isNavbarCollapsed} />

      <div className="md:p-32 pt-32 px-10">
        <p className="md:text-4xl text-2xl">Contact Us</p>

        <div className="flex w-full justify-around md:flex-row flex-col gap-10 z-[2]">
          <div className="py-4">
            <iframe
              className="w-[20rem] h-[20rem] md:h-[40rem] md:w-[40rem]"
              title="Adelaide French Polishers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.445635850288!2d138.65071147648075!3d-34.89526457295504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ca30c573fe0f%3A0xd2b95bdc0265a18d!2sAdelaide%20French%20Polishers!5e0!3m2!1sen!2sau!4v1731635371470!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="mt-4 md:text-md text-sm text-gray-700 space-y-2">
              <div className="flex gap-4">
                <img src={location} alt="location" />
                <p>24 Sunbeam Rd, Glynde SA 5070</p>
              </div>
              <div className="flex gap-4">
                <img src={emailIcon} alt="email" />
                <p>admin@adelaidefrenchpolishers.com.au</p>
              </div>
              <div className="flex gap-4">
                <img src={phone} alt="phone" />
                <p>(08) 8165 3886</p>
              </div>
              <div className="flex gap-4">
                <img src={time} alt="time" />
                <p>Monday - Thursday, 9 am - 5 pm</p>
              </div>
            </div>
          </div>
          <div className="flex items-center md:px-10 md:h-[40rem]">
            <div>
              <p className="text-gray-600 mb-4 text-center">
                For a more accurate quote, please send us images of the damaged
                furniture along with your name and contact details.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-theme"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute mx-1 rounded text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
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
                    required
                    className="peer block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-theme"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute mx-1 rounded text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
                    Last Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-theme"
                  />
                  <label
                    htmlFor="phoneNumber"
                    className="absolute mx-1 rounded text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
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
                    required
                    className="peer block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-theme"
                  />
                  <label
                    htmlFor="email"
                    className="absolute mx-1 rounded text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-theme"
                  />
                  <label
                    htmlFor="message"
                    className="absolute mx-1 rounded text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
                    Message
                  </label>
                </div>

                {/* <input
                  type="file"
                  accept="image/*,application/pdf"
                  multiple
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme"
                />

                <div className="flex space-y-2 mt-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="relative p-2 border border-gray-300 rounded-lg"
                    >
                      {file.type.includes("image") ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt="preview"
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="text-gray-600">{file.name}</div>
                      )}
                      <div className="absolute bg-red-200 px-2 rounded-full top-0 right-0">
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 font-bold"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div> */}

                <button
                  type="submit"
                  className="w-full bg-theme text-white py-2 rounded-lg hover:bg-theme transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
