import React, { Component } from "react";

import "./App.css";
import Lists from "./container/Lists";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Lists />
        <hr />
      </div>
    );
  }
}

export default App;
