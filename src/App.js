import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";
import Intro from "./components/Intro.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Content">
        <Intro />
      </div>
      <Footer />
    </div>
  );
}

export default App;
