import React, { Component } from "react";
import { connect } from "react-redux";

import { initIndexPageTriggered } from "./actions/initIndexPage";
import { initShopPageTriggered } from "./actions/initShopPage";
import { initRegPageTriggered } from "./actions/initRegPage";
import { headerTriggered } from "./actions/header";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.initIndexPageTriggered();
    this.props.initRegPageTriggered();
    this.props.initShopPageTriggered();
    this.props.headerTriggered();
  }
  render() {
    let loading = this.props.state.indexData.loading;
    let preloader =
      "https://i.pinimg.com/originals/76/77/ed/7677edd5a44b10130b8824ca020ba60b.gif";
    if (loading) {
      return (
        <div
          className="preloader"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={preloader}
            style={{ height: "100vh" }}
            className="App-preloader"
            alt="preloader"
          />
        </div>
      );
    }

    return <div className="">{JSON.stringify(this.props.state)}</div>;
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  initIndexPageTriggered() {
    dispatch(initIndexPageTriggered());
  },
  initShopPageTriggered() {
    dispatch(initShopPageTriggered());
  },
  initRegPageTriggered() {
    dispatch(initRegPageTriggered());
  },
  headerTriggered() {
    dispatch(headerTriggered());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
