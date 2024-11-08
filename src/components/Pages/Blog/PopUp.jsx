
import React from "react";
import { motion } from "framer-motion";
const Popup = ({ image, name, text, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center font-serif justify-center  bg-gray-800 bg-opacity-75 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 overflow-x-scroll rounded-lg shadow-lg h-[90%] w-[900px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl">
          &times;
        </button>

        {/* Flexbox to align image and text side by side */}
        <div className="flex gap-20 text-gray-800">
          {/* Image Section */}
          {/* <div className="w-[70%]">
            <img src={image} alt={name} className="w-full h-auto rounded-lg" />
          </div> */}

          {/* Text Section */}
          <div className="w-full pl-4">
            {/* Blog Title */}
            <h1 className="text-2xl flex justify-center font-semibold mb-1">
              {text.title}
            </h1>

            {/* Blog Intro */}

            {/* First Section (with Heading, Content, and Image) */}
            <div>
              <p className="text-lg mb-4">{text.intro}</p>
              <h2 className="text-xl  font-bold mb-2">
                {text.sections[0].heading}
              </h2>
              {text.sections[0].content}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Popup;
