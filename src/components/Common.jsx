import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-5 d-flex align-items-center justify-content-between">
          <div className="col-md-6 mx-auto">
            <h1 className="pt-4">
              {props.name}
              <span className="text-primary fw-bold pt-3"> Satyam</span>
            </h1>
            <h5 className="pb-1">
              We are the team of talented developers making websites
            </h5>
            <NavLink to={props.visit}>
              <button className="btn btn-outline-primary border-2 rounded-pill pt-2">
                {props.btnname}
              </button>
            </NavLink>
          </div>
          <div className="col-md-6 mx-auto">
            <img className="img-fluid" src={props.imgsrc} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Common;
