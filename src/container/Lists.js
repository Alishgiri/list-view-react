import ReactDOM from "react-dom";
import React, { Component } from "react";

import "./Lists.css";
import List from "../components/List-item";

class Lists extends Component {
  state = {
    scrollTop: 0,
    visibleHeight: 0
  };

  getListsCount = () => this.props.lists.count;
  getVisibleHeight = () => this.state.visibleHeight;
  getHeight = () => this.getListsCount() * this.props.rowHeight;
  getReactDomNodeElement = () => ReactDOM.findDOMNode(this.el);

  scrollHandler = event => this.setState({ scrollTop: event.target.scrollTop });
  checkIfVisible = index => {
    const elPosition = index * this.props.rowHeight;
    return (
      elPosition > this.state.scrollTop - this.props.overScanCount * this.props.rowHeight &&
      elPosition + this.props.rowHeight < this.state.scrollTop + this.state.visibleHeight + this.props.overScanCount * this.props.rowHeight
    );
  };

  componentDidMount() {
    this.getReactDomNodeElement().addEventListener("scroll", e =>
      this.scrollHandler(e)
    );
    const visibleHeight = parseFloat(
      window
        .getComputedStyle(this.getReactDomNodeElement())
        .getPropertyValue("height")
    );
    this.setState({ visibleHeight });
  }

  displayListsOrSpinner = () => {
    return this.props.lists.map((item, index) => {
      return (
        this.checkIfVisible(index) && (
          <div className="app" key={index} style={{height: `${this.getHeight()}px`, top: this.props.rowHeight * index}}>
            <h3>
              {item.first_name} {item.last_name}
            </h3>
            <p>{item.gender}</p>
            <p>{item.email}</p>
          </div>
        )
      );
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>List Displaying Huge Data.</h1>
        </header>
        <div className="huge-list">
          <div className="element" ref={element => (this.el = element)}>
            <div
              className="list-view"
              // style={{ height: `${this.getHeight()}px` }}
            >
              {this.displayListsOrSpinner()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lists;
