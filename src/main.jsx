import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/Pages/About/About.jsx";
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact/Contact.jsx";
import InquiryForm from "./components/InquiryForm/InquiryForm";
import Blog from "./components/Pages/Blog/Blog.jsx";
import Brands from "./components/Brands/Brands.jsx";
import ServicePage from "./components/Services/ServicePage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import Explore from "./components/Explore/ExplorePage.jsx";
import ExplorePage from "./components/Explore/ExplorePage.jsx";
import GalleryFull from "./components/Pages/GalleryFull/GalleryFull.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar />
    <main className="flex-1">
      {/* Your routes go here */}
      <Routes>
        <Route index element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/servicePage" element={<ServicePage />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/InquiryForm" element={<InquiryForm />} />
        <Route path="/galleryFull" element={<GalleryFull />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ExplorePage" element={<ExplorePage />} />
        {/* Fallback Route */}
        <Route path="*" element={<App />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);
