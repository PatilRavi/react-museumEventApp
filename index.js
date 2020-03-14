import React, { Component } from "react";
import { render } from "react-dom";
import HelloText from "./HelloText";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to the Museum"
    };
  }

  getEvents = () => {
    
  }

  render() {
    return (
      <div>
        <HelloText name={this.state.name} />
        <button onClick={this.getEvents} className="button">
          View Events
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
