import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landingpage from "./components/landingpage";
import Aboutus from "./components/aboutus";
import Gallery from "./components/gallery";
import Contactus from "./components/contactus";
import Pagenotfound from "./components/pagenotfound";
import Footer from "./components/footer";
import Beforeafter from "./components/beforeafter";
import ScrollToTop from "./components/scrollToTop";
import NewsletterPopup from "./components/newLetterPopUp";
import { useEffect, useState } from "react";

function App() {
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

  return (
    <div className="bg-themewhite">
      {/* Show Newsletter Popup */}
      {showPopup && <NewsletterPopup />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/beforeafter" element={<Beforeafter />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
