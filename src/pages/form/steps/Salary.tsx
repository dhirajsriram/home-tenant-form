import React from "react";
import { Button, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { SETSTEP, SETFORMVALUE } from "../../../store/constants/constants";

function Salary() {
  const dispatch = useDispatch();
  const form = useSelector((state: any) => state.reducer.form);
  const salarySubmit = (e: any) => {
    dispatch({ type: SETSTEP, payload: { step: 2 } });
  };
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = (event.target as HTMLInputElement).value
    setValue(value);
    dispatch({
      type: SETFORMVALUE,
      payload: {
        field: 'salary',
        value: {
          value: value,
          valid: true
        },
      },
    });
  };

  const salaries = [
    { value: "0-1000", id: "zero-to-thousand" },
    { value: "1000-2000", id: "thousand-to-two-thousand" },
    { value: "2000-3000", id: "two-thousand-to-three-thousand" },
    { value: "3000-4000", id: "three-thousand-to-four-thousand" },
    { value: "Over 4000", id: "Over-four-thousand" },
  ];
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">Enter your Salary</legend>
      <div className="radio-block">
        {console.log(value)}
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
          row
        >
          {salaries.map((salary: any, index: number) => (
            <FormControlLabel
              name="salary"
              className={`radio-container${value === salary.value ? ' checked':''}`}
              value={salary.value}
              label={salary.value}
              id={salary.id}
              key={salary.id}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </div>
      <div className="form-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => salarySubmit(e)}
          disabled={!(form['salary'].valid)}
        >
          Next
        </Button>
      </div>
    </fieldset>
  );
}

export default Salary;
