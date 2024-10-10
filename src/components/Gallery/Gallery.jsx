import React from "react";
import Food1 from "../../assets/food/img2.jpeg";
import Food2 from "../../assets/food/img1.webp";
import Food3 from "../../assets/food/img3.jpeg";
import Food4 from "../../assets/food/img4.jpeg";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";
const GalleryData = [
  {
    id: 1,
    name: "person ",
    img: Food1,
    price: "$10",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Person",
    img: Food2,
    price: "$5",
    delay: 0.8,
  },
  {
    id: 3,
    name: "person",
    img: Food3,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 4,
    name: "person",
    img: Food4,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 5,
    name: "person",
    img: Food4,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 6,
    name: "person",
    img: Food4,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 6,
    name: "person",
    img: Food4,
    price: "$8",
    delay: 1.2,
  },
  {
    id: 6,
    name: "person",
    img: Food4,
    price: "$8",
    delay: 1.2,
  },
];

const Gallery = () => {
  return (
    <section>
      <div className="container py-24">
        {/* Section Title */}
        <motion.h3
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center font-league font-semibold uppercase py-8"
        >
          Gallery
        </motion.h3>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 place-items-center">
          {GalleryData.map((item) => (
            <div
              key={item.id}
              className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl"
            >
              <div className="flex justify-center items-center">
                <img
                  src={item.img}
                  alt="Gallery"
                  className="
            w-44 rounded-2xl img-shadow
            group-hover:scale-x-110
            group-hover:translate-y-[-10px]
            transition-all
            duration-700"
                />
              </div>
              <div>
                {/* <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100">
                  Buy Now
                </button> */}
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-xl font-bold text-yellow-500">
                  {/* {item.price} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
