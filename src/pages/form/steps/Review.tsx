//------------------- STEP 5 - Review -------------------//
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import FaceIcon from "@material-ui/icons/Face";
import EmailIcon from "@material-ui/icons/Email";
import MoneyIcon from "@material-ui/icons/Money";
import CallIcon from "@material-ui/icons/Call";
import { useTranslation } from "react-i18next";
import "./Review.scss";

const Navigation: Function = React.lazy(() =>
  import("./navigation/Navigation")
);

const Review: React.FC = () => {
  const form: any = useSelector((state: any) => state.reducer.form);
  const { t } = useTranslation();
  const getIcon = (value: string): ReactElement => {
    // Logic to return the icon for the field labels
    switch (value) {
      case "first-name":
        return <FaceIcon />;
      case "last-name":
        return <FaceIcon />;
      case "phone":
        return <CallIcon />;
      case "email":
        return <EmailIcon />;
      case "salary":
        return <MoneyIcon />;
    }
    return <FaceIcon />;
  };

  const getCapital = (input: string): string => {
    return (
      input.replace("-", " ").charAt(0).toUpperCase() +
      input.replace("-", " ").slice(1)
    );
  };

  return (
    <fieldset className="form-fieldset">
      <div className="form-legend">{t("Kindly review your input")}</div>
      <div className="form-review-container">
        {/* Iteration for form fields from redux */}
        {Object.keys(form).map((input, value) => (
          <div className="form-review-field" key={value}>
            <div className="form-review-icon">{getIcon(input)}</div>
            <div className="form-review-field-content">
              <div className="form-review-label">
                {/* Logic to make the first character caps for translation  */}
                {t(getCapital(input))}
              </div>
              <div className="form-review-value">{form[input].value}</div>
            </div>
          </div>
        ))}
      </div>
      <Navigation next={5} previous={3} />
    </fieldset>
  );
};

export default Review;
