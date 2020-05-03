//------------------- STEP 3 - Phone -------------------//
import React from "react";
import { useTranslation } from "react-i18next";
import './Fields.scss';

const Navigation: Function = React.lazy(() =>
  import("./navigation/Navigation")
);

const TextInput: Function = React.lazy(() =>
  import("../../../common/formelements/TextInput")
);

const Phone:React.FC = () => {
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
