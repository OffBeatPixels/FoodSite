import React, { useRef, useEffect } from "react";

export default function BannerSlider() {
  const sliderRef = useRef(null);
  // const nextBtnRef = useRef(null);
  // const prevBtnRef = useRef(null);

  // useEffect(() => {
  //   const nextBtn = nextBtnRef.current;
  //   const prevBtn = prevBtnRef.current;

  //   // Event handlers for next and previous buttons
  //   nextBtn.onclick = () => moveSlider("next");
  //   prevBtn.onclick = () => moveSlider("prev");

  //   // Cleanup event listeners on component unmount
  //   // return () => {
  //   //   nextBtn.onclick = null;
  //   //   prevBtn.onclick = null;
  //   // };
  // }, []);

  function moveSlider(direction) {
    const slider = sliderRef.current;
    const sliderList = slider.querySelector(".list");
    const sliderItems = sliderList.querySelectorAll(".item");

    if (direction === "next") {
      sliderList.appendChild(sliderItems[0]); // Move first item to the end
      slider.classList.add("next");
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]); // Move last item to the start
      slider.classList.add("prev");
    }

    slider.addEventListener(
      "animationend",
      () => {
        if (direction === "next") {
          slider.classList.remove("next");
        } else {
          slider.classList.remove("prev");
        }
      },
      { once: true } // Ensures the listener is removed after the animation ends
    );
  }

  return (
    <div>
      <div className="slider" ref={sliderRef}>
        <div className="list sm:object-scale-down">
          <div className="item ">
            <video
              src="./src/assets/food/magnet-food 2.mp4"
              alt="banner-video"
              controls
              autoPlay
              muted
            />
          </div>
          {/* <div className="item">
            <img src="./src/assets/food/Service_1.webp" alt="Service 1" />
          </div>
          <div className="item">
            <img src="./src/assets/food/Service_2.webp" alt="Service 2" />
          </div>
          <div className="item">
            <img src="./src/assets/food/Service_3.webp" alt="Service 3" />
          </div>
          <div className="item">
            <img src="./src/assets/food/Service_4.webp" alt="Service 4" />
          </div> */}
        </div>

        {/* <div className="nextPrevArrows">
          <button className="prev" ref={prevBtnRef}>
            &lt;
          </button>
          <button className="next" ref={nextBtnRef}>
            &gt;
          </button>
        </div> */}
      </div>
    </div>
  );
}
