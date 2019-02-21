import React, { Component } from "react";
import { connect } from "react-redux";

import { initIndexPageTriggered } from "./actions/initIndexPage";
import { initShopPageTriggered } from "./actions/initShopPage";
import { initRegPageTriggered } from "./actions/initRegPage";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.initIndexPageTriggered();
    this.props.initRegPageTriggered();
    this.props.initShopPageTriggered();
  }
  render() {
    let loading = this.props.state.indexData.loading;
    let preloader = "https://www.safia-fitness.ru/img/waiting.gif";
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
