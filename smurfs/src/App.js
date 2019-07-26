import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "./components/actions";
import SmurfList from "./components/SmurfList";
import "./App.css";

const App = props => {
  console.log("getSmurfs app.js", props);
  useEffect(() => {
    props.getSmurfs();
  }, [props]);

  return (
    <div className="App">
      {/* <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div> */}
      <h1>Hello</h1>
      <SmurfList smurfs={props.state} />
    </div>
  );
};

const mapStateToProps = state => {
  console.log("mapStateToProps App.js", state);
  return { state: state.smurfs };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
