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

const TextInput: React.FC<inputProps> = (props) => {
  const { id, pattern, type, placeholder } = props;
  const [fieldValid, setFieldValid] = useState<boolean | null>(true);
  const dispatch = useDispatch();
  const form: any = useSelector((state: any) => state.reducer.form);
  const { value, valid } = form[id];

  useEffect(() => {
    // Check if the field is valid on init.
    setFieldValid(valid);
  }, [valid]);

  const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Checks if the field is valid onChange.
    let value = (e.target as HTMLInputElement).value
    let validity = pattern.test(value) && value.trim() !== "";
    if (id === "phone") {
      validity =
        pattern.test(value) &&
        value.trim() !== "" &&
        value.length >= 10;
    }
    setFieldValid(validity);
    // Sets the redux store with updated data onChange
    dispatch({
      type: SETFORMVALUE,
      payload: {
        field: id,
        value: {
          value: value,
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
      {/* Invalid Text */}
      {!fieldValid && value !== null && (
        <div className="form-invalid">Enter a valid {id}</div>
      )}
    </div>
  );
};

export default TextInput;
