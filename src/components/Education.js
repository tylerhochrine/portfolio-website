import "../css/Education.css";
import * as Constants from "../constants/index.js";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import ClemsonPic from "../img/clemson-air.png";

function Education() {
  return (
    <div className="Education-container" id="education">
      <MDBRow>
        <MDBCol md="6">
          <img src={ClemsonPic} alt="" className="Clemson-pic" />
        </MDBCol>
        <MDBCol md="6">
          <MDBRow>
            <h4 className="Education-header-text">EDUCATION</h4>
          </MDBRow>
          <MDBRow>
            <h2 className="College-text">Clemson University</h2>
          </MDBRow>
          <MDBRow>
            <p className="Education-text">{Constants.EducationText}</p>
          </MDBRow>
          <MDBRow>
            <ul>
              <li className="List-item">{Constants.ListText}</li>
            </ul>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Education;
