import React, { useEffect, useRef } from "react";
import Company1 from "/src/assets/food/Brand_1.webp";
import Company2 from "/src/assets/food/Brand_2.webp";
import Company3 from "/src/assets/food/Brand_3.webp";
import Company4 from "/src/assets/food/Brand_4.webp";
import { motion } from "framer-motion";
import { SlideUp } from "/src/components/Hero/Hero";
import styled from "styled-components";
const BrandsData = [
  {
    id: 1,
    name: "Chimes Café ",
    img: Company1,
    description:
      "Chimes Café is the brand under which we run restaurants in army cantonments. Keeping up with the traditions of fine dining in Army",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Drool Ah ",
    img: Company2,
    description:
      "Drool Ah is the café brand based on QSR model. Menu of café is set in a manner to cut across the age barrier. Fusion food is the USP of this brand.",
    delay: 0.6,
  },
  {
    id: 3,
    name: "Ace Caterers ",
    img: Company3,
    description:
      "Ace Caterers is the Industrial Catering brand that operates industrial canteens. Under this brand consulting on setting-up of kitchens is also provided.",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Magnet Foods ",
    img: Company4,
    description:
      "Magnet Foods is the brand under which events are taken up – corporate, weddings, get-togethers oesaurhdrfughsdusdofusdouf etc. ",
    delay: 1,
  },
];

const Brands = () => {
  return (
    <motion.section
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
        x: { duration: 0.8 },
      }}
      exit={{ opacity: 0 }}
      className="mt-0 px-20 py-10  bg-[#f5f5f5]   "
    >
      {/* Heading Section */}

      <motion.h3
        variants={SlideUp(0)} // dont forget to add SlideUp in VideoAnimation component
        initial="hidden"
        whileInView="show"
        className="text-3xl font-bold  uppercaseb  py-4 text-center"
      >
        Our Brands
      </motion.h3>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-0 mx-auto justify-items-center p-2">
        {BrandsData.map((item) => {
          return (
            <motion.div
              key={item.id}
              variants={{
                hidden: {
                  x: "-100%", // Start off-screen to the left
                  opacity: 0,
                },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    delay: parseFloat(item.delay), // Ensure the delay is treated as a number
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              // Check viewport settings

              className="group rounded-xl text-center p-2"
            >
              <div className="md:flex justify-between max-w-[500px] w-[500px] md:h-[200px] rounded-xl">
                <div className="w-1/2 m-auto h-full">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="h-full group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="w-1/2 h-full flex flex-col justify-between m-auto ml-5 mt-5 md:text-left">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="mt-4 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Brands;
