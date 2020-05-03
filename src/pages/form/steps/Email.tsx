//------------------- STEP 2 - Email -------------------//
import React from "react";
import { useTranslation } from "react-i18next";
import "./Fields.scss";

const Navigation: Function = React.lazy(() =>
  import("./navigation/Navigation")
);

const TextInput: Function = React.lazy(() =>
  import("../../../common/formelements/TextInput")
);

const Email: React.FC = () => {
  const { t } = useTranslation();

  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">{t("Enter your Email Address")}</legend>
      <TextInput
        type="text"
        id="email"
        placeholder="Email"
        pattern={/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/}
      />
      <Navigation previous={0} next={2} field="email" />
    </fieldset>
  );
};

export default Email;
