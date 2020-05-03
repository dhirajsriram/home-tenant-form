import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SETFORMVALUE } from "../../store/constants/constants";

// Interface for props(textInput)
interface inputProps {
  id: string;
  pattern: RegExp;
  type: string;
  placeholder: string;
}

const TextInput = (props: inputProps) => {

  const { id, pattern, type, placeholder } = props;
  const [fieldValid, setFieldValid] = useState(true);
  const dispatch = useDispatch();
  const form = useSelector((state: any) => state.reducer.form);
  const { value, valid } = form[id];

  useEffect(() => {
    // Check if the field is valid on init.
    setFieldValid(valid);
  }, [valid]);

  const validate = (e: any) => {
    // Checks if the field is valid onChange.
    let validity =
      pattern.test(e.target.value) && e.target.value.trim() !== "";
    if (id === "phone") {
      validity =
        pattern.test(e.target.value) &&
        e.target.value.trim() !== "" &&
        e.target.value.length >= 10;
    }
    setFieldValid(validity);
    // Sets the redux store with updated data onChange
    dispatch({
      type: SETFORMVALUE,
      payload: {
        field: id,
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
        type={type}
        id={id}
        placeholder={placeholder}
        value={form[id].value ? form[id].value : ""}
      />
      <label htmlFor={id} className="form-label">
        {placeholder}
      </label>
      {!fieldValid && value !== null && (
        <div className="form-invalid">Enter a valid {id}</div>
      )}
    </div>
  );
}

export default TextInput;
