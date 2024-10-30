import React from "react";
import OperationsPage1 from "/src/assets/food/Service_page-1.webp";
import { motion } from "framer-motion";

const AboutUs = () => {
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
      className="bg-[#FDFDFD] "
    >
      <img
        src="https://img.freepik.com/premium-photo/herb-spices-cooking-background_136595-562.jpg?w=996"
        alt="image of operations of magnet Foods"
        loading="lazy"
        className="float-right w-1/2" // adjust width as needed
      />
      <div className="container font-semibold mx-auto  text-black ">
        <h1 className="text-4xl font-bold text-center text-gray-800  mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 font-serif text-justify  mb-8">
          Welcome to Magnet Foods, where we deliver An Experience with a
          Difference. We are a dependable, satisfaction-oriented provider of
          catering Operations for industrial units and events. We understand
          that celebrations are an integral part of our culture, and our aim is
          to make each one grand and special.  Whether for industrial
          needs or special occasions, we ensure every event is celebrated with
          excellence and a personalized touch. Our Operations are driven by core
          values: being process-oriented, disciplined, and dedicated. With
          Magnet Foods, you can count on expert planning, seamless execution,
          and a commitment to high standards.
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our mission is to innovate and provide the best possible products
              for our clients.
            </p>
          </div> */}

          {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              To be a leader in the industry, setting new standards of
              excellence.
            </p>
          </div> */}

          {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Integrity, customer satisfaction, and continuous improvement are
              at the heart of everything we do.
            </p>
          </div> */}
        </div>

        <div
        // style={{
        //   background: `url(${OperationsPage1}) center/contain no-repeat`,
        //   backgroundSize: "contain",
        //   width: "100%",
        //   height: "50vh",
        // }}
        ></div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
