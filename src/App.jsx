import "./index.css";
import FrontPage from "./Components/FrontPage";
import SecondPage from "./Components/SecondPage";
import Nav from "./Components/Nav";
import Eat from "./Components/Food/Eat";

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
