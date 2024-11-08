import React from "react";
import AboutUs from "./Pages/About/About.jsx";
import OperationsPage from "./Operations/OperationsPage.jsx";
import Brands from "./Brands/Brands.jsx";
import InquiryForm from "./InquiryForm/InquiryForm.jsx";
import GalleryFull from "./Pages/GalleryFull/GalleryFull.jsx";
import Contact from "./Contact/Contact.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import ExplorePage from "./Explore/ExplorePage.jsx";
import App from "../App.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { StickyScrollRevealDemo } from "./ui/StickyScrollRevealDemo.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
