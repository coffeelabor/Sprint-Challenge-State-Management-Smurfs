import React from "react";

const Smurf = props => {
  console.log("Smurf props", props);
  return (
    <div>
      <h3>hi</h3>
      <hr />
      <h3>{props.smurf.name}</h3>
      <h3>{props.smurf.age}</h3>
      <h3>{props.smurf.height}</h3>
      <hr />
    </div>
  );
};

export default Smurf;
