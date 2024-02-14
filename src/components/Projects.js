import "../css/Projects.css";
import ProjectLeft from "../components/ProjectLeft.js";
import ProjectRight from "../components/ProjectRight.js";
import * as Constants from "../constants/index.js";

function Projects() {
  return (
    <div className="Projects-container" id="portfolio">
      <h1 className="Projects-header">Projects</h1>
      <ProjectLeft
        ProjectName="Wave Watcher"
        ProjectInfo={Constants.WaveInfo}
        ProjectTech={Constants.WaveTech}
        RepoLink="https://github.com/tylerhochrine/Wave-Watcher"
        ProjectDemo={require("../img/snake-demo.mov")}
      />
      <ProjectRight
        ProjectName="Lego VR"
        ProjectInfo={Constants.LegoInfo}
        ProjectTech={Constants.LegoTech}
        RepoLink="https://www.github.com/tylerhochrine/LegoVR/"
        ProjectDemo={require("../img/lego-demo.mp4")}
      />
      <ProjectLeft
        ProjectName="Snake"
        ProjectInfo={Constants.SnakeInfo}
        ProjectTech={Constants.SnakeTech}
        RepoLink="https://www.github.com/tylerhochrine/snake/"
        ProjectDemo={require("../img/snake-demo.mov")}
      />
    </div>
  );
}

export default Projects;
