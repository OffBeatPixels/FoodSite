import React, { useState, useEffect, useRef } from "react";

// Main.jsx
import ReactDOM from "react-dom/client";
import App from "../App.jsx";
import "./../index.css"
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx"
import Footer from "./Footer/Footer.jsx";
// import Explore from "./Explore/ExplorePage.jsx";
import { AnimatePresence, motion } from "framer-motion";
import AboutUs from "./Pages/About/About.jsx";
import Brands from "./Brands/Brands.jsx";
import InquiryForm from "./InquiryForm/InquiryForm.jsx";
import GalleryFull from "./Pages/GalleryFull/GalleryFull.jsx";
import Contact from "./Contact/Contact.jsx";
import ExplorePage from "./Explore/ExplorePage.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import { StickyScrollRevealDemo } from "./ui/StickyScrollRevealDemo.jsx";
import PageTransition from "./PageTransition.jsx";
import OperationsPage from "./Operations/OperationsPage.jsx";


//App.jsx

import Operations from "./Operations/Operations";
import VideoAnimation from "./VideoAnimation";
import { useInView } from "framer-motion";
import ParallaxGallery from "./Gallery/ParallaxGallery";



// Export all components and hooks for easy imports
export {
  React,
  ReactDOM,
  App,
  Router,
  Route,
  Routes,
  useLocation,
  Navbar,
  Footer,
  AboutUs,
  Brands,
  InquiryForm,
  GalleryFull,
  Contact,
  ExplorePage,
  Blog,
  StickyScrollRevealDemo,
  PageTransition,
  OperationsPage,
  AnimatePresence,
  motion,
  useState,
  useEffect,

  // App.jsx
  Operations,
  VideoAnimation,
  useInView,
  ParallaxGallery,
  useRef,

};