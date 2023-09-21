import { useState } from "react";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const Rooms = ["HoneyMoon", "Luxury", "Double", "Single", "Family"];

  return (
    <nav
      style={{ zIndex: 2 }}
      className="sticky pl-5  pb-0 bg-black flex justify-between items-center top-0 left-0 right-0 opacity-9 "
    >
      <div className="border-t-2 border-white border-b-2 text-white text-xl">
        Zen Hotel
        <p>Middlesbrough</p>
      </div>

      <div className="relative flex p-5 text-white">
        <h1
          onClick={toggleDropdown}
          className="cursor-pointer bg-purple-900 p-5 rounded-xl"
        >
          Check Availability
        </h1>

        {isDropdownOpen && (
          <div className="relative flex flex-col left-0 mt-2 border border-white p-10 text-black bg-slate-300 pt-2 pb-2 rounded font-sans">
            What are you looking for?
            <select className="font-sans bg-purple-900 text-white text-xl hover:bg-purple-900 hover:rounded-xl">
              {Rooms.map((room, index) => (
                <option
                  className="border font-sans pt-4 border-black"
                  key={index}
                >
                  {room}
                </option>
              ))}
            </select>
            <button className="bg-slate-400 mt-2 rounded-lg p-2 font-sans">
              Submit
            </button>
          </div>
        )}
        <button className="text-white p-5"> Food</button>
        <button className="text-white p-5"> Weddings</button>
        <button className="text-white p-5"> Spa</button>
      </div>
    </nav>
  );
}

export default Nav;
