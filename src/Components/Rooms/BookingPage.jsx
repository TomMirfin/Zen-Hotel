import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import RoomData from "./RoomData";
import { useState } from "react";
import BookingCalendar from "./BookingCalendar";
import BookingPageButton from "./BookingPageButton";
import { useNavigate } from "react-router-dom";

function BookingPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const room = RoomData.find((room) => room.id === parseInt(id));
  const [selectedDates, setSelectedDates] = useState([]);

  const goBack = () => {
    navigate(-1);
  };

  const handleSelectDates = (dates) => {
    console.log("dates", dates);
    setSelectedDates(dates);
  };

  let firstDate = null;
  let lastDate = null;
  let timeDifference = null;
  let totalNights = null;
  let firstPart = null;
  let secondPart = null;
  let roomPrice = null;
  let totalPrice = 0;

  if (selectedDates.length > 0) {
    firstDate = selectedDates[0];
    lastDate = selectedDates[selectedDates.length - 1];
    timeDifference = lastDate.getTime() - firstDate.getTime();
    totalNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    firstPart = firstDate.toLocaleDateString();
    secondPart = lastDate.toLocaleDateString();
    roomPrice = room.Price;
    totalPrice = Math.floor(totalNights * roomPrice);
    console.log("totalPrice", totalPrice);
  }

  return (
    <div className="h-screen overflow-hidden bg-slate-900 text-white flex align-items justify-center text-xl">
      <form className=" shadow-2xl p-5 mt-2 w-1/2 h-screen flex flex-col text-center">
        <h1 className="mt-2 font-bold">Make your Booking</h1>
        <h1 className="mt-2">Room Selection</h1>
        <div className="mt-2 text-slate-300">{room.name}</div>
        <h1 className="mt-2">Number of Guests</h1>
        <select className="bg-slate-600 mx-auto w-[100px] text-white">
          <option className="text-center">1</option>
          <option className="text-center">2</option>
          <option className="text-center">3</option>
          <option className="text-center">4</option>
        </select>
        <h1 className="mt-5">Select Dates</h1>
        <div className="flex justify-center">
          <h3>
            <BookingCalendar onSelectDates={handleSelectDates} />
          </h3>
        </div>
        <p className="text-slate-300">
          Dates: Check in:{firstPart}
          <br />
          Checkout: {secondPart}
        </p>
        <p>Nights: {totalNights}</p>
        <div className="mt-5 text-xl">Price Per Night</div>
        <div className="text-slate-300">£{room.Price}</div>
        <div className="mt-5 text-xl">Total Price</div>
        <div>£{totalPrice}</div>
        <div className="mt-5">
          <BookingPageButton />
        </div>
        <button onClick={goBack}>Go Back</button>
      </form>
    </div>
  );
}

BookingPage.propTypes = {
  selectedRoom: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sleeps: PropTypes.number.isRequired,
    Facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    Price: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookingPage;
