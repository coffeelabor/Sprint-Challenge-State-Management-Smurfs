import React, { useState } from "react";
import Smurf from "./Smurf";
import { postSmurfs } from "./actions";

const SmurfList = props => {
  console.log("SmurfList props", props);

  const [smurfState, setSmurfState] = useState({
    name: "",
    age: 0,
    height: ""
  });

  const handleChanges = e => {
    e.preventDefault();
    setSmurfState({ ...smurfState, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Howdy</h2>
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} />
      ))}
      <form onSubmit={postSmurfs}>
        <input
          type="text"
          name="name"
          value={props.postSmurfs.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="age"
          value={props.postSmurfs.age}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="name"
          value={props.postSmurfs.height}
          onChange={handleChanges}
        />
      </form>
    </div>
  );
};

export default SmurfList;
