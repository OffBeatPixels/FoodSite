import React from "react";
import { motion } from "framer-motion";
import aboutImg from "/src/assets/food/bg-about-us.png";

const AboutUs = () => {
  return (
    <section
      className="bg-[#FDFDFD] py-10 md:py-20"
      style={{
        backgroundImage: `url(${aboutImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "400px",
        position: "relative",
        backgroundPositionX:"80%",
       
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Text Section */}
        <div className="lg:w-1/2 text-black text-center lg:text-left px-4 md:px-0">
          <h1 className="oswald mb-4 lg:mb-8 text-2xl md:text-4xl lg:text-5xl font-bold">
            About Us
          </h1>
          <p className="text-sm bg-slate-50 bg-opacity-50 md:bg-white font-semibold md:text-base lg:text-lg leading-relaxed mb-8">
            Welcome to Magnet Foods, where we deliver An Experience with a
            Difference. We are a dependable, satisfaction-oriented provider of
            catering operations for industrial units and events. We understand
            that celebrations are an integral part of our culture, and our aim
            is to make each one grand and special. Whether for industrial needs
            or special occasions, we ensure every event is celebrated with
            excellence and a personalized touch. Our operations are driven by
            core values: being process-oriented, disciplined, and dedicated.
            With Magnet Foods, you can count on expert planning, seamless
            execution, and a commitment to high standards.
          </p>
          <div className="flex justify-center lg:justify-start">
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
