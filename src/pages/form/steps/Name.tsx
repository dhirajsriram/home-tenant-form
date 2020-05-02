import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { SETSTEP } from "../../../store/constants/constants";
import TextInput from "../../../common/formsElement/TextInput";

function Name() {
  const dispatch = useDispatch();
  const nameSubmit = (e: any) => {
    dispatch({ type: SETSTEP, payload: { step: 1 } });
  };
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">Enter your name</legend>
      <div className="form-text-input-block">
        <TextInput
          id="first-name"
          placeholder="First Name"
          pattern={/^[a-zA-Z]+$/}
        ></TextInput>
        <TextInput
          id="last-name"
          placeholder="Last Name"
          pattern={/^[a-zA-Z]+$/}
        ></TextInput>
      </div>
      <div className="form-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => nameSubmit(e)}
        >
          Next
        </Button>
      </div>
    </fieldset>
  );
}

export default Name;
