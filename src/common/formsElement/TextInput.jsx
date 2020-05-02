import React, { useState } from "react";

function TextInput(props) {
  const [valid, setValid] = useState(true);

  const validate = (e) => {
    setValid(props.pattern.test(e.target.value) && e.target.value.trim() !== "");
  };
  return (
    <div>
      <input
        type="text"
        className={`form-input${!valid ? " invalid" : ""}`}
        onChange={(e) => validate(e)}
        {...props}
      />
      <label htmlFor={props.id} className="form-label">
        {props.value}
      </label>
      {!valid && <div className="form-invalid">Enter a valid {props.id}</div>}
    </div>
  );
}

export default TextInput;
