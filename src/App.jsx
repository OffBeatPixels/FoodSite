// import React, { useRef } from "react";
// import Operations from "./components/Operations/Operations";
// import Brands from "./components/Brands/Brands";
// import InquiryForm from "./components/InquiryForm/InquiryForm";
// import VideoAnimation from "./components/VideoAnimation";
// import { motion, useInView } from "framer-motion";
// import ParallaxGallery from "./components/Gallery/ParallaxGallery";

import React from "react";
import {
  Operations,
  Brands,
  InquiryForm,
  VideoAnimation,
  ParallaxGallery,
  motion,
  useInView,
  useRef
} from "./components/import";
// import { useRef } from 'react';

const variants = {
  initial: { opacity: 0, y: 50, scale: 1.05 }, // Initial state: slightly larger and lower
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" }, // Smooth easing
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    transition: { duration: 0.6, ease: "easeIn" }, // Smooth exit animation
  },
};

const ScrollComponent = React.memo(({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" }); // Triggers only once

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      layoutId="scroll-animation"
    >
      {children}
    </motion.div>
  );
});

const App = () => {
 
  return (
    
    <motion.div
    className="overflow-hidden "
    id="scroll-container"
    style={{
      // background: `url("/src/assets/food/service-bg.png") center/cover repeat-y`,
      // backgroundSize: "100% auto",
    }}
    >
      <VideoAnimation />

      {/* <FadeInWhenVisible> */}
      <ScrollComponent>
        <Operations />
      </ScrollComponent>
      {/* </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible> */}
      <ScrollComponent>
        <Brands />
      </ScrollComponent>
      {/* </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible> */}
      {/* <AnimatedLine /> */}
      <ScrollComponent>
        {/* <Card /> */}
      </ScrollComponent>
      {/* <AnimatedLine /> */}
      {/* </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible> */}
      <ScrollComponent>
        {/* <Gallery /> */}
        <ParallaxGallery />
      </ScrollComponent>
      {/* </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible> */}
      <ScrollComponent>
        <InquiryForm />
      </ScrollComponent>
      {/* </FadeInWhenVisible> */}
    </motion.div>
  );
};

export default App;




