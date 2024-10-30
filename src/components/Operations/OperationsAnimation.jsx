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
      style={{
        display: "flex",
        flexDirection: isEvenIndex ? "row" : "row-reverse", // Adjust direction based on index
        alignItems: "center",
      }}
    >
      <div className="w-[30%]  pt-14">
        <img src={image} alt={`Card ${index + 1}`} className="card-image" />
      </div>
      <div className="w-[70%] ml-10">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="card-text">{text}</p>
      </div>
    </motion.div>
  );
}

export default OperationsAnimation;
