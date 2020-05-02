import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { SETSTEP } from "../../../store/constants/constants";
import TextInput from "../../../common/formsElement/TextInput";

function Phone() {
  const dispatch = useDispatch();
  const phoneSubmit = (e: any) => {
    dispatch({ type: SETSTEP, payload: { step: 3 } });
  };
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">Enter your phone</legend>
      <TextInput id="phone" placeholder="Phone" />
      <div className="form-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => phoneSubmit(e)}
        >
          Next
        </Button>
      </div>
    </fieldset>
  );
}

export default Phone;
