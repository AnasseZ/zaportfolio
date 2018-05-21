import React from "react";

import CountUp from "react-countup";

import Badge from "./Badge";

const Competence = ({ competence, isVisible }) => {
  const { intitule, description, skills, value } = competence;

  return (
    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div className="skill5-counter">
        <p className="counter-count">
          {isVisible ? <CountUp start={0} end={value} /> : null}
        </p>
        <p className="counter-bottom">{intitule}</p>
      </div>
    </div>
  );
};

/* <div className="col-md-4">
      <div className="highlight equal">
        <h2>{intitule}</h2>
        <p>{description}</p>
        {skills.map(skill => {
          return (<Badge skill={skill} />);
        })}
      </div>
    </div> */

export default Competence;
