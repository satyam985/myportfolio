import React from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid header">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand fs-4 fw-bold" to="/">
                  SatyamProject
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="active-menu"
                        className="nav-link"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="active-menu"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="active-menu"
                        className="nav-link"
                        to="/service"
                      >
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="active-menu"
                        className="nav-link"
                        to="/blogs"
                      >
                        Blogs
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="active-menu"
                        className="nav-link"
                        to="contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
