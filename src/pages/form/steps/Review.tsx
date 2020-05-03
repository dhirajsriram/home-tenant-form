import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import EmailIcon from "@material-ui/icons/Email";
import MoneyIcon from "@material-ui/icons/Money";
import CallIcon from "@material-ui/icons/Call";
import { SETSTEP } from "../../../store/constants/constants";
import { useTranslation } from "react-i18next";

function Review() {
  const form = useSelector((state: any) => state.reducer.form);
  const formSubmit = (e: any) => {};
  const {t} = useTranslation();
  const dispatch = useDispatch();
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
  const back = (e:any) => {
    dispatch({type : SETSTEP, payload: {step: 3}})
  }
  return (
    <fieldset className="form-fieldset">
      <div className="form-legend">{t('Kindly review your input')}</div>
      <div className="form-review-container">
        {Object.keys(form).map((input, value) => (
          <div className="form-review-field" key={value}>
            <div className="form-review-icon">{getIcon(input)}</div>
            <div className="form-review-field-content">
              <div className="form-review-label">{t((input.replace("-", " ").charAt(0).toUpperCase() + input.replace("-", " ").slice(1)))}</div>
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
          {t('next')}
        </Button>
        <Button variant="contained" color="primary" onClick={(e) => back(e)}>
          {t('back')}
        </Button>
      </div>
    </fieldset>
  );
}

export default Review;
