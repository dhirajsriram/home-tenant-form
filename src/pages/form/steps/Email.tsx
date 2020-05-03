import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { SETSTEP } from "../../../store/constants/constants";
import TextInput from "../../../common/formsElement/TextInput";
import { useTranslation } from "react-i18next";

function Email() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const form = useSelector((state: any) => state.reducer.form);
  const emailSubmit = (e:any) => {
    dispatch({type : SETSTEP, payload: {step: 2}})
  }
  const back = (e:any) => {
    dispatch({type : SETSTEP, payload: {step: 0}})
  }
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">{t('Enter your Email Address')}</legend>
      <TextInput type="text" id="email" placeholder="Email" pattern={/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/}/>
      <div className="form-button-container">
      <Button variant="contained" color="primary" onClick={(e) => emailSubmit(e)} disabled={!(form['email'].valid)}>
      {t('next')}
      </Button>
      <Button variant="contained" color="primary" onClick={(e) => back(e)}>
      {t('back')}
      </Button>
      </div>
    </fieldset>
  );
}

export default Email;
