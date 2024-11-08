import React from "react";
import Service1 from "/src/assets/food/MGF-1.png";
import Service2 from "/src/assets/food/MGF-2.png";
import Service3 from "/src/assets/food/MGF-3.png";
import Service4 from "/src/assets/food/MGF-4.png";
import {  motion } from "framer-motion";
import { SlideUp } from "./../VideoAnimation";
import { Link } from "react-router-dom";




const OperationsData = [
  {
    id: 1,
    name: "Industrial/Institutional Catering",
    img: Service1,
    // price: "$10",
    description:
      "At Ace Caterers,We specialize in providing high-quality catering... ",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Outdoor Catering",
    img: Service2,
    description:
      "Life is full of big and small happenings which prompt us to celebrate...  ",
    delay: 0.6,
  },
  {
    id: 3,
    name: "Club Operations",
    img: Service3,
    description:
      "For over six years, Magnet Foods has managed exclusive clubs... ",

    delay: 0.8,
  },
  {
    id: 4,
    name: "O&M",
    img: Service4,
    description:
      "If your property, whether it’s a club, restaurant, or event venue... ",

    delay: 1,
  },
];

const Operations = () => {
  return (
    <section
      className=" text-black  "
      style={{
        background: `url("/src/assets/food/service-bg.jpg") center/cover no-repeat `,
        backgroundSize: "cover",
      }}
    >
      <div className="md:px-20 py-10 mx-5 md:mx-0">
        <span className="oswald mb-8 text-left">SERVICES WE OFFER</span>
      </div>
      {/* Added class for background */}
      <div className=" mx-10 pb-14  ">
        {/* Grid Section */}
        <div className="grid grid-cols-1  w-[90vw] gap-1 md:grid-cols-2 md:gap-x-10 lg:grid-cols-4 gap-y-6   text-center">
          {OperationsData.map((item) => {
            return (
              <motion.div
                variants={SlideUp(item.delay)}
                initial="hidden"
                animate="show"
                // Add transition for smooth animation
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="shadow-2xl mx-auto w-64 h-80 bg-white rounded-t-3xl rounded-b-3xl"
              >
                <img
                  src={item.img}
                  alt="Image"
                  className="w-52  mt-5 rounded-2xl aspect-square overflow-hidden transition-all duration-500 m-auto transform hover:scale-90"
                />

                <div className="mt-5">
                  <h3 className="] text-lg ">{item.name}</h3>
                  {/* <h3 className="text-xl text-yellow-500">{item.price}</h3>*/}
                  {/* <p className=" m-5 text-[14px]">{item.description}</p> */}
                  <Link
                    to={`/Operations#service${item.id}`}
                    // to={`/Operations`}
                    className="font-bold  text-[15px text-orange-500 "
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Operations;
