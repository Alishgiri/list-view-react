import React, { Component } from "react";

import "./App.css";
import ListItem from "./components/List-item";

class App extends Component {
  render() {
    return (
      <div className="app-main">
        <ListItem />
      </div>
    );
  }
}

export default App;
