import React from "react";
import styled from "styled-components";
import G1 from "../../assets/food/G1.jpg";

const Card = () => {
  return (
    <StyledWrapper className="w-full flex flex-col bg-yellow-300 rounded-br-full pb-10 ">
      <h2 className="text-2xl font-semibold text-darkGreen uppercase py-8 text-center">
        Explore
      </h2>
      <div className="card">
        <div className="border" />
        <div className="content">
          <div className="logo">
            <img
              src={G1} // Use the imported image
              alt="Logo"
              className="logo-img"
            />
          </div>
          <span className="logo-bottom-text">Mahogany Farms</span>
        </div>
        <span className="bottom-text">Book now</span>
      </div>
      
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 200px;
    background: #243137;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    margin: auto;
    transition: all 0.5s ease-in-out;
  }

  .logo-img {
    width: 50%; /* Make the image take full width */
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
    margin-top: 10px;
    color: #bd9f67;
    font-size: 15px;
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
`;
export default Card;
