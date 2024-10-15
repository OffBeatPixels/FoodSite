
import React from "react";
import Company1 from "../../assets/food/Brand_1.png";
import Company2 from "../../assets/food/Brand_2.png";
import Company3 from "../../assets/food/Brand_3.png";
import Company4 from "../../assets/food/Brand_4.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const BrandsData = [
  {
    id: 1,
    name: "Chimes Café ",
    img: Company1,
    description:
      "Chimes Café is the brand under which we run restaurants in army cantonments. Keeping up with the traditions of fine dining in Army, the restaurants are a fusion of fine dining and a café. ",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Drool Ah ",
    img: Company2,
    description:
      "Drool Ah is the café brand based on QSR model. Menu of café is set in a manner to cut across the age barrier. Fusion food is the USP of this brand.",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Ace Caterers ",
    img: Company3,
    description:
      "Ace Caterers is the Industrial Catering brand that operates industrial canteens. Under this brand consulting on setting-up of kitchens is also provided.",
    delay: 1.2,
  },
  {
    id: 4,
    name: "Passiflora Foods & Services LLP ",
    img: Company4,
    description:
      "Passiflora Foods & Services LLP is the brand under which events are taken up – corporate, weddings, get-togethers etc. ",
    delay: 1.2,
  },
];

const Brands = () => {
  return (
    <section>
      <div className="bg-gray-400 mt-4 rounded-tr-full rounded-bl-full px-20 ">
        {/* Heading Section */}
        <motion.h3
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-3xl  font-bold text-white uppercase py-4 text-center"
        >
         our Brands
        </motion.h3>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 mx-auto justify-items-center pb-10 ">
          {BrandsData.map((item) => {
            return (
              <motion.div
                key={item.id} // Add a key here for React's map iteration
                variants={SlideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="group w-48 max-w-xs rounded-xl text-center"
              >
                <div >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-36 rounded-2xl  m-auto img-shadow group-hover:scale-110 transition-all duration-700 "
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mt-4 text-red-300">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-50">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
