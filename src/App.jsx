import "./index.css";
import FrontPage from "./Components/FrontPage";
import SecondPage from "./Components/SecondPage";
import Eat from "./Components/Food/Eat";
import Nav from "./Components/NavBar/Nav";

function App() {
  return (
    <div>
      <Nav />
      <FrontPage />
      <SecondPage />
      <Eat />
    </div>
  );
}

export default App;
