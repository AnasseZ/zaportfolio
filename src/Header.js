import React, { Component } from "react";
import { Button } from "react-bootstrap/lib";

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <p> Anasse Zougarh </p>
        <p> Etudiant Master MIAGE </p>
        <Button bsStyle="link"> En savoir + </Button>
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
}

export default Header;
