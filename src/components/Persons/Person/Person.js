import React from "react";
import persStyle from "./Person.css";

const person = props => {
  return (
    <div className={persStyle.Person}>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
