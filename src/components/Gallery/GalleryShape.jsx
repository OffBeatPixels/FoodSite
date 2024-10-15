import React from "react";

const ShapeComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-1/2 h-full">
        {/* Yellow Background */}
        <div className="absolute inset-0 bg-yellow-400"></div>

        {/* Blue Shape */}
        <div className="absolute inset-0 bg-blue-600 clip-path">
          <div className="clip-path absolute inset-y-0 left-0 w-full h-full bg-blue-600 transform translate-x-1/2 clip-path-custom"></div>
        </div>
      </div>

      <style jsx>{`
        .clip-path {
          clip-path: path(
            "M 0 0 Q 0 25, 50 25 Q 100 25, 100 0 L 100 100 L 0 100 Z"
          );
        }
        .clip-path-custom {
          clip-path: path("M 100 0 Q 80 50, 100 100 Q 20 50, 0 0 Z");
        }
      `}</style>
    </div>
  );
};

export default ShapeComponent;
