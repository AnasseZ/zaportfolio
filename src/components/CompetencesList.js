import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import TrackVisibility from 'react-on-screen';

import Competence from "./Competence";
import competences from "../constantes/competences";
import Title from "./Title";



          /* <section>
        <div className="container text-center">
          <Title title="Compétences" />
          <div className="row">
            {competences.map(competence => {
              return (
                <Competence
                  competence={competence}
                />
              );
            })}
          </div>
        </div>
        </section> */
   const ComponentToTrack = (props) => {
      const style = {
          background: props.isVisible ? 'red' : 'blue'
      };

      if(props.isVisible) {

      }
  
      return <div className="skill5">
      <div className="container">
      <Title title="Compétences" />
        <div className="row">
        {competences.map(competence => {
              return (
                <Competence
                  competence={competence}
                  isVisible={props.isVisible}
                />
              );
            })}
        </div>
      </div>
    </div>;
  }
      
  const CompetencesList = () => {
    return (
      <ScrollableAnchor id={"competences"}>
      <TrackVisibility once>
      <ComponentToTrack />
      </TrackVisibility>
      </ScrollableAnchor>
    );
  }


export default CompetencesList;
