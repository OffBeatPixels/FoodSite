import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VideoAnimation = () => {
  const [videoWidth, setVideoWidth] = useState("100%");
 const text = "OUR SERVICES".split(" ");
 // Add `inView` to detect scroll visibility
 const { ref, inView } = useInView({
   threshold: 0.5,
   triggerOnce: false,
 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newWidth = 100;

      if (scrollY >= 0 && scrollY <= 300) {
        newWidth = 100 - (scrollY / 300) * 30;
      } else if (scrollY > 300) {
        newWidth = 70;
      }
      setVideoWidth(newWidth + "%");
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.innerWidth]);

  
  return (
    <div style={{ height: "100vh"}}>
      {/* Just to add scrolling space */}
      <video
        src="magnet-food.webm" // Replace with your video path
        autoPlay
        loop
        controls
        style={{
          width: videoWidth,
          borderRadius: inView ? "20px" : "0px",
          transition: "width 0.3s ease", // Smooth transition
          display: "block",
          margin: "0 auto",
        }}
      />
      {/*Heading  Text Animation */}
      <div className="text-center pt-10" ref={ref}>
        {text.map((el, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 1,
              delay: i * 0.5, // Adjusted delay for smoother transitions
            }}
            className="text-2xl font-bold"
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default VideoAnimation;
