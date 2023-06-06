import React, { useEffect } from "react";
import "../css/modal.css";
import { Link, NavLink } from "react-router-dom";

const Modal = ({ closeModal, activeSkill }) => {
  useEffect(() => {
    console.log(activeSkill);
  }, [activeSkill]);

  return (
    <>
      <div className="container-fluid background-img d-flex align-items-center justify-content-center">
        <div className="container w-50 p-4 my-5 text-center modal-box">
          <div className="row">
            <div className="col-10 p-0">
              <h1 className="heading">{activeSkill.title}</h1>
            </div>
            <div className="col-2 m-auto position-relative">
              <div
                className="btn btn-danger fw-bolder d-flex justify-content-center align-items-center close-btn"
                onClick={() => closeModal(false)}
              >
                x
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col">
              <NavLink
                className="project-link link-info text-decoration-none fw-bold"
                to={activeSkill.link}
                target="_blank"
              >
                {activeSkill.link}
              </NavLink>
              {/* <Link
                className="project-link link-info text-decoration-none fw-bold"
                to={activeSkill.link}
                target="_blank"
              /> */}
              {/* <a
                className="project-link link-info text-decoration-none fw-bold"
                href={activeSkill.link}
              >
                {activeSkill.link}
              </a> */}
              <p className="fs-4">{activeSkill.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
