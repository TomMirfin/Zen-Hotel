import { checkAvailabilityDropDown } from "./NavInfo";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function DropDown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        className="bg-black"
        onChange={handleSelect}
        value={selectedOption}
      >
        <option className="bg-black" value="">
          Select a room
        </option>
        {checkAvailabilityDropDown.map((room) => (
          <option
            className="bg-black border border-white"
            key={room.id}
            value={room.path}
          >
            {room.title}
          </option>
        ))}
      </select>
      {selectedOption && (
        <Link className="ml-2" to={selectedOption}>
          Go to selected room
        </Link>
      )}
    </div>
  );
}

export default DropDown;
