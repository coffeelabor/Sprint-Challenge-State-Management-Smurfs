import React from "react";
import Smurf from "./Smurf";

const SmurfList = props => {
  console.log("SmurfList props", props);
  return (
    <div>
      <h2>Howdy</h2>
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} />
      ))}
    </div>
  );
};

export default SmurfList;
