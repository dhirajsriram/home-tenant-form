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
      <TextInput id="phone" placeholder="Phone" pattern={/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/}/>
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
