import React from "react";

function RadioInput(props) {
  return (
    <div className="radio-container">
      <input
        type="radio"
        id={props.id}
        value={props.value}
        name={props.name}
      />
      <label htmlFor={props.id}>{props.value}</label>
    </div>
  );
}

export default RadioInput;
