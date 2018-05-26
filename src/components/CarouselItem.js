import React from "react";
import Badge from "./Badge";

export default ({ first, projet }) => {
  const { title, description, badges, url } = projet;

  return (
    <div
      className={"container carousel-item " + (first ? "active" : " ") + " text-center"}
    >
      <div className="row">
        <div className="col md-3" />
        <div className="col md-6 content">
          <h4>{title}</h4>
          <p> {description} </p>
          <br />
          <div className="row">
            <div className="col md-8">
              {badges.map(badge => <Badge skill={badge} />)}
            </div>
            <div className="col md-4 see-more">
              <a href={url}><button type="button" className="btn btn-light">
                Voir +
              </button></a>
            </div>
          </div>
        </div>
        <div className="col md-3" />
      </div>
    </div>
  );
};
