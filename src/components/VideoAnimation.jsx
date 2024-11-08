import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export const SlideUp = (delay) => {
  return {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: parseFloat(delay), // Ensure the delay is treated as a number
        ease: "easeOut",
      },
    },
  };
};

const VideoAnimation = () => {
//   const [videoWidth, setVideoWidth] = useState("100%");
//  const text = "OUR SERVICES".split(" ");
 // Add `inView` to detect scroll visibility
//  const { ref, inView } = useInView({
//    threshold: 0.5,
//    triggerOnce: false,
//  });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     let newWidth = 100;

  //     if (scrollY >= 0 && scrollY <= 300) {
  //       newWidth = 100 - (scrollY / 300) * 30;
  //     } else if (scrollY > 300) {
  //       newWidth = 70;
  //     }
  //     setVideoWidth(newWidth + "%");
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [window.innerWidth]);

  
  return (
    <div className=" ">
      {/* Just to add scrolling space */}
      <video
        src="magnet-food.webm" // Replace with your video path
        autoPlay
        loop
        controls
        style={{
          width: "100vw",
          height: window.innerWidth < 768 ? "auto" : "90vh", // Responsive height
          objectFit: "cover",
          transition: "width 0.3s ease", // Smooth transition
          display: "block",
          margin: " auto",
        }}
      />
    </div>
  );
};

export default VideoAnimation;
