import G1 from "/src/assets/food/G1.webp";
import G2 from "/src/assets/food/G2.webp";
import G3 from "/src/assets/food/G3.webp";
import G4 from "/src/assets/food/G4.webp";
import G5 from "/src/assets/food/G5.webp";
import G6 from "/src/assets/food/G6.webp";
import G7 from "/src/assets/food/G7.webp";
import G8 from "/src/assets/food/G8.webp";
import G9 from "/src/assets/food/G9.webp";
import G10 from "/src/assets/food/G10.webp";
import G11 from "/src/assets/food/G11.webp";
import { Link } from "react-router-dom";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

const ParallaxImages = ({ images, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 90, // Adjusted for smoother motion
    stiffness: 150, // Adjusted for less stiffness
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 500], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, -100, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="my-2  ">
      <motion.div className="flex " style={{ x }}>
        {Array(3)
          .fill(images)
          .flat()
          .map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`parallax-image-${index}`}
              className="inline-block w-full mx-1   max-w-[350px] h-[20vh] md:h-[40vh]"
            />
          ))}
      </motion.div>
    </div>
  );
};

export default function ParallaxGallery() {
  const images = [G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11];

  return (
    <section className="bg-[#E7E8EA]  py-5">
      {/* <div className="flex justify-between">
        {" "} */}
      <h2 className="oswald mx-5 md:mx-0 md:px-20 uppercase   text-left">
        Gallery
      </h2>
      <p className="text-left mb-8 mx-5 md:mx-0 md:px-20  font-bold italic">
        Disclaimer - To ensure our customers' privacy, we do not share their
        photos.
        <Link className="mx-5  text-orange-500 font-extrabold " to="/gallery">
          View All
        </Link>
      </p>
      {/* </div> */}
      <ParallaxImages images={images} baseVelocity={-5} />
      <ParallaxImages images={images} baseVelocity={5} />
    </section>
  );
}
