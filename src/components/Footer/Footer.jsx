import React from "react";
import Logo from "/src/assets/food/logo-2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Brands from "./../Brands/Brands";
// import Divider from "/src/components/Divider/Divider";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 bg-[#2a2a2a]  bottom-0 "
    >
      <div className="container pt-10">
        {/* Background Shape */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bottom-5 relative z-10   ">
          {/* Brand Info */}
          <div>
            <img src={Logo} alt="Logo" width={200} />
            <p className="text-white">Bhopal, Madhya Pradesh</p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 z-99 ">
            <div>
              <h3 className="font-semibold text-xl  mb-4 text-white ">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-white hover:text-black footer-link"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Operations"
                    className="text-white hover:text-black inline-block footer-link"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Blog"
                    className="text-white hover:text-black inline-block footer-link"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 mt-8">
                <li>
                  <Link
                    to="/brands"
                    className="text-white hover:text-black footer-link"
                  >
                   Brands
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-white hover:text-black footer-link"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-white hover:text-black footer-link"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" z-99 ">
            <h2 className="text-xl font-semibold mb-2 text-white">Follow Us</h2>
            <div className="flex gap-4 ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-600 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          {/* <div>
            <h3 className="font-semibold text-xl mb-4">Newsletter</h3>
            <p className="mb-4">Sign up to receive updates and promotions:</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                className="bg-gray-800 p-3 focus:outline-none"
                placeholder="Your Email"
              />
              <button className="btn-primary mt-2">Subscribe</button>
            </form>
          </div> */}
        </div>
      </div>
      {/* <Divider /> */}
    </motion.footer>
  );
};

export default Footer;
