import React from "react";
import Badge from "./Badge";

const Competence = ({ competence }) => {
  const { intitule, description, skills } = competence;
  return (
    <div className="col-md-4">
      <div className="highlight equal">
        <h2>{intitule}</h2>
        <p>{description}</p>
        {skills.map(skill => {
          return (<Badge skill={skill} />);
        })}
      </div>
    </div>
  );
};

export default Competence;
