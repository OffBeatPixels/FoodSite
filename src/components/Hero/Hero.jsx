import React from "react";
// import FoodPng from "../../assets/food/food.png";
// import Spoon from "../../assets/food/spoon.png";
// import Leaf from "../../assets/food/leaf.png";
// import Banana from "../../assets/food/banana.png";
// import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Banner from "../../assets/food/service_1.png";

export const SlideUp = (delay) => {
  return {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: parseFloat(delay), // Ensure the delay is treated as a number
        ease: "easeOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <main>
      <div
        className="container w-full  min-h-[200px]    "
        // style={{ backgroundImage: `url(${Banner})` }}
      >
        <video
          src="./src/assets/food/magnet-food.webm"
          alt="banner-video"
          autoPlay
          muted
        />
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 
          place-content-center justify-between z-10"
        >
          {/* text Content here */}
          <div>
            {/* <motion.h1
              initial="hidden"
              whileInView="show"
              variants={SlideUp(0.5)}
              className="relative text-4xl lg:text-7xl xl:text-8xl  font-bold uppercase text-outline text-transparent"
            >
              Magnet Foods
              <img
                src={Leaf}
                alt=""
                className="absolute w-[50px] top-[-40px] right-0  md:right-[100px]"
              />
            </motion.h1> */}
            {/* <motion.h1
              initial="hidden"
              whileInView="show"
              variants={SlideUp(1)}
              className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              FoodSite
            </motion.h1> */}
            {/* <motion.p
              initial="hidden"
              whileInView="show"
              variants={SlideUp(1.5)}
              className="text-sm"
            >
              Welcome to Magnet Foods, where we deliver An Experience with a
              Difference. We are a dependable, satisfaction-oriented provider of
              catering services for industrial units and events. We understand
              that celebrations are an integral part of our culture, and our aim
              is to make each one grand and special.
            </motion.p> */}

            {/* <motion.button
              initial="hidden"
              whileInView="show"
              variants={SlideUp(2)}
              className="btn-primary inline-block  "
            > */}
            {/* <IoCartOutline className=" inline mr-2 " /> */}
            {/* <Link to="/about">About US</Link>
            </motion.button> */}
          </div>

          {/* image section */}
          {/* <div className="relative flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={FoodPng}
              alt=""
              className="w-[450px] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Spoon}
              alt=""
              className="w-[350px] absolute bottom-[120px] -left-16 rotate-[75deg] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Banana}
              alt=""
              className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px] img-shadow"
            />
          </div> */}
        </div>

        {/* Background Yellow */}
        <motion.div
          initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
          whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        ></motion.div>
      </div>
    </main>
  );
};

export default Hero;
