import { useState } from "react";
import PropTypes from "prop-types";

export default function ImageWithHoverOverlay({ image, overlayContent }) {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle = {
    opacity: 1,
    transition: "opacity 1s ease",
  };

  const hoverStyle = {
    opacity: 0.5,
    transition: "opacity 0.3s ease",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("Mouse Entered");
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 1000);
    console.log("Mouse Left");
  };

  return (
    <div className="relative">
      <img
        className="w-90 h-80 m-2"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseLeave}
        style={isHovered ? hoverStyle : defaultStyle}
        src={image}
        alt="image"
      />
      {isHovered && (
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {overlayContent}
          </div>
        </div>
      )}
    </div>
  );
}
ImageWithHoverOverlay.propTypes = {
  image: PropTypes.string.isRequired, // Should be a string (image URL) and is required.
  overlayContent: PropTypes.node.isRequired, // Can be any valid React node and is required.
};
