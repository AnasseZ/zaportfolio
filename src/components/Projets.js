import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Projet from "./Projet";
import projets from "../constantes/projets.js";
import Title from "./Title";

class Projets extends Component {
  render() {
    return (
      <ScrollableAnchor id={"projets"}>
        <div className="container text-center">
          <Title title="Projets" />
          <div className="row">
            {projets.map(projet => {
              return (
                <Projet title={projet.title} description={projet.description} />
              );
            })}
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Projets;
