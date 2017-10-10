import React, { Component } from "react";

class CompetencesList extends Component {
  render() {
    return (
      <div id="competences">
        <div className="container">
          <div className="col-lg-12 text-center">
            <h2 className="title">Compétences</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-sm-4">
              <span className="fa-stack fa-lg fa-5x">
                <i className="fa fa-square-o fa-stack-2x" />
                <i className="fa fa-plane fa-stack-1x" />
              </span>
              <h3>Développement web</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-4">
              <span className="fa-stack fa-lg fa-5x">
                <i className="fa fa-square-o fa-stack-2x" />
                <i className="fa fa-key fa-stack-1x" />
              </span>
              <h3>Gestion de projet </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-4">
              <span className="fa-stack fa-lg fa-5x">
                <i className="fa fa-square-o fa-stack-2x" />
                <i className="fa fa-key fa-stack-1x" />
              </span>
              <h3>Business Intelligence</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompetencesList;
