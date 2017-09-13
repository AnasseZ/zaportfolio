import React, { Component } from "react";
import "./App.css";
import CompetencesList from "./CompetencesList";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CompetencesList />
      </div>
    );
  }
}

export default App;
