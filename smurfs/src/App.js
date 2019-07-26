import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "./components/actions";
import SmurfList from "./components/SmurfList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div> */}
      <h1>Hello</h1>
      <SmurfList />
    </div>
  );
};

const mapStateToProps = state => {
  console.log("mapStateToProps App.js", state);
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(App);
