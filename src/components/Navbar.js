import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#competences">Compétences</a>
              </li>
              <li>
                <a href="#experiences">Expériences</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
