import "../css/Contact.css";
import * as Constants from "../constants/index.js";
import Button from "react-bootstrap/Button";
import ResumePDF from "../img/Tyler_Hochrine.pdf";
import { TfiEmail, TfiLinkedin } from "react-icons/tfi";
import { TbMessageCircle2 } from "react-icons/tb";
import { GoMarkGithub } from "react-icons/go";

function Contact() {
  return (
    <div className="Contact-container" id="contact">
      <div className="Top-container">
        <h1 className="Contact-title">{Constants.ContactTitle}</h1>
        <p className="Contact-text">{Constants.ContactText}</p>
        <Button
          href="https://www.github.com/tylerhochrine/"
          className="Contact-button"
        >
          Portfolio
        </Button>
        <Button href={ResumePDF} className="Contact-button">
          Resume
        </Button>
      </div>
      <div className="Bottom-container">
        <h4 className="Contact-header-text">Contact Info</h4>
        <a className="Contact-method" href="mailto:tylerjhochrine@gmail.com">
          <TfiEmail className="Contact-icon" /> tylerjhochrine@gmail.com
        </a>
        <a className="Contact-method" href="sms:+18643855844">
          <TbMessageCircle2 className="Contact-icon" /> (864) 385-5844
        </a>
        <div className="Social-container">
          <a
            className="Social-bubble"
            href="https://www.linkedin.com/in/tyler-hochrine/"
          >
            <TfiLinkedin className="Linkedin-icon" />
          </a>
          <a
            className="Social-bubble"
            href="https://www.github.com/tylerhochrine/"
          >
            <GoMarkGithub className="Github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
