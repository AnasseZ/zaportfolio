import React, { Component } from "react";
import "../App.css";
import CompetencesList from "./CompetencesList";
import Header from "./Header";
import Projets from "./Projets";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CompetencesList />
        <Projets />
      </div>
    );
  }
}

export default App;
