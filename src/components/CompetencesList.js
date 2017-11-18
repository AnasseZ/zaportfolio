import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Competence from "./Competence";
import competences from "../constantes/competences";
import Title from "./Title";

class CompetencesList extends Component {
  render() {
    return (
      <ScrollableAnchor id={"competences"}>
        <div className="jumbotron text-center">
          <Title title="Compétences" />
          <div className="row">
            {competences.map(competence => {
              return (
                <Competence
                  intitule={competence.intitule}
                  description={competence.description}
                />
              );
            })}
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default CompetencesList;
