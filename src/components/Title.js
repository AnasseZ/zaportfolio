import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div className="col-lg-12 text-center">
        <h1 className="title">{this.props.title}</h1>
        <hr />
      </div>
    );
  }
}

export default Title;
