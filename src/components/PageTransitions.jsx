import React from 'react'
import AboutUs from './Pages/About/About';
import OperationsPage from './Operations/OperationsPage';
import Brands from './Brands/Brands';
import InquiryForm from './InquiryForm/InquiryForm';
import GalleryFull from './Pages/GalleryFull/GalleryFull';
import Contact from './Contact/Contact';
import Blog from './Pages/Blog/Blog';
import ExplorePage from './Explore/ExplorePage';
import App from '../App.jsx';
import {  Route, Routes, useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import { StickyScrollRevealDemo } from './ui/StickyScrollRevealDemo.jsx';
export default function PageTransitions() {
 const locaiton =useLocation();
    return (
      <AnimatePresence>

      
        <Routes location={location} key={locaiton.pathname}>  
          <Route index element={<App />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/StickyScrollRevealDemo"
            element={<StickyScrollRevealDemo />}
          />
          <Route path="/brands" element={<Brands />} />
          <Route path="/InquiryForm" element={<InquiryForm />} />
          <Route path="/galleryFull" element={<GalleryFull />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ExplorePage" element={<ExplorePage />} />
          <Route path="*" element={<App />} />
        </Routes>
    </AnimatePresence>
    );
}
