import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="masthead" id="headerOne">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="page-heading">
                <h1>Zougarh Anasse</h1>
                <span className="subheading">Software developer</span>
                <br />
              </div>
              <div className="col-lg-8 col-md-10 mx-auto" id="btnDiv">
                <a href="#competences">
                  <i className="fa fa-lg fa-4x fa-angle-double-down fa-stack-1x"/>
                </a>
              </div>
              <br />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
