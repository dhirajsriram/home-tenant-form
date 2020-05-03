import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SETFORMVALUE } from "../../store/constants/constants";

function TextInput(props: any) {
  const [fieldValid, setFieldValid] = useState(true);
  const dispatch = useDispatch();
  const form = useSelector((state: any) => state.reducer.form);
  const { value, valid } = form[props.id];

  useEffect(() => {
    setFieldValid(valid);
  }, [valid]);

  const validate = (e: any) => {
    let validity =
      props.pattern.test(e.target.value) && e.target.value.trim() !== "";
    if (props.id === "phone") {
      validity =
        props.pattern.test(e.target.value) &&
        e.target.value.trim() !== "" &&
        e.target.value.length >= 10;
    }
    setFieldValid(validity);
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
        className={`form-input${
          !fieldValid && value !== null ? " invalid" : ""
        }`}
        onChange={(e) => validate(e)}
        {...props}
        value={form[props.id].value ? form[props.id].value  : "" }
      />
      <label htmlFor={props.id} className="form-label">
        {props.value}
      </label>
      {!fieldValid && value !== null && (
        <div className="form-invalid">Enter a valid {props.id}</div>
      )}
    </div>
  );
}

export default TextInput;
