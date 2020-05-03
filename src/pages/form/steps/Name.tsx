import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { SETSTEP } from "../../../store/constants/constants";
import TextInput from "../../../common/formsElement/TextInput";
import { useTranslation } from "react-i18next";

function Name() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const form = useSelector((state: any) => state.reducer.form);
  const nameSubmit = (e: any) => {
    dispatch({ type: SETSTEP, payload: { step: 1 } });
  };
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">{t('Enter your name')}</legend>
      <div className="form-text-input-block">
        <TextInput
          id="first-name"
          type="text"
          placeholder={t('First Name')}
          pattern={/^[a-zA-Z]+$/}
        ></TextInput>
        <TextInput
          id="last-name"
          type="text"
          placeholder={t('Last Name')}
          pattern={/^[a-zA-Z]+$/}
        ></TextInput>
      </div>
      <div className="form-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => nameSubmit(e)}
          disabled={!(form['first-name'].valid && form['last-name'].valid)}
        >
          {t('next')}
        </Button>
      </div>
    </fieldset>
  );
}

export default Name;
