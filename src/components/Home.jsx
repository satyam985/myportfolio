import React from "react";
import { NavLink } from "react-router-dom";
import "../css/home.css";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <>
      <div className="container-fluid mainBox">
        <div className="row px-5 d-flex align-items-center justify-content-between">
          <div className="col-md-6 mx-auto text-center">
            <h1 className="intro fw-bolder">
              Hello, I'm <br></br>
              <span className="text-primary pt-3 name"> Satyam</span>
            </h1>
            <ReactTypingEffect
              className="typing-text"
              text={["Programmer", "Web Developer", "Photographer"]}
              speed={80}
              eraseSpeed={100}
              eraseDelay={600}
              typingDelay={100}
            />
            <br />
            <NavLink to="/about">
              <button className="btn btn-outline-primary border-2 rounded-pill my-4 button">
                About Me
              </button>
            </NavLink>
          </div>
          <div className="col-md-6 mx-auto d-flex justify-content-end">
            <img
              className="img"
              src="https://ik.imagekit.io/satyamimages/tr:w-800/home_o06MJ_KUPfm.jpg?updatedAt=1631163909884"
              srcSet="https://ik.imagekit.io/satyamimages/logoDark_hr9OS37CtE.png?updatedAt=1631163912894 1000w ,https://ik.imagekit.io/satyamimages/tr:w-800/home_o06MJ_KUPfm.jpg?updatedAt=1631163909884 1500w,"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
