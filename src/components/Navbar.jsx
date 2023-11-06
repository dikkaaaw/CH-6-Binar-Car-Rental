import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <Link to={"/"}>
            <a href="/">
              <img
                className="navbar-brand"
                src={logo}
                alt=""
                style={{ width: "100px", height: "34px" }}
              />
            </a>
          </Link>
          <button
            className="btn btn-white navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title fw-bold"
                style={{ marginLeft: "20px" }}
                id="offcanvasRightLabel"
              >
                BCR
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body justify-content-end">
              <ul className="navbar-nav mr-2 mb-lg-0">
                <li className="nav-item mx-3 my-1">
                  <a className="nav-link" href="#ourService">
                    Our Services
                  </a>
                </li>
                <li className="nav-item mx-3 my-1">
                  <a className="nav-link ml" href="#whyUs">
                    Why Us
                  </a>
                </li>
                <li className="nav-item mx-3 my-1">
                  <a className="nav-link" href="#testimonySection">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item mx-3 my-1">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
              <button className="btn btn-register mx-3 my-1">Register</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
