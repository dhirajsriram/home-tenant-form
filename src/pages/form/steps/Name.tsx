import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { SETSTEP } from "../../../store/constants/constants";
import TextInput from "../../../common/formsElement/TextInput";

function Name() {
  const dispatch = useDispatch();
  const form = useSelector((state: any) => state.reducer.form);
  const nameSubmit = (e: any) => {
    dispatch({ type: SETSTEP, payload: { step: 1 } });
  };
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">Enter your name</legend>
      <div className="form-text-input-block">
        <TextInput
          id="first-name"
          type="text"
          placeholder="First Name"
          pattern={/^[a-zA-Z]+$/}
        ></TextInput>
        <TextInput
          id="last-name"
          type="text"
          placeholder="Last Name"
          pattern={/^[a-zA-Z]+$/}
        ></TextInput>
      </div>
      <div className="form-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => nameSubmit(e)}
          disabled={!(form['first-name'].valid && form['last-name'].valid)}
        >
          Next
        </Button>
        <span className="press-enter-span">or press enter</span>
      </div>
    </fieldset>
  );
}

export default Name;
