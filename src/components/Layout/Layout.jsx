import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CgDarkMode } from "react-icons/cg";

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("dark-mode")) || false
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <button
        onClick={toggleDarkMode}
        className="fixed md:top-4  right-1 p-2 z-50 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300"
      >
        {isDarkMode ? <CgDarkMode size={24} /> : <CgDarkMode size={24} />}
      </button>
      <Navbar isDarkMode={isDarkMode} />
      <main>{children}</main> {/* This will render page-specific content */}
      <Footer />
    </div>
  );
};

export default Layout;
