import React, { Component } from "react";
import { Button } from "react-bootstrap/lib";

class CompetencesList extends Component {
  render() {
    return (
      <div className="Competences">
        <div className="title">
          <h1>Compétences</h1>
          <Button bsStyle="warning">Warning</Button>
        </div>
        <div className="competences-item">
          <ul>
            <li> Développement de applications web.</li>
            <li> Gestion de projet </li>
          </ul>
          <Button bsStyle="link"> En savoir + </Button>
          <Button bsStyle="primary">Primary</Button>
        </div>
        <Button bsStyle="info"> En savoir + </Button>
        <Button bsStyle="success">Primary</Button>
        <Button>Warning</Button>
      </div>
    );
  }
}

export default CompetencesList;
