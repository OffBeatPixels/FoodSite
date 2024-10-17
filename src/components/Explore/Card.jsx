import React from "react";
import styled from "styled-components";
import G1 from "../../assets/food/G1.jpg";
import G2 from "../../assets/food/clubhouse.jpg";

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
      <StyledWrapper className="w-full flex flex-col bg-[#97BC62] relative pb-24">
        <div className="custom-shape">
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
        </div>
        <h2 className="text-2xl text-white font-semibold uppercase py-8 text-center tracking-[5px]">
          Explore
        </h2>
        <div className="flex flex-row justify-center items-center mb-5">
          {cardsData.map((item) => (
            <div className="card " key={item.id}>
              <div className="border" />
              <div className="content">
                <div className="logo">
                  <img
                    src={item.img} // Use the mapped image from cardData
                    alt={item.title}
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
    );
};

const StyledWrapper = styled.div`
  .card {
    width: 500px;
    height: 300px;
    // background: #243137;
    background: #2c5f2d;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    margin-left: 10vw;
    transition: all 0.5s ease-in-out;
  }

  .logo-img {
    max-width: 50%; /* Make the image take full width */
    height: auto;
    border-radius: 10px;
    margin: auto;
    transition: transform 0.5s ease-in-out;
  }

  .border {
    position: absolute;
    inset: 0px;
    border: 2px solid #bd9f67;
    opacity: 0;
    transform: rotate(10deg);
    transition: all 0.5s ease-in-out;
  }

  .bottom-text {
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    font-size: 10px;
    text-transform: uppercase;
    padding: 0px 5px 0px 8px;
    color: #bd9f67;
    background: #243137;
    opacity: 0;
    letter-spacing: 7px;
    transition: all 0.5s ease-in-out;
  }

  .content {
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo-bottom-text {
    margin-top: 20px;
    color: #bd9f67;
    font-size: 20px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .card:hover .logo-img {
    transform: scale(1.1); /* Scale up on hover */
  }

  .card:hover .border {
    inset: 15px;
    opacity: 1;
    transform: rotate(0);
  }

  .card:hover .bottom-text {
    letter-spacing: 3px;

    opacity: 1;
    transform: translateX(-50%);
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
    width: calc(194% + 1.3px);
    height: 100px;
    transform: rotateY(180deg);
  }

  .custom-shape .shape-fill {
    fill: #ffffff;
  }

  /** For tablet devices **/
  @media (min-width: 768px) and (max-width: 1023px) {
    .custom-shape svg {
      width: calc(135% + 1.3px);
      height: 131px;
    }
  }
`;
export default Card;
