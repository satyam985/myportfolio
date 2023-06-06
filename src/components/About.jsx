import React from "react";
import "../css/about.css";
import text from "../images/text.png";
import SkillsIcon from "./SkillsIcon";

const About = () => {
  return (
    <>
      <div className="container-fluid ps-0">
        <div className="row bg-light">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              className="img-fluid my-image"
              src="https://ik.imagekit.io/satyamimages/tr:w-300/about1_82i4iaVYdq.png?updatedAt=1631163903761"
              alt="logo"
            />
          </div>
          <div className="col-md-8 px-4 d-flex flex-column justify-content-center">
            <h2 className="fw-bolder fs-1">About Myself</h2>
            <p className="fs-5 mt-3">
              I am a FrontEnd Developer working for around 1.5 years, building
              and maintaining responsive websites. Proficient in HTML, CSS,
              Bootstrap, Javascript plus modern library like React.js. Looking
              for an opportunity to work on React.js.
            </p>
            <a
              className="btn btn-outline-primary border-2 rounded-pill mb-4 mt-2 resume-btn"
              href="https://drive.google.com/file/d/1dORey76xAyP7mZYzWoeYoyg-gqx1K_jd/view?usp=sharing"
              role="button"
              target="_blank"
              download="Resume"
              rel="noreferrer noopener"
            >
              <img className="img-fluid me-2 resume" src={text} alt="logo" />
              Resume
            </a>
          </div>
        </div>
        <h2 className=" px-5 fw-bolder fs-2 mt-3">Skills</h2>
        <SkillsIcon />;
      </div>
    </>
  );
};

export default About;
