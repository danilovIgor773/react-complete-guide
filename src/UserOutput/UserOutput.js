import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>Username is: {props.userName}</p>
      <p>Some paragraph!</p>
    </div>
  );
};

export default userOutput;
