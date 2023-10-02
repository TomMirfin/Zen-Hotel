import React from "react";
import { useParams } from "react-router-dom";
import RoomData from "./RoomData";
import Nav from "../NavBar/Nav";
import RoomCarousel from "./RoomCarousel";

function RoomPage() {
  const { id } = useParams();
  const room = RoomData.find((room) => room.id === parseInt(id));

  if (!room) {
    // Handle the case where the room is not found by showing an error message or redirecting
    return <div>Room not found</div>;
  }

  return (
    <div className="min-h-screen flex justify-between">
      <div className="p-10">
        <h1 className="text-5xl font-bold">{room.name}</h1>
        <div className="text-slate-400 italic">{room.Price} per night</div>
        <div className="text-xl pt-5">
          Sleeps: {room.sleeps}
          <div className="text-xl pt-2">Facilities:</div>
          {room.Facilities.map((facility, index) => (
            <div className="text-slate-500" key={index}>
              {facility}
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-cyan-400 rounded-lg p-2 hover:bg-cyan-600 hover:shadow-xl">
            Go To Booking
          </button>
        </div>
      </div>
      <div className="h-[50px]">
        <RoomCarousel room={room} />
      </div>
    </div>
  );
}

export default RoomPage;
