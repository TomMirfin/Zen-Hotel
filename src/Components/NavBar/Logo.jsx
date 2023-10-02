import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="text-white text-6xl font-bold flex">
        Z-<p className="text-cyan-200">H</p>
      </h1>
    </Link>
  );
}

export default Logo;
