import React from "react";
import G1 from "/src/assets/food/G1.jpg";
import G2 from "/src/assets/food/G2.jpg";
import G3 from "/src/assets/food/G3.jpg";
import G4 from "/src/assets/food/G4.jpg";
import G5 from "/src/assets/food/G5.jpg";
import G6 from "/src/assets/food/G6.jpg";
import G7 from "/src/assets/food/G7.jpg";
import G8 from "/src/assets/food/G8.jpg";
import G9 from "/src/assets/food/G9.jpg";
import G10 from "/src/assets/food/G10.jpg";
import G11 from "/src/assets/food/G11.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "/src/components/Hero/Hero";
const GalleryData = [
  {
    id: 1,
    name: "person ",
    img: G1,
    price: "$10",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Person",
    img: G2,
    price: "$5",
    delay: 0.8,
  },
  {
    id: 3,
    name: "person",
    img: G3,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 4,
    name: "person",
    img: G4,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 5,
    name: "person",
    img: G5,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 6,
    name: "person",
    img: G6,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 7,
    name: "person",
    img: G7,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 8,
    name: "person",
    img: G8,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 9,
    name: "person",
    img: G9,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 10,
    name: "person",
    img: G10,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 11,
    name: "person",
    img: G11,
    price: "$8",
    delay: 1.2,
  },
];

const GalleryFull = () => {
  return (
    <section className="relative">
      {/* Colored Shape Overlay */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full h-full relative">
          {/* First Shape (left) */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#111e23] clip-left"></div>
          {/* Second Shape (right) */}
          <div className="absolute top-0 left-0 w-full h-full bg-emerald-900 clip-right"></div>
        </div>
      </div>

      <div className="container py-1 relative z-10">
        {/* Section Title */}
        <motion.h3
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center text-white font-league font-semibold uppercase py-8"
        >
          Gallery
        </motion.h3>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center">
          {GalleryData.map((item) => (
            <div
              key={item.id}
              className="group space-y-3 text-center rounded-xl"
            >
              <div className="flex justify-center  items-center">
                <img
                  src={item.img}
                  alt="Gallery"
                  className="
                w-72 rounded-2xl 
                group-hover:scale-x-110
                group-hover:translate-y-[-10px]
                transition-all
                duration-700"
                />
              </div>
              <div>
                <p className="text-xl font-bold text-yellow-500">
                  {/* {item.price} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .clip-left {
          clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        }

        .clip-right {
          clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
        }
      `}</style>
    </section>
  );
};

export default GalleryFull;
