
        {/* <div className="custom-shape">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div> */}
import React from "react";
import styled from "styled-components";
import G1 from "/src/assets/food/G1.webp";
import G2 from "/src/assets/food/clubhouse.webp";
import FadeInWhenVisible from "../ui/FadeInWhenVisible ";
import { motion, useScroll, useTransform } from "framer-motion";

const cardsData = [
  {
    id: 1,
    img: G1, // Imported image
    title: "Mahogany Farms",
  },
  {
    id: 2,
    img: G2, // Replace with another image if needed
    title: "Green Pastures",
  },
  // Add more cards as needed
];

const Card = () => {
  // Scroll-based animation
  const { scrollYProgress } = useScroll(); // Tracks scroll position

  // Apply smooth easing to the transform value and adjust it to get the desired effect
  const image1X = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 800]);
  const image2X = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -800]);

  // Apply similar movement to the text
  const text1X = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 800]);
  const text2X = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -800]);

  // Apply similar movement to the "Book now" text
  const bookNow1X = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 500]);
  const bookNow2X = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -500]);

  return (
    <FadeInWhenVisible>
      <StyledWrapper className="w-full flex flex-col text-black relative  pb-24 ">
        <h2 className="text-[40px] font-piston font-extrabold uppercase py-8 text-center ">
          Explore
        </h2>

        <div className="md:flex flex-row justify-between">
          {cardsData.map((item, index) => (
            <div className="card" key={item.id}>
              <div className="" />
              <div className="content">
                <div className="logo m-2 md:m-0">
                  {/* Motion applied to images for scroll-based animation */}
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="logo-img"
                    style={{
                      x: index === 0 ? image1X : image2X, // Apply different scroll values for different images
                    }}
                  />
                </div>
                {/* Motion applied to text for scroll-based animation */}
                <motion.span
                  className="logo-bottom-text"
                  style={{
                    x: index === 0 ? text1X : text2X, // Apply the same scroll effect to the text
                  }}
                >
                  {item.title}
                </motion.span>
              </div>
              {/* Motion applied to "Book now" text */}
              <motion.span
                className="bottom-text"
                style={{
                  x: index === 0 ? bookNow1X : bookNow2X, // Apply the same scroll effect to the "Book now" text
                }}
              >
                Book now
              </motion.span>
            </div>
          ))}
        </div>
      </StyledWrapper>
    </FadeInWhenVisible>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 450px;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
  }

  .blend {
    mix-blend-mode: darken; /* Change this to your desired blend mode */
  }

  .logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    top: 0;
    left: 0;
    border-radius: 10px;
    transition: transform 0.5s ease-in-out;
    z-index: 1;
  }

  .border {
    position: absolute;
    inset: 0;
    border: 2px solid white;
    opacity: 0;
    transform: rotate(10deg);
    transition: all 0.5s ease-in-out;
    z-index: 2;
  }

  .logo-bottom-text {
    position: absolute;
    bottom: 25px;
    color: white;
    font-size: 20px;
    opacity: 0;
    margin-left: 8vw;
    transition: all 0.5s ease-in-out;
    z-index: 3; /* Place above image and border */
  }

  .bottom-text {
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    font-size: 10px;
    text-transform: uppercase;
    padding: 0px 5px 0px 8px;
    color: black;
    background: white;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    z-index: 3;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card:hover .logo-img {
    transform: scale(1);
  }

  .card:hover .border {
    inset: 15px;
    opacity: 1;
    transform: rotate(0);
  }

  .card:hover .bottom-text {
    opacity: 1;
    letter-spacing: 7px;
  }

  .card:hover .logo-bottom-text {
    opacity: 1;
    letter-spacing: 9.5px;
  }

  /** For tablet devices **/
  @media (min-width: 320px) and (max-width: 1023px) {
    .card {
      width: 300px;
      height: 200px;
      margin: auto;
      gap: 20px;
      margin-bottom: 20px;
    }
    .logo-bottom-text {
      font-size: 20px;
    }
    .logo-img {
      width: 300px;
    }
  }
`;

export default Card;

