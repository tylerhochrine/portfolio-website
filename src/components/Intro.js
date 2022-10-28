import "../css/Intro.css";
import * as Constants from "../constants/index.js";

function Intro() {
  return (
    <div className="Header" id="intro">
      <h1 className="Header-text">{Constants.H1Text}</h1>
      <h4 className="Subheader-text">{Constants.H4Text}</h4>
    </div>
  );
}

export default Intro;
