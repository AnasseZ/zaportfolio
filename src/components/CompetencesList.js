import React, { Component } from "react";
import Competence from "./Competence";
import competences from "../constantes/competences";

class CompetencesList extends Component {
  render() {
    return (
      <div id="competences">
        <div className="jumbotron text-center">
          <div className="col-lg-12 text-center">
            <h1 className="title">Compétences</h1>
            <hr />
          </div>
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
      </div>
    );
  }
}

export default CompetencesList;
