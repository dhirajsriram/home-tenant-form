import React from "react";
import TextInput from "../../../common/formsElement/TextInput";
import { useTranslation } from "react-i18next";
import Navigation from "./navigation/Navigation";

function Phone() {
  const {t} = useTranslation();

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
      <Navigation next={3} previous={1} field="phone"/>
    </fieldset>
  );
}

export default Phone;
