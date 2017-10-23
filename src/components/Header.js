import React, { Component } from "react";
import { Button } from "react-bootstrap/lib";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron text-center main-header">
        <Navbar />
        <div className="row">
          <p className="header-title"> Anasse Zougarh </p>
          <p> Etudiant Master MIAGE </p>
          <Button bsStyle="link"> En savoir + </Button>
        </div>
      </div>
    );
  }
}

export default Header;
