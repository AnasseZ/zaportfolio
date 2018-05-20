import React, { Component } from "react";
import "../App.css";
import CompetencesList from "./CompetencesList";
import Header from "./Header";
import Projets from "./Projets";
import Experiences from "./Experiences";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <CompetencesList />
        <Projets />
        <Experiences />
      </div>
    );
  }
}

export default App;
