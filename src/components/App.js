import React, { Component } from "react";
import "../App.css";
import CompetencesList from "./CompetencesList";
import Header from "./Header";
import Projets from "./Projets";
import Experiences from "./Experiences";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CompetencesList />
        <Projets />
        <Experiences />
      </div>
    );
  }
}

export default App;
