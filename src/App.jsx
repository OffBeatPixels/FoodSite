import React, {useRef} from "react";
// import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Operations from "./components/Operations/Operations";
import Brands from "./components/Brands/Brands";
import InquiryForm from "./components/InquiryForm/InquiryForm";
// import BannerSlider from "./components/Banner/BannerSlider";
// import Explore from "./components/Explore/Explore";
import Card from "./components/Explore/Card";
import VideoAnimation from "./components/VideoAnimation";
import { motion, useInView } from "framer-motion";
// import FadeInWhenVisible from './components/ui/FadeInWhenVisible ';

const variants = {
  initial: { opacity: 0, y: 100, scale: 1.1 }, // Reduced scale to lessen animation load
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" }, // Shorter duration
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.8,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const ScrollComponent = React.memo(({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "20px" }); // Adjusted margin

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
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
        x: { duration: 0.8 },
      }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
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
        <ScrollComponent>
          <Card />
        </ScrollComponent>
      {/* </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible> */}
        <ScrollComponent>
          <Gallery />
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
