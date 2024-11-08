// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import {
//   HashRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// // import Explore from "./components/Explore/ExplorePage.jsx";
// import { AnimatePresence, motion } from "framer-motion";
// import AboutUs from "./components/Pages/About/About.jsx";
// import Brands from "./components/Brands/Brands.jsx";
// import InquiryForm from "./components/InquiryForm/InquiryForm.jsx";
// import GalleryFull from "./components/Pages/GalleryFull/GalleryFull.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import ExplorePage from "./components/Explore/ExplorePage.jsx";
// import Blog from "./components/Pages/Blog/Blog.jsx";
// import { StickyScrollRevealDemo } from "./components/ui/StickyScrollRevealDemo.jsx";
// import PageTransition from "./components/PageTransition.jsx";
// import OperationsPage from "./components/Operations/OperationsPage.jsx";

import {
  React,
  ReactDOM,
  App,
  Router,
  Route,
  Routes,
  Navbar,
  Footer,
  AboutUs,
  Brands,
  InquiryForm,
  GalleryFull,
  Blog,
  PageTransition,
  OperationsPage,
  AnimatePresence,
} from "./components/import"; // Import everything from your centralized import.js


const MainLayout = () => {;


  return (
    <>
      {/* <motion.div
        style={cursorStyle}
        animate={{ x: mousePosition.x - 10, y: mousePosition.y - 10 }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 20,
          ease: "easeInOut",
          duration: 0.1,
        }}
      /> */}

      {/* <Navbar /> */}
      {/* <Routes>
        <Route index element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Operations" element={<StickyScrollRevealDemo />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/InquiryForm" element={<InquiryForm />} />
        <Route path="/gallery" element={<GalleryFull />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="*" element={<App />} />
      </Routes> */}
      {/* <PageTransitions/> */}
      {/* <Footer /> */}

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            {/* mode="wait" helps with smooth exit animations */}
            <Routes location={location} key={location.pathname}>
              <Route
                index
                element={
                  <PageTransition>
                    <App />
                  </PageTransition>
                }
              />
              <Route
                path="/about"
                element={
                  <PageTransition>
                    <AboutUs />
                  </PageTransition>
                }
              />
              <Route
                path="/Operations"
                element={
                  <PageTransition>
                    <OperationsPage/>
                    {/* <StickyScrollRevealDemo /> */}
                  </PageTransition>
                }
              />
              <Route
                path="/brands"
                element={
                  <PageTransition>
                    <Brands />
                  </PageTransition>
                }
              />
              <Route
                path="/InquiryForm"
                element={
                  <PageTransition>
                    <InquiryForm />
                  </PageTransition>
                }
              />
              <Route
                path="/gallery"
                element={
                  <PageTransition>
                    <GalleryFull />
                  </PageTransition>
                }
              />
              {/* <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              /> */}
              <Route
                path="/blog"
                element={
                  <PageTransition>
                    <Blog />
                  </PageTransition>
                }
              />
             {/* <Route
                path="/explore"
                element={
                  <PageTransition>
                    <ExplorePage />
                  </PageTransition>
                }
              />  */}
              <Route
                path="*"
                element={
                  <PageTransition>
                    <App />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <MainLayout />
  </Router>
);
