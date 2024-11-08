import React from "react";
import { motion } from "framer-motion";

function OperationsAnimation({ text, index, image, name }) {
  const isEvenIndex = index % 2 === 0;
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isEvenIndex ? 50 : -50, // Slide from right for even, left for odd
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: false }} // Animation will run every time the user views it
      className={`flex flex-col md:flex-row ${
        isEvenIndex ? "md:flex-row" : "md:flex-row-reverse"
      } items-center`}
    >
      <div className="w-full md:w-[40%] p-4 md:p-0">
        <img
          src={image}
          alt={`Card ${index + 1}`}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-full md:w-[60%] p-4 md:p-0 md:ml-10 text-center md:text-left">
        <h3 className="text-lg font-bold md:text-2xl lg:text-3xl">{name}</h3>
        <p className="text-sm md:text-base lg:text-lg mt-2">{text}</p>
      </div>
    </motion.div>
  );
}

export default OperationsAnimation;
