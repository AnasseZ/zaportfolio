import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import projets from "../constantes/projets.js";
import Title from "./Title";
import CarouselItem from "./CarouselItem";

class Projets extends Component {
  render() {
    return (
      <ScrollableAnchor id={"projets"}>
        <div className="container text-center">
          <Title title="Projets" />
          <br />
          <div id="demo" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {projets.map((projet, index) => {
                const first = index === 0 ? true : false;
                return <CarouselItem first={first} projet={projet} />;
              })}
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon" />
            </a>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Projets;
