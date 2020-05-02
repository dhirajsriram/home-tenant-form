import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { SETSTEP } from "../../../store/constants/constants";
import TextInput from "../../../common/formsElement/TextInput";

function Phone() {
  const dispatch = useDispatch();
  const form = useSelector((state: any) => state.reducer.form);
  const phoneSubmit = (e: any) => {
    dispatch({ type: SETSTEP, payload: { step: 3 } });
  };
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">Enter your phone</legend>
      <TextInput type="number" id="phone" placeholder="Phone" pattern={/^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:\s?\(\d+\))?(?:[-\/\s.]|\d)+$/}/>
      <div className="form-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => phoneSubmit(e)}
          disabled={!(form['phone'].valid)}
        >
          Next
        </Button>
      </div>
    </fieldset>
  );
}

export default Phone;
