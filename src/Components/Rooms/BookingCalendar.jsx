import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function BookingCalendar({ onSelectDates }) {
  const [selectedDates, setSelectedDates] = useState();

  const handleSelect = (date) => {
    setSelectedDates(date);
    onSelectDates(date);
  };

  return (
    <div>
      <Calendar
        selectRange={true}
        value={selectedDates}
        onChange={handleSelect}
        className="rounded-3xl text-black bg-slate-500"
      />
    </div>
  );
}

export default BookingCalendar;
