import React from "react";
import Badge from "./Badge";

export default ({ first, projet }) => {
  const { title, description, badges } = projet;
  console.log(first);
  return (
    <div
      className={"carousel-item " + (first ? "active" : " ") + " text-center"}
    >
      <div className="row">
        <div className="col md-4" />
        <div className="col md-4 content">
          <h4>{title}</h4>
          <p> {description} </p>
          {badges.map(badge => <Badge skill={badge} />)}
        </div>
        <div className="col md-4" />
      </div>

    </div>
  );
};
