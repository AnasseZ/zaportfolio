import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Competence from "./Competence";
import competences from "../constantes/competences";
import Title from "./Title";

const CompetencesList = () => {
  return (
    <ScrollableAnchor id={"competences"}>
      <div className="skill5">
        <div className="container">
          <Title title="Compétences" />
          <div className="row">
            {competences.map((competence, index) => {
              return (
                <Competence
                  competence={competence}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
};

export default CompetencesList;
