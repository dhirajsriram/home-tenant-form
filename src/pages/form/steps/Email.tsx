import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { SETSTEP } from "../../../store/constants/constants";
import TextInput from "../../../common/formsElement/TextInput";

function Email() {
  const dispatch = useDispatch()
  const emailSubmit = (e:any) => {
    dispatch({type : SETSTEP, payload: {step: 2}})
  }
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">Enter your Email Address</legend>
      <TextInput id="email" placeholder="Email" pattern={/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/}/>
      <div className="form-button-container">
      <Button variant="contained" color="primary" onClick={(e) => emailSubmit(e)}>
        Next
      </Button>
      </div>
    </fieldset>
  );
}

export default Email;
