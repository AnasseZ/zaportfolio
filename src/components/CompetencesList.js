import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import TrackVisibility from "react-on-screen";

import Competence from "./Competence";
import competences from "../constantes/competences";
import Title from "./Title";

const ComponentToTrack = props => {
  return (
    <div className="skill5">
      <div className="container">
        <Title title="Compétences" />
        <div className="row">
          {competences.map((competence, index) => {
            return (
              <Competence
                competence={competence}
                isVisible={props.isVisible}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CompetencesList = () => {
  return (
    <ScrollableAnchor id={"competences"}>
      <TrackVisibility once>
        <ComponentToTrack />
      </TrackVisibility>
    </ScrollableAnchor>
  );
};

export default CompetencesList;
