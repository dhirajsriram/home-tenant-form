import React from "react";
import { useTranslation } from "react-i18next";
import "./../form/steps/Fields.scss";

const FourZeroFour: React.FC = () => {
  const { t } = useTranslation();
  return (
    <fieldset className="form-fieldset">
      <div className="submit-container">
        <div className="form-legend">
          {t("Oops, We were unable to find that")}
        </div>
        <div className="form-sub-legend">
          {t("Kindly use the home icon to reset the form")}
        </div>
      </div>
    </fieldset>
  );
};

export default FourZeroFour;
