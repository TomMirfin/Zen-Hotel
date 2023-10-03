import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RoomData from "./RoomData";

const RoomCarousel = () => {
  return (
    <Carousel
      axis="vertical"
      className="h-2/3 w-screen"
      autoPlay
      showThumbs={false}
      dynamicHeight={false}
      infiniteLoop={true}
    >
      {RoomData.map((room) => (
        <div
          className="h-screen flex items-center justify-center"
          key={room.id}
        >
          <img
            src={room.IMG}
            alt={room.name}
            className="ml-2 h-1/3 w-auto max-w-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default RoomCarousel;
