import React, { useState } from "react";
import logo from "/src/assets/food/logo.jpg";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import ExplorePage from "../Explore/ExplorePage";
const navmenu = [
  { id: 1, title: "Home", path: "/", delay: "0.1s" },
  { id: 2, title: "About", path: "/about", delay: "0.2s" },
  { id: 3, title: "Blog", path: "/blog", delay: "0.3s" },
  { id: 4, title: "Gallery", path: "/galleryFull", delay: "0.4s" },
  { id: 5, title: "Services", path: "/servicePage", delay: "0.5s" },
  { id: 6, title: "Explore", path: "/ExplorePage", delay: "0.6s" },
];

const SlideDown = (delay) => {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: parseFloat(delay),
        ease: "easeOut",
      },
    },
  };
};

const Navbar = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full m-0 h-20 shadow-md justify-center items-center">
      <div className="flex items-center font-league">
        {/* LOGO */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={logo}
          alt="logo"
          className="w-20 rounded-full ml-20"
        />

        {/* Menu (always visible on larger screens) */}
        <div className="hidden md:flex flex-grow justify-end px-20">
          <ul className="flex gap-6">
            {navmenu.map((menu) => (
              <motion.li
                variants={SlideDown(menu.delay)}
                initial="initial"
                animate="animate"
                key={menu.id}
                className="nav-menu"
              >
                <NavLink
                  to={menu.path}
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "inline-block px-4 text-xl text-orange-700" // Active link style
                        : "inline-block px-4 text-xl  hover:text-black" // Default link style
                  }
                >
                  {menu.title}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Menu Button (Mobile View) */}
        <div className="flex items-center px-14 sm:hidden">
          <motion.div
            className="h-[40px] w-[40px] grid place-items-center bg-black hover:bg-gray-600 rounded-full"
            variants={SlideDown(1)}
            initial="initial"
            animate="animate"
          >
            <button onClick={menuToggle} className="text-white">
              <TiThMenu size={25} />
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu (visible only when toggled) */}
        {isOpen && (
          <div className="fixed top-0 right-0 mt-16 w-40 z-50 rounded-2xl bg-white shadow-lg md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              {navmenu.map((menu) => (
                <motion.li
                  variants={SlideDown(menu.delay)}
                  initial="initial"
                  animate="animate"
                  key={menu.id}
                  className="nav-menu"
                >
                  <NavLink
                    to={menu.path}
                    className={
                      ({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-lg text-orange-700" // Active link style
                          : "block px-4 py-2 text-lg text-gray-800 hover:text-orange-700" // Default link style
                    }
                  >
                    {menu.title}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
