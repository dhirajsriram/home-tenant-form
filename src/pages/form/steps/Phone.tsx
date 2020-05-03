import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { SETSTEP } from "../../../store/constants/constants";
import TextInput from "../../../common/formsElement/TextInput";
import { useTranslation } from "react-i18next";

function Phone() {
  const dispatch = useDispatch();
  const form = useSelector((state: any) => state.reducer.form);
  const {t} = useTranslation();
  const phoneSubmit = (e: any) => {
    dispatch({ type: SETSTEP, payload: { step: 3 } });
  };
  const back = (e:any) => {
    dispatch({type : SETSTEP, payload: {step: 1}})
  }
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">{t('Enter your phone')}</legend>
      <TextInput
        type="number"
        id="phone"
        placeholder={t('Phone')}
        pattern={
          /^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:\s?\(\d+\))?(?:[-\s.]|\d)+$/
        }
      />
      <div className="form-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => phoneSubmit(e)}
          disabled={!form["phone"].valid}
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

export default Phone;
