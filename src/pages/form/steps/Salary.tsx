//------------------- STEP 4 - Salary -------------------//
import React, { useEffect } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "./Fields.scss";
import { setFormValue } from "../../../store/action";

const Navigation: Function = React.lazy(() =>
  import("./navigation/Navigation")
);

const Salary: React.FC = () => {
  const dispatch = useDispatch();
  const form:any = useSelector((state: any) => state.reducer.form);
  const { t } = useTranslation();
  const [value, setValue] = React.useState<string>("");
  // List of salaries for radio button
  const salaries:Object[] = [
    { value: "0-1000", id: "zero-to-thousand" },
    { value: "1000-2000", id: "thousand-to-two-thousand" },
    { value: "2000-3000", id: "two-thousand-to-three-thousand" },
    { value: "3000-4000", id: "three-thousand-to-four-thousand" },
    { value: "Over 4000", id: "Over-four-thousand" },
  ];

  useEffect(() => {
    setValue(form["salary"].value);
  }, [form]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Dispatch event to Redux to update the salary
    let value = (event.target as HTMLInputElement).value;
    let payload = {
      field: "salary",
      value: {
        value: value,
        valid: true,
      },
    };
    setValue(value);
    dispatch(setFormValue(payload));
  };
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">{t("Enter your Salary")}</legend>
      <div className="radio-block">
        <RadioGroup
          aria-label="salary"
          className="radio-group"
          name="salary"
          value={value}
          onChange={handleChange}
          row
        >
          {salaries.map((salary: any, index: number) => (
            <FormControlLabel
              name="salary"
              className={`radio-container${
                value === salary.value ? " checked" : ""
              }`}
              value={t(salary.value)}
              label={t(salary.value)}
              id={salary.id}
              key={salary.id}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </div>

      <Navigation next={4} previous={2} field="salary" />
    </fieldset>
  );
};

export default Salary;
