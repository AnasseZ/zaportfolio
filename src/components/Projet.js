import React, { Component } from "react";

class Projet extends Component {
  render() {
    return (
      <div className="col-md-4">
        <p>{this.props.title}</p>
        <div>{this.props.description}</div>
      </div>
    );
  }
}

export default Projet;
