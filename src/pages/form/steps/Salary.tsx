import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { SETSTEP } from "../../../store/constants/constants";
import RadioInput from "../../../common/formsElement/RadioInput";

function Salary() {
  const dispatch = useDispatch();
  const salarySubmit = (e: any) => {
    dispatch({ type: SETSTEP, payload: { step: 2 } });
  };
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">Enter your Salary</legend>
      <div className="radio-block">
      <RadioInput name="salary" value="0-1000" id="zero-to-thousand" />
      <RadioInput
        name="salary"
        value="1000-2000"
        id="thousand-to-two-thousand"
      />
      <RadioInput
        name="salary"
        value="2000-3000"
        id="two-thousand-to-three-thousand"
      />
      <RadioInput
        name="salary"
        value="3000-4000"
        id="three-thousand-to-four-thousand"
      />
      <RadioInput name="salary" value="Over 4000" id="Over-four-thousand" />
      </div>
      <div className="form-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => salarySubmit(e)}
        >
          Next
        </Button>
      </div>
    </fieldset>
  );
}

export default Salary;
