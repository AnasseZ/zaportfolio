import React from "react";

import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

import Badge from "./Badge";

const ComponentToTrack = ({ isVisible, value}) => {
  return <p className="counter-count">
  {isVisible ? <CountUp start={0} end={value} /> : 0} %
</p>
}

const Competence = ({ competence, index }) => {
  const { intitule, skills, value } = competence;
  return (
    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div className="skill5-counter">
        <TrackVisibility once>
          <ComponentToTrack  value={value}/>
        </TrackVisibility>
        <p
          className="counter-bottom"
          data-toggle="collapse"
          data-target={"#demo" + index}
        >
          {intitule}
        </p>
        <div id={"demo" + index} className="collapse">
          {skills.map(skill => {
            return <Badge skill={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Competence;
