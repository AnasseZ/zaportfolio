import React, { Component } from "react";
import Projet from "./Projet";
import projets from "../constantes/projets.js";

class Projets extends Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <h1> Projets </h1>
        <br />
        <div className="row">
          {projets.map(projet => {
            return (
              <Projet title={projet.title} description={projet.description} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projets;
