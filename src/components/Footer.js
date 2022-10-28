import "../css/Footer.css";
import * as Constants from "../constants/index.js";

function Footer() {
  return (
    <div className="Footer-container">
      <h5 className="Footer-text">{Constants.FooterText}</h5>
    </div>
  );
}

export default Footer;
