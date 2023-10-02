import { Link, useParams } from "react-router-dom";
import RoomData from "./RoomData";
import styled from "styled-components";
import Nav from "../NavBar/Nav";

const StyledContainer = styled.div`
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #2e2d2c;
  flex-wrap: wrap;
  text-transform: uppercase;
`;

function AllRooms() {
  const { id } = useParams();
  const room = RoomData.find((room) => room.id === parseInt(id));
  return (
    <div>
      <Nav />

      <StyledContainer>
        {RoomData.map((room) => (
          <div key={room.id} className="m-5 shadow-2xl">
            <div className="font-bold flex justify-center bb-black text-white m-2">
              {room.name}
            </div>
            <div className=" flex items-center justify-center text-white ">
              <img src={room.IMG} alt="roomIMG" className="h-80 p-2" />
            </div>

            <div className="p-2 text-white">Sleeps: {room.sleeps}</div>
            <div className="p-2 text-white">
              Facilities: {room.Facilities.join(", ")}
            </div>
            <div className="p-2 text-white">Price: {room.Price}</div>

            <Link
              to={`/Rooms/${room.id}`}
              className="shadow-2xl rounded-2xl m-4 flex justify-center items-center text-black bg-cyan-200 hover:bg-cyan-600 "
            >
              Book Now
            </Link>
          </div>
        ))}
      </StyledContainer>
    </div>
  );
}

export default AllRooms;
