import React from "react";
import Service1 from "../../assets/food/service_1.png";
import Service2 from "../../assets/food/service_2.png";
import Service3 from "../../assets/food/service_3.png";
import Service4 from "../../assets/food/service_4.png";
import { delay, motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";
import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";
import shape from "../../assets/food/shape.svg";
import ExplorePage from './ExplorePage';

const ExploreData = [
  {
    id: 1,
    name: "Mahogany Farms",
    img: "https://i.pinimg.com/originals/18/84/61/188461b5b6c99c2c1ae905714b634e32.jpg",
    // price: "$10",
    description:
      "At Ace Caterers, we specialize in providing high-quality catering services tailored to the needs of industrial and institutional clients... ",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Clubhouse",
    img: Service2,
    description:
      "Life is full of big and small happenings which prompt us to celebrate with friends and relatives to share our joy and happiness...  ",
    delay: 0.8,
  },
];

const Explore = () => {
  return (
    <section className="w-full flex flex-col  bg-gray-400 rounded-br-full ">
      {/* Added class for background */}
      <div className="container pb-14  ">
        {/* Heading Section */}
        <motion.h3
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-semibold text-darkGreen uppercase py-8 text-center"
        >
          Explore
        </motion.h3>

        {/* Grid Section */}
        <div className="flex gap-10 col-span-1 ml-10">
          {ExploreData.map((item) => {
            return (
              <motion.div
                variants={SlideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className=" group  w-full rounded-2xl"
              >
                <img
                  src={item.img}
                  alt="Image"
                  className="w-[400px] rounded-xl img-shadow  group-hover:scale-125 overflow-hidden transition-all duration-500 mb-5 mt-5"
                />

                <div>
                  {/* <h3 className="text-xl text-yellow-500">{item.price}</h3>*/}
                  {/* <p className="text-sm">{item.description}</p> */}
                  <Link to={"/ExplorePage"}>
                    <h3 className="text-[20px] xl:text-[25px] font-semibold">
                      {item.name}
                    </h3>
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

export default Explore;
