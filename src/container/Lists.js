import { connect } from "react-redux";
import React, { Component } from "react";

import './Lists.css';
import List from "../components/List-item";
import * as actions from "../store/actions";
import Spinner from "../components/UI/Spinner/Spinner";

class Lists extends Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  displayListsOrSpinner = () => {
    let lists = <Spinner />;
    if (this.props.lists) {
      lists = this.props.lists.map(item => {
        return (
          <List
            firstName={item.first_name}
            lastName={item.last_name}
            gender={item.gender}
            email={item.email}
            key={item.id}
          />
        );
      });
    }
    return lists;
  };

  render() {
    return (
      <div>
        <header>
          <h1>List Displaying Huge Data.</h1>
        </header>
        <div className="huge-list">
            {this.displayListsOrSpinner()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: () => dispatch(actions.fetchList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
