import React from "react";
import { useTranslation } from "react-i18next";
import "./Fields.scss";

function Submit() {
  const { t } = useTranslation();

  return (
    <fieldset className="form-fieldset">
      <div className="submit-container">
        <div className="form-legend">{t("Thank you for your submission")}</div>
        <div className="form-sub-legend">
          {t("We will reach back to you shortly with more information")}
        </div>
      </div>
      <div className="fireworks-container">
        <img src={require("../../../assets/images/fireworks.gif")} alt="fireworks" />
      </div>  
    </fieldset>
  );
}

export default Submit;
