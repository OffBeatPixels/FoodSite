import React from "react";
import styled from "styled-components";
import G1 from "/src/assets/food/G1.webp";
import G2 from "/src/assets/food/clubhouse.webp";
import FadeInWhenVisible from "../ui/FadeInWhenVisible ";

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
  return (
    <FadeInWhenVisible>
      <StyledWrapper className="w-full flex flex-col  text-black relative pb-24  ">
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
        <h2 className="text-2xl    font-semibold uppercase py-8 text-center tracking-[5px]">
          Explore
        </h2>
        <div className="md:flex  flex-row justify-center items-center gap-10">
          {cardsData.map((item) => (
            <div className="card " key={item.id}>
              <div className="border" />
              <div className="content">
                <div className="logo">
                  <img
                    src={item.img} // Use the mapped image from cardData
                    alt={item.title}
                    loading="lazy"
                    className="logo-img"
                  />
                </div>
                <span className="logo-bottom-text">{item.title}</span>
              </div>
              <span className="bottom-text">Book now</span>
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
    object-fit: contian;
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

  .custom-shape {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape svg {
    position: relative;
    display: block;
    width: calc(130% + 100.3px);
    height: 100px;
    transform: rotateY(180deg);
    margin-bottom: -0px; /* Adjusted to reduce the gap below */
  }

  .custom-shape .shape-fill {
    fill: #ffffff;
  }

  /** For tablet devices **/
  @media (min-width: 320px) and (max-width: 1023px) {
    .custom-shape svg {
      width: calc(135% + 1.3px);
      height: 100px;
    }
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
