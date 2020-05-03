import React from "react";
import TextInput from "../../../common/formelements/TextInput";
import { useTranslation } from "react-i18next";
import Navigation from "./navigation/Navigation";
import './Fields.scss';

function Email() {
  const { t } = useTranslation();

  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">{t('Enter your Email Address')}</legend>
      <TextInput type="text" id="email" placeholder="Email" pattern={/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/}/>
      <Navigation previous={0} next={2} field="email"/>
    </fieldset>
  );
}

export default Email;
