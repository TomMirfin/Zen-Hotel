import App from "./App"; // Your main application component
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Eat from "./Components/Food/Eat";
import AllRooms from "./Components/Rooms/AllRooms";
import RoomPage from "./Components/Rooms/SelectedRoomPage";
import BookingPage from "./Components/BookingPage";
import SelectedRoomPage from "./Components/Rooms/SelectedRoomPage";
import { element } from "prop-types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Food/Eat",
    element: <Eat />,
  },
  {
    path: "/Rooms/AllRooms",
    element: <AllRooms />,
  },
  {
    path: "/Rooms/:id",
    element: <RoomPage />,
  },
  {
    path: "/Rooms/:id/Booking",
    element: <BookingPage />,
  },
  {
    path: "Rooms/id:/selectedRoomPage",
    element: <SelectedRoomPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode> // This is the new way to render your app with React 18
);
