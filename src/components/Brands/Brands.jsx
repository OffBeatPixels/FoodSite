import React, {  useState } from "react";
import Company1 from "/src/assets/food/Brand_1.png";
import Company2 from "/src/assets/food/Brand_2.png";
import Company3 from "/src/assets/food/Brand_3.png";
import Company4 from "/src/assets/food/Brand_4.png";
import { motion } from "framer-motion";
import { SlideUp } from "../VideoAnimation";


const BrandsData = [
  {
    id: 1,
    name: "Magnet Foods ",
    img: Company3,
    description:
      "Magnet Foods is the brand under which events are taken up–corporate, weddings, get-togethers etc. ",
    delay: 1,
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
    name: "Chimes Café ",
    img: Company4,
    description:
      "Chimes Café is the brand under which we run restaurants in army cantonments. Keeping up with the traditions of fine dining in Army",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Ace Caterers ",
    img: Company1,
    description:
      "Ace Caterers is the Industrial Catering brand that operates industrial canteens. Under this brand consulting on setting-up of kitchens is also provided.",
    delay: 0.8,
  },
];

const Brands = () => {
   const [flippedIndex, setFlippedIndex] = useState(null);
  return (
    <section
      className="relative mt-8 md:px-20 pb-10 bg-[#ffffff] overflow-hidden"
      style={{
        // background: `url("https://images.pexels.com/photos/616401/pexels-photo-616401.webp?cs=srgb&dl=pexels-goumbik-616401.webp&fm=jpg") center/cover  no-repeat`,
        // background: `url("https://img.freepik.com/free-psd/indian-food-illustration-isolated_23-2151851514.jpg?t=st=1728988377~exp=1728991977~hmac=d5c109f1e8567b92f6368302ba35a7b3fb0ecb276e84ac9828cba7b35e8e4bc0&w=996") center/cover no-repeat `,
        background: `url("/src/assets/food/bg.png")  no-repeat `,
        backgroundSize: "contain",
      }}
    >
      {/* Border Animation */}
      <motion.h3
        variants={SlideUp(0)} // dont forget to add SlideUp in VideoAnimation component
        initial="hidden"
        whileInView="show"
        className="oswald uppercase mb-8 text-left mx-5 md:mx-0"
      >
        brands we operate
      </motion.h3>
      {/* Grid Section */}
      {/* <div className="grid grid-cols-1  md:grid-cols-2  gap-4 mx-auto justify-items-center p-2">
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
              <div className="flex flex-col md:flex-row  justify-between max-w-[500px] w-[500px] md:h-[200px]  rounded-xl">
                <div className="w-full md:w-1/2 flex justify-center h-40 md:h-full">
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
                    <p className="mt-4  text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div> */}
      {/* <div className="grid grid-cols-2 bg-gray-400 mr-14  w-screen  md:w-full    md:gap-4 mx-auto justify-items-center md:p-2">
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
              className="group rounded-xl text-center p-2"
            >
              <div className="flex flex-col  md:flex-row  max-w-[500px] w-full h-full">
                <div className="w-full md:w-1/2 flex justify-center h-40 md:h-full">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="h-full  group-hover:scale-105 transition-all duration-500"
                  />
                </div>



                <div className="w-full md:w-1/2 flex flex-col justify-between m-5 md:text-left ">
                  <h3 className="text-xl  font-semibold ">{item.name}</h3>
                  <p className=" md:mb-14 text-balance text-sm">
                    {item.description}
                  </p>
                </div>



                <div className="w-full md:w-1/2  justify-between m-5 md:text-left hidden md:block ">
                  <h3 className="text-xl  font-semibold ">{item.name}</h3>
                  <p className="  text-balance text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div> */}
      <div className="grid grid-cols-2  mr-14 w-screen  md:w-full md:gap-4 mx-auto justify-items-center md:p-2 ">
        {BrandsData.map((item, index) => (
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
            className="relative group  rounded-xl text-center p-2 w-full max-w-[500px] h-full"
          >
            <div
              className="flip-container w-full h-full"
              onClick={() =>
                setFlippedIndex(flippedIndex === index ? null : index)
              } // Toggle flip on click
            >
              <div
                className={`flip-card-inner transition-transform h-44 duration-500 ease-in-out ${
                  flippedIndex === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of the card */}
                <div className="flip-card-front flex flex-row mb-10 h-full ">
                  <div className="w-60 mr-5   flex justify-center h-40 md:h-full ">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      className="h-full  group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  {/* Content displayed on larger screens */}
                  <div className="w-1/2 text-left mt-6  hidden md:block">
                    <h3 className="text-3xl  font-semibold">{item.name}</h3>
                    <p className="text-left mt-1   text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                {/* Back of the card (visible only on small screens when flipped) */}
                <div className="flip-card-back   flex flex-col justify-center items-center p-5 md:hidden">
                  <h3 className="text-xl  font-semibold">{item.name}</h3>
                  <p className="text-wrap  w-48 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
