import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/Pages/About/About.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact/Contact.jsx";
import InquiryForm from "./components/Pages/InquiryForm/InquiryForm";
import Blog from "./components/Pages/Blog/Blog.jsx";
import Services from "./components/Services/Services.jsx";
import Brands from "./components/Brands/Brands.jsx";
import ServicePage from "./components/Services/ServicePage.jsx";
// import Explore from "./components/Explore/ExplorePage.jsx";
import ExplorePage from "./components/Explore/ExplorePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Layout>
      <main className="flex-1 ">
        {/* Your routes go here */}
        <Routes>
          <Route index element={<App />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/servicePage" element={<ServicePage />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/InquiryForm" element={<InquiryForm />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ExplorePage" element={<ExplorePage />} />
          {/* Fallback Route */}
          <Route path="*" element={<App />} />
        </Routes>
      </main>
    </Layout>
  </Router>
);
