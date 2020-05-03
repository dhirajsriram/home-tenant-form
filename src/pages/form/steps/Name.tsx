import React from "react";
import TextInput from "../../../common/formelements/TextInput";
import { useTranslation } from "react-i18next";
import Navigation from "./navigation/Navigation";
import './Fields.scss';

function Name() {
  const { t } = useTranslation();

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
      <Navigation next={1} field="name"/>
    </fieldset>
  );
}

export default Name;
