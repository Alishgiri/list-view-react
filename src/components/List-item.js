import React from "react";
import { connect } from "react-redux";

import "./List-item.css";
import Lists from "../container/Lists";
import * as actions from "../store/actions";
import Spinner from "../components/UI/Spinner/Spinner";

class ListItem extends React.Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  renderList = () => {
    if (this.props.lists) {
      return (
        <Lists lists={this.props.lists} rowHeight={130} overScanCount={10} />
      );
    }
    return <Spinner />;
  };

  render = () => this.renderList();
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
)(ListItem);
