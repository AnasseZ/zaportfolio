import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Projet from "./Projet";
import projets from "../constantes/projets.js";
import Title from "./Title";
import CarouselItem from "./CarouselItem";

class Projets extends Component {
  render() {
    const size = projets.length;

    const liCustom = <li data-target="#demo" data-slide-to="3" />;
    return (
      <ScrollableAnchor id={"projets"}>
       <div className="container text-center">
        <Title title="Projets" />
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            {projets.map((projet, index) => {
              console.log(index);
              const first = index == 0 ? true : false;
              console.log(first);
              return first ? (
                <li data-target="#demo" data-slide-to="0" className="active" />
              ) : (
                <li data-target="#demo" data-slide-to={index.toString()} />
              );
            })}
          </ul> 
            
          <div className="carousel-inner">
            {projets.map((projet, index) => {
              console.log(index);
              const first = index == 0 ? true : false;
              console.log(first);
              return <CarouselItem first={first} projet={projet} />;
            })}
          </div>

          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div></div>
      </ScrollableAnchor>
    );
  }
}

export default Projets;
