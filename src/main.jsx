import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import Explore from "./components/Explore/ExplorePage.jsx";
import { motion } from "framer-motion";
import AboutUs from "./components/Pages/About/About.jsx";
import Brands from "./components/Brands/Brands.jsx";
import InquiryForm from "./components/InquiryForm/InquiryForm.jsx";
import GalleryFull from "./components/Pages/GalleryFull/GalleryFull.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ExplorePage from "./components/Explore/ExplorePage.jsx";
import Blog from "./components/Pages/Blog/Blog.jsx";
import { StickyScrollRevealDemo } from "./components/ui/StickyScrollRevealDemo.jsx";

const MainLayout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cursorStyle = {
    width: "20px",
    height: "20px",
    backgroundColor: "rgba(255, 165, 0, 0.5)",
    border: "2px solid #FF4500",
    borderRadius: "50%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    pointerEvents: "none",
    mixBlendMode: "difference",
    boxShadow: "0 0 10px rgba(255, 165, 0, 0.7)",
    transition: "width 0.3s, height 0.3s",
  };

  return (
    <>
      <motion.div
        style={cursorStyle}
        animate={{ x: mousePosition.x - 10, y: mousePosition.y - 10 }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 20,
          ease: "easeInOut",
          duration: 0.1,
        }}
      />

      <Navbar />
      <Routes>
        <Route index element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/Operations"
          element={<StickyScrollRevealDemo />}
        />
        <Route path="/brands" element={<Brands />} />
        <Route path="/InquiryForm" element={<InquiryForm />} />
        <Route path="/gallery" element={<GalleryFull />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="*" element={<App />} />
      </Routes>
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <MainLayout />
  </Router>
);
