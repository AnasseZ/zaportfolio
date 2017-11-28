import React, { Component } from "react";

class Projet extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="block">
          <span className="fa-stack fa-lg fa-5x">
            <i className="fa fa-square-o fa-stack-2x" />
            <i className="fa fa-cutlery fa-stack-1x" />
          </span>
          <p>{this.props.title}</p>
          <div>{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default Projet;
