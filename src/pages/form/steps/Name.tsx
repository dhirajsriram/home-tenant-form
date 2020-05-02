import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { SETSTEP } from "../../../store/constants/constants";

function Name() {
  const dispatch = useDispatch()
  const nameSubmit = (e:any) => {
    dispatch({type : SETSTEP, payload: {step: 1}})
  }
  return (
    <fieldset className="form-fieldset">
      <legend className="form-label">What's your name?</legend>
      <input
        type="text"
        id="first-name"
        className="form-input"
        placeholder="First Name"
      />
      <input
        type="text"
        id="last-name"
        className="form-input"
        placeholder="Last Name"
      />
      <div className="form-button-container">
      <Button variant="contained" color="primary" onClick={(e) => nameSubmit(e)}>
        Next
      </Button>
      </div>
    </fieldset>
  );
}

export default Name;
