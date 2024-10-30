import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
 // Import your custom CSS for 3D effect

const Glide3DSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(sliderRef.current, {
      type: "carousel",
      perView: 3, // Show 3 slides at once
      focusAt: "center", // Focus on the center slide
      gap: 20, // Gap between slides
      autoplay: 3000, // Auto slide every 3 seconds
    });

    glide.mount();

    return () => glide.destroy();
  }, []);

  return (
    <div ref={sliderRef} className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <img
              src="https://picsum.photos/200"
              alt="Slide 1"
            />
          </li>
          <li className="glide__slide">
            <img
              src="https://picsum.photos/200"
              alt="Slide 2"
            />
          </li>
          <li className="glide__slide">
            <img
              src="https://picsum.photos/200"
              alt="Slide 3"
            />
          </li>
          <li className="glide__slide">
            <img
              src="https://picsum.photos/200"
              alt="Slide 4"
            />
          </li>
          <li className="glide__slide">
            <img
              src="https://picsum.photos/200"
              alt="Slide 5"
            />
          </li>
        </ul>
      </div>

      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          Prev
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          Next
        </button>
      </div>
    </div>
  );
};

export default Glide3DSlider;
