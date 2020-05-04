//------------------- STEP 1 - Name -------------------//
import React from "react";
import { useTranslation } from "react-i18next";
import './Fields.scss';

const Navigation: Function = React.lazy(() =>
  import("./navigation/Navigation")
);

const TextInput: Function = React.lazy(() =>
  import("../../../common/formelements/TextInput")
);

const Name:React.FC = () => {
  const { t } = useTranslation();
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">{t('Enter your name')}</legend>
      <div className="form-text-input-block">
        <TextInput
          id="first-name"
          type="text"
          placeholder={t('First Name')}
          pattern={nameRegex}
        ></TextInput>
        <TextInput
          id="last-name"
          type="text"
          placeholder={t('Last Name')}
          pattern={nameRegex}
        ></TextInput>
      </div>
      <Navigation next={1} field="name"/>
    </fieldset>
  );
}

export default Name;
