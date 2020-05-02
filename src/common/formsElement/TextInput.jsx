import React from "react";

function TextInput(props) {
  return (
    <React.Fragment>
      <input
        type="text"
        className="form-input"
        {...props}
      />
      <label htmlFor={props.id} className="form-label">{props.value}</label>
    </React.Fragment>
  );
}

export default TextInput;
