import { Link } from "react-router-dom";
import { NavBarItems } from "./NavInfo";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "./Logo";
import AccountDropDown from "./AccountDropDown";

function Nav() {
  const [dropDown, setDropdown] = useState(false);

  const handleMouseOver = () => {
    setDropdown(!dropDown);
  };

  return (
    <nav className="sticky top-0 z-50 font-bold text-xl flex justify-evenly bg-black text-white pt-10 transition-all duration-400 transition-delay-500 hover:bg-zinc-800">
      <div className="pb-10 pr-10">
        <Logo />
      </div>
      {NavBarItems.map((item) => (
        <h1 key={item.title}>
          <Link
            to={item.path}
            className="hover:text-cyan-400 transition-all duration-200"
          >
            {item.title}
          </Link>
        </h1>
      ))}
      <div
        className="relative" // Add relative positioning to this container
        onClick={handleMouseOver}
      >
        <AccountCircleIcon />
        {dropDown && (
          <div className="absolute top-12 right-0 bg-white text-black shadow-md p-2">
            <AccountDropDown />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
