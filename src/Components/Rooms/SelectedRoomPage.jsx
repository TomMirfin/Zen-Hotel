import RoomData from "./RoomData";
import { useParams } from "react-router-dom";
import RoomCarousel from "./RoomCarousel";
import { Carousel } from "react-responsive-carousel";

function RoomPage() {
  const { id } = useParams();
  const room = RoomData.find((room) => room.id === parseInt(id));
  return (
    <div className="h-screen w-screen flex justify-evenly p-5 bg-slate-900 overflow-hidden ">
      <div className="flex justify-evenly bg-slate-800 p-5 rounded-3xl">
        <div className="text-bold text-5xl shadow-lg text-white">
          {room.name}
          <div className="text-slate-400 text-style-italic ">
            {room.Price} per night
          </div>
          <div className="text-xl pl-2 mt-5">
            Sleeps: {room.sleeps}
            <div className="text-xl pt-5">Facilities:</div>
            {room.Facilities.map((facility) => (
              <div className="text-slate-400" key={facility}>
                {facility}
                <div></div>
              </div>
            ))}
            <div className="text-xl pt-5">Description:</div>
            <div className="text-slate-400">{room.desciption}</div>
            <div className="flex justify-end  p-4">
              <button className="bg-cyan-400 rounded-lg p-2 hover:bg-cyan-600 hover:shadow-xl  flex justify-center items-center">
                {" "}
                Finalise Booking
              </button>
            </div>
          </div>
        </div>
      </div>
      <RoomCarousel images={room.images} />
    </div>
  );
}

export default RoomPage;
