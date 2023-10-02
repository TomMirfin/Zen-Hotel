import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RoomData from "./RoomData";

const RoomCarousel = () => {
  return (
    <div className="">
      <Carousel dynamicHeight={false} autoPlay thumbWidth={80} thumbHeight={20}>
        {RoomData.map((room) => (
          <div key={room.id}>
            <img className="h-50 rounded-xl" src={room.IMG} alt={room.name} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RoomCarousel;
