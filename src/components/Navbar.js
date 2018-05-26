import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="../icon.png" alt="logo" id="logo"/>
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#competences">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projets">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
