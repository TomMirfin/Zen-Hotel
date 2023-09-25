import DropDown from "./DropDown";
import Logo from "./Logo";
import "./NavBar.css";
import { NavBarItems } from "./NavInfo";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [dropDown, setDropDown] = useState(false);

  // Toggle the dropdown menu when the title is clicked
  const handleTitleClick = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className="navBar">
      <Logo />
      <div>
        <h1 onClick={handleTitleClick}>Check Availability</h1>
        {dropDown && <DropDown />}
      </div>
      {/* Render the dropdown menu if dropDown state is true */}

      {NavBarItems.map(
        (item) =>
          item.title !== "Check Availability" ? (
            <h1 key={item.title} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </h1>
          ) : null // Don't render the title again
      )}
      <div></div>
    </nav>
  );
}

export default Nav;
