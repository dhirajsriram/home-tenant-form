import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import EmailIcon from "@material-ui/icons/Email";
import MoneyIcon from "@material-ui/icons/Money";
import CallIcon from "@material-ui/icons/Call";

function Review() {
  const form = useSelector((state: any) => state.reducer.form);
  const formSubmit = (e: any) => {};
  const getIcon = (value: string) => {
    switch (value) {
      case "first-name":
        return <FaceIcon />;
      case "last-name":
        return <FaceIcon />;
      case "phone":
        return <CallIcon />;
      case "email":
        return <EmailIcon />;
      case "salary":
        return <MoneyIcon />;
    }
  };
  return (
    <fieldset className="form-fieldset">
      <div className="form-legend">Kindly review your input</div>
      <div className="form-review-container">
        {Object.keys(form).map((input, value) => (
          <div className="form-review-field" key={value}>
            <div className="form-review-icon">{getIcon(input)}</div>
            <div className="form-review-field-content">
              <div className="form-review-label">{input.replace("-", " ")}</div>
              <div className="form-review-value">{form[input].value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="form-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => formSubmit(e)}
        >
          Submit
        </Button>
        <span className="press-enter-span">or press enter</span>
      </div>
    </fieldset>
  );
}

export default Review;
