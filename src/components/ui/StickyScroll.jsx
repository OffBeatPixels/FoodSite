"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../../utils";
import OperationsPage1 from "/src/assets/food/Service_page-1.png";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // const backgroundColors = [
  //   "var(--emerald-900)",
  //   "var(--green-100)",
  //   "var(--yellow-100)",
  // ];
  const backgroundColors = ["#FAE2C9", "#E7E8EA", "#1C845E", "#CC7869"];  // 


  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <section>
      {/* <motion.h3
        variants={SlideUp(0)}
        initial="hidden"
        whileInView="show"
        className=" h-[60vh] "
        style={{
          background: `url(${OperationsPage1}) center/contain no-repeat`,
          backgroundSize: "cover",
        }}
      ></motion.h3> */}
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[35rem] overflow-y-auto flex relative space-x-10  p-5"
        ref={ref}
      >
        <div className="div relative flex items-start px-10">
          <div className="max-w-3xl">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                className="my-10"
                id={`service${index + 1}`} // Add an id to each section
              >
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-[30px] font-sans  text-black"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
        <div
          // style={{ background: backgroundGradient }}
          className={cn(
            "block h-full w-[30%]  sticky top-1 ",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </section>
  );
};
