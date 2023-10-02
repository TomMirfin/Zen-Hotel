import "./index.css";
import FrontPage from "./Components/FrontPage";
import SecondPage from "./Components/SecondPage";
import Eat from "./Components/Food/Eat";
import Nav from "./Components/NavBar/Nav";

import Spa from "./Components/Facilities/Spa";
import Weddings from "./Components/Facilities/Weddings";
import AllRooms from "./Components/Rooms/AllRooms";
import BookingPage from "./Components/BookingPage";

function App() {
  return (
    <div>
      <Nav />
      <FrontPage />
      <SecondPage />

      <Eat />
      <Spa />
      <Weddings />
      <AllRooms />
      <BookingPage />
    </div>
  );
}

export default App;
