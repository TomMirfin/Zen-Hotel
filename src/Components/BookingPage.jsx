import PropTypes from "prop-types";

function BookingPage() {
  return (
    <div className="h-screen  bg-slate-400 flex align-items justify-center text-xl">
      <form className="border border-white p-5 mt-2 w-1/2 h-1/2 flex flex-col text-center">
        <h1 className="mt-2 font-bold">Make your Booking</h1>
        <h1 className="mt-2">Room Selection</h1>
        <div className="mt-2 bg-slate-700 text-white"></div>
        <h1 className="mt-2">Number of Guests</h1>
        <select className="bg-slate-100 w-[75]">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <h1 className="mt-5">Select Dates</h1>
        <div className="mt-2">Calendar to go here</div>
        <div className="mt-10 text-xl">Total Price</div>
      </form>
      <form></form>
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
