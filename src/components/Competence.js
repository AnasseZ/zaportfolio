import React from "react";

const Competence = ({ intitule, description }) => (
  <div className="col-md-4">
    <div className="block">
      <span className="fa-stack fa-lg fa-5x">
        <i className="fa fa-square-o fa-stack-2x" />
        <i className="fa fa-plane fa-stack-1x" />
      </span>
      <p>{intitule}</p>
      <div>{description}</div>
    </div>
  </div>
);

export default Competence;
