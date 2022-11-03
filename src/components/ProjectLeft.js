import "../css/ProjectLeft.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import { GoMarkGithub } from "react-icons/go";

function ProjectLeft(props) {
  return (
    <div className="Project-left-container">
      <MDBRow>
        <MDBCol md="5">
          <MDBRow>
            <h4 className="Project-header-text">Project</h4>
          </MDBRow>
          <MDBRow>
            <h2 className="Project-text">{props.ProjectName}</h2>
          </MDBRow>
          <MDBRow>
            <p className="Project-info">{props.ProjectInfo}</p>
          </MDBRow>
          <MDBRow>
            <ul>
              <li className="List-item">{props.ProjectTech}</li>
            </ul>
          </MDBRow>
          <MDBRow>
            <Button href={props.RepoLink} className="Project-button">
              View Code <GoMarkGithub className="Project-github-icon" />
            </Button>
          </MDBRow>
        </MDBCol>
        <MDBCol md="7">
          <video
            src={props.ProjectDemo}
            type="/video/mp4"
            className="Snake-demo"
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default ProjectLeft;
