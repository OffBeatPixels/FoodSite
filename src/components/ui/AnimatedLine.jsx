
import React from "react";

const AnimatedLine = () => {
  return (
    <div className="checkered-pattern w-full">
      <svg
        viewBox="0 0 3840 40" // Increased height in viewBox
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[2560px] h-auto"
      >
        {/* First Row */}
        <g transform="translate(0, 0)">
          {Array.from({ length: 214 }).map((_, index) => (
            <rect
              key={`row1-${index}`}
              x={index * 36}
              y="0"
              width="25"
              height="18"
              fill="#556b2f"
            />
          ))}
        </g>
        {/* Second Row */}
        <g transform="translate(18, 18)">
          {Array.from({ length: 214 }).map((_, index) => (
            <rect
              key={`row2-${index}`}
              x={index * 36}
              y="0"
              width="25"
              height="18"
              fill="#556b2f"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLine;
