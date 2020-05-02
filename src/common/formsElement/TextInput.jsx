import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SETFORMVALUE } from "../../store/constants/constants";

function TextInput(props) {
  const [valid, setValid] = useState(true);
  const dispatch = useDispatch();

  const validate = (e) => {
    let validity =
      props.pattern.test(e.target.value) && e.target.value.trim() !== "";
    setValid(validity);
    dispatch({
      type: SETFORMVALUE,
      payload: {
        field: props.id,
        value: {
          value: e.target.value,
          valid: validity,
        },
      },
    });
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
