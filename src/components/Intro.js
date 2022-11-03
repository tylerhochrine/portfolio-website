import "../css/Intro.css";
import * as Constants from "../constants/index.js";
import Button from "react-bootstrap/Button";

function Intro() {
  return (
    <div className="Intro-container" id="intro">
      <div className="Intro-header">
        <h1 className="Intro-header-text">{Constants.H1Text}</h1>
        <h4 className="Subheader-text">{Constants.H4Text}</h4>
      </div>
      <div className="Buttons-container">
        <Button href="#education" className="Intro-button">
          About Me
        </Button>
        <Button href="#portfolio" className="Intro-button">
          My Portfolio
        </Button>
      </div>
    </div>
  );
}

export default Intro;
