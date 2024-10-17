import React from "react";
import Logo from "../../assets/food/logo.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Brands from "./../Brands/Brands";
import Divider from "../Divider/Divider";
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
      className="relative z-10 bg-emerald-900 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container pt-16">
        {/* Background Shape */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {/* Brand Info */}
          <div>
            <img src={Logo} alt="Logo" className="w-24 mb-4 rounded-full" />
            <p className="mb-4">
              44A, IT Park, Sahastradhara Road, Dehradun - 248001, Dehradun,
              Uttarakhand 248009
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 z-99">
            <div>
              <h3 className="font-semibold text-xl  mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className=" inline-block footer-link">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicePage"
                    className="hover:text-white footer-link"
                  >
                    Our Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 mt-8">
                <li>
                  <Link to="/brands" className="hover:text-white footer-link">
                    Our Brands
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white footer-link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white footer-link">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 z-99">
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-pink-600 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-700 transition-colors"
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
      <Divider />
    </motion.footer>
  );
};

export default Footer;
