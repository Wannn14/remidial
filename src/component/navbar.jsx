import React from "react";
import rec74 from "../assets/Rectangle 74.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md ">
        <div style={{backgroundColor: "#f1f3ff"}} className="container-fluid">
          <p
            style={{marginLeft: "136px", marginTop: "25px"}}
            className="navbar-brand"
          >
            <img src={rec74} alt="logo" />
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div style={{marginRight: "249px"}} className="navbar-nav ms-auto">
              <a
                style={{marginRight: "32px"}}
                className="nav-link"
                aria-current="page"
                href="#Ourservice"
              >
                Our Service
              </a>
              <a
                style={{marginRight: "32px"}}
                className="nav-link"
                href="#whyus"
              >
                Why Us
              </a>
              <a
                style={{marginRight: "32px"}}
                className="nav-link"
                href="#Testimonial"
              >
                Testimonial
              </a>
              <a style={{marginRight: "32px"}} className="nav-link" href="#FAQ">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
